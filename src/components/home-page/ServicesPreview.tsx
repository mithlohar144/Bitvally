
"use client";

import Link from "next/link";
import { services } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/common/Section";
import { motion } from "framer-motion"; // Using Framer Motion for simple animations

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
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
          <motion.div
            key={service.id}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
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
          </motion.div>
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
