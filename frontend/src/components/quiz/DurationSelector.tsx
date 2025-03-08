'use client'

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface DurationSelectorProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export const DurationSelector: React.FC<DurationSelectorProps> = ({ value, onChange, error }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [timeUnit, setTimeUnit] = useState('minutes');

  const handleTimeUnitChange = (unit: string) => {
    setTimeUnit(unit);
    setIsOpen(false);
  };

  return (
    <div>
      <label className="text-sm text-[#101928] font-semibold block mb-2">
        Duration
      </label>
      <div className="flex">
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full px-3 py-2 border ${error ? 'border-red-500' : 'border-[#D0D5DD]'} rounded-l-xl`}
          placeholder="Enter duration"
          min="1"
        />
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={`flex items-center gap-1 px-3 py-2 border-y border-r ${error ? 'border-red-500' : 'border-[#D0D5DD]'} rounded-r-xl bg-white`}
          >
            <span className="text-sm text-[#344054]">{timeUnit}</span>
            <ChevronDown className="w-4 h-4 text-[#667185]" />
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-1 w-32 py-1 bg-white border border-[#D0D5DD] rounded-xl shadow-lg z-10">
              <button
                type="button"
                onClick={() => handleTimeUnitChange('minutes')}
                className={`w-full px-3 py-2 text-left text-sm hover:bg-gray-50 ${timeUnit === 'minutes' ? 'text-[#06545E]' : 'text-[#344054]'}`}
              >
                minutes
              </button>
              <button
                type="button"
                onClick={() => handleTimeUnitChange('hours')}
                className={`w-full px-3 py-2 text-left text-sm hover:bg-gray-50 ${timeUnit === 'hours' ? 'text-[#06545E]' : 'text-[#344054]'}`}
              >
                hours
              </button>
            </div>
          )}
        </div>
      </div>
      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  );
}; 