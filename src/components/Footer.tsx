import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-hero-bg border-t border-hero-accent/20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold text-gradient mb-2">
              Muhammad Owais
            </div>
            <p className="text-foreground/70">
              Building the web, one component at a time.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full text-foreground/70 hover:text-hero-accent hover:bg-hero-accent/10 transition-all duration-300"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full text-foreground/70 hover:text-hero-accent hover:bg-hero-accent/10 transition-all duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:abdullah@example.com"
              className="p-2 rounded-full text-foreground/70 hover:text-hero-accent hover:bg-hero-accent/10 transition-all duration-300"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-hero-accent/20 mt-8 pt-8 text-center">
          <p className="text-foreground/70 flex items-center justify-center gap-2 text-sm">
            Made with <Heart size={16} className="text-red-500" /> by Muhammad Owais
            <span className="mx-2">•</span>
            © 2024 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;