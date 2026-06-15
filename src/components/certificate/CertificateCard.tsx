'use client';

import { useState } from "react";
import { Calendar } from "lucide-react";
import PreviewButton from "./PreviewButton";
// import DownloadButton from "./DownloadButton";
import CertificateModal from "./CertificateModal";

interface CertificateCardProps {
  certificateId: string;
  userName: string;
  title: string;
  issuer: string;
  date: string;
}

export default function CertificateCard({
  certificateId,
  userName,
  title,
  issuer,
  date,
}: CertificateCardProps) {

  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="
        bg-white
        border
        border-slate-200
        rounded-3xl
        p-8
        shadow-sm
        hover:shadow-lg
        transition
        "
      >

        <div className="flex justify-between items-start">

          <div>

            <h2 className="text-2xl font-bold text-slate-900">
              {title}
            </h2>

            <p className="text-slate-500 mt-3">
              {issuer}
            </p>

            <div className="flex items-center gap-2 mt-5 text-slate-500">
              <Calendar size={16} />
              {date}
            </div>

            {/* Certificate ID */}
            <p className="mt-4 text-sm text-slate-400">
              Certificate ID: {certificateId}
            </p>

          </div>

          <div
            className="
            bg-green-50
            text-green-700
            px-3
            py-1
            rounded-full
            text-sm
            font-semibold
            "
          >
            Verified
          </div>

        </div>

        <div className="flex gap-4 mt-8">

  <button
    onClick={() => setOpen(true)}
    className="
    flex-1
    border
    border-slate-200
    rounded-xl
    py-3
    flex
    items-center
    justify-center
    gap-2
    font-medium
    hover:bg-slate-50
    transition
    "
  >

    Preview & Download

  </button>

</div>

      </div>

      <CertificateModal
        isOpen={open}
        onClose={() => setOpen(false)}
        certificate={{
          certificateId,
          userName,
          title,
          issuer,
          date,
        }}
      />

    </>
  );
}