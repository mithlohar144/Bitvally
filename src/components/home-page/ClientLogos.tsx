
"use client";

import Image from "next/image";
import { Section, SectionHeader } from "@/components/common/Section";
import { motion } from "framer-motion";

const clientLogos = [
  { id: "logo1", name: "Innovate Corp", src: "https://picsum.photos/seed/logo1/150/60?grayscale", dataAiHint: "company logo" },
  { id: "logo2", name: "Tech Solutions Ltd", src: "https://picsum.photos/seed/logo2/150/60?grayscale", dataAiHint: "company logo" },
  { id: "logo3", name: "Alpha Systems", src: "https://picsum.photos/seed/logo3/150/60?grayscale", dataAiHint: "company logo" },
  { id: "logo4", name: "Beta Group", src: "https://picsum.photos/seed/logo4/150/60?grayscale", dataAiHint: "company logo" },
  { id: "logo5", name: "NextGen Inc.", src: "https://picsum.photos/seed/logo5/150/60?grayscale", dataAiHint: "company logo" },
];

const logoVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 0.7,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};


export function ClientLogos() {
  return (
    <Section>
      <SectionHeader
        title="Trusted By Leading Companies"
        className="mb-8 md:mb-12"
      />
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
        {clientLogos.map((logo, index) => (
          <motion.div
            key={logo.id}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={logoVariants}
            className="grayscale hover:grayscale-0 transition-all duration-300"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={150}
              height={60}
              className="object-contain"
              data-ai-hint={logo.dataAiHint}
            />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
