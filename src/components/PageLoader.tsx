
import { Loader2 } from "lucide-react";

const PageLoader = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800 z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="absolute inset-0 rounded-full bg-blue-200 dark:bg-blue-800 animate-ping opacity-75"></div>
          <div className="relative bg-white dark:bg-slate-800 rounded-full p-4 shadow-lg">
            <img 
              src="/lovable-uploads/461d6d50-2f3d-49e1-b6b0-f49f93ded69e.png" 
              alt="UTOPIA Digital Solution" 
              className="w-16 h-16 mx-auto"
            />
          </div>
        </div>
        
        <div className="mb-4">
          <Loader2 className="h-8 w-8 animate-spin mx-auto text-blue-600 dark:text-blue-400" />
        </div>
        
        <div className="space-y-2">
          <p className="text-lg font-semibold text-foreground">UTOPIA Digital Solution</p>
          <p className="text-sm text-muted-foreground">Transforming Ethiopian Business...</p>
        </div>
        
        <div className="mt-6 w-48 mx-auto">
          <div className="h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
