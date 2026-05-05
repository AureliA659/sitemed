'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Calendar, Menu, ChevronDown, ChevronRight } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { LanguageSwitcher } from './language-switcher';

interface NavGrandchild {
  label: string;
  href: string;
}

interface NavChild {
  label: string;
  href: string;
  children?: NavGrandchild[];
}

interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export function Navbar() {
  const t = useTranslations('navigation');
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<Set<string>>(new Set());
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout>();
  const subHoverTimeoutRef = useRef<NodeJS.Timeout>();

  const navigationItems: NavItem[] = [
    {
      label: t('rides'),
      href: '/rides',
      children: [
        { label: t('ridesStatiques'), href: '/rides/rides-statiques' },
        { label: t('ridesExpression'), href: '/rides/rides-expression' },
      ],
    },
    {
      label: t('vergetures'),
      href: '/vergetures',
      children: [
        { label: t('vergeturesRouges'), href: '/vergetures/vergetures-rouges' },
        { label: t('vergeturesBlanches'), href: '/vergetures/vergetures-blanches' },
      ],
    },
    { label: t('cicatrices'), href: '/cicatrices' },
    { label: t('relachementCutane'), href: '/relachement-cutane' },
    {
      label: t('epilation'),
      href: '/epilation',
      children: [
        { label: t('epilationLaser'), href: '/epilation/epilation-laser' },
        { label: t('epilationElectrolyse'), href: '/epilation/epilation-electrolyse' },
      ],
    },
    {
      label: t('laser'),
      href: '/laser',
      children: [
        { label: t('laserPigmentaire'), href: '/laser/laser-pigmentaire' },
        {
          label: t('laserVasculaire'),
          href: '/laser/laser-vasculaire',
          children: [
            { label: t('erythrose'), href: '/laser/laser-vasculaire/erythrose' },
            { label: t('rosacee'), href: '/laser/laser-vasculaire/rosacee' },
            { label: t('couperose'), href: '/laser/laser-vasculaire/couperose' },
            { label: t('angiome'), href: '/laser/laser-vasculaire/angiome' },
            { label: t('tacheRubis'), href: '/laser/laser-vasculaire/tache-rubis' },
          ],
        },
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
      if (subHoverTimeoutRef.current) {
        clearTimeout(subHoverTimeoutRef.current);
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
      setOpenSubDropdown(null);
    }, 200);
  };

  const handleSubMouseEnter = (label: string) => {
    if (subHoverTimeoutRef.current) clearTimeout(subHoverTimeoutRef.current);
    setOpenSubDropdown(label);
  };

  const handleSubMouseLeave = () => {
    subHoverTimeoutRef.current = setTimeout(() => {
      setOpenSubDropdown(null);
    }, 200);
  };

  const toggleMobileExpanded = (label: string) => {
    setMobileExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(label)) next.delete(label);
      else next.add(label);
      return next;
    });
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
          ? 'bg-ivory/98 shadow-sm border-b border-gold/10 py-3'
          : 'bg-ivory/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="w-full px-6 pr-8">
        <div className="flex items-center">
          {/* Logo — left */}
          <Link href="/" className="flex items-center flex-shrink-0 mr-6">
            <div className="flex flex-col leading-none">
              <span className="font-heading text-[13px] font-semibold tracking-[0.18em] text-charcoal uppercase">
                Medical
              </span>
              <span className="font-heading text-[13px] font-light tracking-[0.35em] text-gold uppercase">
                Excellence
              </span>
            </div>
          </Link>

          {/* Nav items — left-aligned after logo */}
          <div className="hidden lg:flex flex-1 items-center" ref={dropdownRef}>
            <div className="flex items-center space-x-5">
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
                    className="flex items-center space-x-1 text-warm-gray hover:text-charcoal transition-colors duration-300 text-sm tracking-wide"
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="text-warm-gray hover:text-charcoal transition-colors duration-300 text-sm tracking-wide"
                  >
                    {item.label}
                  </Link>
                )}

                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-3 w-60 bg-ivory shadow-xl border border-gold/15 py-1.5 animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 z-50">
                    {item.children.map((child) => (
                      <div
                        key={child.href}
                        className="relative"
                        onMouseEnter={() => child.children && handleSubMouseEnter(child.label)}
                        onMouseLeave={handleSubMouseLeave}
                      >
                        {child.children ? (
                          <button
                            className="flex items-center justify-between w-full px-5 py-3 text-sm text-warm-gray hover:bg-taupe hover:text-charcoal transition-colors"
                            onClick={() => window.location.href = child.href}
                          >
                            <span>{child.label}</span>
                            <ChevronRight className="w-3.5 h-3.5 text-gold/60" />
                          </button>
                        ) : (
                          <Link
                            href={child.href}
                            className="block px-5 py-3 text-sm text-warm-gray hover:bg-taupe hover:text-charcoal transition-colors"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {child.label}
                          </Link>
                        )}

                        {child.children && openSubDropdown === child.label && (
                          <div className="absolute top-0 left-full ml-1 w-52 bg-ivory shadow-xl border border-gold/15 py-1.5 z-50">
                            {child.children.map((grandchild) => (
                              <Link
                                key={grandchild.href}
                                href={grandchild.href}
                                className="block px-5 py-3 text-sm text-warm-gray hover:bg-taupe hover:text-charcoal transition-colors"
                                onClick={() => { setOpenDropdown(null); setOpenSubDropdown(null); }}
                              >
                                {grandchild.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 mr-4 ml-10">
            <LanguageSwitcher />
            
            <Button
              asChild
              className="hidden sm:flex bg-charcoal hover:bg-charcoal-dark text-white text-sm tracking-wide rounded-none px-5"
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
              <SheetContent side="right" className="w-[85vw] max-w-sm p-0 bg-ivory border-gold/15">
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between px-6 py-5 border-b border-gold/15">
                    <div className="flex flex-col leading-none">
                      <span className="font-heading text-[13px] font-semibold tracking-[0.18em] text-charcoal uppercase">
                        Medical
                      </span>
                      <span className="font-heading text-[13px] font-light tracking-[0.35em] text-gold uppercase">
                        Excellence
                      </span>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex-1 overflow-y-auto px-6 py-6">
                    <nav className="flex flex-col space-y-1">
                      {navigationItems.map((item) => (
                        <div key={item.label}>
                          <div className="flex items-center">
                            <Link
                              href={item.href}
                              className="flex-1 py-3.5 text-sm tracking-wide font-medium text-charcoal hover:text-gold transition-colors border-b border-gold/10"
                              onClick={() => !item.children && setMobileMenuOpen(false)}
                            >
                              {item.label}
                            </Link>
                            {item.children && (
                              <button
                                className="py-3.5 pl-3 border-b border-gold/10 text-warm-gray"
                                onClick={() => toggleMobileExpanded(item.label)}
                              >
                                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded.has(item.label) ? 'rotate-180' : ''}`} />
                              </button>
                            )}
                          </div>
                          {item.children && mobileExpanded.has(item.label) && (
                            <div className="ml-3 mb-1">
                              {item.children.map((child) => (
                                <div key={child.href}>
                                  <div className="flex items-center">
                                    <Link
                                      href={child.href}
                                      className="flex-1 py-2.5 text-sm text-warm-gray hover:text-gold transition-colors border-b border-gold/5"
                                      onClick={() => !child.children && setMobileMenuOpen(false)}
                                    >
                                      {child.label}
                                    </Link>
                                    {child.children && (
                                      <button
                                        className="py-2.5 pl-3 border-b border-gold/5 text-warm-gray"
                                        onClick={() => toggleMobileExpanded(child.label)}
                                      >
                                        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${mobileExpanded.has(child.label) ? 'rotate-180' : ''}`} />
                                      </button>
                                    )}
                                  </div>
                                  {child.children && mobileExpanded.has(child.label) && (
                                    <div className="ml-3">
                                      {child.children.map((grandchild) => (
                                        <Link
                                          key={grandchild.href}
                                          href={grandchild.href}
                                          className="block py-2 text-sm text-warm-gray/70 hover:text-gold transition-colors border-b border-gold/5"
                                          onClick={() => setMobileMenuOpen(false)}
                                        >
                                          — {grandchild.label}
                                        </Link>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </nav>
                  </div>

                  {/* Footer CTA */}
                  <div className="px-6 py-5 border-t border-gold/15 bg-taupe">
                    <Button
                      asChild
                      className="w-full bg-charcoal hover:bg-charcoal-dark text-white h-12 text-sm tracking-wide rounded-none"
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
