import Link from 'next/link';
import { Card } from '@/components/ui/card';
import OptimizedImage from './OptimizedImage';
import { IMAGES } from '@/config/cloudinary';
import { ArrowRight, Sparkles } from 'lucide-react';

const categories = [
  {
    id: 'foam',
    name: 'Premium Foam',
    description: 'Comfort meets durability',
    image: IMAGES.categories.foam,
    gradient: 'from-amber-500/90 to-orange-600/90',
    icon: '🛋️',
  },
  {
    id: 'furnishings',
    name: 'Furnishings',
    description: 'Transform your spaces',
    image: IMAGES.categories.furnishings,
    gradient: 'from-emerald-500/90 to-teal-600/90',
    icon: '🛍️',
  },
  {
    id: 'carpets',
    name: 'Luxury Carpets',
    description: 'Elegance woven in',
    image: IMAGES.categories.carpets,
    gradient: 'from-burgundy-600/90 to-rose-700/90',
    icon: '🧶',
  },
  {
    id: 'wallpapers',
    name: 'Wallpapers',
    description: 'Art for your walls',
    image: IMAGES.categories.wallpapers,
    gradient: 'from-purple-500/90 to-pink-600/90',
    icon: '🎨',
  },
  {
    id: 'mattresses',
    name: 'Mattresses',
    description: 'Sleep in luxury',
    image: IMAGES.categories.mattresses,
    gradient: 'from-blue-500/90 to-indigo-600/90',
    icon: '🛌',
  },
];

export default function ProductCategories() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white via-cream-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-burgundy-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-100 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-burgundy-50 border border-burgundy-100 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-burgundy-600" />
            <span className="text-sm text-burgundy-700 font-medium">Our Collections</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore Our Premium Range
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Crafted with care, designed for life. Discover quality that speaks for itself.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              href={`/products#${category.id}`}
              className="group"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white h-full">
                <div className="relative h-64 overflow-hidden">
                  <OptimizedImage
                    src={category.image}
                    alt={category.name}
                    aspectRatio="3/4"
                    className="w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-60 group-hover:opacity-80 transition-opacity duration-500`}></div>
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-500">{category.icon}</span>
                    <h3 className="font-bold text-xl mb-2 text-center">
                      {category.name}
                    </h3>
                    <p className="text-sm text-white/90 mb-4 text-center">{category.description}</p>
                    
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="text-sm font-medium">View All</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-xs font-semibold text-burgundy-700">Premium</span>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center justify-between text-white">
                    <span className="text-sm font-medium">{category.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
