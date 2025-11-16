import { Linkedin, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import rekognizeLogo from "@/assets/rekognize-logo.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background/95 backdrop-blur-md border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left Section - Logo */}
          <div>
            <Link to="/" className="flex items-center">
              <img 
                src={rekognizeLogo} 
                alt="Rekognize" 
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground mt-4">
              Responsible AI Built for Justice
            </p>
          </div>

          {/* Center Section - Social Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              Connect With Us
            </h3>
            <div className="flex justify-center space-x-6">
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

          {/* Right Section - Copyright */}
          <div className="text-left md:text-right">
            <p className="text-sm text-muted-foreground">
              © {currentYear} RekognizeAI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
