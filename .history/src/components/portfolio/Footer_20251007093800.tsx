import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
            <span>Made </span>
            <Heart className="w-4 h-4 text-accent fill-accent animate-pulse" />
            <span>by Jose Imele Azafa</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {currentYear} Jose Imele Azafa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;