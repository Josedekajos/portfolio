import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
            <span>Made with</span>
           
            <span>by Jose Imele A</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {currentYear} Jose Imele Azafa. All rights reserved.
          </p>
          <div className="mt-2 text-xs text-muted-foreground">
            Built with React, TypeScript, and Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;