import { Card, CardContent } from "@/components/ui/card";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-primary/5 to-background py-24">
        <div className="container relative">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1] mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-muted-foreground">Last updated: March 21, 2024</p>
        </div>
      </section>

      <section className="container py-8">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using Deeper Divers, you accept and agree to be bound by these
                Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">2. User Responsibilities</h2>
              <p className="text-muted-foreground">You agree to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not interfere with the proper functioning of the service</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">3. Intellectual Property</h2>
              <p className="text-muted-foreground">
                All content on Deeper Divers, including text, graphics, logos, and audio content,
                is protected by copyright and other intellectual property rights. You may not copy,
                modify, or distribute our content without explicit permission.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">4. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                Deeper Divers provides content for informational purposes only. We make no
                warranties about the accuracy or reliability of our content. We are not liable
                for any damages arising from your use of our services.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">5. Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these terms at any time. Continued use of our
                services after changes constitutes acceptance of the modified terms.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}