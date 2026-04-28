import { Space_Grotesk, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Ambrotech Filament — Premium Polyester Monofilament Yarn Manufacturer",
  description:
    "India's leading manufacturer of high-performance polyester monofilament yarn. ISO certified, exported to 10+ countries. Zero Break Technology for fishing nets, agriculture, textiles & industrial applications.",
  keywords:
    "polyester monofilament yarn, filament yarn manufacturer, fishing net yarn, agricultural net yarn, industrial filament, Surat Gujarat India, zero break technology",
  openGraph: {
    title: "Ambrotech Filament — Premium Polyester Monofilament Yarn",
    description:
      "Engineered for Strength. Designed for Zero Break Performance. Powering industries across 10+ countries.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${inter.variable}`}>
        {children}
        
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </body>
    </html>
  );
}
