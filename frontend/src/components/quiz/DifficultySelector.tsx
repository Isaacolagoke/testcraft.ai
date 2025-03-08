'use client'

import React from "react";

interface DifficultySelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export const DifficultySelector: React.FC<DifficultySelectorProps> = ({ value, onChange }) => {
  return (
    <div className="flex w-full flex-col mt-6">
      <div className="text-sm text-[#101928] font-semibold text-left mb-2">
        Difficulty Level
      </div>
      <div className="flex gap-4 mt-2">
        {[
          { value: 'beginner', label: 'Beginner' },
          { value: 'intermediate', label: 'Intermediate' },
          { value: 'advanced', label: 'Advanced' }
        ].map((option) => (
          <label key={option.value} className="flex items-center gap-3 cursor-pointer">
            <div className="relative flex items-center">
              <input
                type="radio"
                name="difficulty"
                value={option.value}
                checked={value === option.value}
                onChange={(e) => onChange(e.target.value)}
                className="appearance-none w-5 h-5 rounded-full border-2 border-[#D0D5DD] checked:border-[#06545E] checked:border-[6px] transition-all duration-200 cursor-pointer"
              />
            </div>
            <span className={`text-sm font-medium ${
              value === option.value ? 'text-[#101928]' : 'text-[#667185]'
            }`}>
              {option.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
} 