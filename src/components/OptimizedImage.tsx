// src/components/OptimizedImage.tsx
'use client';

import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function OptimizedImage({ src, alt, className = '' }: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Loading skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      
      {/* Error fallback */}
      {hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-burgundy-100 to-burgundy-200 flex items-center justify-center">
          <div className="text-center">
            <span className="text-6xl">📦</span>
            <p className="text-burgundy-800 font-semibold mt-2">Product Image</p>
          </div>
        </div>
      )}
      
      {/* Actual image */}
      {!hasError && (
        <img
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          loading="lazy"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      )}
    </div>
  );
}