import React from 'react';
import { Download, Code2, Palette, Rocket, Users } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Frontend Development', level: 95, icon: Code2 },
    { name: 'UI/UX Design', level: 85, icon: Palette },
    { name: 'Backend Development', level: 90, icon: Rocket },
    { name: 'Team Leadership', level: 80, icon: Users },
  ];

  const technologies = [
    'React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB',
    'AWS', 'Docker', 'GraphQL', 'Tailwind CSS', 'Next.js', 'Express.js'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Section */}
          <div className="space-y-8">
            <div className="relative">
              <div className="w-80 h-80 mx-auto lg:mx-0 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform rotate-6"></div>
                <div className="absolute inset-0 bg-gray-300 rounded-2xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center text-gray-600 text-lg font-medium">
                    Profile Photo
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center lg:text-left">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto lg:mx-0">
                <Download size={18} />
                Download Resume
              </button>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                I'm a passionate full-stack developer with over 5 years of experience creating 
                digital solutions that matter. My journey began with a curiosity about how things work, 
                which led me to discover the perfect blend of creativity and logic in software development.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-8">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or mentoring aspiring developers. I believe in the power of technology to solve 
                real-world problems and create meaningful experiences.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Core Skills</h3>
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center gap-3">
                    <skill.icon size={20} className="text-blue-600" />
                    <span className="font-semibold text-gray-900">{skill.name}</span>
                    <span className="text-gray-600 text-sm ml-auto">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Technologies */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;