
import { Loader2 } from "lucide-react";

const PageLoader = () => {
  return (
    <div className="fixed inset-0 bg-white dark:bg-slate-900 z-50 flex items-center justify-center">
      <div className="text-center">
        <img 
          src="/lovable-uploads/461d6d50-2f3d-49e1-b6b0-f49f93ded69e.png" 
          alt="UTOPIA Digital Solution" 
          className="w-20 h-20 mx-auto mb-4 animate-pulse"
        />
        <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-blue-600" />
        <p className="text-sm text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
};

export default PageLoader;
