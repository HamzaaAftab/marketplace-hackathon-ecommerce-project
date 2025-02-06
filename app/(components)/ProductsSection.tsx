'use client';
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { client } from '@/sanity/lib/client';

type Product = {
  _id: string;
  title: string;
  price: number;
  slug: string;
  imageUrl: string;
  description: string;
};

const ProductsSection: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"] | order(_createdAt desc) [0..5] {
        _id,
        title,
        price,
        "slug": slug.current,
        "imageUrl": image.asset->url,
        description
      }`;
      try {
        const data = await client.fetch(query);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="py-16 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8 md:mb-16">Our Featured Products</h2>

        {products.length === 0 ? (
          <p>Loading products...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {products.map((product) => (
              <ProductCard
                key={product._id}
                slug={product.slug}
                image={product.imageUrl}
                title={product.title}
                price={product.price}
                description={product.description}  // ✅ Added for AddToCartButton
              />
            ))}
          </div>
        )}

        <div className="mt-8">
          <a
            href="/shop"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#d0a53f] to-[#806118] text-white text-lg font-semibold rounded-full shadow-md hover:bg-blue-700 transition-all duration-300"
          >
            See More
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
