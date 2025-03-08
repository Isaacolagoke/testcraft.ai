import React from "react";
import { ContentBadge } from "./ContentBadge";
import Image from "next/image";

interface ContentCardProps {
  title: string;
  description: string;
  imageUrl: string;
  comingSoon?: boolean;
  onClick?: () => void;
}

export const ContentCard = ({
  title,
  description,
  imageUrl,
  comingSoon = false,
  onClick
}: ContentCardProps) => {
  return (
    <button
      onClick={!comingSoon ? onClick : undefined}
      className={`w-full text-left bg-slate-50 p-4 rounded-xl border border-transparent hover:border-slate-200 transition-colors ${comingSoon ? 'cursor-not-allowed' : ''}`}
      disabled={comingSoon}
    >
      <div className="flex gap-4">
        <div className="h-[100px] w-[100px] shrink-0 flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageUrl}
            alt={`${title} icon`}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex-1 min-w-0 flex flex-col justify-center">
          <div className="flex items-center gap-3">
            <h3 className="text-slate-900 font-semibold leading-none">{title}</h3>
            {comingSoon && <ContentBadge label="Coming soon" />}
          </div>
          <p className="mt-1 text-sm text-slate-600 line-clamp-2 leading-normal">
            {description}
          </p>
        </div>
      </div>
    </button>
  );
}; 