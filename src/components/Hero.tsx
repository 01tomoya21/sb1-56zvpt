import React from 'react';
import { Github, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Tomoya Nohara
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            AI Enthusiast & Software Developer
          </p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
            Passionate about AI development and creating intuitive user experiences.
            Currently exploring the intersection of technology and creativity.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
            <a
              href="mailto:shin120121@gmail.com"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;