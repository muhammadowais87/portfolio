import { Code, Lightbulb, Users, Zap, ServerCog } from 'lucide-react';
import { useCountUp, useInView } from '../hooks/useCountUp';

const About = () => {
  const { ref: statsRef, isInView: statsInView } = useInView();
  
  const projectCount = useCountUp(10, 2000, 0, statsInView);
  const yearCount = useCountUp(3, 2000, 0, statsInView);
  const techCount = useCountUp(20, 2000, 0, statsInView);

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 heading-gradient">
              About Me
            </h2>
            <p className="text-xl text-foreground/90 max-w-2xl mx-auto text-glow leading-relaxed tracking-wide">
              Passionate full-stack developer with expertise in MERN Stack and React Native
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold mb-6 text-gradient">
                Building Mobile Experiences That Matter
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                I'm Muhammad Owais, a passionate full-stack developer dedicated to creating 
                beautiful, performant web and mobile applications that users love. With expertise in 
                MERN Stack (MongoDB, Express, React, Node.js) and React Native, I bring ideas to life 
                across web and mobile platforms.
              </p>

              <p className="text-foreground/80 leading-relaxed mb-6">
                My focus is on delivering full-stack solutions that don't compromise on 
                quality or user experience. From concept to deployment, I ensure every application 
                is crafted with attention to detail and modern best practices.
              </p>

              <p className="text-foreground/80 leading-relaxed mb-6">
                Using cutting-edge technologies like React, Node.js, Express, MongoDB, React Native, 
                and modern state management solutions, I build scalable and maintainable applications 
                that grow with your business needs.
              </p>

              <p className="text-foreground/80 leading-relaxed">
                Let's collaborate to turn your vision into a stunning mobile experience.
              </p>

            </div>

            <div className="order-1 md:order-2 relative group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border-2 border-hero-accent/20">
                <img 
                  src="/mypic.jpeg" 
                  alt="Muhammad Owais" 
                  className="w-full aspect-square transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-hero-accent/30 to-hero-glow/30 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-center mb-8">My Specialties</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Frontend */}
            <div className="text-center p-6 bg-card rounded-lg card-hover">
              <Code className="w-12 h-12 text-hero-accent mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-3">Frontend Developer</h4>
              <p className="text-foreground/70 text-sm mb-4">
                Creating responsive and interactive user interfaces with modern frameworks
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-2 py-1 bg-hero-accent/20 text-hero-accent rounded text-xs">React</span>
                <span className="px-2 py-1 bg-hero-accent/20 text-hero-accent rounded text-xs">Next.js</span>
                <span className="px-2 py-1 bg-hero-accent/20 text-hero-accent rounded text-xs">TypeScript</span>
                <span className="px-2 py-1 bg-hero-accent/20 text-hero-accent rounded text-xs">Tailwind CSS</span>
              </div>
            </div>

            {/* Backend */}
            <div className="text-center p-6 bg-card rounded-lg card-hover">
              <Lightbulb className="w-12 h-12 text-hero-accent mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-3">Backend Developer</h4>
              <p className="text-foreground/70 text-sm mb-4">
                Building scalable server-side applications and robust APIs
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-2 py-1 bg-hero-accent/20 text-hero-accent rounded text-xs">Node.js</span>
                <span className="px-2 py-1 bg-hero-accent/20 text-hero-accent rounded text-xs">Python</span>
                {/* <span className="px-2 py-1 bg-hero-accent/20 text-hero-accent rounded text-xs">PostgreSQL</span> */}
                <span className="px-2 py-1 bg-hero-accent/20 text-hero-accent rounded text-xs">REST APIs</span>
                <span className="px-2 py-1 bg-hero-accent/20 text-hero-accent rounded text-xs">Fast API</span>
              </div>
            </div>

            {/* Mobile */}
            <div className="text-center p-6 bg-card rounded-lg card-hover">
              <Zap className="w-12 h-12 text-hero-accent mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-3">Mobile Developer</h4>
              <p className="text-foreground/70 text-sm mb-4">
                Developing cross-platform mobile applications
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-2 py-1 bg-hero-accent/20 text-hero-accent rounded text-xs">React Native</span>
                <span className="px-2 py-1 bg-hero-accent/20 text-hero-accent rounded text-xs">iOS</span>
                <span className="px-2 py-1 bg-hero-accent/20 text-hero-accent rounded text-xs">Android</span>
              </div>
            </div>

            {/* DevOps */}
            <div className="text-center p-6 bg-card rounded-lg card-hover">
              <ServerCog className="w-12 h-12 text-hero-accent mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-3">DevOps Engineer</h4>
              <p className="text-foreground/70 text-sm mb-4">
                Automating infrastructure and CI/CD pipelines for efficient delivery
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-2 py-1 bg-hero-accent/20 text-hero-accent rounded text-xs">Docker</span>
                <span className="px-2 py-1 bg-hero-accent/20 text-hero-accent rounded text-xs">Kubernetes</span>
                <span className="px-2 py-1 bg-hero-accent/20 text-hero-accent rounded text-xs">CI/CD</span>
                <span className="px-2 py-1 bg-hero-accent/20 text-hero-accent rounded text-xs">Azure</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="text-center p-6 bg-card rounded-lg card-hover group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-hero-accent/20 to-hero-glow/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="text-4xl font-bold text-gradient mb-2 animate-count-up group-hover:scale-110 transition-transform">
                  {projectCount}+
                </div>
                <div className="text-foreground/70">Projects</div>
              </div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg card-hover group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-hero-accent/20 to-hero-glow/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="text-4xl font-bold text-gradient mb-2 animate-count-up group-hover:scale-110 transition-transform">
                  {yearCount}+
                </div>
                <div className="text-foreground/70">Years</div>
              </div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg card-hover group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-hero-accent/20 to-hero-glow/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="text-4xl font-bold text-gradient mb-2 animate-count-up group-hover:scale-110 transition-transform">
                  {techCount}+
                </div>
                <div className="text-foreground/70">Technologies</div>
              </div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg card-hover group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-hero-accent/20 to-hero-glow/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="text-4xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform">
                  100%
                </div>
                <div className="text-foreground/70">Dedication</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
