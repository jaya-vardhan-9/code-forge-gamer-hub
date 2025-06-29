
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Server, Cloud, GamepadIcon, Youtube, PenTool } from "lucide-react";

export function AboutSection() {
  const skills = [
    { name: "Docker & Kubernetes", level: 85, icon: Server },
    { name: "AWS/Azure/GCP", level: 80, icon: Cloud },
    { name: "CI/CD Pipelines", level: 90, icon: Code },
    { name: "Infrastructure as Code", level: 75, icon: Server },
    { name: "Monitoring & Logging", level: 80, icon: Code },
    { name: "Linux Systems", level: 85, icon: Server },
  ];

  const interests = [
    { name: "Content Creation", icon: Youtube, description: "Tech tutorials and gaming content" },
    { name: "Story-Driven Gaming", icon: GamepadIcon, description: "GTA, RDR2, Cyberpunk, COD" },
    { name: "Technical Writing", icon: PenTool, description: "DevOps blogs and tutorials" },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="gaming-badge mb-4">
            👨‍💻 About Me
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Bridging Code and <span className="text-primary">Creativity</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            As a 2025 graduate stepping into the DevOps world, I bring fresh perspectives, 
            relentless problem-solving skills, and a passion for automation that matches my 
            dedication to mastering complex gaming narratives.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* My Story */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Just like how I approach story-driven games, I believe every system tells a story. 
                My journey in DevOps started with a simple question: "How can we make deployment 
                as seamless as loading a saved game?"
              </p>
              <p>
                Through my studies and hands-on projects, I've learned that DevOps is more than 
                just tools and processes – it's about creating reliable, scalable systems that 
                empower teams to build amazing things.
              </p>
              <p>
                When I'm not automating infrastructure or writing deployment scripts, you'll find 
                me exploring virtual worlds, creating content for my YouTube channel, or sharing 
                insights through technical blogs.
              </p>
            </div>
          </div>

          {/* Interests */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Beyond Code</h3>
            <div className="space-y-4">
              {interests.map((interest, index) => (
                <Card key={index} className="tech-card">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-lg">
                      <interest.icon className="mr-3 h-5 w-5 text-primary" />
                      {interest.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{interest.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Technical Arsenal</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="tech-card">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center justify-between text-lg">
                    <div className="flex items-center">
                      <skill.icon className="mr-3 h-5 w-5 text-primary" />
                      {skill.name}
                    </div>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Progress value={skill.level} className="h-2" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
