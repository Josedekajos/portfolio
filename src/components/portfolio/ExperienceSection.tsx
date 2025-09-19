import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase, Code, Database, Users } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
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

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hands-on experience across software development, networking, and data collection
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-primary" />

          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const IconComponent = exp.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index} 
                  className={`relative flex ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center animate-slide-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow z-10" />
                  
                  {/* Content card */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-12 pl-20 md:pl-0' : 'md:pl-12 pl-20 md:pr-0'}`}>
                    <Card className="bg-gradient-card border-border/50 card-hover">
                      <CardHeader className="pb-4">
                        <div className="flex items-start gap-4">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <IconComponent className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gradient mb-2">{exp.title}</h3>
                            <p className="text-accent font-semibold">{exp.company}</p>
                            <div className="flex flex-col sm:flex-row gap-2 mt-2 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                <span>{exp.period}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                <span>{exp.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <ul className="space-y-2 mb-4">
                          {exp.description.map((item, idx) => (
                            <li key={idx} className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIdx) => (
                            <Badge 
                              key={skillIdx} 
                              variant="outline" 
                              className="text-xs border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
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