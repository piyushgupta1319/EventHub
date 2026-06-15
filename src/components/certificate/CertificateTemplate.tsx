'use client';

import { Award } from "lucide-react";
import { QRCodeCanvas } from "qrcode.react";

interface Props {
  certificate: {
    certificateId: string;
    userName: string;
    title: string;
    issuer: string;
    date: string;
  };
}

export default function CertificateTemplate({
  certificate,
}: Props) {

  return (
    <div
      className="
      relative
      w-[1000px]
      h-[700px]
      bg-white
      rounded-[28px]
      overflow-hidden
      border-2
      border-yellow-400
      "
    >

      {/* Top Right */}
      <div className="absolute top-0 right-0">

        <div className="w-28 h-28 bg-[#063a52] rotate-45 translate-x-14 -translate-y-14"></div>

        <div className="w-20 h-20 bg-yellow-400 rotate-45 absolute top-8 right-8"></div>

      </div>

      {/* Bottom Left */}
      <div className="absolute bottom-0 left-0">

        <div className="w-28 h-28 bg-[#063a52] rotate-45 -translate-x-14 translate-y-14"></div>

        <div className="w-20 h-20 bg-yellow-400 rotate-45 absolute bottom-8 left-8"></div>

      </div>

      {/* Main */}

      {/* Watermark */}

<div className="absolute inset-0 flex justify-center items-center pointer-events-none">

  <h1
    className="
    text-[160px]
    font-bold
    text-slate-100
    opacity-30
    rotate-[-25deg]
    "
  >
    EventHub
  </h1>

</div>

      <div className="flex flex-col justify-center items-center text-center h-full px-24">

        <p className="uppercase tracking-[10px] text-slate-400 text-sm mb-8">

          Certificate of Achievement

        </p>

        <p className="text-slate-400 text-sm">

          Certificate ID: {certificate.certificateId}

        </p>

        <h1 className="text-5xl font-bold text-[#0b2341] mt-6 mb-10">

          {certificate.title}

        </h1>

        <p className="text-2xl text-slate-500">

          This certificate is proudly presented to

        </p>

        <h2 className="text-7xl font-serif text-[#0b2341] mt-8">

          {certificate.userName}

        </h2>

        <div className="flex items-center gap-4 mt-6">

          <div className="w-20 h-[2px] bg-yellow-500"></div>

          <div className="w-3 h-3 bg-yellow-500 rotate-45"></div>

          <div className="w-20 h-[2px] bg-yellow-500"></div>

        </div>

        <p className="text-xl text-slate-600 mt-10 leading-10 max-w-4xl">

          for successfully completing the programme and demonstrating
          exceptional skills and knowledge.

        </p>

        {/* Bottom Section */}
        <div className="grid grid-cols-4 w-full mt-20 items-end">

          {/* Verification Box */}
          <div className="flex flex-col items-center">

            <QRCodeCanvas
  value={`http://localhost:3000/verify/${certificate.certificateId}`}
  size={80}
/>

            <p className="text-xs text-slate-500 mt-3">

              Verify Certificate

            </p>

          </div>

          {/* Signature */}
          <div className="text-center">

            <div className="text-3xl italic font-serif text-[#0b2341]">

              {certificate.userName}

            </div>

            <div className="w-48 h-[2px] bg-slate-400 mx-auto mt-2"></div>

            <h3 className="font-bold text-[#0b2341] mt-4">

              Event Director

            </h3>

            <p className="text-slate-500">

              EventHub

            </p>

          </div>

          {/* Seal */}
          <div className="flex justify-center">

            <div className="relative">

              <div className="w-24 h-24 rounded-full bg-yellow-400"></div>

              <div className="absolute top-2 left-2 w-20 h-20 rounded-full bg-[#082b55] flex items-center justify-center">

                <Award
 size={42}
 strokeWidth={2.5}
 className="text-yellow-400"
/>

              </div>

              <div className="absolute left-6 top-20 w-4 h-10 bg-[#082b55]"></div>

              <div className="absolute left-14 top-20 w-4 h-10 bg-[#082b55]"></div>

            </div>

          </div>

          {/* Date */}
          <div className="text-center">

            <h2 className="text-2xl font-bold text-[#0b2341]">

              {certificate.date}

            </h2>

            <div className="w-48 h-[2px] bg-slate-400 mx-auto mt-2"></div>

            <p className="text-slate-500 mt-4">

              Date Issued

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}