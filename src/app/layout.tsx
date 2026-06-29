import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "PES NEXT — Innovation & Incubation Centre, Mandya",
  description:
    "PES NEXT Innovation and Incubation Centre empowers students, researchers, and entrepreneurs of the Mandya region to transform innovative ideas into scalable ventures.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-white dark:bg-[#0f0f0f] text-gray-900 dark:text-gray-100 overflow-x-hidden transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
