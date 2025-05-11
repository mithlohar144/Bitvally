
"use client";

import type { Metadata } from 'next';
import { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Section, SectionHeader } from '@/components/common/Section';
import { portfolioItems, portfolioCategories, PortfolioItem as PortfolioItemType } from '@/lib/data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Search } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

// export const metadata: Metadata = {
//   title: 'Our Portfolio',
//   description: 'Discover a selection of our successfully completed projects at CodeCanvas, showcasing our expertise in web development, software solutions, and mobile applications.',
// };

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
};

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  useEffect(() => {
    document.title = "Our Portfolio | CodeCanvas";
  }, []);

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") {
      return portfolioItems;
    }
    return portfolioItems.filter(item => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <Section className="bg-gradient-to-b from-primary/5 to-background">
        <SectionHeader
          title="Our Work"
          subtitle="Showcasing Our Expertise"
        />
        <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto mb-10">
          We take pride in the solutions we've delivered. Explore our portfolio to see how we've helped businesses like yours achieve their digital goals through innovative design and development.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {portfolioCategories.map(category => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              onClick={() => setActiveFilter(category)}
              className="capitalize"
            >
              {category}
            </Button>
          ))}
        </div>
      </Section>

      <Section className="!pt-0 md:!pt-0 -mt-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout // Enables smooth layout transitions
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Card className="h-full flex flex-col overflow-hidden group transition-all duration-300 hover:shadow-2xl">
                  <CardHeader className="p-0 relative">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="object-cover w-full h-56 transition-transform duration-500 group-hover:scale-110"
                      data-ai-hint={item.dataAiHint || item.category.toLowerCase()}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                  </CardHeader>
                  <CardContent className="p-6 flex-grow">
                    <Badge variant="secondary" className="mb-2">{item.category}</Badge>
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">{item.title}</CardTitle>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-3">{item.description}</p>
                    <div className="mb-3">
                      <h4 className="text-xs font-semibold text-foreground mb-1">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-1">
                        {item.techStack.map(tech => (
                          <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    {item.liveLink && (
                      <Button asChild variant="outline" size="sm" className="mr-2">
                        <Link href={item.liveLink} target="_blank" rel="noopener noreferrer">
                          Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                    {item.caseStudyLink && (
                      <Button asChild variant="link" size="sm" className="text-primary p-0">
                        <Link href={item.caseStudyLink}>
                          Case Study <Search className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        {filteredItems.length === 0 && (
          <p className="text-center text-muted-foreground mt-12">No projects found for this category.</p>
        )}
      </Section>
    </>
  );
}
