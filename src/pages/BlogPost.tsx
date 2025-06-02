import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const BlogPost = () => {
  const { slug } = useParams();
  
  // Sample blog post data - in a real app, this would come from a CMS or API
  const blogPosts = {
    "future-of-business-automation": {
      title: "The Future of Business Automation: AI-Driven Workflows in 2024",
      author: "Nathan Samuel",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "AI & Automation",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      content: `
        <p>The landscape of business automation is evolving rapidly, with artificial intelligence at the forefront of this transformation. As we navigate through 2024, organizations worldwide are discovering new ways to leverage AI-driven workflows to streamline operations, reduce costs, and enhance productivity.</p>

        <h2>The Current State of AI Automation</h2>
        <p>Today's AI automation tools have evolved far beyond simple task automation. Modern systems can understand context, make intelligent decisions, and adapt to changing business conditions. This evolution has opened doors to sophisticated workflow automation that was previously impossible.</p>
        
        <h2>Key Benefits of AI-Driven Workflows</h2>
        <ul>
          <li><strong>Intelligent Decision Making:</strong> AI systems can analyze vast amounts of data to make informed decisions in real-time</li>
          <li><strong>Adaptive Processes:</strong> Workflows can automatically adjust based on performance metrics and changing conditions</li>
          <li><strong>Predictive Capabilities:</strong> AI can anticipate bottlenecks and optimize processes before issues arise</li>
          <li><strong>Enhanced Customer Experience:</strong> Automated systems provide consistent, personalized interactions</li>
        </ul>

        <h2>Implementation Strategies</h2>
        <p>Successfully implementing AI-driven workflows requires careful planning and a phased approach. Organizations should start with high-impact, low-complexity processes before expanding to more sophisticated automation scenarios.</p>

        <h2>Looking Ahead</h2>
        <p>As AI technology continues to advance, we can expect even more sophisticated automation capabilities. The key to success lies in understanding your business needs and implementing AI solutions that align with your strategic objectives.</p>
      `
    },
    "saas-solutions-reduce-costs": {
      title: "5 Ways SaaS Solutions Can Reduce Operational Costs",
      author: "Eyosias Tefera",
      date: "March 12, 2024",
      readTime: "6 min read",
      category: "Cost Optimization",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80",
      content: `
        <p>In today's competitive business environment, organizations are constantly seeking ways to optimize their operational costs while maintaining high levels of efficiency and service quality. Software as a Service (SaaS) solutions have emerged as a powerful tool for achieving these objectives.</p>

        <h2>1. Reduced Infrastructure Costs</h2>
        <p>SaaS solutions eliminate the need for expensive on-premise hardware and software infrastructure. Organizations can significantly reduce their IT spending by leveraging cloud-based solutions that are maintained and updated by the service provider.</p>
        
        <h2>2. Lower IT Maintenance Overhead</h2>
        <p>With SaaS solutions, the burden of system maintenance, updates, and security patches is shifted to the service provider. This allows internal IT teams to focus on strategic initiatives rather than routine maintenance tasks.</p>

        <h2>3. Scalability Without Additional Investment</h2>
        <p>SaaS platforms offer flexible scaling options that allow businesses to adjust their usage based on demand without significant upfront investments in infrastructure or licenses.</p>

        <h2>4. Faster Implementation and ROI</h2>
        <p>SaaS solutions typically have shorter implementation timelines compared to traditional on-premise solutions, allowing organizations to realize returns on their investment more quickly.</p>

        <h2>5. Predictable Operational Expenses</h2>
        <p>The subscription-based model of SaaS solutions provides predictable monthly or annual costs, making it easier for organizations to budget and plan their IT expenses.</p>
      `
    },
    "data-security-best-practices": {
      title: "Data Security Best Practices for Modern Businesses",
      author: "Nathan Samuel",
      date: "March 10, 2024",
      readTime: "7 min read",
      category: "Security",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      content: `
        <p>Data security has become a critical concern for businesses of all sizes. With increasing cyber threats and regulatory requirements, organizations must implement comprehensive security measures to protect sensitive information and maintain customer trust.</p>

        <h2>Understanding the Threat Landscape</h2>
        <p>Modern businesses face a variety of security threats, including ransomware, phishing attacks, data breaches, and insider threats. Understanding these risks is the first step in developing an effective security strategy.</p>
        
        <h2>Essential Security Measures</h2>
        <ul>
          <li><strong>Multi-Factor Authentication:</strong> Implement MFA across all systems to add an extra layer of security</li>
          <li><strong>Regular Security Audits:</strong> Conduct periodic assessments to identify vulnerabilities</li>
          <li><strong>Employee Training:</strong> Educate staff about security best practices and threat recognition</li>
          <li><strong>Data Encryption:</strong> Encrypt sensitive data both in transit and at rest</li>
          <li><strong>Access Controls:</strong> Implement role-based access controls to limit data exposure</li>
        </ul>

        <h2>Compliance and Regulatory Requirements</h2>
        <p>Many industries are subject to specific data protection regulations. Organizations must ensure their security practices align with relevant compliance requirements such as GDPR, HIPAA, or industry-specific standards.</p>

        <h2>Building a Security Culture</h2>
        <p>Effective data security requires a company-wide commitment to security best practices. This includes regular training, clear policies, and ongoing monitoring of security measures.</p>
      `
    },
    "crm-implementation-guide": {
      title: "The Complete Guide to CRM Implementation for Ethiopian Businesses",
      author: "Nathan Samuel",
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "CRM Solutions",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      content: `
        <p>Customer Relationship Management (CRM) systems have become essential tools for businesses looking to grow and maintain competitive advantages in today's market. For Ethiopian businesses, implementing a CRM solution can be particularly transformative, helping companies organize customer data, streamline sales processes, and improve customer satisfaction.</p>

        <h2>Why Ethiopian Businesses Need CRM</h2>
        <p>Ethiopia's rapidly growing economy presents both opportunities and challenges for businesses. As companies expand their customer base and operations, managing relationships manually becomes increasingly difficult. A robust CRM system helps businesses:</p>
        
        <ul>
          <li>Centralize customer information and communication history</li>
          <li>Track sales opportunities and pipeline performance</li>
          <li>Automate routine tasks and follow-ups</li>
          <li>Generate insights through analytics and reporting</li>
          <li>Improve team collaboration and productivity</li>
        </ul>

        <h2>Planning Your CRM Implementation</h2>
        <p>Successful CRM implementation requires careful planning and consideration of your business needs. Start by evaluating your current processes, identifying pain points, and defining clear objectives for what you want to achieve with your CRM system.</p>

        <h2>Training and Adoption</h2>
        <p>The success of any CRM implementation depends heavily on user adoption. Invest in comprehensive training for your team and ensure everyone understands the benefits of using the system consistently.</p>

        <h2>Measuring Success</h2>
        <p>Track key metrics such as sales pipeline velocity, customer satisfaction scores, and team productivity to measure the success of your CRM implementation and identify areas for improvement.</p>
      `
    },
    "export-opportunities-ethiopia": {
      title: "Unlocking Export Opportunities for Ethiopian Businesses in 2024",
      author: "Eyosias Tefera",
      date: "December 10, 2024",
      readTime: "6 min read",
      category: "Export & Trade",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      content: `
        <p>Ethiopia's export sector is experiencing unprecedented growth opportunities, driven by global demand for African products and improved trade relationships. Ethiopian businesses are well-positioned to capitalize on these trends with the right strategies and tools.</p>

        <h2>Current Export Landscape</h2>
        <p>Ethiopia's traditional exports include coffee, leather goods, textiles, and agricultural products. However, new opportunities are emerging in manufacturing, processed foods, and technology services.</p>

        <h2>Key Growth Sectors</h2>
        <p>Several sectors show particular promise for Ethiopian exporters:</p>
        
        <ul>
          <li>Specialty coffee and organic products</li>
          <li>Textile and garment manufacturing</li>
          <li>Leather and leather products</li>
          <li>Cut flowers and horticulture</li>
          <li>Processed foods and beverages</li>
        </ul>

        <h2>Overcoming Export Challenges</h2>
        <p>While opportunities abound, Ethiopian exporters face challenges including logistics, documentation, and market access. Technology solutions like Ethio-Trade Connect are helping businesses overcome these barriers.</p>
      `
    },
    "digital-agriculture-trends": {
      title: "Digital Agriculture Trends Transforming Ethiopian Farming",
      author: "Naol Abera",
      date: "December 5, 2024",
      readTime: "7 min read",
      category: "Agriculture Tech",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      content: `
        <p>Ethiopia's agricultural sector is undergoing a digital transformation, with innovative technologies helping farmers increase productivity, reduce waste, and adapt to changing climate conditions.</p>

        <h2>The Role of Technology in Agriculture</h2>
        <p>Modern agricultural technology is making farming more efficient and sustainable. From weather monitoring to crop management systems, digital tools are empowering Ethiopian farmers to make data-driven decisions.</p>

        <h2>Key Technologies Making an Impact</h2>
        <ul>
          <li>Weather analytics and climate monitoring</li>
          <li>Soil health assessment tools</li>
          <li>Crop disease detection systems</li>
          <li>Irrigation optimization technology</li>
          <li>Market price information systems</li>
        </ul>

        <h2>Benefits for Ethiopian Farmers</h2>
        <p>Digital agriculture solutions are helping Ethiopian farmers increase yields, reduce costs, and access new markets. These technologies are particularly valuable in addressing challenges related to climate variability and market access.</p>
      `
    }
  };

  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <Layout>
        <div className="py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Blog Post Not Found</h1>
          <Link to="/blog">
            <Button>Return to Blog</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Header */}
      <section className="py-12 bg-gray-50 dark:bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
          
          <Badge className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
            {post.category}
          </Badge>
          
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {post.title}
          </h1>
          
          <div className="flex items-center space-x-6 text-muted-foreground mb-8">
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="prose prose-lg max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-12 bg-gray-50 dark:bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(blogPosts)
              .filter(([key]) => key !== slug)
              .slice(0, 2)
              .map(([key, relatedPost]) => (
                <Card key={key} className="border-0 shadow-lg dark:bg-slate-800 hover:shadow-xl transition-shadow">
                  <CardContent className="p-0">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="p-6">
                      <Badge className="mb-2 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                        {relatedPost.category}
                      </Badge>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {relatedPost.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                        <span>{relatedPost.author}</span>
                        <span>{relatedPost.readTime}</span>
                      </div>
                      <Link to={`/blog/${key}`}>
                        <Button variant="outline" size="sm">
                          Read More
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;
