// components/About.tsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const skills = [
  { name: "UX", value: 90 },
  { name: "Website Design", value: 85 },
  { name: "App Design", value: 80 },
  { name: "Graphic Design", value: 95 },
];

export const About = () => {
  return (
    <section
    id="about"
      
      className="

        about-us
        py-16 md:py-20 lg:py-24
        px-5 sm:px-6 lg:px-8 xl:px-12
        bg-white dark:bg-gray-950
      "
    >
      <div className="max-w-7xl mx-auto">
       
        <h2
          className="
            text-3xl sm:text-4xl lg:text-4xl xl:text-5xl
            font-bold tracking-tight text-center
            mb-10 md:mb-12 lg:mb-14
            text-gray-900 dark:text-white
          "
        >
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-16 items-start">
         
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              
              <div
                className="
                  absolute inset-0 rounded-full
                  bg-gradient-to-br from-orange-400/15 to-transparent
                  blur-md animate-pulse-slow
                  pointer-events-none
                "
              />

              <Avatar
                className="
                  w-64 h-64
                  sm:w-72 sm:h-72
                  lg:w-80 lg:h-80
                  xl:w-96 xl:h-96
                  border-8 border-orange-500/20
                  shadow-xl shadow-orange-500/10
                  transition-transform duration-400
                  hover:scale-[1.02] hover:shadow-orange-500/20
                "
              >
                <AvatarImage
                  src="/me.jpg"
                  alt="Suleman Zulfiqar - Full Stack Developer & UI/UX Designer"
                />
                <AvatarFallback className="text-4xl sm:text-5xl bg-orange-100 text-orange-800 font-bold">
                  SZ
                </AvatarFallback>
              </Avatar>
            </div>
          </div>

          
          <div className="space-y-8 order-1 lg:order-2">
            
            <div className="space-y-5 text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              <p>
                I'm Suleman Zulfiqar, a Full Stack Developer and UI/UX Designer based in Faisalabad.
                I specialize in building modern, user-centered web and mobile applications using Next.js, React, Tailwind CSS, Node.js, and TypeScript.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-6 pt-2">
              {skills.map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-base sm:text-lg font-medium text-gray-800 dark:text-gray-200">
                      {skill.name}
                    </span>
                    <span className="text-sm font-medium text-orange-600 dark:text-orange-400">
                      {skill.value}%
                    </span>
                  </div>

                 
                  <div className="relative h-2.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                   
                    <div
                      className="
                        absolute inset-y-0 left-0 rounded-full
                        bg-orange-500
                        transition-all duration-1000 ease-out
                        group-hover:bg-orange-600
                      "
                      style={{ width: `${skill.value}%` }}
                    />

                   
                    <div
                      className="
                        absolute top-1/2 -translate-y-1/2 -right-1.5
                        w-5 h-5 rounded-full
                        bg-orange-500
                        border-4 border-white dark:border-gray-900
                        shadow-md
                        transition-transform duration-300
                        group-hover:scale-110 group-hover:shadow-orange-500/40
                      "
                      style={{ left: `${skill.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};