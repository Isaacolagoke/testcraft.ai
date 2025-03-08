'use client'

import React from "react";
import { useRouter } from 'next/navigation';
import { ArrowLeft, Check, ChevronRight } from 'lucide-react';

interface NavigationProps {
  currentStep: number;
}

export const Navigation: React.FC<NavigationProps> = ({ currentStep = 1 }) => {
  const router = useRouter();

  const steps = [
    { step: 1, label: "Quiz Details" },
    { step: 2, label: "Add Questions" },
    { step: 3, label: "Review & Publish" }
  ];

  return (
    <div className="border-b border-[#E4E7EC] bg-white">
      <div className="max-w-[700px] mx-auto w-full">
        <div className="w-full overflow-hidden">
          <div className="w-full py-8 overflow-x-auto no-scrollbar">
            <div className="flex w-max gap-6 text-sm text-[#667185] font-medium leading-none">
              {steps.map((step, index) => (
                <React.Fragment key={step.step}>
                  <div className="flex items-center gap-2">
                    <div className={`flex items-center justify-center w-6 h-6 rounded-full border ${
                      step.step === currentStep 
                        ? 'border-[#06545E] text-[#06545E]' 
                        : step.step < currentStep
                          ? 'border-[#06545E] bg-[#06545E] text-white'
                          : 'border-[#D0D5DD] text-[#667185]'
                    }`}>
                      {step.step < currentStep ? <Check className="w-4 h-4" /> : step.step}
                    </div>
                    <span className={step.step <= currentStep ? 'text-[#101928]' : 'text-[#667185]'}>
                      {step.label}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="flex items-center">
                      <div className={`w-24 h-[1px] ${
                        step.step < currentStep ? 'bg-[#06545E]' : 'bg-[#D0D5DD]'
                      }`} />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 