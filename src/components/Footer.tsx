
import { Terminal, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-2">
            <Terminal className="h-5 w-5 text-primary" />
            <span className="font-mono font-bold">YN.dev</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>and lots of coffee</span>
          </div>

          <div className="text-sm text-muted-foreground">
            © 2024 • Always building, always learning
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-xs text-muted-foreground">
            "The future belongs to those who build it" - and the journey has just begun.
          </p>
        </div>
      </div>
    </footer>
  );
}
