import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-hero-bg border-t border-hero-accent/20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-b border-hero-accent/20 pb-8 mb-8">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold text-gradient mb-2">
              Let's Build Something Amazing Together
            </div>
            <p className="text-foreground/70">
              Have a project in mind? Reach out to our team and let's discuss how we can bring your vision to life.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* <a 
              href="https://github.com/ZarkhmaRasheed" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-foreground/70 hover:text-hero-accent hover:bg-hero-accent/10 transition-all duration-300"
            >
              <Github size={20} />
              GitHub
            </a> */}
            {/* <a 
              href="https://www.linkedin.com/in/zarkhman-rasheed-2117102b9/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-linkedin/20 text-white hover:bg-linkedin/30 transition-all duration-300"
            >
              <Linkedin size={20} />
              Follow Us
            </a> */}
            {/* <a 
              href="novasoftcode@gmail.com"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-hero-accent text-white hover:bg-hero-accent/90 transition-all duration-300"
            >
              <Mail size={20} />
              Contact Us
            </a> */}
          </div>
        </div>

        <div className="text-center">
          <p className="text-foreground/70 flex items-center justify-center gap-2 text-sm">
            Made with <Heart size={16} className="text-red-500 fill-red-500" /> by NovaSoftCode Team
            <span className="mx-2">•</span>
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
