import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Plus,
  Type,
  Square,
  Image as ImageIcon,
  MousePointer
} from "lucide-react";

interface CanvasAreaProps {
  previewMode: 'desktop' | 'tablet' | 'mobile';
  isPreview: boolean;
}

export const CanvasArea = ({ previewMode, isPreview }: CanvasAreaProps) => {
  const [selectedElement, setSelectedElement] = useState<string | null>(null);
  const [draggedOver, setDraggedOver] = useState<string | null>(null);

  const canvasWidths = {
    desktop: 'w-full max-w-6xl',
    tablet: 'w-full max-w-3xl', 
    mobile: 'w-full max-w-sm'
  };

  const handleDrop = (e: React.DragEvent, zone: string) => {
    e.preventDefault();
    setDraggedOver(null);
    
    try {
      const data = JSON.parse(e.dataTransfer.getData('application/json'));
      console.log(`Dropped ${data.type} component in ${zone} zone`);
      // Here you would handle adding the component to your canvas state
    } catch (error) {
      console.error('Invalid drop data');
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDragEnter = (e: React.DragEvent, zone: string) => {
    e.preventDefault();
    setDraggedOver(zone);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setDraggedOver(null);
    }
  };

  if (isPreview) {
  return (
    <div className="flex-1 bg-background p-8 overflow-auto">
      <div className={`mx-auto transition-professional ${canvasWidths[previewMode]}`}>
        {/* Preview Mode - Show actual rendered website */}
        <div className="bg-card min-h-screen rounded-lg shadow-professional overflow-hidden border border-border">
          {/* Sample Preview Content */}
          <div className="bg-gradient-primary text-primary-foreground p-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to My App</h1>
            <p className="text-xl mb-6">This is a preview of your professional application</p>
            <button className="bg-card text-foreground px-6 py-3 rounded-lg font-semibold shadow-professional">
              Get Started
            </button>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-muted p-6 rounded-lg text-center border border-border">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg mx-auto mb-4"></div>
                  <h3 className="font-semibold mb-2 text-foreground">Feature {i}</h3>
                  <p className="text-muted-foreground text-sm">Professional feature description {i}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  }

  return (
    <div className="flex-1 canvas-pattern p-8 overflow-auto">
      <div className={`mx-auto transition-professional ${canvasWidths[previewMode]}`}>
        {/* Canvas Container */}
        <div className="bg-card rounded-lg shadow-professional border border-border min-h-[600px] relative overflow-hidden">
          
          {/* Empty State */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center max-w-md">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <MousePointer className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Professional Canvas</h3>
              <p className="text-muted-foreground mb-6">
                Drag components from the sidebar to start creating your professional application
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="outline" className="border-primary/30 text-primary">Drag & Drop</Badge>
                <Badge variant="outline" className="border-primary/30 text-primary">AI Powered</Badge>
                <Badge variant="outline" className="border-primary/30 text-primary">Enterprise Ready</Badge>
              </div>
            </div>
          </div>

          {/* Drop Zones */}
          <div className="absolute inset-4 space-y-4 pointer-events-none">
            {/* Header Drop Zone */}
            <div
              className={`border-2 border-dashed rounded-lg p-8 transition-professional pointer-events-auto ${
                draggedOver === 'header' 
                  ? 'border-primary bg-primary/10' 
                  : 'border-border hover:border-primary/50'
              }`}
              onDrop={(e) => handleDrop(e, 'header')}
              onDragOver={handleDragOver}
              onDragEnter={(e) => handleDragEnter(e, 'header')}
              onDragLeave={handleDragLeave}
            >
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Square className="w-4 h-4" />
                <span className="text-sm">Header Zone</span>
              </div>
            </div>

            {/* Main Content Drop Zone */}
            <div
              className={`border-2 border-dashed rounded-lg p-16 transition-professional pointer-events-auto flex-1 ${
                draggedOver === 'main' 
                  ? 'border-primary bg-primary/10' 
                  : 'border-border hover:border-primary/50'
              }`}
              onDrop={(e) => handleDrop(e, 'main')}
              onDragOver={handleDragOver}
              onDragEnter={(e) => handleDragEnter(e, 'main')}
              onDragLeave={handleDragLeave}
            >
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Type className="w-4 h-4" />
                <span className="text-sm">Main Content Zone</span>
              </div>
            </div>

            {/* Footer Drop Zone */}
            <div
              className={`border-2 border-dashed rounded-lg p-8 transition-professional pointer-events-auto ${
                draggedOver === 'footer' 
                  ? 'border-primary bg-primary/10' 
                  : 'border-border hover:border-primary/50'
              }`}
              onDrop={(e) => handleDrop(e, 'footer')}
              onDragOver={handleDragOver}
              onDragEnter={(e) => handleDragEnter(e, 'footer')}
              onDragLeave={handleDragLeave}
            >
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Square className="w-4 h-4" />
                <span className="text-sm">Footer Zone</span>
              </div>
            </div>
          </div>

          {/* Floating Action Button */}
          <div className="absolute bottom-6 right-6">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:bg-primary-hover transition-professional rounded-full w-14 h-14 p-0 shadow-professional"
            >
              <Plus className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Canvas Info Bar */}
        <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <span>Canvas: {previewMode.charAt(0).toUpperCase() + previewMode.slice(1)}</span>
            <span>•</span>
            <span>0 components</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Auto-save enabled</span>
          </div>
        </div>
      </div>
    </div>
  );
};