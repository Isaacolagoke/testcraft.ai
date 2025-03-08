'use client'

import React from 'react';
import { Plus, Trash2, Info } from 'lucide-react';
import { ImageUpload } from '../ImageUpload';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Divider } from '@/components/ui/Divider';

interface Option {
  id: string;
  text: string;
  isCorrect: boolean;
  media?: File;
}

interface MultipleChoiceProps {
  question: string;
  options: Option[];
  allowMultiple: boolean;
  media?: File;
  onQuestionChange: (question: string) => void;
  onMediaChange: (file: File | null) => void;
  onOptionAdd: () => void;
  onOptionRemove: (optionId: string) => void;
  onOptionChange: (optionId: string, text: string) => void;
  onOptionMediaChange: (optionId: string, file: File | null) => void;
  onOptionCorrectChange: (optionId: string, isCorrect: boolean) => void;
  onAllowMultipleChange: (allow: boolean) => void;
}

export function MultipleChoice({
  question,
  options,
  allowMultiple,
  media,
  onQuestionChange,
  onMediaChange,
  onOptionAdd,
  onOptionRemove,
  onOptionChange,
  onOptionMediaChange,
  onOptionCorrectChange,
  onAllowMultipleChange,
}: MultipleChoiceProps) {
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
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <label className="text-[14px] font-medium text-[#101928] mr-2">Options</label>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="w-4 h-4 text-[#667185]" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Add answer options for your question</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <label className="flex items-center text-[14px]">
            <input
              type="checkbox"
              checked={allowMultiple}
              onChange={(e) => onAllowMultipleChange(e.target.checked)}
              className="mr-2 h-4 w-4 text-[#06545E] border-[#D0D5DD] rounded focus:ring-[#06545E] focus:ring-offset-0"
            />
            Allow multiple answers
          </label>
        </div>

        <div className="space-y-3">
          {options.map((option, optIndex) => (
            <div key={option.id} className="border border-[#D0D5DD] rounded-xl p-4 space-y-4">
              <div className="flex gap-4 w-full">
                <div className="flex items-center justify-center h-7 w-7 rounded-full border border-[#D0D5DD] text-xs text-[#667185] bg-[#F9FAFB]">
                  {String(optIndex + 1).padStart(2, '0')}
                </div>
                <textarea
                  value={option.text}
                  onChange={(e) => onOptionChange(option.id, e.target.value)}
                  placeholder="Option text"
                  className="w-[70%] px-3 py-2 border border-[#D0D5DD] rounded-xl min-h-[88px] text-[14px] placeholder:text-[#667185] hover:border-[#98A2B3] focus:outline-none focus:ring-1 focus:ring-[#06545E]"
                />
                <div className="w-[30%]">
                  <ImageUpload 
                    onImageUpload={(file) => onOptionMediaChange(option.id, file)}
                  />
                </div>
                <button 
                  onClick={() => onOptionRemove(option.id)}
                  className="text-[#667185] hover:text-red-500 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center">
                <input
                  type={allowMultiple ? "checkbox" : "radio"}
                  name="correct-answer"
                  checked={option.isCorrect}
                  onChange={(e) => onOptionCorrectChange(option.id, e.target.checked)}
                  className="mr-2 h-4 w-4 text-[#06545E] border-[#D0D5DD] focus:ring-[#06545E] focus:ring-offset-0"
                />
                <span className="text-[14px] text-[#344054]">Mark as correct answer</span>
              </div>
            </div>
          ))}

          <button
            onClick={onOptionAdd}
            className="flex items-center text-[#06545E] hover:text-[#054851] transition-colors text-[14px] font-medium"
          >
            <Plus className="w-4 h-4 mr-1" />
            Add Option
          </button>
        </div>
      </div>
    </div>
  );
} 