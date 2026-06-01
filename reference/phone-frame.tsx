"use client"

import { cn } from "@/lib/utils"

interface PhoneFrameProps {
  children: React.ReactNode
  className?: string
  showStatusBar?: boolean
}

export function PhoneFrame({ children, className, showStatusBar = true }: PhoneFrameProps) {
  return (
    <div className={cn(
      "relative mx-auto w-[375px] h-[812px] bg-background rounded-[3rem] shadow-2xl border-8 border-foreground/10 overflow-hidden",
      className
    )}>
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-7 bg-foreground/10 rounded-b-2xl z-50" />
      
      {/* Status Bar */}
      {showStatusBar && (
        <div className="absolute top-0 left-0 right-0 h-12 bg-background z-40 flex items-end justify-between px-6 pb-1">
          <span className="text-xs font-medium text-foreground">9:41</span>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 text-foreground" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8z"/>
            </svg>
            <svg className="w-4 h-4 text-foreground" fill="currentColor" viewBox="0 0 24 24">
              <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
            </svg>
            <svg className="w-6 h-4 text-foreground" fill="currentColor" viewBox="0 0 24 24">
              <rect x="2" y="7" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              <rect x="20" y="10" width="2" height="4" rx="0.5" fill="currentColor"/>
              <rect x="4" y="9" width="12" height="6" rx="1" fill="currentColor"/>
            </svg>
          </div>
        </div>
      )}
      
      {/* Content */}
      <div className="absolute top-12 left-0 right-0 bottom-0 overflow-y-auto overflow-x-hidden">
        {children}
      </div>
      
      {/* Home Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-foreground/30 rounded-full" />
    </div>
  )
}
