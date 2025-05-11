
import { HeroSection } from "@/components/home-page/HeroSection";
import { ServicesPreview } from "@/components/home-page/ServicesPreview";
import { ClientLogos } from "@/components/home-page/ClientLogos";
import { TestimonialsSection } from "@/components/testimonials-page/TestimonialsSection"; // Re-use testimonials section on home
import { CTASection } from "@/components/common/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      {/* Short intro about the company - can be part of Hero or a small dedicated section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">About CodeCanvas</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            At CodeCanvas, we are passionate about transforming ideas into impactful digital experiences. 
            With a focus on innovation and quality, we partner with businesses of all sizes to deliver 
            custom software, web, and mobile solutions that drive growth and efficiency.
          </p>
        </div>
      </section>
      <TestimonialsSection isHomePage={true} />
      <ClientLogos />
      <CTASection
        title="Ready to start your next project?"
        description="Let's discuss how CodeCanvas can help you achieve your digital goals."
        buttonText="Get In Touch"
        buttonLink="/contact"
      />
    </>
  );
}
