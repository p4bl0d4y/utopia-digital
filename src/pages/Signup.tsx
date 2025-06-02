
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Signup = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Thank you for your interest!",
      description: "We have received your information and will get back to you within 24 hours.",
    });

    setIsSubmitting(false);
    
    // Reset form
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <Layout>
      <section className="py-20 min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-400">
              🚀 Get Started with UTOPIA
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Share Your Information
            </h1>
            <p className="text-muted-foreground">
              Tell us about your business needs and we'll get back to you
            </p>
          </div>

          <Card className="border-0 shadow-xl dark:bg-slate-800">
            <CardHeader>
              <CardTitle className="text-center text-foreground">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      First Name *
                    </label>
                    <Input id="firstName" required />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                      Last Name *
                    </label>
                    <Input id="lastName" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input id="email" type="email" required />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input id="phone" type="tel" />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company Name *
                  </label>
                  <Input id="company" required />
                </div>

                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-foreground mb-2">
                    Your Position
                  </label>
                  <Input id="position" />
                </div>

                <div>
                  <label htmlFor="businessType" className="block text-sm font-medium text-foreground mb-2">
                    Business Type
                  </label>
                  <Input id="businessType" placeholder="e.g., Manufacturing, Agriculture, Trading" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Tell us about your business needs
                  </label>
                  <Textarea 
                    id="message" 
                    className="min-h-[100px]"
                    placeholder="What challenges are you facing? What solutions are you looking for?"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white" 
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Information"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-xs text-muted-foreground max-w-sm mx-auto">
              By submitting your information, you're taking the first step to transform your Ethiopian business 
              with UTOPIA Digital Solution. We'll contact you within 24 hours.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Signup;
