import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import ThreeScene from '../components/ThreeScene';
import Navigation from '../components/Navigation';
import StatsCounter from '../components/StatsCounter';
import { FadeInText, StaggeredText, GlowText, SkewText } from '../components/AnimatedText';

const Vision = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <ThreeScene shapes="spheres" count={4} color="#ff6b35" />
      <Navigation />
      
      <div className="relative z-10 pt-24 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <FadeInText>
              <GlowText>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Our Vision
                </h1>
              </GlowText>
            </FadeInText>
            <FadeInText delay={0.2}>
              <StaggeredText 
                text="Democratizing AI education to create a world where everyone can harness the power of artificial intelligence."
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
                    <h2 className="text-3xl font-bold mb-6 text-orange-400">Our Mission</h2>
                  </GlowText>
                  <StaggeredText 
                    text="To make AI education accessible, engaging, and effective for everyone. We believe that understanding AI shouldn't be limited to computer scientists—it should be a fundamental skill for the digital age."
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
                  <h2 className="text-3xl font-bold text-white">Core Values</h2>
                </GlowText>
              </div>
            </FadeInText>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: '🌟', title: 'Accessibility', desc: 'AI education should be available to everyone, regardless of background or technical expertise.' },
                { icon: '🎯', title: 'Quality', desc: 'We\'re committed to creating the highest quality educational content and experiences.' },
                { icon: '🚀', title: 'Innovation', desc: 'We continuously push the boundaries of what\'s possible in AI education.' }
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
                    <h2 className="text-3xl font-bold mb-6 text-orange-400">The Problem</h2>
                  </GlowText>
                  <div className="space-y-4">
                    <FadeInText delay={1.2}>
                      <p className="text-gray-300">
                        AI is transforming every industry, but traditional education hasn't kept pace. Most people are left behind, struggling to understand how to use AI effectively in their work and daily lives.
                      </p>
                    </FadeInText>
                    <FadeInText delay={1.4}>
                      <p className="text-gray-300">
                        Current AI education is either too technical for beginners or too shallow for practical application. There's a massive gap between AI research and practical skills.
                      </p>
                    </FadeInText>
                    <FadeInText delay={1.6}>
                      <p className="text-gray-300">
                        We're building the bridge to close this gap—making AI education engaging, practical, and accessible to everyone.
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
                    <h2 className="text-3xl font-bold mb-6 text-orange-400">Our Solution</h2>
                  </GlowText>
                  <div className="space-y-4">
                    <FadeInText delay={2.8}>
                      <p className="text-gray-300">
                        Neural combines the engagement of gaming with the effectiveness of hands-on learning. We've created a platform that makes AI education feel like playing a game while teaching real, practical skills.
                      </p>
                    </FadeInText>
                    <FadeInText delay={3.0}>
                      <p className="text-gray-300">
                        Our bite-sized lessons, immediate feedback, and progressive skill building ensure that learners stay motivated and actually retain what they learn.
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
                    <h2 className="text-3xl font-bold mb-6 text-orange-400">The Future We're Building</h2>
                  </GlowText>
                  <FadeInText delay={3.6}>
                    <StaggeredText 
                      text="We envision a world where AI literacy is as common as computer literacy is today. Where every professional, student, and creator can harness AI to amplify their capabilities and solve complex problems."
                      className="text-xl text-gray-300 mb-6 max-w-4xl mx-auto"
                      delay={3.6}
                    />
                  </FadeInText>
                  <FadeInText delay={3.8}>
                    <StaggeredText 
                      text="Neural is just the beginning. We're building the foundation for a future where humans and AI work together seamlessly, where technology serves everyone, not just the few."
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
                <h2 className="text-3xl font-bold mb-6 text-white">Join Us in Shaping the Future</h2>
              </GlowText>
              <FadeInText delay={4.2}>
                <StaggeredText 
                  text="Whether you're a learner, educator, or potential team member, we invite you to be part of this transformation."
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
                    <a href="/contact" className="border border-white/20 text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg backdrop-blur-sm transition-all duration-300 btn-hover-lift inline-block">
                      Get in Touch
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