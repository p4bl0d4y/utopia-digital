
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Chrome, Facebook, Github } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Layout>
      <section className="py-20 min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-400">
              👋 Welcome Back
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Sign In to Your Account
            </h1>
            <p className="text-muted-foreground">
              Continue your journey with UTOPIA Digital Solution
            </p>
          </div>

          <Card className="border-0 shadow-xl dark:bg-slate-800">
            <CardHeader>
              <CardTitle className="text-center text-foreground">Sign In</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Social Sign In */}
              <div className="space-y-3">
                <Button variant="outline" className="w-full" size="lg">
                  <Chrome className="h-5 w-5 mr-2" />
                  Continue with Google
                </Button>
                <Button variant="outline" className="w-full" size="lg">
                  <Facebook className="h-5 w-5 mr-2" />
                  Continue with Facebook
                </Button>
                <Button variant="outline" className="w-full" size="lg">
                  <Github className="h-5 w-5 mr-2" />
                  Continue with GitHub
                </Button>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or continue with email
                  </span>
                </div>
              </div>

              {/* Email Sign In Form */}
              <form className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input id="email" type="email" required />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
                    Password
                  </label>
                  <Input id="password" type="password" required />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="remember" className="rounded" />
                    <label htmlFor="remember" className="text-sm text-muted-foreground">
                      Remember me
                    </label>
                  </div>
                  <Link to="/forgot-password" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                    Forgot password?
                  </Link>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white" size="lg">
                  Sign In
                </Button>
              </form>

              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                    Create account
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-xs text-muted-foreground max-w-sm mx-auto">
              Access your dashboard to manage customers, track sales, and grow your Ethiopian business 
              with our comprehensive digital solutions.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
