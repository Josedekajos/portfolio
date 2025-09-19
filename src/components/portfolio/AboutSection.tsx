import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Languages, Heart } from "lucide-react";

const AboutSection = () => {
  const interests = [
    "Technology Trends",
    "Problem Solving", 
    "Gaming",
    "Reading",
    "Cinema",
    "Music"
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating innovative solutions through code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Profile Description */}
          <div className="space-y-8 animate-slide-up">
            <Card className="bg-gradient-card border-border/50 card-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gradient">Profile</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Motivated Computer Engineering student specializing in Software Engineering with hands-on experience in web application development, networking, and field data collection. Skilled in React.js, Node.js, and Python, with strong problem-solving abilities and a passion for collaborative software projects.
                </p>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="bg-gradient-card border-border/50 card-hover">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold text-gradient">Education</h3>
                </div>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="font-semibold text-lg">B.Eng. in Computer Engineering</h4>
                    <p className="text-accent font-medium">Software Engineering Specialization</p>
                    <p className="text-muted-foreground">University of Buea (2023 – Present)</p>
                  </div>
                  <div className="border-l-2 border-muted pl-4">
                    <h4 className="font-semibold">GCE Advanced Level</h4>
                    <p className="text-muted-foreground">Bilingual Grammar School Molyko, Buea (2022 – 2023)</p>
                    <Badge variant="secondary" className="mt-1">Honorable</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skills and Interests */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {/* Languages */}
            <Card className="bg-gradient-card border-border/50 card-hover">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Languages className="w-8 h-8 text-accent" />
                  <h3 className="text-2xl font-bold text-gradient-accent">Languages</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">English</span>
                    <Badge className="bg-success text-success-foreground">Excellent</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">French</span>
                    <Badge className="bg-success text-success-foreground">Excellent</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Interests */}
            <Card className="bg-gradient-card border-border/50 card-hover">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="w-8 h-8 text-accent" />
                  <h3 className="text-2xl font-bold text-gradient-accent">Interests</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className="border-accent/50 text-accent hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-gradient-card border-border/50 card-hover">
              <CardContent className="p-8">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-gradient">2+</div>
                    <div className="text-muted-foreground">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gradient-accent">5+</div>
                    <div className="text-muted-foreground">Projects</div>
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

export default AboutSection;