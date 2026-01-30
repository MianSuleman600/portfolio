import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  isPreview?: boolean;
}

export function TestimonialCard({ testimonial, isPreview = false }: TestimonialCardProps) {
  return (
    <Card
      className={`
        bg-white dark:bg-gray-800 border-0 shadow-xl rounded-3xl
        transition-all duration-500
        ${isPreview ? "scale-90 blur-[2px] opacity-70" : "scale-100 blur-0 opacity-100"}
      `}
    >
      <CardContent className="p-6 sm:p-8 md:p-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <Avatar className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 ring-4 ring-orange-100 dark:ring-orange-900/40">
              <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
              <AvatarFallback className="bg-gradient-to-br from-orange-400 to-orange-600 text-white text-2xl font-bold">
                {testimonial.name.split(" ").map((n) => n[0]).join("")}
              </AvatarFallback>
            </Avatar>
          </div>

          
          <div className="flex-1 text-center md:text-left">
           
            <div className="text-orange-600 dark:text-orange-500 mb-4 md:mb-5">
              <svg
                className="w-8 h-8 sm:w-10 sm:h-10 mx-auto md:mx-0 opacity-80"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

         
            <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mb-5 md:mb-6 font-normal">
              {testimonial.quote}
            </p>

           
            <div>
              <h3 className="text-gray-900 dark:text-white font-bold text-lg md:text-xl mb-1">
                {testimonial.name}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base font-medium">
                {testimonial.role}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}