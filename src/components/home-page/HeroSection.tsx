
"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const headlines = [
  "Innovate. Create. Elevate.",
  "Building Tomorrow's Software, Today.",
  "Your Vision, Our Expertise."
];

export function HeroSection() {
  const [currentHeadlineIndex, setCurrentHeadlineIndex] = useState(0);
  const [displayedHeadline, setDisplayedHeadline] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullHeadline = headlines[currentHeadlineIndex];
      if (isDeleting) {
        setDisplayedHeadline(fullHeadline.substring(0, displayedHeadline.length - 1));
        setTypingSpeed(75);
      } else {
        setDisplayedHeadline(fullHeadline.substring(0, displayedHeadline.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && displayedHeadline === fullHeadline) {
        setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
      } else if (isDeleting && displayedHeadline === '') {
        setIsDeleting(false);
        setCurrentHeadlineIndex((prevIndex) => (prevIndex + 1) % headlines.length);
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [displayedHeadline, isDeleting, typingSpeed, currentHeadlineIndex]);


  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 min-h-[calc(100vh-84px)] flex items-center justify-center py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-50">
        {/* You can add a subtle background pattern or image here */}
      </div>
      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-6">
              <span className="animated-headline block h-20 md:h-24 lg:h-28">
                {displayedHeadline}
                <span className="animate-ping">|</span>
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-xl mx-auto md:mx-0">
              CodeCanvas crafts bespoke software and web solutions that empower businesses to thrive in the digital landscape. Let's build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg transform hover:scale-105 transition-transform">
                <Link href="/contact">
                  Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="shadow-lg transform hover:scale-105 transition-transform">
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:block relative">
            <Image
              src="https://picsum.photos/seed/codecanvas-hero/600/500"
              alt="Abstract representation of code and design"
              data-ai-hint="abstract technology"
              width={600}
              height={500}
              className="rounded-xl shadow-2xl object-cover"
              priority
            />
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-accent/20 rounded-full animate-pulse delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
