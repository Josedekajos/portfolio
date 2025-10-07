import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "josedekajos@gmail.com",
      href: "mailto:josedekajos@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(+237) 658 462 646",
      href: "tel:+237658462646"
    },
    {
      icon: Phone,
      label: "Alternative",
      value: "(+237) 693 077 933",
      href: "tel:+237693077933"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Buea, Cameroon",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="code-text text-muted-foreground">{'// '}</span>
            Get In <span className="neon-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6 shadow-glow" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Let's collaborate on exciting projects and innovative solutions
          </p>
          
          {/* Open to Work Banner */}
          <div className="inline-block">
            <div className="relative group">
              <div className="absolute inset-0 bg-success/30 rounded-full blur-2xl animate-pulse" />
              <div className="relative px-8 py-4 bg-gradient-to-r from-success/20 to-success/10 border-2 border-success rounded-full">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 w-4 h-4 bg-success rounded-full animate-ping" />
                    <div className="relative w-4 h-4 bg-success rounded-full" />
                  </div>
                  <span className="text-success font-bold text-lg code-text">
                     ACTIVELY SEEKING NEW OPPORTUNITIES
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-slide-up">
              <Card className="bg-gradient-card border-border/50 card-hover">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gradient mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    {contactInfo.map((contact, index) => {
                      const IconComponent = contact.icon;
                      return (
                        <div key={index} className="flex items-center gap-4 group">
                          <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                            <IconComponent className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-muted-foreground">{contact.label}</p>
                            <a 
                              href={contact.href}
                              className="font-semibold hover:text-primary transition-colors duration-300"
                            >
                              {contact.value}
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Call to Action */}
              <Card className="bg-gradient-hero border-primary/30 card-hover relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-8 text-center relative z-10">
                  <div className="mb-4 inline-block">
                    <div className="relative">
                      <div className="absolute inset-0 bg-success/30 rounded-full blur-xl animate-pulse" />
                      <div className="relative px-4 py-2 bg-success/20 border border-success rounded-full">
                        <span className="text-success font-bold text-sm code-text flex items-center gap-2">
                          <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                          OPEN TO WORK
                        </span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Work Together?</h3>
                  <p className="text-white/80 mb-6">
                    I'm actively looking for full-time, internship, or freelance opportunities. Let's build something amazing together!
                  </p>
                  <Button 
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90 hover:shadow-glow transition-all duration-300 group"
                    onClick={() => window.location.href = 'mailto:josedekajos@gmail.com'}
                  >
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    <span className="code-text">{'> '}send_message()</span>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Profile Summary */}
            <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Card className="bg-gradient-card border-border/50 card-hover">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gradient-accent mb-6">Why Choose Me?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Full-Stack Expertise</h4>
                        <p className="text-sm text-muted-foreground">Experienced in React.js, Node.js, and database management</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Team Leadership</h4>
                        <p className="text-sm text-muted-foreground">Proven experience leading development teams and coordinating projects</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Continuous Learning</h4>
                        <p className="text-sm text-muted-foreground">Multiple certifications and always staying updated with latest technologies</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Multilingual</h4>
                        <p className="text-sm text-muted-foreground">Excellent communication in both English and French</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Current Status */}
              <Card className="bg-gradient-card border-primary/30 card-hover">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold neon-text mb-6">
                    <span className="code-text text-muted-foreground text-lg">{'// '}</span>
                    Current Status
                  </h3>
                  <div className="space-y-4">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-success/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative flex items-center justify-between p-4 bg-success/10 rounded-lg border-2 border-success/30 group-hover:border-success/50 transition-all duration-300">
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <div className="absolute inset-0 w-3 h-3 bg-success rounded-full animate-ping" />
                            <div className="relative w-3 h-3 bg-success rounded-full" />
                          </div>
                          <span className="font-bold text-success code-text">OPEN TO WORK</span>
                        </div>
                        <span className="text-xs text-success/80 code-text">status: available</span>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground space-y-3 p-4 bg-muted/30 rounded-lg border border-border/50">
                      <p className="flex items-start gap-2">
                        <span className="text-primary mt-1">▸</span>
                        <span>Currently pursuing B.Eng. in Computer Engineering at University of Buea</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-accent mt-1">▸</span>
                        <span className="font-semibold text-foreground">Actively seeking: Full-time positions, Internships, Freelance projects</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-primary mt-1">▸</span>
                        <span>Available for collaboration and remote opportunities worldwide</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;