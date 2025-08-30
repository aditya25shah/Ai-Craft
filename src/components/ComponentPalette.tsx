import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Type, 
  Square, 
  Circle,
  Image as ImageIcon,
  Layout,
  Grid3X3,
  List,
  Calendar,
  BarChart3,
  ShoppingCart,
  Users,
  MessageSquare,
  Video,
  Map,
  Database,
  Zap,
  Plus
} from "lucide-react";

export const ComponentPalette = () => {
  const componentCategories = [
    {
      name: "Layout",
      components: [
        { name: "Header", icon: Layout, description: "Navigation header" },
        { name: "Footer", icon: Layout, description: "Page footer" },
        { name: "Section", icon: Square, description: "Content section" },
        { name: "Container", icon: Square, description: "Flex container" },
        { name: "Grid", icon: Grid3X3, description: "CSS Grid layout" }
      ]
    },
    {
      name: "Typography",
      components: [
        { name: "Heading", icon: Type, description: "H1-H6 headings" },
        { name: "Paragraph", icon: Type, description: "Body text" },
        { name: "Quote", icon: Type, description: "Blockquote" },
        { name: "Link", icon: Type, description: "Hyperlink" }
      ]
    },
    {
      name: "Forms & Input",
      components: [
        { name: "Form", icon: Square, description: "Form container" },
        { name: "Input", icon: Square, description: "Text input field" },
        { name: "Button", icon: Square, description: "Call-to-action" },
        { name: "Dropdown", icon: List, description: "Select dropdown" },
        { name: "Checkbox", icon: Square, description: "Checkbox input" },
        { name: "Upload", icon: ImageIcon, description: "File upload" }
      ]
    },
    {
      name: "Media",
      components: [
        { name: "Image", icon: ImageIcon, description: "Responsive image" },
        { name: "Gallery", icon: Grid3X3, description: "Image gallery" },
        { name: "Video", icon: Video, description: "Video player" },
        { name: "Audio", icon: Video, description: "Audio player" }
      ]
    },
    {
      name: "Data Display",
      components: [
        { name: "Table", icon: Grid3X3, description: "Data table" },
        { name: "Chart", icon: BarChart3, description: "Analytics chart" },
        { name: "Stats", icon: BarChart3, description: "Statistics cards" },
        { name: "Progress", icon: BarChart3, description: "Progress bar" }
      ]
    },
    {
      name: "E-commerce", 
      badge: "Pro",
      components: [
        { name: "Product Card", icon: ShoppingCart, description: "Product display" },
        { name: "Shopping Cart", icon: ShoppingCart, description: "Cart widget" },
        { name: "Checkout", icon: ShoppingCart, description: "Payment form" },
        { name: "Pricing", icon: BarChart3, description: "Pricing table" }
      ]
    },
    {
      name: "Social",
      badge: "Pro", 
      components: [
        { name: "Comments", icon: MessageSquare, description: "Comment system" },
        { name: "Profile", icon: Users, description: "User profile" },
        { name: "Feed", icon: List, description: "Social feed" },
        { name: "Chat", icon: MessageSquare, description: "Live chat" }
      ]
    },
    {
      name: "Advanced",
      badge: "AI",
      components: [
        { name: "Calendar", icon: Calendar, description: "Event calendar" },
        { name: "Map", icon: Map, description: "Interactive map" },
        { name: "Database", icon: Database, description: "Data connection" },
        { name: "API", icon: Zap, description: "External API" }
      ]
    }
  ];

  const handleDragStart = (e: React.DragEvent, componentType: string) => {
    e.dataTransfer.setData('application/json', JSON.stringify({ type: componentType }));
  };

  return (
    <div className="flex flex-col h-full">
      {/* Search Bar */}
      <div className="p-4 border-b border-border/50">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search components..."
            className="w-full bg-background border border-border/50 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-4 space-y-6">
          {componentCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex items-center gap-2 mb-3">
                <h3 className="font-medium text-sm text-foreground">{category.name}</h3>
                {category.badge && (
                  <Badge 
                    variant={category.badge === 'AI' ? 'default' : 'secondary'}
                    className={category.badge === 'AI' ? 'bg-gradient-primary' : ''}
                  >
                    {category.badge}
                  </Badge>
                )}
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                {category.components.map((component, componentIndex) => (
                  <Card 
                    key={componentIndex}
                    className="p-3 cursor-move hover:bg-accent/50 transition-professional border-border hover:border-primary/30 hover:shadow-professional"
                    draggable
                    onDragStart={(e) => handleDragStart(e, component.name)}
                  >
                    <div className="flex flex-col items-center gap-2 text-center">
                      <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <component.icon className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="text-xs font-medium text-foreground">{component.name}</div>
                        <div className="text-xs text-muted-foreground">{component.description}</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              
              {categoryIndex < componentCategories.length - 1 && (
                <Separator className="mt-6" />
              )}
            </div>
          ))}
          
          {/* Custom Component Creator */}
          <Card className="p-4 border-dashed border-primary/30 bg-primary/5">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3 shadow-professional">
                <Plus className="w-6 h-6 text-primary-foreground" />
              </div>
              <h4 className="font-medium mb-2 text-foreground">Create Custom Component</h4>
              <p className="text-xs text-muted-foreground mb-3">
                Let AI generate a custom component based on your description
              </p>
              <Button variant="outline" size="sm" className="w-full border-primary/30 text-primary hover:bg-primary/10">
                Generate with AI
              </Button>
            </div>
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
};