
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Check, CreditCard, Smartphone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Payment = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleTeleBirrPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate TeleBirr payment processing
    setTimeout(() => {
      toast({
        title: "Payment Successful!",
        description: "TeleBirr payment completed. Setting up your account...",
      });
      navigate("/account-setup");
      setIsProcessing(false);
    }, 3000);
  };

  const features = [
    "Complete CRM Solution",
    "Customer Management System",
    "Sales Pipeline Tracking",
    "Marketing Automation",
    "Analytics & Reporting",
    "24/7 Support in Amharic & English",
    "Mobile App Access",
    "Data Export & Import"
  ];

  return (
    <Layout>
      <section className="py-20 min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-400">
              💳 Secure Payment with TeleBirr
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Complete Your Purchase
            </h1>
            <p className="text-muted-foreground">
              Pay securely with TeleBirr - Ethiopia's trusted mobile money service
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Payment Form */}
            <Card className="border-0 shadow-xl dark:bg-slate-800">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <Smartphone className="h-6 w-6 mr-2 text-green-600" />
                  TeleBirr Payment
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">UTOPIA CRM Enterprise</span>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                      Monthly
                    </Badge>
                  </div>
                  <div className="text-2xl font-bold text-foreground">2,500 ETB</div>
                  <div className="text-sm text-muted-foreground">per month</div>
                </div>

                <form onSubmit={handleTeleBirrPayment} className="space-y-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      TeleBirr Phone Number
                    </label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+251 9xx xxx xxx"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required 
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Enter your TeleBirr registered phone number
                    </p>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <h3 className="font-medium text-foreground mb-2">Payment Process:</h3>
                    <ol className="text-sm text-muted-foreground space-y-1">
                      <li>1. Click "Pay with TeleBirr" button</li>
                      <li>2. You'll receive USSD prompt on your phone</li>
                      <li>3. Enter your TeleBirr PIN to confirm</li>
                      <li>4. Payment confirmation will be instant</li>
                    </ol>
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white" 
                    size="lg"
                    disabled={isProcessing || !phoneNumber}
                  >
                    {isProcessing ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Processing Payment...
                      </>
                    ) : (
                      <>
                        <Smartphone className="h-5 w-5 mr-2" />
                        Pay 2,500 ETB with TeleBirr
                      </>
                    )}
                  </Button>
                </form>

                <div className="text-center text-xs text-muted-foreground">
                  <p>🔒 Secure payment powered by TeleBirr</p>
                  <p>Your payment information is encrypted and secure</p>
                </div>
              </CardContent>
            </Card>

            {/* What's Included */}
            <Card className="border-0 shadow-xl dark:bg-slate-800">
              <CardHeader>
                <CardTitle className="text-foreground">What's Included</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
                
                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h3 className="font-medium text-foreground mb-2">Money-Back Guarantee</h3>
                  <p className="text-sm text-muted-foreground">
                    Not satisfied? Get a full refund within 30 days of your purchase.
                  </p>
                </div>

                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h3 className="font-medium text-foreground mb-2">24/7 Ethiopian Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Get support in Amharic and English from our local Ethiopian team.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Payment;
