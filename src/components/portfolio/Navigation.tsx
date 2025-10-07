import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Terminal } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "home", href: "#home" },
    { name: "about", href: "#about" },
    { name: "experience", href: "#experience" },
    { name: "skills", href: "#skills" },
    { name: "contact", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-card/95 backdrop-blur-md shadow-elegant border-b border-primary/20' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo with Terminal Icon */}
            <button 
              onClick={() => scrollToSection("#home")}
              className="flex items-center gap-2 text-xl font-bold neon-text hover:scale-105 transition-transform"
            >
              <Terminal className="w-6 h-6" />
              <span className="code-text">ImeleAzafa._</span>
            </button>

            {/* Open to Work Badge (Desktop) */}
            <div className="hidden lg:flex items-center gap-3 absolute left-1/2 transform -translate-x-1/2">
              <div className="relative group">
                <div className="absolute inset-0 bg-success/20 rounded-full blur-md" />
                <div className="relative px-4 py-1.5 bg-success/10 border border-success/50 rounded-full flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                  <span className="text-success text-xs font-bold code-text">OPEN TO WORK</span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation - Code Style */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 code-text group"
                >
                  <span className="text-accent group-hover:text-primary">{'// '}</span>{item.name}
                </button>
              ))}
              <Button 
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-glow transition-all duration-300 code-text"
                onClick={() => scrollToSection("#contact")}
              >
                {'> '}contact_me()
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-background/95 backdrop-blur-lg" />
          <div className="fixed top-16 left-0 right-0 bg-card border-b border-primary/20 shadow-elegant">
            <div className="container mx-auto px-6 py-6">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-left py-2 text-muted-foreground hover:text-primary transition-colors duration-300 code-text"
                  >
                    <span className="text-accent">{'// '}</span>{item.name}
                  </button>
                ))}
                <Button 
                  className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90 code-text"
                  onClick={() => scrollToSection("#contact")}
                >
                  {'> '}contact_me()
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
