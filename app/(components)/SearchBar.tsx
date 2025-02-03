"use client";

import { FiSearch } from "react-icons/fi";
import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query) alert(`Searching for: ${query}`);
  };

  return (
    <div className="relative">
      <input
        type="text"
        className="border rounded-full px-4 py-1 w-40 md:w-64 focus:outline-none focus:border-[#E67E22]"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch} className="absolute right-3 top-1.5">
        <FiSearch size={18} className="text-gray-500 hover:text-[#E67E22]" />
      </button>
    </div>
  );
}
