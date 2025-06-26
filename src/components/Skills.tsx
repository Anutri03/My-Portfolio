import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Python", "SQL"],
      icon: "💻"
    },
    {
      title: "ML/AI Libraries",
      skills: ["Scikit-learn", "TensorFlow", "Keras", "XGBoost", "LightGBM"],
      icon: "🤖"
    },
    {
      title: "Data Processing",
      skills: ["Pandas", "NumPy", "OpenCV", "NLTK"],
      icon: "📊"
    },
    {
      title: "Visualization",
      skills: ["Matplotlib", "Seaborn", "Power BI"],
      icon: "📈"
    },
    {
      title: "Web Development",
      skills: ["Flask", "Streamlit", "HTML/CSS", "Gradio"],
      icon: "🌐"
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Jupyter", "VS Code"],
      icon: "🛠️"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Technical Skills</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive expertise across the data science and machine learning stack
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-card-gradient border-gray-700 hover:border-purple-500 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <span className="text-2xl">{category.icon}</span>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="outline" 
                      className="text-gray-300 border-gray-600 hover:border-purple-400 hover:text-purple-300 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
