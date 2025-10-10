import React from "react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { CallbackSection } from "../../components/CallbackSection";
import whyUsImg from "../../assets/why-us-image.png";
import heroBg from "../../assets/about-hero-bg.jpg";
import featureIcon from "../../assets/feature-icon.svg";

const whyUsFeatures = [
    {
        icon: featureIcon,
        title: "Tailored Solutions",
        description:
            "Our team tailors mortgage advice based on your unique financial situation, long-term goals, and current market conditions.",
    },
    {
        icon: featureIcon,
        title: "Expert Team",
        description:
            "With years of experience and knowledge of the mortgage landscape, our consultants are equipped to provide advice that maximizes your financial opportunities.",
    },
    {
        icon: featureIcon,
        title: "Access to a Wide Network",
        description:
            "We work with a broad range of lenders, giving you access to the best rates and terms available, whether you’re a first-time home buyer or looking to finance.",
    },
    {
        icon: featureIcon,
        title: "Long-Term Relationship",
        description:
            "We aim to build a lasting relationship by offering continuous support, whether it's a future mortgage renewal, refinance, or new home purchase.",
    },
];

export const About = () => {
    return (
        <div className="bg-white w-full min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-1 flex flex-col">
                <section className="relative w-full h-auto mb-[60px] md:mb-[80px] lg:mb-[96px]">
                    <img
                        className="absolute top-0 left-0 w-full h-full object-cover min-h-full"
                        alt="About hero background"
                        src={heroBg}
                    />
                    <div className="absolute inset-0 bg-[#081a243b] opacity-80" />

                    <div className="relative z-10 py-[50px] sm:py-[60px] md:py-[70px] lg:py-[80px] max-w-[1440px] mx-auto px-[20px] md:px-[40px] lg:px-[60px]">
                        <div className="flex flex-col items-center justify-center gap-[20px] md:gap-[25px] lg:gap-[31px]">
                            <h1 className="w-full max-w-[700px] [font-family:'Poppins',Helvetica] font-bold text-[#5ce0e5] text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[72px] text-center tracking-[-0.02em] leading-[1.2] sm:leading-[1.15] md:leading-[1.1] lg:leading-[1.1]">
                                WealthWize Consulting Group
                            </h1>

                            <p className="w-full max-w-[797px] [font-family:'Inter',Helvetica] font-normal text-white text-[14px] sm:text-[16px] md:text-[18px] lg:text-xl text-center tracking-[0] leading-[1.6] md:leading-[1.5] lg:leading-[25.5px]">
                                Wealthwize Consulting Group is committed to helping individuals and businesses achieve financial success. Specializing in mortgage consulting, financial planning, and business strategy, we provide personalized solutions tailored to your unique needs. Our experienced team offers expert guidance with a focus on transparency, trust, and delivering results. At Wealthwize, your financial success is our priority.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="w-full px-[20px] md:px-[40px] lg:px-[50px] mb-[60px] md:mb-[80px] lg:mb-[102px]">
                    <div className="max-w-[1440px] mx-auto flex flex-col items-center">
                        <h2 className="flex items-center justify-center [font-family:'Poppins',Helvetica] font-bold text-[#5ce0e5] text-[32px] sm:text-[36px] md:text-[42px] lg:text-5xl text-center tracking-[0] leading-[normal] mb-[8px] md:mb-[10px] transition-all duration-300 hover:scale-105">
                            Why us
                        </h2>

                        <p className="max-w-[333px] flex items-center justify-center opacity-80 [font-family:'Poppins',Helvetica] font-normal text-[#091a24] text-[16px] md:text-lg text-center tracking-[0] leading-[normal] mb-[40px] md:mb-[55px] lg:mb-[67px] transition-opacity duration-300 hover:opacity-100">
                            Your Trusted Partner for Financial Growth and Success
                        </p>

                        <div className="flex flex-col lg:flex-row gap-[40px] md:gap-[60px] lg:gap-[82px] w-full max-w-[1162px] justify-center items-center">
                            <img
                                className="w-full lg:w-[540px] h-auto lg:h-[806px] rounded-[20px] md:rounded-[25px] lg:rounded-[30px] object-cover transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
                                alt="Why choose us"
                                src={whyUsImg}
                            />

                            <div className="flex flex-col gap-[30px] md:gap-[25px] lg:gap-[23px] lg:pt-[9px]">
                                {whyUsFeatures.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col p-[20px] md:p-[24px] lg:p-[28px] rounded-[16px] md:rounded-[18px] lg:rounded-[20px] transition-all duration-300 hover:bg-gradient-to-r hover:from-[#5ce0e5]/5 hover:to-[#2b4fee]/5 hover:shadow-lg hover:scale-[1.02] cursor-pointer group"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <img
                                            className="w-[40px] h-[44px] md:w-[45px] md:h-[50px] lg:w-[50px] lg:h-[55px] mb-[16px] md:mb-[18px] lg:mb-[21px] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                                            alt="Group"
                                            src={feature.icon}
                                        />
                                        <h3 className="flex items-center [font-family:'Poppins',Helvetica] font-bold text-[#091a24] text-[22px] md:text-[25px] lg:text-[28px] tracking-[0] leading-[normal] mb-[6px] transition-colors duration-300 group-hover:text-[#5ce0e5]">
                                            {feature.title}
                                        </h3>
                                        <p className="w-full max-w-[434px] opacity-65 [font-family:'Poppins',Helvetica] font-normal text-[#091a24] text-[15px] md:text-[16px] lg:text-lg tracking-[0] leading-[normal] text-left transition-all duration-300 group-hover:opacity-80">
                                            {feature.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <CallbackSection />
            </main>

            <Footer />
        </div>
    );
};

