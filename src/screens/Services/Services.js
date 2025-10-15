import React from "react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/ui/button";
import heroBg from "../../assets/about-hero-bg.jpg";
import mortgageImg from "../../assets/mortgage-consulting.png";
import financialImg from "../../assets/financial-consulting.png";
import businessImg from "../../assets/business-consulting.png";
import taxReturn from "../../assets/taxreturn.webp";
import payroll from "../../assets/payroll.webp";
import arAp from "../../assets/arap.webp";

const services = [
    {
        image: mortgageImg,
        title: "Financial Reporting",
        description:
            "We provide timely and detailed financial reports—monthly, quarterly, or semi-annually—based on your selected package. Our reports offer the insight you need to make confident, informed decisions about your business and help you navigate this process.",
        chips: ["Balance Sheets", "Income Statements", "Cash Flow Reports"],
    },
    {
        image: financialImg,
        title: "Tax Filing",
        description:
            "Stay compliant and stress-free with Lumena’s tax filing services. We manage corporate tax returns, GST/HST filing, and personal tax filing for directors and their families—ensuring everything is filed accurately and on time.",
        chips: ["Corporate Tax", "GST/HST Returns", "Personal Tax"],
    },
    {
        image: businessImg,
        title: "Bookkeeping",
        description:
            "Our bookkeeping services are tailored for businesses at every stage, from startups to growing enterprises. We handle transaction tracking, monthly bank reconciliations, and accurate financial reporting to keep your books in order and your mind at ease.",
        chips: ["Bank Reconciliation", "Transaction Recording", "Financial Statements"],
    },
    {
        image: taxReturn,
        title: "U.S. Canadian Personal Tax Returns",
        description:
            "We assist Canadian individuals working or doing business in the U.S., and U.S. citizens living or working in Canada, with tax compliance and cross-border filing requirements. Our team ensures individuals are compliant with both Canadian and U.S. tax laws.",
        chips: ["Cross-Border Tax", "Canadian Tax", "U.S. Tax Compliance"],
    },
    {
        image: payroll,
        title: "Payroll",
        description:
            "Managing payroll can be time-consuming and complex. Our payroll services handle everything from calculating employee wages and deductions, payroll auditing, to processing payments—so you can focus on running your business smoothly.",
        chips: ["Payroll Calculations", "Deductions", "Payroll Auditing"],
    },
    {
        image: arAp,
        title: "AR/AP Management",
        description:
            "Our AR/AP management services streamline your accounts receivable and payable processes, helping you track outstanding invoices and manage payments efficiently.",
        chips: ["Receivables Tracking", "Payables Management", "Invoice Processing"],
    },
];

export const Services = () => {
    return (
        <div className="bg-[#F8F8F7] w-full min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-1 flex flex-col">
                {/* Hero Section - Redesigned */}
                <section className="relative w-full overflow-hidden">
                    <img
                        className="absolute top-0 left-0 w-full h-full object-cover min-h-full"
                        alt="Our Services hero background"
                        src={heroBg}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#04343C]/90 to-[#0E5C66]/85" />

                    <div className="relative z-10 w-full max-w-[1440px] mx-auto px-[20px] md:px-[40px] lg:px-[60px] py-[70px] md:py-[90px] lg:py-[110px]">
                        <div className="flex flex-col items-center justify-center gap-[20px] md:gap-[24px]">
                            <div className="inline-block px-[20px] py-[10px] bg-[#F47A20]/20 backdrop-blur-sm rounded-full">
                                <span className="[font-family:'Poppins',Helvetica] font-semibold text-[#F47A20] text-sm md:text-base uppercase tracking-wider">
                                    What We Offer
                                </span>
                            </div>

                            <h1 className="w-full max-w-[900px] [font-family:'Poppins',Helvetica] font-bold text-white text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[72px] text-center tracking-[-0.02em] leading-[1.15]">
                                Our Services
                            </h1>

                            <p className="w-full max-w-[750px] [font-family:'Poppins',Helvetica] font-normal text-white/90 text-[15px] sm:text-[16px] md:text-[17px] lg:text-[19px] text-center tracking-[0] leading-[1.6] px-[20px]">
                                Comprehensive tax solutions tailored to your needs. From preparation to planning and resolution, we provide expert guidance every step of the way.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Services Grid - Fresh Modern Design */}
                <section className="w-full px-[20px] md:px-[40px] lg:px-[60px] py-[70px] md:py-[90px] lg:py-[110px]">
                    <div className="max-w-[1400px] mx-auto">
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

                                        <p className="[font-family:'Poppins',Helvetica] font-normal text-[#5E6E73] text-[15px] md:text-[16px] lg:text-[17px] leading-[1.8] mb-[24px]">
                                            {service.description}
                                        </p>

                                        {/* Chips/Tags */}
                                        {service.chips && service.chips.length > 0 && (
                                            <div className="flex flex-wrap gap-[10px] mb-[28px]">
                                                {service.chips.map((chip, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="flex items-center gap-[6px] px-[14px] py-[8px] bg-white border border-[#E5E5E5] rounded-[8px] hover:border-[#F47A20] transition-all duration-300"
                                                    >
                                                        <div className="w-[6px] h-[6px] rounded-full bg-[#F47A20]"></div>
                                                        <span className="[font-family:'Poppins',Helvetica] font-medium text-[#04343C] text-[13px]">
                                                            {chip}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* CTA Button */}
                                        <Button
                                            onClick={() => window.location.href = '/contact'}
                                            className="bg-[#F47A20] hover:bg-[#0E5C66] text-white px-[28px] py-[12px] h-auto rounded-[10px] [font-family:'Poppins',Helvetica] font-semibold text-[15px] transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                        >
                                            Learn More
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};
