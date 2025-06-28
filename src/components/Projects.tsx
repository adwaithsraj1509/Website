import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A modern, scalable e-commerce solution built with React and Node.js, featuring real-time inventory management and secure payment processing.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'Web Development',
      github: '#',
      live: '#',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.pexels.com/photos/7376/startup-photos.jpg',
      technologies: ['Vue.js', 'Express.js', 'Socket.io', 'PostgreSQL'],
      category: 'Web Development',
      github: '#',
      live: '#',
      featured: true
    },
    {
      title: 'Mobile Fitness Tracker',
      description: 'A React Native mobile app for fitness tracking with workout planning, progress monitoring, and social sharing capabilities.',
      image: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg',
      technologies: ['React Native', 'Firebase', 'Redux', 'AWS'],
      category: 'Mobile Development',
      github: '#',
      live: '#',
      featured: true
    },
    {
      title: 'Data Visualization Dashboard',
      description: 'An interactive dashboard for business analytics with real-time data processing and customizable chart visualizations.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg',
      technologies: ['D3.js', 'Python', 'FastAPI', 'Docker'],
      category: 'Data Science',
      github: '#',
      live: '#',
      featured: false
    },
    {
      title: 'AI Content Generator',
      description: 'A machine learning-powered content generation tool that creates high-quality blog posts and marketing copy.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
      technologies: ['Python', 'TensorFlow', 'Flask', 'OpenAI API'],
      category: 'AI/ML',
      github: '#',
      live: '#',
      featured: false
    },
    {
      title: 'Cryptocurrency Portfolio Tracker',
      description: 'A real-time cryptocurrency portfolio tracking application with price alerts and market analysis features.',
      image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg',
      technologies: ['React', 'Chart.js', 'CoinGecko API', 'WebSocket'],
      category: 'Web Development',
      github: '#',
      live: '#',
      featured: false
    }
  ];

  const categories = ['All', 'Web Development', 'Mobile Development', 'Data Science', 'AI/ML'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore some of my recent work across different technologies and domains
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:shadow-md hover:scale-105'
              }`}
            >
              {category === 'All' && <Filter size={16} />}
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:-translate-y-2 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                  >
                    <Github size={16} className="text-gray-700" />
                  </a>
                  <a
                    href={project.live}
                    className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                  >
                    <ExternalLink size={16} className="text-gray-700" />
                  </a>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs px-2 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-2">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;