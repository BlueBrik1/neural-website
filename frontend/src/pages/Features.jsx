import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import Navigation from '../components/Navigation';
import EnhancedCursorBackground from '../components/EnhancedCursorBackground';
import { FadeInText, StaggeredText, GlowText, SkewText } from '../components/AnimatedText';
import { Button } from '../components/ui/button';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const Features = () => {
  const features = [
    {
      id: 1,
      icon: 'mdi:brain',
      title: 'AI Prompt Auto-Grader',
      description: 'Get instant feedback on your prompts using our AI tutor-like model. Our system scores clarity, specificity, and structure with personalized suggestions to improve your prompt engineering skills.',
      details: [
        'Real-time prompt quality scoring',
        'Clarity and specificity analysis',
        'Structure optimization suggestions',
        'Personalized improvement tips'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      icon: 'mdi:lightbulb-on',
      title: 'AI Thought Process Visualizer',
      description: 'See how AI interprets your prompts using animated flow diagrams and thought bubbles. Understand the AI\'s logic in action to improve your prompt quality and effectiveness.',
      details: [
        'Animated AI reasoning flow',
        'Thought bubble visualizations',
        'Logic path analysis',
        'Prompt interpretation insights'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 3,
      icon: 'mdi:translate',
      title: 'Prompt Translator Across Models',
      description: 'Convert prompts written for one AI model into versions that work on others. Learn model-specific prompt styles for ChatGPT, Midjourney, Claude, and more.',
      details: [
        'Cross-model prompt conversion',
        'Model-specific style learning',
        'ChatGPT to Midjourney translation',
        'Claude and other model support'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 4,
      icon: 'mdi:swap-horizontal',
      title: 'AI Model Switcher',
      description: 'Switch between learning different AI types like Duolingo\'s language picker. Content adjusts based on your selected model: image, media, text, or code generation.',
      details: [
        'Dynamic content switching',
        'Image AI model training',
        'Text generation focus',
        'Code AI specialization'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      icon: 'mdi:upload',
      title: 'Custom Knowledge Uploads',
      description: 'Upload up to 5 pieces of information or media as context for AI responses. Experiment with how AI relies on different inputs to understand prompt engineering better.',
      details: [
        'Up to 5 custom uploads',
        'Context-aware AI responses',
        'Input dependency analysis',
        'Personalized learning context'
      ],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 6,
      icon: 'mdi:certificate',
      title: 'AI Certification & Recognition',
      description: 'Earn certificates and badges as you master these advanced AI tools. Build a portfolio showcasing your expertise in prompt engineering and AI model interaction.',
      details: [
        'Advanced AI skill certificates',
        'Prompt engineering badges',
        'Model mastery recognition',
        'Portfolio building tools'
      ],
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Neural Features | AI Learning Platform Features & Capabilities</title>
        <meta name="description" content="Explore Neural's powerful features: interactive prompt engineering, AI tools training, gamified learning, progress tracking, AI feedback, and certification options." />
        <meta name="keywords" content="Neural features, AI learning platform, prompt engineering tools, AI course features, gamified learning, progress tracking, AI feedback" />
        <meta property="og:title" content="Neural Features | AI Learning Platform Features & Capabilities" />
        <meta property="og:description" content="Explore Neural's powerful features: interactive prompt engineering, AI tools training, gamified learning, progress tracking, AI feedback, and certification options." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pixelandprintofficial.com/features" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Neural Features | AI Learning Platform Features & Capabilities" />
        <meta name="twitter:description" content="Explore Neural's powerful features: interactive prompt engineering, AI tools training, gamified learning, progress tracking, AI feedback, and certification options." />
        
        {/* JSON-LD Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://pixelandprintofficial.com/features/#webpage",
                "url": "https://pixelandprintofficial.com/features",
                "name": "Neural Features | AI Learning Platform Features & Capabilities",
                "description": "Explore Neural's powerful features: interactive prompt engineering, AI tools training, gamified learning, progress tracking, AI feedback, and certification options.",
                "isPartOf": {
                  "@id": "https://pixelandprintofficial.com/#website"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "Neural",
                  "url": "https://pixelandprintofficial.com"
                },
                "breadcrumb": {
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://pixelandprintofficial.com"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "Features",
                      "item": "https://pixelandprintofficial.com/features"
                    }
                  ]
                }
              },
              {
                "@type": "WebSite",
                "@id": "https://pixelandprintofficial.com/#website",
                "url": "https://pixelandprintofficial.com",
                "name": "Neural - AI Learning Platform",
                "description": "Learn AI like a language. Built for the next-gen minds.",
                "publisher": {
                  "@type": "Organization",
                  "name": "Neural",
                  "url": "https://pixelandprintofficial.com"
                }
              },
              {
                "@type": "Product",
                "@id": "https://pixelandprintofficial.com/#product",
                "name": "Neural AI Learning Platform",
                "description": "Interactive AI learning platform with gamified approach to mastering AI skills, prompt engineering, and AI tools.",
                "url": "https://pixelandprintofficial.com",
                "image": "https://pixelandprintofficial.com/placeholder.jpg",
                "brand": {
                  "@type": "Brand",
                  "name": "Neural"
                },
                "offers": {
                  "@type": "Offer",
                  "price": "29.99",
                  "priceCurrency": "USD",
                  "availability": "https://schema.org/InStock",
                  "url": "https://pixelandprintofficial.com/preorder"
                },
                "category": "Educational Software",
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.8",
                  "reviewCount": "1250"
                },
                "additionalProperty": features.map(feature => ({
                  "@type": "PropertyValue",
                  "name": feature.title,
                  "value": feature.description
                }))
              },
              {
                "@type": "Course",
                "@id": "https://pixelandprintofficial.com/#course",
                "name": "Complete AI Learning Course",
                "description": "Comprehensive AI learning course covering prompt engineering, AI tools, and practical applications.",
                "provider": {
                  "@type": "Organization",
                  "name": "Neural",
                  "url": "https://pixelandprintofficial.com"
                },
                "coursePrerequisites": "No prior AI experience required",
                "educationalLevel": "Beginner to Intermediate",
                "teaches": [
                  "Prompt Engineering",
                  "AI Tools Usage",
                  "ChatGPT Mastery",
                  "AI Image Generation",
                  "AI Ethics"
                ],
                "courseMode": "Online",
                "timeRequired": "PT40H",
                "educationalCredentialAwarded": "Certificate of Completion",
                "hasCourseInstance": features.map(feature => ({
                  "@type": "CourseInstance",
                  "name": feature.title,
                  "description": feature.description,
                  "courseMode": "Online",
                  "educationalLevel": "Beginner to Intermediate"
                }))
              },
              {
                "@type": "SoftwareApplication",
                "@id": "https://pixelandprintofficial.com/#software",
                "name": "Neural AI Learning Platform",
                "description": "Interactive AI learning platform with gamified approach to mastering AI skills, prompt engineering, and AI tools.",
                "url": "https://pixelandprintofficial.com",
                "applicationCategory": "EducationalApplication",
                "operatingSystem": "Web Browser",
                "offers": {
                  "@type": "Offer",
                  "price": "29.99",
                  "priceCurrency": "USD",
                  "availability": "https://schema.org/InStock",
                  "url": "https://pixelandprintofficial.com/preorder"
                },
                "featureList": features.map(feature => feature.title).join(", "),
                "screenshot": "https://pixelandprintofficial.com/placeholder.jpg",
                "softwareVersion": "1.0",
                "releaseNotes": "Initial release with comprehensive AI learning features"
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
                <Badge className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20 transition-all duration-300 animate-pulse-glow">
                  Platform Features
                </Badge>
              </FadeInText>
              <FadeInText delay={0.2}>
                <GlowText>
                  <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                    Neural Features: Learn AI from Scratch Online
                  </h1>
                </GlowText>
              </FadeInText>
              <FadeInText delay={0.4}>
                <StaggeredText 
                  text="Discover the powerful features that make Neural the most effective way to learn AI online. From interactive prompt engineering to AI tools training, we've built everything you need to master AI skills and earn AI certifications."
                  className="text-xl text-gray-300 max-w-3xl mx-auto"
                  delay={0.4}
                />
              </FadeInText>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {features.map((feature, index) => (
                <FadeInText key={feature.id} delay={0.6 + index * 0.1}>
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 card-hover">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6">
                        <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-2xl shadow-lg flex-shrink-0`}>
                          <Icon icon={feature.icon} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <GlowText>
                            <h3 className="text-2xl font-bold mb-3 text-white">{feature.title}</h3>
                          </GlowText>
                          <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                          <ul className="space-y-2">
                            {feature.details.map((detail, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-gray-300">
                                <Icon icon="mdi:check-circle" className="text-green-400 text-sm" />
                                <span className="text-sm">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </FadeInText>
              ))}
            </div>

            {/* CTA Section */}
            <FadeInText delay={1.2}>
              <div className="text-center">
                <Card className="bg-gradient-to-r from-orange-500/10 to-red-600/10 backdrop-blur-sm border-orange-500/20 glass">
                  <CardContent className="p-8">
                    <GlowText>
                      <h2 className="text-3xl font-bold mb-4 text-orange-400">Ready to Learn AI Online with AI Tools?</h2>
                    </GlowText>
                    <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                      Join thousands of learners who are already mastering AI skills with Neural. Get started today and transform your career with AI techniques and AI jobs opportunities.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link to="/preorder">
                        <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 btn-hover-lift">
                          Start Learning Now
                        </Button>
                      </Link>
                      <Link to="/">
                        <Button 
                          variant="outline" 
                          className="border-white/20 text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg backdrop-blur-sm transition-all duration-300 btn-hover-lift"
                        >
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </FadeInText>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features; 