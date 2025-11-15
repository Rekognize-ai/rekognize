import { Linkedin, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Connect With Us
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Follow our journey as we build the world's most equitable AI system.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/company/rekognizeai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://instagram.com/rekognizeai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://twitter.com/rekognizeai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="text-left md:text-right">
            <p className="text-sm text-muted-foreground">
              © {currentYear} RekognizeAI
            </p>
            <p className="text-sm font-medium mt-2 text-foreground/80">
              Responsible AI Built for Justice
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
