"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Navigation } from "@/components/quiz/Navigation";
import { GripVertical, Trash2, Image, Plus, Info, Eye, ListChecks, AlignLeft, ToggleLeft, List, GitMerge, Type, FileText, Upload } from "lucide-react";
import { Switch } from "@/components/ui/Switch";
import { Select } from "@/components/ui/Select";
import { ImageUpload } from "@/components/quiz/ImageUpload";
import { Input } from "@/components/ui/input";
import { Divider } from "@/components/ui/Divider";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface Question {
  id: string;
  type: 'multiple-choice' | 'short-answer' | 'paragraph' | 'fill-in-blanks' | 'true-false' | 'dropdown' | 'matching' | 'file-upload';
  question: string;
  required: boolean;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
    media?: File;
  }[];
  allowMultiple: boolean;
  media?: File;
}

export default function QuestionCreationPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [quizData, setQuizData] = useState<any>(null);

  useEffect(() => {
    // Load quiz data from localStorage
    const savedQuizData = localStorage.getItem('quizFormData');
    if (savedQuizData) {
      setQuizData(JSON.parse(savedQuizData));
    }

    // Initialize with one empty question
    if (questions.length === 0) {
      addNewQuestion();
    }
  }, []);

  const addNewQuestion = () => {
    const newQuestion: Question = {
      id: Math.random().toString(36).substr(2, 9),
      type: 'multiple-choice' as const,
      question: "",
      required: false,
      allowMultiple: false,
      options: [
        { id: Math.random().toString(36).substr(2, 9), text: "", isCorrect: false }
      ]
    };
    setQuestions(prev => [...prev, newQuestion]);
  };

  const addNewOption = (questionId: string) => {
    setQuestions(prev => prev.map(q => 
      q.id === questionId 
        ? {
            ...q,
            options: [...q.options, { 
              id: Math.random().toString(36).substr(2, 9), 
              text: "", 
              isCorrect: false 
            }]
          }
        : q
    ));
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 scrollbar-gutter-stable">
      <Navbar />
      <div className="pt-[57px]">
        <div className="mx-auto w-full max-w-[700px]">
          <main className="bg-white px-4 py-4 min-h-[calc(100vh-57px)]">
            <Navigation currentStep={2} />
            
            {/* Quiz Details */}
            <div className="mt-6 mb-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-[14px] font-semibold text-[#101928]">{quizData?.title || "Quiz Title"}</h2>
                  <p className="text-[14px] text-[#667185] mt-1">{quizData?.description || "Quiz Description"}</p>
                </div>
                <button className="flex items-center gap-2 px-3 py-2 bg-[#F9FAFB] hover:bg-[#F0F2F5] rounded-lg text-[#06545E] hover:text-[#054851] transition-colors text-[14px]">
                  <Eye className="w-4 h-4" />
                  Preview
                </button>
              </div>

              {/* Questions List */}
              <div className="space-y-4">
                {questions.map((question, index) => (
                  <div key={question.id} className="border border-[#D0D5DD] rounded-2xl bg-white hover:border-[#98A2B3] transition-colors">
                    {/* Question Header */}
                    <div className="flex items-center p-4 bg-[#F9FAFB] border-b border-[#D0D5DD] rounded-t-2xl">
                      <div className="cursor-move text-[#667185] hover:text-[#101928] mr-3">
                        <GripVertical className="w-5 h-5" />
                      </div>
                      <span className="text-[14px] font-medium text-[#101928]">Question {index + 1}</span>
                      <div className="ml-auto flex items-center space-x-2">
                        <div className="flex items-center">
                          <Switch
                            checked={question.required}
                            onChange={(checked) => {
                              setQuestions(prev => prev.map(q => 
                                q.id === question.id ? { ...q, required: checked } : q
                              ));
                            }}
                          />
                          <span className="text-[14px] ml-2">Required</span>
                        </div>
                        <button 
                          onClick={() => setQuestions(prev => prev.filter(q => q.id !== question.id))}
                          className="text-[#667185] hover:text-red-500 transition-colors p-1"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    {/* Question Content */}
                    <div className="p-6 space-y-6">
                      {/* Question Type */}
                      <div>
                        <div className="flex items-center mb-2">
                          <label className="text-[14px] font-medium text-[#101928] mr-1">Question Type</label>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <button type="button">
                                  <Info className="w-4 h-4 text-[#667185]" />
                                </button>
                              </TooltipTrigger>
                              <TooltipContent side="top">
                                <p>Choose question type from dropdown menu</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                        <Select
                          value={question.type}
                          onChange={(value) => {
                            setQuestions(prev => prev.map(q => 
                              q.id === question.id ? { ...q, type: value as Question['type'] } : q
                            ));
                          }}
                          options={[
                            {
                              value: 'multiple-choice',
                              label: 'Multiple Choice',
                              icon: <ListChecks className="h-4 w-4" />
                            },
                            {
                              value: 'fill-in-blanks',
                              label: 'Fill in the Blanks',
                              icon: <Type className="h-4 w-4" />
                            },
                            {
                              value: 'true-false',
                              label: 'True/False',
                              icon: <ToggleLeft className="h-4 w-4" />
                            },
                            {
                              value: 'dropdown',
                              label: 'Drop-down',
                              icon: <List className="h-4 w-4" />
                            },
                            {
                              value: 'matching',
                              label: 'Matching',
                              icon: <GitMerge className="h-4 w-4" />
                            },
                            {
                              value: 'short-answer',
                              label: 'Short Answer',
                              icon: <AlignLeft className="h-4 w-4" />
                            },
                            {
                              value: 'paragraph',
                              label: 'Paragraph',
                              icon: <FileText className="h-4 w-4" />
                            },
                            {
                              value: 'file-upload',
                              label: 'File Upload',
                              icon: <Upload className="h-4 w-4" />
                            }
                          ]}
                          className="w-[200px]"
                        />
                      </div>

                      {/* Question Text and Media */}
                      <div className="flex gap-4 w-full">
                        <textarea
                          value={question.question}
                          onChange={(e) => {
                            setQuestions(prev => prev.map(q => 
                              q.id === question.id ? { ...q, question: e.target.value } : q
                            ));
                          }}
                          placeholder="Enter your question here"
                          className="w-[70%] px-3 py-2 border border-[#D0D5DD] rounded-xl min-h-[88px] text-[14px] placeholder:text-[#667185] hover:border-[#98A2B3] focus:outline-none focus:ring-1 focus:ring-[#06545E]"
                        />
                        <div className="w-[30%]">
                          <ImageUpload onImageUpload={(file) => {
                            setQuestions(prev => prev.map(q => 
                              q.id === question.id ? { ...q, media: file } : q
                            ));
                          }} />
                        </div>
                      </div>

                      <Divider className="my-6" />

                      {/* Options */}
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <label className="text-[14px] font-medium text-[#101928] mr-2">Options</label>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger>
                                  <Info className="w-4 h-4 text-[#667185]" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Add answer options for your question</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                          {question.type === 'multiple-choice' && (
                            <label className="flex items-center text-[14px]">
                              <input
                                type="checkbox"
                                checked={question.allowMultiple}
                                onChange={(e) => {
                                  setQuestions(prev => prev.map(q => 
                                    q.id === question.id ? { ...q, allowMultiple: e.target.checked } : q
                                  ));
                                }}
                                className="mr-2 h-4 w-4 text-[#06545E] border-[#D0D5DD] rounded focus:ring-[#06545E] focus:ring-offset-0"
                              />
                              Allow multiple answers
                            </label>
                          )}
                        </div>

                        <div className="space-y-3">
                          {question.options.map((option, optIndex) => (
                            <div key={option.id} className="border border-[#D0D5DD] rounded-xl p-4 space-y-4">
                              <div className="flex gap-4 w-full">
                                <div className="flex items-center justify-center h-7 w-7 rounded-full border border-[#D0D5DD] text-xs text-[#667185] bg-[#F9FAFB]">
                                  {String(optIndex + 1).padStart(2, '0')}
                                </div>
                                <textarea
                                  value={option.text}
                                  onChange={(e) => {
                                    setQuestions(prev => prev.map(q => 
                                      q.id === question.id 
                                        ? {
                                            ...q,
                                            options: q.options.map(opt => 
                                              opt.id === option.id ? { ...opt, text: e.target.value } : opt
                                            )
                                          }
                                        : q
                                    ));
                                  }}
                                  placeholder="Option text"
                                  className="w-[70%] px-3 py-2 border border-[#D0D5DD] rounded-xl min-h-[88px] text-[14px] placeholder:text-[#667185] hover:border-[#98A2B3] focus:outline-none focus:ring-1 focus:ring-[#06545E]"
                                />
                                <div className="w-[30%]">
                                  <ImageUpload onImageUpload={(file) => {
                                    setQuestions(prev => prev.map(q => 
                                      q.id === question.id 
                                        ? {
                                            ...q,
                                            options: q.options.map(opt => 
                                              opt.id === option.id ? { ...opt, media: file } : opt
                                            )
                                          }
                                        : q
                                    ));
                                  }} />
                                </div>
                                <button 
                                  onClick={() => {
                                    setQuestions(prev => prev.map(q => 
                                      q.id === question.id 
                                        ? {
                                            ...q,
                                            options: q.options.filter(opt => opt.id !== option.id)
                                          }
                                        : q
                                    ));
                                  }}
                                  className="text-[#667185] hover:text-red-500 transition-colors"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>

                              <div className="flex items-center">
                                <input
                                  type={question.allowMultiple ? "checkbox" : "radio"}
                                  name={`correct-${question.id}`}
                                  checked={option.isCorrect}
                                  onChange={(e) => {
                                    setQuestions(prev => prev.map(q => 
                                      q.id === question.id 
                                        ? {
                                            ...q,
                                            options: q.options.map(opt => ({
                                              ...opt,
                                              isCorrect: question.allowMultiple 
                                                ? (opt.id === option.id ? e.target.checked : opt.isCorrect)
                                                : opt.id === option.id
                                            }))
                                          }
                                        : q
                                    ));
                                  }}
                                  className="mr-2 h-4 w-4 text-[#06545E] border-[#D0D5DD] focus:ring-[#06545E] focus:ring-offset-0"
                                />
                                <span className="text-[14px] text-[#344054]">Mark as correct answer</span>
                              </div>
                            </div>
                          ))}

                          <button
                            onClick={() => addNewOption(question.id)}
                            className="flex items-center text-[#06545E] hover:text-[#054851] transition-colors text-[14px] font-medium"
                          >
                            <Plus className="w-4 h-4 mr-1" />
                            Add Option
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Add New Question */}
                <button
                  onClick={addNewQuestion}
                  className="w-full py-4 mb-20 border-2 border-dashed border-[#D0D5DD] rounded-2xl text-[#344054] text-[14px] font-semibold flex items-center justify-center gap-2 hover:bg-gray-50 hover:border-[#98A2B3] transition-colors"
                >
                  <Plus className="w-5 h-5" />
                  Add New Question
                </button>
              </div>
            </div>
          </main>

          {/* Fixed Navigation Buttons */}
          <div className="fixed bottom-0 left-0 right-0 border-t border-[#E4E7EC] bg-white py-4">
            <div className="max-w-[700px] mx-auto w-full px-4 flex justify-between items-center">
              <div className="text-[14px] text-[#475367]">
                {questions.length} of {quizData?.numberOfQuestions || 0} questions added
              </div>
              <div className="flex gap-3">
                <button 
                  type="button"
                  onClick={() => window.history.back()}
                  className="px-4 py-2 border border-[#D0D5DD] rounded-xl text-[14px] text-[#344054] hover:bg-gray-50"
                >
                  Back
                </button>
                <button 
                  type="button"
                  className="px-4 py-2 bg-[#06545E] text-white text-[14px] rounded-xl hover:bg-[#054851]"
                >
                  Save and Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 