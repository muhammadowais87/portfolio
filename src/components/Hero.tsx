import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { useTypewriter } from '../hooks/useTypewriter';

const TeamMember = ({ name, role, skills, linkedin, github }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-hero-accent/30 transition-all duration-300">
      <h3 className="text-xl font-bold text-gradient mb-2">{name}</h3>
      <p className="text-hero-accent font-medium mb-3">{role}</p>
      <div className="mb-4">
        <h4 className="text-foreground/80 text-sm font-semibold mb-2">Skills:</h4>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span key={index} className="px-3 py-1 bg-hero-accent/10 text-hero-accent text-xs rounded-full">
              {skill}
            </span>
          ))}
        </div>
      </div>
      {/* <div className="flex items-center gap-3">
        <a 
          href={linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-1 px-3 py-1 bg-linkedin text-white text-sm rounded-md hover:opacity-90 transition-opacity"
        >
          <Linkedin size={14} />
          LinkedIn
        </a>
        {github && (
          <a 
            href={github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-1 bg-gray-800 text-white text-sm rounded-md hover:opacity-90 transition-opacity"
          >
            <Github size={14} />
            GitHub
          </a>
        )}
      </div> */}
    </div>
  );
};

const Hero = () => {
  const { displayText: titleText } = useTypewriter("Hello, I'm", 100, 500);
  const { displayText: subtitleText } = useTypewriter("Muhammad Owais", 80, 2000);
  const { displayText: taglineText } = useTypewriter("Founder & Lead Developer at NovaSoftCode", 60, 4000);

  const teamMembers = [
    {
      name: "Zarkhman Rasheed",
      role: "Full Stack Developer & System Architect",
      skills: ["Node.js", "Python", "System Design", "Database Architecture", "API Development"],
      linkedin: "https://www.linkedin.com/in/zarkhman-rasheed-2117102b9/",
      github: "https://github.com/ZarkhmanRasheed"
    },
    {
      name: "Saqib Ali",
      role: "Frontend Developer & UX Specialist",
      skills: ["React", "Next.js", "UI/UX Design", "TypeScript", "Tailwind CSS"],
      linkedin: "https://www.linkedin.com/in/saqib-ali-example/",
      github: "https://github.com"
    },
    {
      name: "Muhammad Owais",
      role: "Mobile App Developer",
      skills: ["Flutter", "React Native", "iOS/Android", "Cross-Platform", "Firebase"],
      linkedin: "https://www.linkedin.com/in/muhammad-owais-4624a626b",
      github: "https://github.com/muhammadowais87"
    },
    {
      name: "Jibran Ali",
      role: "Data Analyst & AI Specialist",
      skills: ["Python", "Data Analysis", "Machine Learning", "AI Integration", "DevOps"],
      linkedin: "https://www.linkedin.com/in/jibran-ali-example/",
      github: "https://github.com"
    }
  ];

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-24">
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
        <div className="max-w-4xl mx-auto mb-16">
          <div className="mb-8">
            <p className="text-lg text-hero-accent mb-3 opacity-90 text-glow">
              <span className="typewriter tracking-wider">{titleText}</span>
            </p>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              <span className="heading-gradient animate-pulse-glow">{subtitleText}</span>
            </h1>
            
            {/* <h2 className="text-2xl md:text-3xl font-semibold text-gradient mb-3 tracking-wide">
              <span className="typewriter">{subtitleText}</span>
            </h2> */}
            
            <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              <span className="typewriter">{taglineText}</span>
            </p>
            
            <p className="text-base text-foreground/80 mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '5s', opacity: 0, animationFillMode: 'forwards'}}>
          At NovaSoftCode, we take pride in our dedicated and skilled team of professionals — each bringing unique expertise and passion to every project.
Our mission is to transform complex challenges into seamless digital solutions that empower businesses and enhance user engagement.
We have a collaborative team that builds and delivers complete, high-quality projects tailored to our clients’ needs.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up" style={{animationDelay: '6s', opacity: 0, animationFillMode: 'forwards'}}>
            {/* <Button size="lg" className="glow-effect animate-pulse-glow" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View My Work
            </Button> */}
           
          </div>

          <div className="flex items-center justify-center gap-6 mb-16 animate-fade-in-up" style={{animationDelay: '6.5s', opacity: 0, animationFillMode: 'forwards'}}>
            <a 
              href="https://github.com/muhammadowais87"
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-hero-accent/30 text-hero-accent hover:bg-hero-accent hover:text-hero-bg transition-all duration-300 hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/muhammad-owais-4624a626b"
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-hero-accent/30 text-hero-accent hover:bg-hero-accent hover:text-hero-bg transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            {/* <a 
              href="mailto:novasoftcode@gmail.com"
              className="p-3 rounded-full border border-hero-accent/30 text-hero-accent hover:bg-hero-accent hover:text-hero-bg transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} />
            </a> */}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16 animate-fade-in-up" style={{animationDelay: '7s', opacity: 0, animationFillMode: 'forwards'}}>
          <div className="text-center mb-12">
            <div className="text-3xl font-bold text-gradient mb-4">
              NovaSoftCode Team
            </div>
            <p className="text-foreground/70 max-w-3xl mx-auto">
              We are a dedicated team of skilled professionals, each bringing unique expertise to create innovative, 
              user-centric software solutions. Together, we engineer experiences that transform complex challenges 
              into seamless digital solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                skills={member.skills}
                linkedin={member.linkedin}
                github={member.github}
              />
            ))}
          </div>
        </div>

        <div className="animate-bounce" style={{animationDelay: '8s'}}>
          <ArrowDown className="mx-auto text-hero-accent cursor-pointer" size={32} onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
