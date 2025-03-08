import React from "react";
import { Input } from "@/components/ui/input/Input";
import { Search, LayoutGrid, List } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface SearchBarProps {
  onSearch: (query: string) => void;
  onViewToggle: (type: 'grid' | 'list') => void;
  viewType: 'grid' | 'list';
}

export const SearchBar = ({ onSearch, onViewToggle, viewType }: SearchBarProps) => {
  return (
    <div className="flex items-center justify-between gap-6 mt-6">
      <div className="relative flex-1">
        <Input
          placeholder="Search"
          variant="rounded"
          size="sm"
          leftIcon={<Search className="h-4 w-4 text-[#98A2B3]" />}
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      <ToggleGroup type="single" value={viewType} onValueChange={(value) => value && onViewToggle(value as 'grid' | 'list')}>
        <ToggleGroupItem value="grid" aria-label="Grid view">
          <LayoutGrid className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="list" aria-label="List view">
          <List className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}; 