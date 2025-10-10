import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Modal } from "./ui/modal";
import arrowDown from "../assets/arrow-down.svg";

export const CallbackSection = () => {
  const [callbackEmail, setCallbackEmail] = useState("");
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

  const handleRequestCallback = () => {
    if (callbackEmail) {
      console.log("Request callback with email:", callbackEmail);
      showModal(
        "Request Received!",
        `Thank you! We'll call you back at ${callbackEmail} within 1-2 business days.`,
        "success"
      );
      setCallbackEmail("");
    } else {
      showModal(
        "Email Required",
        "Please enter your email address so we can call you back.",
        "error"
      );
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleRequestCallback();
    }
  };

  return (
    <section id="contact" className="relative w-full mt-[80px] md:mt-[120px] mb-[80px] md:mb-[120px]">
      <div className="max-w-[1440px] mx-auto px-[20px] md:px-[40px] lg:px-[60px]">
        <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-[20px] sm:rounded-[25px] md:rounded-[30px] overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-full bg-[#c4c4c4] rounded-[20px] sm:rounded-[25px] md:rounded-[30px] rotate-180" />
          <div className="absolute top-0 left-0 w-full h-full rounded-[20px] sm:rounded-[25px] md:rounded-[30px] bg-[linear-gradient(135deg,rgba(92,224,229,1)_0%,rgba(43,79,238,1)_50%,rgba(92,224,229,1)_100%)] opacity-85 group-hover:opacity-95 transition-opacity duration-300 animate-gradient" />

          <div className="relative z-10 flex flex-col items-center justify-center h-full px-[20px] md:px-[40px] gap-[24px] sm:gap-[30px] md:gap-[40px]">
            <div className="text-center transform transition-transform duration-300 group-hover:scale-105">
              <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[#b9f7f8] text-xs sm:text-sm md:text-base uppercase tracking-widest mb-[8px]">
                READY TO GET YOUR MORTGAGE APPROVED?
              </h3>
              <h2 className="[font-family:'Poppins',Helvetica] font-bold text-white text-[24px] sm:text-[28px] md:text-[36px] lg:text-[44px] tracking-[0] leading-[normal] mb-[12px] sm:mb-[15px] md:mb-[20px]">
                Request a call back?
              </h2>

              <p className="opacity-80 [font-family:'Poppins',Helvetica] font-normal text-white text-[14px] sm:text-[15px] md:text-[17px] lg:text-lg text-center tracking-[0] leading-[1.5] max-w-[550px] mx-auto">
                Please fill out the form and press the submit button. <br className="hidden md:block" />
                We will get back to you with 1-2 business days.
              </p>
            </div>

            <div className="w-full max-w-[900px] relative">
              <div className="w-full h-[60px] sm:h-[70px] md:h-[85px] bg-[#ffffff4c] rounded-[16px] sm:rounded-[18px] md:rounded-[22px] backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] transition-all duration-300 hover:bg-[#ffffff60]" />

              <Input
                type="email"
                placeholder="Enter your e-mail"
                value={callbackEmail}
                onChange={(e) => setCallbackEmail(e.target.value)}
                onKeyPress={handleKeyPress}
                className="absolute top-[5px] left-[5px] md:left-[8px] w-[calc(100%-100px)] sm:w-[calc(100%-110px)] md:w-[calc(100%-180px)] h-[50px] sm:h-[60px] md:h-[75px] bg-transparent border-0 pl-[20px] sm:pl-[28px] md:pl-[38px] [font-family:'Poppins',Helvetica] font-medium text-white text-[14px] sm:text-[15px] md:text-[17px] placeholder:text-white placeholder:opacity-80 focus-visible:ring-0 focus-visible:ring-offset-0"
              />

              <Button
                onClick={handleRequestCallback}
                variant="ghost"
                className="absolute top-[22px] sm:top-[27px] md:top-[35px] right-[20px] sm:right-[25px] md:right-[40px] w-[20px] sm:w-[22px] md:w-[25px] h-[12px] sm:h-[14px] md:h-[15px] p-0 hover:bg-transparent transition-all duration-200 hover:scale-125 hover:rotate-12 active:scale-95"
              >
                <img
                  className="w-full h-full drop-shadow-lg"
                  alt="Submit"
                  src={arrowDown}
                />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        title={modalState.title}
        message={modalState.message}
        type={modalState.type}
      />
    </section>
  );
};

