// src/components/Hero.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('YOUR_CLOUDINARY_URL/hero-furniture.jpg')",
          backgroundColor: '#8B6B7A', // Fallback color
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-900/60 to-burgundy-800/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          VARDHAMAN CARPET
        </h1>
        <p className="text-base md:text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Your destination for premium foam and furnishings. Discover our exquisite 
          collection designed to elevate your living spaces with comfort and style.
        </p>
        <Button 
          asChild
          size="lg"
          className="bg-burgundy-700 hover:bg-burgundy-800 text-white px-8 py-6 text-base font-medium"
        >
          <Link href="/products">Explore Products</Link>
        </Button>
        <p className="text-white/70 text-sm mt-4">
          vardhamancarpeting.com
        </p>
      </div>
    </section>
  );
}