'use client'

import React from "react"
import { Bell, BellDot } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface NotificationItem {
  id: string
  title: string
  description: string
  time: string
  isRead: boolean
}

interface NotificationDropdownProps {
  notifications: NotificationItem[]
  hasUnread?: boolean
  onNotificationClick?: (id: string) => void
  onViewAllClick?: () => void
}

export function NotificationDropdown({
  notifications = [],
  hasUnread = false,
  onNotificationClick,
  onViewAllClick,
}: NotificationDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-0 focus:ring-0"
        >
          {hasUnread ? (
            <BellDot className="h-5 w-5 text-neutral-500" />
          ) : (
            <Bell className="h-5 w-5 text-neutral-500" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80 rounded-2xl">
        <DropdownMenuLabel className="font-normal">
          <div className="flex justify-between items-center">
            <p className="font-semibold">Notifications</p>
            {notifications.length > 0 && (
              <Button
                variant="ghost"
                className="text-xs text-neutral-500 h-auto p-0 hover:text-neutral-900"
                onClick={onViewAllClick}
              >
                View all
              </Button>
            )}
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {notifications.length === 0 ? (
          <div className="py-4 px-2 text-center text-sm text-neutral-500">
            No notifications
          </div>
        ) : (
          notifications.map((notification) => (
            <DropdownMenuItem
              key={notification.id}
              className="flex flex-col items-start gap-1 p-3"
              onClick={() => onNotificationClick?.(notification.id)}
            >
              <div className="flex items-start justify-between w-full">
                <p className="font-medium text-sm">{notification.title}</p>
                <span className="text-xs text-neutral-500">{notification.time}</span>
              </div>
              <p className="text-xs text-neutral-500 line-clamp-2">
                {notification.description}
              </p>
            </DropdownMenuItem>
          ))
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 