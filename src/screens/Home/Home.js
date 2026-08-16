import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  BookOpenCheck,
  BriefcaseBusiness,
  FileCheck2,
  Globe2,
  Landmark,
  LineChart,
  Mail,
  ReceiptText,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Modal } from "../../components/ui/modal";
import financialImg from "../../assets/financial-consulting.png";

const services = [
  {
    icon: BarChart3,
    title: "Financial Reporting",
    description:
      "Clear monthly, quarterly, or semi-annual reporting that turns your numbers into a practical view of performance.",
    detail: "Balance sheets · Income statements · Cash flow",
  },
  {
    icon: FileCheck2,
    title: "Tax Filing",
    description:
      "Coordinated corporate, GST/HST, and personal tax filings—prepared accurately and managed against every deadline.",
    detail: "Corporate · GST/HST · Personal",
  },
  {
    icon: BookOpenCheck,
    title: "Bookkeeping",
    description:
      "Reliable transaction recording and monthly reconciliations that keep your books current, clean, and useful.",
    detail: "Reconciliation · Recording · Statements",
  },
  {
    icon: Globe2,
    title: "Cross-Border Tax",
    description:
      "Personal tax support for Canadians working in the U.S. and U.S. citizens living or working in Canada.",
    detail: "Canada · United States · Compliance",
  },
  {
    icon: Users,
    title: "Payroll",
    description:
      "End-to-end payroll support covering wage calculations, deductions, payment processing, and payroll reviews.",
    detail: "Calculations · Deductions · Auditing",
  },
  {
    icon: ReceiptText,
    title: "AR/AP Management",
    description:
      "A more disciplined way to track invoices, manage payments, and keep receivables and payables moving.",
    detail: "Invoices · Receivables · Payables",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We start with your goals, current setup, deadlines, and the financial questions that need answers.",
  },
  {
    number: "02",
    title: "Organize",
    description:
      "We create a practical service plan, gather what matters, and bring structure to your financial workflow.",
  },
  {
    number: "03",
    title: "Advise",
    description:
      "You receive clear deliverables, proactive communication, and guidance you can use throughout the year.",
  },
];

const confidencePoints = [
  {
    icon: ShieldCheck,
    title: "Reliable by design",
    description:
      "A disciplined process keeps filings, records, and recurring financial tasks moving on schedule.",
  },
  {
    icon: LineChart,
    title: "Built for decisions",
    description:
      "Reporting is presented to help you understand what is happening—not simply to close the books.",
  },
  {
    icon: BriefcaseBusiness,
    title: "One coordinated team",
    description:
      "Tax, bookkeeping, payroll, and reporting work together under one accountable relationship.",
  },
];

export const Home = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalState, setModalState] = useState({
    isOpen: false,
    title: "",
    message: "",
    type: "success",
  });

  const showModal = (title, message, type = "success") => {
    setModalState({ isOpen: true, title, message, type });
  };

  const handleConsultationRequest = async (event) => {
    event.preventDefault();

    if (!email) {
      showModal(
        "Email required",
        "Please enter your email address so our team can follow up.",
        "error"
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "Homepage Consultation Request",
          email,
          subject: "New Consultation Request",
          message: `Visitor ${email} requested an introductory consultation from the homepage.`,
        }),
      });

      if (!response.ok) throw new Error("Request failed");

      showModal(
        "Request received",
        `Thank you. The WealthWize team will follow up with you at ${email}.`
      );
      setEmail("");
    } catch (error) {
      showModal(
        "Something went wrong",
        "We couldn't submit your request. Please try again or contact us directly.",
        "error"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#F8F8F7] text-[#04343C]">
      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-[#04343C] lg:h-[clamp(440px,calc(100svh-222px),560px)]">
          <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:72px_72px]" />
          <div className="absolute -right-24 top-10 h-[520px] w-[520px] rounded-full border border-white/10" />
          <div className="absolute -right-4 top-32 h-[360px] w-[360px] rounded-full border border-white/10" />

          <div className="relative mx-auto grid h-full max-w-[1440px] items-center gap-10 px-5 py-10 md:px-10 md:py-12 lg:grid-cols-[1.06fr_.94fr] lg:px-[60px] lg:py-6">
            <div className="max-w-[720px] text-left">
              <div className="mb-5 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[#FDB178] sm:text-sm">
                <span className="h-px w-8 bg-[#F47A20]" />
                Tax &amp; accounting, made clear
              </div>

              <h1 className="max-w-[730px] text-[40px] font-extrabold leading-[1.04] tracking-[-0.045em] text-white sm:text-[48px] md:text-[54px] lg:text-[58px]">
                Financial clarity for what comes next.
              </h1>

              <p className="mt-4 max-w-[650px] text-base leading-7 text-white/[.72] sm:text-[17px]">
                WealthWize helps individuals and growing businesses manage tax,
                books, payroll, reporting, and cross-border obligations—with one
                dependable team and a clearer view of every decision.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-[#F47A20] px-7 text-sm font-bold text-white transition hover:bg-[#ff8c38] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#04343C]"
                >
                  Book a consultation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/25 px-7 text-sm font-bold text-white transition hover:border-white/50 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"
                >
                  Explore our services
                </Link>
              </div>

            </div>

            <div className="relative mx-auto hidden w-full max-w-[530px] origin-center scale-[.84] lg:ml-auto lg:block xl:scale-[.88] 2xl:scale-95">
              <div className="absolute -left-6 -top-6 h-24 w-24 border-l-2 border-t-2 border-[#F47A20]" />
              <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white shadow-[0_32px_80px_rgba(0,0,0,.25)]">
                <div className="flex items-center justify-between border-b border-[#04343C]/10 px-6 py-5 sm:px-8">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#F47A20]">
                      Your financial picture
                    </p>
                    <h2 className="mt-1 text-xl font-bold tracking-[-0.02em] text-[#04343C]">
                      Organized. Current. Decision-ready.
                    </h2>
                  </div>
                  <div className="hidden h-11 w-11 items-center justify-center rounded-full bg-[#04343C] text-white sm:flex">
                    <Landmark className="h-5 w-5" />
                  </div>
                </div>

                <div className="grid gap-4 p-6">
                  <div className="rounded-xl bg-[#F8F8F7] p-4">
                    <div className="flex items-end justify-between gap-6">
                      <div>
                        <p className="text-xs font-semibold text-[#5E6E73]">Reporting rhythm</p>
                        <p className="mt-1 text-lg font-bold text-[#04343C]">A clearer month-end</p>
                      </div>
                      <div className="flex h-16 items-end gap-1.5" aria-hidden="true">
                        {[34, 48, 42, 61, 72, 88].map((height, index) => (
                          <span
                            key={height}
                            className={index === 5 ? "w-2.5 rounded-t bg-[#F47A20]" : "w-2.5 rounded-t bg-[#0E5C66]/35"}
                            style={{ height: `${height}%` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {[
                    [BookOpenCheck, "Books & reconciliations", "Kept current"],
                    [FileCheck2, "Tax & compliance", "Planned ahead"],
                    [LineChart, "Reports & guidance", "Made useful"],
                  ].map(([Icon, label, status]) => (
                    <div key={label} className="flex items-center gap-4 border-b border-[#04343C]/10 pb-5 last:border-0 last:pb-0">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#0E5C66]/10 text-[#0E5C66]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="flex-1 text-sm font-bold text-[#04343C]">{label}</span>
                      <span className="text-xs font-semibold text-[#5E6E73]">{status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section aria-label="Who we support" className="border-b border-[#04343C]/10 bg-white">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 px-5 sm:grid-cols-3 md:px-10 lg:px-[60px]">
            {[
              ["For individuals", "Personal and cross-border tax support"],
              ["For businesses", "Books, payroll, tax, and reporting"],
              ["Based in Mississauga", "Supporting clients across Canada"],
            ].map(([title, detail], index) => (
              <div key={title} className={`py-7 text-left sm:px-6 ${index > 0 ? "border-t border-[#04343C]/10 sm:border-l sm:border-t-0" : ""}`}>
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#F47A20]">{title}</p>
                <p className="mt-2 text-sm font-semibold text-[#04343C]">{detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="bg-[#F8F8F7] py-20 md:py-28">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-[60px]">
            <div className="grid gap-8 lg:grid-cols-[.82fr_1.18fr] lg:items-end">
              <div className="text-left">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#F47A20]">What we do</p>
                <h2 className="mt-4 text-[36px] font-extrabold leading-[1.1] tracking-[-0.04em] text-[#04343C] sm:text-[46px] md:text-[54px]">
                  The financial essentials, working together.
                </h2>
              </div>
              <div className="flex flex-col items-start gap-6 border-l-2 border-[#F47A20] pl-6 text-left md:flex-row md:items-end md:justify-between lg:pl-8">
                <p className="max-w-[590px] text-base leading-7 text-[#5E6E73]">
                  Your books, filings, payroll, and reporting affect one another.
                  We bring them into one connected service model, so there are
                  fewer gaps and better information behind every decision.
                </p>
                <Link to="/services" className="group flex shrink-0 items-center gap-2 text-sm font-extrabold text-[#04343C] hover:text-[#F47A20]">
                  View all services
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-[#04343C]/10 bg-[#04343C]/10 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <article key={service.title} className={`group relative min-h-[330px] p-7 text-left transition duration-300 sm:p-9 ${index === 0 ? "bg-[#0E5C66] text-white" : "bg-white hover:bg-[#fffaf6]"}`}>
                    <div className="flex items-start justify-between">
                      <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${index === 0 ? "bg-white/12 text-[#FDB178]" : "bg-[#F47A20]/10 text-[#F47A20]"}`}>
                        <Icon className="h-6 w-6" />
                      </span>
                      <span className={`text-xs font-extrabold ${index === 0 ? "text-white/40" : "text-[#04343C]/25"}`}>0{index + 1}</span>
                    </div>
                    <h3 className={`mt-12 text-2xl font-extrabold tracking-[-0.025em] ${index === 0 ? "text-white" : "text-[#04343C]"}`}>{service.title}</h3>
                    <p className={`mt-4 text-sm leading-7 ${index === 0 ? "text-white/70" : "text-[#5E6E73]"}`}>{service.description}</p>
                    <p className={`mt-6 border-t pt-5 text-[11px] font-bold uppercase tracking-[0.12em] ${index === 0 ? "border-white/15 text-white/[.55]" : "border-[#04343C]/10 text-[#0E5C66]"}`}>{service.detail}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto grid max-w-[1440px] gap-14 px-5 md:px-10 lg:grid-cols-[.95fr_1.05fr] lg:items-center lg:gap-20 lg:px-[60px]">
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-full w-full rounded-2xl border-2 border-[#F47A20]" />
              <div className="relative h-[440px] overflow-hidden rounded-2xl bg-[#04343C] sm:h-[560px]">
                <img
                  src={financialImg}
                  alt="Business leaders reviewing financial information together"
                  className="h-full w-full object-cover grayscale-[15%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04343C]/75 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 max-w-[380px] p-7 text-left text-white sm:p-10">
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#FDB178]">A stronger operating view</p>
                  <p className="mt-3 text-2xl font-extrabold leading-tight">Know where you stand—and what needs attention next.</p>
                </div>
              </div>
            </div>

            <div className="text-left">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#F47A20]">Why WealthWize</p>
              <h2 className="mt-4 text-[36px] font-extrabold leading-[1.1] tracking-[-0.04em] text-[#04343C] sm:text-[46px] md:text-[54px]">
                Your numbers should help you lead.
              </h2>
              <p className="mt-6 max-w-[610px] text-base leading-8 text-[#5E6E73]">
                Good financial work does more than meet a deadline. It gives you
                confidence in the records, visibility into performance, and a
                trusted place to take the next question.
              </p>

              <div className="mt-9 space-y-7">
                {confidencePoints.map((point) => {
                  const Icon = point.icon;
                  return (
                    <div key={point.title} className="grid grid-cols-[48px_1fr] gap-5">
                      <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#04343C] text-white">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="text-lg font-extrabold text-[#04343C]">{point.title}</h3>
                        <p className="mt-1 text-sm leading-6 text-[#5E6E73]">{point.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <Link to="/about" className="group mt-10 inline-flex items-center gap-2 text-sm font-extrabold text-[#F47A20] hover:text-[#04343C]">
                Learn about our approach
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#EAF0EF] py-20 md:py-28">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-[60px]">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
              <div className="text-left">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#F47A20]">Our process</p>
                <h2 className="mt-4 text-[36px] font-extrabold leading-[1.1] tracking-[-0.04em] text-[#04343C] sm:text-[46px] md:text-[54px]">
                  A straightforward path to better clarity.
                </h2>
              </div>
              <p className="max-w-[600px] text-left text-base leading-8 text-[#5E6E73] lg:ml-auto">
                Every engagement starts with context. We learn how you work,
                build the right scope, and keep communication clear from the
                first conversation onward.
              </p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {processSteps.map((step, index) => (
                <article key={step.number} className="relative overflow-hidden rounded-2xl bg-white p-8 text-left shadow-[0_14px_40px_rgba(4,52,60,.06)] sm:p-10">
                  <span className="text-[64px] font-extrabold leading-none tracking-[-0.06em] text-[#04343C]/[.07]">{step.number}</span>
                  <div className="mt-8 flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#F47A20]" />
                    <h3 className="text-2xl font-extrabold text-[#04343C]">{step.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-[#5E6E73]">{step.description}</p>
                  {index < processSteps.length - 1 && (
                    <ArrowRight className="absolute right-7 top-9 hidden h-5 w-5 text-[#04343C]/20 md:block" />
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-[60px]">
            <div className="relative overflow-hidden rounded-2xl bg-[#04343C] px-6 py-12 sm:px-10 md:px-14 md:py-16 lg:px-20">
              <div className="absolute bottom-0 right-0 h-full w-1/3 bg-[#0E5C66] [clip-path:polygon(35%_0,100%_0,100%_100%,0_100%)]" />
              <div className="absolute -bottom-24 -right-10 h-72 w-72 rounded-full border border-white/10" />

              <div className="relative grid gap-10 lg:grid-cols-[1fr_.78fr] lg:items-center">
                <div className="max-w-[660px] text-left">
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#FDB178]">Start a conversation</p>
                  <h2 className="mt-4 text-[34px] font-extrabold leading-[1.12] tracking-[-0.04em] text-white sm:text-[44px] md:text-[52px]">
                    Ready for a clearer financial picture?
                  </h2>
                  <p className="mt-5 max-w-[590px] text-base leading-7 text-white/70">
                    Tell us where you need support. We’ll follow up to understand
                    your situation and recommend the right next step.
                  </p>
                </div>

                <form onSubmit={handleConsultationRequest} className="relative rounded-xl bg-white p-3 shadow-2xl">
                  <label htmlFor="consultation-email" className="sr-only">Email address</label>
                  <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                    <div className="relative min-w-0 flex-1">
                      <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#5E6E73]" />
                      <input
                        id="consultation-email"
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Your work email"
                        autoComplete="email"
                        required
                        className="h-14 w-full rounded-lg border border-[#04343C]/10 bg-[#F8F8F7] pl-12 pr-4 text-sm font-semibold text-[#04343C] outline-none transition placeholder:font-medium placeholder:text-[#5E6E73]/70 focus:border-[#F47A20] focus:ring-2 focus:ring-[#F47A20]/20"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex h-14 shrink-0 items-center justify-center gap-2 rounded-lg bg-[#F47A20] px-6 text-sm font-extrabold text-white transition hover:bg-[#04343C] focus:outline-none focus:ring-2 focus:ring-[#F47A20] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isSubmitting ? "Sending…" : "Request a consultation"}
                      {!isSubmitting && <ArrowRight className="h-4 w-4" />}
                    </button>
                  </div>
                  <p className="px-1 pb-1 pt-3 text-left text-[11px] leading-5 text-[#5E6E73]">
                    Prefer to speak now? Call us at <a href="tel:+16478783371" className="font-bold text-[#04343C] hover:text-[#F47A20]">+1 647 878 3371</a>.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <Modal
        isOpen={modalState.isOpen}
        onClose={() => setModalState((current) => ({ ...current, isOpen: false }))}
        title={modalState.title}
        message={modalState.message}
        type={modalState.type}
      />
    </div>
  );
};
