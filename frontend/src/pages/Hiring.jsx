import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import ThreeScene from '../components/ThreeScene';
import Navigation from '../components/Navigation';
import { jobOpenings, teamData } from '../data/mockData';

const Hiring = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleApply = (job) => {
    // Mock application
    alert(`Thank you for your interest in the ${job.title} position! We'll review your application and get back to you soon.`);
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <ThreeScene shapes="cubes" count={6} color="#ff6b35" />
      <Navigation />
      
      <div className="relative z-10 pt-24 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Join Neural
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We're building the future of AI education. Join our team of passionate developers, designers, and educators.
            </p>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Meet the Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamData.map((member) => (
                <Card key={member.id} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center text-3xl">
                      {member.avatar}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-orange-400 font-semibold mb-3">{member.role}</p>
                    <p className="text-gray-300 text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Open Positions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Open Positions</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {jobOpenings.map((job) => (
                <Card key={job.id} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold">{job.title}</h3>
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
                      
                      <Button 
                        onClick={() => setSelectedJob(job)}
                        className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300"
                      >
                        View Details & Apply
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Why Join Us */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center text-2xl">
                  🚀
                </div>
                <h3 className="text-lg font-bold mb-2">Fast Growth</h3>
                <p className="text-gray-300 text-sm">Join a rapidly scaling startup with massive potential</p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center text-2xl">
                  🌍
                </div>
                <h3 className="text-lg font-bold mb-2">Remote First</h3>
                <p className="text-gray-300 text-sm">Work from anywhere with flexible hours and autonomy</p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center text-2xl">
                  💡
                </div>
                <h3 className="text-lg font-bold mb-2">Cutting Edge</h3>
                <p className="text-gray-300 text-sm">Work with the latest AI technologies and tools</p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center text-2xl">
                  🎯
                </div>
                <h3 className="text-lg font-bold mb-2">Impact</h3>
                <p className="text-gray-300 text-sm">Shape the future of AI education for millions</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Job Details Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900/95 backdrop-blur-sm rounded-xl border border-white/20 p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">{selectedJob.title}</h3>
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
              <Button 
                onClick={() => handleApply(selectedJob)}
                className="flex-1 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300"
              >
                Apply Now
              </Button>
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