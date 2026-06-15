import {
  CheckCircle,
  Calendar,
  Award,
  User,
  Building,
} from "lucide-react";
import QRCode from "react-qr-code";
import CertificateTemplate from "@/components/certificate/CertificateTemplate";

export default async function VerifyCertificatePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = await params;

  const certificates = [
    {
      certificateId: "EH-2026-0001",
      userName: "Piyush Gupta",
      title: "Web Development Bootcamp",
      issuer: "IT Department",
      date: "20 May 2026",
    },
    {
      certificateId: "EH-2026-0002",
      userName: "Piyush Gupta",
      title: "Advanced Python Programming",
      issuer: "Programming Club",
      date: "10 May 2026",
    },
    {
      certificateId: "EH-2026-0003",
      userName: "Piyush Gupta",
      title: "UI/UX Design Workshop",
      issuer: "Design Club",
      date: "25 April 2026",
    },
    {
      certificateId: "EH-2026-0004",
      userName: "Piyush Gupta",
      title: "Digital Marketing Essentials",
      issuer: "Marketing Club",
      date: "15 April 2026",
    },
    {
      certificateId: "EH-2026-0005",
      userName: "Piyush Gupta",
      title: "Cloud Computing Basics",
      issuer: "Tech Club",
      date: "1 April 2026",
    },
  ];

  const certificate = certificates.find(
    (c) => c.certificateId === id
  );

  if (!certificate) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-slate-100">

        <div className="bg-white p-10 rounded-3xl shadow-xl text-center">

          <h1 className="text-4xl font-bold text-red-600 mb-5">
            Invalid Certificate
          </h1>

          <p className="text-slate-500">
            No certificate found.
          </p>

        </div>

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="bg-white rounded-3xl shadow-xl p-12">

          {/* Verified */}

          <div className="flex flex-col items-center">

            <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center">

              <CheckCircle
                size={55}
                className="text-green-600"
              />

            </div>

            <h1 className="text-5xl font-bold text-slate-900 mt-8">

              Certificate Verified

            </h1>

            <p className="text-slate-500 mt-4">

              This certificate is authentic and issued by EventHub.

            </p>

            <p className="text-sm text-slate-400 mt-5">

              Verified on {new Date().toLocaleDateString()}

            </p>

          </div>

          {/* Details */}

          <div className="grid md:grid-cols-2 gap-8 mt-16">

            <div className="bg-slate-50 rounded-2xl p-6">

              <div className="flex gap-3 items-center mb-3">

                <User className="text-blue-600" />

                <h2 className="font-bold text-slate-900">

                  Candidate

                </h2>

              </div>

              <p className="text-slate-600">

                {certificate.userName}

              </p>

            </div>

            <div className="bg-slate-50 rounded-2xl p-6">

              <div className="flex gap-3 items-center mb-3">

                <Award className="text-purple-600" />

                <h2 className="font-bold text-slate-900">

                  Course

                </h2>

              </div>

              <p className="text-slate-600">

                {certificate.title}

              </p>

            </div>

            <div className="bg-slate-50 rounded-2xl p-6">

              <div className="flex gap-3 items-center mb-3">

                <Building className="text-orange-600" />

                <h2 className="font-bold text-slate-900">

                  Issued By

                </h2>

              </div>

              <p className="text-slate-600">

                {certificate.issuer}

              </p>

            </div>

            <div className="bg-slate-50 rounded-2xl p-6">

              <div className="flex gap-3 items-center mb-3">

                <Calendar className="text-green-600" />

                <h2 className="font-bold text-slate-900">

                  Date Issued

                </h2>

              </div>

              <p className="text-slate-600">

                {certificate.date}

              </p>

            </div>

          </div>

          {/* Certificate ID */}

          <div className="mt-14 bg-slate-900 rounded-2xl p-6 text-center">

            <p className="text-slate-400">

              Certificate ID

            </p>

            <h2 className="text-3xl font-bold text-white mt-3">

              {certificate.certificateId}

            </h2>

          </div>

          {/* QR */}

          <div className="mt-14 flex justify-center">

            <div
              className="
              bg-white
              rounded-3xl
              border
              border-slate-200
              shadow-sm
              p-8
              flex
              flex-col
              items-center
              justify-center
              w-[260px]
              "
            >

              <QRCode
                size={130}
                value={`http://localhost:3000/verify/${certificate.certificateId}`}
              />

              <p className="text-slate-500 text-sm mt-5">

                Scan to verify certificate

              </p>

            </div>

          </div>

          {/* Certificate Preview */}

          <div className="mt-20">

            <h2 className="text-3xl font-bold text-slate-900 mb-8">

              Certificate Preview

            </h2>

            <div className="overflow-x-auto">

              <div className="flex justify-center">

                <div className="scale-[0.65] origin-top">

                  <CertificateTemplate
                    certificate={certificate}
                  />

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
