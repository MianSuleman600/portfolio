// app/layout.tsx
import { poppins, montserrat } from "@/fonts/poppins";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";

export const metadata = {
  title: "Muhammad Suleman Zulfiqar – Full Stack Developer & UI/UX Designer",
  description: "Portfolio of Suleman Zulfiqar – crafting modern web & mobile experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${montserrat.variable} antialiased`}>
      <body className="font-sans bg-[var(--background)] text-[var(--foreground)] min-h-screen relative">
        <Navbar />
        
        
        
        <main>{children}</main>

        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}