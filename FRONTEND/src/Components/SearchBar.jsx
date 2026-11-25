import { Search } from "lucide-react";

// className lets you reuse your existing styles:
// "bags-search" on the Bags page, "products-search" on the Products page
export default function SearchBar({
  value,
  onChange,
  placeholder = "Search...",
  className = "bags-search",
}) {
  return (
    <div className={className}>
      <Search size={16} />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}