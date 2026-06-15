'use client';

import { useRef } from "react";
import { X } from "lucide-react";
import { useReactToPrint } from "react-to-print";
import CertificateTemplate from "./CertificateTemplate";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  certificate?: {
    certificateId: string;
    userName: string;
    title: string;
    issuer: string;
    date: string;
  };
}

export default function CertificateModal({
  isOpen,
  onClose,
  certificate,
}: Props) {

  const certificateRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
  contentRef: certificateRef,
  documentTitle: certificate?.title || "Certificate",
});

  if (!isOpen || !certificate) return null;


  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex justify-center items-center z-50 p-8 no-print:bg-transparent">

      <div className="relative bg-white rounded-[32px] shadow-2xl p-8">

        {/* Download Button */}
        <button
  onClick={handlePrint}
  className="
  no-print
  absolute left-8 top-8 z-50
  bg-[#0b2341]
  text-white
  px-5 py-3
  rounded-xl
  font-semibold
  hover:bg-slate-900
  transition
  "
>
          Download PDF
        </button>

        {/* Close Button */}
        <button
  onClick={onClose}
  className="
  no-print
  absolute right-8 top-8 z-50
  text-slate-500
  hover:text-black
  "
>
          <X size={30} />
        </button>

        <div
  ref={certificateRef}
  className="print-container"
>

  <CertificateTemplate
    certificate={certificate}
  />

</div>

      </div>

    </div>
  );
}

