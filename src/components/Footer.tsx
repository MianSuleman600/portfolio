// components/Footer.tsx
import { SocialIcons } from "@/components/SocialIcons";
import { Navbar } from "@/components/Navbar";

export default function Footer() {
  const currentYear = new Date().getFullYear();

   const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://www.linkedin.com/in/muhammad-suleman-b3477332a/';
  const facebookUrl = process.env.NEXT_PUBLIC_FACEBOOK_URL || 'https://web.facebook.com/miansuleman600/';
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/MianSuleman600?tab=repositories';


  const socialLinks = [
    { platform: "facebook", url: facebookUrl, label: "Facebook" },
    { platform: "linkedin", url: linkedinUrl, label: "LinkedIn" },
    { platform: "github", url: githubUrl, label: "GitHub" },
  ];

  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10 md:py-12">
        
        <div className="text-center mb-3">
          <span
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white"
            style={{ fontFamily: "var(--font-logo)" }}
          >
            MS Developer
          </span>
        </div>

       
        <Navbar variant="footer" />

       
        <div className="flex justify-center mt-4 mb-8">
          <SocialIcons
            links={socialLinks}
            size={24}
            iconClassName="text-gray-600 dark:text-gray-400"
            hoverColor="hover:text-orange-600 dark:hover:text-orange-500"
          />
        </div>

      
        <div className="text-center text-sm text-gray-500 dark:text-gray-500">
          <p>© {currentYear} MS Developer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}