import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { CallbackSection } from "../../components/CallbackSection";
import { Modal } from "../../components/ui/modal";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";

// Images
import heroBg from "../../assets/hero-bg.png";
import handshakeImg from "../../assets/handshake.png";
import mortgageImg from "../../assets/mortgage-consulting.png";
import financialImg from "../../assets/financial-consulting.png";
import businessImg from "../../assets/business-consulting.png";

// Icons
import starIcon from "../../assets/star.svg";
import arrowLeft from "../../assets/arrow-left.svg";
import arrowRight from "../../assets/arrow-right.svg";

const services = [
  {
    image: mortgageImg,
    title: "Mortgage consulting",
    description:
      "Whether you're a first-time homebuyer or looking to refinance, our mortgage consultants provide tailored advice to help you secure the best rates and terms.",
  },
  {
    image: financialImg,
    title: "Financial consulting",
    description:
      "Our financial consulting services are designed to help individuals and businesses achieve long-term financial stability.",
  },
  {
    image: businessImg,
    title: "Business consulting",
    description:
      "We provide comprehensive business consulting services to help entrepreneurs and established companies optimize their operations, increase profitability, and drive growth.",
  },
];

const stats = [
  {
    value: "$50+ Billion",
    label: "Assets under administration",
  },
  {
    value: "$500,000",
    label: "CDIC coverage on eligible deposits",
  },
  {
    value: "4x lower",
    label: "Management fees than the average Canadian mutual fund",
  },
];

const testimonials = [
  {
    id: 1,
    quote: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    name: "Cameron Williamson",
    title: "CEO, Cameron Industries",
  },
  {
    id: 2,
    quote: "WealthWize has transformed our financial planning process. Their expertise in mortgage consulting is unparalleled, and their team is always professional and responsive.",
    name: "Sarah Johnson",
    title: "Director, Tech Innovations Inc",
  },
  {
    id: 3,
    quote: "The best financial consulting service we've ever worked with. They helped us navigate complex investment decisions with confidence and clarity.",
    name: "Michael Chen",
    title: "CFO, Global Solutions Ltd",
  },
  {
    id: 4,
    quote: "Outstanding service and expertise. WealthWize made our home buying journey smooth and stress-free. Highly recommended!",
    name: "Emily Rodriguez",
    title: "Small Business Owner",
  },
  {
    id: 5,
    quote: "Professional, knowledgeable, and truly dedicated to their clients' success. WealthWize has been instrumental in achieving our financial goals.",
    name: "David Thompson",
    title: "Managing Partner, Thompson & Associates",
  },
];

export const Home = () => {
  const [email, setEmail] = useState("");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
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

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <div className="bg-white w-full relative min-h-screen">
      <Navbar />

      <header id="home" className="relative w-full h-auto md:h-[550px] lg:h-[600px]">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover min-h-full"
          alt="Background"
          src={heroBg}
        />

        <div className="relative z-10 py-[50px] sm:py-[60px] md:py-[70px] lg:py-[80px] max-w-[1440px] mx-auto px-[20px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[1000px]">
            <h1 className="w-full max-w-full md:max-w-[621px] [font-family:'Poppins',Helvetica] font-bold text-[#F47A20] text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[72px] tracking-[-0.02em] leading-[1.2] sm:leading-[1.15] md:leading-[1.1] lg:leading-[1.1] text-left">
              CONSULTING &amp; MORTGAGE SERVICES
            </h1>

            <p className="mt-[20px] md:mt-[24px] lg:mt-[28px] w-full max-w-[600px] [font-family:'Poppins',Helvetica] font-normal text-white text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] tracking-[0] leading-[1.6] text-left">
              Expert Mortgage Consulting: Simplifying Your Path to Homeownership
            </p>

            <div className="mt-[32px] sm:mt-[40px] md:mt-[44px] lg:mt-[48px] w-full max-w-[600px] relative">
              <div className="w-full h-[70px] sm:h-[75px] md:h-[85px] bg-[#ffffff4c] rounded-[16px] sm:rounded-[18px] md:rounded-[22px] backdrop-blur-[14px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(14px)_brightness(100%)] flex items-center px-[5px] gap-[5px] transition-all duration-300 hover:bg-[#ffffff60]" />

              <Input
                type="email"
                placeholder="Your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleGetStarted()}
                className="absolute top-[5px] left-[5px] w-[calc(100%-130px)] sm:w-[calc(100%-150px)] md:w-[calc(100%-180px)] h-[60px] sm:h-[65px] md:h-[75px] bg-transparent border-0 pl-[20px] md:pl-[38px] [font-family:'Poppins',Helvetica] font-normal text-white text-[15px] sm:text-[16px] md:text-[17px] placeholder:text-white placeholder:opacity-80 focus-visible:ring-0 focus-visible:ring-offset-0"
              />

              <Button
                onClick={handleGetStarted}
                className="absolute top-[5px] right-[5px] w-[120px] sm:w-[140px] md:w-[170px] h-[60px] sm:h-[65px] md:h-[75px] rounded-[12px] sm:rounded-[14px] md:rounded-[18px] bg-[#F47A20] hover:bg-[#0E5C66] [font-family:'Poppins',Helvetica] font-semibold text-white text-[13px] sm:text-[15px] md:text-[17px] transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section id="services" className="relative w-full mt-[80px] md:mt-[120px]">
        <div className="max-w-[1440px] mx-auto px-[20px] md:px-[40px] lg:px-[60px]">
          <h2 className="w-full text-center [font-family:'Poppins',Helvetica] font-bold text-black text-[22px] md:text-[26px] lg:text-[32px] tracking-[0] leading-[normal] mb-[8px] md:mb-[10px]">
            Approval, Pre-Approval, Refinance or Switch
          </h2>
          <p className="max-w-[333px] mx-auto opacity-80 [font-family:'Poppins',Helvetica] font-normal text-[#5E6E73] text-[16px] md:text-lg text-center tracking-[0] leading-[normal] transition-opacity duration-300 hover:opacity-100 mb-[40px]">
            Quick approvals for Excellent, Fair, or Bad Credit
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] lg:gap-[42px]">
            {services.map((service, index) => (
              <Card
                key={index}
                className="w-full rounded-[20px] border-0 shadow-none group cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <CardContent className="p-0">
                  <div className="overflow-hidden rounded-[20px]">
                    <img
                      className="w-full h-[300px] md:h-[380px] lg:h-[424px] rounded-[20px] object-cover transition-transform duration-500 group-hover:scale-110"
                      alt={service.title}
                      src={service.image}
                    />
                  </div>
                  <h3 className="mt-[30px] md:mt-[40px] lg:mt-[49px] w-full flex items-center justify-center [font-family:'Poppins',Helvetica] font-bold text-[#04343C] text-[22px] md:text-[26px] lg:text-[28px] text-center tracking-[0] leading-[normal] px-[10px] transition-colors duration-300 group-hover:text-[#F47A20]">
                    {service.title}
                  </h3>
                  <p className="mt-[20px] md:mt-[26px] w-full flex items-center justify-center opacity-65 [font-family:'Poppins',Helvetica] font-normal text-[#5E6E73] text-base md:text-lg text-center tracking-[0] leading-[1.5] whitespace-pre-line px-[20px] pb-[30px] transition-opacity duration-300 group-hover:opacity-80">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-[50px] md:mt-[80px]">
            <Link to="/services">
              <Button
                className="w-[139px] h-[46px] rounded-xl bg-[#F47A20] hover:bg-[#0E5C66] [font-family:'Poppins',Helvetica] font-normal text-white text-base transition-all duration-300 hover:scale-110 hover:shadow-lg active:scale-95"
              >
                View more
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section id="about" className="relative w-full mt-[80px] md:mt-[120px]">
        <div className="max-w-[1440px] mx-auto px-[20px] md:px-[40px] lg:px-[60px]">
          <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[60px] items-center">
            <div className="w-full lg:w-1/2 overflow-hidden rounded-[30px] group">
              <img
                className="w-full h-auto lg:h-[651px] rounded-[30px] object-cover transition-transform duration-500 group-hover:scale-110"
                alt="Two men shaking hands"
                src={handshakeImg}
              />
            </div>

            <div className="w-full lg:w-1/2 flex flex-col">
              <h2 className="w-full [font-family:'Poppins',Helvetica] font-bold text-[#04343C] text-[28px] md:text-[32px] lg:text-4xl tracking-[0] leading-[1.3] text-center lg:text-left">
                Trusted by over 3 million Canadians
              </h2>

              <p className="mt-[20px] md:mt-[23px] w-full [font-family:'Poppins',Helvetica] font-normal text-[#5E6E73] text-base md:text-lg tracking-[0] leading-[1.6] opacity-80 text-center lg:text-left">
                Our business model is simple: put our clients&apos; interests first.
                Sure, that means never charging commissions on trades and offering
                industry-leading interest on your chequing account, but it also
                means a lot more. Like total transparency into your investments and
                an innovative cost structure that ensures we only do well when you
                do.
              </p>

              <div className="mt-[30px] md:mt-[40px] flex flex-col gap-[30px] md:gap-[35px]">
                {stats.map((stat, index) => (
                  <div key={index} className="flex flex-col gap-[6px] text-center lg:text-left group cursor-pointer transition-transform duration-300 hover:translate-x-2">
                    <div className="[font-family:'Poppins',Helvetica] font-semibold text-[#F47A20] text-xl md:text-2xl tracking-[0] leading-[normal] transition-all duration-300 group-hover:scale-110 group-hover:text-[#0E5C66]">
                      {stat.value}
                    </div>
                    <div className="[font-family:'Poppins',Helvetica] font-normal text-[#04343C] text-base md:text-lg tracking-[0] leading-[normal] transition-opacity duration-300 group-hover:opacity-80">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full mt-[80px] md:mt-[120px]">
        <div className="max-w-[1440px] mx-auto px-[20px] md:px-[40px] lg:px-[60px]">
          <h2 className="w-full text-center [font-family:'Poppins',Helvetica] font-bold text-[#04343C] text-[32px] md:text-[40px] lg:text-5xl tracking-[0] leading-[normal] mb-[30px] md:mb-[50px]">
            Client&apos;s Testimonials
          </h2>

          <div className="flex justify-center mb-[30px] md:mb-[40px]">
            <div className="flex gap-[8px] md:gap-[11.9px]">
              {[1, 2, 3, 4, 5].map((star) => (
                <img
                  key={star}
                  className="w-[28px] h-[26px] md:w-[37.09px] md:h-[35.28px] transition-transform duration-200 hover:scale-110"
                  alt="Star"
                  src={starIcon}
                />
              ))}
            </div>
          </div>

          <div className="relative min-h-[200px] md:min-h-[250px]">
            <blockquote
              key={currentTestimonial}
              className="max-w-[900px] mx-auto text-center [font-family:'Poppins',Helvetica] font-normal italic text-[#04343C] text-[18px] md:text-[24px] lg:text-[28px] tracking-[0] leading-[1.4] px-[20px] md:px-[40px] mb-[30px] md:mb-[40px] animate-fadeIn"
            >
              &quot;{testimonials[currentTestimonial].quote}&quot;
            </blockquote>

            <div
              key={`name-${currentTestimonial}`}
              className="text-center [font-family:'Poppins',Helvetica] font-semibold text-[#04343C] text-[22px] md:text-[26px] lg:text-[28px] tracking-[0] leading-[normal] mb-[10px] animate-fadeIn"
            >
              {testimonials[currentTestimonial].name}
            </div>

            <div
              key={`title-${currentTestimonial}`}
              className="text-center opacity-80 [font-family:'Poppins',Helvetica] font-medium text-[#5E6E73] text-base md:text-lg tracking-[0] leading-[normal] mb-[40px] md:mb-[50px] animate-fadeIn"
            >
              {testimonials[currentTestimonial].title}
            </div>
          </div>

          <div className="hidden md:flex justify-between items-center max-w-[1220px] mx-auto px-[20px] mb-[30px]">
            <Button
              onClick={prevTestimonial}
              variant="ghost"
              className="w-[49px] h-[29px] p-0 hover:bg-transparent transition-all duration-300 hover:scale-125 hover:-translate-x-2 active:scale-95"
            >
              <img className="w-[49px] h-[29px] drop-shadow-md" alt="Previous testimonial" src={arrowRight} />
            </Button>

            <Button
              onClick={nextTestimonial}
              variant="ghost"
              className="w-[49px] h-[29px] p-0 hover:bg-transparent transition-all duration-300 hover:scale-125 hover:translate-x-2 active:scale-95"
            >
              <img className="w-[49px] h-[29px] drop-shadow-md" alt="Next testimonial" src={arrowLeft} />
            </Button>
          </div>

          <div className="flex justify-center gap-[12px] md:gap-[17px] mb-[60px] md:mb-[80px]">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`transition-all ${currentTestimonial === index
                  ? "w-[15px] h-[15px] bg-[#F47A20] rounded-[7.5px]"
                  : "w-2.5 h-2.5 mt-[3px] bg-[#5E6E73] rounded-[5px] hover:bg-[#F47A20] hover:opacity-50"
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
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
