import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { CallbackSection } from "../../components/CallbackSection";
import { Modal } from "../../components/ui/modal";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

// Images
import heroBg from "../../assets/hero-bg.png";
import mortgageImg from "../../assets/mortgage-consulting.png";
import financialImg from "../../assets/financial-consulting.png";
import businessImg from "../../assets/business-consulting.png";

const services = [
  {
    image: mortgageImg,
    title: "Financial Reporting",
    description:
      "We provide timely and detailed financial reports—monthly, quarterly, or semi-annually—based on your selected package. Our reports offer the insight you need to make confident, informed decisions about your business and help you navigate this process.",
  },
  {
    image: financialImg,
    title: "Tax Filing",
    description:
      "Stay compliant and stress-free with Lumena’s tax filing services. We manage corporate tax returns, GST/HST filing, and personal tax filing for directors and their families—ensuring everything is filed accurately and on time.",
  },
  {
    image: businessImg,
    title: "Bookkeeping",
    description:
      "Our bookkeeping services are tailored for businesses at every stage, from startups to growing enterprises. We handle transaction tracking, monthly bank reconciliations, and accurate financial reporting to keep your books in order and your mind at ease.",
  },
];

export const Home = () => {
  const [email, setEmail] = useState("");
  const [modalState, setModalState] = useState({
    isOpen: false,
    title: "",
    message: "",
    type: "success",
  });

  const showModal = (title, message, type = "success") => {
    setModalState({
      isOpen: true,
      title,
      message,
      type,
    });
  };

  const closeModal = () => {
    setModalState({
      ...modalState,
      isOpen: false,
    });
  };

  const handleGetStarted = () => {
    if (email) {
      console.log("Get Started with email:", email);
      // Add your form submission logic here
      showModal(
        "Success!",
        `Thank you for your interest! We'll contact you at ${email} shortly.`,
        "success"
      );
      setEmail("");
    } else {
      showModal(
        "Email Required",
        "Please enter your email address to get started.",
        "error"
      );
    }
  };

  return (
    <div className="bg-[#F8F8F7] w-full relative min-h-screen">
      <Navbar />

      {/* Hero Section - Redesigned */}
      <header id="home" className="relative w-full overflow-hidden">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          alt="Background"
          src={heroBg}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#04343C]/85 to-[#0E5C66]/80" />

        <div className="relative z-10 py-[80px] md:py-[100px] lg:py-[120px] max-w-[1440px] mx-auto px-[20px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[1100px] mx-auto flex flex-col items-center">
            <div className="inline-block px-[18px] py-[10px] bg-[#F47A20]/20 backdrop-blur-sm rounded-full mb-[24px]">
              <span className="[font-family:'Poppins',Helvetica] font-semibold text-[#F47A20] text-sm md:text-base uppercase tracking-wider">
                WealthWize Consulting Group
              </span>
            </div>

            <h1 className="w-full max-w-[950px] [font-family:'Poppins',Helvetica] font-bold text-white text-[42px] sm:text-[52px] md:text-[62px] lg:text-[72px] xl:text-[80px] tracking-[-0.02em] leading-[1.1] text-center mb-[24px]">
              Expert Tax Services at Your Fingertips
            </h1>

            <p className="w-full max-w-[700px] [font-family:'Poppins',Helvetica] font-normal text-white/90 text-[16px] sm:text-[17px] md:text-[19px] lg:text-[21px] tracking-[0] leading-[1.7] text-center mb-[40px]">
              Our tax experts will help you discover every deduction and credit available to you, so you can save big on your taxes.
            </p>

            <div className="w-full max-w-[650px] relative">
              <div className="w-full h-[70px] sm:h-[75px] md:h-[80px] bg-white/90 backdrop-blur-md rounded-[14px] flex items-center px-[6px] gap-[6px] shadow-lg" />

              <Input
                type="email"
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleGetStarted()}
                className="absolute top-[6px] left-[6px] w-[calc(100%-140px)] sm:w-[calc(100%-160px)] md:w-[calc(100%-190px)] h-[58px] sm:h-[63px] md:h-[68px] bg-transparent border-0 pl-[20px] md:pl-[24px] [font-family:'Poppins',Helvetica] font-normal text-[#04343C] text-[14px] sm:text-[15px] md:text-[16px] placeholder:text-[#5E6E73] placeholder:opacity-60 focus-visible:ring-0 focus-visible:ring-offset-0"
              />

              <Button
                onClick={handleGetStarted}
                className="absolute top-[6px] right-[6px] w-[130px] sm:w-[150px] md:w-[180px] h-[58px] sm:h-[63px] md:h-[68px] rounded-[10px] bg-[#F47A20] hover:bg-[#0E5C66] [font-family:'Poppins',Helvetica] font-semibold text-white text-[14px] sm:text-[15px] md:text-[16px] transition-all duration-300 hover:shadow-xl"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Services Section - Same Layout as Services Page */}
      <section id="services" className="relative w-full py-[70px] md:py-[90px] lg:py-[110px] bg-white">
        <div className="max-w-[1400px] mx-auto px-[20px] md:px-[40px] lg:px-[60px]">
          <div className="text-center mb-[50px] md:mb-[60px]">
            <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#04343C] text-[32px] sm:text-[36px] md:text-[42px] lg:text-5xl tracking-[0] leading-[normal] mb-[16px]">
              Our Services
            </h2>
            <p className="max-w-[700px] mx-auto [font-family:'Poppins',Helvetica] font-normal text-[#5E6E73] text-[16px] md:text-lg text-center tracking-[0] leading-[1.6]">
              Comprehensive tax and accounting solutions designed to simplify your financial life and maximize your savings.
            </p>
          </div>

          <div className="space-y-[50px] md:space-y-[60px] lg:space-y-[70px]">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-[35px] md:gap-[45px] lg:gap-[55px] items-center`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-[50%]">
                  <div className="relative rounded-[20px] overflow-hidden shadow-lg group/img">
                    <img
                      className="w-full h-[320px] md:h-[380px] lg:h-[420px] object-cover transition-transform duration-700 group-hover/img:scale-105"
                      alt={service.title}
                      src={service.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#04343C]/50 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-[50%]">
                  <div className="inline-block px-[14px] py-[6px] bg-[#F47A20]/10 rounded-full mb-[18px]">
                    <span className="[font-family:'Poppins',Helvetica] font-medium text-[#F47A20] text-xs uppercase tracking-wider">
                      Service {index + 1}
                    </span>
                  </div>

                  <h3 className="[font-family:'Poppins',Helvetica] font-bold text-[#04343C] text-[26px] md:text-[32px] lg:text-[36px] mb-[18px] leading-[1.3]">
                    {service.title}
                  </h3>

                  <p className="[font-family:'Poppins',Helvetica] font-normal text-[#5E6E73] text-[15px] md:text-[16px] lg:text-[17px] leading-[1.8]">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-[60px] md:mt-[70px]">
            <Link to="/services">
              <Button
                className="px-[36px] py-[16px] h-auto rounded-[12px] bg-[#04343C] hover:bg-[#F47A20] [font-family:'Poppins',Helvetica] font-semibold text-white text-[16px] transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <CallbackSection />

      <Footer />

      <Modal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        title={modalState.title}
        message={modalState.message}
        type={modalState.type}
      />
    </div>
  );
};
