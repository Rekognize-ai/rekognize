import { Linkedin, Instagram, Twitter, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import rekognizeLogo from "@/assets/rekognize-logo.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background/95 backdrop-blur-md border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>2050 15th Street, Suite 312<br />Detroit, MI 48216, USA</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone size={16} className="flex-shrink-0" />
                <a href="tel:7344727851" className="hover:text-primary transition-colors">
                  734.472.7851
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              Connect With Us
            </h3>
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

          {/* Copyright */}
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
