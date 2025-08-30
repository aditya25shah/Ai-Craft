import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { 
  Send, 
  Sparkles, 
  Code, 
  Palette, 
  Database,
  Bug,
  Lightbulb,
  Zap
} from "lucide-react";

interface Message {
  id: number;
  type: "ai" | "user";
  content: string;
  timestamp: Date;
}

export const AIAssistant = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "ai",
      content: "👋 Hi! I'm your AI assistant. I can help you build components, fix bugs, optimize your app, and answer questions about your project. What would you like to work on?",
      timestamp: new Date()
    }
  ]);

  const quickActions = [
    { 
      icon: Code, 
      label: "Generate Component", 
      prompt: "Create a new component for me",
      color: "text-blue-400"
    },
    { 
      icon: Palette, 
      label: "Improve Design", 
      prompt: "Help me improve the design and styling",
      color: "text-purple-400"
    },
    { 
      icon: Database, 
      label: "Add Database", 
      prompt: "Help me set up a database for my app",
      color: "text-green-400"
    },
    { 
      icon: Bug, 
      label: "Fix Issues", 
      prompt: "Help me debug and fix issues in my code",
      color: "text-red-400"
    },
    { 
      icon: Zap, 
      label: "Add Feature", 
      prompt: "I want to add a new feature to my app",
      color: "text-yellow-400"
    },
    { 
      icon: Lightbulb, 
      label: "Get Ideas", 
      prompt: "Give me ideas to improve my application",
      color: "text-orange-400"
    }
  ];

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const newMessage: Message = {
      id: Date.now(),
      type: "user",
      content: message,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setMessage("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: Date.now() + 1,
        type: "ai",
        content: "I understand you want to " + message.toLowerCase() + ". Let me help you with that! I'll generate the necessary code and components for your request.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const handleQuickAction = (prompt: string) => {
    setMessage(prompt);
  };

  return (
    <div className="flex flex-col h-full">
      {/* AI Status Header */}
      <div className="p-4 border-b border-border/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center animate-pulse-glow">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="font-medium">AI Assistant</div>
            <div className="text-xs text-muted-foreground flex items-center gap-1">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              Online & Ready
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="p-4 border-b border-border/50">
        <div className="text-xs font-medium text-muted-foreground mb-3">Quick Actions</div>
        <div className="grid grid-cols-2 gap-2">
          {quickActions.map((action, index) => (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              onClick={() => handleQuickAction(action.prompt)}
              className="h-auto p-3 flex flex-col items-center gap-2 hover:bg-accent/50"
            >
              <action.icon className={`w-4 h-4 ${action.color}`} />
              <span className="text-xs text-center leading-tight">{action.label}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Chat Messages */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] ${msg.type === 'user' ? 'order-2' : 'order-1'}`}>
                {msg.type === 'ai' && (
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Sparkles className="w-3 h-3 text-white" />
                    </div>
                    <Badge variant="secondary" className="text-xs">AI</Badge>
                  </div>
                )}
                <Card className={`p-3 ${
                  msg.type === 'user' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted/50'
                }`}>
                  <p className="text-sm leading-relaxed">{msg.content}</p>
                </Card>
                <div className="text-xs text-muted-foreground mt-1">
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Message Input */}
      <div className="p-4 border-t border-border/50">
        <div className="flex gap-2">
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask AI to help with your project..."
            className="min-h-[60px] resize-none"
            onKeyPress={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
          />
          <Button 
            onClick={handleSendMessage}
            disabled={!message.trim()}
            size="sm"
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300 self-end"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
        <div className="text-xs text-muted-foreground mt-2">
          Press Enter to send, Shift+Enter for new line
        </div>
      </div>
    </div>
  );
};