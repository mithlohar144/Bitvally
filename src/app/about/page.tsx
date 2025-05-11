
import type { Metadata } from 'next';
import { Section, SectionHeader } from '@/components/common/Section';
import Image from 'next/image';
import { Users, Target, Eye, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about CodeCanvas, our mission, vision, and the values that drive our software and web development services.',
};

const teamMembers = [
  { name: "Alex Johnson", role: "Lead Developer", image: "https://picsum.photos/seed/alex/300/300", dataAiHint: "developer portrait" },
  { name: "Maria Garcia", role: "UX/UI Designer", image: "https://picsum.photos/seed/maria/300/300", dataAiHint: "designer portrait" },
  { name: "Sam Lee", role: "Project Manager", image: "https://picsum.photos/seed/sam/300/300", dataAiHint: "manager portrait" },
];

const values = [
  { title: "Innovation", description: "We constantly explore new technologies and approaches to deliver cutting-edge solutions.", icon: Zap },
  { title: "Quality", description: "Excellence is non-negotiable. We are committed to delivering high-quality, robust, and reliable products.", icon: Target },
  { title: "Collaboration", description: "We believe in strong partnerships with our clients, working together to achieve shared goals.", icon: Users },
  { title: "Integrity", description: "Transparency and honesty are at the core of everything we do.", icon: Eye },
]

export default function AboutPage() {
  return (
    <>
      <Section className="bg-gradient-to-b from-primary/5 to-background">
        <SectionHeader
          title="About CodeCanvas"
          subtitle="Crafting Digital Excellence"
        />
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted-foreground mb-8 fade-in" style={{ animationDelay: '0.2s' }}>
            Founded on the principles of innovation, quality, and collaboration, CodeCanvas is a dynamic software and web development company dedicated to helping businesses thrive in the digital age. We believe that technology, when expertly crafted and thoughtfully implemented, can transform organizations and create lasting value.
          </p>
          <p className="text-lg text-muted-foreground fade-in" style={{ animationDelay: '0.4s' }}>
            Our journey began with a simple mission: to bridge the gap between visionary ideas and tangible digital realities. Today, we are proud to have partnered with a diverse range of clients, from startups to established enterprises, delivering solutions that not only meet their immediate needs but also position them for future success.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground mb-6">
              To empower businesses with innovative and tailored digital solutions that drive growth, enhance efficiency, and create exceptional user experiences. We strive to be a trusted technology partner, translating complex challenges into elegant and effective software and web applications.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground">
              To be a leading force in digital transformation, recognized for our commitment to excellence, our passion for technology, and our ability to deliver solutions that make a meaningful impact on our clients' success and the industries they serve.
            </p>
          </div>
          <div className="fade-in" style={{ animationDelay: '0.8s' }}>
            <Image
              src="https://picsum.photos/seed/about-team/600/450"
              alt="CodeCanvas Team Collaboration"
              data-ai-hint="team collaboration"
              width={600}
              height={450}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </Section>

      <Section className="bg-secondary">
        <SectionHeader title="Our Core Values" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
             <div key={value.title} className="fade-in" style={{ animationDelay: `${1 + index * 0.2}s` }}>
                <Card className="text-center h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 text-primary rounded-full p-3 w-fit mb-4">
                      <value.icon className="w-8 h-8" />
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
             </div>
          ))}
        </div>
      </Section>
      
      {/* Optional: Team Section */}
      {/* 
      <Section>
        <SectionHeader title="Meet Our Team" subtitle="The People Behind CodeCanvas" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={member.name} className="text-center fade-in" style={{ animationDelay: `${1.8 + index * 0.2}s` }}>
              <Image
                src={member.image}
                alt={member.name}
                data-ai-hint={member.dataAiHint}
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4 shadow-lg"
              />
              <h4 className="text-xl font-semibold text-foreground">{member.name}</h4>
              <p className="text-primary">{member.role}</p>
            </div>
          ))}
        </div>
      </Section>
      */}
    </>
  );
}
