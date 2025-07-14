import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import AutoTypingHeadline from '../components/AutoTypingHeadline';
import StatsCounter from '../components/StatsCounter';
import ThreeScene from '../components/ThreeScene';
import Navigation from '../components/Navigation';
import { statsData, testimonialsData, featuresData, typingPhrases } from '../data/mockData';

const Homepage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <ThreeScene shapes="mixed" count={7} color="#ff6b35" />
      <Navigation />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20 transition-all duration-300">
              ✨ Learn AI like a language. Built for the next-gen minds.
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <AutoTypingHeadline 
                phrases={typingPhrases}
                className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent"
              />
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Master prompt engineering, AI tools, and technical skills through gamified learning paths designed for the modern learner.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-lg px-8 py-6 shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300 transform hover:scale-105"
              >
                Start Learning
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6 backdrop-blur-sm transition-all duration-300"
              >
                How It Works
              </Button>
            </div>
          </div>
        </section>

        {/* Live Stats */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">
                  <StatsCounter end={statsData.promptsCompleted} suffix="+" />
                </div>
                <p className="text-gray-400">Prompts Completed</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">
                  <StatsCounter end={statsData.activeUsers} suffix="+" />
                </div>
                <p className="text-gray-400">Active Learners</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">
                  <StatsCounter end={statsData.completionRate} suffix="%" />
                </div>
                <p className="text-gray-400">Completion Rate</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">
                  <StatsCounter end={statsData.avgProgress} suffix="%" />
                </div>
                <p className="text-gray-400">Avg Progress</p>
              </div>
            </div>
          </div>
        </section>

        {/* What is Neural */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                What is Neural?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Neural is the world's first gamified platform for learning AI skills. Think Duolingo, but for prompt engineering, AI tools, and technical mastery.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuresData.map((feature) => (
                <Card key={feature.id} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center text-2xl shadow-lg`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                What Learners Say
              </h2>
            </div>
            
            <div className="relative">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-2xl">
                      {testimonialsData[currentTestimonial].avatar}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">
                        {testimonialsData[currentTestimonial].name}
                      </h4>
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
                      <span key={i} className="text-yellow-400">⭐</span>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <div className="flex justify-center gap-2 mt-6">
                {testimonialsData.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentTestimonial ? 'bg-orange-400' : 'bg-gray-500'
                    }`}
                    onClick={() => setCurrentTestimonial(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Ready to Learn AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of learners who are mastering AI skills through Neural's gamified approach.
            </p>
            
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-lg px-12 py-6 shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Journey
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">N</span>
                  </div>
                  <span className="text-xl font-bold">Neural</span>
                </div>
                <p className="text-gray-400">
                  Learn AI like a language. Built for the next-gen minds.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold mb-4">Company</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="/vision" className="hover:text-white transition-colors">Our Vision</a></li>
                  <li><a href="/hiring" className="hover:text-white transition-colors">We're Hiring</a></li>
                  <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-4">Product</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Courses</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-4">Support</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 Neural. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Homepage;