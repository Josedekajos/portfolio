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
      {/* Animated background with grid */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 grid-background opacity-30" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/30 rounded-full animate-float blur-2xl" />
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-accent/30 rounded-full animate-float blur-3xl" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary-glow/40 rounded-full animate-float blur-xl" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Code-style greeting */}
          <div className="code-text text-sm md:text-base mb-6 animate-slide-up">
            <span className="text-muted-foreground">{'// '}</span>Welcome to my digital space
          </div>

          {/* Open to Work Badge */}
          <div className="mb-6 animate-slide-up inline-block" style={{ animationDelay: '0.1s' }}>
            <div className="relative group">
              <div className="absolute inset-0 bg-success/20 rounded-full blur-xl animate-pulse" />
              <div className="relative px-6 py-3 bg-success/10 border-2 border-success rounded-full flex items-center gap-3">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
                <span className="text-success font-bold text-sm md:text-base code-text">
                   OPEN TO WORK - Actively Seeking Opportunities
                </span>
              </div>
            </div>
          </div>

          {/* Profile Picture and Name Layout */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            {/* Profile Picture */}
            <div className="flex-shrink-0 relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse" />
              <Avatar className="w-32 h-32 md:w-40 md:h-40 border-4 border-primary glow-effect relative">
                <AvatarImage src={profileImage} alt="Imele Azafa Jose" className="object-cover" />
                <AvatarFallback className="text-2xl font-bold bg-gradient-primary text-primary-foreground">IAJ</AvatarFallback>
              </Avatar>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center md:text-left tracking-tight">
              <span className="neon-text animate-glow">IMELE AZAFA</span>
              <br />
              <span className="text-foreground">JOSE</span>
            </h1>
          </div>

          {/* Subtitle with code style */}
          <div className="text-xl md:text-2xl lg:text-3xl mb-8 animate-slide-up">
            <span className="code-text">const role = </span>
            <span className="text-accent font-semibold">"Software Developer"</span>
            <br />
            <span className="text-muted-foreground">Computer Engineering Student | Tech Enthusiast</span>
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
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-glow px-8 py-6 text-lg font-semibold transition-all duration-300"
              onClick={scrollToContact}
            >
              <span className="code-text">{'> '}</span>Get In Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground hover:shadow-elegant px-8 py-6 text-lg font-semibold transition-all duration-300"
              onClick={scrollToAbout}
            >
              <span className="code-text">{'// '}</span>Explore More
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