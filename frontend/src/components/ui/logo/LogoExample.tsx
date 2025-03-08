import { Logo } from './Logo'

export function LogoExample() {
  return (
    <div className="space-y-8 p-8">
      {/* Logo Sizes */}
      <div className="space-y-4">
        <h2 className="text-heading-2 font-semibold">Logo Sizes</h2>
        <div className="space-y-4">
          <Logo size="xs" />
          <Logo size="sm" />
          <Logo size="md" />
          <Logo size="lg" />
        </div>
      </div>

      {/* Logo Variants */}
      <div className="space-y-4">
        <h2 className="text-heading-2 font-semibold">Logo Variants</h2>
        <div className="space-y-4">
          <Logo variant="default" />
          <Logo variant="primary" />
          <div className="bg-neutral-900 p-4 rounded-lg">
            <Logo variant="white" />
          </div>
        </div>
      </div>
    </div>
  )
} 