import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Solutions", href: "/solutions" },
    { name: "About", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/461d6d50-2f3d-49e1-b6b0-f49f93ded69e.png" 
                alt="UTOPIA Digital Solution" 
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold text-foreground hidden sm:block">
                UTOPIA Digital Solution
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.href
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <ThemeToggle />
              <Link to="/signup">
                <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white">
                  Submit Info
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-muted-foreground"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white dark:bg-slate-800 rounded-lg shadow-lg mt-2 p-4">
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-sm font-medium transition-colors duration-200 ${
                      location.pathname === item.href
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link to="/signup">
                  <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white w-full">
                    Submit Info
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/lovable-uploads/f35217e1-c1e0-40fd-bab9-668400c922a2.png" 
                  alt="UTOPIA Digital Solution" 
                  className="h-8 w-auto"
                />
                <span className="text-lg font-bold">UTOPIA Digital Solution</span>
              </div>
              <p className="text-gray-400 dark:text-gray-300 mb-4 max-w-md">
                Driving Ethiopia's digital transformation through innovative CRM, export, and agricultural technology solutions.
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors">About</Link></li>
                <li><Link to="/solutions" className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors">Solutions</Link></li>
                <li><Link to="/pricing" className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors">Pricing</Link></li>
                <li><Link to="/blog" className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link to="/contact" className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 dark:text-gray-300">
              © 2025 UTOPIA Digital Solution. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
