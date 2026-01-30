"use client";

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface NavbarProps {
  variant?: 'default' | 'footer';
}

export const Navbar = ({ variant = 'default' }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const isFooter = variant === 'footer';

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Shared navigation links (used in both desktop and mobile menus)
  const navLinks = (
    <>
      <Link
        href="/#home"
        className="text-gray-700 hover:text-black font-medium transition-colors"
        onClick={closeMenu}
      >
        Home
      </Link>
      <Link
        href="/#about"
        className="text-gray-700 hover:text-black font-medium transition-colors"
        onClick={closeMenu}
      >
        About
      </Link>
      <Link
        href="/#projects"
        className="text-gray-700 hover:text-black font-medium transition-colors"
        onClick={closeMenu}
      >
        Projects
      </Link>
      <Link
        href="/#testimonials"
        className="text-gray-700 hover:text-black font-medium transition-colors"
        onClick={closeMenu}
      >
        Testimonials
      </Link>
      <Link
        href="/#contact"
        className="text-gray-700 hover:text-black font-medium transition-colors"
        onClick={closeMenu}
      >
        Contact
      </Link>
    </>
  );

  return (
    <nav
      className={`
        ${isFooter 
          ? "relative bg-transparent border-none" 
          : "fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200/50"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main bar / header row */}
        <div className="flex items-center justify-between h-16">
          {/* Logo – hidden in footer mode */}
          {!isFooter && (
            <Link href="/" className="flex-shrink-0">
              <span
                className="text-2xl sm:text-3xl font-bold text-black"
                style={{ fontFamily: 'var(--font-logo)' }}
              >
                MS Dev
              </span>
            </Link>
          )}

          {/* Desktop navigation + CV button – hidden in footer mode */}
          {!isFooter && (
            <div className="hidden md:flex md:items-center md:space-x-10">
              {navLinks}

              {/* Download CV – using shadcn Button with asChild pattern */}
              <Button
                asChild
                className="
                  ml-4 px-5 py-2 
                  bg-black hover:bg-gray-900 
                  text-white 
                  rounded-full 
                  text-sm font-medium 
                  shadow-sm hover:shadow-md 
                  transition-all duration-200
                "
              >
                <a 
                  href="/cv.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Download CV
                </a>
              </Button>
            </div>
          )}

          {/* Mobile hamburger menu button – hidden in footer mode */}
          {!isFooter && (
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-black hover:bg-black/10 focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Mobile dropdown menu – only shown in default (non-footer) mode */}
        {!isFooter && (
          <div
            ref={menuRef}
            className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
              isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navLinks}

              <div className="px-3 py-2">
                {/* Download CV in mobile menu – same shadcn pattern */}
                <Button
                  asChild
                  className="
                    w-full px-6 py-3 
                    bg-yellow-600 hover:bg-gray-900 
                    text-white 
                    rounded-full 
                    text-base font-medium 
                    shadow-sm hover:shadow-md 
                    transition-all duration-200
                  "
                >
                  <a 
                    href="/cv.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Download CV
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {isFooter && (
        <div className="hidden md:flex justify-center gap-6 md:gap-10 py-4 text-sm md:text-base">
          {navLinks}
        </div>
      )}
    </nav>
  );
};