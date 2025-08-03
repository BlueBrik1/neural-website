import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import ThreeScene from '../components/ThreeScene';
import Navigation from '../components/Navigation';
import { FadeInText, StaggeredText, GlowText, PulseButton } from '../components/AnimatedText';
import { jobOpenings, teamData } from '../data/mockData';
import { Link } from 'react-router-dom';
import EnhancedCursorBackground from '../components/EnhancedCursorBackground';
import { Icon } from '@iconify/react';

const Hiring = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleApply = (job) => {
    // Mock application
    alert(`Thank you for your interest in the ${job.title} position! We'll review your application and get back to you soon.`);
  };

  // Structured Data for Organization and JobPosting
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
        "sameAs": [
          "https://neuralapp.gumroad.com/l/nblya"
        ]
      },
      {
        "@type": "JobPosting",
        "@id": "https://neuralapp.com/hiring#jobposting",
        "title": "AI Startup Jobs at Neural",
        "description": "Join our AI startup team! We're hiring prompt engineers and AI professionals to build the future of AI education. Join the Neural team and help shape AI learning.",
        "hiringOrganization": {
          "@type": "Organization",
          "@id": "https://neuralapp.com/#organization"
        },
        "jobLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Remote",
            "addressCountry": "US"
          }
        },
        "employmentType": "CONTRACTOR",
        "datePosted": "2025-01-01",
        "validThrough": "2025-12-31"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://neuralapp.com/hiring#breadcrumb",
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
            "name": "We're Hiring",
            "item": "https://neuralapp.com/hiring"
          }
        ]
      }
    ]
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <Helmet>
        <title>AI Startup Jobs | Prompt Engineering Jobs | Hiring Prompt Engineers | Neural Team</title>
        <meta name="description" content="Join our AI startup team! We're hiring prompt engineers and AI professionals to build the future of AI education. Join the Neural team and help shape AI learning." />
        <meta name="keywords" content="AI startup jobs, prompt engineering jobs, hiring prompt engineers, Neural team, AI education jobs, artificial intelligence careers, remote AI jobs, AI startup careers" />
        <meta name="author" content="Neural" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Open Graph */}
        <meta property="og:title" content="AI Startup Jobs | Prompt Engineering Jobs | Neural Team" />
        <meta property="og:description" content="Join our AI startup team! We're hiring prompt engineers and AI professionals to build the future of AI education. Join the Neural team and help shape AI learning." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://neuralapp.com/hiring" />
        <meta property="og:site_name" content="Neural" />
        <meta property="og:image" content="https://neuralapp.com/logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Startup Jobs | Prompt Engineering Jobs | Neural Team" />
        <meta name="twitter:description" content="Join our AI startup team! We're hiring prompt engineers and AI professionals to build the future of AI education. Join the Neural team and help shape AI learning." />
        <meta name="twitter:image" content="https://neuralapp.com/logo.png" />
        <meta name="twitter:site" content="@neuralapp" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://neuralapp.com/hiring" />
        
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                Join the Neural AI Team
              </h1>
            </FadeInText>
            <FadeInText delay={0.2}>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We're building the future of AI education and prompt engineering. Join our team of passionate developers, designers, and marketers in this AI startup.
              </p>
            </FadeInText>
          </div>

          {/* Compensation Structure */}
          <FadeInText delay={0.4}>
            <div className="mb-16" aria-labelledby="compensation-heading">
              <Card className="bg-gradient-to-r from-orange-500/10 to-red-600/10 backdrop-blur-sm border-orange-500/20">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <GlowText>
                      <h2 id="compensation-heading" className="text-3xl font-bold mb-4 text-orange-400">💰 Compensation Structure for AI Startup Jobs</h2>
                    </GlowText>
                    <p className="text-gray-300 text-lg">
                      Choose the payment model that works best for you as a prompt engineering professional
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-2xl">
                          <Icon icon="mdi:cash" className="text-3xl text-blue-400" aria-hidden="true" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-blue-400">Fixed Price</h3>
                        <p className="text-gray-300 mb-4">
                          One-time payment upon successful MVP completion and launch, no ownership after.
                        </p>
                        <div className="text-2xl font-bold text-blue-400">$X,XXX USD</div>
                        <p className="text-sm text-gray-400 mt-2">Negotiable based on role & experience</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center text-2xl">
                          <Icon icon="mdi:chart-line" className="text-3xl text-green-400" aria-hidden="true" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-green-400">Revenue Share</h3>
                        <p className="text-gray-300 mb-4">
                          Percentage of company revenue for one year, one year only.
                        </p>
                        <div className="text-2xl font-bold text-green-400">4% - 8%</div>
                        <p className="text-sm text-gray-400 mt-2">Based on contribution & role</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6 text-center">
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <Icon icon="mdi:alert" className="text-2xl text-yellow-400" aria-hidden="true" />
                      <h3 className="text-xl font-bold text-yellow-400">Important Notice for AI Startup Jobs</h3>
                    </div>
                    <p className="text-gray-300 mb-2">
                      <strong>Payment Schedule:</strong> All compensation will be provided <strong>AFTER</strong> the MVP is successfully launched and operational.
                    </p>
                    <p className="text-gray-400 text-sm">
                      We're currently in the pre-revenue phase. This is an opportunity to be part of something big from the ground up in the AI education space.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </FadeInText>

          {/* Team Section */}
          <FadeInText delay={0.6}>
            <div className="mb-16" aria-labelledby="team-heading">
              <div className="text-center mb-8">
                <GlowText>
                  <h2 id="team-heading" className="text-3xl font-bold text-white">Meet the Neural AI Team</h2>
                </GlowText>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {teamData.map((member, index) => (
                  <FadeInText key={member.id} delay={0.8 + index * 0.2}>
                    <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                      <CardContent className="p-6 text-center">
                        <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center text-3xl">
                          {typeof member.avatar === 'string' && member.avatar.startsWith('/') ? (
                            <img
                              src={member.avatar}
                              alt={`${member.name} - ${member.role} at Neural`}
                              className="w-20 h-20 rounded-full object-cover border-4 border-orange-500 shadow-lg"
                            />
                          ) : (
                            member.avatar
                          )}
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-white">{member.name}</h3>
                        <p className="text-orange-400 font-semibold mb-3">{member.role}</p>
                        <p className="text-gray-300 text-sm">{member.bio}</p>
                      </CardContent>
                    </Card>
                  </FadeInText>
                ))}
              </div>
            </div>
          </FadeInText>

          {/* Open Positions */}
          <FadeInText delay={1.0}>
            <div className="mb-16" aria-labelledby="positions-heading">
              <div className="text-center mb-8">
                <GlowText>
                  <h2 id="positions-heading" className="text-3xl font-bold text-white">Open AI Startup Positions</h2>
                </GlowText>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {jobOpenings.map((job, index) => (
                  <FadeInText key={job.id} delay={1.2 + index * 0.2}>
                    <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <GlowText>
                            <h3 className="text-xl font-bold text-white">{job.title}</h3>
                          </GlowText>
                          <div className="flex gap-2">
                            <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">
                              {job.type}
                            </Badge>
                            <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                              {job.location}
                            </Badge>
                          </div>
                        </div>
                        
                        <p className="text-gray-300 mb-4">{job.description}</p>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2 text-orange-400">Requirements:</h4>
                            <ul className="text-sm text-gray-300 space-y-1">
                              {job.requirements.slice(0, 2).map((req, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <span className="text-orange-400 mt-1">•</span>
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <PulseButton 
                            onClick={() => setSelectedJob(job)}
                            className="w-full text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black"
                            aria-label={`View details and apply for ${job.title} position`}
                          >
                            View Details & Apply
                          </PulseButton>
                        </div>
                      </CardContent>
                    </Card>
                  </FadeInText>
                ))}
              </div>
            </div>
          </FadeInText>

          {/* Why Join Us */}
          <FadeInText delay={1.6}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" aria-labelledby="benefits-heading">
              <h2 id="benefits-heading" className="sr-only">Benefits of Joining Neural AI Team</h2>
              {[
                { icon: <Icon icon="mdi:rocket-launch" className="text-2xl" aria-hidden="true" />, title: 'Fast Growth', desc: 'Join a rapidly scaling AI startup with massive potential in prompt engineering education' },
                { icon: <Icon icon="mdi:earth" className="text-2xl" aria-hidden="true" />, title: 'Remote First', desc: 'Work from anywhere with flexible hours and autonomy in our AI startup' },
                { icon: <Icon icon="mdi:lightbulb-on" className="text-2xl" aria-hidden="true" />, title: 'Cutting Edge', desc: 'Work with the latest AI technologies and prompt engineering tools' },
                { icon: <Icon icon="mdi:bullseye-arrow" className="text-2xl" aria-hidden="true" />, title: 'Impact', desc: 'Shape the future of AI education and prompt engineering for millions' }
              ].map((item, index) => (
                <FadeInText key={index} delay={1.8 + index * 0.1}>
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center text-2xl">
                        {item.icon}
                      </div>
                      <GlowText>
                        <h3 className="text-lg font-bold mb-2 text-white">{item.title}</h3>
                      </GlowText>
                      <p className="text-gray-300 text-sm">{item.desc}</p>
                    </CardContent>
                  </Card>
                </FadeInText>
              ))}
            </div>
          </FadeInText>
        </div>
      </div>

      {/* Job Details Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4" role="dialog" aria-labelledby="job-modal-title" aria-describedby="job-modal-description">
          <div className="bg-gray-900/95 backdrop-blur-sm rounded-xl border border-white/20 p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 id="job-modal-title" className="text-2xl font-bold text-white">{selectedJob.title}</h3>
              <div className="flex gap-2">
                <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">
                  {selectedJob.type}
                </Badge>
                <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                  {selectedJob.location}
                </Badge>
              </div>
            </div>
            
            <p id="job-modal-description" className="text-gray-300 mb-6">{selectedJob.description}</p>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3 text-orange-400">Requirements:</h4>
                <ul className="text-gray-300 space-y-2">
                  {selectedJob.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-orange-400 mt-1">•</span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-orange-400">Responsibilities:</h4>
                <ul className="text-gray-300 space-y-2">
                  {selectedJob.responsibilities.map((resp, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-orange-400 mt-1">•</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <Link to="/contact" className="flex-1" aria-label="Apply for this position">
                <PulseButton 
                  className="w-full text-white font-semibold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black"
                >
                  Apply Now
                </PulseButton>
              </Link>
              <Button 
                variant="outline"
                onClick={() => setSelectedJob(null)}
                className="border-white/20 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black"
                aria-label="Close job details"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hiring;