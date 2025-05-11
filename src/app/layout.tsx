
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster"; // For contact form feedback

export const metadata: Metadata = {
  title: {
    default: 'Bitvalley - Innovative Software & Web Development',
    template: '%s | Bitvalley',
  },
  description: 'Bitvalley is a premier software and website development company specializing in creating custom digital solutions that drive business growth. We offer web development, software development, mobile app development, UI/UX design, and SEO services.',
  keywords: ['software development', 'web development', 'mobile app development', 'ui/ux design', 'seo', 'digital marketing', 'Bitvalley'],
  authors: [{ name: 'Bitvalley' }],
  // Add Open Graph tags for better social media sharing
  openGraph: {
    title: 'Bitvalley - Innovative Software & Web Development',
    description: 'Custom digital solutions to elevate your business.',
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com', // Replace with your actual domain
    siteName: 'Bitvalley',
    // images: [ // Add a good OG image
    //   {
    //     url: 'https://yourdomain.com/og-image.png',
    //     width: 1200,
    //     height: 630,
    //     alt: 'Bitvalley Logo',
    //   },
    // ],
  },
  // Add Twitter card tags
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'Bitvalley - Innovative Software & Web Development',
  //   description: 'Custom digital solutions to elevate your business.',
  //   // site: '@yourtwitterhandle', // Replace with your Twitter handle
  //   // creator: '@yourtwitterhandle',
  //   // images: ['https://yourdomain.com/twitter-image.png'], // Replace with your Twitter image
  // },
  // viewport: 'width=device-width, initial-scale=1',
  // icons: { // Add favicon links here
  //   icon: '/favicon.ico',
  //   shortcut: '/favicon-16x16.png',
  //   apple: '/apple-touch-icon.png',
  // },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="antialiased flex flex-col min-h-screen">
        {/* 
          Placeholder for Google Analytics & Search Console integration
          - For Google Analytics (GA4 recommended): Use next/script with strategy="afterInteractive"
            <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=YOUR_GA_MEASUREMENT_ID`}/>
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'YOUR_GA_MEASUREMENT_ID');
              `}
            </Script>
          - For Google Search Console: Verify ownership via DNS record or by uploading an HTML file.
        */}
        <Header />
        <main className="flex-grow pt-[68px] md:pt-[84px]"> {/* Adjust pt based on header height */}
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
