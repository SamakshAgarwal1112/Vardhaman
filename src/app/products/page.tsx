'use client';

import { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OptimizedImage from '@/components/OptimizedImage';
import { Card } from '@/components/ui/card';
import { ArrowRight, Sparkles, Package, Shield, Truck } from 'lucide-react';
import { IMAGES } from '@/config/cloudinary';

const productCollections = [
  {
    id: 'foam',
    title: 'Premium Foam Collection',
    subtitle: 'Comfort meets durability',
    color: 'from-amber-500 to-orange-600',
    products: [
      { id: 1, name: 'Memory Foam', image: IMAGES.products.foam[0] || 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=400&h=400&fit=crop&q=80', price: '₹2,999'},
      { id: 2, name: 'Latex Foam', image: IMAGES.products.foam[1] || 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop&q=80', price: '₹3,499'},
      { id: 3, name: 'High Density Foam', image: IMAGES.products.foam[2] || 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&q=80', price: '₹2,799'},
      { id: 4, name: 'Cushion Foam', image: IMAGES.products.foam[3] || 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop&q=80', price: '₹1,999'},
      { id: 5, name: 'Upholstery Foam', image: IMAGES.products.foam[4] || 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&h=400&fit=crop&q=80', price: '₹2,599'},
    ]
  },
  {
    id: 'carpets',
    title: 'Luxury Carpet Collection',
    subtitle: 'Elegance woven into every thread',
    color: 'from-burgundy-600 to-rose-700',
    products: [
      { id: 6, name: 'Persian Carpet', image: IMAGES.products.carpets[0] || 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=400&h=400&fit=crop&q=80', price: '₹15,999'},
      { id: 7, name: 'Modern Rug', image: IMAGES.products.carpets[1] || 'https://images.unsplash.com/photo-1594823501259-2e6d04826cf2?w=400&h=400&fit=crop&q=80', price: '₹8,999'},
      { id: 8, name: 'Shag Carpet', image: IMAGES.products.carpets[2] || 'https://images.unsplash.com/photo-1615876063947-e2d29c37f01d?w=400&h=400&fit=crop&q=80', price: '₹12,499'},
      { id: 9, name: 'Runner Carpet', image: IMAGES.products.carpets[3] || 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&q=80', price: '₹6,999'},
      { id: 10, name: 'Area Rug', image: IMAGES.products.carpets[4] || 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&h=400&fit=crop&q=80', price: '₹9,999'},
    ]
  },
  {
    id: 'mattresses',
    title: 'Premium Mattress Collection',
    subtitle: 'Sleep in ultimate comfort',
    color: 'from-blue-500 to-indigo-600',
    products: [
      { id: 11, name: 'Orthopedic Mattress', image: IMAGES.products.mattresses[0] || 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=400&fit=crop&q=80', price: '₹18,999'},
      { id: 12, name: 'Memory Foam Mattress', image: IMAGES.products.mattresses[1] || 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=400&fit=crop&q=80', price: '₹22,999'},
      { id: 13, name: 'Spring Mattress', image: IMAGES.products.mattresses[2] || 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=400&h=400&fit=crop&q=80', price: '₹14,999'},
      { id: 14, name: 'Luxury Mattress', image: IMAGES.products.mattresses[3] || 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=400&fit=crop&q=80', price: '₹28,999'},
      { id: 15, name: 'Kids Mattress', image: IMAGES.products.mattresses[4] || 'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=400&h=400&fit=crop&q=80', price: '₹12,999'},
    ]
  },
  {
    id: 'furnishings',
    title: 'Home Furnishings Collection',
    subtitle: 'Transform your living spaces',
    color: 'from-emerald-500 to-teal-600',
    products: [
      { id: 16, name: 'Curtains', image: IMAGES.products.furnishings[0] || 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&h=400&fit=crop&q=80', price: '₹3,999'},
      { id: 17, name: 'Cushions', image: IMAGES.products.furnishings[1] || 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&q=80', price: '₹899'},
      { id: 18, name: 'Throws', image: IMAGES.products.furnishings[2] || 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop&q=80', price: '₹1,499'},
      { id: 19, name: 'Table Runners', image: IMAGES.products.furnishings[3] || 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop&q=80', price: '₹799'},
      { id: 20, name: 'Bedding Sets', image: IMAGES.products.furnishings[4] || 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=400&fit=crop&q=80', price: '₹5,999'},
    ]
  },
  {
    id: 'wallpapers',
    title: 'Designer Wallpaper Collection',
    subtitle: 'Wall art that speaks volumes',
    color: 'from-purple-500 to-pink-600',
    products: [
      { id: 21, name: 'Floral Wallpaper', image: IMAGES.products.wallpapers[0] || 'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=400&h=400&fit=crop&q=80', price: '₹2,499'},
      { id: 22, name: 'Geometric Wallpaper', image: IMAGES.products.wallpapers[1] || 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&h=400&fit=crop&q=80', price: '₹2,799'},
      { id: 23, name: 'Textured Wallpaper', image: IMAGES.products.wallpapers[2] || 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&q=80', price: '₹3,299'},
      { id: 24, name: 'Mural Wallpaper', image: IMAGES.products.wallpapers[3] || 'https://images.unsplash.com/photo-1615876063947-e2d29c37f01d?w=400&h=400&fit=crop&q=80', price: '₹4,999'},
      { id: 25, name: '3D Wallpaper', image: IMAGES.products.wallpapers[4] || 'https://images.unsplash.com/photo-1594823501259-2e6d04826cf2?w=400&h=400&fit=crop&q=80', price: '₹5,499'},
    ]
  },
];

interface InfiniteCarouselProps {
  products: Array<{
    id: number;
    name: string;
    image: string;
    price: string;
  }>;
  direction?: 'left' | 'right';
}

function InfiniteCarousel({ products, direction = 'left' }: InfiniteCarouselProps) {
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
        className="flex gap-6 overflow-x-hidden py-4"
        style={{ scrollBehavior: 'auto' }}
      >
        {duplicatedProducts.map((product, index) => (
          <Card 
            key={`${product.id}-${index}`}
            className="flex-shrink-0 w-80 overflow-hidden hover:shadow-2xl transition-all duration-500 group cursor-pointer border-0 bg-white"
          >
            <div className="relative overflow-hidden">
              <OptimizedImage
                src={product.image}
                alt={product.name}
                aspectRatio="1/1"
                className="w-full transform group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute top-3 right-3 bg-gradient-to-r from-gold-400 to-gold-600 text-gray-500 px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                <Sparkles size={12} />
                <span>Premium</span>
              </div>
            </div>

            <div className="p-6 bg-white">
              <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-burgundy-700 transition-colors duration-300">
                {product.name}
              </h3>
              <div className="flex items-center justify-between">
                <p className="text-2xl font-bold bg-gradient-to-r text-gray-500 from-burgundy-700 to-burgundy-900 bg-clip-text">
                  {product.price}
                </p>
                <span className="text-sm text-gray-500 flex items-center gap-1">
                  <Sparkles size={14} className="text-gold-500" />
                  Premium
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
    </div>
  );
}

export default function ProductsPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-cream-50 to-white">
      <Navbar />
      
      <section className="relative py-28 px-4 overflow-hidden bg-gradient-to-br from-burgundy-950 via-burgundy-900 to-burgundy-950">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className={`relative max-w-4xl mx-auto text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-burgundy-50 border border-burgundy-100 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-burgundy-600" />
            <span className="text-sm text-burgundy-700 font-medium">Our Collections</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Discover Premium Quality
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-orange-300 mt-2">
              Products
            </span>
          </h1>
          <p className="text-xl text-gray-600/80 max-w-2xl mx-auto leading-relaxed">
            Explore our wide range of premium foam, carpets, mattresses, furnishings, and wallpapers crafted with excellence
          </p>
        </div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-gold-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-champagne-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </section>

      <section className="py-12 bg-white border-y border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center gap-4 text-gray-700">
              <div className="bg-gradient-to-br from-burgundy-100 to-burgundy-50 p-4 rounded-2xl shadow-md">
                <Shield className="text-burgundy-700" size={28} />
              </div>
              <div>
                <p className="font-bold text-lg">Quality Guaranteed</p>
                <p className="text-sm text-gray-500">Premium materials only</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 text-gray-700">
              <div className="bg-gradient-to-br from-gold-100 to-gold-50 p-4 rounded-2xl shadow-md">
                <Truck className="text-gold-700" size={28} />
              </div>
              <div>
                <p className="font-bold text-lg">Free Delivery</p>
                <p className="text-sm text-gray-500">On orders above ₹10,000</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 text-gray-700">
              <div className="bg-gradient-to-br from-champagne-100 to-champagne-50 p-4 rounded-2xl shadow-md">
                <Package className="text-champagne-700" size={28} />
              </div>
              <div>
                <p className="font-bold text-lg">Easy Returns</p>
                <p className="text-sm text-gray-500">7-day return policy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        {productCollections.map((collection, index) => (
          <div key={collection.id} id={collection.id} className="mb-24 scroll-mt-20">
            <div className="max-w-7xl mx-auto px-4 mb-10">
              <div className={`flex items-center gap-6 transform transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-3 h-20 bg-gradient-to-b ${collection.color} rounded-full shadow-lg`}></div>
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-2">
                    {collection.title}
                  </h2> 
                  <p className="text-gray-600 text-lg flex items-center gap-2">
                    <Sparkles size={16} className="text-gold-500" />
                    {collection.subtitle}
                  </p>
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

      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-burgundy-50 via-orange-50 to-amber-50"></div>
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, #9f2d4c 1px, transparent 1px), radial-gradient(circle at 80% 80%, #f59e0b 1px, transparent 1px)',
          backgroundSize: '60px 60px, 80px 80px'
        }}></div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-3xl shadow-2xl p-12 transform hover:scale-105 transition-transform duration-500">
            <div className="w-20 h-20 bg-gradient-to-br from-burgundy-700 to-burgundy-900 rounded-2xl flex items-center justify-center mx-auto mb-6 transform hover:rotate-12 transition-transform duration-500 shadow-xl">
              <Package className="text-gray-500" size={36} />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {"Can't Find What You're Looking For?"}
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Our expert team is here to help you find the perfect products for your space. 
              Get personalized recommendations and exclusive deals!
            </p>
            <button className="bg-gradient-to-r from-burgundy-700 via-burgundy-800 to-burgundy-900 hover:from-burgundy-800 hover:via-burgundy-900 hover:to-burgundy-950 text-gray-500 px-12 py-5 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3 mx-auto shadow-xl">
              <span>Contact Us Today</span>
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