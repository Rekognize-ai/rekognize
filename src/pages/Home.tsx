import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Database, Shield, Users, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Home = () => {
  const features = [
    {
      icon: Database,
      title: "100M+ Facial Images",
      description: "Real-world, diverse, multi-angle datasets captured in high-variance environments",
    },
    {
      icon: Shield,
      title: "Ethically Collected",
      description: "Strict compliance & governance with secure public-sector partnerships",
    },
    {
      icon: Users,
      title: "Diverse Dataset",
      description: "The largest private dataset of persons of color globally",
    },
    {
      icon: TrendingUp,
      title: "Superior Performance",
      description: "Outperforms legacy systems on underrepresented demographics",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center max-w-5xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            The World's Largest Proprietary Dataset of{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              People of Color
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Powering the next generation of fair, accurate, and bias-resistant facial recognition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base px-8">
              Request Early Access
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8">
              Partner With Us
            </Button>
          </div>
        </div>
      </section>

      {/* IP Moat Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center">
            Our Unique IP Moat
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-4xl mx-auto text-center">
            RekognizeAI owns and curates the largest private dataset of persons of color globally, sourced from secure public-sector partnerships, correctional facilities, mobile data capture systems, and controlled institutional pipelines.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <feature.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-lg font-medium text-foreground/90">
            This IP is our strongest competitive advantage—and the core reason our technology outperforms legacy systems on underrepresented demographics.
          </p>
        </div>
      </section>

      {/* Why We Exist Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Why RekognizeAI Exists
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Facial recognition systems consistently fail for Black, Brown, and other minority groups. These inaccuracies have led to wrongful arrests, misidentifications, discrimination, and public distrust.
          </p>
          <p className="text-xl font-semibold text-foreground">
            RekognizeAI is built to fix this—using real datasets, real research, and real lived experiences.
          </p>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center">
            What We Build
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-border">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Bias-Resistant Facial Recognition Algorithm</h3>
                <p className="text-muted-foreground">
                  Advanced AI models optimized for accuracy across all demographics
                </p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Enterprise-Grade API + SDK</h3>
                <p className="text-muted-foreground">
                  Easy integration for developers with comprehensive documentation
                </p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Fairness-Audited Data Pipelines</h3>
                <p className="text-muted-foreground">
                  Continuous monitoring and validation for bias elimination
                </p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Research-Driven AI Models</h3>
                <p className="text-muted-foreground">
                  Optimized specifically for people of color and minority groups
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact & Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Impact & Vision
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            We are setting a global standard for responsible AI, ensuring that technology works for everyone, especially communities historically misrepresented in machine learning datasets.
          </p>
          <div className="bg-gradient-to-r from-primary to-accent p-12 rounded-2xl text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Join the Movement Toward Fair AI
            </h3>
            <p className="text-lg mb-6 opacity-95">
              Be part of the future where AI recognizes everyone—equally.
            </p>
            <Button size="lg" variant="secondary" className="text-base px-8">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
