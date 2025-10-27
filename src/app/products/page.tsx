// src/app/products/page.tsx
'use client';

import { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OptimizedImage from '@/components/OptimizedImage';
import { Card } from '@/components/ui/card';

// Product data with placeholder images
const productCollections = [
  {
    id: 'foam',
    title: 'Premium Foam Collection',
    products: [
      { id: 1, name: 'Memory Foam', image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=400&h=400&fit=crop&q=80' },
      { id: 2, name: 'Latex Foam', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop&q=80' },
      { id: 3, name: 'High Density Foam', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&q=80' },
      { id: 4, name: 'Cushion Foam', image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop&q=80' },
      { id: 5, name: 'Upholstery Foam', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&h=400&fit=crop&q=80' },
    ]
  },
  {
    id: 'carpets',
    title: 'Luxury Carpet Collection',
    products: [
      { id: 6, name: 'Persian Carpet', image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=400&h=400&fit=crop&q=80' },
      { id: 7, name: 'Modern Rug', image: 'https://images.unsplash.com/photo-1594823501259-2e6d04826cf2?w=400&h=400&fit=crop&q=80' },
      { id: 8, name: 'Shag Carpet', image: 'https://images.unsplash.com/photo-1615876063947-e2d29c37f01d?w=400&h=400&fit=crop&q=80' },
      { id: 9, name: 'Runner Carpet', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&q=80' },
      { id: 10, name: 'Area Rug', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&h=400&fit=crop&q=80' },
    ]
  },
  {
    id: 'mattresses',
    title: 'Premium Mattress Collection',
    products: [
      { id: 11, name: 'Orthopedic Mattress', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=400&fit=crop&q=80' },
      { id: 12, name: 'Memory Foam Mattress', image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=400&fit=crop&q=80' },
      { id: 13, name: 'Spring Mattress', image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=400&h=400&fit=crop&q=80' },
      { id: 14, name: 'Luxury Mattress', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=400&fit=crop&q=80' },
      { id: 15, name: 'Kids Mattress', image: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=400&h=400&fit=crop&q=80' },
    ]
  },
  {
    id: 'furnishings',
    title: 'Home Furnishings Collection',
    products: [
      { id: 16, name: 'Curtains', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&h=400&fit=crop&q=80' },
      { id: 17, name: 'Cushions', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&q=80' },
      { id: 18, name: 'Throws', image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop&q=80' },
      { id: 19, name: 'Table Runners', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop&q=80' },
      { id: 20, name: 'Bedding Sets', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=400&fit=crop&q=80' },
    ]
  },
  {
    id: 'wallpapers',
    title: 'Designer Wallpaper Collection',
    products: [
      { id: 21, name: 'Floral Wallpaper', image: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=400&h=400&fit=crop&q=80' },
      { id: 22, name: 'Geometric Wallpaper', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&h=400&fit=crop&q=80' },
      { id: 23, name: 'Textured Wallpaper', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&q=80' },
      { id: 24, name: 'Mural Wallpaper', image: 'https://images.unsplash.com/photo-1615876063947-e2d29c37f01d?w=400&h=400&fit=crop&q=80' },
      { id: 25, name: '3D Wallpaper', image: 'https://images.unsplash.com/photo-1594823501259-2e6d04826cf2?w=400&h=400&fit=crop&q=80' },
    ]
  },
];

function InfiniteCarousel({ products, direction = 'left' }: { 
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  products: any[], 
  direction?: 'left' | 'right' 
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = direction === 'left' ? 0 : scrollContainer.scrollWidth / 2;

    const scroll = () => {
      if (direction === 'left') {
        scrollPosition += 0.5;
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
        }
      } else {
        scrollPosition -= 0.5;
        if (scrollPosition <= 0) {
          scrollPosition = scrollContainer.scrollWidth / 2;
        }
      }
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [direction]);

  // Duplicate products for seamless loop
  const duplicatedProducts = [...products, ...products];

  return (
    <div className="relative overflow-hidden">
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden"
        style={{ scrollBehavior: 'auto' }}
      >
        {duplicatedProducts.map((product, index) => (
          <Card 
            key={`${product.id}-${index}`}
            className="flex-shrink-0 w-64 overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
          >
            <div className="relative h-64 overflow-hidden bg-gray-100">
              <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-500">
                <OptimizedImage
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <button className="w-full bg-white text-burgundy-800 py-2 rounded-lg font-semibold hover:bg-burgundy-50 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 text-lg">{product.name}</h3>
              <p className="text-sm text-gray-600 mt-1">Premium Quality</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-cream-50 to-white">
      <Navbar />
      
      {/* Page Header */}
      <section className="py-16 px-4 text-center bg-gradient-to-r from-burgundy-800 to-burgundy-900">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Product Collections
          </h1>
          <p className="text-lg text-white/90">
            Explore our wide range of premium foam, carpets, mattresses, furnishings, and wallpapers
          </p>
        </div>
      </section>

      {/* Product Carousels */}
      <section className="py-12">
        {productCollections.map((collection, index) => (
          <div key={collection.id} className="mb-16">
            <div className="max-w-7xl mx-auto px-4 mb-6">
              <h2 className="text-3xl font-bold text-gray-900">{collection.title}</h2>
              <div className="w-20 h-1 bg-burgundy-600 mt-2"></div>
            </div>
            <InfiniteCarousel 
              products={collection.products}
              direction={index % 2 === 0 ? 'left' : 'right'}
            />
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-burgundy-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {"Can't Find What You're Looking For?"}
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Our team is here to help you find the perfect products for your space
          </p>
          <button className="bg-burgundy-800 hover:bg-burgundy-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Contact Us Today
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// Enable static generation
export const dynamic = 'force-static';