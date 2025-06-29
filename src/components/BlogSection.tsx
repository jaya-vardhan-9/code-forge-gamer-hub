
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Clock } from "lucide-react";

export function BlogSection() {
  const blogPosts = [
    {
      title: "From Zero to DevOps: My Journey",
      excerpt: "How I transitioned from fresh graduate to DevOps enthusiast, with practical tips and resources.",
      date: "2024-12-15",
      readTime: "5 min",
      tags: ["Career", "Learning"],
      featured: true
    },
    {
      title: "Docker vs Podman: Beginner's View",
      excerpt: "Container technologies compared from a student's perspective with real examples.",
      date: "2024-12-10",
      readTime: "4 min",
      tags: ["Containers", "Tools"]
    },
    {
      title: "CI/CD Pipelines Like Game Levels",
      excerpt: "How gaming logic helped me understand continuous integration and deployment.",
      date: "2024-12-05",
      readTime: "6 min",
      tags: ["CI/CD", "Gaming"]
    },
    {
      title: "Kubernetes Networking Made Simple",
      excerpt: "Breaking down complex K8s networking using easy-to-understand analogies.",
      date: "2024-11-28",
      readTime: "7 min",
      tags: ["Kubernetes", "Networking"]
    }
  ];

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="gaming-badge mb-4">
            📝 Blog
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Sharing the <span className="text-primary">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From DevOps concepts to gaming-inspired tutorials. 
            Join me as I document what I learn and build.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card key={index} className={`tech-card group hover:scale-[1.02] transition-all duration-300 ${post.featured ? 'ring-2 ring-primary/20' : ''}`}>
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  {post.featured && (
                    <Badge className="bg-primary/20 text-primary border-primary/30 text-xs">
                      Featured
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric'
                    })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      #{tag}
                    </Badge>
                  ))}
                </div>

                <Button variant="outline" size="sm" className="w-full group-hover:border-primary/50">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-4">
          <Button className="bg-cyber-gradient hover:opacity-90 text-white" asChild>
            <a href="https://hashnode.com" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-5 w-5" />
              Visit My Blog
            </a>
          </Button>
          <p className="text-sm text-muted-foreground">
            New posts weekly • DevOps insights and career tips
          </p>
        </div>
      </div>
    </section>
  );
}
