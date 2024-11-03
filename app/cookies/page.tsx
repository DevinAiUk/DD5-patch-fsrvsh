import { Card, CardContent } from "@/components/ui/card";

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-primary/5 to-background py-24">
        <div className="container relative">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1] mb-4">
            Cookie Policy
          </h1>
          <p className="text-lg text-muted-foreground">Last updated: March 21, 2024</p>
        </div>
      </section>

      <section className="container py-8">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">What Are Cookies</h2>
              <p className="text-muted-foreground">
                Cookies are small text files that are stored on your device when you visit our website.
                They help us provide you with a better experience by remembering your preferences
                and understanding how you use our site.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Types of Cookies We Use</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium">Essential Cookies</h3>
                  <p className="text-muted-foreground">
                    Required for the website to function properly. These cannot be disabled.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium">Analytics Cookies</h3>
                  <p className="text-muted-foreground">
                    Help us understand how visitors interact with our website.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium">Functionality Cookies</h3>
                  <p className="text-muted-foreground">
                    Remember your preferences and settings for a better experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Managing Cookies</h2>
              <p className="text-muted-foreground">
                You can control and/or delete cookies as you wish. You can delete all cookies
                that are already on your computer and you can set most browsers to prevent them
                from being placed. However, if you do this, you may have to manually adjust some
                preferences every time you visit a site.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Updates to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Cookie Policy from time to time. Any changes will be posted
                on this page with an updated revision date.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about our Cookie Policy, please contact us at{" "}
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