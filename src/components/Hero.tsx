import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { useTypewriter } from '../hooks/useTypewriter';

const Hero = () => {
  const { displayText: titleText } = useTypewriter("Hello, I'm", 100, 500);
  const { displayText: subtitleText } = useTypewriter("Muhammad Owais", 80, 2000);
  const { displayText: taglineText } = useTypewriter("Blending software engineering with creativity", 60, 4000);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-20 w-72 h-72 bg-hero-accent/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-hero-glow/3 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-hero-accent/3 rounded-full blur-3xl"></div>
      </div>

      {/* Center Linear Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/10 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-300/8 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-radial from-purple-400/15 via-purple-500/8 to-transparent"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <p className="text-lg text-hero-accent mb-3 opacity-90 text-glow">
              <span className="typewriter tracking-wider">{titleText}</span>
            </p>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              <span className="heading-gradient animate-pulse-glow">{subtitleText}</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-gradient mb-3 tracking-wide">
              <span className="typewriter">{subtitleText}</span>
            </h2>
            
            <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              <span className="typewriter">{taglineText}</span>
            </p>
            
            <p className="text-base text-foreground/80 mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '5s', opacity: 0, animationFillMode: 'forwards'}}>
              Passionate about creating innovative solutions and building scalable applications. I specialize in modern web technologies and Python Development.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up" style={{animationDelay: '6s', opacity: 0, animationFillMode: 'forwards'}}>
            <Button size="lg" className="glow-effect animate-pulse-glow" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="border-hero-accent text-hero-accent hover:bg-hero-accent hover:text-hero-bg">
              Download CV
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 mb-16 animate-fade-in-up" style={{animationDelay: '6.5s', opacity: 0, animationFillMode: 'forwards'}}>
            <a 
              href="https://github.com/Muhammad-Owais" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-hero-accent/30 text-hero-accent hover:bg-hero-accent hover:text-hero-bg transition-all duration-300 hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/muhammad-owais" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-hero-accent/30 text-hero-accent hover:bg-hero-accent hover:text-hero-bg transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:rasheedabdullah317@gmail.com"
              className="p-3 rounded-full border border-hero-accent/30 text-hero-accent hover:bg-hero-accent hover:text-hero-bg transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="animate-bounce" style={{animationDelay: '7s'}}>
            <ArrowDown className="mx-auto text-hero-accent" size={32} onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} />
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-gradient-radial {
          background: radial-gradient(circle at center, var(--tw-gradient-stops));
        }
        
        @keyframes animate-fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: animate-fade-in-up 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;