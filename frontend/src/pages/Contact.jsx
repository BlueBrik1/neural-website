import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import ThreeScene from '../components/ThreeScene';
import Navigation from '../components/Navigation';
import { FadeInText, StaggeredText, GlowText, PulseButton } from '../components/AnimatedText';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
                  Get in Touch
                </h1>
              </GlowText>
            </FadeInText>
            <FadeInText delay={0.2}>
              <StaggeredText 
                text="Have questions about Neural? Want to partner with us? We'd love to hear from you."
                className="text-xl text-gray-300 max-w-2xl mx-auto"
                delay={0.2}
              />
            </FadeInText>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <FadeInText delay={0.4}>
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 glass">
                <CardContent className="p-8">
                  <GlowText>
                    <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                  </GlowText>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Name</label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-orange-500 transition-all duration-300"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-orange-500 transition-all duration-300"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Subject</label>
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-orange-500 transition-all duration-300"
                        placeholder="What's this about?"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-orange-500 transition-all duration-300"
                        placeholder="Tell us more..."
                      />
                    </div>
                    
                    <PulseButton 
                      type="submit" 
                      className="w-full text-white font-semibold py-3 rounded-lg"
                    >
                      Send Message
                    </PulseButton>
                  </form>
                </CardContent>
              </Card>
            </FadeInText>

            {/* Contact Info */}
            <div className="space-y-8">
              {[
                { icon: '📧', title: 'Email', value: 'hello@neural.ai', desc: 'For general inquiries, partnerships, or feedback about Neural.' },
                { icon: '💼', title: 'Careers', value: 'careers@neural.ai', desc: 'Interested in joining our team? Check out our open positions.' },
                { icon: '🤝', title: 'Partnerships', value: 'partnerships@neural.ai', desc: 'Let\'s collaborate to advance AI education together.' },
                { icon: '🌍', title: 'Location', value: 'San Francisco, CA', desc: 'Our headquarters, though we\'re a global remote-first team.' }
              ].map((item, index) => (
                <FadeInText key={index} delay={0.6 + index * 0.1}>
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 card-hover">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center animate-pulse-glow">
                          <span className="text-xl">{item.icon}</span>
                        </div>
                        <div>
                          <GlowText>
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                          </GlowText>
                          <p className="text-gray-400">{item.value}</p>
                        </div>
                      </div>
                      <p className="text-gray-300">{item.desc}</p>
                    </CardContent>
                  </Card>
                </FadeInText>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;