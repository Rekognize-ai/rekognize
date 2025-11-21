import { Card, CardContent } from "@/components/ui/card";
import { User, Linkedin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import abrahamImage from "@/assets/abraham.jpeg";
import dapoImage from "@/assets/dapo.jpeg";

const Team = () => {
  const leadership = [
    {
      name: "Adeyemo Opeyemi",
      role: "CEO & Founder",
      description: "Visionary leader driving the mission for responsible AI.",
      image: abrahamImage,
      linkedin: "https://www.linkedin.com/in/opeyemi-adeyemo-a41823208",
    },
    {
      name: "Kabiru Okeleye",
      role: "CTO",
      description: "Leads all engineering, infrastructure, and model development.",
    },
    {
      name: "Adedapo Adeniyi",
      role: "COO",
      description: "Oversees external relations, partnerships, user advocacy.",
      image: dapoImage,
      linkedin: "https://www.linkedin.com/in/adedapoadeniyi",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            The{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              RekognizeAI Team
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            A global, mission-driven team building the most accurate and ethical facial recognition system for People of Color.
          </p>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            Leadership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map((member, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                        <User className="w-8 h-8 text-white" />
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold">{member.name}</h3>
                        {member.linkedin && (
                          <a 
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 transition-colors"
                          >
                            <Linkedin className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                      <p className="text-primary font-medium mb-2">{member.role}</p>
                      <p className="text-muted-foreground">{member.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
            Our Advisors
          </h2>
          <p className="text-center text-lg text-muted-foreground">
            We're building an exceptional advisory board of AI ethics experts, technologists, and industry leaders. More information coming soon.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-gradient-to-r from-primary to-accent p-12 rounded-2xl text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Building the Future of Equitable AI
            </h3>
            <p className="text-lg opacity-95 max-w-2xl mx-auto">
              Our team is united by a shared vision: to create AI technology that works fairly and accurately for everyone, regardless of race, ethnicity, or background.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
