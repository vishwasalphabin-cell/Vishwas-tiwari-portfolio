
import React from 'react';
import { Heart, Code, Sparkles } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card border-t border-border py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-blue-400/5"></div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center relative z-10">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <p className="text-2xl font-bold text-gradient mb-2">
              Vishwas<span className="text-primary">.</span>
            </p>
            <p className="text-muted-foreground">
              Data Science Enthusiast & Developer
            </p>
            <div className="flex items-center justify-center md:justify-start mt-2 text-sm text-muted-foreground">
              <Sparkles className="w-4 h-4 mr-1 text-primary" />
              <span>Turning data into insights</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <div className="flex items-center mb-2 text-sm text-muted-foreground">
              <Code className="w-4 h-4 mr-1 text-primary" />
              <span>Developed by</span>
              <span className="font-semibold text-primary ml-1">Vishwas Tiwari</span>
            </div>
            <div className="flex items-center mb-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 mx-1 text-red-500 animate-pulse" />
              <span>and lots of</span>
              <span className="text-primary font-medium ml-1">coffee</span>
            </div>
            <p className="text-xs text-muted-foreground">
              &copy; {currentYear} Vishwas Tiwari. All rights reserved.
            </p>
          </div>
        </div>
        
        {/* Additional footer content */}
        <div className="border-t border-border/50 mt-8 pt-6 text-center relative z-10">
          <p className="text-xs text-muted-foreground">
            "The best way to predict the future is to create it through data-driven decisions."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
