
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, BookOpen, Calendar, MapPin, Star } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor in Computer Applications (BCA)",
      institution: "Bhagwan Mahavir University",
      period: "2023-26",
      grade: "5th Semester",
      cgpa: "7.76",
      location: "Surat, Gujarat",
      details: "Currently pursuing a comprehensive bachelor's degree in Computer Applications with focus on programming fundamentals, data structures, algorithms, and software development methodologies.",
      achievements: [
        "Maintaining strong academic performance with CGPA of 7.76",
        "Active participation in coding competitions and hackathons",
        "Completed core courses in Database Management, Web Development, and Object-Oriented Programming",
        "Working on capstone projects integrating multiple technologies"
      ],
      courses: ["Data Structures", "Database Management", "Web Development", "Object-Oriented Programming", "Computer Networks", "Software Engineering"],
      status: "In Progress"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "St Xavier's High School",
      period: "2021-23",
      grade: "10+2 (PCM)",
      cgpa: "69.78 PR",
      location: "Surat, Gujarat",
      details: "Completed higher secondary education with Physics, Chemistry, and Mathematics as major subjects, building strong foundation in analytical and logical thinking.",
      achievements: [
        "Achieved 69.78 PR in final examinations",
        "Developed strong mathematical and analytical skills",
        "Participated in science exhibitions and competitions",
        "Completed advanced mathematics and physics coursework"
      ],
      courses: ["Physics", "Chemistry", "Mathematics", "English", "Computer Science"],
      status: "Completed"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Sungrace School, Udhna",
      period: "2009-21",
      grade: "10th Standard",
      cgpa: "Distinction",
      location: "Udhna, Surat",
      details: "Completed secondary school education with excellent academic performance, establishing strong foundation in core subjects and developing essential life skills.",
      achievements: [
        "Achieved distinction in final examinations",
        "Active participation in extracurricular activities",
        "Developed leadership and teamwork skills",
        "Strong foundation in English, Mathematics, and Science"
      ],
      courses: ["English", "Mathematics", "Science", "Social Studies", "Hindi", "Computer Applications"],
      status: "Completed"
    }
  ];

  return (
    <section id="education" className="relative bg-gradient overflow-hidden">
      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400/40 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-cyan-400/20 rounded-full animate-bounce"></div>
      </div>

      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Education Journey</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            My academic path has been a continuous journey of learning and growth, 
            building a strong foundation in both theoretical knowledge and practical skills
          </p>
        </div>
        
        <div className="mt-12">
          <div className="relative border-l-2 border-gradient-to-b from-primary via-blue-400 to-cyan-400 pl-8 ml-4">
            {educationData.map((item, index) => (
              <div key={index} className={`mb-16 relative group ${index === 0 ? 'animate-fade-in' : ''}`}>
                <div className="absolute -left-12 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-blue-400 border-4 border-background shadow-lg group-hover:scale-125 transition-transform duration-300 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-white" />
                </div>
                
                <Card className="card-hover glass-effect relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                  <CardContent className="p-8 relative z-10">
                    {/* Header Section */}
                    <div className="flex flex-wrap justify-between items-start mb-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gradient mb-2">{item.degree}</h3>
                        <div className="flex items-center text-lg font-medium text-foreground mb-2">
                          <BookOpen className="w-5 h-5 mr-2 text-primary" />
                          {item.institution}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4 mr-1" />
                          {item.location}
                        </div>
                      </div>
                      <div className="flex flex-col items-end space-y-2">
                        <Badge variant={item.status === "In Progress" ? "default" : "secondary"} className="text-sm">
                          {item.status}
                        </Badge>
                        <div className="flex items-center text-sm bg-gradient-to-r from-primary/20 to-blue-400/20 px-4 py-2 rounded-full border border-primary/30 font-medium">
                          <Calendar className="w-4 h-4 mr-2" />
                          {item.period}
                        </div>
                      </div>
                    </div>
                    
                    {/* Grade and Performance */}
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <div className="flex items-center bg-primary/10 px-4 py-2 rounded-lg">
                        <Star className="w-5 h-5 text-primary mr-2" />
                        <span className="font-semibold text-primary">{item.grade}</span>
                      </div>
                      {item.cgpa && (
                        <div className="flex items-center bg-blue-400/10 px-4 py-2 rounded-lg">
                          <Award className="w-5 h-5 text-blue-400 mr-2" />
                          <span className="font-semibold text-blue-400">{item.cgpa}</span>
                        </div>
                      )}
                    </div>
                    
                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-6">{item.details}</p>
                    
                    {/* Key Courses */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gradient mb-3">Key Courses</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.courses.map((course, courseIndex) => (
                          <Badge key={courseIndex} variant="outline" className="text-sm">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {/* Achievements */}
                    <div>
                      <h4 className="text-lg font-semibold text-gradient mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {item.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
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

export default Education;
