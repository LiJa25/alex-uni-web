// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageProvider";
import Footer from "@/components/Footer"; // Import your Footer here
import Script from 'next/script';

// ... (your font constants remain the same)

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      {/* min-h-screen + flex flex-col is the key to sticky footers */}
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <LanguageProvider>
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
          <Script
          src="https://widget.tabnav.com/limited-widget.min.js.gz"
          strategy="lazyOnload"
          tnv-data-config='{"language":"us-en","color":"#274293","buttonColor":"#155dfc","buttonSize":"small","widgetSize":"large","widgetLocation":"left","buttonLocation":"bottom"}'
        />
        <noscript>
          JavaScript is required for <a href="https://tabnav.com/accessibility-widget" className="underline text-blue-800">tabnav accessibility widget</a> to work properly.
        </noscript>
    
        <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
        <div className="elfsight-app-00e8bb49-0e46-4e86-86b4-adba99c8339d" data-elfsight-app-lazy></div>
        <div className="gtranslate_wrapper"></div>
        
        <Script id="gtranslate-settings" strategy="lazyOnload">
          {`window.gtranslateSettings = {"default_language":"en","native_language_names":true,"languages":["en","fr","it","es","ar","de","ja","ru","tr","ko"],"wrapper_selector":".gtranslate_wrapper","switcher_horizontal_position":"right","switcher_vertical_position":"bottom","float_switcher_open_direction":"top"}`}
        </Script>
        <Script
          src="https://cdn.gtranslate.net/widgets/latest/float.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}