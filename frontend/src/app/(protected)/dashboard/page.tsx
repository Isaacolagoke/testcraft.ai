'use client'

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { PageHeader } from "@/components/content/PageHeader";
import { ContentTabs } from "@/components/content/ContentTabs";
import { SearchBar } from "@/components/content/SearchBar";
import { EmptyState } from "@/components/content/EmptyState";
import { QuizCard } from "@/components/content/QuizCard";
import { CreateContentOverlay } from "@/components/content/CreateContentOverlay";
import { cn } from "@/lib/utils";

// Mock data - in real app this would come from an API
const mockQuizzes = [
  {
    id: '1',
    title: 'Introduction to React',
    questionsCount: 10,
    createdAt: '2 days ago',
    type: 'quiz'
  },
  {
    id: '2',
    title: 'JavaScript Fundamentals',
    questionsCount: 15,
    createdAt: '1 week ago',
    type: 'quiz'
  },
  {
    id: '3',
    title: 'TypeScript Basics',
    questionsCount: 12,
    createdAt: '3 days ago',
    type: 'quiz'
  }
];

export default function DashboardPage() {
  const [viewType, setViewType] = useState<'grid' | 'list'>('grid');
  const [activeTab, setActiveTab] = useState<'all' | 'quiz' | 'assignment' | 'course'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isCreateOverlayOpen, setIsCreateOverlayOpen] = useState(false);

  // Filter quizzes based on active tab and search query
  const filteredQuizzes = mockQuizzes.filter(quiz => {
    const matchesTab = activeTab === 'all' || quiz.type === activeTab;
    const matchesSearch = quiz.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleViewToggle = (type: 'grid' | 'list') => {
    setViewType(type);
  };

  const handleTabChange = (tab: 'all' | 'quiz' | 'assignment' | 'course') => {
    setActiveTab(tab);
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <div className="mx-auto w-full max-w-[700px]">
        <Navbar />
        <main className="bg-white px-4 py-4 min-h-[calc(100vh-64px)]">
          <PageHeader onCreateClick={() => setIsCreateOverlayOpen(true)} />
          <ContentTabs activeTab={activeTab} onTabChange={handleTabChange} />
          <SearchBar onSearch={handleSearch} onViewToggle={handleViewToggle} viewType={viewType} />
          
          {mockQuizzes.length === 0 ? (
            <EmptyState />
          ) : (
            <div className={cn(
              'mt-6 gap-4',
              viewType === 'grid' 
                ? 'grid grid-cols-1 sm:grid-cols-2' 
                : 'flex flex-col'
            )}>
              {filteredQuizzes.map(quiz => (
                <QuizCard
                  key={quiz.id}
                  title={quiz.title}
                  questionsCount={quiz.questionsCount}
                  createdAt={quiz.createdAt}
                  viewType={viewType}
                  onEdit={() => console.log('Edit quiz:', quiz.id)}
                />
              ))}
            </div>
          )}

          <CreateContentOverlay 
            isOpen={isCreateOverlayOpen}
            onClose={() => setIsCreateOverlayOpen(false)}
          />
        </main>
      </div>
    </div>
  );
} 