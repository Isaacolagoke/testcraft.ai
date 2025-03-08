import { Input } from './Input'
import { 
  MagnifyingGlassIcon,
  EnvelopeIcon,
  CheckCircleIcon,
  ExclamationCircleIcon
} from '@heroicons/react/24/outline'

export function InputExample() {
  return (
    <div className="space-y-8 p-8">
      {/* Input Sizes */}
      <div className="space-y-4">
        <h2 className="text-heading-2 font-semibold">Input Sizes</h2>
        <div className="space-y-4 max-w-md">
          <Input size="xs" placeholder="Extra Small Input" />
          <Input size="sm" placeholder="Small Input" />
          <Input size="md" placeholder="Medium Input" />
          <Input size="lg" placeholder="Large Input" />
        </div>
      </div>

      {/* Input with Icons */}
      <div className="space-y-4">
        <h2 className="text-heading-2 font-semibold">Input with Icons</h2>
        <div className="space-y-4 max-w-md">
          <Input 
            leftIcon={<MagnifyingGlassIcon className="h-5 w-5" />}
            placeholder="Search..."
          />
          <Input 
            leftIcon={<EnvelopeIcon className="h-5 w-5" />}
            placeholder="Enter your email"
          />
          <Input 
            rightIcon={<CheckCircleIcon className="h-5 w-5 text-success-500" />}
            placeholder="With success icon"
          />
          <Input 
            rightIcon={<ExclamationCircleIcon className="h-5 w-5 text-error-500" />}
            placeholder="With error icon"
          />
        </div>
      </div>

      {/* Input States */}
      <div className="space-y-4">
        <h2 className="text-heading-2 font-semibold">Input States</h2>
        <div className="space-y-4 max-w-md">
          <Input 
            label="Default Input"
            placeholder="Default state"
          />
          <Input 
            label="Disabled Input"
            placeholder="Disabled state"
            disabled
          />
          <Input 
            label="Success Input"
            placeholder="Success state"
            success="This is a success message"
            rightIcon={<CheckCircleIcon className="h-5 w-5 text-success-500" />}
          />
          <Input 
            label="Error Input"
            placeholder="Error state"
            error="This is an error message"
            rightIcon={<ExclamationCircleIcon className="h-5 w-5 text-error-500" />}
          />
        </div>
      </div>

      {/* Input with Label */}
      <div className="space-y-4">
        <h2 className="text-heading-2 font-semibold">Input with Label</h2>
        <div className="space-y-4 max-w-md">
          <Input 
            label="Email Address"
            placeholder="Enter your email"
            type="email"
          />
          <Input 
            label="Password"
            placeholder="Enter your password"
            type="password"
          />
        </div>
      </div>
    </div>
  )
} 