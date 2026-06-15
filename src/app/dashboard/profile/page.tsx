import { auth } from "@/auth";
import { redirect } from "next/navigation";
import {
  User,
  Mail,
  Calendar,
  Award,
  CheckCircle,
} from "lucide-react";
import { prisma } from "@/lib/prisma";

export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/auth/login");
  }

  const user = session.user;
  const registeredEvents = await prisma.registration.count({
  where: {
    userId: user.id,
  },
});
  return (
    <div className="min-h-screen bg-slate-100">

      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Hero */}

        <div className="bg-slate-900 rounded-3xl text-white px-10 py-12 shadow-xl mb-10">

          <h1 className="text-5xl font-bold mb-3">
  {user.name}
</h1>

<p className="text-slate-300 text-lg">
  {user.role}
</p>

        </div>

        {/* Profile Card */}

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Left */}

          <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-8">

            <div className="w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center mb-6">

              <User
                size={40}
                className="text-slate-700"
              />

            </div>

            <h2 className="text-2xl font-bold text-slate-900">
  {user.name}
</h2>

<p className="text-slate-500 mt-2">
  {user.role}
</p>

            <div className="space-y-5 mt-8">

              <div className="flex gap-3 items-center text-slate-600">

                <Mail size={18} />

                {user.email}

              </div>

              <div className="flex gap-3 items-center text-slate-600">

                <Calendar size={18} />

                Joined June 2026

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="lg:col-span-2 space-y-8">

            {/* Stats */}

            <div className="grid md:grid-cols-3 gap-6">

              <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-8">

                <h3 className="text-slate-500 mb-3">
                  Registered Events
                </h3>

                <p className="text-4xl font-bold text-slate-900">
  {registeredEvents}
</p>

              </div>

              <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-8">

                <h3 className="text-slate-500 mb-3">
                  Certificates
                </h3>

                <p className="text-4xl font-bold text-slate-900">
                  5
                </p>

              </div>

              <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-8">

                <h3 className="text-slate-500 mb-3">
                  Points
                </h3>

                <p className="text-4xl font-bold text-slate-900">
                  2450
                </p>

              </div>

            </div>

            {/* Achievements */}

            <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-8">

              <h2 className="text-2xl font-bold text-slate-900 mb-8">

                Recent Achievements

              </h2>

              <div className="space-y-6">

                <div className="flex gap-4">

                  <Award
                    size={22}
                    className="text-purple-600"
                  />

                  <div>

                    <h3 className="font-semibold text-slate-900">

                      Web Development Certificate

                    </h3>

                    <p className="text-slate-500">

                      Earned last week

                    </p>

                  </div>

                </div>

                <div className="flex gap-4">

                  <CheckCircle
                    size={22}
                    className="text-green-600"
                  />

                  <div>

                    <h3 className="font-semibold text-slate-900">

                      12 Events Completed

                    </h3>

                    <p className="text-slate-500">

                      Great progress

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
} 