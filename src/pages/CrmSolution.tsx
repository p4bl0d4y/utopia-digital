
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  BarChart3, 
  Calendar, 
  MessageSquare,
  CheckCircle,
  ArrowRight,
  Star
} from "lucide-react";

const CrmSolution = () => {
  const features = [
    {
      icon: Users,
      title: "Customer Management",
      description: "Comprehensive customer database with contact management and interaction history"
    },
    {
      icon: BarChart3,
      title: "Sales Analytics",
      description: "Advanced reporting and analytics to track sales performance and trends"
    },
    {
      icon: Calendar,
      title: "Task Management",
      description: "Organize tasks, set reminders, and manage follow-ups efficiently"
    },
    {
      icon: MessageSquare,
      title: "Communication Hub",
      description: "Centralized communication tracking across all customer touchpoints"
    }
  ];

  const plans = [
    {
      name: "Starter",
      price: "999 ETB",
      period: "/month",
      description: "Perfect for small businesses starting their CRM journey",
      features: [
        "Up to 1,000 contacts",
        "Basic reporting",
        "Email integration",
        "Mobile app access",
        "Standard support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "2,499 ETB",
      period: "/month",
      description: "Ideal for growing businesses with advanced needs",
      features: [
        "Up to 10,000 contacts",
        "Advanced analytics",
        "Custom fields",
        "API access",
        "Priority support",
        "Team collaboration",
        "Automation tools"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Comprehensive solution for large organizations",
      features: [
        "Unlimited contacts",
        "Custom integrations",
        "Advanced security",
        "Dedicated support",
        "On-premise option",
        "Custom training",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-200 dark:hover:bg-blue-800">
              <Users className="h-4 w-4 mr-2" />
              CRM Solution
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Customer Relationship
              <span className="block text-blue-600 dark:text-blue-400">Management Made Simple</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Our flagship CRM solution helps Ethiopian businesses build stronger customer relationships, 
              streamline sales processes, and drive sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950"
                onClick={() => window.open('/demos/crm-solution', '_blank')}
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
              Powerful Features for Ethiopian Businesses
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage customer relationships effectively and grow your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="border-0 shadow-lg dark:bg-slate-800">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                        <IconComponent className="h-6 w-6 text-blue-600 dark:text-blue-400" />
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
              Choose Your CRM Plan
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Flexible pricing options designed for Ethiopian businesses of all sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-slate-800 ${
                plan.popular ? 'scale-105 border-2 border-blue-500 dark:border-blue-400' : 'hover:scale-105'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-4 py-1 dark:bg-blue-500">
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
                        ? 'bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600' 
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-800 dark:to-indigo-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Customer Relationships?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of Ethiopian businesses already using our CRM solution to grow their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Start Free Trial
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-600"
              onClick={() => window.open('/demos/crm-solution', '_blank')}
            >
              View Demo
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CrmSolution;
