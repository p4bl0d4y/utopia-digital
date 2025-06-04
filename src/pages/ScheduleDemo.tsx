
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { User, Mail, Phone, Building } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import DateScheduler from "@/components/DateScheduler";

const ScheduleDemo = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleDateSelect = (date: string, time: string) => {
    setSelectedDate(date);
    if (time) {
      setSelectedTime(time);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime) {
      toast({
        title: "Please select date and time",
        description: "Both date and time are required to schedule your demo.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const submissionData = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      company: formData.get('company'),
      solution: formData.get('solution'),
      message: formData.get('message'),
      selectedDate,
      selectedTime,
      submissionType: 'demo_schedule',
      timestamp: new Date().toISOString()
    };

    console.log('Demo submission data:', submissionData);
    
    // TODO: Replace with Firebase integration
    // Example: await addDoc(collection(db, "demo_requests"), submissionData);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Demo Scheduled Successfully!",
      description: `Your demo has been scheduled for ${selectedDate} at ${selectedTime}. We'll send you a confirmation email shortly.`,
    });

    setIsSubmitting(false);
    
    // Reset form
    const form = e.target as HTMLFormElement;
    form.reset();
    setSelectedDate("");
    setSelectedTime("");
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-400">
            📅 Schedule Demo
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Schedule Your
            <span className="block text-blue-600 dark:text-blue-400">Personalized Demo</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Book a personalized demonstration of our solutions and see how UTOPIA Digital can transform your Ethiopian business.
          </p>
        </div>
      </section>

      {/* Demo Scheduling Form */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                What to Expect
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our demo session will be tailored to your specific business needs and will include:
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <User className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Personalized Walkthrough</div>
                    <div className="text-muted-foreground">A customized demo based on your industry and business size</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">45-Minute Session</div>
                    <div className="text-muted-foreground">Comprehensive overview with time for Q&A</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Building className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Ethiopian Business Focus</div>
                    <div className="text-muted-foreground">Solutions designed specifically for the Ethiopian market</div>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="border-0 shadow-lg dark:bg-slate-800">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Book Your Demo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                        First Name *
                      </label>
                      <Input id="firstName" name="firstName" required className="w-full" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                        Last Name *
                      </label>
                      <Input id="lastName" name="lastName" required className="w-full" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input id="email" name="email" type="email" required className="w-full" />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input id="phone" name="phone" type="tel" required className="w-full" />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company Name *
                    </label>
                    <Input id="company" name="company" required className="w-full" />
                  </div>

                  <div>
                    <label htmlFor="solution" className="block text-sm font-medium text-foreground mb-2">
                      Solution of Interest *
                    </label>
                    <select id="solution" name="solution" required className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring">
                      <option value="">Select a solution</option>
                      <option value="crm">CRM Solution</option>
                      <option value="trade">Ethio-Trade Connect</option>
                      <option value="agriculture">Green Growth Ethiopia</option>
                      <option value="all">All Solutions</option>
                    </select>
                  </div>

                  <DateScheduler 
                    onDateSelect={handleDateSelect}
                    selectedDate={selectedDate}
                    selectedTime={selectedTime}
                  />
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Additional Information
                    </label>
                    <Textarea 
                      id="message" 
                      name="message"
                      className="w-full min-h-[100px]"
                      placeholder="Tell us about your specific business needs or questions..."
                    />
                  </div>
                  
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white" 
                    size="lg"
                    disabled={isSubmitting || !selectedDate || !selectedTime}
                  >
                    {isSubmitting ? "Scheduling Demo..." : "Schedule Demo"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ScheduleDemo;
