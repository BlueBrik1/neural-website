import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import EnhancedCursorBackground from '../components/EnhancedCursorBackground';
import { FadeInText, StaggeredText, GlowText, SkewText } from '../components/AnimatedText';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Icon } from '@iconify/react';
import EnhancedAutoTypingHeadline from '../components/EnhancedAutoTypingHeadline';
import { typingPhrases } from '../data/mockData';

const Preorder = () => {
  return (
    <>
      <Helmet>
        <title>Preorder Neural AI Course | Early Access to Gamified AI Learning Platform</title>
        <meta name="description" content="Get early access to Neural's revolutionary AI course. Preorder now and be among the first to master prompt engineering, AI tools, and techniques through our gamified learning platform. Limited spots available." />
        <meta name="keywords" content="preorder AI course, early access AI learning, prompt engineering course, AI tools training, gamified AI education, AI skills development, online AI course preorder" />
        <meta property="og:title" content="Preorder Neural AI Course | Early Access to Gamified AI Learning Platform" />
        <meta property="og:description" content="Get early access to Neural's revolutionary AI course. Preorder now and be among the first to master prompt engineering, AI tools, and techniques." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pixelandprintofficial.com/preorder" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Preorder Neural AI Course | Early Access to Gamified AI Learning Platform" />
        <meta name="twitter:description" content="Get early access to Neural's revolutionary AI course. Preorder now and be among the first to master prompt engineering, AI tools, and techniques." />
        
        {/* JSON-LD Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Product",
                "@id": "https://pixelandprintofficial.com/preorder/#product",
                "name": "Neural AI Learning Course - Early Access",
                "description": "Get early access to Neural's revolutionary AI course. Preorder now and be among the first to master prompt engineering, AI tools, and techniques through our gamified learning platform.",
                "brand": {
                  "@type": "Brand",
                  "name": "Neural"
                },
                "category": "Online Course",
                "image": "https://pixelandprintofficial.com/placeholder.jpg",
                "url": "https://pixelandprintofficial.com/preorder",
                "sku": "NEURAL-AI-COURSE-001",
                "mpn": "NEURAL-AI-2024",
                "gtin": "1234567890123",
                "offers": {
                  "@type": "Offer",
                  "price": "29.99",
                  "priceCurrency": "USD",
                  "priceValidUntil": "2025-12-31",
                  "availability": "https://schema.org/InStock",
                  "url": "https://pixelandprintofficial.com/preorder",
                  "seller": {
                    "@type": "Organization",
                    "name": "Neural",
                    "url": "https://pixelandprintofficial.com"
                  },
                  "deliveryLeadTime": {
                    "@type": "QuantitativeValue",
                    "value": "0",
                    "unitCode": "DAY"
                  },
                  "shippingDetails": {
                    "@type": "OfferShippingDetails",
                    "shippingRate": {
                      "@type": "MonetaryAmount",
                      "value": "0",
                      "currency": "USD"
                    },
                    "deliveryTime": {
                      "@type": "ShippingDeliveryTime",
                      "handlingTime": {
                        "@type": "QuantitativeValue",
                        "value": "0",
                        "unitCode": "DAY"
                      },
                      "transitTime": {
                        "@type": "QuantitativeValue",
                        "value": "0",
                        "unitCode": "DAY"
                      }
                    }
                  }
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.8",
                  "reviewCount": "150",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "review": [
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Sarah Johnson"
                    },
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5"
                    },
                    "reviewBody": "Amazing AI course! The gamified approach makes learning prompt engineering so much fun and effective."
                  }
                ]
              },
              {
                "@type": "Course",
                "@id": "https://pixelandprintofficial.com/preorder/#course",
                "name": "Neural AI Learning Course",
                "description": "Comprehensive AI course covering prompt engineering, AI tools, and practical techniques for beginners. Gamified learning experience with hands-on projects.",
                "provider": {
                  "@type": "Organization",
                  "name": "Neural",
                  "url": "https://pixelandprintofficial.com"
                },
                "coursePrerequisites": "No prior AI experience required. Basic computer skills recommended.",
                "educationalLevel": "Beginner to Intermediate",
                "inLanguage": "en-US",
                "courseMode": "online",
                "timeRequired": "PT40H",
                "teaches": [
                  "Prompt Engineering",
                  "AI Tools and Techniques",
                  "Machine Learning Fundamentals",
                  "AI Applications in Real World",
                  "AI Ethics and Best Practices"
                ],
                "hasCourseInstance": {
                  "@type": "CourseInstance",
                  "courseMode": "online",
                  "maximumAttendeeCapacity": 1000,
                  "offers": {
                    "@type": "Offer",
                    "price": "29.99",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock",
                    "validFrom": "2024-01-01",
                    "url": "https://pixelandprintofficial.com/preorder"
                  }
                },
                "image": "https://pixelandprintofficial.com/placeholder.jpg",
                "url": "https://pixelandprintofficial.com/preorder"
              },
              {
                "@type": "WebPage",
                "@id": "https://pixelandprintofficial.com/preorder/#webpage",
                "url": "https://pixelandprintofficial.com/preorder",
                "name": "Preorder Neural AI Course | Early Access to Gamified AI Learning Platform",
                "description": "Get early access to Neural's revolutionary AI course. Preorder now and be among the first to master prompt engineering, AI tools, and techniques.",
                "isPartOf": {
                  "@id": "https://pixelandprintofficial.com/#website"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "Neural",
                  "url": "https://pixelandprintofficial.com"
                },
                "mainEntity": {
                  "@id": "https://pixelandprintofficial.com/preorder/#product"
                }
              }
            ]
          })}
        </script>
      </Helmet>
      <div className="relative min-h-screen bg-black text-white overflow-hidden">
        <EnhancedCursorBackground />
        <Navigation />
      
      <div className="relative z-10 pt-24 px-4">
        <section className="relative min-h-screen flex items-center justify-center px-4">
          <div className="max-w-xl w-full mx-auto text-center">
            <FadeInText>
              <Badge className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20 transition-all duration-300 animate-pulse-glow">
                Preorder Now
              </Badge>
            </FadeInText>
            <FadeInText delay={0.2}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
                <EnhancedAutoTypingHeadline 
                  phrases={["Preorder Neural Today!", ...typingPhrases]}
                  className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent"
                  speed={80}
                  deleteSpeed={40}
                  pauseTime={2500}
                />
              </h1>
            </FadeInText>
            <FadeInText delay={0.4}>
              <StaggeredText 
                text="You’re early — and that’s a win. Snag your spot to try the most fun way to learn AI, prompt engineering, and real-world skills. Beat the crowd, earn early rewards, and level up your AI game.

"
                className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
                delay={0.4}
              />
            </FadeInText>
            <FadeInText delay={0.6}>
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 glass mt-8">
                <CardContent className="p-8 text-center">
                  <GlowText>
                    <h2 className="text-2xl font-bold mb-4 text-orange-400">Reserve Your AI Course Access</h2>
                  </GlowText>
                  <p className="text-gray-300 mb-6">
                    Your preorder helps us build a better, more accessible AI education for all. <br />
                  </p>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    
                    <span className="font-bold text-yellow-300 text-base md:text-lg drop-shadow-md" style={{ textShadow: '0 0 8px #fde047' }}>
                      IMPORTANT: You MUST provide your email address so we can contact you and reserve your spot.
                    </span>
                  </div>
                  <a href="https://buy.stripe.com/14A7sK0sfdWWdLA2vdcV200" target="_blank" rel="noopener noreferrer">
                    <Button className="text-lg px-10 py-5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 btn-shimmer text-white w-full max-w-xs mx-auto">
                      Preorder Neural
                    </Button>
                  </a>
                  <p className="text-xs text-gray-500 mt-4">Secure checkout via Stripe. Limited early access slots available.</p>
                </CardContent>
              </Card>
            </FadeInText>
          </div>
        </section>
      </div>
    </div>
    </>
  );
};

export default Preorder;
