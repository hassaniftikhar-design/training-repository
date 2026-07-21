interface SearchBarProps {
  search: string;
  onSearch: (value: string) => void;
}

function SearchBar({ search, onSearch }: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder="Search student..."
      value={search}
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}

export default SearchBar;