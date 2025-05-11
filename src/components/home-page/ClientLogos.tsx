"use client";

import Image from "next/image";
import { Section, SectionHeader } from "@/components/common/Section";

const clientLogos = [
  { id: "logo1", name: "Innovate Corp", src: "https://picsum.photos/seed/logo1/150/60?grayscale", dataAiHint: "company logo" },
  { id: "logo2", name: "Tech Solutions Ltd", src: "https://picsum.photos/seed/logo2/150/60?grayscale", dataAiHint: "company logo" },
  { id: "logo3", name: "Alpha Systems", src: "https://picsum.photos/seed/logo3/150/60?grayscale", dataAiHint: "company logo" },
  { id: "logo4", name: "Beta Group", src: "https://picsum.photos/seed/logo4/150/60?grayscale", dataAiHint: "company logo" },
  { id: "logo5", name: "NextGen Inc.", src: "https://picsum.photos/seed/logo5/150/60?grayscale", dataAiHint: "company logo" },
];


export function ClientLogos() {
  return (
    <Section>
      <SectionHeader
        title="Trusted By Leading Companies"
        className="mb-8 md:mb-12"
      />
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
        {clientLogos.map((logo, index) => (
          <div
            key={logo.id}
            className="grayscale hover:grayscale-0 transition-all duration-300 fade-in"
            style={{ animationDelay: `${index * 0.15}s` }} // Staggering delay for the fade-in animation
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={150}
              height={60}
              className="object-contain"
              data-ai-hint={logo.dataAiHint}
            />
          </div>
        ))}
      </div>
    </Section>
  );
}