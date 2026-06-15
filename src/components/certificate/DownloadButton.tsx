'use client';

import { PDFDownloadLink } from "@react-pdf/renderer";
import { Download } from "lucide-react";
import CertificatePDF from "./CertificatePDF";

interface Props {
  title: string;
  date: string;
}

export default function DownloadButton({
  title,
  date,
}: Props) {

  return (
    <PDFDownloadLink
      document={
        <CertificatePDF
          title={title}
          date={date}
        />
      }
      fileName={`${title}.pdf`}
    >
      <button
        className="
        flex-1
        bg-slate-900
        text-white
        rounded-xl
        py-3
        flex
        items-center
        justify-center
        gap-2
        font-medium
        hover:bg-slate-800
        transition
        "
      >
        <Download size={18} />

        Download

      </button>

    </PDFDownloadLink>
  );
}