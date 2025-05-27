
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Check, Star, Users, Clock, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Team Collaboration",
      description: "Seamlessly connect your team with advanced collaboration tools and real-time updates.",
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Time Management",
      description: "Optimize productivity with intelligent time tracking and automated workflow management.",
    },
    {
      icon: <Settings className="h-8 w-8 text-blue-600" />,
      title: "Custom Integrations",
      description: "Connect with your favorite tools through our robust API and integration ecosystem.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      content: "UTOPIA Digital Solution transformed our workflow efficiency by 300%. The results were immediate and impressive.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      company: "Innovation Labs",
      content: "The most intuitive and powerful SaaS platform we've ever used. Our team productivity has never been higher.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      company: "Growth Dynamics",
      content: "Outstanding support and incredible features. UTOPIA delivers exactly what modern businesses need.",
      rating: 5,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-cyan-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
              🚀 Now Available - Next-Gen Digital Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your Business with
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                UTOPIA Digital Solution
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Empower your organization with cutting-edge SaaS solutions designed to accelerate growth, 
              streamline operations, and unlock unprecedented productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                Request a Demo
              </Button>
              <Link to="/solutions">
                <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
                  Explore Solutions
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-gray-400" />
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Solving Modern Business Challenges
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Today's businesses face complex operational challenges that traditional solutions can't address. 
                UTOPIA Digital Solution provides intelligent, scalable platforms that adapt to your unique needs.
              </p>
              <div className="space-y-4">
                {["Eliminate operational inefficiencies", "Scale without complexity", "Integrate seamlessly"].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Modern office collaboration" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Modern Teams
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the next generation of business software with features designed for today's dynamic workplace.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className="mb-4 flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">
            Trusted by Industry Leaders Worldwide
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
            <div className="flex items-center justify-center">
              <div className="text-2xl font-bold text-gray-400">TechCorp</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-2xl font-bold text-gray-400">InnovateLab</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-2xl font-bold text-gray-400">GrowthCo</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-2xl font-bold text-gray-400">FutureTech</div>
            </div>
          </div>
          <div className="mt-12">
            <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">
              Trusted by 10,000+ Businesses Globally
            </Badge>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Don't just take our word for it. See what industry leaders are saying about UTOPIA Digital Solution.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-white mb-4">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-blue-100">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of companies already using UTOPIA Digital Solution to achieve remarkable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
              Start Free Trial
            </Button>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
