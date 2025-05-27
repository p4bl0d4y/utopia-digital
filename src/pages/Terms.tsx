
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Terms = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: March 15, 2024
            </p>
          </div>

          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>1. Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  By accessing and using UTOPIA Digital Solution's services, you accept and agree to be 
                  bound by the terms and provision of this agreement. If you do not agree to abide by 
                  the above, please do not use this service.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>2. Service Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  UTOPIA Digital Solution provides cloud-based software solutions designed to help 
                  businesses streamline operations, improve collaboration, and drive growth through 
                  digital transformation tools and analytics.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>3. User Responsibilities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  You are responsible for maintaining the confidentiality of your account credentials, 
                  for all activities that occur under your account, and for ensuring that your use of 
                  the service complies with all applicable laws and regulations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>4. Payment Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Subscription fees are billed in advance on a monthly or annual basis. You agree to pay 
                  all charges associated with your account. Failure to pay may result in suspension or 
                  termination of your service.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>5. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  UTOPIA Digital Solution shall not be liable for any indirect, incidental, special, 
                  consequential, or punitive damages, including without limitation, loss of profits, 
                  data, use, goodwill, or other intangible losses.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>6. Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at 
                  legal@utopiadigital.com or through our contact page.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
