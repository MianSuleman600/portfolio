// components/HeroSection.tsx
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SocialIcons } from "./SocialIcons";

export const HeroSection = () => {
 
  const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://www.linkedin.com/in/muhammad-suleman-b3477332a/';
  const facebookUrl = process.env.NEXT_PUBLIC_FACEBOOK_URL || 'https://web.facebook.com/miansuleman600/';
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/MianSuleman600?tab=repositories';

  return (
    <section
    id="home"
      className="
        relative min-h-screen flex flex-col items-center justify-center
        bg-linear-to-br from-gray-50 to-gray-100
        dark:from-gray-900 dark:to-gray-950
        px-5 py-12 sm:px-6 md:px-12 lg:px-20
        mt-6
      "
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
       
        <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200">
            Hello, I'm
          </h2>

          <h1
            className="
              text-4xl sm:text-5xl lg:text-6xl xl:text-7xl
              font-extrabold leading-tight tracking-tight
              bg-clip-text text-transparent
              bg-gradient-to-r from-orange-500 to-pink-500
            "
          >
            Suleman Zulfiqar
          </h1>

          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Full Stack Developer & UI/UX Designer crafting engaging digital experiences.
          </p>

          
          <div className="flex flex-col sm:flex-row items-center sm:justify-center lg:justify-start gap-4 mt-6">
            <Button
              variant="default"
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white min-w-[180px]"
            >
             Contact Me
            </Button>
           
          </div>
           

        </div>

        
        <div className="flex justify-center lg:justify-end order-1 lg:order-2 mb-10 lg:mb-0">
          <div className="relative flex flex-col items-center justify-center">
            <Avatar
              className="
                w-64 h-64               
                sm:w-80 sm:h-80         
                md:w-96 md:h-96         
                lg:w-[500px] lg:h-[500px]  
                rounded-full
                border-8 border-orange-500/30
                shadow-xl shadow-orange-500/20
                transition-transform duration-300 hover:scale-105
              "
            >
              <AvatarImage
                src="/1.png"  
                alt="Suleman Zulfiqar - Full Stack Developer & UI/UX Designer"
                loading="lazy"
              />
              <AvatarFallback className="text-6xl md:text-8xl bg-orange-100 text-orange-800 font-bold">
                SZ
              </AvatarFallback>
            </Avatar>

             <div className="mt-8 flex justify-center lg:justify-start">
            <SocialIcons
                links={[
                    { platform: 'linkedin', url: linkedinUrl, label: 'LinkedIn' },
                    { platform: 'facebook', url: facebookUrl, label: 'Facebook' },
                    { platform: 'github', url: githubUrl, label: 'GitHub' },
                ]}
                size={25} 
                iconClassName="text-gray-600 dark:text-gray-300 transition-colors duration-200"
                hoverColor="hover:text-orange-600"
            />

            </div>

           
            <div
              className="
                absolute inset-0 rounded-full
                bg-linear-to-br from-orange-400/20 to-transparent
                animate-pulse-slow
                pointer-events-none
              "
            />
          </div>
        </div>
      </div>

     
     

    </section>
  );
};