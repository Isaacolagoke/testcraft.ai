'use client'

import React from 'react';
import { Info, Plus, Trash2 } from 'lucide-react';
import { ImageUpload } from '../ImageUpload';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Divider } from '@/components/ui/Divider';

interface ShortAnswerProps {
  question: string;
  correctAnswer: string;
  alternatives: string[];
  media?: File;
  onQuestionChange: (question: string) => void;
  onMediaChange: (file: File | null) => void;
  onCorrectAnswerChange: (answer: string) => void;
  onAlternativeAdd: () => void;
  onAlternativeRemove: (index: number) => void;
  onAlternativeChange: (index: number, value: string) => void;
}

export function ShortAnswer({
  question,
  correctAnswer,
  alternatives,
  media,
  onQuestionChange,
  onMediaChange,
  onCorrectAnswerChange,
  onAlternativeAdd,
  onAlternativeRemove,
  onAlternativeChange,
}: ShortAnswerProps) {
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

      {/* Answer */}
      <div>
        <div className="flex items-center mb-4">
          <label className="text-[14px] font-medium text-[#101928] mr-2">Answer</label>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Info className="w-4 h-4 text-[#667185]" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Add the correct answer and any acceptable alternatives</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="space-y-4">
          {/* Correct Answer */}
          <div>
            <label className="block text-[14px] text-[#344054] mb-2">Correct Answer</label>
            <input
              type="text"
              value={correctAnswer}
              onChange={(e) => onCorrectAnswerChange(e.target.value)}
              className="w-full px-3 py-2 border border-[#D0D5DD] rounded-xl text-[14px] placeholder:text-[#667185] hover:border-[#98A2B3] focus:outline-none focus:ring-1 focus:ring-[#06545E]"
              placeholder="Enter the correct answer"
            />
          </div>

          {/* Alternative Answers */}
          <div>
            <label className="block text-[14px] text-[#344054] mb-2">Alternative Answers (Optional)</label>
            <div className="space-y-2">
              {alternatives.map((alt, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={alt}
                    onChange={(e) => onAlternativeChange(index, e.target.value)}
                    className="flex-1 px-3 py-2 border border-[#D0D5DD] rounded-xl text-[14px] placeholder:text-[#667185] hover:border-[#98A2B3] focus:outline-none focus:ring-1 focus:ring-[#06545E]"
                    placeholder="Enter an alternative answer"
                  />
                  <button 
                    onClick={() => onAlternativeRemove(index)}
                    className="text-[#667185] hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
              <button
                onClick={onAlternativeAdd}
                className="flex items-center text-[#06545E] hover:text-[#054851] transition-colors text-[14px] font-medium"
              >
                <Plus className="w-4 h-4 mr-1" />
                Add Alternative
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 