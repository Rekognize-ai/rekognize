import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Database, Shield, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ContactFormModal } from "@/components/ContactFormModal";

const Research = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  
  const pipelineSteps = [
    {
      number: "01",
      title: "Data Acquisition & Governance",
      description: "All data is ethically sourced from correctional facilities, institutions, and public sector partners.",
      icon: Database,
    },
    {
      number: "02",
      title: "Annotation & Labeling",
      description: "Human-in-the-loop pipeline with multi-shift annotators.",
      icon: FileText,
    },
    {
      number: "03",
      title: "Validation & Bias Testing",
      description: "Every training cycle includes variance testing on People of Color across multiple conditions.",
      icon: Shield,
    },
    {
      number: "04",
      title: "Model Training & Optimization",
      description: "Models are trained to maximize accuracy while reducing racial and demographic bias.",
      icon: TrendingUp,
    },
  ];

  const researchAreas = [
    "Dataset bias correction",
    "Fairness-audited machine learning",
    "Real-world variance modeling",
    "Edge-case performance for minority groups",
    "Large-scale model training on diverse datasets",
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
              Research Philosophy
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            RekognizeAI is not just an algorithm—it is a research institution dedicated to solving AI fairness challenges at scale.
          </p>
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
            We conduct continuous research in:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchAreas.map((area, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-lg bg-background border border-border"
              >
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <p className="text-lg text-foreground">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Pipeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            Our Research Pipeline
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pipelineSteps.map((step, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-4xl font-bold text-primary/20 mb-2">{step.number}</div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
            Research Publications
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Coming soon - Our groundbreaking research in AI fairness and bias mitigation
          </p>
          <div className="space-y-4">
            <div className="p-6 rounded-lg bg-background border border-border">
              <h3 className="text-lg font-semibold mb-2">
                "Mitigating Racial Bias in Large-Scale Computer Vision Systems"
              </h3>
              <p className="text-sm text-muted-foreground">In preparation</p>
            </div>
            <div className="p-6 rounded-lg bg-background border border-border">
              <h3 className="text-lg font-semibold mb-2">
                "Dataset Equity for Global AI Models"
              </h3>
              <p className="text-sm text-muted-foreground">In preparation</p>
            </div>
            <div className="p-6 rounded-lg bg-background border border-border">
              <h3 className="text-lg font-semibold mb-2">
                "Real-World Variance Testing for Facial Recognition Models"
              </h3>
              <p className="text-sm text-muted-foreground">In preparation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborate Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Contribute or Collaborate
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We welcome partnerships from universities, government agencies, researchers, and international institutions.
          </p>
          <Button 
            size="lg" 
            className="text-base px-8"
            onClick={() => setIsContactModalOpen(true)}
          >
            Contact the Research Team
          </Button>
        </div>
      </section>

      <ContactFormModal 
        open={isContactModalOpen} 
        onOpenChange={setIsContactModalOpen}
        subjectPrefix="Research Team Inquiry"
      />

      <Footer />
    </div>
  );
};

export default Research;
