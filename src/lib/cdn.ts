// CDN Configuration - Update these with your Cloudinary/Pixboost details
export const CDN_CONFIG = {
  cloudinary: {
    cloudName: 'YOUR_CLOUD_NAME',
    baseUrl: 'https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload',
    // Transformation presets for different use cases
    transforms: {
      thumbnail: 'c_fill,w_400,h_400,q_auto,f_auto',
      card: 'c_fill,w_600,h_600,q_auto,f_auto',
      hero: 'c_fill,w_1920,h_1080,q_auto,f_auto',
      detail: 'c_fill,w_1200,h_1200,q_auto,f_auto',
    }
  },
  pixboost: {
    baseUrl: 'https://pixboost.com/api/2/img',
    // Transformation parameters
    transforms: {
      thumbnail: 'resize?size=400x400&auth=YOUR_AUTH_TOKEN',
      card: 'resize?size=600x600&auth=YOUR_AUTH_TOKEN',
      hero: 'resize?size=1920x1080&auth=YOUR_AUTH_TOKEN',
      detail: 'resize?size=1200x1200&auth=YOUR_AUTH_TOKEN',
    }
  }
};

/**
 * Generate optimized image URL from Cloudinary
 * @param imagePath - Path to image in Cloudinary (e.g., 'products/foam-1.jpg')
 * @param transform - Transformation preset (thumbnail, card, hero, detail)
 */
export function getCloudinaryUrl(imagePath: string, transform: keyof typeof CDN_CONFIG.cloudinary.transforms = 'card'): string {
  const { baseUrl, transforms } = CDN_CONFIG.cloudinary;
  return `${baseUrl}/${transforms[transform]}/${imagePath}`;
}

/**
 * Generate optimized image URL from Pixboost
 * @param imageUrl - Full URL to original image
 * @param transform - Transformation preset (thumbnail, card, hero, detail)
 */
export function getPixboostUrl(imageUrl: string, transform: keyof typeof CDN_CONFIG.pixboost.transforms = 'card'): string {
  const { baseUrl, transforms } = CDN_CONFIG.pixboost;
  return `${baseUrl}/${encodeURIComponent(imageUrl)}/${transforms[transform]}`;
}

/**
 * Fallback to Unsplash images for demo purposes
 * Replace these with your actual product images
 */
export function getFallbackImage(category: string, index: number = 0): string {
  const fallbacks: Record<string, string[]> = {
    foam: [
      'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=400&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&h=400&fit=crop&q=80',
    ],
    carpets: [
      'https://images.unsplash.com/photo-1600166898405-da9535204843?w=400&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1594823501259-2e6d04826cf2?w=400&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1615876063947-e2d29c37f01d?w=400&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&h=400&fit=crop&q=80',
    ],
    mattresses: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=400&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=400&h=400&fit=crop&q=80',
    ],
    furnishings: [
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=400&fit=crop&q=80',
    ],
    wallpapers: [
      'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=400&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1615876063947-e2d29c37f01d?w=400&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1594823501259-2e6d04826cf2?w=400&h=400&fit=crop&q=80',
    ],
  };
  
  return fallbacks[category]?.[index] || fallbacks.foam[0];
}