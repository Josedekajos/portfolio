import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ArrowDown, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 hero-gradient opacity-95" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float blur-xl" />
        <div className="absolute bottom-32 right-20 w-32 h-32 bg-accent/20 rounded-full animate-float blur-2xl" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary-glow/30 rounded-full animate-float blur-lg" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Picture and Name Layout */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            {/* Profile Picture */}
            <div className="flex-shrink-0">
              <Avatar className="w-32 h-32 md:w-40 md:h-40 border-4 border-accent glow-effect">
                <AvatarImage src={profileImage} alt="Imele Azafa Jose" className="object-cover" />
                <AvatarFallback className="text-2xl font-bold bg-gradient-primary text-primary-foreground">IAJ</AvatarFallback>
              </Avatar>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center md:text-left">
              <span className="text-gradient animate-glow">IMELE AZAFA</span>
              <br />
              <span className="text-foreground">JOSE</span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 animate-slide-up">
            <span className="text-gradient-accent font-semibold">Computer Engineering Student</span>
            <br />
            <span>Software Developer & Tech Enthusiast</span>
          </div>

          {/* Location and contact info */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-muted-foreground animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-accent" />
              <span>Buea, Cameroon</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-accent" />
              <span>josedekajos@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-accent" />
              <span>(+237) 658 578 938</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-effect px-8 py-6 text-lg font-semibold"
              onClick={scrollToContact}
            >
              Get In Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-6 text-lg font-semibold"
              onClick={scrollToAbout}
            >
              Learn More
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={scrollToAbout}
              className="text-muted-foreground hover:text-accent"
            >
              <ArrowDown className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;