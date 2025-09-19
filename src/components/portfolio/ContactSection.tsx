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
      value: "(+237) 658 578 938",
      href: "tel:+237658578938"
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
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's collaborate on exciting projects and innovative solutions
          </p>
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
              <Card className="bg-gradient-hero border-border/50 card-hover">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Work Together?</h3>
                  <p className="text-white/80 mb-6">
                    I'm always interested in new opportunities and exciting projects.
                  </p>
                  <Button 
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90 glow-effect"
                    onClick={() => window.location.href = 'mailto:josedekajos@gmail.com'}
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
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
              <Card className="bg-gradient-card border-border/50 card-hover">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gradient mb-6">Current Status</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg border border-success/20">
                      <span className="font-medium">Available for Projects</span>
                      <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>Currently pursuing B.Eng. in Computer Engineering at University of Buea</p>
                      <p className="mt-2">Open to internships, freelance projects, and collaboration opportunities</p>
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