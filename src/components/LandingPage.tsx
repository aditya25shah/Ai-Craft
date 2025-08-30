import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Zap, Palette, Database, Cloud, Building2 } from "lucide-react";
import { useState } from "react";
import { EditorInterface } from "./EditorInterface";
import { AuthPage } from "./AuthPage";
import professionalImage from "@/assets/professional-platform.jpg";

interface User {
  id: string;
  name: string;
  email: string;
  company: string;
  role: string;
  createdAt: Date;
}

export const LandingPage = () => {
  const [currentView, setCurrentView] = useState<'landing' | 'auth' | 'editor'>('landing');
  const [user, setUser] = useState<User | null>(null);

  const handleAuthSuccess = (userData: User) => {
    setUser(userData);
    setCurrentView('editor');
  };

  if (currentView === 'auth') {
    return <AuthPage onAuthSuccess={handleAuthSuccess} />;
  }

  if (currentView === 'editor' && user) {
    return <EditorInterface user={user} onBack={() => setCurrentView('landing')} />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border navbar-blur sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-professional">
                <Building2 className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">AI-Craft Pro</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-professional">Features</a>
              <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-professional">How it Works</a>
              <a href="#enterprise" className="text-muted-foreground hover:text-foreground transition-professional">Enterprise</a>
            </nav>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setCurrentView('auth')}
              className="border-primary/30 text-primary hover:bg-primary/10"
            >
              Sign In
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20">
              🏢 Professional No-Code Platform
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-foreground">
              Build Enterprise Applications
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">Without Writing Code</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Transform your business ideas into production-ready applications with our professional 
              AI-powered visual development platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:bg-primary-hover transition-professional text-lg px-8 py-6 shadow-professional"
                onClick={() => setCurrentView('auth')}
              >
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/10 transition-professional"
              >
                Schedule Demo
              </Button>
            </div>
          </div>

          {/* Platform Preview */}
          <div className="relative max-w-5xl mx-auto">
            <div className="relative rounded-xl overflow-hidden shadow-professional border border-border">
              <img 
                src={professionalImage} 
                alt="AI-Craft Professional Platform" 
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
                icon: Building2,
                title: "Enterprise Ready",
                description: "Built for businesses with enterprise-grade security and scalability."
              },
            ].map((feature, index) => (
              <Card key={index} className="p-8 bg-card border-border hover:shadow-professional transition-professional group">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6 group-hover:shadow-professional transition-professional">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Simple 3-Step Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From concept to deployment in minutes, not months.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Visual Design",
                description: "Use our professional drag-and-drop interface to design your application with precision."
              },
              {
                step: "02", 
                title: "AI Code Generation",
                description: "Our AI automatically creates production-ready, scalable code for enterprise deployment."
              },
              {
                step: "03",
                title: "Professional Deploy",
                description: "Deploy to enterprise-grade infrastructure with automatic scaling and monitoring."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground mb-6 mx-auto shadow-professional">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Ready to Build Professional Applications?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join thousands of businesses already building amazing applications with our professional no-code platform.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:bg-primary-hover transition-professional text-lg px-12 py-6 shadow-professional"
            onClick={() => setCurrentView('auth')}
          >
            Start Building Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Building2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold text-foreground">AI-Craft Pro</span>
            </div>
            <p className="text-muted-foreground">
              © 2024 AI-Craft Pro. Professional no-code development platform.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};