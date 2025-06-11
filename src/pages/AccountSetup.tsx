
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Clock, Copy, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const AccountSetup = () => {
  const [timeLeft, setTimeLeft] = useState(60);
  const [isSetupComplete, setIsSetupComplete] = useState(false);
  const { toast } = useToast();

  // Account credentials (in real app, these would come from backend)
  const accountCredentials = {
    url: "https://crm.utopia-ethiopia.com",
    username: "user_" + Math.random().toString(36).substr(2, 8),
    password: "UTOPIA_" + Math.random().toString(36).substr(2, 10).toUpperCase()
  };

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setIsSetupComplete(true);
    }
  }, [timeLeft]);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: `${label} Copied!`,
      description: "The information has been copied to your clipboard.",
    });
  };

  return (
    <Layout>
      <section className="py-20 min-h-screen bg-gradient-to-br from-blue-50 to-green-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-400">
              🎉 Payment Successful!
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Setting Up Your Account
            </h1>
            <p className="text-muted-foreground">
              We're preparing your UTOPIA CRM system. This will only take a moment.
            </p>
          </div>

          {!isSetupComplete ? (
            <Card className="border-0 shadow-xl dark:bg-slate-800">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <Clock className="h-6 w-6 mr-2 text-blue-600" />
                  Account Setup in Progress
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
                    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Setting up your CRM system...
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Time remaining: <span className="font-mono text-lg">{timeLeft}s</span>
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="text-muted-foreground">Payment verified</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="text-muted-foreground">Creating database</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                    <span className="text-muted-foreground">Configuring user permissions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-5 w-5 rounded-full border-2 border-gray-300"></div>
                    <span className="text-gray-400">Generating access credentials</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="border-0 shadow-xl dark:bg-slate-800">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <Check className="h-6 w-6 mr-2 text-green-600" />
                  Your Account is Ready!
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">🎉 Welcome to UTOPIA CRM!</h3>
                  <p className="text-muted-foreground">
                    Your Ethiopian business CRM system is now ready. Use the credentials below to access your dashboard.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      CRM Dashboard URL
                    </label>
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 p-3 bg-gray-50 dark:bg-slate-700 rounded-md font-mono text-sm">
                        {accountCredentials.url}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(accountCredentials.url, "URL")}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(accountCredentials.url, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Username
                    </label>
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 p-3 bg-gray-50 dark:bg-slate-700 rounded-md font-mono text-sm">
                        {accountCredentials.username}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(accountCredentials.username, "Username")}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Password
                    </label>
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 p-3 bg-gray-50 dark:bg-slate-700 rounded-md font-mono text-sm">
                        {accountCredentials.password}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(accountCredentials.password, "Password")}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h3 className="font-medium text-foreground mb-2">📧 Important:</h3>
                  <p className="text-sm text-muted-foreground">
                    These credentials have also been sent to your email address. 
                    Please save them securely and change your password after first login.
                  </p>
                </div>

                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white" 
                  size="lg"
                  onClick={() => window.open(accountCredentials.url, '_blank')}
                >
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Access Your CRM Dashboard
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default AccountSetup;
