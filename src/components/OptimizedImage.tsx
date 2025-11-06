'use client';

import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: '1/1' | '4/3' | '16/9' | '3/4';
  objectFit?: 'cover' | 'contain' | 'fill';
  priority?: boolean;
  quality?: number;
}

export default function OptimizedImage({
  src,
  alt,
  className = '',
  aspectRatio = '1/1',
  objectFit = 'cover',
  priority = false,
  quality = 85,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const aspectRatioMap = {
    '1/1': 'aspect-square',
    '4/3': 'aspect-[4/3]',
    '16/9': 'aspect-video',
    '3/4': 'aspect-[3/4]',
  };

  return (
    <div className={`relative overflow-hidden ${aspectRatioMap[aspectRatio]} ${className}`}>
      {/* Loading skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 animate-pulse" />
      )}

      {hasError ? (
        <div className="absolute inset-0 bg-gradient-to-br from-burgundy-50 to-burgundy-100 flex items-center justify-center">
          <div className="text-center p-4">
            <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-burgundy-200 flex items-center justify-center">
              <span className="text-burgundy-700 text-xl">📷</span>
            </div>
            <p className="text-xs text-burgundy-600 font-medium">Image unavailable</p>
          </div>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          style={{ objectFit }}
          className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          priority={priority}
          quality={quality}
          unoptimized
        />
      )}
    </div>
  );
}
