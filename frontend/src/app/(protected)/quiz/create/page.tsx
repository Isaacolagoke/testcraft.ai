'use client'

import React from "react";
import { Navigation } from "@/components/quiz/Navigation";
import { QuizForm } from "@/components/quiz/QuizForm";
import { Navbar } from "@/components/layout/Navbar";

export default function CreateQuizPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <div className="mx-auto w-full max-w-[700px]">
        <Navbar />
        <main className="bg-white px-4 py-4 min-h-[calc(100vh-64px)]">
          <Navigation currentStep={1} />
          <QuizForm />
        </main>
      </div>
    </div>
  );
} 