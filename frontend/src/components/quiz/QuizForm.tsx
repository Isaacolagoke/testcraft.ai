'use client'

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ImageUpload } from "./ImageUpload";
import { DifficultySelector } from "./DifficultySelector";
import { DurationSelector } from "./DurationSelector";
import { QuestionCounter } from "./QuestionCounter";
import { Sparkles } from "lucide-react";

interface FormErrors {
  title?: string;
  category?: string;
  description?: string;
  duration?: string;
  numberOfQuestions?: string;
}

export const QuizForm = () => {
  const router = useRouter();
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState({
    category: "",
    title: "",
    description: "",
    difficulty: "beginner",
    duration: "",
    numberOfQuestions: "",
    image: null as File | null
  });

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Quiz title is required";
    }

    if (!formData.category.trim()) {
      newErrors.category = "Category is required";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    }

    if (!formData.duration) {
      newErrors.duration = "Duration is required";
    }

    if (!formData.numberOfQuestions) {
      newErrors.numberOfQuestions = "Number of questions is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleImageUpload = (file: File) => {
    setFormData(prev => ({ ...prev, image: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      // Scroll to the first error
      const firstErrorField = Object.keys(errors)[0];
      const element = document.querySelector(`[name="${firstErrorField}"]`);
      element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    // Save form data to localStorage for persistence
    localStorage.setItem('quizFormData', JSON.stringify(formData));

    // Navigate to question creation page
    router.push('/quiz/create/questions');
  };

  return (
    <div className="h-[calc(100vh-42px)] overflow-hidden">
      <div className="h-[calc(100vh-42px-72px)] relative">
        <div className="h-full max-w-[700px] mx-auto w-full">
          <div className="h-full overflow-y-auto custom-scrollbar px-4">
            <form onSubmit={handleSubmit}>
              <ImageUpload onImageUpload={handleImageUpload} />

              <div className="mt-6 space-y-6 pb-6">
                <div>
                  <label className="text-sm text-[#101928] font-semibold block mb-2">
                    Quiz Category
                  </label>
                  <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border ${errors.category ? 'border-red-500' : 'border-[#D0D5DD]'} rounded-xl`}
                    placeholder="Enter quiz category"
                  />
                  {errors.category && (
                    <p className="text-red-500 text-sm mt-1">{errors.category}</p>
                  )}
                </div>

                <div>
                  <label className="text-sm text-[#101928] font-semibold block mb-2">
                    Quiz Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border ${errors.title ? 'border-red-500' : 'border-[#D0D5DD]'} rounded-xl`}
                    placeholder="Enter quiz title"
                  />
                  {errors.title && (
                    <p className="text-red-500 text-sm mt-1">{errors.title}</p>
                  )}
                </div>

                <div>
                  <label className="text-sm text-[#101928] font-semibold block mb-2">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border ${errors.description ? 'border-red-500' : 'border-[#D0D5DD]'} rounded-xl min-h-[100px]`}
                    placeholder="Enter quiz description"
                  />
                  {errors.description && (
                    <p className="text-red-500 text-sm mt-1">{errors.description}</p>
                  )}
                </div>

                <DifficultySelector
                  value={formData.difficulty}
                  onChange={(value) => setFormData(prev => ({ ...prev, difficulty: value }))}
                />

                <div className="flex flex-wrap gap-4">
                  <div className="flex-1 min-w-[200px]">
                    <DurationSelector
                      value={formData.duration}
                      onChange={(value) => {
                        setFormData(prev => ({ ...prev, duration: value }));
                        if (errors.duration) {
                          setErrors(prev => ({ ...prev, duration: undefined }));
                        }
                      }}
                      error={errors.duration}
                    />
                  </div>
                  <div className="flex-1 min-w-[200px]">
                    <QuestionCounter
                      value={formData.numberOfQuestions}
                      onChange={(value) => {
                        setFormData(prev => ({ ...prev, numberOfQuestions: value }));
                        if (errors.numberOfQuestions) {
                          setErrors(prev => ({ ...prev, numberOfQuestions: undefined }));
                        }
                      }}
                      error={errors.numberOfQuestions}
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 text-sm text-[#344054] font-semibold px-3 py-2 rounded-xl border border-[#D0D5DD] hover:bg-gray-50"
                  >
                    <Sparkles className="w-5 h-5" />
                    Generate Quiz with AI
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 border-t border-[#E4E7EC] bg-white py-4">
        <div className="max-w-[700px] mx-auto w-full px-4">
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-4 py-2 border border-[#D0D5DD] rounded-xl text-[#344054] hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              type="button"
              className="px-4 py-2 bg-[#06545E] text-white rounded-xl hover:bg-[#054851]"
            >
              Save and Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 