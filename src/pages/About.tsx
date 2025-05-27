
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Star, Clock } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Customer-Centric",
      description: "Every decision we make is guided by our commitment to delivering exceptional value to our customers."
    },
    {
      icon: <Star className="h-8 w-8 text-blue-600" />,
      title: "Innovation First",
      description: "We continuously push boundaries to create cutting-edge solutions that shape the future of business."
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Reliability",
      description: "Our platform delivers consistent, dependable performance that businesses can trust and rely on."
    }
  ];

  const team = [
    {
      name: "Alex Thompson",
      role: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Visionary leader with 15+ years in enterprise software development and digital transformation."
    },
    {
      name: "Sarah Chen",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Technology innovator specializing in scalable cloud architectures and AI-driven solutions."
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Product",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Product strategist focused on creating intuitive user experiences that drive business results."
    },
    {
      name: "Emily Davis",
      role: "VP of Customer Success",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Customer advocate ensuring every client achieves maximum value from our solutions."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
              🏢 About UTOPIA Digital Solution
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Building the Future of
              <span className="block text-blue-600">Digital Business Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to empower businesses worldwide with innovative SaaS solutions 
              that transform operations, drive growth, and unlock unlimited potential.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2020, UTOPIA Digital Solution emerged from a simple yet powerful vision: 
                to bridge the gap between complex business challenges and elegant technological solutions. 
                Our founders, experienced leaders in enterprise software, recognized that businesses needed 
                more than just tools—they needed intelligent platforms that could adapt and evolve.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Today, we serve over 10,000 businesses globally, from ambitious startups to Fortune 500 
                enterprises. Our platform has processed millions of workflows, generated countless insights, 
                and enabled organizations to achieve what they once thought impossible.
              </p>
              <p className="text-lg text-gray-600">
                As we look to the future, we remain committed to innovation, customer success, and 
                building solutions that don't just meet today's needs—but anticipate tomorrow's opportunities.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Our team collaborating" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 text-lg">
                  To democratize access to powerful business technology by creating intuitive, 
                  scalable SaaS solutions that enable organizations of all sizes to compete, 
                  innovate, and thrive in the digital economy.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 text-lg">
                  To be the global leader in intelligent business platforms, where every organization 
                  can harness the full potential of their data, processes, and people to create 
                  extraordinary outcomes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide every decision we make and every solution we build.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Industry veterans and visionaries driving innovation in enterprise software.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">10,000+</div>
              <div className="text-blue-100">Active Customers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">50M+</div>
              <div className="text-blue-100">Workflows Processed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">99.9%</div>
              <div className="text-blue-100">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">150+</div>
              <div className="text-blue-100">Countries Served</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
