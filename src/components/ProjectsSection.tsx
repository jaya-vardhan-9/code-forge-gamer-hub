
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "Cloud Infrastructure Automation",
      description: "Automated AWS deployment with monitoring and scaling capabilities.",
      type: "DevOps",
      status: "Live",
      github: "#",
      demo: "#"
    },
    {
      title: "CI/CD Pipeline Dashboard",
      description: "Real-time monitoring for deployment pipelines with notifications.",
      type: "Full Stack",
      status: "Complete",
      github: "#",
      demo: "#"
    },
    {
      title: "Gaming Performance Monitor",
      description: "System monitoring tool optimized for gaming setups.",
      type: "Desktop App",
      status: "Personal",
      github: "#",
      demo: "#"
    },
    {
      title: "Container Orchestration Platform",
      description: "Microservices platform with service mesh and observability.",
      type: "DevOps",
      status: "Building",
      github: "#",
      demo: "#"
    },
    {
      title: "DevOps Learning Platform",
      description: "Interactive learning platform with gamified progress tracking.",
      type: "EdTech",
      status: "Beta",
      github: "#",
      demo: "#"
    },
    {
      title: "Multi-Cloud Cost Optimizer",
      description: "Automated cost optimization with ML-powered predictions.",
      type: "FinOps",
      status: "Concept",
      github: "#",
      demo: "#"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live": return "bg-green-500/20 text-green-300 border-green-500/30";
      case "Complete": return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      case "Building": return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
      case "Beta": return "bg-purple-500/20 text-purple-300 border-purple-500/30";
      case "Personal": return "bg-pink-500/20 text-pink-300 border-pink-500/30";
      default: return "bg-gray-500/20 text-gray-300 border-gray-500/30";
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="gaming-badge mb-4">
            🚀 Projects
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Building the <span className="text-primary">Future</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From automation scripts to full-scale architectures. 
            Here's how I turn ideas into working solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="tech-card group hover:scale-[1.02] transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <Badge className={`text-xs ${getStatusColor(project.status)}`}>
                    {project.status}
                  </Badge>
                </div>
                <Badge variant="outline" className="w-fit text-xs">
                  {project.type}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  {project.description}
                </p>

                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-cyber-gradient hover:opacity-90 text-white" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
