
"use client";

// import type { Metadata } from 'next'; // Metadata is commented out, no need to import
import { Section, SectionHeader } from '@/components/common/Section';
import { technologies, Technology as TechnologyType, getTechIcon } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Corrected import

// export const metadata: Metadata = {
//   title: 'Technologies We Use',
//   description: 'Discover the robust and modern technology stack CodeCanvas employs, including React, Django, Laravel, Flutter, and more, to build exceptional digital products.',
// };

const techCategories = ["All", ...new Set(technologies.map(tech => tech.category))];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.3,
      ease: "easeOut",
    },
  }),
};

export default function TechnologiesPage() {
  const [activeTab, setActiveTab] = useState<string>(techCategories[0]);
  
  useEffect(() => {
    document.title = "Technologies We Use | CodeCanvas";
  }, []);

  const filteredTechnologies = activeTab === "All" 
    ? technologies 
    : technologies.filter(tech => tech.category === activeTab);

  return (
    <>
      <Section className="bg-gradient-to-b from-primary/5 to-background">
        <SectionHeader
          title="Cutting-Edge Technologies"
          subtitle="The Foundation of Our Innovative Solutions"
        />
        <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto mb-10">
          At CodeCanvas, we harness the power of the latest and most robust technologies to deliver exceptional digital experiences. Our carefully selected stack ensures scalability, security, and performance for every project.
        </p>
      </Section>

      <Section className="!pt-0 md:!pt-0 -mt-10">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 sm:grid-cols-4 md:flex h-auto md:h-10 flex-wrap">
              {techCategories.map(category => (
                <TabsTrigger key={category} value={category} className="capitalize text-xs sm:text-sm">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab} // This key is important for AnimatePresence to detect changes
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredTechnologies.map((tech, index) => {
                  const Icon = getTechIcon(tech.id); // Placeholder, replace with actual icons
                  return (
                    <motion.div
                      key={tech.id}
                      custom={index}
                      initial="hidden"
                      animate="visible" // Use animate instead of whileInView for tab changes
                      variants={cardVariants}
                    >
                      <Card className="h-full hover:shadow-lg transition-shadow">
                        <CardHeader className="flex-row items-center gap-3 space-y-0 pb-3">
                           {/* Replace with actual SVG or image icons if available */}
                           <div className="p-2 bg-primary/10 rounded-md">
                             <Icon className="w-6 h-6 text-primary" />
                           </div>
                          <CardTitle className="text-lg">{tech.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-sm line-clamp-3">{tech.description}</CardDescription>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
              {filteredTechnologies.length === 0 && (
                <p className="text-center text-muted-foreground mt-12">No technologies found in this category.</p>
              )}
            </motion.div>
          </AnimatePresence>
        </Tabs>
      </Section>
    </>
  );
}
