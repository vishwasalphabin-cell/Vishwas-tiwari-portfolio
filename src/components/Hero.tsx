import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const handleResumeDownload = async () => {
    try {
      // Download the actual resume PDF
      const response = await fetch('/Vishwas_Tiwari_Resume.pdf');
      if (!response.ok) {
        throw new Error('Failed to fetch resume');
      }
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Vishwas_Tiwari_Resume.pdf';
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      
      // Cleanup
      setTimeout(() => {
        window.URL.revokeObjectURL(url);
        document.body.removeChild(link);
      }, 100);
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback: open in new tab
      window.open('/Vishwas_Tiwari_Resume.pdf', '_blank');
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient overflow-hidden">
      {/* Aurora Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="aurora-bg absolute inset-0 opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/50 to-background/90"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cyan-400/10 rounded-full blur-lg animate-bounce"></div>
      </div>

      <div className="section-container text-center relative z-10">
        <div className="glass-card p-12 max-w-4xl mx-auto">
          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Vishwas Tiwari</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-primary font-semibold mb-4">
            AI Enthusiast & Developer
          </div>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate about transforming data into actionable insights and building 
            innovative solutions with machine learning and analytics.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="group" onClick={handleResumeDownload}>
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download Resume
            </Button>
            <Button variant="outline" size="lg" className="group" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View Projects
              <ArrowDown className="w-5 h-5 ml-2 group-hover:animate-bounce" />
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/Vishhhfr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-secondary/50 hover:bg-primary/20 rounded-full transition-all hover:scale-110"
            >
              <Github className="w-6 h-6 text-primary" />
            </a>
            <a 
              href="https://www.linkedin.com/in/vishwas-tiwari-74893a300" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-secondary/50 hover:bg-blue-400/20 rounded-full transition-all hover:scale-110"
            >
              <Linkedin className="w-6 h-6 text-blue-400" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;