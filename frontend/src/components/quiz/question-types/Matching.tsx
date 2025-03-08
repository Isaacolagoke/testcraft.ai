'use client'

import React from 'react';
import { Info, Plus, Trash2 } from 'lucide-react';
import { ImageUpload } from '../ImageUpload';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Divider } from '@/components/ui/Divider';

interface MatchingPair {
  id: string;
  left: {
    text: string;
    media?: File;
  };
  right: {
    text: string;
    media?: File;
  };
}

interface MatchingProps {
  question: string;
  pairs: MatchingPair[];
  media?: File;
  onQuestionChange: (question: string) => void;
  onMediaChange: (file: File | null) => void;
  onPairAdd: () => void;
  onPairRemove: (pairId: string) => void;
  onPairLeftChange: (pairId: string, text: string) => void;
  onPairRightChange: (pairId: string, text: string) => void;
  onPairLeftMediaChange: (pairId: string, file: File | null) => void;
  onPairRightMediaChange: (pairId: string, file: File | null) => void;
}

export function Matching({
  question,
  pairs,
  media,
  onQuestionChange,
  onMediaChange,
  onPairAdd,
  onPairRemove,
  onPairLeftChange,
  onPairRightChange,
  onPairLeftMediaChange,
  onPairRightMediaChange,
}: MatchingProps) {
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

      {/* Matching Pairs */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <label className="text-[14px] font-medium text-[#101928] mr-2">Matching Pairs</label>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="w-4 h-4 text-[#667185]" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Add matching pairs for students to connect</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        <div className="space-y-4">
          {pairs.map((pair, pairIndex) => (
            <div key={pair.id} className="border border-[#D0D5DD] rounded-xl p-4 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center h-7 w-7 rounded-full border border-[#D0D5DD] text-xs text-[#667185] bg-[#F9FAFB]">
                    {String(pairIndex + 1).padStart(2, '0')}
                  </div>
                  <span className="text-[14px] font-medium text-[#101928]">Pair {pairIndex + 1}</span>
                </div>
                <button 
                  onClick={() => onPairRemove(pair.id)}
                  className="text-[#667185] hover:text-red-500 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Left Side */}
                <div>
                  <label className="block text-[14px] text-[#344054] mb-2">Left Item</label>
                  <div className="space-y-2">
                    <textarea
                      value={pair.left.text}
                      onChange={(e) => onPairLeftChange(pair.id, e.target.value)}
                      placeholder="Enter text for left item"
                      className="w-full px-3 py-2 border border-[#D0D5DD] rounded-xl min-h-[88px] text-[14px] placeholder:text-[#667185] hover:border-[#98A2B3] focus:outline-none focus:ring-1 focus:ring-[#06545E]"
                    />
                    <ImageUpload 
                      onImageUpload={(file) => onPairLeftMediaChange(pair.id, file)}
                    />
                  </div>
                </div>

                {/* Right Side */}
                <div>
                  <label className="block text-[14px] text-[#344054] mb-2">Right Item</label>
                  <div className="space-y-2">
                    <textarea
                      value={pair.right.text}
                      onChange={(e) => onPairRightChange(pair.id, e.target.value)}
                      placeholder="Enter text for right item"
                      className="w-full px-3 py-2 border border-[#D0D5DD] rounded-xl min-h-[88px] text-[14px] placeholder:text-[#667185] hover:border-[#98A2B3] focus:outline-none focus:ring-1 focus:ring-[#06545E]"
                    />
                    <ImageUpload 
                      onImageUpload={(file) => onPairRightMediaChange(pair.id, file)}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={onPairAdd}
            className="flex items-center text-[#06545E] hover:text-[#054851] transition-colors text-[14px] font-medium"
          >
            <Plus className="w-4 h-4 mr-1" />
            Add Matching Pair
          </button>
        </div>
      </div>
    </div>
  );
} 