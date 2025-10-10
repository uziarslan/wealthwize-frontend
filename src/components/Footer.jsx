import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logoTrans from "../assets/logo-trans.png";

const footerNavItems = [
  { label: "Home", href: "/", type: "route" },
  { label: "About", href: "/about", type: "route" },
  { label: "Our Services", href: "/services", type: "route" },
  { label: "Contact us", href: "/contact", type: "route" },
];

const socialLinks = [
  { name: "LinkedIn", url: "https://linkedin.com" },
  { name: "Instagram", url: "https://www.instagram.com/wealthwizeconsulting/" },
  { name: "Facebook", url: "https://www.facebook.com/people/wealthwizeconsulting/61566153907524/?mibextid=LQQJ4d" },
];

export const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
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

  const handleNavClick = (label, href, type) => {
    setActiveItem(label);
    
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

  const handleSocialClick = (name, url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="relative w-full bg-[#04343C] py-[60px] md:py-[80px]">
      <div className="max-w-[1440px] mx-auto px-[20px] md:px-[40px] lg:px-[60px]">
        {/* Footer Logo */}
        <div className="flex justify-center mb-[40px] md:mb-[50px]">
          <img
            src={logoTrans}
            alt="WealthWize Consulting Group"
            className="h-[60px] md:h-[80px] lg:h-[100px] w-auto object-contain cursor-pointer transition-all duration-300 hover:scale-105 hover:opacity-90"
            onClick={() => navigate("/")}
          />
        </div>

        <nav className="flex justify-center mb-[40px] md:mb-[60px] overflow-x-auto">
          <div className="flex items-center justify-center gap-[4px] sm:gap-[6px] md:gap-0 bg-[#F47A20] rounded-[100.2px] px-[4px] sm:px-[6px] md:px-[4px] py-[4px] sm:py-[6px] md:py-[4px] min-w-max">
            {footerNavItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(item.label, item.href, item.type)}
                className={`flex items-center justify-center transition-all flex-shrink-0 ${
                  index > 0 ? "ml-[3px] sm:ml-[4px] md:ml-[6.8px]" : ""
                } px-[8px] sm:px-[12px] md:px-0 ${
                  index === 0
                    ? "w-auto md:w-[92.18px]"
                    : index === 2
                      ? "w-auto md:w-[115.63px]"
                      : index === 3
                        ? "w-auto md:w-[112.45px]"
                        : "w-auto md:w-[92.18px]"
                } h-[36px] sm:h-[38px] md:h-[40.08px]`}
              >
                {activeItem === item.label ? (
                  <div className="relative w-full h-full bg-white rounded-[100.2px] flex items-center justify-center px-[10px] sm:px-[14px] md:px-0">
                    <span className="[font-family:'Poppins',Helvetica] font-semibold text-[#F47A20] text-[12px] sm:text-[13px] md:text-base tracking-[0] leading-5 whitespace-nowrap">
                      {item.label}
                    </span>
                  </div>
                ) : (
                  <span className="[font-family:'Poppins',Helvetica] font-normal text-white text-[12px] sm:text-[13px] md:text-base tracking-[0] leading-6 hover:opacity-80 transition-opacity whitespace-nowrap">
                    {item.label}
                  </span>
                )}
              </button>
            ))}
          </div>
        </nav>

        <div>
          <div className="w-full h-px bg-[#5E6E73] opacity-30 mb-[30px] md:mb-[40px]" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-[20px] md:gap-0">
            <div className="[font-family:'Poppins',Helvetica] font-medium text-[#F8F8F7] opacity-80 text-[13px] sm:text-sm md:text-base tracking-[0] leading-6 text-center md:text-left">
              © 2024 WealthWize Consulting Group. All Rights Reserved.
            </div>

            <div className="flex items-center gap-[16px] sm:gap-[20px] md:gap-6">
              {socialLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => handleSocialClick(link.name, link.url)}
                  className="[font-family:'Poppins',Helvetica] font-medium text-[#F47A20] text-[13px] sm:text-sm md:text-base lg:text-lg tracking-[0] leading-6 hover:text-[#0E5C66] bg-transparent border-0 cursor-pointer p-0 transition-all hover:scale-105 active:scale-95"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

