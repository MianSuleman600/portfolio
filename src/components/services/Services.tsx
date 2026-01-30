"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import servicesData from "@/data/services.json";

// Import only the icons you actually use from fa6
import {
  FaPalette,
  FaLaptopCode,
  FaMobileAlt,
  FaPencilRuler,
} from "react-icons/fa6";

interface Service {
  title: string;
  description: string;
  icon: "FaPalette" | "FaLaptopCode" | "FaMobileAlt" | "FaPencilRuler";
}

const services = servicesData as Service[];

const iconMap: Record<Service["icon"], JSX.Element> = {
  FaPalette: <FaPalette className="w-12 h-12 text-orange-500" />,
  FaLaptopCode: <FaLaptopCode className="w-12 h-12 text-orange-500" />,
  FaMobileAlt: <FaMobileAlt className="w-12 h-12 text-orange-500" />,
  FaPencilRuler: <FaPencilRuler className="w-12 h-12 text-orange-500" />,
};

export function Services() {
  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
            Services
          </h2>

          <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="
                border border-gray-200 dark:border-gray-800
                bg-white dark:bg-gray-900
                hover:shadow-xl hover:shadow-orange-500/10
                transition-all duration-300
                group overflow-hidden
              "
            >
              <CardContent className="p-6 md:p-8 flex flex-col items-center text-center h-full">
                {/* Icon */}
                <div className="
                  mb-6 p-5 rounded-2xl 
                  bg-orange-50 dark:bg-orange-950/40 
                  group-hover:bg-orange-100 dark:group-hover:bg-orange-900/40 
                  transition-colors duration-300
                ">
                  {iconMap[service.icon]}
                </div>

                {/* Title */}
                <CardTitle className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </CardTitle>

                {/* Description */}
                <CardDescription className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}