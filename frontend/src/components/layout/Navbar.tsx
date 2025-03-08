'use client'

import React from "react";
import { Button } from "@/components/ui/button";
import { UserDropdown } from "@/components/ui/user-dropdown";
import { NotificationDropdown } from "@/components/ui/notification-dropdown";
import Link from "next/link";

export const Navbar = () => {
  const handleProfileClick = () => {
    console.log("Profile clicked");
  };

  const handleSettingsClick = () => {
    console.log("Settings clicked");
  };

  const handleLogoutClick = () => {
    console.log("Logout clicked");
  };

  const handleNotificationClick = (id: string) => {
    console.log("Notification clicked:", id);
  };

  const handleViewAllNotifications = () => {
    window.location.href = '/notifications';
  };

  // Sample notifications - in a real app, this would come from your backend
  const notifications = [
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
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[57px] bg-white border-b border-gray-100 w-full">
      <div className="h-full w-full">
        <div className="max-w-[700px] mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full">
            <Link href="/" className="flex-shrink-0">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/542ff95d158846c083d503d3cf462403/ff646a00230c5651bcb08f72f2ba077c0185f8f2f1dea8fcd1bd7321f8f01b0a?placeholderIfAbsent=true"
                alt="Logo"
                className="h-7 w-auto object-contain"
              />
            </Link>

            <div className="flex items-center gap-4">
              <NotificationDropdown
                notifications={notifications}
                hasUnread={notifications.some(n => !n.isRead)}
                onNotificationClick={handleNotificationClick}
                onViewAllClick={handleViewAllNotifications}
              />
              <UserDropdown
                userImage="https://cdn.builder.io/api/v1/image/assets/542ff95d158846c083d503d3cf462403/3c95d777558669626699901f8971762e5d2b3d55898da52f16713e1483502cbd?placeholderIfAbsent=true"
                userName="User"
                onProfileClick={handleProfileClick}
                onSettingsClick={handleSettingsClick}
                onLogoutClick={handleLogoutClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 