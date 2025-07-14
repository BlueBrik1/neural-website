import React, { useState } from 'react';
import { skillsData } from '../data/mockData';

const SkillNode = ({ skill, isConnected = false, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative cursor-pointer transform transition-all duration-300 hover:scale-110"
      style={{
        left: `${skill.position.x}px`,
        top: `${skill.position.y}px`,
        position: 'absolute'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(skill)}
    >
      <div
        className={`
          w-16 h-16 rounded-full flex items-center justify-center text-2xl
          backdrop-blur-sm border-2 transition-all duration-300
          ${skill.completed 
            ? 'bg-green-500/20 border-green-400 shadow-lg shadow-green-500/50' 
            : skill.progress > 0 
              ? 'bg-yellow-500/20 border-yellow-400 shadow-lg shadow-yellow-500/50'
              : 'bg-gray-500/20 border-gray-400 shadow-lg shadow-gray-500/50'
          }
          ${isHovered ? 'shadow-2xl scale-110' : ''}
        `}
      >
        <span className="filter drop-shadow-lg">{skill.icon}</span>
      </div>
      
      {/* Progress ring */}
      {skill.progress > 0 && (
        <svg className="absolute inset-0 w-16 h-16 transform -rotate-90">
          <circle
            cx="32"
            cy="32"
            r="28"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="2"
            fill="none"
          />
          <circle
            cx="32"
            cy="32"
            r="28"
            stroke={skill.completed ? "#10b981" : "#eab308"}
            strokeWidth="2"
            fill="none"
            strokeDasharray={`${2 * Math.PI * 28}`}
            strokeDashoffset={`${2 * Math.PI * 28 * (1 - skill.progress / 100)}`}
            className="transition-all duration-500"
          />
        </svg>
      )}

      {/* Tooltip */}
      {isHovered && (
        <div className="absolute left-20 top-0 w-64 p-4 bg-black/80 backdrop-blur-sm rounded-lg border border-white/20 z-10">
          <h4 className="font-bold text-white mb-2">{skill.title}</h4>
          <p className="text-gray-300 text-sm mb-2">{skill.description}</p>
          <div className="flex items-center gap-2">
            <div className="flex-1 bg-gray-700 rounded-full h-2">
              <div 
                className={`h-2 rounded-full transition-all duration-500 ${
                  skill.completed ? 'bg-green-500' : 'bg-yellow-500'
                }`}
                style={{ width: `${skill.progress}%` }}
              />
            </div>
            <span className="text-white text-sm">{skill.progress}%</span>
          </div>
        </div>
      )}
    </div>
  );
};

const SkillTree = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const allSkills = [...skillsData.beginner, ...skillsData.intermediate, ...skillsData.advanced];

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
  };

  const renderConnections = () => {
    const connections = [];
    
    // Connect beginner to intermediate
    skillsData.beginner.forEach(beginnerSkill => {
      skillsData.intermediate.forEach(intermediateSkill => {
        connections.push(
          <line
            key={`${beginnerSkill.id}-${intermediateSkill.id}`}
            x1={beginnerSkill.position.x + 32}
            y1={beginnerSkill.position.y + 32}
            x2={intermediateSkill.position.x + 32}
            y2={intermediateSkill.position.y + 32}
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="2"
            strokeDasharray="5,5"
            className="animate-pulse"
          />
        );
      });
    });

    // Connect intermediate to advanced
    skillsData.intermediate.forEach(intermediateSkill => {
      skillsData.advanced.forEach(advancedSkill => {
        connections.push(
          <line
            key={`${intermediateSkill.id}-${advancedSkill.id}`}
            x1={intermediateSkill.position.x + 32}
            y1={intermediateSkill.position.y + 32}
            x2={advancedSkill.position.x + 32}
            y2={advancedSkill.position.y + 32}
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="2"
            strokeDasharray="5,5"
            className="animate-pulse"
          />
        );
      });
    });

    return connections;
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative h-96 bg-gradient-to-br from-black/20 to-gray-900/20 rounded-xl backdrop-blur-sm border border-white/10 overflow-hidden">
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full">
          {renderConnections()}
        </svg>

        {/* Skill nodes */}
        {allSkills.map(skill => (
          <SkillNode
            key={skill.id}
            skill={skill}
            onClick={handleSkillClick}
          />
        ))}

        {/* Level labels */}
        <div className="absolute top-4 left-4 text-white/60 text-sm">
          <div className="mb-2">🥉 Beginner</div>
          <div className="mb-2" style={{ marginTop: '80px' }}>🥈 Intermediate</div>
          <div style={{ marginTop: '80px' }}>🥇 Advanced</div>
        </div>
      </div>

      {/* Skill details modal */}
      {selectedSkill && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900/90 backdrop-blur-sm rounded-xl border border-white/20 p-6 max-w-md w-full">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-4xl">{selectedSkill.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-white">{selectedSkill.title}</h3>
                <p className="text-gray-400">Level {selectedSkill.level}</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-4">{selectedSkill.description}</p>
            
            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-400 mb-1">
                <span>Progress</span>
                <span>{selectedSkill.progress}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-500 ${
                    selectedSkill.completed ? 'bg-green-500' : 'bg-yellow-500'
                  }`}
                  style={{ width: `${selectedSkill.progress}%` }}
                />
              </div>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
                {selectedSkill.completed ? 'Review' : 'Continue'}
              </button>
              <button 
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                onClick={() => setSelectedSkill(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillTree;