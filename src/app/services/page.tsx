
"use client"; // For IntersectionObserver animations

import type { Metadata } from 'next';
import { Section, SectionHeader } from '@/components/common/Section';
import { services, Service as ServiceType } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

// Metadata can't be dynamic in client components easily, so define it statically.
// For dynamic metadata based on content, this page would need to be a server component,
// or use a more complex setup.
// export const metadata: Metadata = {
//   title: 'Our Services',
//   description: 'Explore the comprehensive range of software and web development services offered by CodeCanvas, including web development, software development, mobile apps, UI/UX design, and SEO.',
// };


const ServiceCard = ({ service, index }: { service: ServiceType; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  // Calculate staggering delay for animation
  const animationDelay = `${index * 150}ms`;

  return (
    <Card 
      id={service.slug} 
      ref={cardRef}
      className={cn(
        "h-full transform transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ transitionDelay: isVisible ? animationDelay : '0ms' }}
    >
      <CardHeader className="flex flex-row items-start gap-4 space-y-0 pb-4">
        <div className="bg-primary/10 text-primary p-3 rounded-lg">
          <service.icon className="h-8 w-8" />
        </div>
        <div>
          <CardTitle className="text-2xl font-semibold">{service.title}</CardTitle>
          <CardDescription className="text-sm">{service.description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed">{service.longDescription}</p>
      </CardContent>
    </Card>
  );
};


export default function ServicesPage() {
  // Set title dynamically on client side if needed, or ensure static metadata is sufficient
  useEffect(() => {
    document.title = "Our Services | CodeCanvas";
  }, []);

  return (
    <>
      <Section className="bg-gradient-to-b from-primary/5 to-background">
        <SectionHeader
          title="Our Expertise"
          subtitle="Comprehensive Digital Solutions"
        />
        <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto mb-12 md:mb-16">
          At CodeCanvas, we offer a wide array of services designed to bring your digital visions to life. From initial concept to final deployment and beyond, our team is dedicated to delivering excellence and innovation in every project.
        </p>
      </Section>
      
      <Section className="!pt-0 md:!pt-0 -mt-12 md:-mt-16">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </Section>
    </>
  );
}
