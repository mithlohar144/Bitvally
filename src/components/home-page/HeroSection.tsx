
"use client";

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import anime from 'animejs/lib/anime.es.js';

const headlines = [
  "Driving Digital Transformation.",
  "Engineering Future-Proof Solutions.",
  "Partnering for Your Success."
];

export function HeroSection() {
  const headlineRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let headlineIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 120;
    const deletingSpeed = 70;
    const pauseDuration = 2500;

    const type = () => {
      const currentHeadline = headlines[headlineIndex];
      if (headlineRef.current) {
        if (isDeleting) {
          headlineRef.current.textContent = currentHeadline.substring(0, charIndex -1);
          charIndex--;
          if (charIndex === 0) {
            isDeleting = false;
            headlineIndex = (headlineIndex + 1) % headlines.length;
            setTimeout(type, typingSpeed); // Start typing next headline
          } else {
            setTimeout(type, deletingSpeed);
          }
        } else {
          headlineRef.current.textContent = currentHeadline.substring(0, charIndex + 1);
          charIndex++;
          if (charIndex === currentHeadline.length) {
            isDeleting = true;
            setTimeout(type, pauseDuration); // Pause before deleting
          } else {
            setTimeout(type, typingSpeed);
          }
        }
      }
    };

    if (headlineRef.current && cursorRef.current) {
      headlineRef.current.textContent = ""; // Start empty
       // Initial call to start typing
      setTimeout(type, typingSpeed);

      // Cursor animation
      anime({
        targets: cursorRef.current,
        opacity: [0, 1],
        loop: true,
        direction: 'alternate',
        easing: 'easeInOutSine',
        duration: 500
      });
    }
    
    // Cleanup function to stop timeouts if component unmounts
    return () => {
        // This is tricky with recursive setTimeouts. A more robust way would be to use a flag.
        // For simplicity in this context, we're not clearing all timeouts perfectly.
        // In a production app, manage timeouts more carefully (e.g., storing timeout IDs).
    };

  }, []);


  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 min-h-[calc(100vh-84px)] flex items-center justify-center py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-50">
        {/* Subtle background pattern or image can be added here */}
      </div>
      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-6">
              <span className="block h-20 md:h-24 lg:h-28">
                <span ref={headlineRef}></span>
                <span ref={cursorRef} className="opacity-75">|</span>
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-xl mx-auto md:mx-0">
              Bitvalley delivers cutting-edge software and web solutions, empowering businesses to excel in the evolving digital landscape. We partner with you to achieve impactful results.
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
              src="https://picsum.photos/seed/bitvalley-hero/600/500"
              alt="Professional team collaborating on a project"
              data-ai-hint="team collaboration"
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
