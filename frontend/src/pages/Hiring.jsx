import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import ThreeScene from '../components/ThreeScene';
import Navigation from '../components/Navigation';
import { FadeInText, StaggeredText, GlowText, PulseButton } from '../components/AnimatedText';
import { jobOpenings, teamData } from '../data/mockData';

const Hiring = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleApply = (job) => {
    // Mock application
    alert(`Thank you for your interest in the ${job.title} position! We'll review your application and get back to you soon.`);
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <ThreeScene shapes="spheres" count={8} color="#ff6b35" />
      <Navigation />
      
      <div className="relative z-10 pt-24 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <FadeInText>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Join Neural
              </h1>
            </FadeInText>
            <FadeInText delay={0.2}>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We're building the future of AI education. Join our team of passionate developers, designers, and educators.
              </p>
            </FadeInText>
          </div>

          {/* Compensation Structure */}
          <FadeInText delay={0.4}>
            <div className="mb-16">
              <Card className="bg-gradient-to-r from-orange-500/10 to-red-600/10 backdrop-blur-sm border-orange-500/20">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <GlowText>
                      <h2 className="text-3xl font-bold mb-4 text-orange-400">💰 Compensation Structure</h2>
                    </GlowText>
                    <p className="text-gray-300 text-lg">
                      Choose the payment model that works best for you
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-2xl">
                          💵
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-blue-400">Fixed Price</h3>
                        <p className="text-gray-300 mb-4">
                          One-time payment upon successful MVP completion and launch
                        </p>
                        <div className="text-2xl font-bold text-blue-400">$X,XXX</div>
                        <p className="text-sm text-gray-400 mt-2">Negotiable based on role & experience</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center text-2xl">
                          📈
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-green-400">Revenue Share</h3>
                        <p className="text-gray-300 mb-4">
                          Percentage of company revenue for ongoing partnership
                        </p>
                        <div className="text-2xl font-bold text-green-400">X% - XX%</div>
                        <p className="text-sm text-gray-400 mt-2">Based on contribution & role</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6 text-center">
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <span className="text-2xl">⚠️</span>
                      <h3 className="text-xl font-bold text-yellow-400">Important Notice</h3>
                    </div>
                    <p className="text-gray-300 mb-2">
                      <strong>Payment Schedule:</strong> All compensation will be provided <strong>AFTER</strong> the MVP is successfully launched and operational.
                    </p>
                    <p className="text-gray-400 text-sm">
                      We're currently in the pre-revenue phase. This is an opportunity to be part of something big from the ground up.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </FadeInText>

          {/* Team Section */}
          <FadeInText delay={0.6}>
            <div className="mb-16">
              <div className="text-center mb-8">
                <GlowText>
                  <h2 className="text-3xl font-bold text-white">Meet the Team</h2>
                </GlowText>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {teamData.map((member, index) => (
                  <FadeInText key={member.id} delay={0.8 + index * 0.2}>
                    <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                      <CardContent className="p-6 text-center">
                        <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center text-3xl">
                          {member.avatar}
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
            <div className="mb-16">
              <div className="text-center mb-8">
                <GlowText>
                  <h2 className="text-3xl font-bold text-white">Open Positions</h2>
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
                            className="w-full text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: '🚀', title: 'Fast Growth', desc: 'Join a rapidly scaling startup with massive potential' },
                { icon: '🌍', title: 'Remote First', desc: 'Work from anywhere with flexible hours and autonomy' },
                { icon: '💡', title: 'Cutting Edge', desc: 'Work with the latest AI technologies and tools' },
                { icon: '🎯', title: 'Impact', desc: 'Shape the future of AI education for millions' }
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
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900/95 backdrop-blur-sm rounded-xl border border-white/20 p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">{selectedJob.title}</h3>
              <div className="flex gap-2">
                <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">
                  {selectedJob.type}
                </Badge>
                <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                  {selectedJob.location}
                </Badge>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6">{selectedJob.description}</p>
            
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
              <PulseButton 
                onClick={() => handleApply(selectedJob)}
                className="flex-1 text-white font-semibold py-3 px-6 rounded-lg"
              >
                Apply Now
              </PulseButton>
              <Button 
                variant="outline"
                onClick={() => setSelectedJob(null)}
                className="border-white/20 text-white hover:bg-white/10"
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