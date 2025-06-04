import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const enterprisePlan = {
    name: "Enterprise CRM Solution",
    price: "Custom Pricing",
    period: "",
    description: "Comprehensive CRM solution tailored for your Ethiopian business needs with all modules included.",
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
      "Custom training programs",
      "White-label solutions",
      "Advanced compliance tools",
      "API access for integrations",
      "Mobile app access",
      "Team collaboration features",
      "Lead scoring system",
      "Email integration",
      "Data export capabilities"
    ],
    cta: "Contact Sales",
    trial: "First Month Free Trial"
  };

  const faqs = [
    {
      question: "How does custom pricing work?",
      answer: "We provide customized pricing based on your specific business needs, company size, and required features. Contact our sales team for a personalized quote in Ethiopian Birr."
    },
    {
      question: "What's included in the free trial?",
      answer: "You get full access to all CRM features for the first month at no cost. This includes unlimited contacts, all modules, and full support to help you get started."
    },
    {
      question: "What's included in the Enterprise solution?",
      answer: "Our Enterprise solution includes all CRM modules, unlimited users, custom integrations, dedicated support, training, and can be tailored to your specific business requirements."
    },
    {
      question: "What kind of customer support do you provide?",
      answer: "We provide 24/7 premium support with a dedicated account manager. All support is available in English and Amharic with priority response times."
    },
    {
      question: "Is my customer data secure?",
      answer: "Absolutely. We use enterprise-grade security measures including data encryption, regular backups, and comply with international data protection standards."
    },
    {
      question: "Can the solution be customized for my industry?",
      answer: "Yes! Our Enterprise solution can be fully customized for your specific industry needs, whether you're in manufacturing, agriculture, trade, or any other sector."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-400">
            💰 Enterprise CRM Pricing
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            One Complete CRM Solution for
            <span className="block text-blue-600 dark:text-blue-400">Ethiopian Businesses</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Get everything you need in one comprehensive CRM package. Custom pricing tailored to your business 
            with a free first month to get started.
          </p>
        </div>
      </section>

      {/* Single Enterprise Plan */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="relative border-0 shadow-xl hover:shadow-2xl transition-all duration-300 dark:bg-slate-800 scale-105 border-2 border-blue-500 dark:border-blue-400">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-blue-600 text-white px-6 py-2 text-lg dark:bg-blue-500">
                <Star className="h-5 w-5 mr-2" />
                Complete Solution
              </Badge>
            </div>
            
            <CardHeader className="text-center pb-6 pt-8">
              <CardTitle className="text-3xl font-bold text-foreground">{enterprisePlan.name}</CardTitle>
              <div className="mt-6">
                <span className="text-4xl md:text-5xl font-bold text-foreground">{enterprisePlan.price}</span>
              </div>
              <Badge className="mt-4 bg-green-100 text-green-800 px-4 py-2 text-lg dark:bg-green-900/30 dark:text-green-400">
                {enterprisePlan.trial}
              </Badge>
              <p className="text-muted-foreground mt-6 text-lg">{enterprisePlan.description}</p>
            </CardHeader>
            
            <CardContent className="pt-4 px-8 pb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {enterprisePlan.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
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
                  <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-600 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950 dark:hover:text-blue-400" size="lg">
                    Schedule Demo
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Enterprise CRM?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              One comprehensive solution with everything included, tailored specifically for Ethiopian businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg dark:bg-slate-800 text-center">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Complete Solution</h3>
                <p className="text-muted-foreground">All modules and features included in one package. No need to compare plans or worry about limitations.</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg dark:bg-slate-800 text-center">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🆓</div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Risk-Free Trial</h3>
                <p className="text-muted-foreground">Try our complete CRM solution for one full month at no cost. Experience all features before committing.</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg dark:bg-slate-800 text-center">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Custom Pricing</h3>
                <p className="text-muted-foreground">Pricing tailored to your business size and needs. Pay only for what makes sense for your organization.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Got questions about our Enterprise CRM solution? We've got answers.
            </p>
          </div>
          
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg dark:bg-slate-800">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Ethiopian Business?
          </h2>
          <p className="text-xl text-blue-100 dark:text-blue-200 mb-8">
            Contact us today to discuss your CRM needs and start your free trial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg dark:bg-slate-100 dark:text-blue-700 dark:hover:bg-slate-200">
                Contact Sales
              </Button>
            </Link>
            <Link to="/schedule-demo">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg dark:border-slate-200 dark:hover:bg-slate-100 dark:hover:text-blue-700">
                Schedule Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
