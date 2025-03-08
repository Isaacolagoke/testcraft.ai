import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { VariantProps, cva } from 'class-variance-authority'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-[33px] font-semibold',
  {
    variants: {
      variant: {
        primary: [
          'bg-primary-500 text-white',
          'hover:bg-primary-600',
          'disabled:opacity-50 disabled:cursor-not-allowed',
        ],
        secondary: [
          'bg-neutral-100 text-slate-500',
          'hover:bg-neutral-200',
          'disabled:opacity-50 disabled:cursor-not-allowed',
        ],
        tertiary: [
          'bg-white text-slate-500 border-2 border-neutral-300',
          'hover:bg-neutral-50 hover:border-neutral-400',
          'disabled:opacity-50 disabled:cursor-not-allowed',
        ],
      },
      size: {
        md: 'h-[55px] px-6 py-4 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          buttonVariants({ variant, size }),
          isLoading && 'opacity-50 cursor-wait',
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <span>Loading...</span>
        ) : (
          children
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button, buttonVariants }
export type { ButtonProps } 