import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      github: 'https://github.com',
      live: 'https://demo.com',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application built with Next.js and MongoDB. Real-time updates using WebSockets.',
      image: '/api/placeholder/400/250',
      technologies: ['Next.js', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
      github: 'https://github.com',
      live: 'https://demo.com',
      featured: false
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard with location-based forecasts, interactive maps, and data visualization.',
      image: '/api/placeholder/400/250',
      technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'PWA'],
      github: 'https://github.com',
      live: 'https://demo.com',
      featured: false
    },
    {
      title: 'Social Media Analytics',
      description: 'Analytics dashboard for social media metrics with real-time data processing and custom reporting features.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Python', 'FastAPI', 'Redis', 'Docker'],
      github: 'https://github.com',
      live: 'https://demo.com',
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Featured Projects
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            A showcase of some of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`bg-card-bg border-hero-accent/20 card-hover overflow-hidden ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="aspect-video bg-gradient-to-br from-hero-accent/20 to-hero-glow/10 flex items-center justify-center">
                <div className="text-6xl opacity-20">🚀</div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                  {project.featured && (
                    <Badge className="bg-hero-accent text-hero-bg">Featured</Badge>
                  )}
                </div>
                
                <p className="text-foreground/80 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-xs border-hero-accent/30 text-foreground/70"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="flex items-center gap-2"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center gap-2 border-hero-accent/30 text-hero-accent hover:bg-hero-accent hover:text-hero-bg"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-hero-accent text-hero-accent hover:bg-hero-accent hover:text-hero-bg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;