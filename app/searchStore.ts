import { create } from "zustand";

interface Product {
  _id: string;
  title: string;
  price: number;
  slug: string;
  image: string;
}

interface SearchStore {
  query: string;
  results: Product[];
  isOpen: boolean;
  setQuery: (query: string) => void;
  setResults: (results: Product[]) => void;
  toggleOpen: (state: boolean) => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
  query: "",
  results: [],
  isOpen: false,
  setQuery: (query) => set({ query }),
  setResults: (results) => set({ results }),
  toggleOpen: (state) => set({ isOpen: state }),
}));
