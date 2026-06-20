import Credentials from "next-auth/providers/credentials";

export default {
  providers: [
    Credentials({
      credentials: {},
      async authorize() {
        return null;
      },
    }),
  ],

  pages: {
    signIn: "/auth/login",
  },
};