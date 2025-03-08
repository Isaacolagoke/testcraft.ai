import { InputHTMLAttributes, forwardRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { VariantProps, cva } from 'class-variance-authority'

const inputVariants = cva(
  // Base styles
  'w-full font-manrope transition-colors duration-200 outline-none cursor-text',
  {
    variants: {
      size: {
        xs: 'h-8 px-3 text-caption-lg',
        sm: 'h-10 px-4 text-paragraph-md',
        md: 'h-[55px] px-6 text-paragraph-md',
        lg: 'h-16 px-8 text-paragraph-lg',
      },
      variant: {
        default: [
          'border border-neutral-200 bg-white text-neutral-700 placeholder:text-neutral-400 rounded-[8px]',
          'hover:border-neutral-300',
          'focus:border-primary-500 focus:ring-2 focus:ring-primary-400/20',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-neutral-50',
        ],
        rounded: [
          'border-0 bg-slate-50 text-neutral-700 placeholder:text-neutral-400 rounded-full',
          'hover:bg-slate-100',
          'focus:bg-slate-100 focus:outline-none',
          'disabled:opacity-50 disabled:cursor-not-allowed',
        ],
        error: [
          'border-2 border-error-500 bg-white text-error-700 placeholder:text-error-400 rounded-[8px]',
          'hover:border-error-600',
          'focus:border-error-500 focus:ring-2 focus:ring-error-400/20',
          'disabled:opacity-50 disabled:cursor-not-allowed',
        ],
        success: [
          'border-2 border-success-500 bg-white text-success-700 placeholder:text-success-400 rounded-[8px]',
          'hover:border-success-600',
          'focus:border-success-500 focus:ring-2 focus:ring-success-400/20',
          'disabled:opacity-50 disabled:cursor-not-allowed',
        ],
      },
      hasLeftIcon: {
        true: 'pl-12',
      },
      hasRightIcon: {
        true: 'pr-12',
      },
      fullWidth: {
        true: 'w-full',
        false: 'w-auto',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'default',
      fullWidth: true,
    },
  }
)

const labelVariants = cva(
  'block font-medium mb-2',
  {
    variants: {
      size: {
        xs: 'text-caption-lg',
        sm: 'text-paragraph-md',
        md: 'text-paragraph-md',
        lg: 'text-paragraph-lg',
      },
      variant: {
        default: 'text-neutral-700',
        rounded: 'text-neutral-700',
        error: 'text-error-700',
        success: 'text-success-700',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'default',
    },
  }
)

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  label?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  error?: string
  success?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className,
    label,
    leftIcon,
    rightIcon,
    error,
    success,
    variant = 'default',
    size,
    fullWidth,
    disabled,
    ...props 
  }, ref) => {
    // Determine variant based on error/success state
    const inputVariant = error ? 'error' : success ? 'success' : variant

    return (
      <div className={cn('w-full space-y-1.5', className)}>
        {label && (
          <label className={labelVariants({ size, variant: inputVariant })}>
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400">
              {leftIcon}
            </div>
          )}
          
          <input
            ref={ref}
            disabled={disabled}
            className={cn(
              inputVariants({ 
                size, 
                variant: inputVariant,
                hasLeftIcon: !!leftIcon,
                hasRightIcon: !!rightIcon,
                fullWidth,
              })
            )}
            {...props}
          />

          {rightIcon && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400">
              {rightIcon}
            </div>
          )}
        </div>

        {error && (
          <p className="text-error-500 text-xs mt-1.5">{error}</p>
        )}
        {!error && success && (
          <p className="text-success-500 text-xs mt-1.5">{success}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export { Input, inputVariants }
export type { InputProps } 