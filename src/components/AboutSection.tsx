
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GamepadIcon, Youtube, PenTool, Coffee, Code, Zap } from "lucide-react";

export function AboutSection() {
  const interests = [
    { name: "Content Creation", icon: Youtube, description: "Tech tutorials and gaming content" },
    { name: "Story Games", icon: GamepadIcon, description: "Cyberpunk, RDR2, GTA, Far Cry, Ghost of Tsushima" },
    { name: "Writing", icon: PenTool, description: "DevOps insights and experiences" },
  ];

  const values = [
    { name: "Problem Solving", icon: Code, description: "Breaking down complex challenges" },
    { name: "Always Learning", icon: Zap, description: "Exploring new tech daily" },
    { name: "Quality First", icon: Coffee, description: "Attention to every detail" },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="gaming-badge mb-4">
            About
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Code Meets <span className="text-gaming-yellow">Creativity</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Fresh DevOps graduate with a passion for automation and storytelling. 
            I solve problems by day and explore virtual worlds by night.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* My Story */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4 text-gaming-blue">My Journey</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Every system tells a story. My DevOps journey started with a simple goal: 
                make deployment as smooth as loading a saved game.
              </p>
              <p>
                I approach infrastructure like game mechanics - understanding how pieces 
                work together to create something reliable and scalable.
              </p>
              <p>
                When not automating workflows, I create content for YouTube, write 
                blogs, or get lost in immersive game worlds that inspire my work.
              </p>
            </div>
          </div>

          {/* What Drives Me */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4 text-gaming-green">What Drives Me</h3>
            <div className="space-y-4">
              {values.map((value, index) => (
                <Card key={index} className="glass-card hover:border-gaming-yellow/30">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-lg">
                      <value.icon className="mr-3 h-5 w-5 text-gaming-yellow" />
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
          <h3 className="text-2xl font-semibold mb-8 text-center text-gaming-red">Beyond Code</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <Card key={index} className="glass-card text-center hover:border-gaming-blue/30 group">
                <CardHeader className="pb-3">
                  <div className="mx-auto w-16 h-16 bg-gaming-yellow/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-gaming-yellow/20 transition-colors">
                    <interest.icon className="h-8 w-8 text-gaming-yellow" />
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
