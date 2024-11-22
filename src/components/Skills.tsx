import React from 'react';
import {
  Code2,
  Database,
  GitBranch,
  Cloud,
  Monitor,
  Terminal,
} from 'lucide-react';

const SkillCategory = ({
  title,
  skills,
  icon: Icon,
}: {
  title: string;
  skills: string[];
  icon: React.ElementType;
}) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center mb-4">
      <Icon className="w-6 h-6 text-blue-600 mr-2" />
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Monitor,
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
    },
    {
      title: 'Backend',
      icon: Database,
      skills: ['Node.js', 'Express', 'Python', 'SQL', 'MongoDB'],
    },
    {
      title: 'Tools',
      icon: Terminal,
      skills: ['Git', 'Docker', 'Terraform'],
    },
    {
      title: 'Other',
      icon: Cloud,
      skills: ['AWS', 'CI/CD', 'Test Automation'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;