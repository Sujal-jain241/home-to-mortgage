import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Resources",
      links: [
        { name: "Home affordability calculator", href: "/mortgage-calculator" },
        { name: "Mortgage calculator", href: "/mortgage-calculator" },
        { name: "Free mortgage audit", href: "/" },
        { name: "FHA loan calculator", href: "/" },
        { name: "VA loan calculator", href: "/" },
        { name: "HELOC calculator", href: "/" },
        { name: "HELOC vs Cash-out refinance calculator", href: "/" },
        { name: "Buy vs rent calculator", href: "/" },
        { name: "Closing costs calculator", href: "/" },
        { name: "Debt-to-income calculator", href: "/" },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about-us" },
        { name: "Careers", href: "/" },
        { name: "Media", href: "/" },
        { name: "Partner With Us", href: "/" },
        { name: "Learning center", href: "/" },
        { name: "FAQs", href: "/" },
        { name: "Investor Relations", href: "/" },
      ]
    },
    {
      title: "Contact Us",
      links: [
        { name: "hello@better.com", href: "mailto:hello@better.com" },
        { name: "415-523-8837", href: "tel:415-523-8837" },
        { name: "FAQ", href: "/" },
        { name: "Glossary", href: "/" },
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "NMLS Consumer Access", href: "/" },
        { name: "Privacy Policy", href: "/" },
        { name: "Terms of Use", href: "/" },
        { name: "Disclosures", href: "/" },
        { name: "Licensing", href: "/" },
        { name: "Affiliated Business", href: "/" },
      ]
    }
  ];

  return (
    <footer className="bg-better-teal text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.href.startsWith('http') || link.href.startsWith('tel:') || link.href.startsWith('mailto:') ? (
                      <a 
                        href={link.href}
                        className="text-white/80 hover:text-white transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link 
                        to={link.href}
                        className="text-white/80 hover:text-white transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Media */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">
            {/* Logo and Company Info */}
            <div className="flex-1">
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold">Better</span>
              </div>
              <p className="text-white/70 text-sm max-w-md leading-relaxed">
                Better Mortgage Corporation provides home loans entirely online. 
                Licensed by the Department of Financial Protection and Innovation under the California Residential Mortgage Lending Act.
              </p>
            </div>

            {/* Equal Housing */}
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-better-teal font-bold text-xs">=</span>
              </div>
              <span className="text-white/70 text-sm">Equal Housing Lender</span>
            </div>
          </div>

          {/* Legal Text */}
          <div className="mt-8 pt-8 border-t border-white/20">
            <div className="text-white/60 text-xs leading-relaxed space-y-4">
              <p>
                <strong>Better Mortgage Corporation</strong> NMLS #330511. 3 World Trade Center, 175 Greenwich Street, 57th Floor, New York, NY 10007. Telephone: (415) 523-8837. 
                Licensed by the Department of Financial Protection and Innovation under the California Residential Mortgage Lending Act. Licensed to make loans in: AK, AL, AR, AZ, CA, CO, CT, DC, DE, FL, GA, HI, IA, ID, IL, IN, KS, KY, LA, MA, MD, ME, MI, MN, MO, MS, MT, NC, ND, NE, NH, NJ, NM, NV, NY, OH, OK, OR, PA, RI, SC, SD, TN, TX, UT, VA, VT, WA, WI, WV, WY.
              </p>
              
              <p>
                <strong>Better Real Estate, LLC</strong> dba BRE, Better Home & Finance, Better Real Estate, and Better Sale for homes purchased in CA, CT, FL, GA, IL, MA, MD, MI, MN, NC, NJ, NY, PA, TN, and VA. 
                Licensed as a Real Estate Broker by the CA Department of Real Estate, License #02080055. Licensed as a Real Estate Broker by the State of New York Department of State, License #10991236067.
              </p>

              <p>
                Home lending products offered by Better Mortgage Corporation. Not all products are available in all states. 
                Interest rates and products are subject to change without notice and may or may not be available at the time of loan commitment or lock-in. 
                This is not a commitment to lend.
              </p>

              <p>
                All information provided on this website is made available for educational purposes only and is not intended to be construed as financial, tax or legal advice. 
                We make no representations as to the accuracy or completeness of the information and all information should be verified by the reader. 
                This website is not intended for use by residents of the European Union.
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-4 border-t border-white/20 text-center">
            <p className="text-white/60 text-sm">
              © 2024 Better Mortgage Corporation. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;