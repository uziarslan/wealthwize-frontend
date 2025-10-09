import React, { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import linkedinIcon from "../assets/linkedin.svg";
import instagramIcon from "../assets/instagram.svg";
import facebookIcon from "../assets/facebook.svg";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Contact us", href: "#contact" },
  { label: "Podcast", href: "#podcast" },
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  const closeMobileMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setMobileMenuOpen(false);
      setIsClosing(false);
    }, 300); // Match animation duration
  };

  const handleNavClick = (label, href) => {
    setActiveItem(label);
    closeMobileMenu();
    
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSocialClick = (platform) => {
    console.log(`Navigate to ${platform}`);
    // Add your social media URLs here
    // window.open('https://linkedin.com/yourpage', '_blank');
  };

  return (
    <div className="relative w-full bg-white">
      <nav className="relative w-full z-30 h-[80px] md:h-[120px] lg:h-[150px]">
        <div className="max-w-[1440px] mx-auto h-full px-[20px] md:px-[40px] lg:px-[60px] flex items-center justify-between gap-[20px]">
          <img
            className="w-[80px] md:w-[120px] lg:w-[160px] h-auto object-cover flex-shrink-0"
            alt="WealthWize Logo"
            src={logo}
          />

          <div className="hidden lg:flex items-center gap-[30px] lg:gap-[40px] xl:gap-[60px]">
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                <button
                  onClick={() => handleNavClick(item.label, item.href)}
                  className={`h-[27px] flex items-center justify-center [font-family:'Poppins',Helvetica] text-base xl:text-lg text-center tracking-[0] leading-[normal] cursor-pointer transition-colors ${
                    activeItem === item.label
                      ? "font-semibold text-[#5cdfe4]"
                      : "font-normal text-[#091a24] opacity-60 hover:opacity-100"
                  }`}
                >
                  {item.label}
                </button>
                {activeItem === item.label && (
                  <div className="absolute top-[27px] left-1/2 transform -translate-x-1/2 w-5 h-[3px] bg-[#5cdfe4]" />
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-[20px] lg:gap-[30px] xl:gap-[40px] flex-shrink-0">
            <div className="flex items-center gap-[20px] lg:gap-[25px] xl:gap-[30px]">
              <button onClick={() => handleSocialClick('LinkedIn')} className="hover:opacity-70 transition-opacity">
                <img className="w-6 h-6 xl:w-7 xl:h-7" alt="LinkedIn" src={linkedinIcon} />
              </button>
              <button onClick={() => handleSocialClick('Instagram')} className="hover:opacity-70 transition-opacity">
                <img className="w-6 h-6 xl:w-7 xl:h-7" alt="Instagram" src={instagramIcon} />
              </button>
              <button onClick={() => handleSocialClick('Facebook')} className="hover:opacity-70 transition-opacity">
                <img className="w-6 h-6 xl:w-7 xl:h-7" alt="Facebook" src={facebookIcon} />
              </button>
            </div>

            <Button 
              onClick={handleContactClick}
              className="h-[42px] xl:h-[46px] px-[20px] xl:px-[28px] rounded-xl bg-[linear-gradient(90deg,rgba(92,224,229,1)_0%,rgba(43,79,238,1)_100%)] [font-family:'Poppins',Helvetica] font-normal text-white text-sm xl:text-base whitespace-nowrap transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
            >
              Contact us
            </Button>
          </div>

          <button
            className="lg:hidden p-2 text-[#091a24] z-50"
            onClick={() => mobileMenuOpen ? closeMobileMenu() : setMobileMenuOpen(true)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className={`lg:hidden fixed inset-0 bg-white z-40 ${isClosing ? 'animate-slideOutRight' : 'animate-slideInRight'}`}>
          <div className="flex items-end justify-end p-4">
            <button
              onClick={closeMobileMenu}
              className="text-[#091a24] p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X size={32} />
            </button>
          </div>
          <div className="flex flex-col gap-[30px] px-[20px] pt-[20px]">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(item.label, item.href)}
                className={`h-[40px] flex items-center justify-center [font-family:'Poppins',Helvetica] text-xl text-center tracking-[0] leading-[normal] ${
                  activeItem === item.label
                    ? "font-semibold text-[#5cdfe4]"
                    : "font-normal text-[#091a24] opacity-60"
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="flex items-center justify-center gap-[40px] mt-[20px]">
              <button onClick={() => handleSocialClick('LinkedIn')} className="hover:opacity-70 transition-opacity">
                <img className="w-8 h-8" alt="LinkedIn" src={linkedinIcon} />
              </button>
              <button onClick={() => handleSocialClick('Instagram')} className="hover:opacity-70 transition-opacity">
                <img className="w-8 h-8" alt="Instagram" src={instagramIcon} />
              </button>
              <button onClick={() => handleSocialClick('Facebook')} className="hover:opacity-70 transition-opacity">
                <img className="w-8 h-8" alt="Facebook" src={facebookIcon} />
              </button>
            </div>

            <Button 
              onClick={handleContactClick}
              className="h-[50px] w-full rounded-xl bg-[linear-gradient(90deg,rgba(92,224,229,1)_0%,rgba(43,79,238,1)_100%)] [font-family:'Poppins',Helvetica] font-normal text-white text-lg mt-[20px] transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
            >
              Contact us
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

