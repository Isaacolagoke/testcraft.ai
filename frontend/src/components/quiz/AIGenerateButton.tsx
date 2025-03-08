import React from "react";

export const AIGenerateButton = () => {
  return (
    <button className="inline-flex text-sm text-[#344054] font-semibold text-center leading-none">
      <div className="justify-center items-center bg-[#F0F2F5] flex overflow-hidden px-3 py-2 rounded-lg">
        <div className="flex items-center gap-2 justify-center">
          <img
            src="/icons/ai.svg"
            alt="AI"
            className="aspect-[1] object-contain w-5 shrink-0 my-auto"
          />
          <span>Generate Quiz with AI</span>
        </div>
      </div>
    </button>
  );
}; 