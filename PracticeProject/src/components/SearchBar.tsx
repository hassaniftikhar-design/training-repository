
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  search: string;
  onSearch: (value: string) => void;
}

function SearchBar({ search, onSearch }: SearchBarProps) {
  return (
    <div className="w-full">
      <Input
        type="text"
        placeholder="🔍 Search student..."
        value={search}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;