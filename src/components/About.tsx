
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Code, Database, Brain, TrendingUp, Award, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative bg-gradient overflow-hidden">
      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400/40 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-cyan-400/20 rounded-full animate-bounce"></div>
      </div>
      
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-10">
          {/* Profile Photo Card */}
          <Card className="card-hover bg-card border border-border lg:col-span-1 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-400/10"></div>
            <CardContent className="p-6 text-center relative z-10">
              <div className="relative mb-4 inline-block">
                <div className="w-32 h-40 mx-auto rounded-xl bg-gradient-to-br from-primary to-blue-400 p-1">
                  <div className="w-full h-full rounded-lg overflow-hidden bg-card">
                    <img 
                      src="C:\Users\Vishwas\Pictures\Saved Pictures\Profile Imag.jpg" 
                      alt="Vishwas Tiwari"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-card animate-pulse"></div>
              </div>
              <h3 className="text-xl font-bold text-gradient mb-2">Vishwas Tiwari</h3>
              <p className="text-primary font-medium mb-4">Data Science Enthusiast</p>
              <div className="flex justify-center space-x-2">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Database className="w-4 h-4 text-primary" />
                </div>
                <div className="p-2 bg-blue-400/10 rounded-full">
                  <Brain className="w-4 h-4 text-blue-400" />
                </div>
                <div className="p-2 bg-cyan-400/10 rounded-full">
                  <TrendingUp className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Main About Content */}
          <Card className="card-hover col-span-1 lg:col-span-2 bg-card border border-border relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Target className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold text-gradient">Personal Profile</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm a passionate data science enthusiast with a strong foundation in analytical thinking and 
                problem-solving. My journey in data science is driven by curiosity and the desire to extract 
                meaningful insights from complex datasets. I specialize in machine learning algorithms, 
                statistical analysis, and data visualization techniques.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Currently pursuing my Bachelor's degree in Computer Applications (BCA) at 
                Bhagwan Mahavir University, I'm actively building expertise in programming, 
                data structures, and advanced analytics. My academic journey is complemented 
                by hands-on projects that demonstrate real-world applications of data science.
              </p>
              
              {/* Key Strengths */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex items-center space-x-3 p-3 bg-primary/5 rounded-lg">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Problem Solver</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-blue-400/5 rounded-lg">
                  <Code className="w-5 h-5 text-blue-400" />
                  <span className="text-sm font-medium">Tech Enthusiast</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Enhanced Personal Details */}
          <Card className="card-hover bg-card border border-border lg:col-span-1 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-blue-400/5"></div>
            <CardContent className="p-6 relative z-10">
              <div className="flex items-center mb-4">
                <Calendar className="w-5 h-5 text-primary mr-2" />
                <h3 className="text-lg font-semibold text-gradient">Contact Info</h3>
              </div>
              
              <div className="space-y-4">
                <div className="group">
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-secondary/30 group-hover:bg-blue-400/10 transition-colors">
                    <div className="bg-blue-400/20 p-2 rounded-full">
                      <Calendar className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Date of Birth</p>
                      <p className="font-medium text-sm">13/04/2005</p>
                    </div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-secondary/30 group-hover:bg-cyan-400/10 transition-colors">
                    <div className="bg-cyan-400/20 p-2 rounded-full">
                      <MapPin className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Phone</p>
                      <p className="font-medium text-sm">+91 7984527433</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Status Indicator */}
              <div className="mt-6 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-400 font-medium">Available for opportunities</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Mission Statement */}
        <Card className="card-hover bg-card border border-border mt-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-blue-400/5"></div>
          <CardContent className="p-8 text-center relative z-10">
            <h3 className="text-2xl font-bold text-gradient mb-4">My Mission</h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              To leverage the power of data science and machine learning to solve real-world problems, 
              drive innovation, and create meaningful impact in the digital landscape. I believe in 
              continuous learning, collaborative growth, and using technology as a force for positive change.
              </p>
            </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
