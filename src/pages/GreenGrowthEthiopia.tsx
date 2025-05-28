
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Sprout, 
  Cloud, 
  BarChart3, 
  Smartphone,
  Tractor,
  Droplets,
  ArrowRight,
  Star,
  Mail,
  Phone
} from "lucide-react";
import { Link } from "react-router-dom";

const GreenGrowthEthiopia = () => {
  const features = [
    {
      icon: <Sprout className="h-6 w-6 text-green-600 dark:text-green-400" />,
      title: "Smart Farming Tools",
      description: "Advanced agricultural technology to optimize crop yields and farming efficiency"
    },
    {
      icon: <Cloud className="h-6 w-6 text-green-600 dark:text-green-400" />,
      title: "Weather Analytics",
      description: "Real-time weather data and predictive analytics for better farming decisions"
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-green-600 dark:text-green-400" />,
      title: "Crop Management",
      description: "Comprehensive crop monitoring and management system for maximum productivity"
    },
    {
      icon: <Smartphone className="h-6 w-6 text-green-600 dark:text-green-400" />,
      title: "Mobile Platform",
      description: "User-friendly mobile app accessible to farmers across Ethiopia"
    },
    {
      icon: <Tractor className="h-6 w-6 text-green-600 dark:text-green-400" />,
      title: "Equipment Management",
      description: "Track and optimize agricultural equipment usage and maintenance"
    },
    {
      icon: <Droplets className="h-6 w-6 text-green-600 dark:text-green-400" />,
      title: "Irrigation Intelligence",
      description: "Smart irrigation systems for water conservation and optimal crop growth"
    }
  ];

  const benefits = [
    "Increase agricultural productivity by 40%",
    "Modernize traditional farming practices",
    "Improve food security across Ethiopia",
    "Support sustainable farming methods",
    "Connect farmers to market opportunities",
    "Reduce agricultural waste and losses"
  ];

  const testimonials = [
    {
      name: "Fikadu Worku",
      company: "Oromia Regional Farmers Cooperative",
      content: "Green Growth Ethiopia has transformed how we manage our farms. Our wheat yield increased by 35% using their smart farming recommendations.",
      rating: 5
    },
    {
      name: "Almaz Tesfaye",
      company: "Amhara Agricultural Development",
      content: "The weather analytics feature helped us prevent crop losses during unexpected weather changes. This platform is essential for modern Ethiopian agriculture.",
      rating: 5
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-400">
              🌱 Green Growth Ethiopia
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Modernizing Ethiopia's
              <span className="text-green-600 dark:text-green-400 block">Agriculture Sector</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Innovative agricultural technology platform designed to increase productivity, modernize farming 
              practices, and support sustainable agricultural development across Ethiopia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white">
                Watch Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-950">
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
              Comprehensive Agricultural Technology Platform
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything Ethiopian farmers need to modernize their practices and maximize agricultural productivity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg dark:bg-slate-800 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
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
                Transforming Ethiopian Agriculture
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our platform combines traditional Ethiopian farming knowledge with modern technology to create 
                sustainable agricultural solutions that improve food security and farmer livelihoods.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="p-1 bg-green-100 dark:bg-green-900/30 rounded-full mt-1">
                      <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full"></div>
                    </div>
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Modern Ethiopian agriculture" 
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
            Custom Solutions for Agricultural Development
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Green Growth Ethiopia offers tailored agricultural technology solutions based on farm size, 
            crop types, and regional requirements. Contact us for customized pricing and implementation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="border-0 shadow-lg dark:bg-slate-800">
              <CardContent className="p-8 text-center">
                <Mail className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Email Our Agriculture Team</h3>
                <p className="text-muted-foreground mb-4">Get detailed information about our agricultural solutions</p>
                <p className="font-semibold text-foreground mb-4">agriculture@utopiadigital.com</p>
                <Button className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white">
                  Send Email
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg dark:bg-slate-800">
              <CardContent className="p-8 text-center">
                <Phone className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Schedule a Consultation</h3>
                <p className="text-muted-foreground mb-4">Speak with our agricultural technology specialists</p>
                <p className="font-semibold text-foreground mb-4">+251 11 XXX XXXX</p>
                <Button className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white">
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
              Success Stories from Ethiopian Farmers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how Green Growth Ethiopia is helping farmers across the country improve their productivity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg dark:bg-slate-800">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 text-lg">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-green-600 dark:text-green-400">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-800 dark:to-emerald-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Modernize Ethiopian Agriculture?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join the agricultural revolution in Ethiopia. Transform your farming practices with cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
              Contact Sales
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GreenGrowthEthiopia;
