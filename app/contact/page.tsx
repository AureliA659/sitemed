import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ChatWidget } from '@/components/chat-widget';
import { Card, CardContent } from '@/components/ui/card';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  Navigation,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Contact Us - Medical Excellence Center',
  description:
    'Get in touch with our medical center. Visit us, call, or book an appointment online. Located in San Francisco, CA.',
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        <section className="py-16 bg-gradient-to-br from-medical-blue to-medical-blue-dark text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-white mb-6">Contact Us</h1>
              <p className="text-xl text-white/90 leading-relaxed">
                We're here to answer your questions and help you schedule your
                visit. Reach out to our team today.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl font-heading font-semibold text-[#212121] mb-8">
                  Get in Touch
                </h2>

                <div className="space-y-6 mb-8">
                  <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-medical-blue/10 rounded-lg">
                          <MapPin className="w-6 h-6 text-medical-blue" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#212121] mb-2">
                            Address
                          </h3>
                          <p className="text-[#424242]">
                            123 Medical Plaza, Suite 100
                            <br />
                            San Francisco, CA 94102
                            <br />
                            United States
                          </p>
                          <Button
                            variant="link"
                            className="text-medical-blue p-0 h-auto mt-2"
                            asChild
                          >
                            <a
                              href="https://maps.google.com"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Navigation className="w-4 h-4 mr-1" />
                              Get Directions
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-health-green/10 rounded-lg">
                          <Phone className="w-6 h-6 text-health-green" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#212121] mb-2">
                            Phone
                          </h3>
                          <a
                            href="tel:+1234567890"
                            className="text-[#424242] hover:text-medical-blue transition-colors"
                          >
                            (123) 456-7890
                          </a>
                          <p className="text-sm text-[#424242] mt-1">
                            Monday - Friday: 9:00 AM - 6:00 PM
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-medical-blue/10 rounded-lg">
                          <Mail className="w-6 h-6 text-medical-blue" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#212121] mb-2">
                            Email
                          </h3>
                          <a
                            href="mailto:info@medicalexcellence.com"
                            className="text-[#424242] hover:text-medical-blue transition-colors"
                          >
                            info@medicalexcellence.com
                          </a>
                          <p className="text-sm text-[#424242] mt-1">
                            We'll respond within 24 hours
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-health-green/10 rounded-lg">
                          <Clock className="w-6 h-6 text-health-green" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#212121] mb-2">
                            Opening Hours
                          </h3>
                          <div className="space-y-1 text-[#424242]">
                            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                            <p>Saturday: 10:00 AM - 4:00 PM</p>
                            <p>Sunday: Closed</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-health-green hover:bg-health-green-dark text-white"
                  asChild
                >
                  <a
                    href={process.env.NEXT_PUBLIC_DOCTOLIB_URL} 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book an Appointment Online
                  </a>
                </Button>
              </div>

              <div>
                <h2 className="text-3xl font-heading font-semibold text-[#212121] mb-8">
                  Location
                </h2>

                <Card className="border-0 shadow-lg overflow-hidden h-[600px]">
                  <CardContent className="p-0 h-full">
                    <iframe
                      src="https://maps.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0977736788753!2d-122.41941492346445!3d37.77492997187631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1708534932000!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Medical Excellence Center Location"
                    />
                  </CardContent>
                </Card>

                <div className="mt-6 p-6 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-[#212121] mb-3">
                    Parking Information
                  </h3>
                  <p className="text-[#424242] leading-relaxed">
                    Free validated parking is available in the building's
                    underground garage. Enter from Market Street and bring your
                    ticket to reception for validation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
