import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const footerNavItems = [
  { label: "Home", href: "/", type: "route" },
  { label: "About", href: "/about", type: "route" },
  { label: "Our Services", href: "/services", type: "route" },
  { label: "Contact us", href: "/contact", type: "route" },
];

const socialLinks = [
  { name: "LinkedIn", url: "https://linkedin.com" },
  { name: "Instagram", url: "https://instagram.com" },
  { name: "Facebook", url: "https://facebook.com" },
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
    console.log(`Navigate to ${name}: ${url}`);
    // Uncomment to open in new tab
    // window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="relative w-full bg-[#202020] opacity-80 py-[60px] md:py-[80px]">
      <div className="max-w-[1440px] mx-auto px-[20px] md:px-[40px] lg:px-[60px]">
        <nav className="flex justify-center mb-[40px] md:mb-[60px] overflow-x-auto">
          <div className="flex items-center justify-center gap-[4px] sm:gap-[6px] md:gap-0 bg-[#5ce0e5] rounded-[100.2px] px-[4px] sm:px-[6px] md:px-[4px] py-[4px] sm:py-[6px] md:py-[4px] min-w-max">
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
                    <span className="[font-family:'Poppins',Helvetica] font-semibold text-[#5ce0e5] text-[12px] sm:text-[13px] md:text-base tracking-[0] leading-5 whitespace-nowrap">
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
          <div className="w-full h-px bg-gray-600 mb-[30px] md:mb-[40px]" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-[20px] md:gap-0">
            <div className="[font-family:'Poppins',Helvetica] font-medium text-[#5ce0e5] text-[13px] sm:text-sm md:text-base lg:text-lg tracking-[0] leading-6 text-center md:text-left">
              © Copyright 2024, All Rights Reserved
            </div>

            <div className="flex items-center gap-[16px] sm:gap-[20px] md:gap-6">
              {socialLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => handleSocialClick(link.name, link.url)}
                  className="[font-family:'Poppins',Helvetica] font-medium text-[#5ce0e5] text-[13px] sm:text-sm md:text-base lg:text-lg tracking-[0] leading-6 hover:underline bg-transparent border-0 cursor-pointer p-0 transition-all hover:opacity-80 hover:scale-105 active:scale-95"
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

