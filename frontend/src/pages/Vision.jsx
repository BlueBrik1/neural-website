import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from '../components/ui/card';
import Navigation from '../components/Navigation';
import StatsCounter from '../components/StatsCounter';
import { FadeInText, StaggeredText, GlowText, SkewText } from '../components/AnimatedText';
import EnhancedCursorBackground from '../components/EnhancedCursorBackground';
import { Icon } from '@iconify/react';

const Vision = () => {
  return (
    <>
      <Helmet>
        <title>Our Vision - Neural AI Education Platform | Making AI Accessible for Everyone</title>
        <meta name="description" content="Discover Neural's vision for democratizing AI education. We're making AI skills, prompt engineering, and AI tools accessible to everyone - from beginners to professionals. Learn how we're closing the AI skills gap." />
        <meta name="keywords" content="AI education vision, AI skills gap, prompt engineering education, AI for everyone, AI learning platform, AI tools training, AI techniques for beginners" />
        <meta property="og:title" content="Our Vision - Neural AI Education Platform | Making AI Accessible for Everyone" />
        <meta property="og:description" content="Discover Neural's vision for democratizing AI education. We're making AI skills, prompt engineering, and AI tools accessible to everyone." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pixelandprintofficial.com/vision" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Vision - Neural AI Education Platform | Making AI Accessible for Everyone" />
        <meta name="twitter:description" content="Discover Neural's vision for democratizing AI education. We're making AI skills, prompt engineering, and AI tools accessible to everyone." />
        
        {/* JSON-LD Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://pixelandprintofficial.com/vision/#webpage",
                "url": "https://pixelandprintofficial.com/vision",
                "name": "Our Vision - Neural AI Education Platform | Making AI Accessible for Everyone",
                "description": "Discover Neural's vision for democratizing AI education. We're making AI skills, prompt engineering, and AI tools accessible to everyone.",
                "isPartOf": {
                  "@id": "https://pixelandprintofficial.com/#website"
                },
                "publisher": {
                  "@id": "https://pixelandprintofficial.com/#organization"
                },
                "mainEntity": {
                  "@id": "https://pixelandprintofficial.com/vision/#article"
                }
              },
              {
                "@type": "Article",
                "@id": "https://pixelandprintofficial.com/vision/#article",
                "headline": "Our Vision for AI Education",
                "description": "Making AI simple enough for anyone to learn and use, even middle schoolers. We're closing the AI skills gap by teaching prompt engineering, AI tools, and real techniques in a way beginners can master online.",
                "author": {
                  "@type": "Organization",
                  "name": "Neural",
                  "url": "https://pixelandprintofficial.com"
                },
                "publisher": {
                  "@id": "https://pixelandprintofficial.com/#organization"
                },
                "datePublished": "2024-01-01",
                "dateModified": "2024-12-01",
                "image": "https://pixelandprintofficial.com/placeholder.jpg",
                "url": "https://pixelandprintofficial.com/vision",
                "mainEntityOfPage": {
                  "@id": "https://pixelandprintofficial.com/vision/#webpage"
                },
                "articleSection": "Company Vision",
                "keywords": "AI education vision, AI skills gap, prompt engineering education, AI for everyone, AI learning platform"
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
                "description": "Neural is the world's first gamified platform for learning AI skills like prompt engineering, AI tools, and real techniques.",
                "foundingDate": "2024",
                "mission": "To make AI education accessible, engaging, and effective for everyone. We believe understanding AI, prompt engineering, and AI tools shouldn't be limited to computer scientists — it should be a basic skill for today's digital world.",
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
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <FadeInText>
              <GlowText>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                  Our Vision for AI Education
                </h1>
              </GlowText>
            </FadeInText>
            <FadeInText delay={0.2}>
              <StaggeredText 
                text="Making AI simple enough for anyone to learn and use, even middle schoolers. We’re closing the AI skills gap by teaching prompt engineering, AI tools, and real techniques in a way beginners can master online."
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
                    <h2 className="text-3xl font-bold mb-6 text-orange-400">Our AI Learning Mission</h2>
                  </GlowText>
                  <StaggeredText 
                    text="To make AI education accessible, engaging, and effective for everyone. We believe understanding AI, prompt engineering, and AI tools shouldn’t be limited to computer scientists — it should be a basic skill for today’s digital world."
                    className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto"
                    delay={0.6}
                  />
                </CardContent>
              </Card>
            </div>
          </FadeInText>

          {/* Core Values */}
          <div className="mb-16">
            <FadeInText delay={0.6}>
              <div className="text-center mb-8">
                <GlowText>
                  <h2 className="text-3xl font-bold text-white">Neural AI Education Core Values</h2>
                </GlowText>
              </div>
            </FadeInText>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: <Icon icon="mdi:star" className="text-2xl" />, title: 'Accessibility', desc: 'AI education should be available to everyone, regardless of background or technical expertise.' },
                { icon: <Icon icon="mdi:bullseye-arrow" className="text-2xl" />, title: 'Quality', desc: 'We\'re committed to creating the highest quality educational content and experiences.' },
                { icon: <Icon icon="mdi:rocket-launch" className="text-2xl" />, title: 'Innovation', desc: 'We continuously push the boundaries of what\'s possible in AI education.' }
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
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <FadeInText delay={1.0}>
                <div>
                  <GlowText>
                    <h2 className="text-3xl font-bold mb-6 text-orange-400">The AI Skills Gap</h2>
                  </GlowText>
                  <div className="space-y-4">
  <FadeInText delay={1.2}>
    <p className="text-gray-300">
      AI is transforming every industry, but traditional education hasn't kept pace. Most people are left behind, struggling to learn AI, prompt engineering, and how to use AI tools effectively in their work and daily lives.
    </p>
  </FadeInText>
  <FadeInText delay={1.4}>
    <p className="text-gray-300">
      Current AI education is either too technical for beginners or too shallow for practical application. There's a massive gap between AI research and real-world AI skills like prompt engineering and machine learning.
    </p>
  </FadeInText>
  <FadeInText delay={1.6}>
    <p className="text-gray-300">
      We're building the bridge to close this gap—making AI education engaging, practical, and accessible to everyone who wants to learn AI from scratch and master key techniques.
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
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <FadeInText delay={2.0}>
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 lg:order-1 glass">
                  <CardContent className="p-8">
                    <GlowText>
                      <h3 className="text-2xl font-bold mb-6 text-center text-white">Our Approach</h3>
                    </GlowText>
                    <div className="space-y-4">
                      {[
                        'Gamified learning paths',
                        'Real-world AI tools',
                        'Instant feedback',
                        'Community support'
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
                    <h2 className="text-3xl font-bold mb-6 text-orange-400">Our AI Learning Solution</h2>
                  </GlowText>
                  <div className="space-y-4">
  <FadeInText delay={2.8}>
    <p className="text-gray-300">
      Neural combines the engagement of gaming with the effectiveness of hands-on learning. We've created a platform that makes AI education and prompt engineering feel like playing a game while teaching real, practical AI skills.
    </p>
  </FadeInText>
  <FadeInText delay={3.0}>
    <p className="text-gray-300">
      Our bite-sized lessons, immediate AI feedback, and progressive skill building ensure that learners stay motivated and actually retain what they learn.
    </p>
  </FadeInText>
  <FadeInText delay={3.2}>
    <p className="text-gray-300">
      By focusing on practical applications rather than theory, we help people start using AI tools effectively from day one.
    </p>
  </FadeInText>
</div>

                </div>
              </FadeInText>
            </div>
          </div>

          {/* Future Vision */}
          <FadeInText delay={3.4}>
            <div className="mb-16">
              <Card className="bg-gradient-to-r from-orange-500/10 to-red-600/10 backdrop-blur-sm border-orange-500/20 glass-orange">
                <CardContent className="p-8 text-center">
                  <GlowText>
                    <h2 className="text-3xl font-bold mb-6 text-orange-400">The Future of AI Education</h2>
                  </GlowText>
                  <FadeInText delay={3.6}>
                    <StaggeredText 
                      text="We envision a world where AI literacy is as common as computer literacy today. Where every student, professional, and creator can learn prompt engineering, master AI tools, and use AI techniques to boost their skills and solve real problems."
                      className="text-xl text-gray-300 mb-6 max-w-4xl mx-auto"
                      delay={3.6}
                    />
                  </FadeInText>
                  <FadeInText delay={3.8}>
                    <StaggeredText 
                      text="Neural is just the beginning. We're building the foundation for a future where AI skills like prompt engineering and practical AI tools help everyone work better with technology—not just the few."
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
            <div className="text-center">
              <GlowText>
                <h2 className="text-3xl font-bold mb-6 text-white">Join Us in Shaping AI Education</h2>
              </GlowText>
              <FadeInText delay={4.2}>
                <StaggeredText 
                  text="Whether you’re a learner, educator, or potential team member, we invite you to join us in shaping the future of AI education, mastering prompt engineering, and making AI skills accessible to all."
                  className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
                  delay={4.2}
                />
              </FadeInText>
              <FadeInText delay={4.4}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <SkewText>
                    <a href="/hiring" className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 btn-hover-lift inline-block">
                      Join Our Team
                    </a>
                  </SkewText>
                  <SkewText>
                    <a href="/preorder" className="border border-white/20 text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg backdrop-blur-sm transition-all duration-300 btn-hover-lift inline-block">
                      Pre-Order
                    </a>
                  </SkewText>
                  <SkewText>
                    <a 
                      href="https://neuralapp.gumroad.com/l/nblya" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="border border-white/20 text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg backdrop-blur-sm transition-all duration-300 btn-hover-lift inline-block"
                    >
                      Donate What You Want
                    </a>
                  </SkewText>
                </div>
              </FadeInText>
            </div>
          </FadeInText>
        </div>
      </div>
    </div>
    </>
  );
};

export default Vision;