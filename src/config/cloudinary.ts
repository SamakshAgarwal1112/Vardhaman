const CLOUDINARY_BASE_URL = process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL ||  'https://res.cloudinary.com/OWNER_NAME/image/upload';

export const IMAGE_PRESETS = {
  hero: 'w_1920,h_1080,c_fill,q_auto,f_auto',
  category: 'w_600,h_400,c_fill,q_auto,f_auto',
  product: 'w_800,h_800,c_fill,q_auto,f_auto',
  thumbnail: 'w_400,h_400,c_fill,q_auto,f_auto',
};

export const IMAGES = {
  hero: {
    background: `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.hero}/v1762414066/Vardhaman/IMG-20250106-WA0013_v8030b.jpg`,
    fallback: 'linear-gradient(135deg, #7c3339 0%, #8B6B7A 50%, #9d7c8a 100%)',
  },

  categories: {
    foam: `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.category}/v1762414066/Vardhaman/IMG-20250909-WA0032_th3rq5.jpg`,
    furnishings: `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.category}/v1762414066/Vardhaman/IMG-20250909-WA0037_gwlr1l.jpg`,
    carpets: `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.category}/v1762414066/Vardhaman/IMG-20250909-WA0021_fzhxtp.jpg`,
    wallpapers: `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.category}/v1762414066/Vardhaman/IMG-20250909-WA0033_ohu6z7.jpg`,
    mattresses: `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.category}/v1762414066/Vardhaman/IMG-20250909-WA0015_fufjvw.jpg`,
  },

  products: {
    foam: [
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1762414066/Vardhaman/IMG-20250909-WA0032_th3rq5.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1762414066/Vardhaman/IMG-20250909-WA0032_th3rq5.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1762414066/Vardhaman/IMG-20250909-WA0032_th3rq5.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1762414066/Vardhaman/IMG-20250909-WA0032_th3rq5.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1762414066/Vardhaman/IMG-20250909-WA0032_th3rq5.jpg`,
    ],
    carpets: [
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1762414066/Vardhaman/IMG-20250909-WA0021_fzhxtp.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1762414066/Vardhaman/IMG-20250909-WA0021_fzhxtp.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1762414066/Vardhaman/IMG-20250909-WA0021_fzhxtp.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1762414066/Vardhaman/IMG-20250909-WA0021_fzhxtp.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1762414066/Vardhaman/IMG-20250909-WA0021_fzhxtp.jpg`,
    ],
    mattresses: [
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1762414066/Vardhaman/IMG-20250909-WA0015_fufjvw.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1762414066/Vardhaman/IMG-20250909-WA0015_fufjvw.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1762414066/Vardhaman/IMG-20250909-WA0015_fufjvw.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1762414066/Vardhaman/IMG-20250909-WA0015_fufjvw.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1762414066/Vardhaman/IMG-20250909-WA0015_fufjvw.jpg`,
    ],
    furnishings: [
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1762414066/Vardhaman/IMG-20250909-WA0037_gwlr1l.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1762414066/Vardhaman/IMG-20250909-WA0037_gwlr1l.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1762414066/Vardhaman/IMG-20250909-WA0037_gwlr1l.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1762414066/Vardhaman/IMG-20250909-WA0037_gwlr1l.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1762414066/Vardhaman/IMG-20250909-WA0037_gwlr1l.jpg`,
    ],
    wallpapers: [
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1762414066/Vardhaman/IMG-20250909-WA0033_ohu6z7.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1762414066/Vardhaman/IMG-20250909-WA0033_ohu6z7.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1762414066/Vardhaman/IMG-20250909-WA0033_ohu6z7.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1762414066/Vardhaman/IMG-20250909-WA0033_ohu6z7.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1762414066/Vardhaman/IMG-20250909-WA0033_ohu6z7.jpg`,
    ],
  },

  about: {
    craftsmanship: `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.hero}/v1762414066/Vardhaman/IMG-20250909-WA0037_gwlr1l.jpg`,
  },
};

export function getCloudinaryUrl(
  path: string,
  preset: keyof typeof IMAGE_PRESETS = 'product'
): string {
  return `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS[preset]}/${path}`;
}

export function isCloudinaryUrl(url: string): boolean {
  return url.includes('res.cloudinary.com');
}
