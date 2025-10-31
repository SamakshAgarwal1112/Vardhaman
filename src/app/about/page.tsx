'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: '30+', label: 'Years Experience' },
    { number: '10K+', label: 'Happy Customers' },
    { number: '500+', label: 'Products' },
    { number: '100%', label: 'Satisfaction' }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-burgundy-50 to-cream-100">
        <div className={`max-w-4xl mx-auto text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
            About Us
          </h1>
        </div>
      </section>

      <section className="pb-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1600166898405-da9535204843?w=800&h=600&fit=crop&q=80"
                  alt="Our craftsmanship"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-900/30 to-transparent"></div>
              </div>
            </div>

            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  At VARDHAMAN CARPET, we are dedicated to providing high-quality foam and furnishings 
                  that combine luxury with practicality. Our journey began over three decades ago with 
                  a simple vision: to bring warmth and comfort to every home.
                </p>
                <p>
                  Our products are crafted with attention to detail, ensuring durability and comfort. 
                  Each piece tells a story of craftsmanship, tradition, and innovation.
                </p>
                <p>
                  With a commitment to customer satisfaction, we strive to create spaces that reflect 
                  your unique style and enhance your everyday living experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-burgundy-900 to-burgundy-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`text-center transform transition-all duration-700 delay-${index * 100} ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
              >
                <div className="text-5xl md:text-6xl font-bold text-gray mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600/80 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-burgundy-50 to-cream-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            {"Let's create something beautiful together"}
          </p>
          <button className="bg-gradient-to-r from-burgundy-700 to-burgundy-900 hover:from-burgundy-800 hover:to-burgundy-950 text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            Explore Our Products
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export const dynamic = 'force-static';