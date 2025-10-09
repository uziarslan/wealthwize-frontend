import React from "react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Card, CardContent } from "../../components/ui/card";
import heroBg from "../../assets/about-hero-bg.jpg";
import mortgageImg from "../../assets/mortgage-consulting.png";
import financialImg from "../../assets/financial-consulting.png";
import businessImg from "../../assets/business-consulting.png";

const services = [
    {
        image: mortgageImg,
        title: "Mortgage consulting",
        description:
            "Providing insight-driven transformation to investment banks, wealth and asset managers, exchanges, clearing houses.",
    },
    {
        image: financialImg,
        title: "Financial consulting",
        description:
            "Providing insight-driven transformation to investment banks, wealth and asset managers, exchanges, clearing houses.",
    },
    {
        image: businessImg,
        title: "Business consulting",
        description:
            "Providing insight-driven transformation to investment banks, wealth and asset managers, exchanges, clearing houses.",
    },
];

export const Services = () => {
    return (
        <div className="bg-white w-full min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-1 flex flex-col">
                <section className="relative w-full h-auto min-h-[467px] mb-[60px] md:mb-[80px] lg:mb-[96px] flex items-center">
                    <img
                        className="absolute top-0 left-0 w-full h-full object-cover min-h-full"
                        alt="Our Services hero background"
                        src={heroBg}
                    />
                    <div className="absolute inset-0 bg-[#081a243b] opacity-80" />

                    <div className="relative z-10 w-full max-w-[1440px] mx-auto px-[20px] md:px-[40px] lg:px-[60px] py-[50px] md:py-[60px]">
                        <div className="flex flex-col items-center justify-center gap-[20px] md:gap-[25px] lg:gap-[31px]">
                            <h1 className="w-full max-w-[700px] [font-family:'Poppins',Helvetica] font-bold text-[#5ce0e5] text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[72px] text-center tracking-[-0.02em] leading-[1.2] sm:leading-[1.15] md:leading-[1.1] lg:leading-[1.1]">
                                Our Services
                            </h1>

                            <p className="w-full max-w-[797px] [font-family:'Inter',Helvetica] font-normal text-white text-[14px] sm:text-[16px] md:text-[18px] lg:text-xl text-center tracking-[0] leading-[1.6] md:leading-[1.5] lg:leading-[25.5px]">
                                Loreum ipsum text is a dummy text
                            </p>
                        </div>
                    </div>
                </section>

                <section className="flex flex-col items-center w-full max-w-[1440px] mx-auto px-[20px] md:px-[40px] lg:px-[50px] mb-[60px] md:mb-[80px] lg:mb-[104px]">
                    <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#5ce0e5] text-[32px] sm:text-[36px] md:text-[42px] lg:text-5xl text-center tracking-[0] leading-[normal] mb-[8px] md:mb-[10px]">
                        Services We Provide
                    </h2>
                    <p className="[font-family:'Poppins',Helvetica] font-normal text-[#091a24] text-[16px] md:text-lg text-center tracking-[0] leading-[normal] opacity-80 mb-[40px] md:mb-[55px] lg:mb-[77px]">
                        Covered in these areas
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] md:gap-[35px] lg:gap-[42px] w-full max-w-[1329px] mb-[40px] md:mb-[55px] lg:mb-[69px]">
                        {services.map((service, index) => (
                            <Card
                                key={index}
                                className="flex flex-col items-center border-0 shadow-none bg-transparent transition-all duration-300 hover:scale-105 group cursor-pointer"
                            >
                                <CardContent className="flex flex-col items-center p-0">
                                    <div className="w-full max-w-[378px] h-[300px] sm:h-[350px] md:h-[380px] lg:h-[424px] rounded-[16px] md:rounded-[18px] lg:rounded-[20px] overflow-hidden mb-[30px] md:mb-[40px] lg:mb-[51px]">
                                        <img
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            alt={service.title}
                                            src={service.image}
                                        />
                                    </div>
                                    <h3 className="[font-family:'Poppins',Helvetica] font-bold text-[#091a24] text-[22px] md:text-[25px] lg:text-[28px] text-center tracking-[0] leading-[normal] mb-[16px] md:mb-[20px] lg:mb-[26px] transition-colors duration-300 group-hover:text-[#5ce0e5]">
                                        {service.title}
                                    </h3>
                                    <p className="w-full max-w-[352px] [font-family:'Poppins',Helvetica] font-normal text-[#696969] text-[15px] md:text-[16px] lg:text-lg text-center tracking-[0] leading-[normal] opacity-65 transition-opacity duration-300 group-hover:opacity-80">
                                        {service.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] md:gap-[35px] lg:gap-[42px] w-full max-w-[1329px]">
                        {services.map((service, index) => (
                            <Card
                                key={`second-${index}`}
                                className="flex flex-col items-center border-0 shadow-none bg-transparent transition-all duration-300 hover:scale-105 group cursor-pointer"
                            >
                                <CardContent className="flex flex-col items-center p-0">
                                    <div className="w-full max-w-[378px] h-[300px] sm:h-[350px] md:h-[380px] lg:h-[424px] rounded-[16px] md:rounded-[18px] lg:rounded-[20px] overflow-hidden mb-[30px] md:mb-[40px] lg:mb-[51px]">
                                        <img
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            alt={service.title}
                                            src={service.image}
                                        />
                                    </div>
                                    <h3 className="[font-family:'Poppins',Helvetica] font-bold text-[#091a24] text-[22px] md:text-[25px] lg:text-[28px] text-center tracking-[0] leading-[normal] mb-[16px] md:mb-[20px] lg:mb-[26px] transition-colors duration-300 group-hover:text-[#5ce0e5]">
                                        {service.title}
                                    </h3>
                                    <p className="w-full max-w-[352px] [font-family:'Poppins',Helvetica] font-normal text-[#696969] text-[15px] md:text-[16px] lg:text-lg text-center tracking-[0] leading-[normal] opacity-65 transition-opacity duration-300 group-hover:opacity-80">
                                        {service.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

