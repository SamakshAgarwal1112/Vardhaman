// src/data/products.ts

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  bgColor: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
  features: string[];
  inStock: boolean;
}

export const productCategories: ProductCategory[] = [
  {
    id: 'foam',
    name: 'Foam',
    description: 'Premium quality foam products for various applications',
    image: 'YOUR_CLOUDINARY_URL/foam.jpg',
    bgColor: 'bg-amber-100',
  },
  {
    id: 'furnishings',
    name: 'Furnishings',
    description: 'Elegant home furnishings and decor items',
    image: 'YOUR_CLOUDINARY_URL/furnishings.jpg',
    bgColor: 'bg-orange-50',
  },
  {
    id: 'carpets',
    name: 'Carpets',
    description: 'Luxurious carpet collections for every space',
    image: 'YOUR_CLOUDINARY_URL/carpets.jpg',
    bgColor: 'bg-stone-100',
  },
  {
    id: 'wallpapers',
    name: 'Wallpapers',
    description: 'Designer wallpapers to transform your walls',
    image: 'YOUR_CLOUDINARY_URL/wallpapers.jpg',
    bgColor: 'bg-emerald-50',
  },
  {
    id: 'mattresses',
    name: 'Mattresses',
    description: 'Comfortable mattresses for better sleep',
    image: 'YOUR_CLOUDINARY_URL/mattresses.jpg',
    bgColor: 'bg-slate-100',
  },
];

export const products: Product[] = [
  // Foam Products
  {
    id: 'foam-1',
    name: 'Premium Memory Foam',
    category: 'foam',
    description: 'High-density memory foam for superior comfort',
    price: 2999,
    image: 'YOUR_CLOUDINARY_URL/foam-1.jpg',
    features: ['High density', 'Temperature sensitive', 'Durable'],
    inStock: true,
  },
  // Add more products as needed
];

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter(product => product.category === categoryId);
}

export function getProductById(productId: string): Product | undefined {
  return products.find(product => product.id === productId);
}