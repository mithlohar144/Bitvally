
"use client";

import { Section, SectionHeader } from "@/components/common/Section";
import { testimonials, Testimonial as TestimonialType } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Quote } from "lucide-react";
import React, { useState, useEffect, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

interface TestimonialsSectionProps {
  isHomePage?: boolean;
}

export function TestimonialsSection({ isHomePage = false }: TestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = isHomePage ? testimonials.slice(0,3) : testimonials;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % itemsToShow.length);
  }, [itemsToShow.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + itemsToShow.length) % itemsToShow.length);
  };

  useEffect(() => {
    if (!isHomePage) { // Autoplay only on dedicated testimonials page
      const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
      return () => clearInterval(interval);
    }
  }, [nextSlide, isHomePage]);


  if (!itemsToShow.length) return null;

  return (
    <Section className={isHomePage ? "bg-secondary" : ""}>
      <SectionHeader
        title={isHomePage ? "What Our Clients Say" : "Client Testimonials"}
        subtitle="Words of Trust"
      />
      <div className="relative max-w-3xl mx-auto">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {itemsToShow.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 px-2">
                <Card className="text-center shadow-lg">
                  <CardContent className="p-6 md:p-10">
                    <Quote className="w-10 h-10 text-primary mx-auto mb-6 opacity-50" />
                    <p className="text-lg md:text-xl italic text-foreground mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center justify-center mb-2">
                      {testimonial.imageUrl && (
                        <Image
                          src={testimonial.imageUrl}
                          alt={testimonial.author}
                          width={60}
                          height={60}
                          className="rounded-full mr-4 border-2 border-primary"
                          data-ai-hint={testimonial.dataAiHint || "person"}
                        />
                      )}
                      <div>
                        <h4 className="text-md font-semibold text-primary">{testimonial.author}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {itemsToShow.length > 1 && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 left-0 md:-left-12 transform -translate-y-1/2 rounded-full shadow-md"
              onClick={prevSlide}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 right-0 md:-right-12 transform -translate-y-1/2 rounded-full shadow-md"
              onClick={nextSlide}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </>
        )}
         <div className="flex justify-center mt-8 space-x-2">
            {itemsToShow.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-primary' : 'bg-muted hover:bg-primary/50'} transition-colors`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
      </div>
      {isHomePage && (
         <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
                <Link href="/testimonials">View All Testimonials</Link>
            </Button>
         </div>
      )}
    </Section>
  );
}
