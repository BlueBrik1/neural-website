import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import EnhancedAutoTypingHeadline from '../components/EnhancedAutoTypingHeadline';
import StatsCounter from '../components/StatsCounter';
import ThreeScene from '../components/ThreeScene';
import Navigation from '../components/Navigation';
import { FadeInText, StaggeredText, GlowText, SkewText, RotatingTaglines, PulseButton } from '../components/AnimatedText';
import { statsData, testimonialsData, featuresData, typingPhrases } from '../data/mockData';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import EnhancedCursorBackground from '../components/EnhancedCursorBackground';

const Homepage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const taglines = [
    "Learn AI like a language. Built for the next-gen minds.",
    "Master AI tools through gamified learning paths.",
    "Transform your skills with interactive AI education.",
    "Join the AI revolution with hands-on learning."
  ];

  // Structured Data for Organization and Course
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
        "@type": "Course",
        "@id": "https://neuralapp.com/#course",
        "name": "Prompt Engineering Course Online",
        "description": "Master prompt engineering techniques with our comprehensive AI course for beginners. Learn AI fundamentals through interactive, gamified lessons.",
        "provider": {
          "@type": "Organization",
          "name": "Neural",
          "sameAs": "https://neuralapp.com"
        },
        "courseMode": "online",
        "educationalLevel": "beginner",
        "inLanguage": "en",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        "teaches": [
          "Prompt Engineering",
          "Artificial Intelligence",
          "AI Tools",
          "Machine Learning Basics"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://neuralapp.com/#website",
        "url": "https://neuralapp.com",
        "name": "Neural - AI Learning Platform",
        "description": "Learn AI like a language. Built for the next-gen minds.",
        "publisher": {
          "@id": "https://neuralapp.com/#organization"
        }
      }
    ]
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <Helmet>
        <title>Prompt Engineering Course Online | Learn AI for Beginners | Neural</title>
        <meta name="description" content="Master prompt engineering techniques with our free AI course for beginners. Learn AI fundamentals through interactive, gamified lessons designed for students and professionals." />
        <meta name="keywords" content="prompt engineering course online, learn AI for beginners, AI course free, prompt techniques, AI education, artificial intelligence learning, machine learning course, AI training" />
        <meta name="author" content="Neural" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Prompt Engineering Course Online | Learn AI for Beginners" />
        <meta property="og:description" content="Master prompt engineering techniques with our free AI course for beginners. Learn AI fundamentals through interactive, gamified lessons." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://neuralapp.com" />
        <meta property="og:site_name" content="Neural" />
        <meta property="og:image" content="https://neuralapp.com/logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Prompt Engineering Course Online | Learn AI for Beginners" />
        <meta name="twitter:description" content="Master prompt engineering techniques with our free AI course for beginners. Learn AI fundamentals through interactive, gamified lessons." />
        <meta name="twitter:image" content="https://neuralapp.com/logo.png" />
        <meta name="twitter:site" content="@neuralapp" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://neuralapp.com" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <EnhancedCursorBackground />
      <ThreeScene shapes="spheres" count={8} color="#ff6b35" />
      <Navigation />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4" aria-labelledby="hero-heading">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInText>
              <Badge className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20 transition-all duration-300 animate-pulse-glow">
                <RotatingTaglines taglines={taglines} />
              </Badge>
            </FadeInText>
            
            <FadeInText delay={0.3}>
              <h1 id="hero-heading" className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
                <EnhancedAutoTypingHeadline 
                  phrases={typingPhrases}
                  className="text-white"
                  speed={80}
                  deleteSpeed={40}
                  pauseTime={2500}
                />
              </h1>
            </FadeInText>
            
            <FadeInText delay={0.6}>
              <StaggeredText 
                text="Learn AI hands-on with our comprehensive prompt engineering course online. Perfect for beginners seeking to master AI techniques through free, interactive lessons that feel more like a game than a class."
                className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
                delay={0.6}
              />
            </FadeInText>
            
            <FadeInText delay={0.9}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/preorder" className="w-full sm:w-auto" aria-label="Start your AI course journey with Neural">
                  <PulseButton 
                    className="text-lg px-8 h-20 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 btn-shimmer text-white w-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black"
                  >
                    Start Your AI Course Journey
                  </PulseButton>
                </Link>
                <Link to="/vision" className="w-full sm:w-auto" aria-label="Discover our AI learning vision and mission">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white/20 text-white hover:bg-white/10 text-lg px-8 h-20 rounded-lg backdrop-blur-sm transition-all duration-300 btn-hover-lift w-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black"
                  >
                    Discover Our AI Learning Vision
                  </Button>
                </Link>
              </div>
            </FadeInText>
          </div>
        </section>

        {/* Live Stats */}
        <section className="py-20 px-4" aria-labelledby="stats-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="stats-heading" className="sr-only">AI Learning Statistics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <FadeInText delay={0.1}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2 text-hover-glow">
                    <StatsCounter end={statsData.promptsCompleted} suffix="+" />
                  </div>
                  <p className="text-gray-400">AI Jobs Seeking Prompt Engineers</p>
                </div>
              </FadeInText>
              <FadeInText delay={0.2}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2 text-hover-glow">
                    <StatsCounter end={statsData.activeUsers} suffix="+" />
                  </div>
                  <p className="text-gray-400">Students Learning AI Techniques</p>
                </div>
              </FadeInText>
              <FadeInText delay={0.3}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2 text-hover-glow">
                    <StatsCounter end={statsData.completionRate} suffix="%" />
                  </div>
                  <p className="text-gray-400">AI Course Completion Rate</p>
                </div>
              </FadeInText>
              <FadeInText delay={0.4}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2 text-hover-glow">
                    <StatsCounter end={statsData.avgProgress} suffix="%" />
                  </div>
                  <p className="text-gray-400">Companies Using AI Tools</p>
                </div>
              </FadeInText>
            </div>
          </div>
        </section>

        {/* What is Neural */}
        <section className="py-20 px-4" aria-labelledby="neural-heading">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <FadeInText>
                <GlowText>
                  <h2 id="neural-heading" className="text-4xl md:text-5xl font-bold mb-6 text-white">
                    Master Prompt Engineering with Neural
                  </h2>
                </GlowText>
              </FadeInText>
              <FadeInText delay={0.2}>
                <StaggeredText 
                  text="Neural is the world's first gamified platform for learning AI skills and prompt engineering techniques. Think Duolingo x Codecademy, but instead of Spanish or Python, you're mastering AI concepts for beginners."
                  className="text-xl text-gray-300 max-w-3xl mx-auto"
                  delay={0.2}
                />
              </FadeInText>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuresData.map((feature, index) => {
                // Map emoji to icon
                let icon;
                switch (feature.icon) {
                  case '🎯':
                    icon = <Icon icon="mdi:target" className="text-2xl mb-2" aria-hidden="true" />;
                    break;
                  case '🤖':
                    icon = <Icon icon="mdi:robot" className="text-2xl mb-2" aria-hidden="true" />;
                    break;
                  case '📈':
                    icon = <Icon icon="mdi:chart-line" className="text-2xl mb-2" aria-hidden="true" />;
                    break;
                  case '👥':
                    icon = <Icon icon="mdi:account-group" className="text-2xl mb-2" aria-hidden="true" />;
                    break;
                  default:
                    icon = null;
                }
                return (
                  <FadeInText key={feature.id} delay={0.4 + index * 0.1}>
                    <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-xl card-hover">
                      <CardContent className="p-6 text-center">
                        <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${feature.color} flex flex-col items-center justify-center text-2xl shadow-lg animate-float`}>
                          {icon}
                        </div>
                        <GlowText>
                          <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                        </GlowText>
                        <p className="text-gray-300">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </FadeInText>
                );
              })}
            </div>
          </div>
        </section>

        {/* We're Funding */}
        <section className="py-20 px-4" aria-labelledby="funding-heading">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <FadeInText>
                <GlowText>
                  <h2 id="funding-heading" className="text-4xl md:text-5xl font-bold mb-6 text-white">
                    We're Funding AI Education
                  </h2>
                </GlowText>
              </FadeInText>
            </div>
            
            <FadeInText delay={0.2}>
              <div className="relative mb-12">
                <div className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 rounded-xl p-[2px] animate-pulse-glow">
                  <div className="bg-black/80 backdrop-blur-sm rounded-xl p-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-6 animate-float">
                        <Icon icon="mdi:trophy" className="text-2xl text-orange-400" aria-hidden="true" />
                      </div>
                      <GlowText>
                        <h3 className="text-3xl font-bold text-white mb-4">
                          Recent Funding Success for AI Learning
                        </h3>
                      </GlowText>
                      <p className="text-xl text-gray-300 mb-4 leading-relaxed">
                        Neural recently secured a <span className="text-orange-400 font-bold">$10,000 grant</span> from <span className="text-orange-400 font-semibold">Emergent Ventures</span>, a fund backed by Tyler Cowen for ambitious young founders building AI education platforms. It's also advancing in the second round of the <span className="text-orange-400 font-semibold">Thiel Fellowship</span>, competing for a <span className="text-orange-400 font-bold">$200,000</span> equity-free award given to top under-20 entrepreneurs building bold AI learning solutions.
                      </p>
                      <div className="flex justify-center items-center gap-4 mt-6">
                        <a 
                          href="https://www.mercatus.org/emergent-ventures" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black"
                          aria-label="Learn more about Emergent Ventures grant"
                        >
                          <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 px-4 py-2 text-sm font-semibold cursor-pointer hover:bg-orange-500/30 transition-colors">
                            Emergent Ventures Grant
                          </Badge>
                        </a>
                        <a 
                          href="https://thielfellowship.org/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black"
                          aria-label="Learn more about Thiel Fellowship"
                        >
                          <Badge className="bg-red-500/20 text-red-400 border-red-500/30 px-4 py-2 text-sm font-semibold cursor-pointer hover:bg-red-500/30 transition-colors">
                            Thiel Fellowship
                          </Badge>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInText>
            
            <FadeInText delay={0.3}>
              <div className="relative">
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden glass">
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-6 animate-pulse-glow">
                        <Icon icon="mdi:cash-multiple" className="text-3xl text-orange-400" aria-hidden="true" />
                      </div>
                      <GlowText>
                        <h3 className="text-2xl font-bold text-white mb-4">
                          Support Our AI Learning Mission
                        </h3>
                      </GlowText>
                      <p className="text-lg text-gray-300 mb-6">
                      Help us shape the future of AI education and prompt engineering courses.
                      Support the project by preordering Neural, or grab our pay-what-you-want AI guide on Gumroad — starting at $0 for beginners.
                      </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a 
                        href="https://neuralapp.gumroad.com/l/nblya" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto"
                        aria-label="Get free AI guide on Gumroad"
                      >
                        <PulseButton 
                          className="text-lg px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 btn-shimmer text-white w-full flex items-center justify-center h-14 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black"
                        >
                          Get Free AI Guide (Pay What You Want)
                        </PulseButton>
                      </a>
                      <Link to="/preorder" className="w-full sm:w-auto" aria-label="Preorder AI course access">
                        <Button 
                          size="lg" 
                          variant="outline" 
                          className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-4 rounded-lg backdrop-blur-sm transition-all duration-300 btn-hover-lift w-full flex items-center justify-center h-14 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black"
                        >
                          Preorder AI Course Access
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </FadeInText>
          </div>
        </section>

        

        {/* CTA Section */}
        <section className="py-20 px-4" aria-labelledby="cta-heading">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInText>
              <GlowText>
                <h2 id="cta-heading" className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Ready to Learn AI Techniques?
                </h2>
              </GlowText>
            </FadeInText>
            <FadeInText delay={0.3}>
              <StaggeredText 
                text="Read more about our AI learning vision, how we solve the prompt engineering education gap, and how you can benefit from our comprehensive AI course for beginners."
                className="text-xl text-gray-300 mb-8"
                delay={0.3}
              />
            </FadeInText>
            
            <FadeInText delay={0.6}>
              <Link to="/vision" aria-label="Explore our AI learning vision">
                <PulseButton 
                  className="text-lg px-12 py-6 rounded-lg font-semibold transform hover:scale-105 btn-shimmer text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black"
                >
                  Explore Our AI Learning Vision
                </PulseButton>
              </Link>
            </FadeInText>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 border-t border-white/10" role="contentinfo">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <FadeInText>
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <img src="/logo.png" alt="Neural Logo - AI Learning Platform" className="w-8 h-8 rounded-lg object-contain animate-pulse-glow" />
                    <span className="text-xl font-bold text-white">Neural</span>
                  </div>
                  <p className="text-gray-400">
                    Learn AI like a language. Built for the next-gen minds.
                  </p>
                </div>
              </FadeInText>
              
              <FadeInText delay={0.1}>
                <div>
                  <h4 className="font-bold mb-4 text-white">Company</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li><SkewText><a href="/vision" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black">Our AI Learning Vision</a></SkewText></li>
                    <li><SkewText><a href="/hiring" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black">We're Hiring</a></SkewText></li>
                    <li><SkewText><a href="/contact" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black">Contact</a></SkewText></li>
                  </ul>
                </div>
              </FadeInText>
              
              <FadeInText delay={0.2}>
                <div>
                  <h4 className="font-bold mb-4 text-white">AI Learning</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li><SkewText><a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black">Prompt Engineering Course</a></SkewText></li>
                    <li><SkewText><a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black">AI for Beginners</a></SkewText></li>
                    <li><SkewText><a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black">Free AI Course</a></SkewText></li>
                  </ul>
                </div>
              </FadeInText>
              
              <FadeInText delay={0.3}>
                <div>
                  <h4 className="font-bold mb-4 text-white">Resources</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li><SkewText><a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black">AI Learning Guide</a></SkewText></li>
                    <li><SkewText><a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black">Prompt Techniques</a></SkewText></li>
                    <li><SkewText><a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black">AI Community</a></SkewText></li>
                  </ul>
                </div>
              </FadeInText>
            </div>
            
            <FadeInText delay={0.4}>
              <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
                <p>&copy; 2025 Neural. All rights reserved.</p>
              </div>
            </FadeInText>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Homepage;