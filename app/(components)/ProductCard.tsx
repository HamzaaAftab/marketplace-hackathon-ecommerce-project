'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface ProductCardProps {
  slug: string;
  image: string;
  title: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ slug, image, title, price }) => {
  const router = useRouter();

  const handleProductClick = () => {
    router.push(`/product/${slug}`);
  };

  return (
    <div
      onClick={handleProductClick}
      className="group relative bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl transform hover:scale-[1.06]"
    >
      {/* Image Container with Hover Effect */}
      <div className="relative w-full h-72 overflow-hidden">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-all duration-500 group-hover:brightness-75"
        />
      </div>

      {/* Product Title */}
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>

      {/* Hover Effect: Price & Add to Cart */}
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <p className="text-2xl font-bold text-white mb-4 transform scale-75 group-hover:scale-100 transition-transform duration-500">
          ${price}
        </p>
        <button className="px-8 py-3 bg-gradient-to-r from-[#FF6347] to-[#9a2e1b] text-white font-bold rounded-full hover:scale-110 transition-transform duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
