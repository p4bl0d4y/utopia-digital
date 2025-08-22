import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Trash2, Edit, Plus } from "lucide-react";

const BlogAdmin = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingPost, setEditingPost] = useState<any>(null);
  const { toast } = useToast();

  const categories = [
    "Remote Work",
    "Integration", 
    "Case Studies",
    "No-Code",
    "Technology",
    "Business Strategy"
  ];

  const existingPosts = [
    {
      id: 1,
      title: "Building a Remote-First Culture with Digital Tools",
      slug: "building-remote-first-culture",
      excerpt: "Transform your organization with proven strategies for building a thriving remote-first workplace using cutting-edge digital tools and clear communication protocols.",
      author: "Eyosyas Tefera",
      category: "Remote Work",
      readTime: "5 min read",
      date: "March 8, 2024",
      content: "Full blog content would go here..."
    },
    {
      id: 2,
      title: "Integration Strategies: Connecting Your Tech Stack",
      slug: "integration-strategies-tech-stack",
      excerpt: "Unlock maximum efficiency with comprehensive strategies for seamlessly integrating multiple software solutions, eliminating data silos, and creating unified workflows.",
      author: "Nathan Samuel",
      category: "Integration",
      readTime: "9 min read",
      date: "March 5, 2024",
      content: "Full blog content would go here..."
    },
    {
      id: 3,
      title: "Customer Success Stories: Real ROI from Digital Transformation",
      slug: "customer-success-digital-transformation",
      excerpt: "Discover inspiring success stories from Ethiopian businesses that achieved remarkable growth and efficiency gains through strategic digital transformation initiatives.",
      author: "Eyosyas Tefera",
      category: "Case Studies",
      readTime: "10 min read",
      date: "March 3, 2024",
      content: "Full blog content would go here..."
    },
    {
      id: 4,
      title: "The Rise of No-Code Solutions in Enterprise",
      slug: "no-code-solutions-enterprise",
      excerpt: "Explore how no-code platforms are revolutionizing enterprise development, empowering citizen developers, and accelerating innovation while maintaining security standards.",
      author: "Naol Abera",
      category: "No-Code",
      readTime: "7 min read",
      date: "March 1, 2024",
      content: "Full blog content would go here..."
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const blogData = {
      title: formData.get('title'),
      slug: formData.get('slug'),
      excerpt: formData.get('excerpt'),
      content: formData.get('content'),
      author: formData.get('author'),
      category: formData.get('category'),
      readTime: formData.get('readTime'),
      timestamp: new Date().toISOString()
    };

    console.log('Blog data:', blogData);
    
    // TODO: Replace with actual blog creation logic
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: editingPost ? "Blog Post Updated!" : "Blog Post Created!",
      description: "The blog post has been successfully saved.",
    });

    setIsSubmitting(false);
    setEditingPost(null);
    
    // Reset form
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  const handleEdit = (post: any) => {
    setEditingPost(post);
  };

  const handleDelete = (postId: number) => {
    // TODO: Implement delete functionality
    toast({
      title: "Post Deleted",
      description: "The blog post has been removed.",
    });
  };

  return (
    <Layout>
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-400">
              📝 Blog Management
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Blog Administration
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Create, edit, and manage blog posts for UTOPIA Digital Solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Blog Form */}
            <Card className="border-0 shadow-lg dark:bg-slate-800">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <Plus className="h-5 w-5" />
                  {editingPost ? "Edit Blog Post" : "Create New Blog Post"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-foreground mb-2">
                      Title *
                    </label>
                    <Input 
                      id="title" 
                      name="title" 
                      required 
                      defaultValue={editingPost?.title || ""}
                      placeholder="Enter blog post title"
                    />
                  </div>

                  <div>
                    <label htmlFor="slug" className="block text-sm font-medium text-foreground mb-2">
                      URL Slug *
                    </label>
                    <Input 
                      id="slug" 
                      name="slug" 
                      required 
                      defaultValue={editingPost?.slug || ""}
                      placeholder="url-friendly-slug"
                    />
                  </div>

                  <div>
                    <label htmlFor="excerpt" className="block text-sm font-medium text-foreground mb-2">
                      Excerpt *
                    </label>
                    <Textarea 
                      id="excerpt" 
                      name="excerpt"
                      required
                      defaultValue={editingPost?.excerpt || ""}
                      className="min-h-[80px]"
                      placeholder="Brief description of the blog post"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="author" className="block text-sm font-medium text-foreground mb-2">
                        Author *
                      </label>
                      <Select name="author" defaultValue={editingPost?.author || ""}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select author" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Nathan Samuel">Nathan Samuel</SelectItem>
                          <SelectItem value="Eyosyas Tefera">Eyosyas Tefera</SelectItem>
                          <SelectItem value="Naol Abera">Naol Abera</SelectItem>
                          <SelectItem value="Getabill Shibru">Getabill Shibru</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label htmlFor="category" className="block text-sm font-medium text-foreground mb-2">
                        Category *
                      </label>
                      <Select name="category" defaultValue={editingPost?.category || ""}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((cat) => (
                            <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="readTime" className="block text-sm font-medium text-foreground mb-2">
                      Read Time
                    </label>
                    <Input 
                      id="readTime" 
                      name="readTime" 
                      defaultValue={editingPost?.readTime || ""}
                      placeholder="5 min read"
                    />
                  </div>

                  <div>
                    <label htmlFor="content" className="block text-sm font-medium text-foreground mb-2">
                      Content *
                    </label>
                    <Textarea 
                      id="content" 
                      name="content"
                      required
                      defaultValue={editingPost?.content || ""}
                      className="min-h-[200px]"
                      placeholder="Write your blog post content here..."
                    />
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      type="submit" 
                      className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white flex-1" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Saving..." : editingPost ? "Update Post" : "Create Post"}
                    </Button>
                    
                    {editingPost && (
                      <Button 
                        type="button" 
                        variant="outline"
                        onClick={() => setEditingPost(null)}
                      >
                        Cancel
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Existing Posts */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Existing Posts</h2>
              <div className="space-y-4">
                {existingPosts.map((post) => (
                  <Card key={post.id} className="border-0 shadow-lg dark:bg-slate-800">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-foreground line-clamp-2">{post.title}</h3>
                        <div className="flex gap-2 ml-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleEdit(post)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDelete(post.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex justify-between items-center text-xs text-muted-foreground">
                        <span>{post.author}</span>
                        <span>{post.date}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogAdmin;
