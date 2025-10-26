// src/components/ProductCategories.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';

const categories = [
  {
    id: 'foam',
    name: 'Foam',
    image: 'YOUR_CLOUDINARY_URL/foam.jpg',
    bgColor: 'bg-amber-100',
  },
  {
    id: 'furnishings',
    name: 'Furnishings',
    image: 'YOUR_CLOUDINARY_URL/furnishings.jpg',
    bgColor: 'bg-orange-50',
  },
  {
    id: 'carpets',
    name: 'Carpets',
    image: 'YOUR_CLOUDINARY_URL/carpets.jpg',
    bgColor: 'bg-stone-100',
  },
  {
    id: 'wallpapers',
    name: 'Wallpapers',
    image: 'YOUR_CLOUDINARY_URL/wallpapers.jpg',
    bgColor: 'bg-emerald-50',
  },
  {
    id: 'mattresses',
    name: 'Mattresses',
    image: 'YOUR_CLOUDINARY_URL/mattresses.jpg',
    bgColor: 'bg-slate-100',
  },
];

export default function ProductCategories() {
  return (
    <section className="py-16 px-4 bg-cream-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our Product Categories
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Crafted with care, designed for life.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/products/${category.id}`}
              className="group"
            >
              <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className={`${category.bgColor} p-6 h-40 flex items-center justify-center`}>
                  {/* Placeholder for product image */}
                  <div className="w-full h-full bg-white/50 rounded-lg flex items-center justify-center">
                    <span className="text-4xl">📦</span>
                  </div>
                </div>
                <div className="p-4 text-center bg-white">
                  <h3 className="font-semibold text-gray-900 text-sm md:text-base">
                    {category.name}
                  </h3>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}