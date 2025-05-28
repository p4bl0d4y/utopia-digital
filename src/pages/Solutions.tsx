
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Globe2, 
  Sprout,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const Solutions = () => {
  const solutions = [
    {
      id: 1,
      title: "CRM Solution",
      description: "Our flagship customer relationship management system designed to streamline your business operations and boost customer satisfaction",
      icon: Users,
      features: ["Customer Management", "Sales Pipeline", "Analytics Dashboard", "Team Collaboration"],
      category: "Business Management",
      slug: "crm-solution"
    },
    {
      id: 2,
      title: "Ethio-Trade Connect",
      description: "Revolutionary platform to increase Ethiopia's export capabilities and strengthen foreign exchange earnings",
      icon: Globe2,
      features: ["Export Management", "Trade Analytics", "Global Marketplace", "Foreign Exchange Tracking"],
      category: "Trade & Export",
      slug: "ethio-trade-connect"
    },
    {
      id: 3,
      title: "Green Growth Ethiopia",
      description: "Modernizing Ethiopia's agriculture sector through innovative technology and sustainable farming practices",
      icon: Sprout,
      features: ["Smart Farming Tools", "Crop Management", "Weather Analytics", "Market Access"],
      category: "Agriculture Tech",
      slug: "green-growth-ethiopia"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Solutions That <span className="text-blue-600 dark:text-blue-400">Transform</span> Ethiopia
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Discover our three innovative products designed to revolutionize business management, 
              boost exports, and modernize agriculture in Ethiopia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                Explore Our Products
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
              Our Three Revolutionary Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each product is specifically designed to address critical challenges in Ethiopia's 
              business landscape, trade sector, and agricultural development.
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
                        onClick={() => window.open(`/demos/${solution.slug}`, '_blank')}
                      >
                        Watch Demo
                      </Button>
                      <Link to={`/solutions/${solution.slug}`} className="flex-1">
                        <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950">
                          Learn More
                        </Button>
                      </Link>
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
            Ready to Transform Ethiopia's Future?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join us in revolutionizing business management, boosting exports, and modernizing agriculture in Ethiopia.
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
