import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Download, Eye, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          {/* Profile Image */}
          <div className="w-48 h-48 mx-auto mb-8 relative">
            {/* Removed decorative circle and profile image */}
          </div>
          
          <Badge variant="secondary" className="mb-6 text-sm px-6 py-3 glass-effect animate-bounce-gentle bg-white/10 backdrop-blur-md border border-white/20">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Data Scientist | ML Enthusiast
            </span>
          </Badge>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-gradient">
            Anurag Tripathi
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            "Transforming raw data into intelligent solutions through cutting-edge machine learning and AI"
          </p>
          
          {/* Social links */}
          <div className="flex justify-center gap-4 mb-12">
            <a
              href="https://github.com/Anutri03"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-effect hover:bg-white/20 border-white/20 flex items-center justify-center h-10 w-10 rounded-full border"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/anurag-tripathi-284934320"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-effect hover:bg-white/20 border-white/20 flex items-center justify-center h-10 w-10 rounded-full border"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:anuragyt4321@gmail.com"
              className="glass-effect hover:bg-white/20 border-white/20 flex items-center justify-center h-10 w-10 rounded-full border"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a
              href="https://drive.google.com/file/d/1wmsjECjexDgQa2MqoSsguFSzfv8Pa3OV/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-6 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
              style={{ textDecoration: 'none' }}
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              View Resume
            </a>
            <Button 
              variant="outline" 
              size="lg"
              className="group border-2 border-white/30 text-white hover:bg-white/10 px-10 py-6 text-lg font-semibold rounded-full glass-effect hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              onClick={() => scrollToSection('projects')}
            >
              <Eye className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              View Projects
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollToSection('about')}
            className="text-white/70 hover:text-white hover:bg-white/10 rounded-full"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
