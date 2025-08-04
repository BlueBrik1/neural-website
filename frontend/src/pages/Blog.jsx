import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import Navigation from '../components/Navigation';
import EnhancedCursorBackground from '../components/EnhancedCursorBackground';
import { FadeInText, StaggeredText, GlowText } from '../components/AnimatedText';
import { Button } from '../components/ui/button';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const blogPosts = [
    {
      id: 1,
      title: "How to Learn AI Without a CS Degree",
      excerpt: "Discover proven strategies for mastering AI skills even if you don't have a computer science background. Learn how to leverage your existing knowledge and build a strong foundation in artificial intelligence.",
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "Learning Tips",
      image: "https://images.unsplash.com/photo-1484665739383-a1069a82d4be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageAlt: "Person learning and studying with digital technology",
      imageCredit: "Photo by @unsplash on Unsplash",
      author: "Neural Team",
      tags: ["AI Learning", "Career Change", "Self-Taught"]
    },
    {
      id: 2,
      title: "Top Prompt Engineering Tips for Beginners",
      excerpt: "Master the art of prompt engineering with these essential tips and techniques. Learn how to craft effective prompts that get the best results from AI models like ChatGPT and GPT-4.",
      date: "December 12, 2024",
      readTime: "6 min read",
      category: "Prompt Engineering",
      image: "https://images.unsplash.com/photo-1737641624486-7846df8528dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvbXB0JTIwZW5naW5lZXJpbmd8ZW58MHx8MHx8fDA%3D",
      imageAlt: "AI prompt engineering and text generation interface",
      imageCredit: "Photo by @unsplash on Unsplash",
      author: "Neural Team",
      tags: ["Prompt Engineering", "ChatGPT", "AI Tips"]
    },
    {
      id: 3,
      title: "Best AI Tools to Start With in 2025",
      excerpt: "Explore the most powerful and user-friendly AI tools that will dominate 2025. From text generation to image creation, discover the tools that will transform your workflow and productivity.",
      date: "December 10, 2024",
      readTime: "10 min read",
      category: "AI Tools",
      image: "https://images.unsplash.com/photo-1675557010061-315772f6efef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageAlt: "Modern AI tools and technology interface",
      imageCredit: "Photo by @hiteshchoudhary on Unsplash",
      author: "Neural Team",
      tags: ["AI Tools", "Productivity", "2025 Trends"]
    },
    {
      id: 4,
      title: "The Future of AI Education: What's Next?",
      excerpt: "Explore the emerging trends in AI education and how they're reshaping the way we learn. From personalized learning to AI-powered tutors, discover what the future holds for AI education.",
      date: "December 8, 2024",
      readTime: "7 min read",
      category: "AI Education",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      imageAlt: "Students collaborating with digital technology",
      imageCredit: "Photo by @nci on Unsplash",
      author: "Neural Team",
      tags: ["AI Education", "Future Trends", "Learning Technology"]
    },
    {
      id: 5,
      title: "Building Your AI Portfolio: A Complete Guide",
      excerpt: "Learn how to create an impressive AI portfolio that showcases your skills and attracts opportunities. From project ideas to presentation tips, everything you need to stand out in the AI job market.",
      date: "December 5, 2024",
      readTime: "9 min read",
      category: "Career Development",
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageAlt: "Professional portfolio and career development",
      imageCredit: "Photo by @unsplash on Unsplash",
      author: "Neural Team",
      tags: ["Portfolio", "Career", "AI Projects"]
    },
    {
      id: 6,
      title: "AI Ethics: Understanding the Responsibility",
      excerpt: "Dive into the important topic of AI ethics and responsible AI development. Learn about bias, transparency, and the ethical considerations every AI practitioner should understand.",
      date: "December 3, 2024",
      readTime: "11 min read",
      category: "AI Ethics",
      image: "https://plus.unsplash.com/premium_photo-1744625362366-81d9b9cac07d?q=80&w=1843&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageAlt: "AI ethics and responsible technology development",
      imageCredit: "Photo by @unsplash on Unsplash",
      author: "Neural Team",
      tags: ["AI Ethics", "Responsible AI", "Bias"]
    },
    {
      id: 7,
      title: "AI in Business: Real-World Applications",
      excerpt: "Discover how AI is transforming businesses across industries. From customer service to data analysis, explore real-world AI applications that are driving innovation and growth.",
      date: "November 30, 2024",
      readTime: "12 min read",
      category: "Business AI",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      imageAlt: "Business team collaborating with AI technology",
      imageCredit: "Photo by @rawpixel on Unsplash",
      author: "Neural Team",
      tags: ["Business AI", "Innovation", "Digital Transformation"]
    },
    {
      id: 8,
      title: "Getting Started with AI: Your First Steps",
      excerpt: "Begin your AI journey with confidence. Learn the essential first steps, tools, and resources to start learning AI effectively. Perfect for complete beginners.",
      date: "November 28, 2024",
      readTime: "8 min read",
      category: "Getting Started",
      image: "https://images.unsplash.com/photo-1737894543924-15e1ff7adbdb?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageAlt: "Getting started with AI and technology learning",
      imageCredit: "Photo by @unsplash on Unsplash",
      author: "Neural Team",
      tags: ["Getting Started", "AI Basics", "Learning Path"]
    }
  ];

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      const res = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'api-key': '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',
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          email,
          listIds: [3],
          updateEnabled: true
        })
      });
      if (res.ok) {
        setMessage('Thank you for subscribing! Please check your inbox.');
        setEmail('');
      } else {
        const data = await res.json();
        setMessage(data.message || 'Subscription failed. Please try again.');
      }
    } catch (err) {
      setMessage('Network error. Please try again.');
    }
    setLoading(false);
  };

  return (
    <>
      <Helmet>
        <title>AI Learning Blog | Neural - AI Education Insights & Tips</title>
        <meta name="description" content="Stay updated with the latest AI learning insights, prompt engineering tips, and AI education trends. Expert articles to help you master AI skills and advance your career." />
        <meta name="keywords" content="AI learning blog, prompt engineering tips, AI education articles, AI tools guide, AI career advice, machine learning blog" />
        <meta property="og:title" content="AI Learning Blog | Neural - AI Education Insights & Tips" />
        <meta property="og:description" content="Stay updated with the latest AI learning insights, prompt engineering tips, and AI education trends." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pixelandprintofficial.com/blog" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Learning Blog | Neural - AI Education Insights & Tips" />
        <meta name="twitter:description" content="Stay updated with the latest AI learning insights, prompt engineering tips, and AI education trends." />
        
        {/* JSON-LD Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Blog",
                "@id": "https://pixelandprintofficial.com/blog/#blog",
                "url": "https://pixelandprintofficial.com/blog",
                "name": "AI Learning Blog",
                "description": "Stay updated with the latest AI learning insights, prompt engineering tips, and AI education trends.",
                "publisher": {
                  "@type": "Organization",
                  "name": "Neural",
                  "url": "https://pixelandprintofficial.com",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://pixelandprintofficial.com/logo.png"
                  }
                },
                "blogPost": blogPosts.map(post => ({
                  "@type": "BlogPosting",
                  "headline": post.title,
                  "description": post.excerpt,
                  "datePublished": post.date,
                  "dateModified": post.date,
                  "author": {
                    "@type": "Organization",
                    "name": post.author,
                    "url": "https://pixelandprintofficial.com"
                  },
                  "publisher": {
                    "@type": "Organization",
                    "name": "Neural",
                    "url": "https://pixelandprintofficial.com"
                  },
                  "image": {
                    "@type": "ImageObject",
                    "url": post.image,
                    "width": 1200,
                    "height": 630
                  },
                  "url": `https://pixelandprintofficial.com/blog/${post.id}`,
                  "articleSection": post.category,
                  "keywords": post.tags.join(", "),
                  "wordCount": post.excerpt.split(' ').length + 200,
                  "timeRequired": post.readTime,
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": `https://pixelandprintofficial.com/blog/${post.id}`
                  }
                }))
              },
              {
                "@type": "WebPage",
                "@id": "https://pixelandprintofficial.com/blog/#webpage",
                "url": "https://pixelandprintofficial.com/blog",
                "name": "AI Learning Blog | Neural - AI Education Insights & Tips",
                "description": "Stay updated with the latest AI learning insights, prompt engineering tips, and AI education trends.",
                "isPartOf": {
                  "@id": "https://pixelandprintofficial.com/#website"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "Neural",
                  "url": "https://pixelandprintofficial.com"
                },
                "mainEntity": {
                  "@id": "https://pixelandprintofficial.com/blog/#blog"
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
                      "name": "Blog",
                      "item": "https://pixelandprintofficial.com/blog"
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
                }
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
                "educationalCredentialAwarded": "Certificate of Completion"
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
                  AI Learning Blog
                </Badge>
              </FadeInText>
              <FadeInText delay={0.2}>
                <GlowText>
                  <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                    Learn AI Online: Free AI Course Blog & Tips
                  </h1>
                </GlowText>
              </FadeInText>
              <FadeInText delay={0.4}>
                <StaggeredText 
                  text="Stay updated with the latest AI learning insights, prompt engineering tips, and AI education trends. Expert articles to help you master AI skills, AI tools, and advance your career with our online AI course."
                  className="text-xl text-gray-300 max-w-3xl mx-auto"
                  delay={0.4}
                />
              </FadeInText>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {blogPosts.map((post, index) => (
                <FadeInText key={post.id} delay={0.6 + index * 0.1}>
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 card-hover h-full">
                    <CardContent className="p-6 h-full flex flex-col">
                                             {/* Blog Post Image */}
                       <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                         <img 
                           src={post.image} 
                           alt={post.imageAlt}
                           className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                           loading="lazy"
                         />
                       </div>
                      
                      {/* Category Badge */}
                      <Badge className="w-fit mb-3 bg-orange-500/20 text-orange-400 border-orange-500/30">
                        {post.category}
                      </Badge>
                      
                      {/* Title */}
                      <GlowText>
                        <h3 className="text-xl font-bold mb-3 text-white line-clamp-2">
                          {post.title}
                        </h3>
                      </GlowText>
                      
                      {/* Excerpt */}
                      <p className="text-gray-300 mb-4 flex-grow line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      {/* Meta Info */}
                      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                        <span>{post.date}</span>
                        <span className="flex items-center gap-1">
                          <Icon icon="mdi:clock-outline" className="text-sm" />
                          {post.readTime}
                        </span>
                      </div>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 2).map((tag, idx) => (
                          <span key={idx} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      {/* Read More Button */}
                      <Link to={`/blog/post${post.id}`}>
                        <Button 
                          variant="outline" 
                          className="border-orange-500/30 text-orange-400 hover:bg-orange-500/20 mt-auto w-full"
                        >
                          Read More
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </FadeInText>
              ))}
            </div>

            {/* Newsletter Signup */}
            <FadeInText delay={1.2}>
              <div className="text-center">
                <Card className="bg-gradient-to-r from-orange-500/10 to-red-600/10 backdrop-blur-sm border-orange-500/20 glass">
                  <CardContent className="p-8">
                    <GlowText>
                      <h2 className="text-3xl font-bold mb-4 text-orange-400">Stay Updated with AI Techniques & AI Jobs</h2>
                    </GlowText>
                    <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                      Get the latest AI learning insights, tips, and tutorials delivered to your inbox. Join thousands of learners staying ahead in the AI revolution and discover AI jobs opportunities.
                    </p>
                    <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="px-4 py-3 rounded-lg bg-black/60 border border-orange-500/30 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 w-full"
                        disabled={loading}
                      />
                      <Button
                        type="submit"
                        className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 btn-hover-lift"
                        disabled={loading}
                      >
                        {loading ? 'Subscribing...' : 'Subscribe to Blog'}
                      </Button>
                    </form>
                    {message && (
                      <div className="mt-4 text-sm text-center text-orange-400">{message}</div>
                    )}
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

export default Blog; 