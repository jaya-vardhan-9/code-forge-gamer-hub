
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "CI/CD Pipeline Automation",
      description: "Automated deployment pipeline reducing deployment time by 80%",
      tags: ["Jenkins", "Docker", "AWS"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      title: "Infrastructure as Code",
      description: "Terraform templates for scalable cloud infrastructure",
      tags: ["Terraform", "AWS", "Monitoring"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Container Orchestration",
      description: "Kubernetes deployment with automated scaling and monitoring",
      tags: ["Kubernetes", "Helm", "Prometheus"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Monitoring Dashboard",
      description: "Real-time system monitoring with custom alerts",
      tags: ["Grafana", "InfluxDB", "Python"],
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="gaming-badge mb-4">
            Projects
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Built to <span className="text-gaming-green">Scale</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world projects that solve problems and automate workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className={`glass-card group hover:scale-[1.02] transition-all duration-300 ${project.featured ? 'ring-2 ring-gaming-yellow/30' : ''}`}>
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl group-hover:text-gaming-yellow transition-colors">
                    {project.title}
                  </CardTitle>
                  {project.featured && (
                    <Badge className="bg-gaming-yellow/20 text-gaming-yellow border-gaming-yellow/30 text-xs">
                      Featured
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs bg-gaming-blue/10 text-gaming-blue border-gaming-blue/20">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" className="flex-1 group-hover:border-gaming-yellow/50" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 group-hover:border-gaming-blue/50" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-gaming-gradient hover:opacity-90 text-black font-semibold neon-glow" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
