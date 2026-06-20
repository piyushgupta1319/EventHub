import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import Facebook from "next-auth/providers/facebook";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import authConfig from "./auth.config";

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  
  adapter: PrismaAdapter(prisma as any),

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
      allowDangerousEmailAccountLinking: true,
    }),
    // Facebook({
    //   clientId: process.env.AUTH_FACEBOOK_ID!,
    //   clientSecret: process.env.AUTH_FACEBOOK_SECRET!,
    //   allowDangerousEmailAccountLinking: true,
    // }),
    Credentials({
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email as string,
          },
        });

        if (!user || !user.password) {
          return null;
        }

        const isPasswordCorrect = await bcrypt.compare(
          credentials.password as string,
          user.password
        );

        if (!isPasswordCorrect) {
          return null;
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        } as any;
      },
    }),
  ],

  pages: {
    signIn: "/auth/login",
  },

  callbacks: {
  async jwt({ token, user }) {
    if (user) {
      token.role = (user as any).role;
    }

    return token;
  },

  async session({ session, token }) {
    if (session.user) {
      (session.user as any).id = token.sub;
      (session.user as any).role = token.role;
    }

    return session;
  },

  async signIn() {
    return true;
  },
},
});