// src/components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cream-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm">
          <Link 
            href="/privacy" 
            className="text-gray-600 hover:text-burgundy-700 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link 
            href="/terms" 
            className="text-gray-600 hover:text-burgundy-700 transition-colors"
          >
            Terms of Service
          </Link>
          <Link 
            href="/contact" 
            className="text-gray-600 hover:text-burgundy-700 transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Contact Email */}
        <div className="text-center mb-4">
          <a 
            href="mailto:vardhamancarpeting.com"
            className="text-gray-600 hover:text-burgundy-700 text-sm transition-colors"
          >
            vardhamancarpeting.com
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-600 text-sm">
          <p>
            © {currentYear} VARDHAMAN CARPET. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}