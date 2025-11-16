import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Database, Shield, Users, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroFace1 from "@/assets/hero-face-1.jpg";
import heroFace2 from "@/assets/hero-face-2.jpg";
import heroFace3 from "@/assets/hero-face-3.jpg";

const Home = () => {
  const heroAnimation = useScrollAnimation();
  const featuresAnimation = useScrollAnimation();
  const whyExistAnimation = useScrollAnimation();
  
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
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/10 via-background to-brand-beige/10 animate-gradient-shift" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_hsl(var(--brand-cyan))_0%,_transparent_50%)] opacity-10 animate-pulse" />
        
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div 
              ref={heroAnimation.ref}
              className={`transition-all duration-700 ${
                heroAnimation.isVisible ? 'animate-fade-up' : 'opacity-0'
              }`}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Fair AI Recognition for{" "}
                <span className="bg-gradient-to-r from-brand-cyan via-primary to-accent bg-clip-text text-transparent">
                  Everyone
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl">
                The world's largest proprietary dataset of people of color, powering accurate and bias-resistant facial recognition technology.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border">
                  <div className="text-3xl font-bold text-brand-cyan mb-1">100M+</div>
                  <div className="text-sm text-muted-foreground">Facial Images</div>
                </div>
                <div className="bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border">
                  <div className="text-3xl font-bold text-brand-cyan mb-1">99.8%</div>
                  <div className="text-sm text-muted-foreground">Accuracy Rate</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-base px-8 hover:scale-105 transition-transform bg-gradient-to-r from-brand-cyan to-primary hover:shadow-lg hover:shadow-brand-cyan/20">
                  Request Early Access
                </Button>
                <Button size="lg" variant="outline" className="text-base px-8 hover:scale-105 transition-transform border-brand-cyan/30 hover:bg-brand-cyan/5">
                  View Documentation
                </Button>
              </div>
            </div>

            {/* Right Visual - Face Detection Grid */}
            <div className="relative lg:block hidden">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative group overflow-hidden rounded-lg animate-fade-in" style={{ animationDelay: '200ms' }}>
                    <img 
                      src={heroFace1} 
                      alt="AI facial recognition technology detecting diverse faces" 
                      className="w-full h-auto object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="relative group overflow-hidden rounded-lg animate-fade-in" style={{ animationDelay: '400ms' }}>
                    <img 
                      src={heroFace3} 
                      alt="Accurate facial recognition for people of color" 
                      className="w-full h-auto object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="mt-8">
                  <div className="relative group overflow-hidden rounded-lg animate-fade-in" style={{ animationDelay: '300ms' }}>
                    <img 
                      src={heroFace2} 
                      alt="Bias-resistant facial recognition AI" 
                      className="w-full h-auto object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-cyan/10 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </section>

      {/* IP Moat Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div 
          ref={featuresAnimation.ref}
          className={`container mx-auto max-w-6xl transition-all duration-700 ${
            featuresAnimation.isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center">
            Our Unique IP Moat
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-4xl mx-auto text-center">
            RekognizeAI owns and curates the largest private dataset of persons of color globally, sourced from secure public-sector partnerships, correctional facilities, mobile data capture systems, and controlled institutional pipelines.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-border hover:shadow-lg transition-all hover:scale-105 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
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
        <div 
          ref={whyExistAnimation.ref}
          className={`container mx-auto max-w-4xl text-center transition-all duration-700 ${
            whyExistAnimation.isVisible ? 'animate-fade-up' : 'opacity-0'
          }`}
        >
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
