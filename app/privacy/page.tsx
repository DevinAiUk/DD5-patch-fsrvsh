import { Card, CardContent } from "@/components/ui/card";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-primary/5 to-background py-24">
        <div className="container relative">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1] mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground">Last updated: March 21, 2024</p>
        </div>
      </section>

      <section className="container py-8">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Information We Collect</h2>
              <p className="text-muted-foreground">We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Name and contact information when you create an account</li>
                <li>Email address when subscribing to our newsletter</li>
                <li>Comments and feedback you provide</li>
                <li>Usage data and analytics information</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">How We Use Your Information</h2>
              <p className="text-muted-foreground">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide and improve our services</li>
                <li>Send newsletters and updates</li>
                <li>Respond to your comments and questions</li>
                <li>Analyze usage patterns and optimize user experience</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Information Sharing</h2>
              <p className="text-muted-foreground">
                We do not sell or rent your personal information to third parties. We may share your
                information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>With your consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and prevent misuse</li>
                <li>With service providers who assist in our operations</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:privacy@deeperdivers.com" className="text-primary hover:underline">
                  privacy@deeperdivers.com
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}