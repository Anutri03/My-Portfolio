import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Code, Brain, Target } from "lucide-react";

const About = () => {
  const certifications = [
    {
      title: "AI Foundation",
      provider: "Digipodium",
      grade: "Outstanding Grade",
      year: "2025",
      icon: <Award className="h-5 w-5 text-yellow-400" />
    },
    {
      title: "Data Science and Artificial Intelligence",
      provider: "Boston Institute of Analytics",
      year: "2025",
      icon: <Brain className="h-5 w-5 text-purple-400" />
    }
  ];

  const stats = [
    { label: "ML Models Deployed", value: "8+", icon: <Brain className="h-5 w-5 text-purple-400" /> },
    { label: "Accuracy Achieved", value: "99.6%", icon: <Target className="h-5 w-5 text-pink-400" /> }
  ];

  const highlights = [
    { icon: <GraduationCap className="h-5 w-5" />, text: "BCA in Data Science & AI" },
    { icon: <Code className="h-5 w-5" />, text: "Python & ML Expert" },
    { icon: <Brain className="h-5 w-5" />, text: "Deep Learning Specialist" },
    { icon: <Award className="h-5 w-5" />, text: "Outstanding Certifications" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate Data Scientist transforming complex data into actionable insights
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
              <CardContent className="p-6 text-center flex flex-col items-center justify-center">
                <div className="text-3xl mb-2 flex items-center justify-center">{stat.icon}</div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1 space-y-6">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-white mb-6">Hi, I'm Anurag Tripathi</h3>
              
              {/* Highlights */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20">
                    <div className="text-purple-400">{item.icon}</div>
                    <span className="text-sm text-gray-300">{item.text}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                A passionate and curious Data Science and AI enthusiast with a strong foundation in Python, 
                machine learning, and deep learning. I recently completed my Bachelor's in Data Science & 
                Artificial Intelligence from Babu Banarasi Das University.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I specialize in building production-ready ML solutions, from fraud detection systems 
                achieving 99.6% accuracy to brain tumor detection using advanced CNN architectures. 
                My expertise spans the entire ML pipeline - from data preprocessing to model deployment.
              </p>
            </div>

            {/* Certifications */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
                <Award className="h-5 w-5 text-yellow-400" />
                Certifications
              </h4>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <Card key={index} className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-purple-500 transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {cert.icon}
                          <div>
                            <h5 className="font-semibold text-white">{cert.title}</h5>
                            <p className="text-gray-400 text-sm">{cert.provider}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge variant="secondary" className="bg-purple-600/20 text-purple-300">{cert.year}</Badge>
                          {cert.grade && <p className="text-sm text-green-400 mt-1">{cert.grade}</p>}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 relative">
                {/* Decorative rings */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/20 to-blue-400/20 animate-spin-slow"></div>
                <div className="absolute inset-4 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 animate-spin-reverse"></div>
                
                <img 
                  src="/My-Portfolio/myimage.jpg" 
                  alt="Anurag Tripathi" 
                  className="absolute inset-8 w-64 h-64 rounded-full object-cover border-4 border-white/20 shadow-2xl hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
