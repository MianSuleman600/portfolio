"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  variant?: "default" | "footer";
}

export const Navbar = ({ variant = "default" }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const isFooter = variant === "footer";

  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  
  const navLinks = (
    <>
      <Link href="/#home" onClick={closeMenu} className="mobile-nav-link">
        Home
      </Link>
      <Link href="/#about" onClick={closeMenu} className="mobile-nav-link">
        About
      </Link>
      <Link href="/#services" onClick={closeMenu} className="mobile-nav-link">
        Services


      
      </Link>

      <Link href="/#projects" onClick={closeMenu} className="mobile-nav-link">
        Projects
      </Link>
      <Link href="/#testimonials" onClick={closeMenu} className="mobile-nav-link">
        Testimonials
      </Link>
      <Link href="/#contact" onClick={closeMenu} className="mobile-nav-link">
        Contact
      </Link>
    </>
  );

  return (
    <nav
      className={`${
        isFooter
          ? "relative bg-transparent border-none"
          : "fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
        
          {!isFooter && (
            <Link href="/" className="flex-shrink-0">
              <span
                className="text-2xl sm:text-3xl font-bold text-black"
                style={{ fontFamily: "var(--font-logo)" }}
              >
                MS Dev
              </span>
            </Link>
          )}

          {/* Desktop Nav */}
          {!isFooter && (
            <div className="hidden md:flex md:items-center md:space-x-10">
              {navLinks}

              <Button
                asChild
                className="
                  ml-4 px-5 py-2 
                  bg-yellow-600 hover:bg-gray-900 
                  text-white 
                  text-sm font-medium 
                  shadow-sm hover:shadow-md 
                  transition-all duration-200
                "
              >
                <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                  Download CV
                </a>
              </Button>
            </div>
          )}

         
          {!isFooter && (
            <div ref={mobileMenuRef} className="md:hidden relative">
             
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-black hover:bg-black/10 focus:outline-none"
                aria-expanded={isOpen}
                aria-label="Toggle menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>

              {/* Mobile Menu */}
              <div
                className={`absolute right-0 mt-3 w-64 rounded-xl bg-white shadow-xl border border-gray-200 overflow-hidden transition-all duration-300 ease-out ${
                  isOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="flex flex-col px-4 py-4 space-y-4">
                  {navLinks}

                  <div className="pt-2">
                    <Button
                      asChild
                      className="
                        w-full px-6 py-3 
                        bg-yellow-600 hover:bg-gray-900 
                        text-white 
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
            </div>
          )}
        </div>

       
        {isFooter && (
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10 py-6 text-base">
            {navLinks}
          </div>
        )}
      </div>
    </nav>
  );
};
