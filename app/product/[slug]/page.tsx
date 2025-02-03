"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { ChevronRight, Minus, Plus } from "lucide-react";
import Navbar from "@/app/(components)/Navbar";
import FeaturesSection from "@/app/(components)/FeaturesSection";
import Footer from "@/app/(components)/Footer";

type Product = {
  _id: string;
  title: string;
  price: number;
  description: string;
  images: string[];
};

const ProductPage = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      const query = `*[_type == "product" && slug.current == $slug][0]{
        _id,
        title,
        price,
        description,
        "images": image.asset->url
      }`;

      try {
        const data = await client.fetch(query, { slug });
        if (data) {
          const imagesArray = Array.isArray(data.images) ? data.images : [data.images];
          setProduct({ ...data, images: imagesArray });
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        setProduct(null);
      }
    };

    fetchProduct();
  }, [slug]);

  if (!product) {
    return <p className="text-center text-gray-500 text-xl py-20">Loading product...</p>;
  }

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-[#FFF9F3] px-4 py-5 sm:px-8 md:px-12 lg:px-16">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center gap-2 text-sm">
          <Link href="/" className="hover:text-[#B88E2F]">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/shop" className="hover:text-[#B88E2F]">Shop</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-500">{product.title}</span>
        </div>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="flex gap-4">
            <div className="space-y-4">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`block w-24 h-24 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-[#B88E2F]' : 'border-transparent'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Product image ${index + 1}`}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            <div className="flex-1">
              <Image
                src={product.images[selectedImage]}
                alt="Main product image"
                width={600}
                height={600}
                className="w-full rounded-lg"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <h1 className="text-4xl font-medium">{product.title}</h1>
            <div className="text-2xl text-gray-500">Rs. {product.price.toLocaleString()}</div>

            

            <p className="text-gray-600">{product.description}</p>

        

            <div className="flex gap-6">
              <div className="flex items-center border rounded">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-16 text-center border-x py-2"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button className="px-10 py-2 border border-black rounded hover:bg-black hover:text-white transition-colors">
                Add To Cart
              </button>
              
            </div>

            <hr className="my-8" />

            <div className="space-y-2 text-sm">
              <div className="flex gap-4">
                <span className="text-gray-500 w-20">SKU</span>
                <span>:</span>
                <span>SS001</span>
              </div>
              <div className="flex gap-4">
                <span className="text-gray-500 w-20">Category</span>
                <span>:</span>
                <span>Sofas</span>
              </div>
              <div className="flex gap-4">
                <span className="text-gray-500 w-20">Tags</span>
                <span>:</span>
                <span>Sofa, Chair, Home, Shop</span>
              </div>
              <div className="flex gap-4">
                <span className="text-gray-500 w-20">Share</span>
                <span>:</span>
                <div className="flex gap-4">
                  {/* Social media icons remain same */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FeaturesSection/>
    <Footer/>
    </>
  );
};

export default ProductPage;