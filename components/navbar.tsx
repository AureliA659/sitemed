'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Calendar, Menu, X, ChevronDown } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const navigationItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'All Services', href: '/services' },
      { label: 'Laser Hair Removal', href: '/services/laser-hair-removal' },
      { label: 'Injectable Treatments', href: '/services/injectable-treatments' },
      { label: 'Skin Rejuvenation', href: '/services/skin-rejuvenation' },
    ],
  },
  { label: 'Our Team', href: '/team' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  };

  const toggleDropdown = (label: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 bg-medical-blue rounded-lg">
              <span className="text-white text-xl font-bold">M</span>
            </div>
            <span className="font-heading text-xl font-semibold text-[#212121] hidden sm:block">
              Medical Excellence
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-8" ref={dropdownRef}>
            {navigationItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                {item.children ? (
                  <button 
                    onClick={() => toggleDropdown(item.label)}
                    className="flex items-center space-x-1 text-[#424242] hover:text-medical-blue transition-colors font-medium"
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="text-[#424242] hover:text-medical-blue transition-colors font-medium"
                  >
                    {item.label}
                  </Link>
                )}

                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 animate-in fade-in-0 zoom-in-95 slide-in-from-top-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-[#424242] hover:bg-blue-50 hover:text-medical-blue transition-colors"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Button
              asChild
              className="hidden sm:flex bg-medical-blue hover:bg-medical-blue-dark text-white"
            >
              <a 
                href={process.env.NEXT_PUBLIC_DOCTOLIB_URL}  
                target="_blank" 
                rel="noopener noreferrer">
                <Calendar className="w-4 h-4 mr-2" />
                Book Appointment
              </a>
            </Button>

            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  {mobileMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-6 mt-8">
                  <Button
                    asChild
                    className="w-full bg-medical-blue hover:bg-medical-blue-dark text-white"
                  >
                    <a href="#book-appointment">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Appointment
                    </a>
                  </Button>

                  <div className="flex flex-col space-y-4">
                    {navigationItems.map((item) => (
                      <div key={item.label}>
                        <Link
                          href={item.href}
                          className="text-lg font-medium text-[#212121] hover:text-medical-blue transition-colors block py-2"
                          onClick={() => !item.children && setMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                        {item.children && (
                          <div className="ml-4 mt-2 space-y-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="block text-[#424242] hover:text-medical-blue transition-colors py-1"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
