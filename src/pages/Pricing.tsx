
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small teams getting started with digital transformation.",
      features: [
        "Up to 5 team members",
        "Basic workflow automation",
        "Standard analytics dashboard",
        "Email support",
        "5GB storage",
        "Basic integrations"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for growing businesses that need advanced features and scalability.",
      features: [
        "Up to 25 team members",
        "Advanced workflow automation",
        "Custom analytics & reporting",
        "Priority support",
        "50GB storage",
        "Advanced integrations",
        "API access",
        "Custom branding"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Comprehensive solution for large organizations with complex requirements.",
      features: [
        "Unlimited team members",
        "Enterprise workflow automation",
        "Advanced AI analytics",
        "Dedicated support manager",
        "Unlimited storage",
        "All integrations",
        "Full API access",
        "White-label solution",
        "SSO & advanced security",
        "On-premise deployment option"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const faqs = [
    {
      question: "Can I change my plan at any time?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments."
    },
    {
      question: "What's included in the free trial?",
      answer: "The free trial gives you full access to all Professional plan features for 14 days, with no credit card required."
    },
    {
      question: "Do you offer annual discounts?",
      answer: "Yes! Annual plans receive a 20% discount compared to monthly billing. Enterprise plans include custom pricing with additional discounts."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer email support for Starter plans, priority support for Professional plans, and dedicated support managers for Enterprise customers."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use enterprise-grade security measures including data encryption, regular backups, and SOC 2 compliance."
    },
    {
      question: "Can I cancel at any time?",
      answer: "Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
            💰 Transparent Pricing
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
            <span className="block text-blue-600">for Every Business Size</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Choose the perfect plan for your team. Start with our free trial and scale as you grow. 
            No hidden fees, no surprises—just powerful solutions at transparent prices.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${
                plan.popular ? 'scale-105 border-2 border-blue-500' : 'hover:scale-105'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-4 py-1">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl md:text-5xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-500 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mt-4">{plan.description}</p>
                </CardHeader>
                
                <CardContent className="pt-4">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : 'bg-gray-900 hover:bg-gray-800 text-white'
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Compare Features Across All Plans
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See exactly what's included in each plan to make the best choice for your team.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-4 gap-4 p-6 bg-gray-50 font-semibold text-gray-900">
              <div>Features</div>
              <div className="text-center">Starter</div>
              <div className="text-center">Professional</div>
              <div className="text-center">Enterprise</div>
            </div>
            
            {[
              ["Team Members", "5", "25", "Unlimited"],
              ["Storage", "5GB", "50GB", "Unlimited"],
              ["Workflow Automation", "Basic", "Advanced", "Enterprise"],
              ["Analytics & Reporting", "Standard", "Custom", "AI-powered"],
              ["API Access", "❌", "✅", "✅"],
              ["Custom Branding", "❌", "✅", "✅"],
              ["SSO Integration", "❌", "❌", "✅"],
              ["Dedicated Support", "❌", "❌", "✅"]
            ].map((row, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 p-6 border-t border-gray-200">
                <div className="font-medium text-gray-900">{row[0]}</div>
                <div className="text-center text-gray-700">{row[1]}</div>
                <div className="text-center text-gray-700">{row[2]}</div>
                <div className="text-center text-gray-700">{row[3]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Got questions? We've got answers. Can't find what you're looking for? Contact our support team.
            </p>
          </div>
          
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of businesses already using UTOPIA Digital Solution to transform their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
