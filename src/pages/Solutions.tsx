
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Cloud, 
  BarChart3, 
  Users, 
  Shield, 
  Zap, 
  Globe,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Solutions = () => {
  const solutions = [
    {
      id: 1,
      title: "Cloud Infrastructure",
      description: "Scalable, secure cloud solutions that grow with your business",
      icon: Cloud,
      features: ["99.9% Uptime", "Auto-scaling", "24/7 Monitoring", "Global CDN"],
      category: "Infrastructure",
      demo: "/demos/cloud-infrastructure"
    },
    {
      id: 2,
      title: "Business Analytics",
      description: "Data-driven insights to optimize your operations and drive growth",
      icon: BarChart3,
      features: ["Real-time Dashboards", "Predictive Analytics", "Custom Reports", "AI Insights"],
      category: "Analytics",
      demo: "/demos/business-analytics"
    },
    {
      id: 3,
      title: "Team Collaboration",
      description: "Streamline teamwork with integrated communication and project management",
      icon: Users,
      features: ["Video Conferencing", "Task Management", "File Sharing", "Team Chat"],
      category: "Productivity",
      demo: "/demos/team-collaboration"
    },
    {
      id: 4,
      title: "Security Suite",
      description: "Enterprise-grade security to protect your digital assets",
      icon: Shield,
      features: ["Advanced Encryption", "Threat Detection", "Compliance Tools", "Access Control"],
      category: "Security",
      demo: "/demos/security-suite"
    },
    {
      id: 5,
      title: "Automation Platform",
      description: "Automate repetitive tasks and workflows to boost efficiency",
      icon: Zap,
      features: ["Workflow Builder", "API Integration", "Smart Triggers", "Process Optimization"],
      category: "Automation",
      demo: "/demos/automation-platform"
    },
    {
      id: 6,
      title: "Global Marketplace",
      description: "Connect with customers worldwide through our integrated marketplace",
      icon: Globe,
      features: ["Multi-currency", "Global Payments", "Inventory Management", "Customer Analytics"],
      category: "E-commerce",
      demo: "/demos/global-marketplace"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Solutions That <span className="text-blue-600 dark:text-blue-400">Transform</span> Your Business
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Discover our comprehensive suite of digital solutions designed to streamline operations, 
              boost productivity, and drive sustainable growth for businesses of all sizes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                Explore All Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Digital Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From cloud infrastructure to advanced analytics, our solutions are designed to meet 
              the evolving needs of modern businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => {
              const IconComponent = solution.icon;
              return (
                <Card key={solution.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg dark:bg-slate-800 dark:hover:bg-slate-750">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800/40 transition-colors">
                        <IconComponent className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <Badge variant="secondary" className="dark:bg-slate-700 dark:text-slate-300">
                        {solution.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {solution.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {solution.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      {solution.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 dark:text-green-400 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button 
                        className="flex-1 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                        onClick={() => window.open(solution.demo, '_blank')}
                      >
                        Watch Demo
                      </Button>
                      <Button variant="outline" className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-800 dark:to-indigo-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that have already transformed their operations with our solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Solutions;
