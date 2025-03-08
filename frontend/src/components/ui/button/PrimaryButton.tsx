import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'default' | 'sm' | 'lg';
  fullWidth?: boolean;
  isLoading?: boolean;
}

const PrimaryButton = forwardRef<HTMLButtonElement, PrimaryButtonProps>(
  ({ 
    children, 
    className = '', 
    size = 'default',
    fullWidth = false,
    isLoading = false,
    disabled,
    ...props 
  }, ref) => {
    const sizeClasses = {
      sm: 'h-10 px-4 py-2 text-paragraph-md',
      default: 'h-[55px] px-6 py-4 text-paragraph-md',
      lg: 'h-16 px-8 py-4 text-paragraph-lg'
    };

    return (
      <button
        ref={ref}
        className={cn(
          // Base styles
          'inline-flex items-center justify-center rounded-[33px] font-manrope font-semibold cursor-pointer', // Added cursor-pointer to base
          'transition-colors duration-200',
          
          // Colors and interactive states
          'bg-primary-500 text-shades-white', // Explicitly white text
          'hover:bg-primary-600', // Hover state should trigger immediately
          'focus:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2', // Focus state separate
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-primary-500',
          
          // Size variants
          sizeClasses[size],
          
          // Width
          fullWidth ? 'w-full' : '',
          
          // Loading state
          isLoading && 'opacity-80 cursor-wait',
          
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <div className="flex items-center gap-2">
            <svg 
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-shades-white" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24"
            >
              <circle 
                className="opacity-25" 
                cx="12" 
                cy="12" 
                r="10" 
                stroke="currentColor" 
                strokeWidth="4"
              />
              <path 
                className="opacity-75" 
                fill="currentColor" 
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Loading...
          </div>
        ) : children}
      </button>
    );
  }
);

PrimaryButton.displayName = 'PrimaryButton';

export default PrimaryButton;