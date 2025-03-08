import React, { useState } from "react";
import { X } from "lucide-react";
import { ContentCard } from "./ContentCard";
import { useRouter } from "next/navigation";

interface CreateContentOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CreateContentOverlay = ({ 
  isOpen, 
  onClose
}: CreateContentOverlayProps) => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const router = useRouter();

  if (!isOpen) return null;

  const contentTypes = [
    {
      title: "Quiz",
      description: "Powered by AI. Create quick tests and grade your learners. Perfect for on-the-spot assessment.",
      imageUrl: "/icons/quiz.svg",
      comingSoon: false
    },
    {
      title: "Assignment",
      description: "Create structured assignments with automated grading. Ideal for homework, projects, and research papers.",
      imageUrl: "/icons/assignment.svg",
      comingSoon: true
    },
    {
      title: "Course",
      description: "Design comprehensive courses with multiple modules, lessons, and assessment types for in-depth learning experiences.",
      imageUrl: "/icons/course.svg",
      comingSoon: true
    },
    {
      title: "Test",
      description: "Create formal assessments with multiple question types, time limits, and detailed analytics for high-stakes evaluations.",
      imageUrl: "/icons/test.svg",
      comingSoon: true
    }
  ];

  const handleCreateFromScratch = () => {
    onClose();
    router.push('/quiz/create');
  };

  const handleCreateWithAI = () => {
    onClose();
    router.push('/quiz/create?mode=ai');
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-[533px] p-6 relative">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-50"
        >
          <X className="h-5 w-5" />
        </button>

        {!selectedType ? (
          <>
            <div className="text-center mb-6">
              <h2 className="text-xl font-semibold text-[#101928]">
                Create new content
              </h2>
              <p className="mt-2 text-sm text-[#475367]">
                Create and manage your contents
              </p>
            </div>

            <div className="space-y-3">
              {contentTypes.map((type) => (
                <ContentCard
                  key={type.title}
                  title={type.title}
                  description={type.description}
                  imageUrl={type.imageUrl}
                  comingSoon={type.comingSoon}
                  onClick={() => {
                    if (type.title === "Quiz") {
                      setSelectedType("Quiz");
                    }
                  }}
                />
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="text-center mb-6">
              <h2 className="text-xl font-semibold text-[#101928]">
                Create Quiz
              </h2>
              <p className="mt-2 text-sm text-[#475367]">
                Choose how you'd like to create your quiz
              </p>
            </div>

            <div className="space-y-4">
              <button
                onClick={handleCreateFromScratch}
                className="w-full p-4 text-left bg-slate-50 rounded-xl hover:bg-slate-100"
              >
                <h3 className="font-semibold">Start from scratch</h3>
                <p className="text-sm text-slate-600">
                  Create your quiz manually by adding questions one by one
                </p>
              </button>

              <button
                onClick={handleCreateWithAI}
                className="w-full p-4 text-left bg-slate-50 rounded-xl hover:bg-slate-100"
              >
                <h3 className="font-semibold">Create with AI</h3>
                <p className="text-sm text-slate-600">
                  Let AI help you generate quiz questions based on your topic
                </p>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}; 