import React from 'react';
import { Briefcase, Code, Music } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Code className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-semibold">Expertise</h3>
            </div>
            <p className="text-gray-600">
              Specialized in AI development and machine learning applications.
              Passionate about creating innovative solutions using cutting-edge
              technology.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Briefcase className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-semibold">Experience</h3>
            </div>
            <p className="text-gray-600">
              Led recruitment efforts as Hiring Leader at Geeksalon, playing a key
              role in establishing a programming school from the ground up.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Music className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-semibold">Interests</h3>
            </div>
            <p className="text-gray-600">
              Music production enthusiast with a keen interest in UX design,
              focusing on creating intuitive and seamless user experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;