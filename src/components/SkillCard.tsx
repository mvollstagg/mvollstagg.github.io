import React from 'react';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, skills }) => {
  return (
    <div className="p-6 rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold ml-3">{title}</h3>
      </div>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;