
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { blogPosts as importedBlogPosts } from "@/data/blogPosts";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const featuredPost = {
    title: "The Future of Business Automation: AI-Driven Workflows in 2024",
    excerpt: "Discover how artificial intelligence is revolutionizing business processes and what it means for your organization's future.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    author: "Nathan Samuel",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "AI & Automation",
    slug: "future-of-business-automation"
  };

  const blogPosts = [
    ...importedBlogPosts,
    {
      title: "Maximizing Customer Relationships: The Complete CRM Implementation Guide",
      excerpt: "Learn how to successfully implement a CRM system that transforms your customer management and drives business growth.",
      image: "https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      author: "Nathan Samuel",
      date: "March 18, 2024",
      readTime: "12 min read",
      category: "CRM",
      slug: "crm-implementation-guide"
    },
    {
      title: "5 Ways SaaS Solutions Can Reduce Operational Costs",
      excerpt: "Learn practical strategies to cut expenses while improving efficiency through smart SaaS implementation.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80",
      author: "Eyosias Tefera",
      date: "March 12, 2024",
      readTime: "6 min read",
      category: "Cost Optimization",
      slug: "saas-solutions-reduce-costs"
    },
    {
      title: "Data Security Best Practices for Modern Businesses",
      excerpt: "Essential security measures every business should implement to protect sensitive data and maintain customer trust.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      author: "Nathan Samuel",
      date: "March 10, 2024",
      readTime: "7 min read",
      category: "Security",
      slug: "data-security-best-practices"
    }
  ];

  const categories = ["All", "CRM", "AI & Automation", "Cost Optimization", "Security", "Remote Work", "Integration", "Case Studies", "No-Code"];

  // Filter posts based on selected category
  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-200 dark:hover:bg-blue-800">
            📖 Insights & Resources
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Industry Insights & 
            <span className="block text-blue-600 dark:text-blue-400">Digital Innovation</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Stay ahead of the curve with expert insights, industry trends, and practical guides 
            to help you navigate the digital transformation landscape.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-2xl overflow-hidden dark:bg-slate-800">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-blue-600 text-white dark:bg-blue-500">
                  Featured
                </Badge>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <Badge className="mb-4 bg-blue-100 text-blue-800 w-fit dark:bg-blue-900 dark:text-blue-200">
                  {featuredPost.category}
                </Badge>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                  <span className="font-medium">{featuredPost.author}</span>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <Link to={`/blog/${featuredPost.slug}`}>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white w-fit dark:bg-blue-500 dark:hover:bg-blue-600">
                    Read Full Article
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Button 
                key={index}
                variant={selectedCategory === category ? "default" : "outline"}
                className={selectedCategory === category 
                  ? "bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600" 
                  : "border-border text-muted-foreground hover:bg-muted"
                }
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No posts found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden dark:bg-slate-800">
                  <div className="relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-blue-600 text-white dark:bg-blue-500">
                      {post.category}
                    </Badge>
                  </div>
                  <CardHeader className="pb-3">
                    <h3 className="text-lg font-bold text-foreground line-clamp-2">
                      {post.title}
                    </h3>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <span className="font-medium">{post.author}</span>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <Link to={`/blog/${post.slug}`}>
                        <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-950">
                          Read More
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950">
              Load More Articles
              <ArrowDown className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated with Industry Insights
          </h2>
          <p className="text-xl text-blue-100 dark:text-blue-200 mb-8">
            Subscribe to our newsletter and get the latest articles, case studies, and industry insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/20 dark:bg-slate-700 dark:text-white dark:placeholder-slate-300"
            />
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 dark:bg-slate-100 dark:text-blue-700 dark:hover:bg-slate-200">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
