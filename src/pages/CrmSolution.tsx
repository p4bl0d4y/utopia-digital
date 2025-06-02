import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  BarChart3, 
  Phone, 
  Mail,
  Calendar,
  Target,
  CheckCircle,
  ArrowRight,
  Star,
  Check
} from "lucide-react";
import { Link } from "react-router-dom";

const CrmSolution = () => {
  const features = [
    {
      icon: <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      title: "Customer Management",
      description: "Centralize all customer information, interactions, and history in one place"
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      title: "Sales Analytics",
      description: "Track sales performance with detailed analytics and reporting"
    },
    {
      icon: <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      title: "Communication Hub",
      description: "Manage all customer communications from one unified platform"
    },
    {
      icon: <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      title: "Email Integration",
      description: "Seamlessly integrate with your email for better customer outreach"
    },
    {
      icon: <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      title: "Task Management",
      description: "Schedule and track all customer-related tasks and follow-ups"
    },
    {
      icon: <Target className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      title: "Lead Tracking",
      description: "Monitor and nurture leads through your entire sales pipeline"
    }
  ];

  const enterprisePlan = {
    name: "Enterprise CRM Solution",
    price: "Custom Pricing",
    period: "",
    description: "Comprehensive CRM solution tailored for your Ethiopian business with all modules included.",
    features: [
      "Unlimited customer contacts",
      "Advanced sales pipeline management",
      "Marketing automation tools",
      "Custom fields & workflows",
      "Advanced analytics & reporting",
      "Multi-branch management",
      "Custom integrations & development",
      "Dedicated account manager",
      "24/7 premium support",
      "On-premise deployment option",
      "Advanced security features",
      "Custom training programs"
    ],
    cta: "Contact Us",
    trial: "First Month Free Trial"
  };

  const handleWatchDemo = () => {
    // Open the demo URL in a new tab
    const demoWindow = window.open("http://srv834778.hstgr.cloud/admin/login", "_blank");
    
    // Try to fill the form after a delay (this may not work due to CORS/security restrictions)
    setTimeout(() => {
      try {
        if (demoWindow && !demoWindow.closed) {
          // Note: This may not work due to cross-origin restrictions
          const demoDoc = demoWindow.document;
          const emailField = demoDoc.querySelector('input[type="email"], input[placeholder*="Email"]') as HTMLInputElement;
          const passwordField = demoDoc.querySelector('input[type="password"], input[placeholder*="Password"]') as HTMLInputElement;
          
          if (emailField) emailField.value = "guest@example.com";
          if (passwordField) passwordField.value = "guest123";
        }
      } catch (error) {
        console.log("Auto-fill not possible due to security restrictions");
      }
    }, 2000);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-400">
              💼 CRM Solution
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Professional CRM for
              <span className="text-blue-600 dark:text-blue-400 block">Ethiopian Businesses</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Our flagship customer relationship management system designed to streamline your business 
              operations, boost customer satisfaction, and drive sales growth in the Ethiopian market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/schedule-demo">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                  Schedule Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive CRM Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage customer relationships and grow your business effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg dark:bg-slate-800 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
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

      {/* Single Enterprise Plan */}
      <section className="py-20 bg-gray-50 dark:bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete CRM Solution
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              One comprehensive plan with everything included. Custom pricing tailored to your business needs.
            </p>
          </div>

          <Card className="relative border-0 shadow-xl hover:shadow-2xl transition-all duration-300 dark:bg-slate-800 scale-105 border-2 border-blue-500 dark:border-blue-400">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-blue-600 text-white px-6 py-2 dark:bg-blue-500">
                <Star className="h-5 w-5 mr-2" />
                Complete Solution
              </Badge>
            </div>
            
            <CardHeader className="text-center pb-4 pt-8">
              <CardTitle className="text-2xl font-bold text-foreground">{enterprisePlan.name}</CardTitle>
              <div className="mt-4">
                <span className="text-4xl md:text-5xl font-bold text-foreground">{enterprisePlan.price}</span>
                <span className="text-muted-foreground ml-1">{enterprisePlan.period}</span>
              </div>
              <Badge className="mt-4 bg-green-100 text-green-800 px-4 py-2 dark:bg-green-900/30 dark:text-green-400">
                {enterprisePlan.trial}
              </Badge>
              <p className="text-muted-foreground mt-4">{enterprisePlan.description}</p>
            </CardHeader>
            
            <CardContent className="pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {enterprisePlan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-500 dark:text-green-400 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="flex-1">
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600"
                    size="lg"
                  >
                    {enterprisePlan.cta}
                  </Button>
                </Link>
                <Link to="/schedule-demo" className="flex-1">
                  <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950" size="lg">
                    Schedule Demo
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Success Stories from Ethiopian Businesses
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how our CRM solution is helping Ethiopian businesses grow and succeed.
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
                <p className="text-muted-foreground mb-6 text-lg">"Our sales increased significantly after implementing the CRM solution."</p>
                <div>
                  <div className="font-semibold text-foreground">Customer Name</div>
                  <div className="text-blue-600 dark:text-blue-400">Company Name</div>
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
                <p className="text-muted-foreground mb-6 text-lg">"The customer support is outstanding and features are exactly what we needed."</p>
                <div>
                  <div className="font-semibold text-foreground">Customer Name</div>
                  <div className="text-blue-600 dark:text-blue-400">Company Name</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-800 dark:to-indigo-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Customer Management?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of Ethiopian businesses already using our CRM to boost sales and improve customer satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Contact Us
              </Button>
            </Link>
            <Link to="/schedule-demo">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Schedule Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CrmSolution;
