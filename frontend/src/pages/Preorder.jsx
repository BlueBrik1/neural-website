import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from '../components/ui/card';
import ThreeScene from '../components/ThreeScene';
import Navigation from '../components/Navigation';
import { FadeInText, StaggeredText, GlowText, PulseButton } from '../components/AnimatedText';
import EnhancedAutoTypingHeadline from '../components/EnhancedAutoTypingHeadline';
import { Badge } from '../components/ui/badge';
import { typingPhrases } from '../data/mockData';

const Preorder = () => {
  // Structured Data for Product and Offer
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://neuralapp.com/#organization",
        "name": "Neural",
        "url": "https://neuralapp.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://neuralapp.com/logo.png",
          "width": 512,
          "height": 512
        },
        "description": "Neural is the world's first gamified platform for learning AI skills and prompt engineering techniques.",
        "foundingDate": "2024",
        "sameAs": [
          "https://neuralapp.gumroad.com/l/nblya"
        ]
      },
      {
        "@type": "Product",
        "@id": "https://neuralapp.com/preorder#product",
        "name": "Neural AI Course - Prompt Engineering Training",
        "description": "Comprehensive AI course for beginners focusing on prompt engineering techniques. Interactive, gamified learning platform.",
        "brand": {
          "@type": "Brand",
          "name": "Neural"
        },
        "category": "Educational Course",
        "offers": {
          "@type": "Offer",
          "price": "29.99",
          "priceCurrency": "USD",
          "availability": "https://schema.org/PreOrder",
          "url": "https://buy.stripe.com/14A7sK0sfdWWdLA2vdcV200",
          "seller": {
            "@type": "Organization",
            "@id": "https://neuralapp.com/#organization"
          }
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "150"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://neuralapp.com/preorder#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://neuralapp.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Preorder",
            "item": "https://neuralapp.com/preorder"
          }
        ]
      }
    ]
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <Helmet>
        <title>Preorder AI Course | Prompt Engineering Pricing | Buy AI Course Early Access | Neural</title>
        <meta name="description" content="Preorder our comprehensive AI course and get early access to prompt engineering training. Secure your spot in our AI learning platform with competitive pricing." />
        <meta name="keywords" content="preorder AI course, prompt engineering pricing, buy AI course early access, AI learning platform, artificial intelligence training, AI course preorder, early access AI learning" />
        <meta name="author" content="Neural" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Preorder AI Course | Prompt Engineering Pricing | Neural" />
        <meta property="og:description" content="Preorder our comprehensive AI course and get early access to prompt engineering training. Secure your spot in our AI learning platform with competitive pricing." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://neuralapp.com/preorder" />
        <meta property="og:site_name" content="Neural" />
        <meta property="og:image" content="https://neuralapp.com/logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Preorder AI Course | Prompt Engineering Pricing | Neural" />
        <meta name="twitter:description" content="Preorder our comprehensive AI course and get early access to prompt engineering training. Secure your spot in our AI learning platform with competitive pricing." />
        <meta name="twitter:image" content="https://neuralapp.com/logo.png" />
        <meta name="twitter:site" content="@neuralapp" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://neuralapp.com/preorder" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <ThreeScene shapes="spheres" count={8} color="#ff6b35" />
      <Navigation />
      <div className="relative z-10">
        <section className="relative min-h-screen flex items-center justify-center px-4" aria-labelledby="preorder-heading">
          <div className="max-w-xl w-full mx-auto text-center">
            <FadeInText>
              <Badge className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20 transition-all duration-300 animate-pulse-glow">
                Preorder AI Course Access
              </Badge>
            </FadeInText>
            <FadeInText delay={0.2}>
              <h1 id="preorder-heading" className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
                <EnhancedAutoTypingHeadline 
                  phrases={["Preorder Neural AI Course Today!", ...typingPhrases]}
                  className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent"
                  speed={80}
                  deleteSpeed={40}
                  pauseTime={2500}
                />
              </h1>
            </FadeInText>
            <FadeInText delay={0.4}>
              <StaggeredText 
                text="You're early — and that's a win. Snag your spot to try the most fun way to learn AI and prompt engineering. Beat the crowd, earn early rewards, and flex that brain with our comprehensive AI course."
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
                    Your preorder helps us build a better, more accessible AI education and prompt engineering training for all. <br />
                  </p>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    
                    <span className="font-bold text-yellow-300 text-base md:text-lg drop-shadow-md" style={{ textShadow: '0 0 8px #fde047' }}>
                      IMPORTANT: You MUST provide your email address so we can contact you and reserve your spot in our AI course.
                    </span>
                  </div>
                  <a 
                    href="https://buy.stripe.com/14A7sK0sfdWWdLA2vdcV200" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Preorder AI course with secure checkout"
                    className="inline-block w-full max-w-xs mx-auto"
                  >
                    <PulseButton className="text-lg px-10 py-5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 btn-shimmer text-white w-full max-w-xs mx-auto focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black">
                      Preorder AI Course Now
                    </PulseButton>
                  </a>
                  <p className="text-xs text-gray-500 mt-4">Secure checkout via Stripe. Limited early access slots available for our prompt engineering course.</p>
                </CardContent>
              </Card>
            </FadeInText>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Preorder;
