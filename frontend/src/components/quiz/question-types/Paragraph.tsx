'use client'

import React from 'react';
import { Info } from 'lucide-react';
import { ImageUpload } from '../ImageUpload';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Divider } from '@/components/ui/Divider';

interface ParagraphProps {
  question: string;
  media?: File;
  minWords?: number;
  maxWords?: number;
  onQuestionChange: (question: string) => void;
  onMediaChange: (file: File | null) => void;
  onMinWordsChange: (min: number) => void;
  onMaxWordsChange: (max: number) => void;
}

export function Paragraph({
  question,
  media,
  minWords = 0,
  maxWords = 0,
  onQuestionChange,
  onMediaChange,
  onMinWordsChange,
  onMaxWordsChange,
}: ParagraphProps) {
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

      {/* Word Limits */}
      <div>
        <div className="flex items-center mb-4">
          <label className="text-[14px] font-medium text-[#101928] mr-2">Word Limits</label>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Info className="w-4 h-4 text-[#667185]" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Set minimum and maximum word limits for the answer (optional)</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-[14px] text-[#344054] mb-2">Minimum Words</label>
            <input
              type="number"
              min="0"
              value={minWords}
              onChange={(e) => onMinWordsChange(parseInt(e.target.value) || 0)}
              className="w-full px-3 py-2 border border-[#D0D5DD] rounded-xl text-[14px] placeholder:text-[#667185] hover:border-[#98A2B3] focus:outline-none focus:ring-1 focus:ring-[#06545E]"
              placeholder="Enter minimum words"
            />
          </div>
          <div>
            <label className="block text-[14px] text-[#344054] mb-2">Maximum Words</label>
            <input
              type="number"
              min="0"
              value={maxWords}
              onChange={(e) => onMaxWordsChange(parseInt(e.target.value) || 0)}
              className="w-full px-3 py-2 border border-[#D0D5DD] rounded-xl text-[14px] placeholder:text-[#667185] hover:border-[#98A2B3] focus:outline-none focus:ring-1 focus:ring-[#06545E]"
              placeholder="Enter maximum words"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 