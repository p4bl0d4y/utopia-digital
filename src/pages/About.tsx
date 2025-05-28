
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Star, Clock } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
      title: "Customer-Centric",
      description: "Every decision we make is guided by our commitment to delivering exceptional value to Ethiopian businesses."
    },
    {
      icon: <Star className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
      title: "Innovation First",
      description: "We continuously push boundaries to create cutting-edge solutions that drive Ethiopia's digital transformation."
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
      title: "Digital Transformation",
      description: "Our mission is to accelerate Ethiopia's digital transformation through innovative technology solutions."
    }
  ];

  const team = [
    {
      name: "Alex Thompson",
      role: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Visionary leader with 15+ years in enterprise software development and Ethiopian market expertise."
    },
    {
      name: "Sarah Chen",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Technology innovator specializing in scalable solutions for emerging markets and digital transformation."
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Product",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Product strategist focused on creating solutions that address Ethiopian business challenges."
    },
    {
      name: "Emily Davis",
      role: "VP of Customer Success",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Customer advocate ensuring every Ethiopian client achieves maximum value from our solutions."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-400">
              🏢 About UTOPIA Digital Solution
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Driving Ethiopia's
              <span className="block text-blue-600 dark:text-blue-400">Digital Transformation</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're on a mission to accelerate Ethiopia's digital transformation through innovative SaaS solutions 
              that revolutionize business management, boost exports, and modernize agriculture.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2025, UTOPIA Digital Solution emerged with a clear vision: to be the catalyst for 
                Ethiopia's digital transformation. Recognizing the unique challenges and opportunities in the 
                Ethiopian market, our founders set out to create technology solutions specifically designed 
                for local businesses, exporters, and farmers.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Starting with our flagship CRM solution, we expanded our portfolio to include Ethio-Trade Connect 
                for boosting exports and Green Growth Ethiopia for modernizing agriculture. Each product addresses 
                critical needs in Ethiopia's growing economy while supporting the country's digital transformation goals.
              </p>
              <p className="text-lg text-muted-foreground">
                As we scale our operations, we remain committed to our mission of empowering Ethiopian businesses 
                with world-class technology solutions that drive sustainable growth and economic development.
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
      <section className="py-20 bg-gray-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg dark:bg-slate-800">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground text-lg">
                  To accelerate Ethiopia's digital transformation by providing innovative, locally-relevant 
                  technology solutions that empower businesses, boost exports, and modernize agriculture 
                  across the country.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg dark:bg-slate-800">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground text-lg">
                  To be the leading technology partner in Ethiopia's digital transformation journey, 
                  enabling every business, exporter, and farmer to harness the power of technology 
                  for sustainable growth and prosperity.
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide every decision we make and every solution we build for Ethiopia.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg dark:bg-slate-800 text-center hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced leaders committed to driving Ethiopia's digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg dark:bg-slate-800 text-center hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">1M+</div>
              <div className="text-blue-100">Target Customers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">3</div>
              <div className="text-blue-100">Core Products</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">99.9%</div>
              <div className="text-blue-100">Planned Uptime</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">2025</div>
              <div className="text-blue-100">Founded</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
