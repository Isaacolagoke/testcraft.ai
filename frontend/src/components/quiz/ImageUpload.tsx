'use client'

import React, { useState, useRef } from "react";
import { X, Upload } from "lucide-react";
import Image from "next/image";

interface ImageUploadProps {
  onImageUpload: (file: File) => void;
  className?: string;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({ onImageUpload, className }) => {
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      onImageUpload(file);
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      onImageUpload(file);
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className={`h-full w-full ${className}`}>
      {preview ? (
        <div className="relative w-full h-full rounded-xl overflow-hidden border border-[#D0D5DD] border-dashed">
          <img src={preview} alt="Preview" className="w-full h-full object-cover" />
          <button 
            onClick={() => {
              setPreview(null);
              onImageUpload(null as any);
            }}
            className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md hover:bg-gray-50"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <div
          className="flex flex-col items-center justify-center w-full h-full min-h-[88px] gap-2 border border-[#D0D5DD] border-dashed rounded-xl bg-white hover:border-[#98A2B3] transition-colors cursor-pointer px-2 py-3"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onClick={handleClick}
        >
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileChange} 
            className="hidden" 
            accept="image/svg+xml,image/png,image/jpeg,image/gif"
          />
          <Upload className="w-6 h-6 text-[#667185]" />
          <span className="text-[12px] text-[#667185] text-center">Add Media</span>
        </div>
      )}
    </div>
  );
} 