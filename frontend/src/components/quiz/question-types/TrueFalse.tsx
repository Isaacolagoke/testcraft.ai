'use client'

import React from 'react';
import { Info } from 'lucide-react';
import { ImageUpload } from '../ImageUpload';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Divider } from '@/components/ui/Divider';

interface TrueFalseProps {
  question: string;
  correctAnswer: boolean;
  media?: File;
  onQuestionChange: (question: string) => void;
  onMediaChange: (file: File | null) => void;
  onCorrectAnswerChange: (isTrue: boolean) => void;
}

export function TrueFalse({
  question,
  correctAnswer,
  media,
  onQuestionChange,
  onMediaChange,
  onCorrectAnswerChange,
}: TrueFalseProps) {
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

      {/* Options */}
      <div>
        <div className="flex items-center mb-4">
          <label className="text-[14px] font-medium text-[#101928] mr-2">Options</label>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Info className="w-4 h-4 text-[#667185]" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Select the correct answer</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="space-y-3">
          <div className="border border-[#D0D5DD] rounded-xl p-4">
            <div className="flex items-center">
              <input
                type="radio"
                name="true-false"
                checked={correctAnswer === true}
                onChange={() => onCorrectAnswerChange(true)}
                className="mr-2 h-4 w-4 text-[#06545E] border-[#D0D5DD] focus:ring-[#06545E] focus:ring-offset-0"
              />
              <span className="text-[14px] text-[#344054]">True</span>
            </div>
          </div>

          <div className="border border-[#D0D5DD] rounded-xl p-4">
            <div className="flex items-center">
              <input
                type="radio"
                name="true-false"
                checked={correctAnswer === false}
                onChange={() => onCorrectAnswerChange(false)}
                className="mr-2 h-4 w-4 text-[#06545E] border-[#D0D5DD] focus:ring-[#06545E] focus:ring-offset-0"
              />
              <span className="text-[14px] text-[#344054]">False</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 