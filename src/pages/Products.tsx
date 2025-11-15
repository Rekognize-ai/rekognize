import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Database, CheckCircle, Building2, Shield, Fingerprint } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Products = () => {
  const algorithmFeatures = [
    "Industry-leading accuracy on dark skin tones",
    "Real-time recognition",
    "Bias-corrected model architecture",
    "API & SDK support",
    "Enterprise-ready security",
  ];

  const useCases = [
    { name: "Law enforcement", icon: Shield },
    { name: "Border security", icon: Shield },
    { name: "Identity verification", icon: Fingerprint },
    { name: "Fintech KYC", icon: Building2 },
    { name: "Smart city systems", icon: Building2 },
    { name: "Access control", icon: Shield },
  ];

  const datasetUseCases = [
    "Training new facial recognition algorithms",
    "Testing existing models",
    "Fairness benchmarking",
    "Academic research collaborations",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Products
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Enterprise-grade facial recognition solutions designed for fairness, accuracy, and scale.
          </p>
        </div>
      </section>

      {/* Facial Recognition Algorithm Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <Card className="border-border overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary to-accent text-white">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Brain className="w-8 h-8" />
                Facial Recognition Algorithm (FRA-POC)
              </CardTitle>
              <p className="text-white/90 mt-2">
                A next-generation recognition engine optimized specifically for People of Color and minority demographics.
              </p>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Features */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Features</h3>
                  <div className="space-y-3">
                    {algorithmFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-muted-foreground">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Use Cases */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Ideal For</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {useCases.map((useCase, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 p-3 rounded-lg bg-card border border-border"
                      >
                        <useCase.icon className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{useCase.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <Button size="lg" className="w-full sm:w-auto">
                  Request Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Dataset Licensing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="container mx-auto max-w-6xl">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Database className="w-8 h-8 text-primary" />
                Dataset Licensing
              </CardTitle>
              <p className="text-muted-foreground mt-2">
                RekognizeAI offers the ability to license access to portions of our proprietary dataset under strict compliance frameworks.
              </p>
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-semibold mb-4">Use Cases</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {datasetUseCases.map((useCase, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 p-4 rounded-lg bg-background border border-border"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <p className="text-foreground">{useCase}</p>
                  </div>
                ))}
              </div>
              <Button size="lg" variant="outline">
                Inquire About Licensing
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <Card className="border-border bg-gradient-to-br from-card to-card/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <CheckCircle className="w-8 h-8 text-primary" />
                Fairness Audit Tooling
              </CardTitle>
              <div className="inline-block mt-2">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  Coming Soon
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground">
                A full audit suite that evaluates external AI models for demographic bias across skin tones, age groups, and conditions.
              </p>
              <Button size="lg" variant="outline" className="mt-6">
                Join the Waitlist
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
