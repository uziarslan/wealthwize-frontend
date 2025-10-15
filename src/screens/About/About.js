import React from "react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { CallbackSection } from "../../components/CallbackSection";
import heroBg from "../../assets/about-hero-bg.jpg";
import taxPrepIcon from "../../assets/tax-prep-icon.svg";
import taxPlanningIcon from "../../assets/tax-planning-icon.svg";
import taxResolutionIcon from "../../assets/tax-resolution-icon.svg";
import missionIllustration from "../../assets/mission-illustration.svg";
import servicesIllustration from "../../assets/services-illustration.svg";
import processIllustration from "../../assets/process-illustration.svg";

const aboutSections = [
    {
        illustration: missionIllustration,
        badge: "Our Mission",
        badgeColor: "orange",
        title: "Mission",
        description:
            "At WealthWize, our mission is to simplify the tax process for our clients. We understand that taxes can be complicated and stressful, which is why we are committed to providing reliable and accurate tax services to individuals and businesses. Our goal is to help our clients achieve their tax objectives while minimizing their tax liability.",
    },
    {
        illustration: servicesIllustration,
        badge: "Our Services",
        badgeColor: "teal",
        title: "Services",
        description:
            "We provide a variety of tax services, including tax preparation, tax planning, and tax resolution. We also offer consulting services to help our clients navigate complex tax issues. Our team of tax professionals has the knowledge and expertise needed to help our clients achieve their tax goals.",
    },
    {
        illustration: processIllustration,
        badge: "Our Process",
        badgeColor: "orange",
        title: "Process",
        description:
            "We take a personalized approach to tax services, working closely with our clients to understand their unique needs and goals. We then develop a customized tax strategy tailored to their specific situation. Throughout the tax process, we keep our clients informed and provide ongoing support to ensure their compliance with tax laws and regulations.",
    },
];

export const About = () => {
    return (
        <div className="bg-[#F8F8F7] w-full min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-1 flex flex-col">
                {/* Hero Section - Redesigned */}
                <section className="relative w-full h-auto overflow-hidden">
                    <img
                        className="absolute top-0 left-0 w-full h-full object-cover min-h-full"
                        alt="About hero background"
                        src={heroBg}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#04343C]/90 to-[#0E5C66]/85" />

                    <div className="relative z-10 py-[60px] md:py-[80px] lg:py-[100px] max-w-[1440px] mx-auto px-[20px] md:px-[40px] lg:px-[60px]">
                        <div className="flex flex-col items-center justify-center gap-[20px] md:gap-[24px]">
                            <div className="inline-block px-[20px] py-[10px] bg-[#F47A20]/20 backdrop-blur-sm rounded-full">
                                <span className="[font-family:'Poppins',Helvetica] font-semibold text-[#F47A20] text-sm md:text-base uppercase tracking-wider">
                                    About Us
                                </span>
                            </div>

                            <h1 className="w-full max-w-[900px] [font-family:'Poppins',Helvetica] font-bold text-white text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[72px] text-center tracking-[-0.02em] leading-[1.15]">
                                WealthWize Consulting Group
                            </h1>

                            <p className="w-full max-w-[800px] [font-family:'Poppins',Helvetica] font-normal text-white/90 text-[15px] sm:text-[16px] md:text-[17px] lg:text-[19px] text-center tracking-[0] leading-[1.6] px-[20px]">
                                Simplifying taxes for individuals and businesses. Expert tax preparation, planning, and resolution services designed to help you achieve your tax objectives while minimizing liability.
                            </p>

                            <div className="mt-[15px] flex flex-wrap gap-[12px] md:gap-[15px] justify-center">
                                <div className="flex items-center gap-[10px] px-[18px] py-[10px] bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all duration-300">
                                    <img src={taxPrepIcon} alt="Tax Preparation" className="w-[20px] h-[20px]" />
                                    <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-sm md:text-base">
                                        Tax Preparation
                                    </span>
                                </div>
                                <div className="flex items-center gap-[10px] px-[18px] py-[10px] bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all duration-300">
                                    <img src={taxPlanningIcon} alt="Tax Planning" className="w-[20px] h-[20px]" />
                                    <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-sm md:text-base">
                                        Tax Planning
                                    </span>
                                </div>
                                <div className="flex items-center gap-[10px] px-[18px] py-[10px] bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all duration-300">
                                    <img src={taxResolutionIcon} alt="Tax Resolution" className="w-[20px] h-[20px]" />
                                    <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-sm md:text-base">
                                        Tax Resolution
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission, Services, Process Section - Brand New Design */}
                <section className="w-full bg-white py-[70px] md:py-[90px] lg:py-[110px]">
                    <div className="max-w-[1300px] mx-auto px-[20px] md:px-[40px] lg:px-[60px]">

                        {/* Mission */}
                        <div className="mb-[60px] md:mb-[80px]">
                            <div className="flex flex-col lg:flex-row gap-[40px] md:gap-[50px] items-center">
                                <div className="w-full lg:w-[45%]">
                                    <div className={`inline-block px-[16px] py-[8px] ${aboutSections[0].badgeColor === 'orange' ? 'bg-[#F47A20]/10' : 'bg-[#0E5C66]/10'} rounded-full mb-[20px]`}>
                                        <span className={`[font-family:'Poppins',Helvetica] font-semibold ${aboutSections[0].badgeColor === 'orange' ? 'text-[#F47A20]' : 'text-[#0E5C66]'} text-sm uppercase tracking-wide`}>
                                            {aboutSections[0].badge}
                                        </span>
                                    </div>
                                    <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#04343C] text-[32px] md:text-[38px] lg:text-[42px] mb-[20px] leading-[1.2]">
                                        {aboutSections[0].title}
                                    </h2>
                                    <p className="[font-family:'Poppins',Helvetica] font-normal text-[#5E6E73] text-[16px] md:text-[17px] lg:text-[18px] leading-[1.8]">
                                        {aboutSections[0].description}
                                    </p>
                                </div>
                                <div className="w-full lg:w-[55%] flex justify-center">
                                    <img
                                        className="w-full max-w-[400px] h-auto"
                                        alt="Our Mission"
                                        src={aboutSections[0].illustration}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Services */}
                        <div className="mb-[60px] md:mb-[80px]">
                            <div className="flex flex-col lg:flex-row-reverse gap-[40px] md:gap-[50px] items-center">
                                <div className="w-full lg:w-[45%]">
                                    <div className={`inline-block px-[16px] py-[8px] ${aboutSections[1].badgeColor === 'orange' ? 'bg-[#F47A20]/10' : 'bg-[#0E5C66]/10'} rounded-full mb-[20px]`}>
                                        <span className={`[font-family:'Poppins',Helvetica] font-semibold ${aboutSections[1].badgeColor === 'orange' ? 'text-[#F47A20]' : 'text-[#0E5C66]'} text-sm uppercase tracking-wide`}>
                                            {aboutSections[1].badge}
                                        </span>
                                    </div>
                                    <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#04343C] text-[32px] md:text-[38px] lg:text-[42px] mb-[20px] leading-[1.2]">
                                        {aboutSections[1].title}
                                    </h2>
                                    <p className="[font-family:'Poppins',Helvetica] font-normal text-[#5E6E73] text-[16px] md:text-[17px] lg:text-[18px] leading-[1.8]">
                                        {aboutSections[1].description}
                                    </p>
                                </div>
                                <div className="w-full lg:w-[55%] flex justify-center">
                                    <img
                                        className="w-full max-w-[400px] h-auto"
                                        alt="Our Services"
                                        src={aboutSections[1].illustration}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Process */}
                        <div>
                            <div className="flex flex-col lg:flex-row gap-[40px] md:gap-[50px] items-center">
                                <div className="w-full lg:w-[45%]">
                                    <div className={`inline-block px-[16px] py-[8px] ${aboutSections[2].badgeColor === 'orange' ? 'bg-[#F47A20]/10' : 'bg-[#0E5C66]/10'} rounded-full mb-[20px]`}>
                                        <span className={`[font-family:'Poppins',Helvetica] font-semibold ${aboutSections[2].badgeColor === 'orange' ? 'text-[#F47A20]' : 'text-[#0E5C66]'} text-sm uppercase tracking-wide`}>
                                            {aboutSections[2].badge}
                                        </span>
                                    </div>
                                    <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#04343C] text-[32px] md:text-[38px] lg:text-[42px] mb-[20px] leading-[1.2]">
                                        {aboutSections[2].title}
                                    </h2>
                                    <p className="[font-family:'Poppins',Helvetica] font-normal text-[#5E6E73] text-[16px] md:text-[17px] lg:text-[18px] leading-[1.8]">
                                        {aboutSections[2].description}
                                    </p>
                                </div>
                                <div className="w-full lg:w-[55%] flex justify-center">
                                    <img
                                        className="w-full max-w-[400px] h-auto"
                                        alt="Our Process"
                                        src={aboutSections[2].illustration}
                                    />
                                </div>
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

