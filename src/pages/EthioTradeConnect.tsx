
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Globe2, 
  TrendingUp, 
  BarChart3, 
  DollarSign,
  Ship,
  FileText,
  ArrowRight,
  Star,
  Mail,
  Phone
} from "lucide-react";
import { Link } from "react-router-dom";

const EthioTradeConnect = () => {
  const features = [
    {
      icon: <Globe2 className="h-6 w-6 text-red-600 dark:text-red-400" />,
      title: "Global Marketplace Access",
      description: "Connect Ethiopian exporters with international buyers and markets"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-red-600 dark:text-red-400" />,
      title: "Export Growth Analytics",
      description: "Track and analyze export performance with detailed market insights"
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-red-600 dark:text-red-400" />,
      title: "Market Intelligence",
      description: "Access real-time market data and export opportunity analysis"
    },
    {
      icon: <DollarSign className="h-6 w-6 text-red-600 dark:text-red-400" />,
      title: "Foreign Exchange Tracking",
      description: "Monitor and optimize foreign currency earnings from exports"
    },
    {
      icon: <Ship className="h-6 w-6 text-red-600 dark:text-red-400" />,
      title: "Logistics Management",
      description: "Streamline shipping and logistics for international trade"
    },
    {
      icon: <FileText className="h-6 w-6 text-red-600 dark:text-red-400" />,
      title: "Trade Documentation",
      description: "Manage all export documentation and compliance requirements"
    }
  ];

  const benefits = [
    "Increase Ethiopia's export capacity by 200%",
    "Strengthen foreign exchange earnings",
    "Connect local producers to global markets",
    "Reduce trade barriers and bureaucracy",
    "Provide market intelligence and insights",
    "Support sustainable economic growth"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-orange-100 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-orange-100 text-orange-800 hover:bg-orange-200 dark:bg-orange-900/30 dark:text-orange-400">
              🚧 On Progress - Ethio-Trade Connect
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Boosting Ethiopia's
              <span className="text-red-600 dark:text-red-400 block">Export Power</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Revolutionary platform currently in development to increase Ethiopia's export capabilities, strengthen foreign 
              exchange earnings, and connect Ethiopian businesses to global markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 text-white">
                Watch Demo (Coming Soon)
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-red-600 text-red-600 hover:bg-red-50 dark:border-red-400 dark:text-red-400 dark:hover:bg-red-950">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Export Management Platform
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything Ethiopian exporters will need to access global markets and maximize their export potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg dark:bg-slate-800 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gray-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Transforming Ethiopia's Export Economy
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our platform is being designed to significantly boost Ethiopia's export capabilities and strengthen 
                the country's foreign exchange earnings through innovative technology and global market access.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="p-1 bg-red-100 dark:bg-red-900/30 rounded-full mt-1">
                      <div className="w-2 h-2 bg-red-600 dark:bg-red-400 rounded-full"></div>
                    </div>
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Global trade and export" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Contact Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Custom Solutions for Export Growth
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our Ethio-Trade Connect platform will offer tailored solutions based on your export volume, 
            target markets, and business requirements. Contact us for more information.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="border-0 shadow-lg dark:bg-slate-800">
              <CardContent className="p-8 text-center">
                <Mail className="h-12 w-12 text-red-600 dark:text-red-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Email Our Sales Team</h3>
                <p className="text-muted-foreground mb-4">Get detailed information about our export solutions</p>
                <p className="font-semibold text-foreground mb-4">Coming Soon</p>
                <Button className="bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 text-white">
                  Coming Soon
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg dark:bg-slate-800">
              <CardContent className="p-8 text-center">
                <Phone className="h-12 w-12 text-red-600 dark:text-red-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Schedule a Call</h3>
                <p className="text-muted-foreground mb-4">Speak directly with our export specialists</p>
                <p className="font-semibold text-foreground mb-4">+251935050406</p>
                <Button className="bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 text-white">
                  Schedule Call
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Success Stories from Ethiopian Exporters
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Customer testimonials will be available once the platform launches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg dark:bg-slate-800 relative">
              <div className="absolute inset-0 bg-slate-100 dark:bg-slate-900/80 backdrop-blur-sm flex items-center justify-center rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-muted-foreground mb-2">Coming Soon</div>
                  <p className="text-muted-foreground">Customer testimonials will be available soon</p>
                </div>
              </div>
              <CardContent className="p-8 opacity-30">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 text-lg">"This platform revolutionized how we connect with international buyers."</p>
                <div>
                  <div className="font-semibold text-foreground">Customer Name</div>
                  <div className="text-red-600 dark:text-red-400">Export Company</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg dark:bg-slate-800 relative">
              <div className="absolute inset-0 bg-slate-100 dark:bg-slate-900/80 backdrop-blur-sm flex items-center justify-center rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-muted-foreground mb-2">Coming Soon</div>
                  <p className="text-muted-foreground">Customer testimonials will be available soon</p>
                </div>
              </div>
              <CardContent className="p-8 opacity-30">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 text-lg">"The market intelligence helped us identify new opportunities in European markets."</p>
                <div>
                  <div className="font-semibold text-foreground">Customer Name</div>
                  <div className="text-red-600 dark:text-red-400">Export Company</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 dark:from-red-800 dark:to-orange-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Boost Ethiopia's Export Power?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Join the revolution in Ethiopian export trade. Connect with global markets and maximize your export potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-gray-100">
                Contact Sales
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
              Watch Demo (Coming Soon)
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EthioTradeConnect;
