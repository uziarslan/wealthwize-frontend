import React from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    BarChart3,
    BookOpenCheck,
    Building2,
    Check,
    FileCheck2,
    Globe2,
    Layers3,
    ReceiptText,
    ShieldCheck,
    UserRound,
    UsersRound,
} from "lucide-react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import businessImg from "../../assets/business-consulting.png";

const services = [
    {
        number: "01",
        icon: BarChart3,
        title: "Financial Reporting",
        description:
            "Turn accurate records into financial statements that make performance easier to understand and decisions easier to defend.",
        deliverables: ["Balance sheets", "Income statements", "Cash flow reports"],
        cadence: "Monthly, quarterly, or semi-annually",
        featured: true,
    },
    {
        number: "02",
        icon: FileCheck2,
        title: "Tax Filing",
        description:
            "Keep business and personal filings organized, accurate, and on time with coordinated support across your key obligations.",
        deliverables: ["Corporate tax returns", "GST/HST returns", "Director personal tax"],
        cadence: "Annual and periodic filing support",
    },
    {
        number: "03",
        icon: BookOpenCheck,
        title: "Bookkeeping",
        description:
            "Build a dependable financial foundation with consistent transaction recording, reconciliations, and properly maintained books.",
        deliverables: ["Transaction recording", "Bank reconciliation", "Financial statements"],
        cadence: "Ongoing monthly support",
    },
    {
        number: "04",
        icon: Globe2,
        title: "Canada–U.S. Personal Tax",
        description:
            "Navigate cross-border personal tax requirements with coordinated filing support for Canadians and U.S. citizens working across the border.",
        deliverables: ["Canadian personal tax", "U.S. personal tax", "Cross-border compliance"],
        cadence: "Annual and situation-specific support",
    },
    {
        number: "05",
        icon: UsersRound,
        title: "Payroll",
        description:
            "Keep employees paid accurately and payroll records organized without pulling your attention away from the business.",
        deliverables: ["Wage calculations", "Deductions", "Payroll auditing"],
        cadence: "Aligned with your pay schedule",
    },
    {
        number: "06",
        icon: ReceiptText,
        title: "AR/AP Management",
        description:
            "Create a clearer view of money moving in and out through consistent invoice tracking and payment coordination.",
        deliverables: ["Receivables tracking", "Payables management", "Invoice processing"],
        cadence: "Ongoing operational support",
    },
];

const operatingLayers = [
    {
        label: "Maintain",
        title: "Keep the financial record current",
        detail: "Bookkeeping, payroll, and AR/AP management",
    },
    {
        label: "Comply",
        title: "Meet tax and filing obligations",
        detail: "Corporate, personal, GST/HST, and cross-border tax",
    },
    {
        label: "Understand",
        title: "See what the numbers are saying",
        detail: "Financial reporting and practical guidance",
    },
];

const serviceScopes = [
    {
        label: "Tax & compliance",
        detail: "Accurate filing across business, personal, and cross-border needs.",
    },
    {
        label: "Finance operations",
        detail: "Reliable bookkeeping, payroll, and day-to-day account management.",
    },
    {
        label: "Reporting & insight",
        detail: "Clear financial statements that support stronger decisions.",
    },
];

export const Services = () => {
    return (
        <div className="min-h-screen w-full bg-[#F8F8F7] text-[#04343C]">
            <Navbar />

            <main>
                <section className="relative overflow-hidden bg-[#04343C] lg:h-[clamp(440px,calc(100svh-222px),540px)]">
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 opacity-[0.08]"
                        style={{
                            backgroundImage:
                                "linear-gradient(rgba(255,255,255,.65) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.65) 1px, transparent 1px)",
                            backgroundSize: "72px 72px",
                        }}
                    />
                    <div aria-hidden="true" className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#0E5C66] blur-3xl" />
                    <div aria-hidden="true" className="absolute -bottom-28 left-[42%] h-64 w-64 rounded-full bg-[#F47A20]/10 blur-3xl" />

                    <div className="relative mx-auto grid h-full max-w-[1440px] items-center gap-10 px-5 py-14 md:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-[60px] lg:py-10">
                        <div className="max-w-[650px]">
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-8 bg-[#F47A20]" />
                                <span className="font-manrope text-[12px] font-bold uppercase tracking-[0.2em] text-[#F47A20]">
                                    Services
                                </span>
                            </div>

                            <h1 className="font-manrope text-[38px] font-extrabold leading-[1.04] tracking-[-0.045em] text-white sm:text-[46px] lg:text-[56px]">
                                Connected financial services. Clearer business decisions.
                            </h1>

                            <p className="mt-5 max-w-[590px] font-manrope text-[15px] leading-[1.75] text-white/70 md:text-[17px]">
                                From the daily details to year-end obligations, we bring your records, reporting, payroll, and tax work into one dependable financial process.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <Link
                                    to="/contact"
                                    className="group inline-flex items-center gap-2 rounded-full bg-[#F47A20] px-6 py-3 font-manrope text-[14px] font-bold text-white transition duration-300 hover:bg-white hover:text-[#04343C]"
                                >
                                    Discuss your needs
                                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>
                                <a
                                    href="#service-catalogue"
                                    className="inline-flex items-center rounded-full border border-white/25 px-6 py-3 font-manrope text-[14px] font-semibold text-white transition duration-300 hover:border-white/60 hover:bg-white/5"
                                >
                                    Explore all services
                                </a>
                            </div>
                        </div>

                        <div className="hidden justify-self-end lg:block lg:w-full lg:max-w-[610px]">
                            <div className="rounded-[24px] border border-white/15 bg-white/[0.07] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-md">
                                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                                    <div className="flex items-center gap-2.5">
                                        <Layers3 className="h-4 w-4 text-[#F47A20]" />
                                        <span className="font-manrope text-[12px] font-bold uppercase tracking-[0.16em] text-white/80">
                                            Your finance function
                                        </span>
                                    </div>
                                    <span className="rounded-full bg-[#F47A20]/15 px-3 py-1 font-manrope text-[10px] font-bold uppercase tracking-[0.12em] text-[#F6A05F]">
                                        Connected
                                    </span>
                                </div>

                                <div className="space-y-2 p-2 pt-3">
                                    {operatingLayers.map((layer, index) => (
                                        <div
                                            key={layer.label}
                                            className={`grid grid-cols-[40px_1fr_auto] items-center gap-3 rounded-[15px] border p-3.5 ${
                                                index === 2
                                                    ? "border-[#F47A20]/35 bg-[#F47A20]/10"
                                                    : "border-white/10 bg-[#032B32]/65"
                                            }`}
                                        >
                                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 font-manrope text-[12px] font-extrabold text-[#F6A05F]">
                                                0{index + 1}
                                            </div>
                                            <div>
                                                <p className="font-manrope text-[10px] font-bold uppercase tracking-[0.16em] text-white/45">
                                                    {layer.label}
                                                </p>
                                                <p className="mt-0.5 font-manrope text-[14px] font-bold text-white">
                                                    {layer.title}
                                                </p>
                                            </div>
                                            <Check className="h-4 w-4 text-[#F47A20]" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="border-b border-[#04343C]/10 bg-white">
                    <div className="mx-auto grid max-w-[1440px] md:grid-cols-3 md:px-10 lg:px-[60px]">
                        {serviceScopes.map((scope, index) => (
                            <div
                                key={scope.label}
                                className={`px-5 py-7 md:px-7 ${
                                    index > 0 ? "border-t border-[#04343C]/10 md:border-l md:border-t-0" : ""
                                }`}
                            >
                                <div className="flex items-start gap-3">
                                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#F47A20]" />
                                    <div>
                                        <h2 className="font-manrope text-[14px] font-extrabold text-[#04343C]">
                                            {scope.label}
                                        </h2>
                                        <p className="mt-1.5 font-manrope text-[12px] leading-[1.6] text-[#5E6E73] lg:text-[13px]">
                                            {scope.detail}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="service-catalogue" className="scroll-mt-20 px-5 py-20 md:px-10 lg:px-[60px] lg:py-28">
                    <div className="mx-auto max-w-[1320px]">
                        <div className="grid gap-6 border-b border-[#04343C]/15 pb-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
                            <div>
                                <p className="font-manrope text-[12px] font-bold uppercase tracking-[0.2em] text-[#F47A20]">
                                    Service catalogue
                                </p>
                                <h2 className="mt-3 font-manrope text-[34px] font-extrabold leading-[1.08] tracking-[-0.04em] text-[#04343C] md:text-[44px]">
                                    Expertise where the details matter.
                                </h2>
                            </div>
                            <p className="max-w-[650px] font-manrope text-[15px] leading-[1.8] text-[#5E6E73] lg:justify-self-end lg:text-[16px]">
                                Start with the service you need now, then add support as your responsibilities grow. Each engagement is scoped around your filing requirements, operational rhythm, and reporting needs.
                            </p>
                        </div>

                        <div className="mt-8 grid gap-4 lg:grid-cols-2">
                            {services.map((service) => {
                                const Icon = service.icon;

                                return (
                                    <article
                                        key={service.title}
                                        className={`group flex min-h-[390px] flex-col rounded-[22px] border p-7 transition duration-300 md:p-9 ${
                                            service.featured
                                                ? "border-[#04343C] bg-[#04343C] text-white shadow-[0_22px_60px_rgba(4,52,60,0.15)]"
                                                : "border-[#04343C]/12 bg-white hover:-translate-y-1 hover:border-[#0E5C66]/35 hover:shadow-[0_18px_50px_rgba(4,52,60,0.08)]"
                                        }`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div
                                                className={`flex h-12 w-12 items-center justify-center rounded-[14px] ${
                                                    service.featured ? "bg-white/10" : "bg-[#EAF0EF]"
                                                }`}
                                            >
                                                <Icon className="h-5 w-5 text-[#F47A20]" strokeWidth={1.9} />
                                            </div>
                                            <span
                                                className={`font-manrope text-[12px] font-extrabold tracking-[0.16em] ${
                                                    service.featured ? "text-white/35" : "text-[#04343C]/30"
                                                }`}
                                            >
                                                {service.number}
                                            </span>
                                        </div>

                                        <h3 className="mt-7 font-manrope text-[25px] font-extrabold tracking-[-0.025em] md:text-[28px]">
                                            {service.title}
                                        </h3>
                                        <p
                                            className={`mt-3 font-manrope text-[14px] leading-[1.75] md:text-[15px] ${
                                                service.featured ? "text-white/65" : "text-[#5E6E73]"
                                            }`}
                                        >
                                            {service.description}
                                        </p>

                                        <div className="mt-6 grid gap-2 sm:grid-cols-3">
                                            {service.deliverables.map((deliverable) => (
                                                <div key={deliverable} className="flex items-start gap-2">
                                                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#F47A20]" strokeWidth={2.5} />
                                                    <span
                                                        className={`font-manrope text-[12px] leading-[1.5] ${
                                                            service.featured ? "text-white/75" : "text-[#04343C]/75"
                                                        }`}
                                                    >
                                                        {deliverable}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        <div
                                            className={`mt-auto flex flex-col gap-3 border-t pt-5 sm:flex-row sm:items-center sm:justify-between ${
                                                service.featured ? "border-white/12" : "border-[#04343C]/10"
                                            }`}
                                        >
                                            <span
                                                className={`font-manrope text-[11px] font-semibold uppercase tracking-[0.08em] ${
                                                    service.featured ? "text-white/45" : "text-[#5E6E73]"
                                                }`}
                                            >
                                                {service.cadence}
                                            </span>
                                            <Link
                                                to="/contact"
                                                className="inline-flex items-center gap-1.5 font-manrope text-[12px] font-extrabold text-[#F47A20]"
                                            >
                                                Discuss this service
                                                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                                            </Link>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <section className="bg-white px-5 py-20 md:px-10 lg:px-[60px] lg:py-28">
                    <div className="mx-auto grid max-w-[1320px] overflow-hidden rounded-[28px] border border-[#04343C]/10 bg-[#EAF0EF] lg:grid-cols-[0.88fr_1.12fr]">
                        <div className="relative min-h-[360px] overflow-hidden lg:min-h-[610px]">
                            <img
                                src={businessImg}
                                alt="Business owner reviewing financial information"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#04343C]/70 via-[#04343C]/15 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9">
                                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#04343C]/70 px-4 py-2 backdrop-blur-md">
                                    <ShieldCheck className="h-4 w-4 text-[#F47A20]" />
                                    <span className="font-manrope text-[11px] font-bold uppercase tracking-[0.12em] text-white">
                                        One accountable relationship
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="px-6 py-12 md:px-12 md:py-14 lg:px-16 lg:py-16">
                            <p className="font-manrope text-[12px] font-bold uppercase tracking-[0.2em] text-[#F47A20]">
                                How it fits together
                            </p>
                            <h2 className="mt-3 max-w-[560px] font-manrope text-[32px] font-extrabold leading-[1.1] tracking-[-0.04em] text-[#04343C] md:text-[42px]">
                                One connected financial system—not a collection of disconnected tasks.
                            </h2>
                            <p className="mt-5 max-w-[570px] font-manrope text-[15px] leading-[1.8] text-[#5E6E73]">
                                Clean records support accurate filings. Accurate records produce useful reports. Useful reports help you plan with more confidence. We keep those layers working together.
                            </p>

                            <div className="mt-8 space-y-3">
                                {operatingLayers.map((layer, index) => (
                                    <div
                                        key={layer.label}
                                        className="grid grid-cols-[48px_1fr] gap-4 rounded-[16px] border border-[#04343C]/10 bg-white/80 p-4"
                                    >
                                        <div className="flex h-12 w-12 items-center justify-center rounded-[13px] bg-[#04343C] font-manrope text-[12px] font-extrabold text-[#F47A20]">
                                            0{index + 1}
                                        </div>
                                        <div>
                                            <p className="font-manrope text-[10px] font-bold uppercase tracking-[0.14em] text-[#F47A20]">
                                                {layer.label}
                                            </p>
                                            <h3 className="mt-1 font-manrope text-[15px] font-extrabold text-[#04343C]">
                                                {layer.title}
                                            </h3>
                                            <p className="mt-1 font-manrope text-[12px] leading-[1.5] text-[#5E6E73]">
                                                {layer.detail}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="px-5 py-20 md:px-10 lg:px-[60px] lg:py-28">
                    <div className="mx-auto max-w-[1320px]">
                        <div className="mx-auto max-w-[720px] text-center">
                            <p className="font-manrope text-[12px] font-bold uppercase tracking-[0.2em] text-[#F47A20]">
                                Choose your starting point
                            </p>
                            <h2 className="mt-3 font-manrope text-[34px] font-extrabold leading-[1.08] tracking-[-0.04em] text-[#04343C] md:text-[44px]">
                                Support shaped around what you’re responsible for.
                            </h2>
                        </div>

                        <div className="mt-10 grid gap-4 lg:grid-cols-2">
                            <div className="rounded-[24px] bg-[#04343C] p-8 text-white md:p-10">
                                <Building2 className="h-7 w-7 text-[#F47A20]" strokeWidth={1.8} />
                                <h3 className="mt-7 font-manrope text-[26px] font-extrabold tracking-[-0.025em]">
                                    For businesses
                                </h3>
                                <p className="mt-3 max-w-[520px] font-manrope text-[14px] leading-[1.75] text-white/65">
                                    Get reliable support across the operational work, compliance deadlines, and reporting your business depends on.
                                </p>
                                <div className="mt-7 flex flex-wrap gap-2">
                                    {["Bookkeeping", "Corporate tax", "Payroll", "AR/AP", "Reporting"].map((item) => (
                                        <span key={item} className="rounded-full border border-white/15 px-3 py-1.5 font-manrope text-[11px] font-semibold text-white/75">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-[24px] border border-[#04343C]/12 bg-white p-8 md:p-10">
                                <UserRound className="h-7 w-7 text-[#F47A20]" strokeWidth={1.8} />
                                <h3 className="mt-7 font-manrope text-[26px] font-extrabold tracking-[-0.025em] text-[#04343C]">
                                    For individuals
                                </h3>
                                <p className="mt-3 max-w-[520px] font-manrope text-[14px] leading-[1.75] text-[#5E6E73]">
                                    Work through personal and cross-border tax responsibilities with clear requirements, coordinated filing, and fewer surprises.
                                </p>
                                <div className="mt-7 flex flex-wrap gap-2">
                                    {["Personal tax", "Canada–U.S. tax", "Director tax", "Tax guidance"].map((item) => (
                                        <span key={item} className="rounded-full border border-[#04343C]/12 bg-[#F8F8F7] px-3 py-1.5 font-manrope text-[11px] font-semibold text-[#04343C]/70">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-[#F47A20] px-5 py-16 md:px-10 lg:px-[60px] lg:py-20">
                    <div className="mx-auto flex max-w-[1200px] flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                        <div className="max-w-[760px]">
                            <p className="font-manrope text-[11px] font-bold uppercase tracking-[0.2em] text-[#04343C]/65">
                                Not sure where to begin?
                            </p>
                            <h2 className="mt-3 font-manrope text-[32px] font-extrabold leading-[1.08] tracking-[-0.04em] text-white md:text-[42px]">
                                Tell us what feels unclear. We’ll help identify the right starting point.
                            </h2>
                        </div>
                        <Link
                            to="/contact"
                            className="group inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full bg-[#04343C] px-7 py-3.5 font-manrope text-[14px] font-bold text-white transition duration-300 hover:bg-white hover:text-[#04343C] lg:self-auto"
                        >
                            Start a conversation
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};
