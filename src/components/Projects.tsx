import React, { useState } from 'react';
import { Github, X } from 'lucide-react';

// Play icon component
const PlayIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z"/>
  </svg>
);

const ProjectCard = ({ project }) => {
  const [showVideo, setShowVideo] = useState(false);

  const handleVideoError = (e) => {
    console.error('Video failed to load:', project.video);
    alert('Video could not be loaded. Please check the file path.');
  };

  const closeModal = () => {
    setShowVideo(false);
  };

  return (
    <>
      <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-hero-accent/30 transition-all duration-300 group">
        {/* Project Image with Video Overlay */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/400x250?text=Project+Image';
            }}
          />
          {project.video && (
            <button
              onClick={() => setShowVideo(true)}
              className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <div className="bg-hero-accent text-white rounded-full p-4 hover:bg-hero-accent/90 transition-colors duration-300">
                <PlayIcon size={24} />
              </div>
            </button>
          )}
          {project.featured && (
            <div className="absolute top-3 right-3">
              <span className="bg-hero-accent text-white px-2 py-1 text-xs rounded-full">
                Featured
              </span>
            </div>
          )}
        </div>

        {/* Project Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gradient mb-2">{project.title}</h3>
          <p className="text-foreground/70 mb-4 text-sm leading-relaxed">{project.description}</p>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-hero-accent/10 text-hero-accent text-xs rounded-full border border-hero-accent/20"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {project.video && (
              <button
                onClick={() => setShowVideo(true)}
                className="flex items-center gap-2 px-4 py-2 bg-hero-accent text-white text-sm rounded-md hover:bg-hero-accent/90 transition-all duration-300"
              >
                <PlayIcon size={16} />
                Watch Demo
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh] relative">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-700 bg-gray-800">
              <h3 className="text-white text-lg font-semibold">{project.title} - Demo</h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-700 rounded-full"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Video Container */}
            <div className="p-4 bg-black">
              <video 
                controls 
                autoPlay 
                muted
                className="w-full h-auto max-h-[70vh] rounded-lg"
                onError={handleVideoError}
              >
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            
            {/* Video Info */}
            <div className="p-4 bg-gray-800 border-t border-gray-700">
              <p className="text-gray-300 text-sm">{project.description}</p>
            </div>
          </div>
          
          {/* Click outside to close */}
          <div 
            className="absolute inset-0 -z-10" 
            onClick={closeModal}
          ></div>
        </div>
      )}
    </>
  );
};

// Example Projects Section Component
const ProjectsSection = () => {
  const projects = [
    {
      title: 'CV Maker App',
      description: 'A simple and user-friendly app that helps you create professional CVs in minutes. Just fill in your personal, educational, and work details, and generate a polished CV instantly.',
      image: '/Resume maker image.jpg',
      technologies: ['React Native', 'Supabase','Tailwind'],
      github: 'https://github.com/yourusername/ecommerce',
      video: '/CV maker.mp4',
      featured: true
    },
    {
      title: 'All Unit Converter',
      description: 'A versatile app that allows you to convert different units like length, weight, temperature, currency, and more. Perfect for daily use as well as professional calculations.',
      image: '/UnitConverter image.png',
      technologies: ['React Native','Supabase','Tailwind'],
      github: 'https://github.com/yourusername/task-app',
      video: '/unitconverter video.mp4',
      featured: false
    },
    {
      title: 'Ielts Speaking Practice App',
      description: 'A complete Quran application that provides recitation, translation, and easy navigation of Surahs and Ayahs. It helps users read, listen, and understand the Quran anytime, anywhere.',
      image: '/ielts speaking image.png',
      technologies: ['React Native', 'Supabase','Tailwind'],
      github: 'https://github.com/yourusername/weather-app',
      video: '/ielts speaking video.mp4',
      featured: false
    },
    {
      title: 'AI Powered First Aid Guidance',
      description: 'A complete Quran application that provides recitation, translation, and easy navigation of Surahs and Ayahs. It helps users read, listen, and understand the Quran anytime, anywhere.',
      image: '/first aid guide image.jpg',
      technologies: ['React Native', 'Supabase','Tailwind'],
      github: 'https://github.com/yourusername/weather-app',
      video: '/AI power video.mp4',
      featured: false
    },
    {
      title: 'Quran App',
      description: 'A complete Quran application that provides recitation, translation, and easy navigation of Surahs and Ayahs. It helps users read, listen, and understand the Quran anytime, anywhere.',
      image: '/Quran App images.jpg',
      technologies: ['React Native', 'Supabase','Tailwind'],
      github: 'https://github.com/yourusername/weather-app',
      video: '/Quran App.mp4',
      featured: false
    },
     {
      title: 'Peima Job Portal',
      description: 'A complete Quran application that provides recitation, translation, and easy navigation of Surahs and Ayahs. It helps users read, listen, and understand the Quran anytime, anywhere.',
      image: '/peima 1.jpg',
      technologies: ['React Native', 'Supabase','Tailwind'],
      github: 'https://github.com/yourusername/weather-app',
      video: '/Peima video.mp4',
      featured: false
    },
    

  ];

  return (
    <section id="projects" className="py-20 bg-hero-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            Featured Projects
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience 
            in full-stack development and modern technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
