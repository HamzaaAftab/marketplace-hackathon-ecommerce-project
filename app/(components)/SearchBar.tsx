"use client";

import { FiSearch } from "react-icons/fi";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

// Define the Product type
type Product = {
  title: string;
  slug: { current: string };
  price: number;
  image: string;
  description: string;
};

export default function SearchBar() {
  const [query, setQuery] = useState<string>(""); // Query is a string
  const [products, setProducts] = useState<Product[]>([]); // State to store products

  useEffect(() => {
    if (query.length >= 3) { // Start fetching when query is at least 3 characters
      searchProducts(query);
    } else {
      setProducts([]); // Clear results when the query is empty or too short
    }
  }, [query]);

  const searchProducts = async (searchQuery: string) => {
    const query = `*[_type == "product" && title match "${searchQuery}*"] {
      title,
      slug,
      price,
      image,
      description
    }`;
    const products = await client.fetch(query);
    setProducts(products); // Update the products state with search results
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
      <button onClick={() => searchProducts(query)} className="absolute right-3 top-1.5">
        <FiSearch size={18} className="text-gray-500 hover:text-[#E67E22]" />
      </button>

      {/* Show search results */}
      {products.length > 0 && (
        <div className="absolute w-full bg-white border rounded-lg mt-2 shadow-lg max-h-60 overflow-y-auto">
          <ul>
            {products.map((product, index) => (
              <li key={index} className="px-4 py-2 hover:bg-gray-100">
                <Link href={`/product/${product.slug.current}`}>
                  <div className="font-semibold">{product.title}</div>
                  <div>{product.price}</div>
                  <div className="text-sm text-gray-600">{product.description.slice(0, 50)}...</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
