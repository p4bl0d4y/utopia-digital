
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  BarChart3, 
  MessageSquare, 
  Calendar, 
  FileText, 
  Smartphone,
  ArrowRight,
  Star
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Users,
      title: "Customer Management",
      description: "Organize and track all your customer information in one place"
    },
    {
      icon: BarChart3,
      title: "Sales Analytics",
      description: "Get insights into your sales performance with detailed reports"
    },
    {
      icon: MessageSquare,
      title: "Communication Hub",
      description: "Manage all customer communications efficiently"
    },
    {
      icon: Calendar,
      title: "Schedule Management",
      description: "Book appointments and manage your calendar seamlessly"
    },
    {
      icon: FileText,
      title: "Document Storage",
      description: "Store and organize important business documents"
    },
    {
      icon: Smartphone,
      title: "Mobile Access",
      description: "Access your CRM from anywhere with our mobile app"
    }
  ];

  const handleTryCRM = () => {
    navigate("/payment");
  };

  return (
    <Layout>
      <section className="py-20 min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-400">
              🎉 Welcome to UTOPIA!
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Transform Your Business?
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              You're one step away from accessing Ethiopia's most powerful CRM solution. 
              Start your journey with UTOPIA CRM today!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* CRM Overview */}
            <Card className="border-0 shadow-xl dark:bg-slate-800">
              <CardHeader>
                <CardTitle className="text-foreground text-2xl">
                  UTOPIA CRM Enterprise
                </CardTitle>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                    Most Popular
                  </Badge>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="ml-2 text-sm text-muted-foreground">(4.9/5)</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-foreground">2,500 ETB</div>
                  <div className="text-sm text-muted-foreground">per month</div>
                </div>

                <div className="space-y-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <feature.icon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium text-foreground">{feature.title}</div>
                        <div className="text-sm text-muted-foreground">{feature.description}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <Button 
                  onClick={handleTryCRM}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white" 
                  size="lg"
                >
                  Try UTOPIA CRM Now
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Why Choose UTOPIA */}
            <Card className="border-0 shadow-xl dark:bg-slate-800">
              <CardHeader>
                <CardTitle className="text-foreground">Why Choose UTOPIA CRM?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">🇪🇹 Built for Ethiopia</h3>
                    <p className="text-sm text-muted-foreground">
                      Designed specifically for Ethiopian businesses with local language support 
                      and understanding of local business practices.
                    </p>
                  </div>

                  <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">📱 TeleBirr Integration</h3>
                    <p className="text-sm text-muted-foreground">
                      Seamless payment processing with TeleBirr, Ethiopia's trusted 
                      mobile money service.
                    </p>
                  </div>

                  <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">🎯 Easy to Use</h3>
                    <p className="text-sm text-muted-foreground">
                      Intuitive interface that requires no technical expertise. 
                      Get started in minutes, not days.
                    </p>
                  </div>

                  <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">🔒 Secure & Reliable</h3>
                    <p className="text-sm text-muted-foreground">
                      Enterprise-grade security with 99.9% uptime guarantee. 
                      Your data is always safe and accessible.
                    </p>
                  </div>

                  <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">💬 24/7 Support</h3>
                    <p className="text-sm text-muted-foreground">
                      Get help in Amharic and English from our dedicated 
                      Ethiopian support team whenever you need it.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground">
              Join over 1,000+ Ethiopian businesses already using UTOPIA CRM to grow their success.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;
