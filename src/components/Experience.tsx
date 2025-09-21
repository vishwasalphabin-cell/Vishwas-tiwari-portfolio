import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building2, TrendingUp, Users, Target, Award, Code } from 'lucide-react';

const Experience = () => {
  const experienceData = [
    {
      position: "Data Science Intern",
      company: "Alphabin Technologies",
      period: "August 2025 - Present",
      location: "Onsite",
      type: "Internship",
      status: "Active",
      description: "Working as a Data Science Intern at Alphabin Technology, a service-based testing company specializing in quality assurance and software testing solutions. Gaining hands-on experience in data analysis, machine learning, and statistical modeling while contributing to real-world projects.",
      responsibilities: [
        "Analyzing datasets to extract meaningful insights and patterns",
        "Creating data visualizations and reports for stakeholders",
        "Collaborating with cross-functional teams on data-driven solutions",
        "Working with testing data to improve software quality metrics"
      ],
      technologies: ["Python","Javascript", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Jupyter Notebooks", "SQL", "Excel"],
      achievements: [
        "Contributed in building TestDino, a AI driven software test reporting tool",
        "Created interactive dashboards for real-time data monitoring"
      ],
      companyInfo: {
        industry: "Software Testing & Quality Assurance",
        size: "Mid-size Company",
        focus: "Service-based Testing Solutions",
        description: "Alphabin Technologies is a leading service-based testing company that provides comprehensive quality assurance solutions to clients across various industries. The company specializes in automated testing, performance testing, and quality engineering services."
      }
    }
  ];

  return (
    <section id="experience" className="relative bg-gradient overflow-hidden">
      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400/40 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-cyan-400/20 rounded-full animate-bounce"></div>
      </div>

      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Professional Experience</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Building real-world expertise through hands-on experience in data science and technology solutions
          </p>
        </div>
        
        <div className="mt-12">
          <div className="relative border-l-2 border-gradient-to-b from-primary via-blue-400 to-cyan-400 pl-8 ml-4">
            {experienceData.map((item, index) => (
              <div key={index} className={`mb-16 relative group ${index === 0 ? 'animate-fade-in' : ''}`}>
                <div className="absolute -left-12 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-blue-400 border-4 border-background shadow-lg group-hover:scale-125 transition-transform duration-300 flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-white" />
                </div>
                
                <Card className="card-hover glass-effect relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                  <CardContent className="p-8 relative z-10">
                    {/* Header Section */}
                    <div className="flex flex-wrap justify-between items-start mb-6">
                      <div className="flex-1">
                        <div className="flex items-center mb-3">
                           {/* Company Logo */}
                           <div className="w-12 h-12 mr-4 flex items-center justify-center">
                             <img
                               src="\lovable-uploads\OIP.jpeg"
                               alt="Company Logo"
                               className="w-12 h-12 object-cover rounded-full"
                             />
                           </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gradient mb-1">{item.position}</h3>
                            <div className="flex items-center text-lg font-medium text-foreground mb-1">
                              <Building2 className="w-5 h-5 mr-2 text-primary" />
                              {item.company}
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <MapPin className="w-4 h-4 mr-1" />
                              {item.location}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end space-y-2">
                        <Badge variant={item.status === "Active" ? "default" : "secondary"} className="text-sm">
                          {item.status}
                        </Badge>
                        <div className="flex items-center text-sm bg-gradient-to-r from-primary/20 to-blue-400/20 px-4 py-2 rounded-full border border-primary/30 font-medium">
                          <Calendar className="w-4 h-4 mr-2" />
                          {item.period}
                        </div>
                        
                      </div>
                    </div>
                    
                     {/* Company Information */}
                     <div className="mb-6 p-4 bg-gradient-to-r from-primary/5 to-blue-400/5 rounded-lg border border-primary/20">
                       <h4 className="text-lg font-semibold text-gradient mb-2 flex items-center">
                         <Target className="w-5 h-5 mr-2" />
                         About {item.company}
                       </h4>
                       <p className="text-muted-foreground text-sm mb-2">{item.companyInfo.description}</p>
                       <div className="flex items-center mb-2">
                         <span className="text-sm text-muted-foreground mr-2">Website:</span>
                         <a 
                           href="https://alphabin.co" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="text-primary hover:text-blue-400 transition-colors text-sm font-medium underline"
                         >
                           alphabin.co
                         </a>
                       </div>
                       <div className="flex flex-wrap gap-2 mt-2">
                         <Badge variant="outline" className="text-xs">{item.companyInfo.industry}</Badge>
                         <Badge variant="outline" className="text-xs">{item.companyInfo.size}</Badge>
                         <Badge variant="outline" className="text-xs">{item.companyInfo.focus}</Badge>
                       </div>
                     </div>
                    
                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-6">{item.description}</p>
                    
                    {/* Key Responsibilities */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gradient mb-3 flex items-center">
                        <Users className="w-5 h-5 mr-2" />
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {item.responsibilities.map((responsibility, responsibilityIndex) => (
                          <li key={responsibilityIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Technologies Used */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gradient mb-3 flex items-center">
                        <Code className="w-5 h-5 mr-2" />
                        Technologies & Tools
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-sm">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {/* Achievements */}
                    <div>
                      <h4 className="text-lg font-semibold text-gradient mb-3 flex items-center">
                        <Award className="w-5 h-5 mr-2" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {item.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
