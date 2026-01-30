"use client";

import { useState, useEffect, useCallback } from "react";
import testimonialsData from "@/data/testimonials.json";
import { TestimonialCard } from "./TestimonialCard";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

const testimonials = testimonialsData as Testimonial[];

const AUTO_PLAY_INTERVAL = 6000;
const USER_PAUSE_DURATION = 10000;

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [userInteracted, setUserInteracted] = useState(false);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setUserInteracted(true);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
  if (!isAutoPlaying || testimonials.length <= 1) return;
  const interval = setInterval(nextSlide, AUTO_PLAY_INTERVAL);
  return () => clearInterval(interval);
}, [isAutoPlaying, nextSlide]);

  useEffect(() => {
    if (!userInteracted) return;
    const timeout = setTimeout(() => {
      setIsAutoPlaying(true);
      setUserInteracted(false);
    }, USER_PAUSE_DURATION);
    return () => clearTimeout(timeout);
  }, [userInteracted]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsAutoPlaying(!document.hidden);
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  const getPreviousIndex = () => (currentIndex - 1 + testimonials.length) % testimonials.length;
  const getNextIndex = () => (currentIndex + 1) % testimonials.length;

  return (
    <section
      id="testimonials"
      className="w-full bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            Testimonials
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            What clients say about working with me — real feedback from real projects.
          </p>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-700 ease-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="flex-shrink-0 w-full px-4 lg:px-16">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
          <div className="absolute left-0 top-0 h-full w-1/4 hidden lg:flex items-center opacity-20 pointer-events-none">
            <TestimonialCard testimonial={testimonials[getPreviousIndex()]} isPreview />
          </div>
          <div className="absolute right-0 top-0 h-full w-1/4 hidden lg:flex items-center opacity-20 pointer-events-none">
            <TestimonialCard testimonial={testimonials[getNextIndex()]} isPreview />
          </div>
        </div>
        <div className="flex justify-center items-center gap-2.5 sm:gap-3 mt-10 md:mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === index
                  ? "bg-orange-600 w-10 sm:w-12 h-3 shadow-md shadow-orange-500/40"
                  : "bg-gray-300 dark:bg-gray-600 w-3 h-3 hover:bg-orange-400 dark:hover:bg-orange-500 hover:scale-110"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
