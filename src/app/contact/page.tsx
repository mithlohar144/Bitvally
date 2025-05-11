
import type { Metadata } from 'next';
import { Section, SectionHeader } from '@/components/common/Section';
import { ContactForm } from '@/components/contact-page/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// If you have a Google Maps API Key, uncomment the GoogleMap component and its import
// import { GoogleMap } from '@/components/contact-page/GoogleMap';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with CodeCanvas for your software and web development needs. Reach out via our contact form, email, or phone.',
};

export default function ContactPage() {
  // IMPORTANT: To enable Google Maps, you need to set up a Google Cloud Project,
  // enable the Maps JavaScript API, and add your API key to your environment variables.
  // const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  return (
    <>
      <Section className="bg-gradient-to-b from-primary/5 to-background">
        <SectionHeader
          title="Get In Touch"
          subtitle="We'd Love to Hear From You"
        />
        <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto">
          Whether you have a question about our services, want to discuss a potential project, or just want to say hello, feel free to reach out. Our team is ready to assist you.
        </p>
      </Section>

      <Section className="!pt-0 md:!pt-0 -mt-10">
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-primary" />
                  <a href="mailto:info@codecanvas.com" className="text-foreground hover:text-primary transition-colors">
                    info@codecanvas.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-primary" />
                  <a href="tel:+1234567890" className="text-foreground hover:text-primary transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-primary" />
                  <p className="text-foreground">123 Innovation Drive, Tech City, CA 90210</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="text-xl">Our Location</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                {/* 
                {googleMapsApiKey ? (
                  <GoogleMap apiKey={googleMapsApiKey} />
                ) : (
                */}
                  <div className="w-full h-64 bg-muted flex items-center justify-center text-muted-foreground">
                    <p>Google Map placeholder. <br/>Add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to .env.local to enable.</p>
                  </div>
                {/* )} */}
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
