import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ChatWidget } from '@/components/chat-widget';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calendar, User } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Medical Blog - Health Insights & Expert Advice',
  description:
    'Read the latest medical insights, research updates, and expert health advice from our specialized physicians.',
};

const blogPosts = [
  {
    id: '1',
    title: 'Understanding Laser Hair Removal: Science and Safety',
    slug: 'understanding-laser-hair-removal',
    excerpt:
      'A comprehensive guide to the science behind laser hair removal technology, safety protocols, and what patients should expect during treatment.',
    image:
      'https://images.pexels.com/photos/3985320/pexels-photo-3985320.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Dr. Sarah Mitchell',
    date: 'February 10, 2024',
    category: 'Laser Treatments',
    readTime: '5 min read',
  },
  {
    id: '2',
    title: 'The Role of Dermal Fillers in Facial Rejuvenation',
    slug: 'dermal-fillers-facial-rejuvenation',
    excerpt:
      'Exploring how modern dermal fillers work, their composition, application techniques, and the science of achieving natural-looking results.',
    image:
      'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Dr. Michael Chen',
    date: 'February 8, 2024',
    category: 'Injectable Treatments',
    readTime: '7 min read',
  },
  {
    id: '3',
    title: 'Skin Health: Evidence-Based Approaches to Anti-Aging',
    slug: 'evidence-based-anti-aging',
    excerpt:
      'Scientific evidence supporting various anti-aging treatments, from topical therapies to advanced medical procedures.',
    image:
      'https://images.pexels.com/photos/3852159/pexels-photo-3852159.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Dr. Emily Rodriguez',
    date: 'February 5, 2024',
    category: 'Skin Rejuvenation',
    readTime: '6 min read',
  },
  {
    id: '4',
    title: 'Personalized Medicine: Tailoring Treatments to Individual Needs',
    slug: 'personalized-medicine-approach',
    excerpt:
      'How modern medical practice incorporates individual patient characteristics to develop customized treatment protocols.',
    image:
      'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Dr. James Anderson',
    date: 'February 3, 2024',
    category: 'Medical Science',
    readTime: '8 min read',
  },
  {
    id: '5',
    title: 'Post-Treatment Care: Optimizing Your Recovery',
    slug: 'post-treatment-care-guide',
    excerpt:
      'Essential guidelines for post-treatment care to ensure optimal healing, minimize complications, and achieve the best possible outcomes.',
    image:
      'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Dr. Sarah Mitchell',
    date: 'February 1, 2024',
    category: 'Patient Care',
    readTime: '5 min read',
  },
  {
    id: '6',
    title: 'Latest Advances in Minimally Invasive Aesthetic Procedures',
    slug: 'advances-minimally-invasive-procedures',
    excerpt:
      'Recent technological developments in minimally invasive procedures that offer enhanced safety, reduced downtime, and improved results.',
    image:
      'https://images.pexels.com/photos/4021808/pexels-photo-4021808.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Dr. Michael Chen',
    date: 'January 29, 2024',
    category: 'Medical Innovation',
    readTime: '9 min read',
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        <section className="py-16 bg-gradient-to-br from-medical-blue to-medical-blue-dark text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-white mb-6">Medical Insights & Expert Advice</h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Stay informed with the latest medical research, treatment
                insights, and health advice from our specialized physicians.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {blogPosts.map((post) => (
                <Card
                  key={post.id}
                  className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden h-full flex flex-col"
                >
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-medical-blue text-white border-0">
                          {post.category}
                        </Badge>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-4 text-sm text-[#424242] mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>

                      <h3 className="text-xl font-heading font-semibold text-[#212121] mb-3 line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-[#424242] mb-4 leading-relaxed line-clamp-3 flex-grow">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-medical-blue" />
                          <span className="text-sm text-[#424242]">
                            {post.author}
                          </span>
                        </div>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center text-medical-blue hover:text-medical-blue-dark font-medium transition-colors group/link"
                        >
                          Read
                          <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
