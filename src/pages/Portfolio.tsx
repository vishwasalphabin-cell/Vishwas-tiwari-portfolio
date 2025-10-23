import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Brain, BarChart3, Globe, Database, TrendingUp, Mail, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  icon: React.ReactNode;
  category: string;
  accuracy?: string;
  dataset?: string;
  iterations?: string;
}

const ProjectCard = ({ title, description, tags, imageUrl, icon, category, accuracy, dataset, iterations }: ProjectCardProps) => {
  return (
    <Card className="card-hover overflow-hidden bg-card border border-border h-full flex flex-col relative group">
      <div className="absolute top-4 right-4 z-10">
        <div className="bg-primary/10 backdrop-blur-sm p-2 rounded-full border border-primary/20">
          {icon}
        </div>
      </div>
      
      <div className="relative h-52 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Badge variant="secondary" className="bg-black/50 text-white border-white/20">
            {category}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-6 flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-gradient">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        
        {/* Performance metrics for ML projects */}
        {(accuracy || dataset || iterations) && (
          <div className="mb-4 p-3 bg-primary/5 rounded-lg border border-primary/20">
            <div className="grid grid-cols-1 gap-2 text-sm">
              {accuracy && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Accuracy:</span>
                  <span className="font-semibold text-primary">{accuracy}</span>
                </div>
              )}
              {dataset && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Dataset:</span>
                  <span className="font-semibold text-primary">{dataset}</span>
                </div>
              )}
               {iterations && (
                 <div className="flex justify-between">
                   <span className="text-muted-foreground">Iterations:</span>
                   <span className="font-semibold text-primary">{iterations}</span>
                 </div>
               )}
            </div>
          </div>
        )}
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="hover:bg-primary/20 transition-colors">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const Portfolio = () => {
  const navigate = useNavigate();

  const machineLearningProjects = [
    {
      title: "Will help you find a computer",
      description: "A machine learning regression model that accurately predicts computer prices based on comprehensive hardware specifications including RAM capacity, GPU model, processor type, brand, storage size, and other technical features. This project involved extensive data preprocessing, feature engineering, and model optimization using multiple regression algorithms. Trained on a massive dataset of 80,000+ computer configurations from various manufacturers and price ranges, the model achieved 83% accuracy in price prediction. The system can help both consumers make informed purchasing decisions and retailers optimize their pricing strategies. Features include real-time price prediction, confidence intervals, and detailed breakdown of how each specification affects the final price.",
      tags: ["Python", "Machine Learning", "Regression", "Scikit-Learn", "Pandas", "NumPy"],
      imageUrl: "Project-Covers/3.1.png",
      icon: <Brain className="w-5 h-5 text-primary" />,
      category: "Machine Learning",
      accuracy: "83%",
      dataset: "80k samples"
    },
    {
      title: "Neural Network: How it works!",
      description: "A comprehensive implementation of a 3-layer neural network built entirely from scratch using only Python, NumPy for mathematical operations, and Pandas for data handling. This project demonstrates deep understanding of neural network fundamentals including forward propagation, backpropagation, gradient descent, and activation functions. The network successfully classifies handwritten digits (0-9) from the MNIST dataset with 85% accuracy after 980 training iterations. Key features include custom implementation of sigmoid activation function, mean squared error loss calculation, and adaptive learning rate optimization. The project showcases advanced mathematical concepts including calculus, linear algebra, and optimization algorithms, making it an excellent demonstration of machine learning theory applied in practice without relying on high-level frameworks.",
      tags: ["Python", "Neural Networks", "NumPy", "Pandas", "Deep Learning", "Calculus", "Linear Algebra", "Machine Learning"],
      imageUrl: "Project-Covers/NNFS.png",
      icon: <Brain className="w-5 h-5 text-blue-400" />,
      category: "Deep Learning",
      accuracy: "85%",
      dataset: "60k samples",
    },
    {
      title: "What's this flower?",
      description: "A machine learning classification model designed to accurately identify flower species based on botanical measurements including petal length, petal width, sepal length, and sepal width. This project demonstrates expertise in feature engineering, data preprocessing, and supervised learning techniques for biological data analysis. The model achieved 93% accuracy using ensemble methods and advanced classification algorithms. Key features include comprehensive data visualization of flower characteristics, feature importance analysis, and cross-validation techniques. The system can classify multiple flower species with high confidence and provides detailed probability scores for each prediction. This project showcases practical application of machine learning in botanical research and environmental studies, making it valuable for researchers, botanists, and educational purposes.",
      tags: ["Python", "Pandas", "Numpy" , "Classification", "Scikit-Learn", "Data Science", "Feature Engineering"],
      imageUrl: "Project-Covers/random forrest.png",
      icon: <Brain className="w-5 h-5 text-green-400" />,
      category: "Classification",
      accuracy: "93%",
      dataset: "20k samples"
    },
    {
      title: "Titanic: Why did they sink?",
      description: "A comprehensive machine learning regression model that predicts passenger survival on the Titanic using demographic information, ticket details, and family relationships. This project demonstrates advanced data analysis skills including missing value imputation, feature engineering, and data visualization. The model analyzes factors such as passenger class, age, gender, fare paid, cabin location, and family size to determine survival probability. Implemented using both traditional machine learning algorithms and deep learning approaches with TensorFlow. The project includes extensive exploratory data analysis with statistical visualizations, correlation analysis, and survival pattern identification. Key features include data preprocessing pipelines, feature selection techniques, handling categorical data and model performance evaluation. This project showcases practical application of machine learning in historical data analysis and provides insights into the factors that influenced survival rates during the tragic event.",
      tags: ["Python", "Pandas", "Numpy" , "Matplotlib", "Machine Learning", "Data Analysis", "TensorFlow"],
      imageUrl: "Project-Covers/titanic.jpg",
      icon: <Brain className="w-5 h-5 text-purple-400" />,
      category: "Machine Learning",
      accuracy: "75-80%",
      dataset: "800 samples"
    }
  ];

  const dataAnalyticsProjects = [
    {
      title: "Super Store's Superb Analytics",
      description: "A comprehensive end-to-end business intelligence analysis of a superstore's extensive billing dataset spanning multiple years and regions. This project involved deep-dive exploration of sales patterns, customer purchasing behavior, product performance metrics, and regional market trends. Utilized advanced statistical analysis techniques including time series analysis, correlation analysis, and customer lifetime value calculations. Key deliverables include identification of top-performing product categories, seasonal sales variations, customer segmentation strategies, and regional performance comparisons. The analysis revealed critical insights for inventory management optimization, pricing strategies, and targeted marketing campaigns. Features comprehensive data visualization dashboards with interactive charts, heatmaps, and trend analysis. The project demonstrates expertise in data cleaning, feature engineering, statistical modeling, and business intelligence reporting, providing actionable recommendations that can drive significant revenue growth and operational efficiency improvements.",
      tags: ["Python", "Data Analytics", "Business Intelligence", "Pandas", "Seaborn", "Statistical Analysis", "Exploratory Data Analysis"],
      imageUrl: "Project-Covers/store.png",
      icon: <TrendingUp className="w-5 h-5 text-green-400" />,
      category: "Business Analytics"
    },
    {
      title: "Mouth watering analytics",
      description: "A comprehensive data analytics project focused on analyzing a café's complete billing dataset to extract actionable business insights and optimize operations. This project involved detailed examination of menu item performance, customer ordering patterns, peak hours analysis, and revenue optimization opportunities. Key analyses include identification of top-selling menu items, profit margin analysis by category, customer behavior segmentation, and seasonal trend identification. The project features advanced data visualization techniques including interactive dashboards, sales heatmaps, and customer journey mapping. Utilized statistical methods such as correlation analysis, regression modeling, and A/B testing frameworks to validate business hypotheses. The analysis provided specific recommendations for menu optimization, pricing strategies, staff scheduling, and marketing campaigns. This project demonstrates expertise in food service analytics, customer behavior analysis, and data-driven decision making in the hospitality industry.",
      tags: ["Python", "Data Analysis", "Pandas", "Matplotlib", "Business Intelligence", "Seaborn", "Exploratory Data Analysis"],
      imageUrl: "Project-Covers/cafe.png",
      icon: <BarChart3 className="w-5 h-5 text-green-400" />,
      category: "Data Analytics"
    }
  ];

  const webDevelopmentProjects = [
    {
      title: "Whatvever I built, is here",
      description: "A comprehensive, modern portfolio website built with cutting-edge web technologies including React, TypeScript, and Tailwind CSS. This project showcases advanced frontend development skills with responsive design, interactive animations, and optimized performance across all devices. Features include dynamic content management, smooth scrolling navigation, interactive project galleries, and real-time animations. The website demonstrates expertise in modern web development practices including component-based architecture, state management, responsive design principles, and performance optimization techniques. Key features include mobile-first design approach, accessibility compliance, SEO optimization, and cross-browser compatibility. The project also includes advanced UI/UX design elements such as gradient backgrounds, hover effects, loading animations, and interactive elements that enhance user engagement. This portfolio serves as a living demonstration of technical skills and creative design capabilities in modern web development.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Responsive Design", "Modern UI"],
      imageUrl: "Project-Covers/port.webp",
      icon: <Globe className="w-5 h-5 text-purple-400" />,
      category: "Web Development"
    },
    {
      title: "Travel with me",
      description: "A comprehensive travel agency website designed and developed for Happy Holidays, featuring a complete booking and information system. This project showcases full-stack web development skills with responsive design, interactive features, and user-friendly interface. Key features include dynamic tour listings with filtering and search capabilities, interactive image galleries with lightbox functionality, online enquiry forms with validation, real-time availability checking, and integrated booking system. The website demonstrates expertise in frontend technologies including HTML5, CSS3, JavaScript ES6+, and responsive design principles. Additional features include mobile-first design approach, cross-browser compatibility, SEO optimization, and accessibility compliance. The project includes advanced UI/UX elements such as smooth animations, interactive maps, customer testimonials section, and social media integration. This website serves as a complete digital solution for travel agencies, providing customers with an intuitive and engaging booking experience while showcasing destinations effectively.",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "UI/UX"],
      imageUrl: "Project-Covers/travel.jpg",
      icon: <Globe className="w-5 h-5 text-purple-400" />,
      category: "Web Development"
    }
  ];

  const extraProjects = [
    {
      title: "Send emails with ease",
      description: "Email Sender Pro is a comprehensive email automation application built with Python, featuring an intuitive graphical user interface for managing both bulk and individual email campaigns. This project demonstrates expertise in GUI development, email protocols, and automation workflows. Key features include advanced email template management, recipient list segmentation, scheduling capabilities, and real-time progress tracking with detailed analytics. The application supports multiple email providers, HTML and plain text formatting, attachment handling, and personalized email content. Additional capabilities include email validation, bounce handling, delivery status tracking, and comprehensive reporting dashboards. The project showcases advanced Python programming skills including object-oriented design, database integration, threading for concurrent operations, and error handling. This tool is particularly valuable for marketing professionals, small businesses, and organizations that need to manage large-scale email communications efficiently while maintaining deliverability and compliance standards.",
      tags: ["Python", "Email Automation", "GUI", "Bulk Emails", "Progress Tracking"],
      imageUrl: "Project-Covers/Email sender pro.jpg",
      icon: <Mail className="w-5 h-5 text-primary" />,
      category: "Automation"
    },
    {
      title: "AI ChatBot(Using Gemini API)",
      description: "An advanced AI-powered chatbot application built using Google's Gemini API, featuring intelligent conversation capabilities and a modern web interface. This project demonstrates expertise in AI integration, natural language processing, and modern web application development. Key features include real-time conversation handling, context-aware responses, conversation history management, and streaming response capabilities for enhanced user experience. The application features a clean, intuitive Streamlit interface with real-time chat functionality, message threading, and conversation export options. Advanced capabilities include sentiment analysis, response customization, conversation analytics, and multi-turn dialogue management. The project showcases proficiency in API integration, asynchronous programming, data persistence, and user interface design. Additional features include conversation search functionality, response rating system, and integration with external data sources for enhanced context. This chatbot serves as a practical demonstration of modern AI application development and can be adapted for customer service, educational purposes, or general conversational AI applications.",
      tags: ["Python", "AI", "Gemini API", "Streamlit"],
      imageUrl: "Project-Covers/chatbot.avif",
      icon: <Brain className="w-5 h-5 text-blue-400" />,
      category: "Artificial Intelligence"
    }
  ];

  const ProjectSection = ({ title, projects, icon, description }: { title: string, projects: ProjectCardProps[], icon: React.ReactNode, description: string }) => (
    <section className="mb-16">
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-primary/10 p-3 rounded-lg border border-primary/20">
          {icon}
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gradient">{title}</h2>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="flex items-center gap-4 mb-8">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </div>
          
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              Vishwas's Portfolio
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              A comprehensive showcase of my technical expertise across machine learning, data analytics, web development, and innovative projects
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="px-4 py-2 bg-primary/10 border-primary/30 text-primary">
                <Brain className="w-4 h-4 mr-2" />
                Machine Learning
              </Badge>
              <Badge variant="outline" className="px-4 py-2 bg-green-400/10 border-green-400/30 text-green-400">
                <BarChart3 className="w-4 h-4 mr-2" />
                Data Analytics
              </Badge>
              <Badge variant="outline" className="px-4 py-2 bg-purple-400/10 border-purple-400/30 text-purple-400">
                <Globe className="w-4 h-4 mr-2" />
                Web Development
              </Badge>
              <Badge variant="outline" className="px-4 py-2 bg-blue-400/10 border-blue-400/30 text-blue-400">
                <Database className="w-4 h-4 mr-2" />
                Extra Projects
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Sections */}
      <div className="container mx-auto px-4 py-16">
        <ProjectSection
          title="Machine Learning Projects"
          description="Useful Machine learning models and neural networks built from scratch with impressive accuracy rates"
          icon={<Brain className="w-6 h-6 text-primary" />}
          projects={machineLearningProjects}
        />

        <ProjectSection
          title="Data Analytics Projects"
          description="Comprehensive business intelligence and data analysis solutions for real-world problems"
          icon={<BarChart3 className="w-6 h-6 text-green-400" />}
          projects={dataAnalyticsProjects}
        />

        <ProjectSection
          title="Web Development Projects"
          description="Modern, responsive web applications built with cutting-edge technologies"
          icon={<Globe className="w-6 h-6 text-purple-400" />}
          projects={webDevelopmentProjects}
        />

        <ProjectSection
          title="Extra Projects"
          description="Innovative solutions and automation tools that showcase diverse technical skills"
          icon={<Database className="w-6 h-6 text-blue-400" />}
          projects={extraProjects}
        />

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="card-hover bg-card border border-border inline-block">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-gradient mb-4">Interested in Collaboration?</h3>
              <p className="text-muted-foreground mb-6">
                I'm always excited to work on new projects and explore innovative solutions
              </p>
              <Button 
                className="bg-gradient-to-r from-primary to-blue-400 hover:from-primary/90 hover:to-blue-400/90"
                onClick={() => navigate('/#contact')}
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Portfolio;
