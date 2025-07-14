import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import EnhancedAutoTypingHeadline from '../components/EnhancedAutoTypingHeadline';
import StatsCounter from '../components/StatsCounter';
import ThreeScene from '../components/ThreeScene';
import Navigation from '../components/Navigation';
import { FadeInText, StaggeredText, GlowText, SkewText, RotatingTaglines, PulseButton } from '../components/AnimatedText';
import { statsData, testimonialsData, featuresData, typingPhrases } from '../data/mockData';

const Homepage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const taglines = [
    "✨ Learn AI like a language. Built for the next-gen minds.",
    "🚀 Master AI tools through gamified learning paths.",
    "🎯 Transform your skills with interactive AI education.",
    "⚡ Join the AI revolution with hands-on learning."
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <ThreeScene shapes="spheres" count={4} color="#ff6b35" />
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
                  className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent"
                  speed={80}
                  deleteSpeed={40}
                  pauseTime={2500}
                />
              </h1>
            </FadeInText>
            
            <FadeInText delay={0.6}>
              <StaggeredText 
                text="Master prompt engineering, AI tools, and technical skills through gamified learning paths designed for the modern learner."
                className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
                delay={0.6}
              />
            </FadeInText>
            
            <FadeInText delay={0.9}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <PulseButton 
                  className="text-lg px-8 py-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 btn-shimmer text-white"
                >
                  Start Learning
                </PulseButton>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6 backdrop-blur-sm transition-all duration-300 btn-hover-lift"
                >
                  How It Works
                </Button>
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
                  <p className="text-gray-400">Prompts Completed</p>
                </div>
              </FadeInText>
              <FadeInText delay={0.2}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2 text-hover-glow">
                    <StatsCounter end={statsData.activeUsers} suffix="+" />
                  </div>
                  <p className="text-gray-400">Active Learners</p>
                </div>
              </FadeInText>
              <FadeInText delay={0.3}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2 text-hover-glow">
                    <StatsCounter end={statsData.completionRate} suffix="%" />
                  </div>
                  <p className="text-gray-400">Completion Rate</p>
                </div>
              </FadeInText>
              <FadeInText delay={0.4}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2 text-hover-glow">
                    <StatsCounter end={statsData.avgProgress} suffix="%" />
                  </div>
                  <p className="text-gray-400">Avg Progress</p>
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
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    What is Neural?
                  </h2>
                </GlowText>
              </FadeInText>
              <FadeInText delay={0.2}>
                <StaggeredText 
                  text="Neural is the world's first gamified platform for learning AI skills. Think Duolingo, but for prompt engineering, AI tools, and technical mastery."
                  className="text-xl text-gray-300 max-w-3xl mx-auto"
                  delay={0.2}
                />
              </FadeInText>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuresData.map((feature, index) => (
                <FadeInText key={feature.id} delay={0.4 + index * 0.1}>
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-xl card-hover">
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center text-2xl shadow-lg animate-float`}>
                        {feature.icon}
                      </div>
                      <GlowText>
                        <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                      </GlowText>
                      <p className="text-gray-300">{feature.description}</p>
                    </CardContent>
                  </Card>
                </FadeInText>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <FadeInText>
                <GlowText>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    What Learners Say
                  </h2>
                </GlowText>
              </FadeInText>
            </div>
            
            <FadeInText delay={0.3}>
              <div className="relative">
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden glass">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-2xl animate-pulse-glow">
                        {testimonialsData[currentTestimonial].avatar}
                      </div>
                      <div>
                        <GlowText>
                          <h4 className="text-xl font-bold text-white">
                            {testimonialsData[currentTestimonial].name}
                          </h4>
                        </GlowText>
                        <p className="text-gray-400">
                          {testimonialsData[currentTestimonial].role}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-300 mb-4">
                      "{testimonialsData[currentTestimonial].content}"
                    </p>
                    
                    <div className="flex gap-1">
                      {[...Array(testimonialsData[currentTestimonial].rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 animate-text-glow">⭐</span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <div className="flex justify-center gap-2 mt-6">
                  {testimonialsData.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial 
                          ? 'bg-orange-400 animate-pulse-glow' 
                          : 'bg-gray-500 hover:bg-gray-400'
                      }`}
                      onClick={() => setCurrentTestimonial(index)}
                    />
                  ))}
                </div>
              </div>
            </FadeInText>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInText>
              <GlowText>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Ready to Learn AI?
                </h2>
              </GlowText>
            </FadeInText>
            <FadeInText delay={0.3}>
              <StaggeredText 
                text="Join thousands of learners who are mastering AI skills through Neural's gamified approach."
                className="text-xl text-gray-300 mb-8"
                delay={0.3}
              />
            </FadeInText>
            
            <FadeInText delay={0.6}>
              <PulseButton 
                className="text-lg px-12 py-6 rounded-lg font-semibold transform hover:scale-105 btn-shimmer text-white"
              >
                Start Your Journey
              </PulseButton>
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
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center animate-pulse-glow">
                      <span className="text-white font-bold">N</span>
                    </div>
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
                  <h4 className="font-bold mb-4 text-white">Product</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li><SkewText><a href="#" className="hover:text-white transition-colors">Features</a></SkewText></li>
                    <li><SkewText><a href="#" className="hover:text-white transition-colors">Pricing</a></SkewText></li>
                    <li><SkewText><a href="#" className="hover:text-white transition-colors">Courses</a></SkewText></li>
                  </ul>
                </div>
              </FadeInText>
              
              <FadeInText delay={0.3}>
                <div>
                  <h4 className="font-bold mb-4 text-white">Support</h4>
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
  );
};

export default Homepage;