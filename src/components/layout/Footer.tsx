
import Link from "next/link";
import { Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <Link href="https://linkedin.com" passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6 hover:text-primary transition-colors" />
              </Button>
            </a>
          </Link>
          <Link href="https://instagram.com" passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="Instagram">
                <Instagram className="h-6 w-6 hover:text-primary transition-colors" />
              </Button>
            </a>
          </Link>
          <Link href="https://github.com" passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="GitHub">
                <Github className="h-6 w-6 hover:text-primary transition-colors" />
              </Button>
            </a>
          </Link>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} CodeCanvas. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          Built with Next.js and Tailwind CSS.
        </p>
        {/* 
          Placeholder for live chat widget integration (e.g., Tawk.to)
          <script type="text/javascript">
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
          var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
          s1.async=true;
          s1.src='YOUR_TAWK_TO_SCRIPT_URL';
          s1.charset='UTF-8';
          s1.setAttribute('crossorigin','*');
          s0.parentNode.insertBefore(s1,s0);
          })();
          </script>
        */}
        {/* 
          Placeholder for floating WhatsApp contact button
          <a href="https://wa.me/YOUR_PHONE_NUMBER" target="_blank" rel="noopener noreferrer" style={{position: 'fixed', bottom: '20px', right: '20px', zIndex: 100}}>
             <img src="/path-to-whatsapp-icon.svg" alt="WhatsApp" style={{width: '50px', height: '50px'}} />
          </a>
        */}
      </div>
    </footer>
  );
}
