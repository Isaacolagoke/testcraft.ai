"use client"

import { Fragment } from "react"
import { Listbox, Transition } from "@headlessui/react"
import { Check, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface Option {
  value: string
  label: React.ReactNode
  icon?: React.ReactNode
}

interface SelectProps {
  value: string
  onChange: (value: string) => void
  options: Option[]
  placeholder?: string
  className?: string
}

export function Select({ value, onChange, options, placeholder, className }: SelectProps) {
  const selectedOption = options.find(option => option.value === value)

  return (
    <Listbox value={value} onChange={onChange}>
      <div className="relative">
        <Listbox.Button
          className={cn(
            "flex h-10 w-full items-center justify-between rounded-xl border border-[#D0D5DD] bg-white px-3 py-2 text-[14px] text-[#101928] placeholder:text-[#667185] hover:border-[#98A2B3] focus:outline-none focus:ring-1 focus:ring-[#06545E] disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
        >
          <span className="flex items-center gap-2 truncate">
            {selectedOption ? (
              <>
                {selectedOption.icon}
                {selectedOption.label}
              </>
            ) : (
              <span className="text-[#667185]">{placeholder}</span>
            )}
          </span>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Listbox.Button>
        
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute z-50 mt-1 max-h-60 w-[200px] overflow-auto rounded-xl border border-[#D0D5DD] bg-white p-1 text-[#101928] shadow-md focus:outline-none [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#E4E7EC] [&::-webkit-scrollbar-track]:bg-transparent">
            {options.map((option) => (
              <Listbox.Option
                key={option.value}
                value={option.value}
                className={({ active, selected }) =>
                  cn(
                    "relative flex cursor-pointer select-none items-center gap-2 rounded-lg py-2 px-3 text-[14px]",
                    (active || selected) && "bg-[#F9FAFB]"
                  )
                }
              >
                {({ selected }) => (
                  <>
                    {option.icon}
                    {option.label}
                    {selected && (
                      <span className="absolute right-2">
                        <Check className="h-4 w-4" />
                      </span>
                    )}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
} 