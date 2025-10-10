import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import linkedinIcon from "../assets/linkedin.svg";
import instagramIcon from "../assets/instagram.svg";
import facebookIcon from "../assets/facebook.svg";

const navItems = [
  { label: "Home", href: "/", type: "route" },
  { label: "About", href: "/about", type: "route" },
  { label: "Our Services", href: "/services", type: "route" },
  { label: "Contact us", href: "/contact", type: "route" },
];

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  
  // Initialize active item based on current route
  const getActiveItem = (pathname) => {
    if (pathname === "/") return "Home";
    if (pathname === "/about") return "About";
    if (pathname === "/services") return "Our Services";
    if (pathname === "/contact") return "Contact us";
    return "Home";
  };

  const [activeItem, setActiveItem] = useState(getActiveItem(location.pathname));

  // Update active item based on current route
  useEffect(() => {
    setActiveItem(getActiveItem(location.pathname));
  }, [location.pathname]);

  const closeMobileMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setMobileMenuOpen(false);
      setIsClosing(false);
    }, 300); // Match animation duration
  };

  const handleNavClick = (label, href, type) => {
    setActiveItem(label);
    closeMobileMenu();
    
    if (type === "route") {
      // Navigate to a different route
      navigate(href);
    } else if (type === "scroll") {
      // If not on home page, navigate to home first
      if (location.pathname !== "/") {
        navigate("/");
        // Wait for navigation to complete before scrolling
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // Already on home page, just scroll
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const handleSocialClick = (platform) => {
    const urls = {
      'LinkedIn': 'https://linkedin.com',
      'Facebook': 'https://www.instagram.com/wealthwizeconsulting/',
      'Instagram': 'https://www.facebook.com/people/wealthwizeconsulting/61566153907524/?mibextid=LQQJ4d'
    };
    
    if (urls[platform]) {
      window.open(urls[platform], '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="relative w-full bg-white">
      <nav className="relative w-full z-30 h-[70px] md:h-[85px] lg:h-[100px]">
        <div className="max-w-[1440px] mx-auto h-full px-[20px] md:px-[40px] lg:px-[60px] flex items-center justify-between gap-[20px]">
          <img
            className="h-[45px] md:h-[55px] lg:h-[65px] w-auto object-contain flex-shrink-0 cursor-pointer"
            alt="WealthWize Logo"
            src={logo}
            onClick={() => navigate("/")}
          />

          <div className="hidden lg:flex items-center gap-[30px] lg:gap-[40px] xl:gap-[60px]">
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                <button
                  onClick={() => handleNavClick(item.label, item.href, item.type)}
                  className={`h-[27px] flex items-center justify-center [font-family:'Poppins',Helvetica] text-base xl:text-lg text-center tracking-[0] leading-[normal] cursor-pointer transition-colors ${
                    activeItem === item.label
                      ? "font-semibold text-[#F47A20]"
                      : "font-normal text-[#04343C] opacity-60 hover:opacity-100"
                  }`}
                >
                  {item.label}
                </button>
                {activeItem === item.label && (
                  <div className="absolute top-[27px] left-1/2 transform -translate-x-1/2 w-5 h-[3px] bg-[#F47A20]" />
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

            <a href="tel:11111111111111111">
              <Button 
                className="h-[42px] xl:h-[46px] px-[20px] xl:px-[28px] rounded-xl bg-[#F47A20] hover:bg-[#0E5C66] [font-family:'Poppins',Helvetica] font-normal text-white text-sm xl:text-base whitespace-nowrap transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
              >
                Contact us
              </Button>
            </a>
          </div>

          <button
            className="lg:hidden p-2 text-[#04343C] z-50"
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
              className="text-[#04343C] p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X size={32} />
            </button>
          </div>
          <div className="flex flex-col gap-[30px] px-[20px] pt-[20px]">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(item.label, item.href, item.type)}
                className={`h-[40px] flex items-center justify-center [font-family:'Poppins',Helvetica] text-xl text-center tracking-[0] leading-[normal] ${
                  activeItem === item.label
                    ? "font-semibold text-[#F47A20]"
                    : "font-normal text-[#04343C] opacity-60"
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

            <a href="tel:11111111111111111" className="w-full">
              <Button 
                className="h-[50px] w-full rounded-xl bg-[#F47A20] hover:bg-[#0E5C66] [font-family:'Poppins',Helvetica] font-normal text-white text-lg mt-[20px] transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
              >
                Contact us
              </Button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

