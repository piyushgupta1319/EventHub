'use client';

import { Eye } from "lucide-react";

interface PreviewButtonProps {
  onClick: () => void;
}

export default function PreviewButton({
  onClick,
}: PreviewButtonProps) {
  return (
    <button
      onClick={onClick}
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
      hover:bg-slate-50
      transition
      "
    >
      <Eye size={18} />

      Preview

    </button>
  );
}