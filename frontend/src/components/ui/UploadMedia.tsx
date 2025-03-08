"use client";

import { Image } from "lucide-react";

interface UploadMediaProps {
  onUpload: (file: File) => void;
  className?: string;
}

export function UploadMedia({ onUpload, className = "" }: UploadMediaProps) {
  return (
    <div className={`border border-dashed border-[#D0D5DD] rounded-xl p-4 hover:border-[#98A2B3] transition-colors cursor-pointer ${className}`}>
      <div className="flex flex-col items-center justify-center">
        <Image className="w-5 h-5 text-[#667185] mb-1" />
        <span className="text-[14px] text-[#667185]">Add Media Files</span>
      </div>
    </div>
  );
} 