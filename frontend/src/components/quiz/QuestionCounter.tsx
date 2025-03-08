'use client'

import React from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

interface QuestionCounterProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export const QuestionCounter: React.FC<QuestionCounterProps> = ({ value, onChange, error }) => {
  const handleIncrement = () => {
    const currentValue = parseInt(value) || 0;
    onChange((currentValue + 1).toString());
  };

  const handleDecrement = () => {
    const currentValue = parseInt(value) || 0;
    if (currentValue > 0) {
      onChange((currentValue - 1).toString());
    }
  };

  return (
    <div className="flex flex-col text-sm font-semibold whitespace-nowrap leading-none">
      <div className="text-[#101928] text-left mb-2">
        Number of questions
      </div>
      <div className="flex h-9 items-stretch gap-0.5">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-12 bg-gray-100 text-sm text-slate-500 font-semibold h-full px-2 py-1 rounded-l-xl ${error ? 'border-red-500' : 'border-[#D0D5DD]'}`}
          placeholder="0"
        />
        <div className="flex flex-col h-full">
          <button
            type="button"
            onClick={handleIncrement}
            className="flex items-center justify-center bg-gray-100 h-[18px] w-9 rounded-tr-xl hover:bg-gray-200"
          >
            <ChevronUp className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleDecrement}
            className="flex items-center justify-center bg-gray-100 h-[18px] w-9 rounded-br-xl hover:bg-gray-200"
          >
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>
      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  );
} 