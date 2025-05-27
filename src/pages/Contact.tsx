
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Users, Clock } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6 text-blue-600" />,
      title: "Email Us",
      description: "Send us an email and we'll respond within 24 hours",
      contact: "hello@utopiadigital.com",
      action: "Send Email"
    },
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: "Call Us",
      description: "Speak directly with our team during business hours",
      contact: "+1 (555) 123-4567",
      action: "Call Now"
    },
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: "Sales Team",
      description: "Get in touch with our sales team for enterprise solutions",
      contact: "sales@utopiadigital.com",
      action: "Contact Sales"
    }
  ];

  const offices = [
    {
      city: "San Francisco",
      address: "123 Innovation Drive, Suite 400",
      zipcode: "San Francisco, CA 94107",
      country: "United States"
    },
    {
      city: "London",
      address: "45 Tech Square, Floor 8",
      zipcode: "London, EC2A 4DP",
      country: "United Kingdom"
    },
    {
      city: "Addis Ababa",
      address: "Bole Road, CMC Building",
      zipcode: "Addis Ababa, 1000",
      country: "Ethiopia"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
            📞 Get in Touch
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Start a Conversation
            <span className="block text-blue-600">About Your Business Goals</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Whether you're looking to transform your operations, need technical support, 
            or want to explore partnership opportunities, we're here to help.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mb-4 flex justify-center">{method.icon}</div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <p className="font-semibold text-gray-900 mb-4">{method.contact}</p>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible. 
                For urgent matters, please call us directly.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Business Hours</div>
                    <div className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM PST</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Response Time</div>
                    <div className="text-gray-600">We typically respond within 2-4 hours</div>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <Input id="firstName" required className="w-full" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <Input id="lastName" required className="w-full" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input id="email" type="email" required className="w-full" />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <Input id="company" className="w-full" />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <Input id="subject" required className="w-full" />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea 
                      id="message" 
                      required 
                      className="w-full min-h-[120px]"
                      placeholder="Tell us about your project or how we can help..."
                    />
                  </div>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Global Offices
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              With offices around the world, we're always close to our customers and ready to provide support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{office.city}</h3>
                  <div className="text-gray-600 space-y-1">
                    <p>{office.address}</p>
                    <p>{office.zipcode}</p>
                    <p className="font-medium">{office.country}</p>
                  </div>
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule a personalized demo and see how UTOPIA Digital Solution can help you achieve your goals.
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
