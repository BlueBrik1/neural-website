import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
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
    <>
      <Helmet>
        <title>Contact Neural | Get in Touch About AI Learning Platform</title>
        <meta name="description" content="Contact Neural for questions about our AI course, prompt engineering training, or partnership opportunities. Get support for learning AI online and mastering AI tools and techniques." />
        <meta name="keywords" content="contact Neural, AI course support, prompt engineering help, AI learning questions, AI tools assistance, online AI course contact" />
        <meta property="og:title" content="Contact Neural | Get in Touch About AI Learning Platform" />
        <meta property="og:description" content="Contact Neural for questions about our AI course, prompt engineering training, or partnership opportunities." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pixelandprintofficial.com/contact" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Neural | Get in Touch About AI Learning Platform" />
        <meta name="twitter:description" content="Contact Neural for questions about our AI course, prompt engineering training, or partnership opportunities." />
        
        {/* JSON-LD Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "ContactPage",
                "@id": "https://pixelandprintofficial.com/contact/#contactpage",
                "url": "https://pixelandprintofficial.com/contact",
                "name": "Contact Neural | Get in Touch About AI Learning Platform",
                "description": "Contact Neural for questions about our AI course, prompt engineering training, or partnership opportunities.",
                "mainEntity": {
                  "@type": "Organization",
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
                  "contactPoint": [
                    {
                      "@type": "ContactPoint",
                      "contactType": "customer service",
                      "email": "hello@pixelandprintofficial.com",
                      "availableLanguage": "English",
                      "areaServed": "Worldwide"
                    },
                    {
                      "@type": "ContactPoint",
                      "contactType": "technical support",
                      "email": "hello@pixelandprintofficial.com",
                      "availableLanguage": "English"
                    },
                    {
                      "@type": "ContactPoint",
                      "contactType": "sales",
                      "email": "hello@pixelandprintofficial.com",
                      "availableLanguage": "English"
                    }
                  ],
                  "sameAs": [
                    "https://twitter.com/neural_ai",
                    "https://linkedin.com/company/neural-ai"
                  ]
                }
              },
              {
                "@type": "WebPage",
                "@id": "https://pixelandprintofficial.com/contact/#webpage",
                "url": "https://pixelandprintofficial.com/contact",
                "name": "Contact Neural | Get in Touch About AI Learning Platform",
                "description": "Contact Neural for questions about our AI course, prompt engineering training, or partnership opportunities.",
                "isPartOf": {
                  "@id": "https://pixelandprintofficial.com/#website"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "Neural",
                  "url": "https://pixelandprintofficial.com"
                },
                "mainEntity": {
                  "@id": "https://pixelandprintofficial.com/contact/#contactpage"
                }
              },
              {
                "@type": "Service",
                "@id": "https://pixelandprintofficial.com/contact/#service",
                "name": "Neural AI Learning Support",
                "description": "Customer support and technical assistance for Neural AI learning platform and courses.",
                "provider": {
                  "@type": "Organization",
                  "name": "Neural",
                  "url": "https://pixelandprintofficial.com"
                },
                "serviceType": "Customer Support",
                "areaServed": "Worldwide",
                "availableLanguage": "English",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "customer service",
                  "email": "hello@pixelandprintofficial.com",
                  "availableLanguage": "English"
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
                  Get in Touch About AI Learning
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
                    <h2 className="text-2xl font-bold mb-6 text-white">Send us a message about AI course</h2>
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
                { icon: <Icon icon="mdi:email" className="text-xl" />, title: 'Email', value: 'hello@pixelandprintofficial.com', desc: 'For general inquiries, partnerships, or feedback about Neural.' },
                { icon: <Icon icon="mdi:briefcase" className="text-xl" />, title: 'Careers', value: 'hello@pixelandprintofficial.com', desc: 'Interested in joining our team? Check out our open positions.' },
                { icon: <Icon icon="mdi:handshake" className="text-xl" />, title: 'Partnerships', value: 'hello@pixelandprintofficial.com', desc: 'Let\'s collaborate to advance AI education together.' },
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
    </>
  );
};

export default Contact;