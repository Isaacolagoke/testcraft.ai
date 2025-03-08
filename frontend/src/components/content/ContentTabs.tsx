import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

type ContentType = "all" | "quiz" | "assignment" | "course";

interface Tab {
  id: ContentType;
  label: string;
  isComingSoon?: boolean;
}

const tabs: Tab[] = [
  { id: "all", label: "All Content" },
  { id: "quiz", label: "Quiz" },
  { id: "assignment", label: "Assignment", isComingSoon: true },
  { id: "course", label: "Course", isComingSoon: true },
];

interface ContentTabsProps {
  activeTab: ContentType;
  onTabChange: (tab: ContentType) => void;
}

export const ContentTabs = ({ activeTab, onTabChange }: ContentTabsProps) => {
  return (
    <div>
      <div className="relative border-b border-[#E4E7EC] mt-2">
        <div className="overflow-x-auto no-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-4 px-4">
          <div className="flex w-full">
            {tabs.map((tab) => (
              <TabItem 
                key={tab.id} 
                tab={tab} 
                isActive={activeTab === tab.id}
                onClick={() => !tab.isComingSoon && onTabChange(tab.id)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6">
        {tabs.find(tab => tab.id === activeTab)?.isComingSoon ? (
          <ComingSoonState type={activeTab} />
        ) : null}
      </div>
    </div>
  );
};

const TabItem = ({ 
  tab, 
  isActive, 
  onClick 
}: { 
  tab: Tab; 
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative w-[120px] flex items-center justify-center h-[42px] cursor-pointer",
        isActive 
          ? "text-[#06545E] font-semibold" 
          : "text-slate-500",
        !tab.isComingSoon && !isActive && "hover:text-slate-700",
        tab.isComingSoon ? "opacity-40 cursor-not-allowed" : "transition-colors duration-200"
      )}
    >
      <span className="text-[13px] sm:text-sm whitespace-nowrap">
        {tab.label}
        {tab.isComingSoon && " (Soon)"}
      </span>
      <span
        className={cn(
          "absolute bottom-0 left-0 h-[2px] w-full",
          isActive ? "bg-[#06545E]" : "bg-transparent"
        )}
      />
    </button>
  );
};

const ComingSoonState = ({ type }: { type: ContentType }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="relative w-48 h-48 mb-6">
        <Image
          src="/images/coming-soon.svg"
          alt="Coming Soon"
          fill
          className="object-contain"
        />
      </div>
      <h3 className="text-lg font-semibold text-slate-900 mb-2">
        {type === "assignment" ? "Assignments" : "Courses"} Coming Soon
      </h3>
      <p className="text-slate-500 text-center max-w-md">
        We're working hard to bring you {type === "assignment" ? "assignments" : "courses"}. 
        Stay tuned for updates!
      </p>
    </div>
  );
}; 