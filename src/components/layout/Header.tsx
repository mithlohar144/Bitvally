"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Briefcase, Users, Settings, MessageSquare, Home, Info, Mail, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About Us", icon: Users },
  { href: "/services", label: "Services", icon: Settings },
  { href: "/portfolio", label: "Portfolio", icon: Briefcase },
  { href: "/technologies", label: "Technologies", icon: Code2 },
  { href: "/testimonials", label: "Testimonials", icon: MessageSquare },
  { href: "/contact", label: "Contact", icon: Mail },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-card shadow-lg py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
          Bitvalley
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-2">
          {navItems.map((item) => (
            <Button
              key={item.label}
              variant={pathname === item.href ? "default" : "ghost"}
              asChild
              className={cn(
                "font-medium",
                pathname === item.href ? "text-primary-foreground" : "text-foreground hover:text-primary"
              )}
            >
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-primary" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-card p-6">
              <div className="flex flex-col space-y-4">
                <Link href="/" className="text-2xl font-bold text-primary mb-6" onClick={() => setMobileMenuOpen(false)}>
                  Bitvalley
                </Link>
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    variant={pathname === item.href ? "default" : "ghost"}
                    asChild
                    className={cn(
                      "justify-start text-lg py-3",
                      pathname === item.href ? "text-primary-foreground" : "text-foreground hover:text-primary"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Link href={item.href}>
                      <item.icon className="mr-3 h-5 w-5" />
                      {item.label}
                    </Link>
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}