
import type { Metadata } from 'next';
import { Section, SectionHeader } from '@/components/common/Section';
import { TestimonialsSection } from '@/components/testimonials-page/TestimonialsSection';
import { CTASection } from '@/components/common/CTASection';

export const metadata: Metadata = {
  title: 'Client Testimonials',
  description: 'Read what our clients say about CodeCanvas. Discover real feedback on our software development, web design, and digital marketing services.',
};

export default function TestimonialsPage() {
  return (
    <>
      <Section className="bg-gradient-to-b from-primary/5 to-background">
        <SectionHeader
          title="Client Success Stories"
          subtitle="Hear From Those We've Helped"
        />
        <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto">
          Our clients' satisfaction is our greatest achievement. Browse through these testimonials to understand the impact CodeCanvas has made on businesses across various industries.
        </p>
      </Section>
      <TestimonialsSection />
      <CTASection
        title="Ready to be our next success story?"
        description="Partner with CodeCanvas and let us help you achieve your digital ambitions."
        buttonText="Start Your Project"
        buttonLink="/contact"
      />
    </>
  );
}
