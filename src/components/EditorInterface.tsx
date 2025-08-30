import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Play, 
  Save, 
  Download,
  Layers,
  Type,
  Square,
  Circle,
  Image as ImageIcon,
  MessageCircle,
  Sparkles,
  Settings,
  Eye,
  Code,
  Smartphone,
  Monitor,
  Tablet,
  Building2
} from "lucide-react";
import { useState } from "react";
import { ComponentPalette } from "./ComponentPalette";
import { AIAssistant } from "./AIAssistant";
import { CanvasArea } from "./CanvasArea";

interface EditorInterfaceProps {
  user: {
    id: string;
    name: string;
    email: string;
    company: string;
    role: string;
    createdAt: Date;
  };
  onBack: () => void;
}

export const EditorInterface = ({ user, onBack }: EditorInterfaceProps) => {
  const [activePanel, setActivePanel] = useState<'components' | 'properties' | 'ai'>('components');
  const [previewMode, setPreviewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [isPreview, setIsPreview] = useState(false);

  const sidebarTabs = [
    { id: 'components', label: 'Components', icon: Layers },
    { id: 'properties', label: 'Properties', icon: Settings },
    { id: 'ai', label: 'AI Assistant', icon: MessageCircle }
  ];

  return (
    <div className="h-screen bg-background flex flex-col">
      {/* Top Toolbar */}
      <header className="h-16 border-b border-border bg-toolbar-bg flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={onBack} className="text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <Separator orientation="vertical" className="h-6" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Building2 className="w-4 h-4 text-primary-foreground" />
            </div>
            <div>
              <span className="font-semibold text-foreground">{user.name}'s Project</span>
              <Badge variant="outline" className="ml-2 text-xs">Draft</Badge>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Preview Mode Selector */}
          <div className="flex items-center gap-1 bg-muted rounded-lg p-1">
            {[
              { mode: 'desktop', icon: Monitor },
              { mode: 'tablet', icon: Tablet },
              { mode: 'mobile', icon: Smartphone }
            ].map(({ mode, icon: Icon }) => (
              <Button
                key={mode}
                variant={previewMode === mode ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setPreviewMode(mode as any)}
                className="w-9 h-9 p-0"
              >
                <Icon className="w-4 h-4" />
              </Button>
            ))}
          </div>

          <Separator orientation="vertical" className="h-6" />

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={() => setIsPreview(!isPreview)}>
              <Eye className="w-4 h-4 mr-2" />
              {isPreview ? 'Edit' : 'Preview'}
            </Button>
            <Button variant="ghost" size="sm">
              <Code className="w-4 h-4 mr-2" />
              Code
            </Button>
            <Button variant="ghost" size="sm">
              <Save className="w-4 h-4 mr-2" />
              Save
            </Button>
            <Button size="sm" className="bg-gradient-primary hover:bg-primary-hover transition-professional shadow-professional">
              <Play className="w-4 h-4 mr-2" />
              Deploy
            </Button>
          </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar */}
        <div className="w-80 bg-sidebar-bg border-r border-border/50 flex flex-col">
          {/* Sidebar Tabs */}
          <div className="flex border-b border-border/50">
            {sidebarTabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activePanel === tab.id ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setActivePanel(tab.id as any)}
                className="flex-1 rounded-none h-12"
              >
                <tab.icon className="w-4 h-4 mr-2" />
                {tab.label}
              </Button>
            ))}
          </div>

          {/* Sidebar Content */}
          <div className="flex-1 overflow-hidden">
            {activePanel === 'components' && <ComponentPalette />}
            {activePanel === 'ai' && <AIAssistant />}
            {activePanel === 'properties' && (
              <div className="p-6">
                <h3 className="font-semibold mb-4">Properties Panel</h3>
                <p className="text-sm text-muted-foreground">
                  Select a component to edit its properties.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Main Canvas Area */}
        <div className="flex-1 flex flex-col">
          <CanvasArea previewMode={previewMode} isPreview={isPreview} />
        </div>

        {/* Right Panel - Layers/Structure */}
        <div className="w-64 bg-sidebar-bg border-l border-border/50 p-6">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <Layers className="w-4 h-4" />
            Layers
          </h3>
          <ScrollArea className="h-64">
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 p-2 rounded hover:bg-muted/50 cursor-pointer">
                <Square className="w-3 h-3" />
                <span>Header Section</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded hover:bg-muted/50 cursor-pointer ml-4">
                <Type className="w-3 h-3" />
                <span>Logo Text</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded hover:bg-muted/50 cursor-pointer ml-4">
                <Square className="w-3 h-3" />
                <span>Navigation</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded hover:bg-muted/50 cursor-pointer">
                <Square className="w-3 h-3" />
                <span>Hero Section</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded hover:bg-muted/50 cursor-pointer ml-4">
                <Type className="w-3 h-3" />
                <span>Headline</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded hover:bg-muted/50 cursor-pointer ml-4">
                <Square className="w-3 h-3" />
                <span>CTA Button</span>
              </div>
            </div>
          </ScrollArea>

          <Separator className="my-6" />

          <div>
            <h3 className="font-semibold mb-4">Project Stats</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Components</span>
                <span>12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Pages</span>
                <span>3</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">API Routes</span>
                <span>5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};