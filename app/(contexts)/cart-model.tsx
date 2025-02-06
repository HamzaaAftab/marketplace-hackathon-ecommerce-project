'use client';

import { createContext, useContext, useState } from 'react';

type CartModalContextType = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
};

const CartModalContext = createContext<CartModalContextType | undefined>(undefined);

export function CartModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CartModalContext.Provider value={{ isOpen, onOpenChange: setIsOpen }}>
      {children}
    </CartModalContext.Provider>
  );
}

export function useCartModal() {
  const context = useContext(CartModalContext);
  if (context === undefined) {
    throw new Error('useCartModal must be used within a CartModalProvider');
  }
  return context;
}