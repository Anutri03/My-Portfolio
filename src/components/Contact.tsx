import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Contact = () => {
  const education = {
    degree: "Bachelor of Computer Applications (BCA)",
    specialization: "Data Science & Artificial Intelligence",
    institution: "Babu Banarasi Das University, Lucknow",
    duration: "2021 – 2024",
    highlights: [
      "Final Year Project: Brain Tumor Detection using Deep Learning",
      "Covered topics like ML, DL, Python, Data Structures, AI, Cloud Computing"
    ]
  };

  const certifications = [
    {
      title: "Artificial Intelligence Foundation",
      issuer: "Digipodium, Lucknow",
      year: "2025",
      grade: "Outstanding (Grade O)",
      details: "Completed hands-on training in Machine Learning, Deep Learning, and Python with multiple projects including Brain Tumor Detection."
    },
    {
      title: "Certified Program in Data Science and Artificial Intelligence",
      issuer: "Boston Institute of Analytics (BIA)",
      year: "2025",
      details: "Completed capstone project on Fraud Detection; covered EDA, Feature Engineering, Model Deployment, and Business Impact."
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Let's Connect</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to discuss data science opportunities and innovative projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <Card className="bg-card-gradient border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col space-y-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-colors justify-start"
                  onClick={() => window.open('mailto:anuragyt4321@gmail.com')}
                >
                  📧 Email
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-colors justify-start"
                  onClick={() => window.open('https://github.com/Anutri03', '_blank')}
                >
                  💻 GitHub
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-colors justify-start"
                  onClick={() => window.open('https://www.linkedin.com/in/anurag-tripathi-284934320', '_blank')}
                >
                  🔗 LinkedIn
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="bg-card-gradient border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-2">
                🎓 Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold text-purple-400 mb-2">{education.degree}</h3>
              <p className="text-gray-300 mb-1">Specialization: {education.specialization}</p>
              <p className="text-gray-400 mb-2">Institution: {education.institution}</p>
              <Badge variant="secondary" className="mb-4">{education.duration}</Badge>
              
              <div className="space-y-2">
                <p className="text-sm font-semibold text-white">Key Highlights:</p>
                {education.highlights.map((highlight, index) => (
                  <p key={index} className="text-sm text-gray-300">• {highlight}</p>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center gradient-text">📜 Certifications</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-card-gradient border-gray-700 hover:border-purple-500 transition-colors">
                <CardHeader>
                  <CardTitle className="text-lg text-white">{cert.title}</CardTitle>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-400">{cert.issuer}</p>
                    <Badge variant="secondary">{cert.year}</Badge>
                  </div>
                  {cert.grade && (
                    <Badge variant="outline" className="text-green-400 border-green-400 w-fit">
                      {cert.grade}
                    </Badge>
                  )}
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm leading-relaxed">{cert.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-8 border-t border-gray-800">
          <p className="text-gray-400 mb-4">
            I'm currently looking for exciting opportunities in Data Science, Machine Learning, or AI Engineering
          </p>
          <p className="text-sm text-gray-500">
            © 2024 Anurag Tripathi. Built with passion for data science.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
