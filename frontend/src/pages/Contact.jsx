import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
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

  // Structured Data for ContactPage and Organization
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
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "url": "https://neuralapp.com/contact"
        },
        "sameAs": [
          "https://neuralapp.gumroad.com/l/nblya"
        ]
      },
      {
        "@type": "ContactPage",
        "@id": "https://neuralapp.com/contact#contactpage",
        "url": "https://neuralapp.com/contact",
        "name": "Contact Neural - AI Learning Platform",
        "description": "Get in touch with Neural for questions about our AI course, prompt engineering training, or partnership opportunities.",
        "mainEntity": {
          "@type": "Organization",
          "@id": "https://neuralapp.com/#organization"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://neuralapp.com/contact#breadcrumb",
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
            "name": "Contact",
            "item": "https://neuralapp.com/contact"
          }
        ]
      }
    ]
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <Helmet>
        <title>Contact Neural | AI Learning Platform | Get in Touch | Neural</title>
        <meta name="description" content="Get in touch with Neural for questions about our AI course, prompt engineering training, or partnership opportunities. Contact our AI learning platform team." />
        <meta name="keywords" content="contact Neural, AI learning platform contact, prompt engineering support, AI course help, Neural contact form, artificial intelligence support" />
        <meta name="author" content="Neural" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Contact Neural | AI Learning Platform | Get in Touch" />
        <meta property="og:description" content="Get in touch with Neural for questions about our AI course, prompt engineering training, or partnership opportunities. Contact our AI learning platform team." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://neuralapp.com/contact" />
        <meta property="og:site_name" content="Neural" />
        <meta property="og:image" content="https://neuralapp.com/logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Neural | AI Learning Platform | Get in Touch" />
        <meta name="twitter:description" content="Get in touch with Neural for questions about our AI course, prompt engineering training, or partnership opportunities. Contact our AI learning platform team." />
        <meta name="twitter:image" content="https://neuralapp.com/logo.png" />
        <meta name="twitter:site" content="@neuralapp" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://neuralapp.com/contact" />
        
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
                  Get in Touch with Neural
                </h1>
              </GlowText>
            </FadeInText>
            <FadeInText delay={0.2}>
              <StaggeredText 
                text="Have questions about our AI course or prompt engineering training? Want to partner with us? We'd love to hear from you about our AI learning platform."
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
                    <h2 className="text-2xl font-bold mb-6 text-white">Send us a message about AI learning</h2>
                  </GlowText>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">Name</label>
                        <Input
                          id="name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-orange-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black"
                          placeholder="Your name"
                          aria-describedby="name-help"
                        />
                        <p id="name-help" className="sr-only">Enter your full name</p>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2 text-white">Subject</label>
                      <Input
                        id="subject"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-orange-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black"
                        placeholder="What's this about?"
                        aria-describedby="subject-help"
                      />
                      <p id="subject-help" className="sr-only">Brief description of your inquiry</p>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">Message</label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-orange-500 transition-all duration-300 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black"
                        placeholder="Tell us about your AI learning needs, questions about our prompt engineering course, or partnership ideas..."
                        aria-describedby="message-help"
                      />
                      <p id="message-help" className="sr-only">Detailed message about your inquiry</p>
                    </div>
                    
                    <PulseButton 
                      type="submit"
                      disabled={loading}
                      className="w-full text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-label={loading ? "Sending message..." : "Send message about AI learning"}
                    >
                      {loading ? 'Sending...' : 'Send Message'}
                    </PulseButton>
                  </form>
                </CardContent>
              </Card>
            </FadeInText>

            {/* Contact Info */}
            <FadeInText delay={0.6}>
              <div className="space-y-8">
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 glass">
                  <CardContent className="p-8">
                    <GlowText>
                      <h2 className="text-2xl font-bold mb-6 text-white">Why Contact Neural?</h2>
                    </GlowText>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center text-xl">
                          <Icon icon="mdi:help-circle" className="text-orange-400" aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-2">AI Course Questions</h3>
                          <p className="text-gray-300">Get help with our prompt engineering course, AI learning platform features, or technical support.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center text-xl">
                          <Icon icon="mdi:handshake" className="text-orange-400" aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-2">Partnership Opportunities</h3>
                          <p className="text-gray-300">Interested in collaborating on AI education initiatives or integrating our platform?</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center text-xl">
                          <Icon icon="mdi:lightbulb-on" className="text-orange-400" aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-2">Feedback & Suggestions</h3>
                          <p className="text-gray-300">Share your thoughts on how we can improve our AI learning experience and prompt engineering training.</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 backdrop-blur-sm border-white/10 glass">
                  <CardContent className="p-8">
                    <GlowText>
                      <h2 className="text-2xl font-bold mb-6 text-white">Other Ways to Connect</h2>
                    </GlowText>
                    <div className="space-y-4">
                      <a 
                        href="https://neuralapp.gumroad.com/l/nblya" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black"
                        aria-label="Get our free AI learning guide on Gumroad"
                      >
                        <Icon icon="mdi:book-open-variant" className="text-2xl text-orange-400" aria-hidden="true" />
                        <div>
                          <h3 className="text-lg font-semibold text-white">Free AI Learning Guide</h3>
                          <p className="text-gray-300">Download our comprehensive guide to prompt engineering and AI learning</p>
                        </div>
                      </a>
                      
                      <a 
                        href="/hiring" 
                        className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black"
                        aria-label="View AI startup job opportunities at Neural"
                      >
                        <Icon icon="mdi:briefcase" className="text-2xl text-orange-400" aria-hidden="true" />
                        <div>
                          <h3 className="text-lg font-semibold text-white">Join Our AI Team</h3>
                          <p className="text-gray-300">Explore opportunities to work on our AI education platform</p>
                        </div>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </FadeInText>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;