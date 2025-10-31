'use client';

import { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OptimizedImage from '@/components/OptimizedImage';
import { Card } from '@/components/ui/card';
import { ArrowRight, Sparkles, Package, Shield, Truck } from 'lucide-react';

const productCollections = [
  {
    id: 'foam',
    title: 'Premium Foam Collection',
    subtitle: 'Comfort meets durability',
    color: 'from-amber-500 to-orange-600',
    products: [
      { id: 1, name: 'Memory Foam', image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=400&h=400&fit=crop&q=80', price: '₹2,999' },
      { id: 2, name: 'Latex Foam', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop&q=80', price: '₹3,499' },
      { id: 3, name: 'High Density Foam', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&q=80', price: '₹2,799' },
      { id: 4, name: 'Cushion Foam', image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop&q=80', price: '₹1,999' },
      { id: 5, name: 'Upholstery Foam', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&h=400&fit=crop&q=80', price: '₹2,599' },
    ]
  },
  {
    id: 'carpets',
    title: 'Luxury Carpet Collection',
    subtitle: 'Elegance woven into every thread',
    color: 'from-burgundy-600 to-rose-700',
    products: [
      { id: 6, name: 'Persian Carpet', image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=400&h=400&fit=crop&q=80', price: '₹15,999' },
      { id: 7, name: 'Modern Rug', image: 'https://images.unsplash.com/photo-1594823501259-2e6d04826cf2?w=400&h=400&fit=crop&q=80', price: '₹8,999' },
      { id: 8, name: 'Shag Carpet', image: 'https://images.unsplash.com/photo-1615876063947-e2d29c37f01d?w=400&h=400&fit=crop&q=80', price: '₹12,499' },
      { id: 9, name: 'Runner Carpet', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&q=80', price: '₹6,999' },
      { id: 10, name: 'Area Rug', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&h=400&fit=crop&q=80', price: '₹9,999' },
    ]
  },
  {
    id: 'mattresses',
    title: 'Premium Mattress Collection',
    subtitle: 'Sleep in ultimate comfort',
    color: 'from-blue-500 to-indigo-600',
    products: [
      { id: 11, name: 'Orthopedic Mattress', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=400&fit=crop&q=80', price: '₹18,999' },
      { id: 12, name: 'Memory Foam Mattress', image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=400&fit=crop&q=80', price: '₹22,999' },
      { id: 13, name: 'Spring Mattress', image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=400&h=400&fit=crop&q=80', price: '₹14,999' },
      { id: 14, name: 'Luxury Mattress', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=400&fit=crop&q=80', price: '₹28,999' },
      { id: 15, name: 'Kids Mattress', image: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=400&h=400&fit=crop&q=80', price: '₹12,999' },
    ]
  },
  {
    id: 'furnishings',
    title: 'Home Furnishings Collection',
    subtitle: 'Transform your living spaces',
    color: 'from-emerald-500 to-teal-600',
    products: [
      { id: 16, name: 'Curtains', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&h=400&fit=crop&q=80', price: '₹3,999' },
      { id: 17, name: 'Cushions', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&q=80', price: '₹899' },
      { id: 18, name: 'Throws', image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop&q=80', price: '₹1,499' },
      { id: 19, name: 'Table Runners', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop&q=80', price: '₹799' },
      { id: 20, name: 'Bedding Sets', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=400&fit=crop&q=80', price: '₹5,999' },
    ]
  },
  {
    id: 'wallpapers',
    title: 'Designer Wallpaper Collection',
    subtitle: 'Wall art that speaks volumes',
    color: 'from-purple-500 to-pink-600',
    products: [
      { id: 21, name: 'Floral Wallpaper', image: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=400&h=400&fit=crop&q=80', price: '₹2,499' },
      { id: 22, name: 'Geometric Wallpaper', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&h=400&fit=crop&q=80', price: '₹2,799' },
      { id: 23, name: 'Textured Wallpaper', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&q=80', price: '₹3,299' },
      { id: 24, name: 'Mural Wallpaper', image: 'https://images.unsplash.com/photo-1615876063947-e2d29c37f01d?w=400&h=400&fit=crop&q=80', price: '₹4,999' },
      { id: 25, name: '3D Wallpaper', image: 'https://images.unsplash.com/photo-1594823501259-2e6d04826cf2?w=400&h=400&fit=crop&q=80', price: '₹5,499' },
    ]
  },
];

function InfiniteCarousel({ products, direction = 'left' }: { 
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  products: any[], 
  direction?: 'left' | 'right' 
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isPaused) return;

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
  }, [direction, isPaused]);

  const duplicatedProducts = [...products, ...products];

  return (
    <div 
      className="relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden py-2"
        style={{ scrollBehavior: 'auto' }}
      >
        {duplicatedProducts.map((product, index) => (
          <Card 
            key={`${product.id}-${index}`}
            className="flex-shrink-0 w-72 overflow-hidden hover:shadow-2xl transition-all duration-500 group cursor-pointer border-0 bg-white"
          >
            <div className="relative h-72 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
              <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-700 ease-out">
                <OptimizedImage
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy-900/90 via-burgundy-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <button className="w-full bg-white text-burgundy-800 py-3 rounded-lg font-semibold hover:bg-burgundy-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg">
                    View Details
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              <div className="absolute top-3 right-3 bg-burgundy-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                <Sparkles size={12} />
                Premium
              </div>
            </div>

            <div className="p-5 bg-white">
              <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-burgundy-700 transition-colors duration-300">
                {product.name}
              </h3>
              <div className="flex items-center justify-between">
                <p className="text-2xl font-bold text-burgundy-700">{product.price}</p>
                <span className="text-sm text-gray-500">Premium Quality</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      {isPaused && (
        <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-medium z-30 animate-fadeIn">
          Paused
        </div>
      )}
    </div>
  );
}

export default function ProductsPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-cream-50 via-white to-cream-50">
      <Navbar />
      
      <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-br from-burgundy-900 via-burgundy-800 to-burgundy-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className={`relative max-w-4xl mx-auto text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Discover Premium Quality
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-orange-300">
              Products
            </span>
          </h1>
          <p className="text-xl text-gray-700/90 max-w-2xl mx-auto leading-relaxed">
            Explore our wide range of premium foam, carpets, mattresses, furnishings, and wallpapers crafted with excellence
          </p>
        </div>

        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-amber-500/10 rounded-full blur-xl"></div>
      </section>

      <section className="py-8 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center gap-3 text-gray-700">
              <div className="bg-burgundy-100 p-3 rounded-full">
                <Shield className="text-burgundy-700" size={24} />
              </div>
              <div>
                <p className="font-semibold">Quality Guaranteed</p>
                <p className="text-sm text-gray-500">Premium materials only</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-700">
              <div className="bg-burgundy-100 p-3 rounded-full">
                <Truck className="text-burgundy-700" size={24} />
              </div>
              <div>
                <p className="font-semibold">Free Delivery</p>
                <p className="text-sm text-gray-500">On orders above ₹10,000</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-700">
              <div className="bg-burgundy-100 p-3 rounded-full">
                <Package className="text-burgundy-700" size={24} />
              </div>
              <div>
                <p className="font-semibold">Easy Returns</p>
                <p className="text-sm text-gray-500">7-day return policy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        {productCollections.map((collection, index) => (
          <div key={collection.id} className="mb-20">
            <div className="max-w-7xl mx-auto px-4 mb-8">
              <div className={`flex items-center gap-4 transform transition-all duration-700 delay-${index * 100} ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                <div className={`w-2 h-16 bg-gradient-to-b ${collection.color} rounded-full`}></div>
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-1">
                    {collection.title}
                  </h2> 
                  <p className="text-gray-600 text-lg">{collection.subtitle}</p>
                </div>
              </div>
            </div>

            <InfiniteCarousel 
              products={collection.products}
              direction={index % 2 === 0 ? 'left' : 'right'}
            />
          </div>
        ))}
      </section>

      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-burgundy-50 via-orange-50 to-amber-50"></div>
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, burgundy 1px, transparent 1px), radial-gradient(circle at 80% 80%, orange 1px, transparent 1px)',
          backgroundSize: '60px 60px, 80px 80px'
        }}></div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-3xl shadow-2xl p-12 transform hover:scale-105 transition-transform duration-500">
            <div className="w-16 h-16 bg-gradient-to-br from-burgundy-600 to-burgundy-800 rounded-2xl flex items-center justify-center mx-auto mb-6 transform hover:rotate-12 transition-transform duration-500">
              <Package className="text-white" size={32} />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {"Can't Find What You're Looking For?"}
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Our expert team is here to help you find the perfect products for your space. 
              Get personalized recommendations and exclusive deals!
            </p>
            <button className="bg-gradient-to-r from-burgundy-700 to-burgundy-900 hover:from-burgundy-800 hover:to-burgundy-950 text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2 mx-auto">
              Contact Us Today
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export const dynamic = 'force-static';