
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, ArrowDown, Check, Users, Settings, Clock } from "lucide-react";

const Solutions = () => {
  const solutions = [
    {
      id: "workflow-automation",
      title: "Workflow Automation Platform",
      description: "Streamline complex business processes with intelligent automation that adapts to your workflow patterns.",
      features: [
        "Visual workflow designer",
        "AI-powered optimization",
        "Real-time monitoring",
        "Custom integrations",
        "Advanced analytics"
      ],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      demoUrl: "#",
      category: "Automation"
    },
    {
      id: "data-analytics",
      title: "Advanced Data Analytics Suite",
      description: "Transform raw data into actionable insights with our comprehensive analytics and visualization platform.",
      features: [
        "Interactive dashboards",
        "Predictive modeling",
        "Real-time data processing",
        "Custom reporting",
        "Machine learning insights"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80",
      demoUrl: "#",
      category: "Analytics"
    },
    {
      id: "collaboration-hub",
      title: "Team Collaboration Hub",
      description: "Unite your team with powerful collaboration tools designed for modern distributed workforces.",
      features: [
        "Unified communication",
        "Project management",
        "Document collaboration",
        "Video conferencing",
        "Task automation"
      ],
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      demoUrl: "#",
      category: "Collaboration"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
            🎯 Complete Solution Suite
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Digital Solutions
            <span className="block text-blue-600">for Every Business Need</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover our full range of SaaS products designed to address specific business challenges 
            and drive measurable results across your organization.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            Explore All Solutions
          </Button>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {solutions.map((solution, index) => (
              <div key={solution.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="relative">
                    <img 
                      src={solution.image}
                      alt={solution.title}
                      className="rounded-lg shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-blue-600/20 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <Button 
                        size="lg" 
                        className="bg-white text-blue-600 hover:bg-blue-50"
                        onClick={() => console.log(`Watch demo for ${solution.title}`)}
                      >
                        <Play className="h-5 w-5 mr-2" />
                        Watch Demo
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <Badge className="mb-4 bg-blue-100 text-blue-800">
                    {solution.category}
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {solution.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {solution.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      size="lg" 
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                      onClick={() => console.log(`Request demo for ${solution.title}`)}
                    >
                      Request Demo
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="border-blue-600 text-blue-600 hover:bg-blue-50"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Seamless Integrations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Connect UTOPIA Digital Solution with your existing tools and platforms 
              for a unified workflow experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>CRM Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sync customer data and interactions across all your sales and marketing platforms.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Settings className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>API Ecosystem</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Build custom integrations with our robust RESTful API and comprehensive documentation.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Real-time Sync</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Keep all your systems in sync with real-time data synchronization and updates.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to See Our Solutions in Action?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule a personalized demo and discover how UTOPIA Digital Solution 
            can transform your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
              Schedule Demo
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Solutions;
