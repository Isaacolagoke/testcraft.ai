'use client'

import React from 'react';
import { Info, X } from 'lucide-react';
import { ImageUpload } from '../ImageUpload';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Divider } from '@/components/ui/Divider';

interface FileType {
  extension: string;
  maxSize: number; // in MB
}

interface FileUploadQuestionProps {
  question: string;
  media?: File;
  allowedTypes: FileType[];
  maxFiles: number;
  onQuestionChange: (question: string) => void;
  onMediaChange: (file: File | null) => void;
  onAllowedTypeAdd: (type: FileType) => void;
  onAllowedTypeRemove: (index: number) => void;
  onAllowedTypeChange: (index: number, type: FileType) => void;
  onMaxFilesChange: (max: number) => void;
}

export function FileUploadQuestion({
  question,
  media,
  allowedTypes,
  maxFiles,
  onQuestionChange,
  onMediaChange,
  onAllowedTypeAdd,
  onAllowedTypeRemove,
  onAllowedTypeChange,
  onMaxFilesChange,
}: FileUploadQuestionProps) {
  return (
    <div className="space-y-6">
      {/* Question Text and Media */}
      <div className="flex gap-4 w-full">
        <textarea
          value={question}
          onChange={(e) => onQuestionChange(e.target.value)}
          placeholder="Enter your question here"
          className="w-[70%] px-3 py-2 border border-[#D0D5DD] rounded-xl min-h-[88px] text-[14px] placeholder:text-[#667185] hover:border-[#98A2B3] focus:outline-none focus:ring-1 focus:ring-[#06545E]"
        />
        <div className="w-[30%]">
          <ImageUpload 
            onImageUpload={onMediaChange}
          />
        </div>
      </div>

      <Divider className="my-6" />

      {/* File Upload Settings */}
      <div>
        <div className="flex items-center mb-4">
          <label className="text-[14px] font-medium text-[#101928] mr-2">File Upload Settings</label>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Info className="w-4 h-4 text-[#667185]" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Configure file upload requirements</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="space-y-4">
          {/* Maximum Files */}
          <div>
            <label className="block text-[14px] text-[#344054] mb-2">Maximum Number of Files</label>
            <input
              type="number"
              min="1"
              value={maxFiles}
              onChange={(e) => onMaxFilesChange(parseInt(e.target.value) || 1)}
              className="w-full px-3 py-2 border border-[#D0D5DD] rounded-xl text-[14px] placeholder:text-[#667185] hover:border-[#98A2B3] focus:outline-none focus:ring-1 focus:ring-[#06545E]"
              placeholder="Enter maximum number of files"
            />
          </div>

          {/* Allowed File Types */}
          <div>
            <label className="block text-[14px] text-[#344054] mb-2">Allowed File Types</label>
            <div className="space-y-2">
              {allowedTypes.map((type, index) => (
                <div key={index} className="flex gap-4">
                  <input
                    type="text"
                    value={type.extension}
                    onChange={(e) => onAllowedTypeChange(index, { ...type, extension: e.target.value })}
                    className="flex-1 px-3 py-2 border border-[#D0D5DD] rounded-xl text-[14px] placeholder:text-[#667185] hover:border-[#98A2B3] focus:outline-none focus:ring-1 focus:ring-[#06545E]"
                    placeholder="File extension (e.g., .pdf, .doc)"
                  />
                  <input
                    type="number"
                    min="1"
                    value={type.maxSize}
                    onChange={(e) => onAllowedTypeChange(index, { ...type, maxSize: parseInt(e.target.value) || 1 })}
                    className="w-32 px-3 py-2 border border-[#D0D5DD] rounded-xl text-[14px] placeholder:text-[#667185] hover:border-[#98A2B3] focus:outline-none focus:ring-1 focus:ring-[#06545E]"
                    placeholder="Max size (MB)"
                  />
                  <button 
                    onClick={() => onAllowedTypeRemove(index)}
                    className="text-[#667185] hover:text-red-500 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
              <button
                onClick={() => onAllowedTypeAdd({ extension: '', maxSize: 1 })}
                className="flex items-center text-[#06545E] hover:text-[#054851] transition-colors text-[14px] font-medium"
              >
                Add File Type
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 