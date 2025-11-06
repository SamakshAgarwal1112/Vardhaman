import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import { IMAGES } from '@/config/cloudinary';

export default function Hero() {
  return (
    <section className="relative h-[800px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center transform scale-105"
        style={{
          backgroundImage: `url('${IMAGES.hero.background}')`,
          backgroundColor: '#8B6B7A',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-burgundy-950/80 via-burgundy-900/70 to-burgundy-800/60"></div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
      </div>

      <div className="absolute top-20 left-10 w-32 h-32 bg-gold-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-champagne-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 text-center px-4 pb-20 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6 animate-fadeIn">
          <Sparkles className="w-4 h-4 text-gold-300" />
          <span className="text-sm text-white/90 font-medium">Premium Quality Since 1990</span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          <span className="block mb-2">VARDHAMAN CARPET</span>
          <span className="block text-3xl md:text-4xl lg:text-5xl font-light text-gold-200">
            Luxury in Every Inch
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed animate-fadeIn" style={{ animationDelay: '0.4s' }}>
          Your destination for premium foam and furnishings. Discover our exquisite 
          collection designed to elevate your living spaces with comfort and style.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
          <Button 
            asChild
            size="lg"
            className="bg-white hover:bg-white/90 text-burgundy-900 px-10 py-7 text-lg font-semibold shadow-2xl hover:shadow-gold-500/20 transition-all duration-300 hover:scale-105 border-2 border-gold-400/30"
          >
            <Link href="/products">Explore Collection</Link>
          </Button>
          
          <Button 
            asChild
            size="lg"
            variant="outline"
            className="bg-transparent hover:bg-white/10 text-white border-2 border-white/30 px-10 py-7 text-lg font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}