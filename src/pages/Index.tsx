import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  BarChart3, 
  Shield, 
  Smartphone,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Target,
  Clock
} from "lucide-react";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-background.jpg";

const Index = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
      title: "Centralized Customer Data",
      description: "Keep all customer information, interactions, and history in one secure, easily accessible location for your Ethiopian business."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
      title: "Advanced Sales Analytics",
      description: "Track sales performance, identify trends, and make data-driven decisions to boost revenue and growth."
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
      title: "Lead Management & Conversion",
      description: "Capture, nurture, and convert leads more effectively with automated workflows and follow-up reminders."
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
      title: "Improved Customer Service",
      description: "Respond faster to customer inquiries and provide personalized service with complete interaction history."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
      title: "Increased Sales Efficiency",
      description: "Automate repetitive tasks, streamline sales processes, and focus your team on closing deals."
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
      title: "Better Customer Retention",
      description: "Build stronger relationships with customers through personalized communication and proactive service."
    }
  ];

  const solutions = [
    {
      title: "CRM Solution",
      description: "Comprehensive customer relationship management for Ethiopian businesses",
      icon: <Users className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
      color: "blue",
      link: "/solutions/crm-solution"
    },
    {
      title: "Ethio-Trade Connect",
      description: "Boost Ethiopia's export power and connect to global markets",
      icon: <BarChart3 className="h-12 w-12 text-red-600 dark:text-red-400" />,
      color: "red",
      link: "/solutions/ethio-trade-connect"
    },
    {
      title: "Green Growth Ethiopia",
      description: "Modernize agriculture with smart farming technology",
      icon: <Smartphone className="h-12 w-12 text-green-600 dark:text-green-400" />,
      color: "green",
      link: "/solutions/green-growth-ethiopia"
    }
  ];

  const stats = [
    { number: "1M+", label: "Planned to Reach Customers", sublabel: "Target market across Ethiopia" },
    { number: "3", label: "Core Solutions", sublabel: "CRM, Export & Agriculture" },
    { number: "99.9%", label: "Planned Uptime", sublabel: "Reliable service guarantee" },
    { number: "2025", label: "Founded", sublabel: "Starting Ethiopia's digital transformation" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={heroBackground} 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-purple-900/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-white/10 text-white border border-white/20 backdrop-blur-sm">
              🚀 Transforming Ethiopian Business
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">
              UTOPIA
              <span className="text-blue-300 block">DIGITAL SOLUTIONS</span>
              <span className="text-lg md:text-xl font-sans font-normal block mt-2">for Ethiopia's Future</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Revolutionizing Ethiopian business through innovative SaaS solutions. 
              Streamline operations, boost exports, and modernize agriculture with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link to="/signup">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="border-white/80 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm">
                  Schedule Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages of CRM Section */}
      <section className="py-20 bg-gray-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Advantages of Using CRM Software
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover how Customer Relationship Management software can transform your Ethiopian business operations and drive sustainable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg dark:bg-slate-800 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Business Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tailored technology solutions designed specifically for Ethiopian businesses, exporters, and farmers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="border-0 shadow-lg dark:bg-slate-800 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">{solution.icon}</div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{solution.title}</h3>
                  <p className="text-muted-foreground mb-6">{solution.description}</p>
                  <Link to={solution.link}>
                    <Button 
                      className={`${
                        solution.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600' :
                        solution.color === 'red' ? 'bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600' :
                        'bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600'
                      } text-white`}
                    >
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-100 font-medium">{stat.label}</div>
                <div className="text-blue-200 text-sm">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Companies Section - Coming Soon - Moved Down */}
      <section className="py-16 bg-white dark:bg-slate-900 relative">
        <div className="absolute inset-0 bg-gray-500/20 backdrop-blur-sm flex items-center justify-center z-10">
          <div className="text-center">
            <Badge className="bg-yellow-100 text-yellow-800 text-lg px-6 py-2 dark:bg-yellow-900/30 dark:text-yellow-400">
              🚧 Coming Soon
            </Badge>
            <p className="text-lg font-semibold text-foreground mt-2">Customer Testimonials</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center blur-sm">
          <p className="text-muted-foreground mb-8">Planned to reach 1 million customers across Ethiopia</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-50">
            <div className="text-2xl font-bold text-foreground">Future Client 1</div>
            <div className="text-2xl font-bold text-foreground">Future Client 2</div>
            <div className="text-2xl font-bold text-foreground">Future Client 3</div>
            <div className="text-2xl font-bold text-foreground">Future Client 4</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Ethiopian Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join the digital transformation revolution in Ethiopia. Start with our flagship CRM solution today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 px-8 py-3 text-lg">
                Start Free Trial
              </Button>
            </Link>
            <Link to="/solutions">
              <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950 px-8 py-3 text-lg">
                View All Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
