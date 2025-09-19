import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Wrench, Database, Award } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "JavaScript", level: 85 },
        { name: "Python", level: 80 },
        { name: "C/C++", level: 75 },
        { name: "Java", level: 70 },
        { name: "SQL", level: 75 }
      ]
    },
    {
      title: "Frameworks & Tools",
      icon: Wrench,
      skills: [
        { name: "React.js", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "Git/GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "npm", level: 85 }
      ]
    },
    {
      title: "Other Technologies",
      icon: Database,
      skills: [
        { name: "Data Analytics", level: 75 },
        { name: "Project Management", level: 80 },
        { name: "Proteus", level: 70 },
        { name: "GPS Technology", level: 85 },
        { name: "System Configuration", level: 75 }
      ]
    }
  ];

  const certifications = [
    "Python Essentials 1 – CISCO & OpenEDG Python Institute",
    "Python Essentials 2 – CISCO & OpenEDG Python Institute", 
    "Data Analytics Essentials – CISCO",
    "Predictive Project Management – Project Management Institute (KICKOFF)"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technical skills developed through education, projects, and hands-on experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills Categories */}
          <div className="space-y-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card 
                  key={index} 
                  className="bg-gradient-card border-border/50 card-hover animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-gradient">{category.title}</h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          </div>
                          <Progress 
                            value={skill.level} 
                            className="h-2"
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Certifications */}
          <div className="space-y-8">
            <Card className="bg-gradient-card border-border/50 card-hover animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-gradient-accent">Certifications</h3>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div 
                      key={index} 
                      className="p-4 bg-muted/50 rounded-lg border border-border/30 hover:border-accent/50 transition-colors duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <p className="text-sm leading-relaxed">{cert}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Key Strengths */}
            <Card className="bg-gradient-card border-border/50 card-hover animate-slide-up" style={{ animationDelay: '0.8s' }}>
              <CardHeader>
                <h3 className="text-xl font-bold text-gradient-accent">Key Strengths</h3>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="font-medium">Full-Stack Development</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-accent/5 rounded-lg">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="font-medium">Team Leadership</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-success/5 rounded-lg">
                    <div className="w-2 h-2 bg-success rounded-full" />
                    <span className="font-medium">Problem Solving</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="font-medium">Project Coordination</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;