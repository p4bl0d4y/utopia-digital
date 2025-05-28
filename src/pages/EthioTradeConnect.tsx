
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Globe2, 
  TrendingUp, 
  DollarSign, 
  BarChart3,
  CheckCircle,
  ArrowRight,
  Star
} from "lucide-react";

const EthioTradeConnect = () => {
  const features = [
    {
      icon: Globe2,
      title: "Global Market Access",
      description: "Connect Ethiopian exporters with international buyers and expand market reach"
    },
    {
      icon: TrendingUp,
      title: "Export Analytics",
      description: "Real-time tracking of export performance and market trends analysis"
    },
    {
      icon: DollarSign,
      title: "Foreign Exchange Management",
      description: "Optimize foreign currency earnings and track exchange rate fluctuations"
    },
    {
      icon: BarChart3,
      title: "Trade Intelligence",
      description: "Data-driven insights to identify new opportunities and optimize trade routes"
    }
  ];

  const plans = [
    {
      name: "Exporter",
      price: "1,999 ETB",
      period: "/month",
      description: "Perfect for individual exporters starting their global journey",
      features: [
        "Basic export tracking",
        "Market price alerts",
        "Buyer directory access",
        "Standard support",
        "Monthly reports"
      ],
      popular: false
    },
    {
      name: "Business",
      price: "4,999 ETB",
      period: "/month",
      description: "Ideal for established export businesses",
      features: [
        "Advanced analytics",
        "Custom trade routes",
        "Priority buyer matching",
        "FX rate optimization",
        "Priority support",
        "Weekly insights",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Comprehensive solution for large export organizations",
      features: [
        "Full platform access",
        "Dedicated account manager",
        "Custom integrations",
        "White-label options",
        "24/7 support",
        "Daily insights",
        "Training programs"
      ],
      popular: false
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-100 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900 dark:text-green-200 dark:hover:bg-green-800">
              <Globe2 className="h-4 w-4 mr-2" />
              Ethio-Trade Connect
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Connecting Ethiopia
              <span className="block text-green-600 dark:text-green-400">to Global Markets</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Revolutionary platform designed to boost Ethiopia's export capabilities, increase foreign 
              exchange earnings, and connect local producers with international buyers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600">
                Start Exporting
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-green-600 text-green-600 hover:bg-green-50 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-950"
                onClick={() => window.open('/demos/ethio-trade-connect', '_blank')}
              >
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Empowering Ethiopian Exporters
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced tools and insights to maximize your export potential and foreign exchange earnings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="border-0 shadow-lg dark:bg-slate-800">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                        <IconComponent className="h-6 w-6 text-green-600 dark:text-green-400" />
                      </div>
                      <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choose Your Export Plan
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Scalable solutions to support your export growth journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-slate-800 ${
                plan.popular ? 'scale-105 border-2 border-green-500 dark:border-green-400' : 'hover:scale-105'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-green-600 text-white px-4 py-1 dark:bg-green-500">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-foreground">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl md:text-5xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground mt-4">{plan.description}</p>
                </CardHeader>
                
                <CardContent className="pt-4">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-green-600 hover:bg-green-700 text-white dark:bg-green-500 dark:hover:bg-green-600' 
                        : 'bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-700 dark:hover:bg-slate-600'
                    }`}
                    size="lg"
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-700 dark:from-green-800 dark:to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Expand Ethiopia's Global Reach?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join the movement to increase Ethiopia's export capabilities and foreign exchange earnings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
              Start Exporting
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-green-600"
              onClick={() => window.open('/demos/ethio-trade-connect', '_blank')}
            >
              View Demo
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EthioTradeConnect;
