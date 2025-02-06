'use client';
import React from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import { useCartModal } from '../(contexts)/cart-model';

interface AddToCartButtonProps {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
  quantity?: number; // Add quantity prop
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ 
  id, 
  name, 
  price, 
  image, 
  description,
  quantity = 1 // Default to 1
}) => {
  const { addItem } = useShoppingCart();
  const { onOpenChange } = useCartModal();

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    addItem({
      id,
      name,
      price,
      currency: 'USD',
      image,
      description,
    }, { count: quantity }); // Add quantity option

    onOpenChange(true); // Open cart modal
  };

  // Rest of the component remains the same
  return (
    <button
      onClick={handleAddToCart}
      className="px-8 py-3 bg-gradient-to-r from-[#a965a0] to-[#119548] text-white font-bold rounded-full hover:scale-110 transition-transform duration-300"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;