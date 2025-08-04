import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import EnhancedAutoTypingHeadline from '../components/EnhancedAutoTypingHeadline';
import StatsCounter from '../components/StatsCounter';
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

  return (
    <>
      <Helmet>
        <title>Neural - Learn AI Online | Prompt Engineering Course for Beginners</title>
        <meta name="description" content="Master AI skills with Neural's gamified online AI course. Learn prompt engineering, AI tools, and techniques from scratch. Perfect for beginners with free AI course options and AI certifications." />
        <meta name="keywords" content="learn AI online, AI course, prompt engineering, AI for beginners, online AI course, AI tools, AI techniques, free AI course, AI jobs, AI skills, AI certifications" />
        <meta property="og:title" content="Neural - Learn AI Online | Prompt Engineering Course for Beginners" />
        <meta property="og:description" content="Master AI skills with Neural's gamified online AI course. Learn prompt engineering, AI tools, and techniques from scratch." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pixelandprintofficial.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Neural - Learn AI Online | Prompt Engineering Course for Beginners" />
        <meta name="twitter:description" content="Master AI skills with Neural's gamified online AI course. Learn prompt engineering, AI tools, and techniques from scratch." />
        
        {/* JSON-LD Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                "@id": "https://pixelandprintofficial.com/#website",
                "url": "https://pixelandprintofficial.com",
                "name": "Neural - AI Learning Platform",
                "description": "Master AI skills with Neural's gamified online AI course. Learn prompt engineering, AI tools, and techniques from scratch.",
                "publisher": {
                  "@id": "https://pixelandprintofficial.com/#organization"
                },
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://pixelandprintofficial.com/search?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@type": "Organization",
                "@id": "https://pixelandprintofficial.com/#organization",
                "name": "Neural",
                "url": "https://pixelandprintofficial.com",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://pixelandprintofficial.com/placeholder.jpg",
                  "width": 512,
                  "height": 512
                },
                "image": "https://pixelandprintofficial.com/placeholder.jpg",
                "description": "Neural is the world's first gamified platform for learning AI skills like prompt engineering, AI tools, and real techniques.",
                "foundingDate": "2024",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Atlanta",
                  "addressRegion": "GA",
                  "addressCountry": "US"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "customer service",
                  "email": "hello@pixelandprintofficial.com"
                },
                "sameAs": [
                  "https://twitter.com/neural_ai",
                  "https://linkedin.com/company/neural-ai"
                ]
              },
              {
                "@type": "Course",
                "@id": "https://pixelandprintofficial.com/#course",
                "name": "Neural AI Learning Course",
                "description": "Comprehensive AI course covering prompt engineering, AI tools, and practical techniques for beginners. Gamified learning experience with hands-on projects.",
                "provider": {
                  "@id": "https://pixelandprintofficial.com/#organization"
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
                "url": "https://pixelandprintofficial.com"
              },
              {
                "@type": "WebPage",
                "@id": "https://pixelandprintofficial.com/#webpage",
                "url": "https://pixelandprintofficial.com",
                "name": "Neural - Learn AI Online | Prompt Engineering Course for Beginners",
                "description": "Master AI skills with Neural's gamified online AI course. Learn prompt engineering, AI tools, and techniques from scratch.",
                "isPartOf": {
                  "@id": "https://pixelandprintofficial.com/#website"
                },
                "about": {
                  "@id": "https://pixelandprintofficial.com/#course"
                },
                "publisher": {
                  "@id": "https://pixelandprintofficial.com/#organization"
                },
                "mainEntity": {
                  "@id": "https://pixelandprintofficial.com/#course"
                }
              }
            ]
          })}
        </script>
      </Helmet>
      <div className="relative min-h-screen bg-black text-white overflow-hidden">
        <EnhancedCursorBackground />
        <Navigation />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInText>
              <Badge className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20 transition-all duration-300 animate-pulse-glow">
                <RotatingTaglines taglines={taglines} />
              </Badge>
            </FadeInText>
            
            <FadeInText delay={0.3}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
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
                text="Neural is an online AI course that teaches prompt engineering and real-world techniques through short, game-like lessons. No CS degree needed. Learn AI from scratch — whether you're in high school, a beginner, or looking for free tools and certifications."
                className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
                delay={0.6}
              />
            </FadeInText>
            
            <FadeInText delay={0.9}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/preorder" className="w-full sm:w-auto">
                  <PulseButton 
                    className="text-lg px-8 h-20 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 btn-shimmer text-white w-full flex items-center justify-center"
                  >
                    Preorder Now
                  </PulseButton>
                </Link>
                <Link to="/vision" className="w-full sm:w-auto">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white/20 text-white hover:bg-white/10 text-lg px-8 h-20 rounded-lg backdrop-blur-sm transition-all duration-300 btn-hover-lift w-full flex items-center justify-center"
                  >
                    What is Neural?
                  </Button>
                </Link>
              </div>
            </FadeInText>
          </div>
        </section>

        {/* Live Stats */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <FadeInText delay={0.1}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2 text-hover-glow">
                    <StatsCounter end={statsData.promptsCompleted} suffix="+" />
                  </div>
                  <p className="text-gray-400">Jobs Seeking AI</p>
                </div>
              </FadeInText>
              <FadeInText delay={0.2}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2 text-hover-glow">
                    <StatsCounter end={statsData.activeUsers} suffix="+" />
                  </div>
                  <p className="text-gray-400">Eager to Learn AI</p>
                </div>
              </FadeInText>
              <FadeInText delay={0.3}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2 text-hover-glow">
                    <StatsCounter end={statsData.completionRate} suffix="%" />
                  </div>
                  <p className="text-gray-400">2025 AI Growth</p>
                </div>
              </FadeInText>
              <FadeInText delay={0.4}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2 text-hover-glow">
                    <StatsCounter end={statsData.avgProgress} suffix="%" />
                  </div>
                  <p className="text-gray-400">Companies Using AI</p>
                </div>
              </FadeInText>
            </div>
          </div>
        </section>

        {/* What is Neural */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <FadeInText>
                <GlowText>
                                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  What is Neural? An AI Learning Platform for Beginners
                </h2>
                </GlowText>
              </FadeInText>
              <FadeInText delay={0.2}>
                <StaggeredText 
                  text="Neural is the world’s first gamified platform for learning AI skills like prompt engineering, AI tools, and real techniques. Think Duolingo x Codecademy — but instead of Spanish or Python, you’re learning AI concepts from scratch, online, and built for beginners."
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
                    icon = <Icon icon="mdi:target" className="text-2xl mb-2" />;
                    break;
                  case '🤖':
                    icon = <Icon icon="mdi:robot" className="text-2xl mb-2" />;
                    break;
                  case '📈':
                    icon = <Icon icon="mdi:chart-line" className="text-2xl mb-2" />;
                    break;
                  case '👥':
                    icon = <Icon icon="mdi:account-group" className="text-2xl mb-2" />;
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
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <FadeInText>
                <GlowText>
                                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  We're Funding AI Education
                </h2>
                </GlowText>
              </FadeInText>
            </div>
            
            {/* Recent Funding Success */}
            <FadeInText delay={0.2}>
              <div className="mb-12">
                <Card className="bg-white/5 backdrop-blur-sm border border-orange-400/30 overflow-hidden shadow-xl">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-orange-600 to-red-700 rounded-full flex items-center justify-center text-3xl mx-auto mb-6 animate-pulse-glow shadow-lg">
                        <Icon icon="mdi:trophy" className="text-3xl text-white" />
                      </div>
                      <GlowText>
                                        <h3 className="text-2xl md:text-3xl font-bold text-orange-400 mb-6">
                  Recent Funding Success for Neural
                </h3>
                      </GlowText>
                      <div className="max-w-3xl mx-auto">
                        <p className="text-lg md:text-xl text-gray-300 mb-4 leading-relaxed">
                          <span className="font-bold text-orange-400">Neural recently secured a $10,000 grant</span> from <span className="font-semibold text-orange-300">Emergent Ventures</span>, a fund backed by Tyler Cowen for ambitious young founders building AI education platforms.
                        </p>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                          It's also advancing in the <span className="font-bold text-orange-400">second round of the Thiel Fellowship</span>, competing for a <span className="font-bold text-orange-400">$200,000 equity-free award</span> given to top under-20 entrepreneurs building bold AI learning solutions.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </FadeInText>
            
            <FadeInText delay={0.3}>
              <div className="relative">
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden glass">
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-6 animate-pulse-glow">
                        <Icon icon="mdi:cash-multiple" className="text-3xl text-orange-400" />
                      </div>
                      <GlowText>
                                        <h3 className="text-2xl font-bold text-white mb-4">
                  Support Our AI Education Mission
                </h3>
                      </GlowText>
                      <p className="text-lg text-gray-300 mb-6">
                      Help us shape the future of AI learning. 
                      Support Neural by preordering the first gamified AI course for beginners, with hands-on prompt engineering and real-world AI skills. Or grab our free, pay-what-you-want AI guide on Gumroad — starting at $0.


                      </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a 
                        href="https://neuralapp.gumroad.com/l/nblya" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto"
                      >
                        <PulseButton 
                          className="text-lg px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 btn-shimmer text-white w-full flex items-center justify-center h-14"
                        >
                          Get AI Guide (Pay What You Want)
                        </PulseButton>
                      </a>
                      <Link to="/preorder" className="w-full sm:w-auto">
                        <Button 
                          size="lg" 
                          variant="outline" 
                          className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-4 rounded-lg backdrop-blur-sm transition-all duration-300 btn-hover-lift w-full flex items-center justify-center h-14"
                        >
                          Preorder Neural
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
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInText>
              <GlowText>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Still Unsure About AI Learning?
                </h2>
              </GlowText>
            </FadeInText>
            <FadeInText delay={0.3}>
              <StaggeredText 
                text="Read more about the AI learning challenges we solve, how Neural teaches prompt engineering and AI skills, and how you can benefit from this beginner-friendly online AI course with certification options.

"
                className="text-xl text-gray-300 mb-8"
                delay={0.3}
              />
            </FadeInText>
            
            <FadeInText delay={0.6}>
              <Link to="/vision">
                <PulseButton 
                  className="text-lg px-12 py-6 rounded-lg font-semibold transform hover:scale-105 btn-shimmer text-white"
                >
                  Read More
                </PulseButton>
              </Link>
            </FadeInText>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <FadeInText>
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <img src="/logo.png" alt="Neural Logo" className="w-8 h-8 rounded-lg object-contain animate-pulse-glow" />
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
                    <li><SkewText><a href="/vision" className="hover:text-white transition-colors">Our Vision</a></SkewText></li>
                    <li><SkewText><a href="/hiring" className="hover:text-white transition-colors">We're Hiring</a></SkewText></li>
                    <li><SkewText><a href="/contact" className="hover:text-white transition-colors">Contact</a></SkewText></li>
                  </ul>
                </div>
              </FadeInText>
              
              <FadeInText delay={0.2}>
                <div>
                  <h4 className="font-bold mb-4 text-white">Resources</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li><SkewText><a href="/features" className="hover:text-white transition-colors">Features</a></SkewText></li>
                    <li><SkewText><a href="/blog" className="hover:text-white transition-colors">Blog</a></SkewText></li>
                    <li><SkewText><a href="/faq" className="hover:text-white transition-colors">FAQ</a></SkewText></li>
                  </ul>
                </div>
              </FadeInText>
              
              <FadeInText delay={0.3}>
                <div>
                  <h4 className="font-bold mb-4 text-white">Coming Soon</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li><SkewText><a href="#" className="hover:text-white transition-colors">Help Center</a></SkewText></li>
                    <li><SkewText><a href="#" className="hover:text-white transition-colors">Documentation</a></SkewText></li>
                    <li><SkewText><a href="#" className="hover:text-white transition-colors">Community</a></SkewText></li>
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
    </>
  );
};

export default Homepage;