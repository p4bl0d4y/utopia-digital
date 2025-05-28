
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
    "crm-implementation-guide": {
      title: "The Complete Guide to CRM Implementation for Ethiopian Businesses",
      author: "Sarah Johnson",
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
      author: "Michael Chen",
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
      author: "Emily Rodriguez",
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
