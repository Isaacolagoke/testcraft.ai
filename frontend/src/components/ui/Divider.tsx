interface DividerProps {
  className?: string;
}

export function Divider({ className = "" }: DividerProps) {
  return (
    <hr className={`border-t border-[#E4E7EC] ${className}`} />
  );
} 