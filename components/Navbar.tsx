"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Rocket, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <Rocket className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl tracking-tight text-gray-900">SpaceBite</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="" className="text-gray-600 hover:text-primary transition-colors">Home</Link>
            <Link href="#features" className="text-gray-600 hover:text-primary transition-colors">Features</Link>
            <Link href="#menu" className="text-gray-600 hover:text-primary transition-colors">Menu</Link>
            <Link href="#testimonials" className="text-gray-600 hover:text-primary transition-colors">Reviews</Link>
            <Link href="#contact" className="text-gray-600 hover:text-primary transition-colors">Contact</Link>
            <button className="bg-primary text-white px-4 py-2 rounded-full font-medium hover:bg-orange-600 transition-colors">
              Order Now
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              <span className="sr-only">Open menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2 shadow-lg">
            <Link
              href=""
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#features"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#menu"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Menu
            </Link>
            <Link
              href="#testimonials"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Reviews
            </Link>
            <Link
              href="#contact"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4">
              <button className="w-full bg-primary text-white px-4 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors">
                Order Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
