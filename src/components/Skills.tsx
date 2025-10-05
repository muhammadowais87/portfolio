import { Badge } from './ui/badge';
import { useState } from 'react';
import { useInView } from '../hooks/useCountUp';

interface Skill {
  name: string;
  level: number;
  icon: string;
  badge: string;
  years: string;
}

const Skills = () => {
  const [activeTab, setActiveTab] = useState('Frontend');
  const { ref: skillsRef, isInView: skillsInView } = useInView();

  const skillCategories = {
    Frontend: [
      { name: "React.js", level: 95, icon: "🔥", badge: "🔥", years: "3+ years" },
      { name: "Next.js", level: 90, icon: "🔥", badge: "🔥", years: "2+ years" },
      { name: "TypeScript", level: 90, icon: "🔥", badge: "🔥", years: "2+ years" },
      { name: "Tailwind CSS", level: 88, icon: "⭐", badge: "⭐", years: "2+ years" },
      { name: "Flutter", level: 75, icon: "⭐", badge: "⭐", years: "1+ years" },
    ],
    "Backend & Database": [
      { name: "Node.js", level: 85, icon: "🔥", badge: "🔥", years: "2+ years" },
      { name: "Python", level: 90, icon: "🔥", badge: "🔥", years: "3+ years" },
      { name: "PostgreSQL", level: 80, icon: "⭐", badge: "⭐", years: "3+ years" },
      { name: "MongoDB", level: 75, icon: "⭐", badge: "⭐", years: "2+ years" },
      { name: "Firebase", level: 85, icon: "🔥", badge: "🔥", years: "2+ years" },
      { name: "Fast API", level: 80, icon: "⭐", badge: "⭐", years: "3+ years" },
    ],
    "AI/ML": [
      { name: "OpenCV", level: 90, icon: "🔥", badge: "🔥", years: "2+ years" },
      { name: "TensorFlow", level: 75, icon: "⭐", badge: "⭐", years: "1+ years" },
      { name: "PyTorch", level: 70, icon: "⭐", badge: "⭐", years: "1+ years" },
      { name: "Scikit-Learn", level: 80, icon: "⭐", badge: "⭐", years: "2+ years" },
      // { name: "YOLO", level: 85, icon: "🔥", badge: "🔥", years: "1+ years" },
      { name: "NLP", level: 75, icon: "⭐", badge: "⭐", years: "1+ years" },
    ],
    "Tools & Technologies": [
      { name: "Power BI", level: 95, icon: "🔥", badge: "🔥", years: "1+ years" },
      { name: "Git & GitHub", level: 90, icon: "🔥", badge: "🔥", years: "3+ years" },
      { name: "Docker", level: 70, icon: "⭐", badge: "⭐", years: "1+ years" },
      { name: "Azure", level: 65, icon: "💫", badge: "💫", years: "6+ months" },
      { name: "Figma", level: 80, icon: "⭐", badge: "⭐", years: "2+ years" },
      { name: "Pandas", level: 90, icon: "🔥", badge: "🔥", years: "2+ years" },
    ]
  };

  const tabs = Object.keys(skillCategories);

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Skills & <span className="text-gradient">Technologies</span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              A comprehensive showcase of my technical expertise and proficiency across various technologies
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center mb-12">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 mx-2 mb-2 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-hero-accent text-hero-bg'
                    : 'bg-card text-foreground hover:bg-hero-accent/20'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div ref={skillsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories[activeTab as keyof typeof skillCategories].map((skill: Skill, index: number) => (
              <div key={skill.name} className="bg-black/30 backdrop-blur-sm rounded-lg p-6 card-hover border border-hero-accent/10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <div>
                      <h4 className="font-semibold text-lg">{skill.name}</h4>
                      <p className="text-sm text-foreground/60">{skill.years}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gradient">{skill.level}%</div>
                    <div className="text-lg">{skill.badge}</div>
                  </div>
                </div>
                
                <div className="skill-bar">
                  <div 
                    className="skill-progress"
                    style={{ 
                      width: skillsInView ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 100}ms`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          {/* <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg p-6">
              <h3 className="text-xl font-bold text-gradient mb-4">Certifications</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-hero-accent">•</span>
                  GCU Certified Python Developer
                </li>
                <li className="flex items-center gap-2">
                  Udemy Certified Chat-Bot Developer
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-lg p-6">
              <h3 className="text-xl font-bold text-gradient mb-4">Learning Focus</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="border-hero-accent text-hero-accent">
                  AI/ML
                </Badge>
                <Badge variant="outline" className="border-hero-accent text-hero-accent">
                  Web3
                </Badge>
                <Badge variant="outline" className="border-hero-accent text-hero-accent">
                  AI Agents
                </Badge>
                <Badge variant="outline" className="border-hero-accent text-hero-accent">
                  RAG
                </Badge>
              </div>
              <p className="text-sm text-foreground/70">
                Currently expanding knowledge in emerging technologies and modern architecture patterns.
              </p>
            </div>
          </div> */}

          {/* Experience Summary */}
          <div className="mt-12 bg-black/30 backdrop-blur-sm rounded-lg p-8 text-center border border-hero-accent/10">
            <h3 className="text-2xl font-bold text-gradient mb-6">Experience Summary</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold text-hero-accent mb-2">3+</div>
                <p className="text-sm text-foreground/70">years in full-stack development</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-hero-accent mb-2">10+</div>
                <p className="text-sm text-foreground/70">successful projects delivered</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-hero-accent mb-2">Team</div>
                <p className="text-sm text-foreground/70">leadership experience</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-hero-accent mb-2">Agile</div>
                <p className="text-sm text-foreground/70">Scrum methodology expert</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
