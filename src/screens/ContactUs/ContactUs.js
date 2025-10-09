import React, { useState } from "react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Modal } from "../../components/ui/modal";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import phone from "../../assets/phone.svg";
import email from "../../assets/email.svg";
import location from "../../assets/location.svg";

const contactInfo = [
  {
    icon: phone,
    title: "Phone",
    detail: "11111111111111111",
    detailOpacity: "opacity-80",
    href: "tel:11111111111111111",
  },
  {
    icon: email,
    title: "Email",
    detail: "wealthwizeconsulting@gmail.com",
    detailOpacity: "opacity-80",
    href: "mailto:wealthwizeconsulting@gmail.com",
  },
  {
    icon: location,
    title: "Location",
    detail: "wealthtwizeconsulting",
    detailOpacity: "opacity-65",
    href: "https://www.google.com/maps/search/?api=1&query=wealthtwizeconsulting",
  },
];

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.subject || !formData.message) {
      showModal(
        "Missing Information",
        "Please fill out all fields before submitting.",
        "error"
      );
      return;
    }

    // Handle form submission logic here
    console.log("Form submitted:", formData);
    showModal(
      "Message Sent!",
      "Thank you for contacting us. We'll get back to you within 1-2 business days.",
      "success"
    );

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="bg-white w-full min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 flex flex-col">
        <section className="relative w-full pt-[80px] md:pt-[100px] lg:pt-[120px] pb-[95px] px-[20px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[1440px] mx-auto text-center">
            <h1 className="font-bold text-[#5ce0e5] text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[72px] text-center leading-[1.2] sm:leading-[1.15] md:leading-[1.1] lg:leading-[1.1] [font-family:'Poppins',Helvetica] tracking-[-0.02em] mb-[20px] md:mb-[24px] lg:mb-[28px]">
              Contact Us
            </h1>

            <p className="max-w-[791px] mx-auto opacity-70 [font-family:'Poppins',Helvetica] font-normal text-[#091a24] text-[16px] md:text-[18px] lg:text-xl text-center tracking-[0] leading-[1.6] md:leading-[1.5] lg:leading-[30.8px]">
              Providing insight-driven transformation to investment banks, wealth
              and asset managers, exchanges, clearing houses.
            </p>
          </div>
        </section>

        <section className="relative w-full pb-[97px] px-[20px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-[30px] md:gap-[60px] lg:gap-[100px] xl:gap-[170px]">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target={info.title === "Location" ? "_blank" : undefined}
                  rel={info.title === "Location" ? "noopener noreferrer" : undefined}
                  className="no-underline cursor-pointer"
                >
                  <Card className="flex flex-col items-center border-0 shadow-none bg-transparent transition-all duration-300 hover:scale-105 group">
                    <CardContent className="flex flex-col items-center p-0">
                      <div className="w-[70px] h-[70px] md:w-[85px] md:h-[85px] lg:w-[100px] lg:h-[100px] rounded-[20px] md:rounded-[25px] lg:rounded-[30px] bg-[#5CE0E5] bg-opacity-10 flex items-center justify-center mb-[20px] md:mb-[28px] lg:mb-[38px] transition-all duration-300 group-hover:bg-opacity-25 group-hover:shadow-lg">
                        <img
                          className="w-[38px] h-[38px] md:w-[46px] md:h-[46px] lg:w-[54px] lg:h-[54px] transition-transform duration-300 group-hover:scale-110"
                          alt={info.title}
                          src={info.icon}
                        />
                      </div>
                      <h3 className="flex items-center justify-center [font-family:'Inter',Helvetica] font-bold text-[#091a24] text-[18px] md:text-[20px] lg:text-2xl text-center tracking-[0] leading-[normal] mb-[20px] md:mb-[28px] lg:mb-[38px] transition-colors duration-300 group-hover:text-[#5CE0E5]">
                        {info.title}
                      </h3>
                      <p
                        className={`flex items-center justify-center ${info.detailOpacity} [font-family:${info.title === "Phone" ? "'Inter'" : "'Poppins'"},Helvetica] font-medium text-[#091a24] text-[14px] md:text-[16px] lg:text-lg text-center tracking-[0] leading-[normal] transition-all duration-300 group-hover:opacity-100`}
                      >
                        {info.detail}
                      </p>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full pb-[60px] md:pb-[80px] lg:pb-[100px] px-[20px] md:px-[40px] lg:px-[60px]">
          <div className="max-w-[1340px] mx-auto bg-[#c4c4c4] rounded-[20px] md:rounded-[25px] lg:rounded-[30px] relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-80 animate-gradient-slow"
              style={{
                background: 'linear-gradient(225deg, rgba(92,224,229,1) 0%, rgba(43,79,238,1) 50%, rgba(92,224,229,1) 100%)',
                backgroundSize: '200% 200%',
              }}
            />

            <div className="relative px-[20px] md:px-[40px] lg:px-[60px] py-[60px] md:py-[80px] lg:py-[100px]">
              <header className="flex flex-col gap-[3px] items-center mb-[40px] md:mb-[52px] lg:mb-[64px]">
                <h2 className="[font-family:'Poppins',Helvetica] font-bold text-white text-[32px] sm:text-[36px] md:text-[42px] lg:text-5xl text-center tracking-[0] leading-[normal]">
                  Leave Us Your Info
                </h2>
                <p className="opacity-80 [font-family:'Poppins',Helvetica] font-normal text-white text-[16px] md:text-[17px] lg:text-lg text-center tracking-[0] leading-[normal]">
                  and we will get back to you.
                </p>
              </header>

              <form onSubmit={handleSubmit} className="max-w-[960px] mx-auto flex flex-col gap-[16px] md:gap-[18px] lg:gap-[20px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] md:gap-[18px] lg:gap-[20px]">
                  <div className="relative">
                    <Input
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Full name"
                      className="h-[50px] md:h-[55px] lg:h-[60px] bg-[#ffffff4c] rounded-[16px] md:rounded-[18px] lg:rounded-[20px] backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] border-0 [font-family:'Poppins',Helvetica] font-medium text-white text-[14px] md:text-[15px] lg:text-base tracking-[0] leading-[normal] placeholder:text-white placeholder:opacity-80 px-[20px] md:px-[24px] lg:px-[28px] focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </div>
                  <div className="relative">
                    <Input
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="E-mail"
                      type="email"
                      className="h-[50px] md:h-[55px] lg:h-[60px] bg-[#ffffff4c] rounded-[16px] md:rounded-[18px] lg:rounded-[20px] backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] border-0 [font-family:'Poppins',Helvetica] font-medium text-white text-[14px] md:text-[15px] lg:text-base tracking-[0] leading-[normal] placeholder:text-white placeholder:opacity-80 px-[20px] md:px-[24px] lg:px-[28px] focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </div>
                </div>

                <div className="relative">
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                    className="h-[50px] md:h-[55px] lg:h-[60px] bg-[#ffffff4c] rounded-[16px] md:rounded-[18px] lg:rounded-[20px] backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] border-0 [font-family:'Poppins',Helvetica] font-medium text-white text-[14px] md:text-[15px] lg:text-base tracking-[0] leading-[normal] placeholder:text-white placeholder:opacity-80 px-[20px] md:px-[24px] lg:px-[28px] focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>

                <div className="relative">
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Message"
                    className="h-[120px] md:h-[140px] lg:h-[160px] bg-[#ffffff4c] rounded-[16px] md:rounded-[18px] lg:rounded-[20px] backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] border-0 [font-family:'Poppins',Helvetica] font-medium text-white text-[14px] md:text-[15px] lg:text-base tracking-[0] leading-[normal] placeholder:text-white placeholder:opacity-80 px-[20px] md:px-[24px] lg:px-[28px] py-[16px] md:py-[18px] lg:py-[20px] resize-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>

                <Button
                  type="submit"
                  className="h-[50px] md:h-[55px] lg:h-[60px] border border-solid border-white bg-[linear-gradient(90deg,rgba(92,224,229,1)_0%,rgba(43,79,238,1)_100%)] rounded-[16px] md:rounded-[18px] lg:rounded-[20px] backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] opacity-[0.99] [font-family:'Poppins',Helvetica] font-medium text-white text-[16px] md:text-[17px] lg:text-lg text-center tracking-[0] leading-[normal] hover:opacity-100 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-95"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

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

