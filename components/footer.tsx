import Link from 'next/link';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#212121] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-medical-blue rounded-lg">
                <span className="text-white text-xl font-bold">M</span>
              </div>
              <span className="font-heading text-xl font-semibold">
                Medical Excellence
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premier medical center offering expert healthcare with four
              specialized physicians dedicated to your wellbeing.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-health-green transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-health-green transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-gray-400 hover:text-health-green transition-colors"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-health-green transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-health-green transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/laser-hair-removal"
                  className="text-gray-400 hover:text-health-green transition-colors"
                >
                  Laser Hair Removal
                </Link>
              </li>
              <li>
                <Link
                  href="/services/injectable-treatments"
                  className="text-gray-400 hover:text-health-green transition-colors"
                >
                  Injectable Treatments
                </Link>
              </li>
              <li>
                <Link
                  href="/services/skin-rejuvenation"
                  className="text-gray-400 hover:text-health-green transition-colors"
                >
                  Skin Rejuvenation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/consultations"
                  className="text-gray-400 hover:text-health-green transition-colors"
                >
                  Medical Consultations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-health-green mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  123 Medical Plaza, Suite 100
                  <br />
                  San Francisco, CA 94102
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-health-green flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-gray-400 hover:text-health-green transition-colors text-sm"
                >
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-health-green flex-shrink-0" />
                <a
                  href="mailto:info@medicalexcellence.com"
                  className="text-gray-400 hover:text-health-green transition-colors text-sm"
                >
                  info@medicalexcellence.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-health-green flex-shrink-0" />
                <span className="text-gray-400 text-sm">Mon-Fri: 9AM-6PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; 2024 Medical Excellence Center. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-health-green transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-health-green transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
