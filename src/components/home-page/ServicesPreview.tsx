"use client";

import Link from "next/link";
import { services } from "@/lib/data";
import type { Service as ServiceType } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/common/Section";
import { useEffect, useRef } from "react";
import anime from 'animejs/lib/anime.es.js';

// AnimatedServiceCard subcomponent using anime.js and IntersectionObserver
const AnimatedServiceCard = ({ service, index }: { service: ServiceType; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const currentCardRef = cardRef.current;
    if (!currentCardRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          anime({
            targets: currentCardRef,
            translateY: [50, 0],
            opacity: [0, 1],
            duration: 500,
            delay: index * 100, // 0.1s delay increment per card
            easing: 'easeOutExpo',
          });
          observer.unobserve(currentCardRef); // Animate once
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the element is visible
    );

    observer.observe(currentCardRef);

    return () => {
      // Check if currentCardRef exists before trying to unobserve
      if (currentCardRef) {
        observer.unobserve(currentCardRef);
      }
    };
  }, [index]); // Dependency array includes index for the delay calculation

  return (
    <div ref={cardRef} style={{ opacity: 0 }} className="h-full"> {/* Initial opacity 0, h-full to ensure proper layout */}
      <Card className="h-full flex flex-col hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
        <CardHeader className="flex-row items-center gap-4 pb-4">
          <service.icon className="h-10 w-10 text-primary flex-shrink-0" />
          <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <CardDescription>{service.description}</CardDescription>
        </CardContent>
        <div className="p-6 pt-0">
            <Button variant="link" asChild className="p-0 text-primary group-hover:underline">
              <Link href={`/services#${service.slug}`}>
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
        </div>
      </Card>
    </div>
  );
};

export function ServicesPreview() {
  const displayedServices = services.slice(0, 3); // Show first 3 services

  return (
    <Section className="bg-secondary">
      <SectionHeader
        title="Our Core Services"
        subtitle="What We Offer"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {displayedServices.map((service, index) => (
          <AnimatedServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
      <div className="text-center">
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href="/services">
            View All Services <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </Section>
  );
}