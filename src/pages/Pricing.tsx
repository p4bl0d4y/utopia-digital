
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "2,900",
      period: " ETB/month",
      description: "Perfect for small Ethiopian businesses getting started with CRM.",
      features: [
        "Up to 1,000 customer contacts",
        "Basic sales pipeline management",
        "Email integration",
        "Mobile app access",
        "Basic reporting dashboard",
        "Email support",
        "Data export capabilities"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "7,900",
      period: " ETB/month",
      description: "Ideal for growing Ethiopian businesses that need advanced CRM features.",
      features: [
        "Up to 10,000 customer contacts",
        "Advanced sales pipeline",
        "Marketing automation tools",
        "Custom fields & workflows",
        "Advanced analytics & reporting",
        "Priority customer support",
        "API access for integrations",
        "Team collaboration features",
        "Lead scoring system",
        "Custom branding options"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: " pricing",
      description: "Comprehensive CRM solution for large Ethiopian organizations.",
      features: [
        "Unlimited customer contacts",
        "Multi-branch management",
        "Advanced workflow automation",
        "Custom integrations & development",
        "Dedicated account manager",
        "On-premise deployment option",
        "Advanced security features",
        "24/7 premium support",
        "Custom training programs",
        "White-label solutions",
        "Advanced compliance tools"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const faqs = [
    {
      question: "Can I switch between plans at any time?",
      answer: "Yes, you can upgrade or downgrade your CRM plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments in Ethiopian Birr."
    },
    {
      question: "What's included in the free trial?",
      answer: "The free trial gives you full access to all Professional plan features for 14 days, with no payment required. Perfect for testing our CRM with your Ethiopian business needs."
    },
    {
      question: "Do you offer annual payment discounts?",
      answer: "Yes! Annual plans receive a 20% discount compared to monthly billing. Enterprise plans include custom pricing with additional discounts for Ethiopian businesses."
    },
    {
      question: "What kind of customer support do you provide?",
      answer: "We offer email support for Starter plans, priority support for Professional plans, and dedicated support managers for Enterprise customers. All support is available in English and Amharic."
    },
    {
      question: "Is my customer data secure?",
      answer: "Absolutely. We use enterprise-grade security measures including data encryption, regular backups, and comply with international data protection standards."
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer: "Yes, you can cancel your CRM subscription at any time. Your access will continue until the end of your current billing period, and we'll help you export your data if needed."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-400">
            💰 CRM Pricing
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Simple, Transparent CRM Pricing
            <span className="block text-blue-600 dark:text-blue-400">for Ethiopian Businesses</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Choose the perfect CRM plan for your Ethiopian business. Start with our free trial and scale as you grow. 
            Transparent pricing in Ethiopian Birr with no hidden fees.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                        <Check className="h-5 w-5 text-green-500 dark:text-green-400 flex-shrink-0" />
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
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Compare CRM Features Across All Plans
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See exactly what's included in each CRM plan to make the best choice for your Ethiopian business.
            </p>
          </div>
          
          <div className="bg-card rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-4 gap-4 p-6 bg-muted/50 font-semibold text-foreground">
              <div>Features</div>
              <div className="text-center">Starter</div>
              <div className="text-center">Professional</div>
              <div className="text-center">Enterprise</div>
            </div>
            
            {[
              ["Customer Contacts", "1,000", "10,000", "Unlimited"],
              ["Mobile App", "✅", "✅", "✅"],
              ["Email Integration", "✅", "✅", "✅"],
              ["Advanced Analytics", "❌", "✅", "✅"],
              ["API Access", "❌", "✅", "✅"],
              ["Custom Branding", "❌", "✅", "✅"],
              ["Multi-branch Support", "❌", "❌", "✅"],
              ["24/7 Support", "❌", "❌", "✅"]
            ].map((row, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 p-6 border-t border-border">
                <div className="font-medium text-foreground">{row[0]}</div>
                <div className="text-center text-muted-foreground">{row[1]}</div>
                <div className="text-center text-muted-foreground">{row[2]}</div>
                <div className="text-center text-muted-foreground">{row[3]}</div>
              </div>
            ))}
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
              Got questions about our CRM pricing? We've got answers. Can't find what you're looking for? Contact our support team.
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
            Join hundreds of Ethiopian businesses already using UTOPIA CRM to streamline operations and boost sales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg dark:bg-slate-100 dark:text-blue-700 dark:hover:bg-slate-200">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg dark:border-slate-200 dark:hover:bg-slate-100 dark:hover:text-blue-700">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
