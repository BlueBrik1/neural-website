import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from '../components/ui/card';
import ThreeScene from '../components/ThreeScene';
import Navigation from '../components/Navigation';
import StatsCounter from '../components/StatsCounter';
import { FadeInText, StaggeredText, GlowText, SkewText } from '../components/AnimatedText';
import EnhancedCursorBackground from '../components/EnhancedCursorBackground';
import { Icon } from '@iconify/react';

const Vision = () => {
  // Structured Data for Organization and AboutPage
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
        "mission": "To make AI education and prompt engineering accessible, engaging, and effective for everyone.",
        "sameAs": [
          "https://neuralapp.gumroad.com/l/nblya"
        ]
      },
      {
        "@type": "AboutPage",
        "@id": "https://neuralapp.com/vision#aboutpage",
        "url": "https://neuralapp.com/vision",
        "name": "AI Learning Vision | Neural",
        "description": "Discover our AI learning vision and mission to make prompt engineering education accessible to everyone. Join our beginner AI course designed for students and professionals.",
        "mainEntity": {
          "@type": "Organization",
          "@id": "https://neuralapp.com/#organization"
        },
        "about": {
          "@type": "Organization",
          "@id": "https://neuralapp.com/#organization"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://neuralapp.com/vision#breadcrumb",
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
            "name": "Our Vision",
            "item": "https://neuralapp.com/vision"
          }
        ]
      }
    ]
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <Helmet>
        <title>AI Learning Vision | Prompt Engineering Education | Beginner AI Course | Neural</title>
        <meta name="description" content="Discover our AI learning vision and mission to make prompt engineering education accessible to everyone. Join our beginner AI course designed for students and professionals." />
        <meta name="keywords" content="AI learning vision, prompt engineering education, beginner AI course, AI for students, artificial intelligence learning, AI education platform, machine learning vision" />
        <meta name="author" content="Neural" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Open Graph */}
        <meta property="og:title" content="AI Learning Vision | Prompt Engineering Education | Neural" />
        <meta property="og:description" content="Discover our AI learning vision and mission to make prompt engineering education accessible to everyone. Join our beginner AI course designed for students and professionals." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://neuralapp.com/vision" />
        <meta property="og:site_name" content="Neural" />
        <meta property="og:image" content="https://neuralapp.com/logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Learning Vision | Prompt Engineering Education | Neural" />
        <meta name="twitter:description" content="Discover our AI learning vision and mission to make prompt engineering education accessible to everyone. Join our beginner AI course designed for students and professionals." />
        <meta name="twitter:image" content="https://neuralapp.com/logo.png" />
        <meta name="twitter:site" content="@neuralapp" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://neuralapp.com/vision" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <EnhancedCursorBackground />
      <ThreeScene shapes="spheres" count={8} color="#ff6b35" />
      <Navigation />
      
      <div className="relative z-10 pt-24 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <FadeInText>
              <GlowText>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                  Our AI Learning Vision
                </h1>
              </GlowText>
            </FadeInText>
            <FadeInText delay={0.2}>
              <StaggeredText 
                text="Making AI simple enough for anyone to learn and use, even middle schoolers. We're building the bridge to close the AI skills gap through comprehensive prompt engineering education."
                className="text-xl text-gray-300 max-w-2xl mx-auto"
                delay={0.2}
              />
            </FadeInText>
          </div>

          {/* Mission Statement */}
          <FadeInText delay={0.4}>
            <div className="mb-16">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 glass">
                <CardContent className="p-8 text-center">
                  <GlowText>
                    <h2 className="text-3xl font-bold mb-6 text-orange-400">Our AI Education Mission</h2>
                  </GlowText>
                  <StaggeredText 
                    text="To make AI education and prompt engineering accessible, engaging, and effective for everyone. We believe that understanding AI shouldn't be limited to computer scientists—it should be a fundamental skill for the digital age, available through our beginner AI course."
                    className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto"
                    delay={0.6}
                  />
                </CardContent>
              </Card>
            </div>
          </FadeInText>

          {/* Core Values */}
          <div className="mb-16" aria-labelledby="values-heading">
            <FadeInText delay={0.6}>
              <div className="text-center mb-8">
                <GlowText>
                  <h2 id="values-heading" className="text-3xl font-bold text-white">Core Values for AI Learning</h2>
                </GlowText>
              </div>
            </FadeInText>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: <Icon icon="mdi:star" className="text-2xl" aria-hidden="true" />, title: 'Accessibility', desc: 'AI education and prompt engineering should be available to everyone, regardless of background or technical expertise.' },
                { icon: <Icon icon="mdi:bullseye-arrow" className="text-2xl" aria-hidden="true" />, title: 'Quality', desc: 'We\'re committed to creating the highest quality educational content and experiences for our beginner AI course.' },
                { icon: <Icon icon="mdi:rocket-launch" className="text-2xl" aria-hidden="true" />, title: 'Innovation', desc: 'We continuously push the boundaries of what\'s possible in AI education and prompt engineering techniques.' }
              ].map((value, index) => (
                <FadeInText key={index} delay={0.8 + index * 0.2}>
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 card-hover">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center text-2xl animate-pulse-glow">
                        {value.icon}
                      </div>
                      <GlowText>
                        <h3 className="text-xl font-bold mb-3 text-white">{value.title}</h3>
                      </GlowText>
                      <p className="text-gray-300">{value.desc}</p>
                    </CardContent>
                  </Card>
                </FadeInText>
              ))}
            </div>
          </div>

          {/* The Problem */}
          <div className="mb-16" aria-labelledby="problem-heading">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <FadeInText delay={1.0}>
                <div>
                  <GlowText>
                    <h2 id="problem-heading" className="text-3xl font-bold mb-6 text-orange-400">The AI Education Problem</h2>
                  </GlowText>
                  <div className="space-y-4">
                    <FadeInText delay={1.2}>
                      <p className="text-gray-300">
                        AI is transforming every industry, but traditional education hasn't kept pace. Most people are left behind, struggling to understand how to use AI effectively in their work and daily lives. Our beginner AI course addresses this gap.
                      </p>
                    </FadeInText>
                    <FadeInText delay={1.4}>
                      <p className="text-gray-300">
                        Current AI education is either too technical for beginners or too shallow for practical application. There's a massive gap between AI research and practical skills that our prompt engineering education bridges.
                      </p>
                    </FadeInText>
                    <FadeInText delay={1.6}>
                      <p className="text-gray-300">
                        We're building the bridge to close this gap—making AI education engaging, practical, and accessible to everyone through our comprehensive AI learning platform.
                      </p>
                    </FadeInText>
                  </div>
                </div>
              </FadeInText>
              <FadeInText delay={1.8}>
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 glass">
                  <CardContent className="p-8">
                    <GlowText>
                      <h3 className="text-2xl font-bold mb-6 text-center text-white">The AI Skills Gap</h3>
                    </GlowText>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Jobs requiring AI skills</span>
                        <span className="text-orange-400 font-bold text-hover-glow">+<StatsCounter end={300} />%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Workers with AI training</span>
                        <span className="text-orange-400 font-bold text-hover-glow"><StatsCounter end={15} />%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Companies struggling to hire</span>
                        <span className="text-orange-400 font-bold text-hover-glow"><StatsCounter end={87} />%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeInText>
            </div>
          </div>

          {/* The Solution */}
          <div className="mb-16" aria-labelledby="solution-heading">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <FadeInText delay={2.0}>
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 lg:order-1 glass">
                  <CardContent className="p-8">
                    <GlowText>
                      <h3 className="text-2xl font-bold mb-6 text-center text-white">Our AI Learning Approach</h3>
                    </GlowText>
                    <div className="space-y-4">
                      {[
                        'Gamified prompt engineering learning paths',
                        'Real-world AI tools and techniques',
                        'Instant feedback for AI beginners',
                        'Community support for AI students'
                      ].map((item, index) => (
                        <FadeInText key={index} delay={2.2 + index * 0.1}>
                          <div className="flex items-center gap-4">
                            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-sm font-bold animate-pulse-glow">
                              {index + 1}
                            </div>
                            <SkewText>
                              <span className="text-gray-300">{item}</span>
                            </SkewText>
                          </div>
                        </FadeInText>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </FadeInText>
              <FadeInText delay={2.6}>
                <div className="lg:order-0">
                  <GlowText>
                    <h2 id="solution-heading" className="text-3xl font-bold mb-6 text-orange-400">Our AI Education Solution</h2>
                  </GlowText>
                  <div className="space-y-4">
                    <FadeInText delay={2.8}>
                      <p className="text-gray-300">
                        Neural combines the engagement of gaming with the effectiveness of hands-on learning. We've created a platform that makes AI education and prompt engineering feel like playing a game while teaching real, practical skills for beginners.
                      </p>
                    </FadeInText>
                    <FadeInText delay={3.0}>
                      <p className="text-gray-300">
                        Our bite-sized lessons, immediate feedback, and progressive skill building ensure that learners stay motivated and actually retain what they learn in our AI course.
                      </p>
                    </FadeInText>
                    <FadeInText delay={3.2}>
                      <p className="text-gray-300">
                        By focusing on practical applications rather than theory, we help people start using AI tools effectively from day one through our comprehensive prompt engineering education.
                      </p>
                    </FadeInText>
                  </div>
                </div>
              </FadeInText>
            </div>
          </div>

          {/* Future Vision */}
          <FadeInText delay={3.4}>
            <div className="mb-16" aria-labelledby="future-heading">
              <Card className="bg-gradient-to-r from-orange-500/10 to-red-600/10 backdrop-blur-sm border-orange-500/20 glass-orange">
                <CardContent className="p-8 text-center">
                  <GlowText>
                    <h2 id="future-heading" className="text-3xl font-bold mb-6 text-orange-400">The Future of AI Learning We're Building</h2>
                  </GlowText>
                  <FadeInText delay={3.6}>
                    <StaggeredText 
                      text="We envision a world where AI literacy and prompt engineering skills are as common as computer literacy is today. Where every professional, student, and creator can harness AI to amplify their capabilities and solve complex problems through our beginner AI course."
                      className="text-xl text-gray-300 mb-6 max-w-4xl mx-auto"
                      delay={3.6}
                    />
                  </FadeInText>
                  <FadeInText delay={3.8}>
                    <StaggeredText 
                      text="Neural is just the beginning. We're building the foundation for a future where humans and AI work together seamlessly, where technology serves everyone, not just the few, through accessible AI education and prompt engineering training."
                      className="text-lg text-gray-300 max-w-3xl mx-auto"
                      delay={3.8}
                    />
                  </FadeInText>
                </CardContent>
              </Card>
            </div>
          </FadeInText>

          {/* Call to Action */}
          <FadeInText delay={4.0}>
            <div className="text-center" aria-labelledby="cta-heading">
              <GlowText>
                <h2 id="cta-heading" className="text-3xl font-bold mb-6 text-white">Join Us in Shaping the Future of AI Learning</h2>
              </GlowText>
              <FadeInText delay={4.2}>
                <StaggeredText 
                  text="Whether you're a learner seeking AI education, an educator interested in prompt engineering, or a potential team member, we invite you to be part of this transformation."
                  className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
                  delay={4.2}
                />
              </FadeInText>
              <FadeInText delay={4.4}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <SkewText>
                    <a href="/hiring" className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 btn-hover-lift inline-block focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black" aria-label="Join our AI education team">
                      Join Our AI Education Team
                    </a>
                  </SkewText>
                  <SkewText>
                    <a href="/preorder" className="border border-white/20 text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg backdrop-blur-sm transition-all duration-300 btn-hover-lift inline-block focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black" aria-label="Pre-order AI course access">
                      Pre-Order AI Course Access
                    </a>
                  </SkewText>
                  <SkewText>
                    <a 
                      href="https://neuralapp.gumroad.com/l/nblya" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="border border-white/20 text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg backdrop-blur-sm transition-all duration-300 btn-hover-lift inline-block focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black"
                      aria-label="Get free AI learning guide on Gumroad"
                    >
                      Get Free AI Learning Guide
                    </a>
                  </SkewText>
                </div>
              </FadeInText>
            </div>
          </FadeInText>
        </div>
      </div>
    </div>
  );
};

export default Vision;