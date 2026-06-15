import {
  Award,
  Calendar,
  ShieldCheck,
} from "lucide-react";
import { auth } from "@/auth";
import { getUserCertificates } from "@/actions/registrationActions";
import CertificateCard from "@/components/certificate/CertificateCard";
import { redirect } from "next/navigation";

export default async function CertificatesPage() {
  // Get current user session
  const session = await auth();

  // Redirect to login if not authenticated
  if (!session?.user?.id) {
    redirect("/auth/login");
  }

  // Fetch user's certificates
  const certificates = await getUserCertificates(session.user.id);

  // Calculate total hours (approximate - 3 hours per event)
  const totalHours = certificates.length * 3;

  return (
    <div className="min-h-screen bg-slate-100">

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Hero */}

        <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-10 mb-10">

          <span className="
            inline-flex
            items-center
            gap-2
            bg-blue-50
            text-blue-700
            px-4
            py-2
            rounded-full
            text-sm
            font-semibold
          ">
            Certificates
          </span>

          <h1 className="text-5xl font-bold text-slate-900 mt-6">

            Achievements & Credentials

          </h1>

          <p className="text-slate-500 text-lg mt-5 max-w-3xl">

            View, verify and download certificates earned
            from workshops, events and training programs.

          </p>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">

            <Award
              size={28}
              className="text-blue-600 mb-5"
            />

            <h2 className="text-4xl font-bold text-slate-900">
              {certificates.length}
            </h2>

            <p className="text-slate-500 mt-2">
              Total Certificates
            </p>

          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">

            <Calendar
              size={28}
              className="text-green-600 mb-5"
            />

            <h2 className="text-4xl font-bold text-slate-900">
              {totalHours}
            </h2>

            <p className="text-slate-500 mt-2">
              Hours Completed
            </p>

          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">

            <ShieldCheck
              size={28}
              className="text-purple-600 mb-5"
            />

            <h2 className="text-4xl font-bold text-slate-900">
              100%
            </h2>

            <p className="text-slate-500 mt-2">
              Verified
            </p>

          </div>

        </div>

        {/* Certificate Cards */}

        {certificates.length > 0 ? (
          <div className="grid lg:grid-cols-2 gap-7">

            {certificates.map((certificate) => (

      <CertificateCard
      key={certificate.id}
      certificateId={certificate.certificateId}
      userName={certificate.userName}
      title={certificate.title}
      issuer={certificate.issuer}
      date={certificate.date}
    />

    ))}

          </div>
        ) : (
          <div className="bg-white border border-slate-200 rounded-3xl p-12 shadow-sm text-center">
            <Award size={48} className="mx-auto text-slate-300 mb-4" />
            <h3 className="text-xl font-semibold text-slate-600">No Certificates Yet</h3>
            <p className="text-slate-500 mt-2">Register for events to earn certificates</p>
          </div>
        )}

      </div>

    </div>
  );
}