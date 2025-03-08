import React from "react";
import { FileText, MoreVertical } from "lucide-react";

interface QuizCardProps {
  title: string;
  questionsCount: number;
  createdAt: string;
  viewType: 'grid' | 'list';
  onEdit?: () => void;
}

export const QuizCard = ({ title, questionsCount, createdAt, viewType, onEdit }: QuizCardProps) => {
  return viewType === 'grid' ? (
    <div className="bg-white rounded-2xl border border-slate-200 p-4 hover:border-slate-300 transition-colors cursor-pointer">
      <div className="flex items-start justify-between">
        <div className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center">
          <FileText className="h-5 w-5 text-slate-400" />
        </div>
        <button 
          onClick={onEdit}
          className="text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-50"
        >
          <MoreVertical className="h-4 w-4" />
        </button>
      </div>
      <h3 className="mt-3 font-medium text-slate-900 line-clamp-2">{title}</h3>
      <div className="mt-2 flex items-center text-sm text-slate-500">
        <span>{questionsCount} questions</span>
        <span className="mx-2">•</span>
        <span>{createdAt}</span>
      </div>
    </div>
  ) : (
    <div className="bg-white rounded-xl border border-slate-200 p-3 hover:border-slate-300 transition-colors cursor-pointer flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
          <FileText className="h-5 w-5 text-slate-400" />
        </div>
        <div>
          <h3 className="font-medium text-slate-900">{title}</h3>
          <div className="flex items-center text-sm text-slate-500">
            <span>{questionsCount} questions</span>
            <span className="mx-2">•</span>
            <span>{createdAt}</span>
          </div>
        </div>
      </div>
      <button 
        onClick={onEdit}
        className="text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-50"
      >
        <MoreVertical className="h-4 w-4" />
      </button>
    </div>
  );
}; 