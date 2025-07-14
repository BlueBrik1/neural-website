import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import ThreeScene from '../components/ThreeScene';
import Navigation from '../components/Navigation';
import StatsCounter from '../components/StatsCounter';

const Vision = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <ThreeScene shapes="brains" count={8} color="#ff6b35" />
      <Navigation />
      
      <div className="relative z-10 pt-24 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our Vision
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Democratizing AI education to create a world where everyone can harness the power of artificial intelligence.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="mb-16">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-6 text-orange-400">Our Mission</h2>
                <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                  To make AI education accessible, engaging, and effective for everyone. We believe that understanding AI shouldn't be limited to computer scientists—it should be a fundamental skill for the digital age.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Core Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center text-2xl">
                    🌟
                  </div>
                  <h3 className="text-xl font-bold mb-3">Accessibility</h3>
                  <p className="text-gray-300">AI education should be available to everyone, regardless of background or technical expertise.</p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center text-2xl">
                    🎯
                  </div>
                  <h3 className="text-xl font-bold mb-3">Quality</h3>
                  <p className="text-gray-300">We're committed to creating the highest quality educational content and experiences.</p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center text-2xl">
                    🚀
                  </div>
                  <h3 className="text-xl font-bold mb-3">Innovation</h3>
                  <p className="text-gray-300">We continuously push the boundaries of what's possible in AI education.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* The Problem */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-orange-400">The Problem</h2>
                <p className="text-gray-300 mb-4">
                  AI is transforming every industry, but traditional education hasn't kept pace. Most people are left behind, struggling to understand how to use AI effectively in their work and daily lives.
                </p>
                <p className="text-gray-300 mb-4">
                  Current AI education is either too technical for beginners or too shallow for practical application. There's a massive gap between AI research and practical skills.
                </p>
                <p className="text-gray-300">
                  We're building the bridge to close this gap—making AI education engaging, practical, and accessible to everyone.
                </p>
              </div>
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">The AI Skills Gap</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Jobs requiring AI skills</span>
                      <span className="text-orange-400 font-bold">+<StatsCounter end={300} />%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Workers with AI training</span>
                      <span className="text-orange-400 font-bold"><StatsCounter end={15} />%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Companies struggling to hire</span>
                      <span className="text-orange-400 font-bold"><StatsCounter end={87} />%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* The Solution */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 lg:order-1">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">Our Approach</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                      <span className="text-gray-300">Gamified learning paths</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                      <span className="text-gray-300">Real-world AI tools</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                      <span className="text-gray-300">Instant feedback</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-sm font-bold">4</div>
                      <span className="text-gray-300">Community support</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="lg:order-0">
                <h2 className="text-3xl font-bold mb-6 text-orange-400">Our Solution</h2>
                <p className="text-gray-300 mb-4">
                  Neural combines the engagement of gaming with the effectiveness of hands-on learning. We've created a platform that makes AI education feel like playing a game while teaching real, practical skills.
                </p>
                <p className="text-gray-300 mb-4">
                  Our bite-sized lessons, immediate feedback, and progressive skill building ensure that learners stay motivated and actually retain what they learn.
                </p>
                <p className="text-gray-300">
                  By focusing on practical applications rather than theory, we help people start using AI tools effectively from day one.
                </p>
              </div>
            </div>
          </div>

          {/* Future Vision */}
          <div className="mb-16">
            <Card className="bg-gradient-to-r from-orange-500/10 to-red-600/10 backdrop-blur-sm border-orange-500/20">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-6 text-orange-400">The Future We're Building</h2>
                <p className="text-xl text-gray-300 mb-6 max-w-4xl mx-auto">
                  We envision a world where AI literacy is as common as computer literacy is today. Where every professional, student, and creator can harness AI to amplify their capabilities and solve complex problems.
                </p>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  Neural is just the beginning. We're building the foundation for a future where humans and AI work together seamlessly, where technology serves everyone, not just the few.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Join Us in Shaping the Future</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether you're a learner, educator, or potential team member, we invite you to be part of this transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/hiring" className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300 transform hover:scale-105">
                Join Our Team
              </a>
              <a href="/contact" className="border border-white/20 text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg backdrop-blur-sm transition-all duration-300">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;