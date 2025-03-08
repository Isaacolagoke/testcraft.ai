import { cn } from '@/lib/utils'
import { VariantProps, cva } from 'class-variance-authority'

const logoVariants = cva(
  'inline-flex items-center font-manrope font-bold',
  {
    variants: {
      size: {
        xs: 'text-heading-4',
        sm: 'text-heading-3',
        md: 'text-heading-2',
        lg: 'text-heading-1',
      },
      variant: {
        default: 'text-neutral-900',
        primary: 'text-primary-500',
        white: 'text-white',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'default',
    },
  }
)

interface LogoProps extends VariantProps<typeof logoVariants> {
  className?: string
}

export function Logo({ size, variant, className }: LogoProps) {
  return (
    <div className={cn(logoVariants({ size, variant }), className)}>
      {/* Replace this with your actual logo SVG */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2"
      >
        <path
          d="M16 2.66669L29.3333 10.6667V21.3334L16 29.3334L2.66666 21.3334V10.6667L16 2.66669Z"
          className={cn(
            'transition-colors',
            variant === 'white' ? 'fill-white' : 'fill-primary-500'
          )}
        />
      </svg>
      <span>Craft.ai</span>
    </div>
  )
}

export { logoVariants }
export type { LogoProps } 