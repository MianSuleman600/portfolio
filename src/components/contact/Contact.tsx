// components/Contact.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner"; 

export const Contact = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    
    if (!email.trim()) {
      toast.error("Email is required", {
        description: "Please enter your email address.",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.warning("Invalid email", {
        description: "Please provide a valid email address.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      
      toast.success("Message sent successfully!", {
        description: "Thank you! I'll get back to you within 24–48 hours.",
        duration: 5000,
      });

      setEmail(""); 
    } catch (error) {
      toast.error("Failed to send", {
        description: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="
        w-full py-16 md:py-20 lg:py-24 xl:py-28
        bg-gradient-to-b from-gray-50 to-white
        dark:from-gray-950 dark:to-gray-900
      "
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10 md:mb-14">
          <h2 className="
            text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight
            text-gray-900 dark:text-white
          ">
            Let's Design Together
          </h2>

          <p className="
            mt-4 text-base sm:text-lg md:text-xl
            text-gray-600 dark:text-gray-400
            max-w-2xl mx-auto leading-relaxed
          ">
            I'm currently open to new opportunities, interesting projects, and collaborations.
            Drop your email — I'd love to discuss how we can work together!
          </p>
        </div>

      
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 items-stretch">
            <Input
              type="email"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isSubmitting}
              className="
                h-12 text-base rounded-lg
                bg-background border-input
                focus-visible:ring-orange-500/30 focus-visible:border-orange-500
              "
            />

            <Button
              type="submit"
              disabled={isSubmitting}
              className="
                h-12 px-8 text-base font-medium
                bg-orange-600 hover:bg-orange-700 active:bg-orange-800
                dark:bg-orange-600 dark:hover:bg-orange-700 dark:active:bg-orange-800
                transition-all duration-200 shadow-sm hover:shadow-md
              "
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </div>

         
        </form>
      </div>
    </section>
  );
};