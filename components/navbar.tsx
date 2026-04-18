'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Calendar, Menu, ChevronDown } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { LanguageSwitcher } from './language-switcher';

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export function Navbar() {
  const t = useTranslations('navigation');
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout>();

  const navigationItems: NavItem[] = [
    { label: t('home'), href: '/' },
    {
      label: t('services'),
      href: '/services',
      children: [
        { label: t('services'), href: '/services' },
        { label: t('laserHairRemoval'), href: '/services/laser-hair-removal' },
        { label: t('injectableTreatments'), href: '/services/injectable-treatments' },
        { label: t('skinRejuvenation'), href: '/services/skin-rejuvenation' },
      ],
    },
    { label: t('team'), href: '/team' },
    { label: t('blog'), href: '/blog' },
    { label: t('contact'), href: '/contact' },
  ];

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

          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageSwitcher />
            
            <Button
              asChild
              className="hidden sm:flex bg-medical-blue hover:bg-medical-blue-dark text-white"
            >
              <a 
                href={process.env.NEXT_PUBLIC_DOCTOLIB_URL}  
                target="_blank" 
                rel="noopener noreferrer">
                <Calendar className="w-4 h-4 mr-2" />
                {t('book')}
              </a>
            </Button>

            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden -mr-2">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85vw] max-w-sm p-0">
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between px-6 py-4 border-b">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center justify-center w-8 h-8 bg-medical-blue rounded-lg">
                        <span className="text-white text-lg font-bold">M</span>
                      </div>
                      <span className="font-heading text-lg font-semibold text-[#212121]">
                        Medical Excellence
                      </span>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex-1 overflow-y-auto px-6 py-6">
                    <nav className="flex flex-col space-y-1">
                      {navigationItems.map((item) => (
                        <div key={item.label}>
                          <Link
                            href={item.href}
                            className="flex items-center py-3 text-base font-medium text-[#212121] hover:text-medical-blue transition-colors border-b border-gray-100"
                            onClick={() => !item.children && setMobileMenuOpen(false)}
                          >
                            {item.label}
                            {item.children && (
                              <ChevronDown className="w-4 h-4 ml-auto text-gray-400" />
                            )}
                          </Link>
                          {item.children && (
                            <div className="ml-4 mb-2">
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className="block py-2.5 text-sm text-[#616161] hover:text-medical-blue transition-colors"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </nav>
                  </div>

                  {/* Footer CTA */}
                  <div className="px-6 py-5 border-t bg-gray-50">
                    <Button
                      asChild
                      className="w-full bg-medical-blue hover:bg-medical-blue-dark text-white h-12 text-base"
                    >
                      <a href={process.env.NEXT_PUBLIC_DOCTOLIB_URL} target="_blank" rel="noopener noreferrer">
                        <Calendar className="w-5 h-5 mr-2" />
                        {t('book')}
                      </a>
                    </Button>
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
