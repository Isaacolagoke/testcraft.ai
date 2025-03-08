import { Button } from './Button'
import { 
  ArrowRightIcon, 
  PlusIcon 
} from '@heroicons/react/24/outline'

export function ButtonExample() {
  return (
    <div className="space-y-8 p-8">
      {/* Primary Button Sizes */}
      <div className="space-y-4">
        <h2 className="text-heading-2 font-semibold">Primary Button Sizes</h2>
        <div className="flex flex-wrap gap-4">
          <Button size="xs">Extra Small</Button>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>

      {/* Secondary Button Sizes */}
      <div className="space-y-4">
        <h2 className="text-heading-2 font-semibold">Secondary Button Sizes</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="secondary" size="xs">Extra Small</Button>
          <Button variant="secondary" size="sm">Small</Button>
          <Button variant="secondary" size="md">Medium</Button>
          <Button variant="secondary" size="lg">Large</Button>
        </div>
      </div>

      {/* Tertiary Button Sizes */}
      <div className="space-y-4">
        <h2 className="text-heading-2 font-semibold">Tertiary Button Sizes</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="tertiary" size="xs">Extra Small</Button>
          <Button variant="tertiary" size="sm">Small</Button>
          <Button variant="tertiary" size="md">Medium</Button>
          <Button variant="tertiary" size="lg">Large</Button>
        </div>
      </div>

      {/* Button States */}
      <div className="space-y-4">
        <h2 className="text-heading-2 font-semibold">Button States</h2>
        <div className="flex flex-wrap gap-4">
          <Button>Default</Button>
          <Button disabled>Disabled</Button>
          <Button isLoading>Loading</Button>
        </div>
      </div>

      {/* Buttons with Icons */}
      <div className="space-y-4">
        <h2 className="text-heading-2 font-semibold">Buttons with Icons</h2>
        <div className="flex flex-wrap gap-4">
          <Button icon={<PlusIcon className="h-5 w-5" />}>
            Leading Icon
          </Button>
          <Button 
            icon={<ArrowRightIcon className="h-5 w-5" />}
            iconPosition="right"
          >
            Trailing Icon
          </Button>
        </div>
      </div>

      {/* Full Width Buttons */}
      <div className="space-y-4 max-w-md">
        <h2 className="text-heading-2 font-semibold">Full Width Buttons</h2>
        <div className="space-y-4">
          <Button fullWidth>Full Width Primary</Button>
          <Button variant="secondary" fullWidth>Full Width Secondary</Button>
          <Button variant="tertiary" fullWidth>Full Width Tertiary</Button>
        </div>
      </div>
    </div>
  )
} 