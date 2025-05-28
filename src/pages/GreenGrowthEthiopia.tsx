
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Sprout, 
  CloudRain, 
  Smartphone, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star
} from "lucide-react";

const GreenGrowthEthiopia = () => {
  const features = [
    {
      icon: Sprout,
      title: "Smart Farming Tools",
      description: "Advanced agricultural technology to optimize crop yields and farming efficiency"
    },
    {
      icon: CloudRain,
      title: "Weather Intelligence",
      description: "Real-time weather data and forecasting to help farmers make informed decisions"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Platform",
      description: "Easy-to-use mobile app designed for Ethiopian farmers and agricultural workers"
    },
    {
      icon: TrendingUp,
      title: "Market Analytics",
      description: "Price trends and market insights to help farmers maximize their profits"
    }
  ];

  const plans = [
    {
      name: "Farmer",
      price: "299 ETB",
      period: "/month",
      description: "Essential tools for individual farmers",
      features: [
        "Weather forecasts",
        "Crop calendar",
        "Basic market prices",
        "Mobile app access",
        "Community support"
      ],
      popular: false
    },
    {
      name: "Cooperative",
      price: "1,499 ETB",
      period: "/month",
      description: "Advanced features for agricultural cooperatives",
      features: [
        "Advanced analytics",
        "Inventory management",
        "Member management",
        "Bulk pricing data",
        "Training resources",
        "Priority support",
        "Group messaging"
      ],
      popular: true
    },
    {
      name: "Agricultural Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Comprehensive solution for large agricultural operations",
      features: [
        "Full platform access",
        "Custom integrations",
        "Dedicated support",
        "Training programs",
        "White-label options",
        "Advanced reporting",
        "API access"
      ],
      popular: false
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-emerald-100 text-emerald-800 hover:bg-emerald-200 dark:bg-emerald-900 dark:text-emerald-200 dark:hover:bg-emerald-800">
              <Sprout className="h-4 w-4 mr-2" />
              Green Growth Ethiopia
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Modernizing Ethiopian
              <span className="block text-emerald-600 dark:text-emerald-400">Agriculture</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Empowering Ethiopian farmers with cutting-edge technology to increase productivity, 
              improve crop yields, and build a sustainable agricultural future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600">
                Start Growing
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-emerald-950"
                onClick={() => window.open('/demos/green-growth-ethiopia', '_blank')}
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
              Technology for Ethiopian Farmers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Modern agricultural solutions designed specifically for Ethiopia's unique farming landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="border-0 shadow-lg dark:bg-slate-800">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                        <IconComponent className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
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
              Choose Your Agricultural Plan
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Affordable solutions to support every level of agricultural operation in Ethiopia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-slate-800 ${
                plan.popular ? 'scale-105 border-2 border-emerald-500 dark:border-emerald-400' : 'hover:scale-105'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-emerald-600 text-white px-4 py-1 dark:bg-emerald-500">
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
                        <CheckCircle className="h-5 w-5 text-emerald-500 dark:text-emerald-400 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white dark:bg-emerald-500 dark:hover:bg-emerald-600' 
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
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-green-700 dark:from-emerald-800 dark:to-green-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Revolutionize Ethiopian Agriculture?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join thousands of Ethiopian farmers already using our platform to increase their yields and income.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-emerald-600 hover:bg-gray-100">
              Start Growing
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-emerald-600"
              onClick={() => window.open('/demos/green-growth-ethiopia', '_blank')}
            >
              View Demo
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GreenGrowthEthiopia;
