// components/SocialIcons.tsx
import { 
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaG,
  FaGithub,
  
} from "react-icons/fa6";

interface SocialLink {
  platform: 'facebook' | 'x' | 'instagram' | 'linkedin' | 'github' | string ;
  url: string;
  label?: string; 
}

interface SocialIconsProps {
  links: SocialLink[];
  size?: number;               
  className?: string;          
  iconClassName?: string;       
  hoverColor?: string;          
}

export const SocialIcons = ({
  links,
  size = 28,
  className = "",
  iconClassName = "",
  hoverColor = "hover:text-orange-600",
}: SocialIconsProps) => {
  
  const getIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'facebook':
        return FaFacebookF;
      case 'x':
      case 'twitter':
        return FaXTwitter;
      case 'instagram':
        return FaInstagram;
      case 'linkedin':
        return FaLinkedinIn;

      case 'github':
        return FaGithub;
      default:
        return null; 
    }
  };

  return (
    <div
      className={`
        flex items-center justify-center gap-5 sm:gap-6 md:gap-8
        ${className}
      `}
    >
      {links.map((link, index) => {
        const Icon = getIcon(link.platform);

        if (!Icon) return null;

        return (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label || `${link.platform.charAt(0).toUpperCase() + link.platform.slice(1)}`}
            className={`
              text-gray-700 dark:text-gray-400
              ${hoverColor}
              transition-colors duration-200
              ${iconClassName}
            `}
          >
            <Icon size={size} />
          </a>
        );
      })}
    </div>
  );
};