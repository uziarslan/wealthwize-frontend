import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  Compass,
  FileText,
  Handshake,
  Layers3,
  MessageSquareText,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import heroImage from "../../assets/about-hero-bg.jpg";

const principles = [
  {
    number: "01",
    icon: Compass,
    title: "Advice with context",
    description:
      "We begin with your situation, priorities, and operating reality before recommending a path forward.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Accuracy with purpose",
    description:
      "Reliable records and compliant filings are the foundation. Clearer decisions are the outcome.",
  },
  {
    number: "03",
    icon: MessageSquareText,
    title: "Communication without fog",
    description:
      "We explain the work, the timeline, and what the numbers mean in direct, practical language.",
  },
];

const clientTypes = [
  {
    icon: UserRound,
    eyebrow: "For individuals",
    title: "Personal tax and advice that account for the whole picture.",
    description:
      "From personal tax filings to CRA audit support and practical financial guidance, we help individuals understand what is required and move forward with confidence.",
    points: ["Personal tax filing", "CRA audit support", "Practical financial guidance"],
  },
  {
    icon: BriefcaseBusiness,
    eyebrow: "For businesses",
    title: "A financial backbone for growing operations.",
    description:
      "We connect tax, corporate financing, reporting, bookkeeping, payroll, advisory, audit, and assurance services so owners can run the business from more dependable information.",
    points: ["Current, reconciled books", "Financing and advisory support", "Reporting, audit, and assurance"],
  },
];

const approach = [
  {
    icon: Handshake,
    title: "A direct working relationship",
    description:
      "You have a clear place to bring questions and a team that understands how the pieces connect.",
  },
  {
    icon: Layers3,
    title: "Services that work as a system",
    description:
      "Tax, books, payroll, and reporting are coordinated to reduce gaps and repeated effort.",
  },
  {
    icon: FileText,
    title: "Deliverables you can use",
    description:
      "The goal is not simply to complete the work, but to make the outcome understandable and useful.",
  },
];

export const About = () => (
  <div className="min-h-screen w-full bg-[#F8F8F7] text-[#04343C]">
    <Navbar />

    <main>
      <section className="relative overflow-hidden bg-[#04343C]">
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="relative mx-auto grid max-w-[1440px] lg:h-[clamp(460px,calc(100svh-220px),540px)] lg:grid-cols-[1.05fr_.95fr]">
          <div className="flex items-center px-5 py-14 text-left md:px-10 md:py-16 lg:px-[60px] lg:py-10">
            <div className="max-w-[690px]">
              <div className="inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.18em] text-[#FDB178]">
                <span className="h-px w-8 bg-[#F47A20]" />
                About WealthWize
              </div>
              <h1 className="mt-5 text-[40px] font-extrabold leading-[1.05] tracking-[-0.045em] text-white sm:text-[48px] md:text-[54px]">
                Financial work is better when it starts with context.
              </h1>
              <p className="mt-5 max-w-[620px] text-base leading-7 text-white/70 sm:text-[17px]">
                Wealthwize is a full-service accounting and financial advisory
                firm helping businesses and individuals navigate their finances
                with clarity and confidence.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link to="/contact" className="group inline-flex h-12 items-center justify-center gap-3 rounded-lg bg-[#F47A20] px-7 text-sm font-extrabold text-white transition hover:bg-[#ff8c38] focus:outline-none focus:ring-2 focus:ring-white">
                  Start a conversation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/services" className="inline-flex h-12 items-center justify-center rounded-lg border border-white/25 px-7 text-sm font-extrabold text-white transition hover:border-white/50 hover:bg-white/10">
                  See what we do
                </Link>
              </div>
            </div>
          </div>

          <div className="relative min-h-[380px] lg:min-h-full">
            <img src={heroImage} alt="A focused professional reviewing financial information" className="absolute inset-0 h-full w-full object-cover object-[65%_center]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#04343C] via-[#04343C]/35 to-transparent lg:from-[#04343C]/80" />
            <div className="absolute bottom-7 left-6 right-6 flex items-center justify-between rounded-xl border border-white/20 bg-[#04343C]/80 p-5 text-white backdrop-blur-md sm:bottom-10 sm:left-10 sm:right-10">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#FDB178]">Our home base</p>
                <p className="mt-1 text-sm font-bold">Mississauga, Ontario</p>
              </div>
              <p className="max-w-[170px] text-right text-xs leading-5 text-white/60">Serving local and international clients</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 lg:px-[60px]">
          <div className="grid overflow-hidden rounded-2xl border border-[#04343C]/10 lg:grid-cols-[.88fr_1.12fr]">
            <div className="relative overflow-hidden bg-[#0E5C66] p-8 text-left text-white sm:p-10 lg:p-12">
              <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:54px_54px]" />
              <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full border border-white/15" />
              <div className="relative">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#FDB178]">Our mission</p>
                <h2 className="mt-5 max-w-[540px] text-[34px] font-extrabold leading-[1.12] tracking-[-0.04em] sm:text-[42px] lg:text-[48px]">
                  Turn complexity into a clear way forward.
                </h2>
                <p className="mt-6 max-w-[530px] text-base leading-8 text-white/70">
                  We make tax and financial administration easier to understand,
                  easier to manage, and more valuable to the decisions ahead.
                </p>

                <div className="relative mt-10 space-y-3">
                  <div className="absolute bottom-6 left-5 top-6 w-px bg-white/20" />
                  {[
                    ["01", "Bring the facts into focus"],
                    ["02", "Create structure around the work"],
                    ["03", "Make the next decision clearer"],
                  ].map(([number, label]) => (
                    <div key={number} className="relative flex items-center gap-4 rounded-xl border border-white/15 bg-white/[.07] p-4 backdrop-blur-sm">
                      <span className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F47A20] text-[11px] font-extrabold text-white">{number}</span>
                      <p className="text-sm font-bold text-white">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-[#F8F8F7] p-8 text-left sm:p-10 lg:p-12">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#F47A20]">About our firm</p>
              <h3 className="mt-4 max-w-[650px] text-[30px] font-extrabold leading-[1.18] tracking-[-0.035em] text-[#04343C] sm:text-[38px]">
                Accounting and financial guidance built around the people we serve.
              </h3>
              <div className="mt-5 max-w-[680px] space-y-5 text-base leading-8 text-[#5E6E73]">
                <p>
                  Wealthwize is a full-service accounting and financial advisory firm helping businesses and individuals navigate their finances with clarity and confidence. Our services include bookkeeping, payroll, corporate and personal tax, corporate financing support, and practical accounting and financial advisory services tailored to each client’s needs. We also assist clients during CRA audits, providing knowledgeable guidance and support throughout the process. Built on accuracy, integrity, and responsive service, Wealthwize is committed to simplifying complex financial matters and becoming a trusted long-term partner in our clients’ success.
                </p>
                <p>
                  We proudly serve clients ranging from individuals and businesses in our local community to companies operating across international markets. Our experience spans a diverse range of industries, including manufacturing, retail, transportation, restaurants and hospitality, clothing and apparel, and other service-based and commercial businesses. By taking the time to understand each client’s industry, operations, and goals, we provide practical solutions that support compliance, informed decision-making, and sustainable growth.
                </p>
              </div>

              <div className="mt-9 grid gap-px overflow-hidden rounded-xl border border-[#04343C]/10 bg-[#04343C]/10 sm:grid-cols-3">
                {[
                  ["Understand", "Your situation and priorities"],
                  ["Simplify", "The work, timeline, and decisions"],
                  ["Support", "What needs attention next"],
                ].map(([title, description]) => (
                  <div key={title} className="bg-white p-5">
                    <p className="text-sm font-extrabold text-[#04343C]">{title}</p>
                    <p className="mt-2 text-xs leading-5 text-[#5E6E73]">{description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-start gap-4 border-t border-[#04343C]/10 pt-7">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#04343C] text-white">
                  <Handshake className="h-5 w-5" />
                </span>
                <p className="max-w-[590px] text-sm leading-7 text-[#5E6E73]">
                  The result is an ongoing working relationship—not a once-a-year
                  transaction—with clear deliverables and a trusted place to take
                  the next financial question.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#EAF0EF] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-[60px]">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div className="text-left">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#F47A20]">What guides us</p>
              <h2 className="mt-4 text-[36px] font-extrabold leading-[1.1] tracking-[-0.04em] text-[#04343C] sm:text-[46px] md:text-[54px]">
                Clear principles. Better working relationships.
              </h2>
            </div>
            <p className="max-w-[620px] text-left text-base leading-8 text-[#5E6E73] lg:ml-auto">
              Financial services are built on trust. Our approach is designed to
              earn it through the quality of the work and the way we communicate.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-[#04343C]/10 bg-[#04343C]/10 md:grid-cols-3">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <article key={principle.number} className={`min-h-[350px] p-8 text-left sm:p-10 ${index === 1 ? "bg-[#0E5C66] text-white" : "bg-white"}`}>
                  <div className="flex items-center justify-between">
                    <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${index === 1 ? "bg-white/10 text-[#FDB178]" : "bg-[#F47A20]/10 text-[#F47A20]"}`}>
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className={`text-xs font-extrabold ${index === 1 ? "text-white/[.35]" : "text-[#04343C]/25"}`}>{principle.number}</span>
                  </div>
                  <h3 className={`mt-14 text-2xl font-extrabold tracking-[-0.025em] ${index === 1 ? "text-white" : "text-[#04343C]"}`}>{principle.title}</h3>
                  <p className={`mt-4 text-sm leading-7 ${index === 1 ? "text-white/[.65]" : "text-[#5E6E73]"}`}>{principle.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#04343C] py-20 text-white md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-[60px]">
          <div className="max-w-[810px] text-left">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#FDB178]">Who we serve</p>
            <h2 className="mt-4 text-[36px] font-extrabold leading-[1.1] tracking-[-0.04em] sm:text-[46px] md:text-[54px]">
              Different needs. The same need for clarity.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {clientTypes.map((client, index) => {
              const Icon = client.icon;
              return (
                <article key={client.eyebrow} className={`rounded-2xl p-8 text-left sm:p-10 md:p-12 ${index === 0 ? "border border-white/15 bg-white/[.06]" : "bg-white text-[#04343C]"}`}>
                  <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${index === 0 ? "bg-[#F47A20] text-white" : "bg-[#04343C] text-white"}`}>
                    <Icon className="h-6 w-6" />
                  </span>
                  <p className={`mt-9 text-xs font-extrabold uppercase tracking-[0.18em] ${index === 0 ? "text-[#FDB178]" : "text-[#F47A20]"}`}>{client.eyebrow}</p>
                  <h3 className={`mt-4 max-w-[520px] text-3xl font-extrabold leading-tight tracking-[-0.035em] ${index === 0 ? "text-white" : "text-[#04343C]"}`}>{client.title}</h3>
                  <p className={`mt-5 max-w-[550px] text-sm leading-7 ${index === 0 ? "text-white/[.65]" : "text-[#5E6E73]"}`}>{client.description}</p>
                  <ul className={`mt-8 space-y-3 border-t pt-7 ${index === 0 ? "border-white/15" : "border-[#04343C]/10"}`}>
                    {client.points.map((point) => (
                      <li key={point} className="flex items-center gap-3 text-sm font-bold">
                        <span className={`flex h-5 w-5 items-center justify-center rounded-full ${index === 0 ? "bg-[#F47A20]/20 text-[#FDB178]" : "bg-[#F47A20]/10 text-[#F47A20]"}`}>
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-5 md:px-10 lg:px-[60px]">
          <div className="mx-auto max-w-[780px] text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#F47A20]">The WealthWize approach</p>
            <h2 className="mt-4 text-[36px] font-extrabold leading-[1.1] tracking-[-0.04em] text-[#04343C] sm:text-[46px] md:text-[54px]">
              The details matter. So does the experience.
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {approach.map((item, index) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="relative text-left md:px-5">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#04343C] text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-xs font-extrabold text-[#04343C]/25">0{index + 1}</span>
                  </div>
                  <h3 className="mt-7 text-xl font-extrabold text-[#04343C]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#5E6E73]">{item.description}</p>
                </article>
              );
            })}
          </div>

          <div className="relative mt-20 overflow-hidden rounded-2xl bg-[#F47A20] px-7 py-12 text-left sm:px-12 lg:flex lg:items-center lg:justify-between lg:px-16">
            <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full border border-white/20" />
            <div className="relative max-w-[720px]">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-white/70">Work with WealthWize</p>
              <h2 className="mt-3 text-[32px] font-extrabold leading-tight tracking-[-0.035em] text-white sm:text-[40px]">Let’s make your next financial step clearer.</h2>
            </div>
            <Link to="/contact" className="group relative mt-8 inline-flex h-14 shrink-0 items-center justify-center gap-3 rounded-lg bg-[#04343C] px-7 text-sm font-extrabold text-white transition hover:bg-[#0E5C66] lg:mt-0">
              Book a consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
);
