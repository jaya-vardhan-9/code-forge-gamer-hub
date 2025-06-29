
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Download, Mail } from "lucide-react";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden night-city-bg">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gaming-yellow/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gaming-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gaming-green/5 rounded-full blur-3xl animate-glow-rotate" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-slide-in-up">
          {/* Enhanced Profile Section */}
          <div className="mb-10">
            <div className="w-40 h-40 mx-auto rounded-full bg-gaming-gradient p-1 animate-neon-pulse mb-6">
              <div className="w-full h-full rounded-full liquid-glass flex items-center justify-center text-7xl font-bold text-gaming-yellow">
                YN
              </div>
            </div>
            
            {/* Name Display */}
            <h1 className="text-6xl sm:text-8xl lg:text-9xl font-bold mb-2 gaming-gradient bg-clip-text text-transparent leading-tight">
              Your Name
            </h1>
            
            <div className="flex justify-center mb-8">
              <Badge variant="secondary" className="gaming-badge text-base px-4 py-2">
                DevOps Engineer • Creator • Gamer
              </Badge>
            </div>
          </div>

          {/* Clean Description */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Building the future through automation. 
            When not crafting pipelines, I'm exploring virtual worlds and sharing the journey.
          </p>

          {/* Enhanced Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <Button 
              size="lg" 
              className="bg-gaming-gradient hover:opacity-90 text-black font-semibold px-10 py-4 text-lg neon-glow"
            >
              <Mail className="mr-3 h-6 w-6" />
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-gaming-blue/50 hover:bg-gaming-blue/10 px-10 py-4 text-lg glass-card"
            >
              <Download className="mr-3 h-6 w-6" />
              Download Resume
            </Button>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <ArrowDown className="h-8 w-8 text-gaming-yellow" />
          </div>
        </div>
      </div>
    </section>
  );
}
