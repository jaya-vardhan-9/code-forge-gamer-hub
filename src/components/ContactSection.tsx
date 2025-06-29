
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Youtube, Linkedin, Mail, Send, MapPin } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com",
      description: "Check out my code and projects",
      color: "hover:text-white"
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://youtube.com",
      description: "Tech tutorials and gaming content",
      color: "hover:text-red-500"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com",
      description: "Professional networking and updates",
      color: "hover:text-blue-500"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:your@email.com",
      description: "Get in touch directly",
      color: "hover:text-green-500"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="gaming-badge mb-4">
            🤝 Let's Connect
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Build <span className="text-primary">Something Amazing?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you want to discuss DevOps opportunities, collaborate on projects, 
            or just chat about the latest gaming releases – I'm always up for a good conversation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="tech-card">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Send className="mr-3 h-6 w-6 text-primary" />
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input
                    className="futuristic-input"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    className="futuristic-input"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    className="futuristic-input min-h-[120px]"
                    placeholder="Tell me about your project or just say hi!"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-tech-gradient hover:opacity-90 text-white"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Quick Info */}
            <Card className="tech-card">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <MapPin className="mr-3 h-5 w-5 text-primary" />
                  Quick Info
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">Available for remote work globally</p>
                </div>
                <div>
                  <p className="font-medium">Status</p>
                  <p className="text-muted-foreground">Actively seeking DevOps opportunities</p>
                </div>
                <div>
                  <p className="font-medium">Response Time</p>
                  <p className="text-muted-foreground">Usually within 24 hours</p>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="tech-card">
              <CardHeader>
                <CardTitle className="text-xl">Connect Elsewhere</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className={`h-auto p-4 flex flex-col items-center gap-2 hover:border-primary/50 transition-all ${social.color}`}
                      asChild
                    >
                      <a href={social.url} target="_blank" rel="noopener noreferrer">
                        <social.icon className="h-6 w-6" />
                        <div className="text-center">
                          <p className="font-medium text-sm">{social.name}</p>
                          <p className="text-xs text-muted-foreground">{social.description}</p>
                        </div>
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Fun Fact */}
            <Card className="tech-card border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">🎮</div>
                  <div>
                    <p className="font-medium text-primary">Fun Fact</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      I debug code like I play strategy games – methodically, 
                      persistently, and always thinking three steps ahead.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
