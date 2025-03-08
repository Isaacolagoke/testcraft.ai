'use client'

import React from 'react';
import { Info, Plus, Trash2 } from 'lucide-react';
import { ImageUpload } from '../ImageUpload';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Divider } from '@/components/ui/Divider';

interface Blank {
  id: string;
  answer: string;
  alternatives: string[];
}

interface FillInBlanksProps {
  question: string;
  blanks: Blank[];
  media?: File;
  onQuestionChange: (question: string) => void;
  onMediaChange: (file: File | null) => void;
  onBlankAdd: () => void;
  onBlankRemove: (blankId: string) => void;
  onBlankAnswerChange: (blankId: string, answer: string) => void;
  onBlankAlternativeAdd: (blankId: string) => void;
  onBlankAlternativeRemove: (blankId: string, index: number) => void;
  onBlankAlternativeChange: (blankId: string, index: number, value: string) => void;
}

export function FillInBlanks({
  question,
  blanks,
  media,
  onQuestionChange,
  onMediaChange,
  onBlankAdd,
  onBlankRemove,
  onBlankAnswerChange,
  onBlankAlternativeAdd,
  onBlankAlternativeRemove,
  onBlankAlternativeChange,
}: FillInBlanksProps) {
  return (
    <div className="space-y-6">
      {/* Question Text and Media */}
      <div className="flex gap-4 w-full">
        <textarea
          value={question}
          onChange={(e) => onQuestionChange(e.target.value)}
          placeholder="Enter your question here. Use ___ to indicate blanks"
          className="w-[70%] px-3 py-2 border border-[#D0D5DD] rounded-xl min-h-[88px] text-[14px] placeholder:text-[#667185] hover:border-[#98A2B3] focus:outline-none focus:ring-1 focus:ring-[#06545E]"
        />
        <div className="w-[30%]">
          <ImageUpload 
            onImageUpload={onMediaChange}
          />
        </div>
      </div>

      <Divider className="my-6" />

      {/* Blanks */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <label className="text-[14px] font-medium text-[#101928] mr-2">Answers</label>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="w-4 h-4 text-[#667185]" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Add answers for each blank in your question</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        <div className="space-y-4">
          {blanks.map((blank, blankIndex) => (
            <div key={blank.id} className="border border-[#D0D5DD] rounded-xl p-4 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center h-7 w-7 rounded-full border border-[#D0D5DD] text-xs text-[#667185] bg-[#F9FAFB]">
                    {String(blankIndex + 1).padStart(2, '0')}
                  </div>
                  <span className="text-[14px] font-medium text-[#101928]">Blank {blankIndex + 1}</span>
                </div>
                <button 
                  onClick={() => onBlankRemove(blank.id)}
                  className="text-[#667185] hover:text-red-500 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              {/* Correct Answer */}
              <div>
                <label className="block text-[14px] text-[#344054] mb-2">Correct Answer</label>
                <input
                  type="text"
                  value={blank.answer}
                  onChange={(e) => onBlankAnswerChange(blank.id, e.target.value)}
                  className="w-full px-3 py-2 border border-[#D0D5DD] rounded-xl text-[14px] placeholder:text-[#667185] hover:border-[#98A2B3] focus:outline-none focus:ring-1 focus:ring-[#06545E]"
                  placeholder="Enter the correct answer"
                />
              </div>

              {/* Alternative Answers */}
              <div>
                <label className="block text-[14px] text-[#344054] mb-2">Alternative Answers (Optional)</label>
                <div className="space-y-2">
                  {blank.alternatives.map((alt, index) => (
                    <div key={index} className="flex gap-2">
                      <input
                        type="text"
                        value={alt}
                        onChange={(e) => onBlankAlternativeChange(blank.id, index, e.target.value)}
                        className="flex-1 px-3 py-2 border border-[#D0D5DD] rounded-xl text-[14px] placeholder:text-[#667185] hover:border-[#98A2B3] focus:outline-none focus:ring-1 focus:ring-[#06545E]"
                        placeholder="Enter an alternative answer"
                      />
                      <button 
                        onClick={() => onBlankAlternativeRemove(blank.id, index)}
                        className="text-[#667185] hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={() => onBlankAlternativeAdd(blank.id)}
                    className="flex items-center text-[#06545E] hover:text-[#054851] transition-colors text-[14px] font-medium"
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Add Alternative
                  </button>
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={onBlankAdd}
            className="flex items-center text-[#06545E] hover:text-[#054851] transition-colors text-[14px] font-medium"
          >
            <Plus className="w-4 h-4 mr-1" />
            Add Blank
          </button>
        </div>
      </div>
    </div>
  );
} 