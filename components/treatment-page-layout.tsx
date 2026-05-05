import Link from 'next/link';
import { ArrowLeft, Calendar, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Footer } from '@/components/footer';

interface SubPage {
  title: string;
  href: string;
  description: string;
}

interface TreatmentPageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  backHref: string;
  backLabel: string;
  features?: string[];
  subPages?: SubPage[];
}

export function TreatmentPageLayout({
  title,
  subtitle,
  description,
  backHref,
  backLabel,
  features,
  subPages,
}: TreatmentPageLayoutProps) {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero banner */}
      <div className="bg-charcoal pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 text-gold/60 hover:text-gold text-sm tracking-wide mb-10 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {backLabel}
          </Link>
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-8 h-px bg-gold/40"></span>
            <span className="text-[11px] tracking-[0.25em] uppercase font-sans font-medium text-gold/60">
              {subtitle}
            </span>
          </div>
          <h1 className="text-white font-light">{title}</h1>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto max-w-4xl px-4 py-16">
        <p className="text-warm-gray text-lg leading-relaxed mb-14">{description}</p>

        {features && features.length > 0 && (
          <div className="grid sm:grid-cols-2 gap-4 mb-14">
            {features.map((f, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 bg-white border border-gold/10"
              >
                <span className="block w-0.5 min-h-[1.25rem] bg-gold flex-shrink-0 mt-0.5"></span>
                <span className="text-warm-gray text-sm leading-relaxed">{f}</span>
              </div>
            ))}
          </div>
        )}

        {subPages && subPages.length > 0 && (
          <>
            <div className="flex items-center gap-3 mb-8">
              <span className="block w-8 h-px bg-gold"></span>
              <span className="text-[11px] tracking-[0.25em] uppercase font-sans font-medium text-gold">
                Nos traitements
              </span>
            </div>
            <div className="grid sm:grid-cols-2 gap-5 mb-14">
              {subPages.map((sp) => (
                <Link
                  key={sp.href}
                  href={sp.href}
                  className="block p-6 bg-white border border-gold/10 hover:border-gold/40 hover:shadow-md transition-all group"
                >
                  <h3 className="font-heading text-xl font-light text-charcoal mb-2 group-hover:text-gold transition-colors">
                    {sp.title}
                  </h3>
                  <p className="text-warm-gray text-sm leading-relaxed">{sp.description}</p>
                </Link>
              ))}
            </div>
          </>
        )}

        {/* CTA */}
        <div className="bg-charcoal p-10 text-center">
          <p className="text-[11px] tracking-[0.25em] uppercase font-sans font-medium text-gold mb-4">
            Consultation
          </p>
          <h2 className="text-white font-light text-3xl mb-3">Prendre rendez-vous</h2>
          <p className="text-white/40 mb-8 text-sm max-w-md mx-auto">
            Consultez nos experts pour une évaluation personnalisée et un protocole adapté.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-gold hover:bg-gold-dark text-white rounded-none tracking-widest uppercase text-sm px-8 py-6 h-auto"
            >
              <a
                href={process.env.NEXT_PUBLIC_DOCTOLIB_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Doctolib
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border border-white/20 text-white bg-transparent hover:bg-white/10 rounded-none tracking-widest uppercase text-sm px-8 py-6 h-auto"
            >
              <a href="tel:+1234567890">
                <Phone className="w-4 h-4 mr-2" />
                Nous appeler
              </a>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
