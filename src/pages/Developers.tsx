import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Smartphone, Activity, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Developers = () => {
  const sdks = [
    { name: "Python", icon: Code },
    { name: "JavaScript / Node", icon: Code },
    { name: "Mobile SDK", icon: Smartphone },
    { name: "Cloud-based GPU", icon: Activity },
  ];

  const benefits = [
    "Most accurate performance on People of Color",
    "10–30% accuracy uplift compared to existing models",
    "Built-in fairness & audit reporting",
    "Scalable for enterprise workloads",
    "Global compliance & ethical governance baked in",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            For Developers &{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Integrators
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            RekognizeAI provides a powerful suite of tools, APIs, and models designed for real-world integrations—from law enforcement systems to consumer applications.
          </p>
        </div>
      </section>

      {/* Developer Suite Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            RekognizeAI Developer Suite
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Face Recognition API */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-6 h-6 text-primary" />
                  Face Recognition API
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• High accuracy on underrepresented groups</li>
                  <li>• Real-time verification & identification</li>
                  <li>• Easy RESTful endpoints</li>
                  <li>• JSON output</li>
                </ul>
              </CardContent>
            </Card>

            {/* SDKs */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="w-6 h-6 text-primary" />
                  SDKs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {sdks.map((sdk, index) => (
                    <div key={index} className="flex items-center gap-2 text-muted-foreground">
                      <sdk.icon className="w-4 h-4 text-primary" />
                      <span>{sdk.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Dashboard */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-6 h-6 text-primary" />
                  Dashboard
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Monitor accuracy, confidence scores, inference logs, and fairness metrics from a modern developer dashboard.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Build With Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            Why Build With RekognizeAI?
          </h2>
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-card">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-lg text-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            Get Started
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base px-8">
              Request API Key
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8">
              View Documentation
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8">
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Developers;
