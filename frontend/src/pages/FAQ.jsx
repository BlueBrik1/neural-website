import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import Navigation from '../components/Navigation';
import EnhancedCursorBackground from '../components/EnhancedCursorBackground';
import { FadeInText, StaggeredText, GlowText } from '../components/AnimatedText';
import { Button } from '../components/ui/button';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const faqs = [
    {
      id: 1,
      question: "How do I start learning AI with Neural?",
      answer: "Getting started with Neural is simple! Just sign up for an account, choose your learning path, and begin with our foundational AI concepts. Our platform guides you through each step, from basic AI understanding to advanced prompt engineering techniques. No prior experience required - we'll teach you everything from scratch."
    },
    {
      id: 2,
      question: "Is Neural beginner-friendly?",
      answer: "Absolutely! Neural is specifically designed for beginners. We start with the fundamentals and gradually build up to more advanced concepts. Our gamified approach makes learning fun and engaging, while our AI-powered feedback system ensures you understand each concept before moving forward. Whether you're a high school student or a working professional, our platform adapts to your learning pace."
    },
    {
      id: 3,
      question: "Do I get a certificate upon completion?",
      answer: "Yes! Neural provides industry-recognized certificates upon course completion. You'll receive certificates for individual modules as well as a comprehensive completion certificate. These certificates can be shared on LinkedIn, added to your resume, or used to demonstrate your AI skills to employers and clients."
    },
    {
      id: 4,
      question: "Can high school students use Neural?",
      answer: "Definitely! Neural is perfect for high school students interested in AI. Our content is designed to be accessible to learners of all ages, and we provide special guidance for younger learners. Many high school students use Neural to prepare for college, build impressive portfolios, or explore potential career paths in AI and technology."
    },
    {
      id: 5,
      question: "Is there a free trial available?",
      answer: "Yes! We offer a free trial that gives you access to our foundational AI concepts and basic prompt engineering exercises. This allows you to experience our learning platform and see if it's the right fit for you. You can also access our free AI guide on Gumroad to get started with AI basics at no cost."
    },
    {
      id: 6,
      question: "What AI tools will I learn to use?",
      answer: "You'll learn to use a wide range of AI tools including ChatGPT, GPT-4, AI image generation tools like DALL-E and Midjourney, code generation tools, and various AI-powered productivity applications. We focus on practical, real-world applications so you can immediately apply your skills in professional and personal projects."
    },
    {
      id: 7,
      question: "How long does it take to complete the course?",
      answer: "The course is designed to be flexible and self-paced. Most learners complete the full course in 4-6 weeks, spending about 1-2 hours per day. However, you can take as much time as you need - there's no rush! The platform tracks your progress and adapts to your learning speed."
    },
    {
      id: 8,
      question: "What if I need help or have questions?",
      answer: "We provide multiple support channels! Our AI tutors are available 24/7 to answer questions and provide guidance. You can also reach out to our support team through the contact page, and we have an active community of learners who help each other. Plus, our platform includes detailed explanations and examples for every concept."
    },
    {
      id: 9,
      question: "Can I use Neural on mobile devices?",
      answer: "Yes! Neural is fully responsive and works great on mobile devices, tablets, and desktop computers. You can learn AI skills on the go, practice prompt engineering during your commute, or review concepts anywhere you have internet access. Our mobile interface is optimized for touch interactions."
    },
    {
      id: 10,
      question: "What makes Neural different from other AI courses?",
      answer: "Neural stands out with its unique gamified approach to AI education. Unlike traditional courses, we make learning AI fun and engaging through interactive exercises, real-time feedback, and a progressive achievement system. Our focus on practical, hands-on learning ensures you can immediately apply your skills, and our AI-powered personalization adapts to your learning style."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Neural FAQ | Frequently Asked Questions About AI Learning</title>
        <meta name="description" content="Find answers to common questions about Neural's AI learning platform. Learn about getting started, certificates, pricing, and how our gamified approach makes learning AI easy and fun." />
        <meta name="keywords" content="Neural FAQ, AI learning questions, prompt engineering FAQ, AI course help, beginner AI questions, AI certification FAQ" />
        <meta property="og:title" content="Neural FAQ | Frequently Asked Questions About AI Learning" />
        <meta property="og:description" content="Find answers to common questions about Neural's AI learning platform. Learn about getting started, certificates, pricing, and how our gamified approach makes learning AI easy and fun." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pixelandprintofficial.com/faq" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Neural FAQ | Frequently Asked Questions About AI Learning" />
        <meta name="twitter:description" content="Find answers to common questions about Neural's AI learning platform. Learn about getting started, certificates, pricing, and how our gamified approach makes learning AI easy and fun." />
        
        {/* JSON-LD Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "FAQPage",
                "@id": "https://pixelandprintofficial.com/faq/#faqpage",
                "url": "https://pixelandprintofficial.com/faq",
                "name": "Neural FAQ | Frequently Asked Questions About AI Learning",
                "description": "Find answers to common questions about Neural's AI learning platform. Learn about getting started, certificates, pricing, and how our gamified approach makes learning AI easy and fun.",
                "mainEntity": faqs.map(faq => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                  }
                })),
                "publisher": {
                  "@type": "Organization",
                  "name": "Neural",
                  "url": "https://pixelandprintofficial.com",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://pixelandprintofficial.com/logo.png"
                  }
                }
              },
              {
                "@type": "WebPage",
                "@id": "https://pixelandprintofficial.com/faq/#webpage",
                "url": "https://pixelandprintofficial.com/faq",
                "name": "Neural FAQ | Frequently Asked Questions About AI Learning",
                "description": "Find answers to common questions about Neural's AI learning platform. Learn about getting started, certificates, pricing, and how our gamified approach makes learning AI easy and fun.",
                "isPartOf": {
                  "@id": "https://pixelandprintofficial.com/#website"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "Neural",
                  "url": "https://pixelandprintofficial.com"
                },
                "mainEntity": {
                  "@id": "https://pixelandprintofficial.com/faq/#faqpage"
                },
                "breadcrumb": {
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://pixelandprintofficial.com"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "FAQ",
                      "item": "https://pixelandprintofficial.com/faq"
                    }
                  ]
                }
              },
              {
                "@type": "WebSite",
                "@id": "https://pixelandprintofficial.com/#website",
                "url": "https://pixelandprintofficial.com",
                "name": "Neural - AI Learning Platform",
                "description": "Learn AI like a language. Built for the next-gen minds.",
                "publisher": {
                  "@type": "Organization",
                  "name": "Neural",
                  "url": "https://pixelandprintofficial.com"
                }
              },
              {
                "@type": "Product",
                "@id": "https://pixelandprintofficial.com/#product",
                "name": "Neural AI Learning Platform",
                "description": "Interactive AI learning platform with gamified approach to mastering AI skills, prompt engineering, and AI tools.",
                "url": "https://pixelandprintofficial.com",
                "image": "https://pixelandprintofficial.com/placeholder.jpg",
                "brand": {
                  "@type": "Brand",
                  "name": "Neural"
                },
                "offers": {
                  "@type": "Offer",
                  "price": "29.99",
                  "priceCurrency": "USD",
                  "availability": "https://schema.org/InStock",
                  "url": "https://pixelandprintofficial.com/preorder"
                },
                "category": "Educational Software",
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.8",
                  "reviewCount": "1250"
                }
              },
              {
                "@type": "Course",
                "@id": "https://pixelandprintofficial.com/#course",
                "name": "Complete AI Learning Course",
                "description": "Comprehensive AI learning course covering prompt engineering, AI tools, and practical applications.",
                "provider": {
                  "@type": "Organization",
                  "name": "Neural",
                  "url": "https://pixelandprintofficial.com"
                },
                "coursePrerequisites": "No prior AI experience required",
                "educationalLevel": "Beginner to Intermediate",
                "teaches": [
                  "Prompt Engineering",
                  "AI Tools Usage",
                  "ChatGPT Mastery",
                  "AI Image Generation",
                  "AI Ethics"
                ],
                "courseMode": "Online",
                "timeRequired": "PT40H",
                "educationalCredentialAwarded": "Certificate of Completion"
              }
            ]
          })}
        </script>
      </Helmet>
      
      <div className="relative min-h-screen bg-black text-white overflow-hidden">
        <EnhancedCursorBackground />
        <Navigation />
        
        <div className="relative z-10 pt-24 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <FadeInText>
                <Badge className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20 transition-all duration-300 animate-pulse-glow">
                  Help & Support
                </Badge>
              </FadeInText>
              <FadeInText delay={0.2}>
                <GlowText>
                  <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                    Neural FAQ: Learn AI Online with Neural
                  </h1>
                </GlowText>
              </FadeInText>
              <FadeInText delay={0.4}>
                <StaggeredText 
                  text="Find answers to the most common questions about our online AI course. Learn AI from scratch with prompt engineering, AI tools, and AI techniques. Can't find what you're looking for? Contact our support team."
                  className="text-xl text-gray-300 max-w-3xl mx-auto"
                  delay={0.4}
                />
              </FadeInText>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-4 mb-16">
              {faqs.map((faq, index) => (
                <FadeInText key={faq.id} delay={0.6 + index * 0.1}>
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                    <CardContent className="p-0">
                      <button
                        onClick={() => toggleItem(faq.id)}
                        className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300"
                      >
                        <GlowText>
                          <h3 className="text-lg md:text-xl font-semibold text-white pr-4">
                            {faq.question}
                          </h3>
                        </GlowText>
                        <Icon 
                          icon={openItems.has(faq.id) ? "mdi:chevron-up" : "mdi:chevron-down"} 
                          className={`text-2xl text-orange-400 transition-transform duration-300 ${
                            openItems.has(faq.id) ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {openItems.has(faq.id) && (
                        <div className="px-6 pb-6">
                          <div className="border-t border-white/10 pt-4">
                            <p className="text-gray-300 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </FadeInText>
              ))}
            </div>

            {/* CTA Section */}
            <FadeInText delay={1.2}>
              <div className="text-center">
                <Card className="bg-gradient-to-r from-orange-500/10 to-red-600/10 backdrop-blur-sm border-orange-500/20 glass">
                  <CardContent className="p-8">
                    <GlowText>
                      <h2 className="text-3xl font-bold mb-4 text-orange-400">Need Help with Your AI Course Journey?</h2>
                    </GlowText>
                    <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                      Can't find the answer you're looking for? Our support team is here to help you get the most out of your online AI course and AI learning journey.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link to="/contact">
                        <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 btn-hover-lift">
                          Contact Support
                        </Button>
                      </Link>
                      <Link to="/preorder">
                        <Button 
                          variant="outline" 
                          className="border-white/20 text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg backdrop-blur-sm transition-all duration-300 btn-hover-lift"
                        >
                          Start Learning
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </FadeInText>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ; 