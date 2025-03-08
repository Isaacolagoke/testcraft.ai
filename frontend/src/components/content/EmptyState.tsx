import React from "react";
import { Button } from "@/components/ui/button/Button";
import { FileEdit, Sparkles } from "lucide-react";

export const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-16 px-4 py-6 text-center">
      <div className="h-[150px] w-[150px] rounded-full bg-slate-50 flex items-center justify-center">
        <FileEdit className="h-16 w-16 text-slate-300" />
      </div>
      <div className="mt-6">
        <h2 className="text-lg font-semibold text-[#101928]">
          Create Your Quiz
        </h2>
        <p className="mt-2 text-sm text-[#475367]">
          Choose how you'd like to create your quiz: <br />
          manually enter each question or let AI generate them for you.
        </p>
      </div>
      <div className="mt-6 flex flex-col sm:flex-row gap-4">
        <Button
          variant="tertiary"
          className="rounded-full bg-[#F7F9FC] border-0 hover:bg-[#E4E7EC] text-[#344054] min-w-[180px] h-10 px-4 py-2 text-sm cursor-pointer"
        >
          <FileEdit className="mr-2 h-4 w-4" />
          Start from scratch
        </Button>
        <div className="p-[1px] rounded-full bg-gradient-to-r from-primary-500/20 via-primary-500/40 to-primary-500/20">
          <Button
            variant="tertiary"
            className="rounded-full bg-[#F7F9FC] hover:bg-[#E4E7EC] text-[#344054] min-w-[180px] h-10 px-4 py-2 text-sm cursor-pointer border-0 w-full"
          >
            <Sparkles className="mr-2 h-4 w-4" />
            Generate with AI
          </Button>
        </div>
      </div>
    </div>
  );
}; 