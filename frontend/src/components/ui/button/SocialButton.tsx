import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface SocialButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode
  provider: string
}

export const SocialButton = forwardRef<HTMLButtonElement, SocialButtonProps>(
  ({ className, icon, provider, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex w-full items-center justify-center gap-3',
          'rounded-[33px]',
          'bg-white text-slate-500',
          'border-2 border-neutral-300',
          'px-6 py-4 text-base font-medium',
          'hover:bg-neutral-50 hover:border-neutral-400',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          className
        )}
        {...props}
      >
        {icon && <span className="h-5 w-5">{icon}</span>}
        <span>Continue with {provider}</span>
      </button>
    )
  }
) 