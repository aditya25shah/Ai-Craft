import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Zap, Palette, Database, Cloud, Sparkles } from "lucide-react";
import { useState } from "react";
import { EditorInterface } from "./EditorInterface";
import heroImage from "@/assets/hero-platform.jpg";

export const LandingPage = () => {
  const [showEditor, setShowEditor] = useState(false);

  if (showEditor) {
    return <EditorInterface onBack={() => setShowEditor(false)} />;
  }

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Header */}
      <header className="relative z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">AI-Craft</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-smooth">Features</a>
              <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-smooth">How it Works</a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-smooth">Pricing</a>
            </nav>
            <Button variant="outline" size="sm">
              Sign In
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20 animate-pulse-glow">
              ✨ AI-Powered No-Code Platform
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-foreground via-primary-glow to-accent-glow bg-clip-text text-transparent">
              Build Full-Stack Apps
              <br />
              <span className="text-primary">Without Code</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Transform your ideas into production-ready applications with our AI-powered visual builder. 
              Drag, drop, deploy – it's that simple.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6"
                onClick={() => setShowEditor(true)}
              >
                Start Building Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/10">
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-3xl opacity-20 animate-pulse-glow"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-float border border-primary/20">
              <img 
                src={heroImage} 
                alt="AI-Craft Platform Interface" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Everything You Need to Build</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From visual design to backend APIs, deploy complete applications with zero coding knowledge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Palette,
                title: "Visual Canvas",
                description: "Drag-and-drop interface builder with real-time preview and responsive design."
              },
              {
                icon: Code,
                title: "AI Code Generation", 
                description: "Automatically generates clean, production-ready React and Node.js code."
              },
              {
                icon: Database,
                title: "Smart Backend",
                description: "Auto-generated APIs, database schemas, and authentication flows."
              },
              {
                icon: Zap,
                title: "Live Preview",
                description: "See your changes instantly with hot-reload and real-time collaboration."
              },
              {
                icon: Cloud,
                title: "One-Click Deploy",
                description: "Deploy to Vercel, Render, or Supabase with automated CI/CD pipelines."
              },
              {
                icon: Sparkles,
                title: "AI Assistant",
                description: "Chat with AI to modify designs, add features, and debug issues."
              }
            ].map((feature, index) => (
              <Card key={index} className="p-8 bg-gradient-card border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-card group">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to transform your ideas into reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Design Visually",
                description: "Use our intuitive drag-and-drop interface to design your application layout and user interface."
              },
              {
                step: "02", 
                title: "AI Generates Code",
                description: "Our AI automatically creates clean, scalable code for both frontend and backend components."
              },
              {
                step: "03",
                title: "Deploy Instantly",
                description: "One-click deployment to your preferred hosting platform with automatic optimization."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-2xl font-bold text-white mb-6 mx-auto shadow-glow">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build the Future?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join thousands of founders who are already building amazing applications without writing a single line of code.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-12 py-6"
            onClick={() => setShowEditor(true)}
          >
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold">AI-Craft</span>
            </div>
            <p className="text-muted-foreground">
              © 2024 AI-Craft. Building the future of no-code development.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};