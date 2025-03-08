import React from "react"
import { Navbar } from "@/components/layout/Navbar"

interface NotificationItem {
  id: string
  title: string
  description: string
  time: string
  isRead: boolean
}

export default function NotificationsPage() {
  // Sample notifications - in a real app, this would come from your backend
  const notifications: NotificationItem[] = [
    {
      id: "1",
      title: "New Quiz Available",
      description: "A new quiz on JavaScript Basics has been published. Take it now to test your knowledge!",
      time: "5m ago",
      isRead: false,
    },
    {
      id: "2",
      title: "Quiz Results",
      description: "Your Python Advanced quiz results are ready. You scored 85%!",
      time: "1h ago",
      isRead: true,
    },
    {
      id: "3",
      title: "Achievement Unlocked",
      description: "Congratulations! You've completed 5 quizzes this week.",
      time: "2d ago",
      isRead: true,
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-[700px] mx-auto">
        <main className="bg-white px-4 py-8">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-neutral-900">Notifications</h1>
            <p className="text-neutral-500 mt-1">Stay updated with your latest activities</p>
          </div>
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 rounded-2xl border bg-white ${
                  !notification.isRead && 'border-neutral-200'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-medium text-neutral-900">{notification.title}</h3>
                    <p className="text-sm text-neutral-500 mt-1">{notification.description}</p>
                  </div>
                  <span className="text-xs text-neutral-400 whitespace-nowrap ml-4">
                    {notification.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
} 