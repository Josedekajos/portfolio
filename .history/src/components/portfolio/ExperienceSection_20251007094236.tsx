import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase, Code, Database, Users, Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ExperienceSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const experiences = [
    {
      title: "WordPress Developer",
      company: "Freelance / Various Clients",
      location: "Remote",
      period: "Jan2025 – Present",
      icon: Globe,
      description: [
        "Designed and developed custom WordPress websites for various clients",
        "Implemented responsive themes and custom plugins to meet client requirements",
        "Optimized website performance and SEO for improved user experience",
        "Provided ongoing maintenance and technical support for client websites"
      ],
      skills: ["WordPress", "PHP", "CSS/HTML", "JavaScript", "SEO", "UI/UX Design"],
      link: "https://wordpress.com"
    },
    {
      title: "Lead Developer",
      company: "Academia Virtual Study Group App",
      location: "Team Project",
      period: "Sept 2024 – Feb 2025",
      icon: Code,
      description: [
        "Designed and developed a collaborative web app enabling student study groups",
        "Implemented features such as user authentication, real-time chat, and group management",
        "Coordinated frontend–backend integration within a 5-member team",
        "Tech stack: React.js, Node.js, SQL, Git/GitHub"
      ],
      skills: ["React.js", "Node.js", "SQL", "Team Leadership", "Git/GitHub"]
    },
    {
      title: "Network Intern",
      company: "Telnet Cameroon Co. LTD",
      location: "Buea, Cameroon",
      period: "July 2024 – Sept 2024",
      icon: Database,
      description: [
        "Assisted in installation of CCTV and audio systems",
        "Gained hands-on experience in hardware sales & repairs",
        "Installed and configured operating systems"
      ],
      skills: ["Hardware Installation", "System Configuration", "CCTV Systems", "Technical Support"]
    },
    {
      title: "Field Enumerator",
      company: "National Institute of Statistics",
      location: "Buea, Cameroon",
      period: "July 2024 – Aug 2024",
      icon: Users,
      description: [
        "Conducted field surveys on road infrastructure using Mapit and GPS-enabled devices",
        "Collected, verified, and reported statistical data from different areas of the city",
        "Developed teamwork and communication skills while collaborating with other survey agents"
      ],
      skills: ["Data Collection", "GPS Technology", "Statistical Analysis", "Field Research"]
    },
    {
      title: "Secretariat Worker",
      company: "Cameroon GCE Board",
      location: "Buea, Cameroon",
      period: "June 2024 – July 2024",
      icon: Briefcase,
      description: [
        "Assisted in administrative and secretariat duties within the examination board",
        "Managed documentation, filing, and student examination records",
        "Gained organizational and office management skills in a professional environment"
      ],
      skills: ["Administrative Tasks", "Document Management", "Record Keeping", "Office Management"]
    }
  ];

  // Intersection Observer for pop-up animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardRefs.current.findIndex((ref) => ref === entry.target);
          if (entry.isIntersecting && index !== -1) {
            setVisibleCards((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });

    // Apply 3D tilt effect
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)`;
  };

  const handleMouseLeave = (index: number) => {
    const card = cardRefs.current[index];
    if (card) {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
    }
  };

  return (
    <section id="experience" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="code-text text-muted-foreground">{'// '}</span>
            Professional <span className="neon-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6 shadow-glow" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hands-on experience across software development, networking, and data collection
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-primary opacity-50" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const IconComponent = exp.icon;
              const isEven = index % 2 === 0;
              const isVisible = visibleCards.has(index);
              
              return (
                <div 
                  key={index}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className={`relative flex ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 100}ms`,
                    willChange: 'transform'
                  }}
                  onMouseMove={(e) => handleMouseMove(e, index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  {/* Timeline dot with pulse */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                    <div className="relative">
                      <div className="absolute inset-0 w-4 h-4 bg-primary rounded-full animate-ping opacity-75" />
                      <div className="relative w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow" />
                    </div>
                  </div>
                  
                  {/* Content card */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-12 pl-20 md:pl-0' : 'md:pl-12 pl-20 md:pr-0'}`}>
                    <Card className="bg-gradient-card border-primary/30 relative overflow-hidden group transition-all duration-300">
                      {/* Magic gradient overlay on hover */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        style={{
                          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, hsl(var(--primary) / 0.15), transparent 40%)`
                        }}
                      />
                      
                      <CardHeader className="pb-4 relative z-10">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-primary/20 rounded-lg border border-primary/30 group-hover:shadow-glow transition-all duration-300">
                            <IconComponent className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold neon-text mb-2 group-hover:text-accent transition-colors duration-300">
                              {exp.title}
                            </h3>
                            <p className="text-accent font-semibold code-text">{exp.company}</p>
                            <div className="flex flex-col sm:flex-row gap-2 mt-2 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4 text-primary" />
                                <span>{exp.period}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4 text-accent" />
                                <span>{exp.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0 relative z-10">
                        <ul className="space-y-2 mb-4">
                          {exp.description.map((item, idx) => (
                            <li key={idx} className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2 group-hover:text-foreground transition-colors duration-300">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0 group-hover:shadow-glow" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIdx) => (
                            <Badge 
                              key={skillIdx} 
                              variant="outline" 
                              className="text-xs border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-glow transition-all duration-300"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        {exp.link && (
                          <a 
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-4 text-sm text-primary hover:text-accent transition-colors duration-300 code-text"
                          >
                            <Globe className="w-4 h-4" />
                            View Project
                          </a>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
