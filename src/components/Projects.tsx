import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Fraud Detection System",
      category: "Machine Learning",
      description: "Advanced ML model detecting fraudulent financial transactions with 99.6% accuracy using ensemble methods and real-time processing",
      tech: ["Python", "XGBoost", "Streamlit", "Pandas", "Scikit-learn"],
      gradient: "from-red-500 to-orange-500",
      icon: "🛡️",
      metrics: { accuracy: "99.6%", dataset: "284k transactions" },
      github: "https://github.com/Anutri03/Fraud_detection_ml"
    },
    {
      title: "Brain Tumor Detection",
      category: "Deep Learning",
      description: "CNN-based medical imaging classifier for brain tumor detection from MRI scans with advanced preprocessing pipeline",
      tech: ["TensorFlow", "Keras", "CNN", "Flask", "OpenCV"],
      gradient: "from-blue-500 to-purple-500",
      icon: "🧠",
      metrics: { accuracy: "95%", images: "3k+ MRI scans" },
      github: "https://github.com/Anutri03/Brain_tumor_detection"
    },
    {
      title: "Clothing GAN",
      category: "Deep Learning",
      description: "Developed a GAN model to generate realistic images from random noise using deep convolutional neural networks, exploring advanced GAN architectures and training techniques",
      tech: ["Python", "PyTorch", "DCGAN", "Numpy", "Matplotlib", "Google Colab"],
      gradient: "from-purple-500 to-pink-500",
      icon: "🎨",
      metrics: { accuracy: "98%", images: "25k+ Images" },
      github: "https://github.com/Anutri03/ClothingGAN"
    },
    {
      title: "Customer Churn Prediction",
      category: "Classification",
      description: "Predictive analytics solution identifying at-risk customers with actionable insights for retention strategies",
      tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      gradient: "from-green-500 to-teal-500",
      icon: "📊",
      metrics: { accuracy: "87%", features: "20+ variables" },
      github: "https://github.com/Anutri03/Churn_prediction"
    },
    {
      title: "Twitter Sentiment Analysis",
      category: "NLP",
      description: "Real-time sentiment analysis system processing social media data with advanced text preprocessing and classification",
      tech: ["Python", "NLTK", "Scikit-learn", "TF-IDF"],
      gradient: "from-pink-500 to-rose-500",
      icon: "💭",
      metrics: { accuracy: "89%", tweets: "100k+ processed" }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Innovative solutions showcasing expertise in machine learning, deep learning, and data science
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-gray-700 hover:border-purple-500 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm overflow-hidden relative"
            >
              {/* Gradient overlay */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.gradient}`}></div>
              
              <CardHeader className="relative">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="text-gray-300 border-gray-600 bg-gray-800/50">
                    {project.category}
                  </Badge>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{project.icon}</span>
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.gradient} animate-pulse`}></div>
                  </div>
                </div>
                <CardTitle className="text-xl text-white group-hover:text-purple-300 transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Metrics */}
                <div className="flex gap-4 text-sm">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="flex flex-col items-center p-2 bg-gray-800/50 rounded-lg">
                      <span className="text-purple-400 font-semibold">{value}</span>
                      <span className="text-gray-500 capitalize">{key}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="bg-gray-800/70 text-gray-300 hover:bg-purple-600/20 hover:text-purple-300 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="outline" 
                    className="flex-1 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-colors group/btn"
                    onClick={() => project.github && window.open(project.github, '_blank')}
                  >
                    <Eye className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                    View Details
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="border border-gray-600 hover:border-purple-500 hover:bg-purple-500/10"
                    onClick={() => project.github && window.open(project.github, '_blank')}
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
