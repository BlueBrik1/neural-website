import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import ThreeScene from '../components/ThreeScene';
import Navigation from '../components/Navigation';
import { FadeInText, StaggeredText, GlowText, PulseButton } from '../components/AnimatedText';
import emailjs from 'emailjs-com';
import EnhancedCursorBackground from '../components/EnhancedCursorBackground';
import { Icon } from '@iconify/react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        'service_wxtsamm',
        'template_gnrwbug',
        {
          from_name: formData.name,
          subject: formData.subject,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        'GwkhQC92lovAFp2ZM'
      );
      alert('Thank you for your message! We\'ll get back to you soon.');
      setFormData({ name: '', subject: '', message: '' });
    } catch (error) {
      alert('There was an error sending your message. Please try again later.');
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
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
                    <h2 className="text-2xl font-bold mb-6 text-white">Send us a message</h2>
                  </GlowText>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-white">Name</label>
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
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white">Subject</label>
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
                      <label className="block text-sm font-medium mb-2 text-white">Message</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-orange-500 transition-all duration-300"
                        placeholder="Your message (please include your email address so we can reply)"
                      />
                    </div>
                    
                    <PulseButton 
                      type="submit"
                      className="w-full text-white font-semibold py-3 rounded-lg"
                      disabled={loading}
                    >
                      {loading ? 'Sending...' : 'Send Message'}
                    </PulseButton>
                  </form>
                </CardContent>
              </Card>
            </FadeInText>

            {/* Contact Info */}
            <div className="space-y-8">
              {[
                { icon: <Icon icon="mdi:email" className="text-xl" />, title: 'Email', value: 'pixelandprintofficial@gmail.com', desc: 'For general inquiries, partnerships, or feedback about Neural.' },
                { icon: <Icon icon="mdi:briefcase" className="text-xl" />, title: 'Careers', value: 'pixelandprintofficial@gmail.com', desc: 'Interested in joining our team? Check out our open positions.' },
                { icon: <Icon icon="mdi:handshake" className="text-xl" />, title: 'Partnerships', value: 'pixelandprintofficial@gmail.com', desc: 'Let\'s collaborate to advance AI education together.' },
                { icon: <Icon icon="mdi:earth" className="text-xl" />, title: 'Location', value: 'Atlanta, GA', desc: 'Our headquarters, though we\'re a global remote-first team.' }
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
                            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
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