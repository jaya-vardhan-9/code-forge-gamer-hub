
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GamepadIcon, Youtube, PenTool, Coffee, Code, Zap } from "lucide-react";

export function AboutSection() {
  const interests = [
    { name: "Content Creation", icon: Youtube, description: "Tech tutorials and gaming content on YouTube" },
    { name: "Story-Driven Gaming", icon: GamepadIcon, description: "Cyberpunk, RDR2, GTA, Far Cry, Ghost of Tsushima" },
    { name: "Technical Writing", icon: PenTool, description: "DevOps insights and learning experiences" },
  ];

  const values = [
    { name: "Problem Solving", icon: Code, description: "Breaking down complex challenges" },
    { name: "Continuous Learning", icon: Zap, description: "Always exploring new technologies" },
    { name: "Quality Focus", icon: Coffee, description: "Attention to detail in every project" },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="gaming-badge mb-4">
            👨‍💻 About
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Code Meets <span className="text-primary">Creativity</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Fresh DevOps graduate with a passion for automation and storytelling. 
            I solve problems by day and explore virtual worlds by night.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* My Story */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Every system tells a story. My DevOps journey started with a simple goal: 
                make deployment as smooth as loading a saved game.
              </p>
              <p>
                I approach infrastructure like game mechanics - understanding how all the 
                pieces work together to create something reliable and scalable.
              </p>
              <p>
                When not automating workflows, I'm creating content for YouTube, writing 
                technical blogs, or getting lost in immersive game worlds that inspire my work.
              </p>
            </div>
          </div>

          {/* What Drives Me */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">What Drives Me</h3>
            <div className="space-y-4">
              {values.map((value, index) => (
                <Card key={index} className="tech-card">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-lg">
                      <value.icon className="mr-3 h-5 w-5 text-primary" />
                      {value.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Interests */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Beyond Code</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <Card key={index} className="tech-card text-center">
                <CardHeader className="pb-3">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <interest.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{interest.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{interest.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
