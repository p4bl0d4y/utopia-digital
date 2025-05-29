
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Users, Clock, MapPin } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      title: "Email Us",
      description: "Send us an email and we'll respond within 24 hours",
      contact: "Coming Soon",
      action: "Send Email"
    },
    {
      icon: <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      title: "Call Us",
      description: "Speak directly with our team during business hours",
      contact: "+251935050406",
      action: "Call Now"
    },
    {
      icon: <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      title: "Sales Team",
      description: "Get in touch with our sales team for business solutions",
      contact: "Coming Soon",
      action: "Contact Sales"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-400">
            📞 Get in Touch
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Start a Conversation
            <span className="block text-blue-600 dark:text-blue-400">About Your Ethiopian Business Goals</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Whether you're looking to implement our CRM solution, explore export opportunities, 
            or modernize your agricultural practices, we're here to help your Ethiopian business succeed.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="border-0 shadow-lg dark:bg-slate-800 text-center hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mb-4 flex justify-center">{method.icon}</div>
                  <CardTitle className="text-xl text-foreground">{method.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{method.description}</p>
                  <p className="font-semibold text-foreground mb-4">{method.contact}</p>
                  <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white">
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you as soon as possible. 
                For urgent matters, please call us directly.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <div>
                    <div className="font-semibold text-foreground">Business Hours</div>
                    <div className="text-muted-foreground">Monday - Friday: 8:00 AM - 6:00 PM EAT</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <div>
                    <div className="font-semibold text-foreground">Response Time</div>
                    <div className="text-muted-foreground">We typically respond within 2-4 hours</div>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="border-0 shadow-lg dark:bg-slate-800">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                        First Name *
                      </label>
                      <Input id="firstName" required className="w-full" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                        Last Name *
                      </label>
                      <Input id="lastName" required className="w-full" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input id="email" type="email" required className="w-full" />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company Name
                    </label>
                    <Input id="company" className="w-full" />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <Input id="subject" required className="w-full" />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea 
                      id="message" 
                      required 
                      className="w-full min-h-[120px]"
                      placeholder="Tell us about your business needs or how we can help..."
                    />
                  </div>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Location - Coming Soon */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gray-500/20 backdrop-blur-sm flex items-center justify-center z-10">
          <div className="text-center">
            <Badge className="bg-yellow-100 text-yellow-800 text-lg px-6 py-2 dark:bg-yellow-900/30 dark:text-yellow-400">
              🚧 Coming Soon
            </Badge>
            <p className="text-lg font-semibold text-foreground mt-2">Office Location</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 blur-sm">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Office Location
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Visit us at our headquarters in Addis Ababa, the heart of Ethiopia's business district.
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <Card className="border-0 shadow-lg dark:bg-slate-800 text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <MapPin className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Addis Ababa Office</h3>
                <div className="text-muted-foreground space-y-1">
                  <p>Bole Road, CMC Building</p>
                  <p>Floor 8, Suite 801</p>
                  <p>Addis Ababa, 1000</p>
                  <p className="font-medium text-foreground">Ethiopia</p>
                </div>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Monday - Friday: 8:00 AM - 6:00 PM EAT
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Ethiopian Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule a personalized demo and see how UTOPIA Digital Solution can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
              Schedule Demo
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
              View Solutions
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
