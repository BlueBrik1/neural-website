import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import ThreeScene from '../components/ThreeScene';
import Navigation from '../components/Navigation';
import { FadeInText, StaggeredText, GlowText, PulseButton } from '../components/AnimatedText';
import EnhancedAutoTypingHeadline from '../components/EnhancedAutoTypingHeadline';
import { Badge } from '../components/ui/badge';
import { typingPhrases } from '../data/mockData';

const Preorder = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <ThreeScene shapes="spheres" count={8} color="#ff6b35" />
      <Navigation />
      <div className="relative z-10">
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
                text="You're early — and that's a win. Snag your spot to try the most fun way to learn AI. Beat the crowd, earn early rewards, and flex that brain."
                className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
                delay={0.4}
              />
            </FadeInText>
            <FadeInText delay={0.6}>
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 glass mt-8">
                <CardContent className="p-8 text-center">
                  <GlowText>
                    <h2 className="text-2xl font-bold mb-4 text-orange-400">Reserve Your Neural Access</h2>
                  </GlowText>
                  <p className="text-gray-300 mb-6">
                    Your preorder helps us build a better, more accessible AI education for all. <br />
                  </p>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    
                    <span className="font-bold text-yellow-300 text-base md:text-lg drop-shadow-md" style={{ textShadow: '0 0 8px #fde047' }}>
                      IMPORTANT: You MUST provide your email address so we can contact you and reserve your spot.
                    </span>
                  </div>
                  <a href="https://buy.stripe.com/test_14A7sK0sfdWWdLA2vdcV200" target="_blank" rel="noopener noreferrer">
                    <PulseButton className="text-lg px-10 py-5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 btn-shimmer text-white w-full max-w-xs mx-auto">
                      Preorder Neural
                    </PulseButton>
                  </a>
                  <p className="text-xs text-gray-500 mt-4">Secure checkout via Stripe. Limited early access slots available.</p>
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
