import React, { useState } from "react";
import {
  ArrowRight,
  Check,
  Clock3,
  FileCheck2,
  Mail,
  MapPin,
  MessageSquareText,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { useAutoScrollPastHero } from "../../hooks/useAutoScrollPastHero";
import { Modal } from "../../components/ui/modal";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";

const contactMethods = [
  {
    icon: Phone,
    label: "Call us",
    detail: "416-902-0308",
    note: "Speak directly with our team",
    href: "tel:+14169020308",
  },
  {
    icon: Mail,
    label: "Email us",
    detail: "info@wealthwize.pro",
    note: "Send your question anytime",
    href: "mailto:info@wealthwize.pro",
  },
  {
    icon: MapPin,
    label: "Visit our office",
    detail: "320 Matheson Boulevard West, Suite 211",
    note: "Mississauga, Ontario L5R 0H2",
    href: "https://www.google.com/maps/search/?api=1&query=320+Matheson+Boulevard+West+Suite+211+Mississauga+Ontario+L5R+0H2",
  },
];

const conversationSteps = [
  {
    number: "01",
    title: "Share the context",
    detail: "Tell us what you’re responsible for and where you need clarity.",
  },
  {
    number: "02",
    title: "We review the need",
    detail: "We’ll identify the relevant service, requirements, and practical next step.",
  },
  {
    number: "03",
    title: "Move forward clearly",
    detail: "You’ll know what is involved, what comes next, and how we can help.",
  },
];

const serviceNeeds = [
  "Corporate Taxes – CAD",
  "Corporate Financing",
  "Personal Taxes – US & CAD",
  "Financial Reporting",
  "Bookkeeping & Payroll Services",
  "Advisory Services",
];

export const ContactUs = () => {
  const contentRef = useAutoScrollPastHero();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
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

  const closeModal = () => {
    setModalState((current) => ({ ...current, isOpen: false }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.fullName || !formData.email || !formData.subject || !formData.message) {
      showModal(
        "Missing Information",
        "Please fill out all fields before submitting.",
        "error"
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: "Contact Form", ...formData }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      showModal(
        "Message Sent!",
        "Thank you for contacting us. We'll get back to you within 1-2 business days.",
        "success"
      );
      setFormData({ fullName: "", email: "", subject: "", message: "" });
    } catch (error) {
      showModal(
        "Something Went Wrong",
        "We couldn't send your message. Please try again, or email us directly.",
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
        <section className="relative overflow-hidden bg-[#04343C] lg:h-[clamp(440px,calc(100svh-222px),520px)]">
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
          <div aria-hidden="true" className="absolute -bottom-24 left-[38%] h-56 w-56 rounded-full bg-[#F47A20]/10 blur-3xl" />

          <div className="relative mx-auto grid h-full max-w-[1440px] items-center gap-10 px-5 py-14 md:px-10 lg:grid-cols-[1fr_0.9fr] lg:px-[60px] lg:py-10">
            <div className="max-w-[670px]">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#F47A20]" />
                <span className="font-manrope text-[12px] font-bold uppercase tracking-[0.2em] text-[#F47A20]">
                  Contact
                </span>
              </div>

              <h1 className="font-manrope text-[40px] font-extrabold leading-[1.04] tracking-[-0.045em] text-white sm:text-[48px] lg:text-[58px]">
                A clearer conversation starts here.
              </h1>

              <p className="mt-5 max-w-[610px] font-manrope text-[15px] leading-[1.75] text-white/70 md:text-[17px]">
                Tell us what needs attention—whether it’s a filing deadline, day-to-day financial work, or a bigger question about where you stand.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#contact-form"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#F47A20] px-6 py-3 font-manrope text-[14px] font-bold text-white transition duration-300 hover:bg-white hover:text-[#04343C]"
                >
                  Send a message
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <div className="flex items-center gap-2 font-manrope text-[12px] font-semibold text-white/60">
                  <Clock3 className="h-4 w-4 text-[#F47A20]" />
                  Replies within 1–2 business days
                </div>
              </div>
            </div>

            <div className="hidden justify-self-end lg:block lg:w-full lg:max-w-[530px]">
              <div className="rounded-[24px] border border-white/15 bg-white/[0.07] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-md">
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                  <div className="flex items-center gap-2.5">
                    <MessageSquareText className="h-4 w-4 text-[#F47A20]" />
                    <span className="font-manrope text-[12px] font-bold uppercase tracking-[0.16em] text-white/80">
                      A useful first conversation
                    </span>
                  </div>
                  <span className="rounded-full bg-[#F47A20]/15 px-3 py-1 font-manrope text-[10px] font-bold uppercase tracking-[0.12em] text-[#F6A05F]">
                    Simple
                  </span>
                </div>

                <div className="space-y-2 p-2 pt-3">
                  {conversationSteps.map((step) => (
                    <div
                      key={step.number}
                      className="grid grid-cols-[40px_1fr] gap-3 rounded-[15px] border border-white/10 bg-[#032B32]/65 p-3.5"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 font-manrope text-[11px] font-extrabold text-[#F6A05F]">
                        {step.number}
                      </div>
                      <div>
                        <p className="font-manrope text-[14px] font-bold text-white">{step.title}</p>
                        <p className="mt-1 font-manrope text-[11px] leading-[1.5] text-white/45">{step.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section ref={contentRef} className="scroll-mt-[70px] border-b border-[#04343C]/10 bg-white">
          <div className="mx-auto grid max-w-[1440px] md:grid-cols-3 md:px-10 lg:px-[60px]">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              const isExternal = method.href.startsWith("http");

              return (
                <a
                  key={method.label}
                  href={method.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  className={`group px-5 py-7 transition duration-300 hover:bg-[#F8F8F7] md:px-7 ${
                    index > 0 ? "border-t border-[#04343C]/10 md:border-l md:border-t-0" : ""
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EAF0EF] transition duration-300 group-hover:bg-[#04343C]">
                      <Icon className="h-4 w-4 text-[#F47A20]" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="font-manrope text-[10px] font-bold uppercase tracking-[0.14em] text-[#F47A20]">
                        {method.label}
                      </p>
                      <p className="mt-1 font-manrope text-[13px] font-extrabold leading-[1.45] text-[#04343C] lg:text-[14px]">
                        {method.detail}
                      </p>
                      <p className="mt-1 font-manrope text-[11px] leading-[1.5] text-[#5E6E73]">
                        {method.note}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        <section id="contact-form" className="scroll-mt-20 px-5 py-20 md:px-10 lg:px-[60px] lg:py-28">
          <div className="mx-auto max-w-[1320px]">
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
              <div>
                <p className="font-manrope text-[12px] font-bold uppercase tracking-[0.2em] text-[#F47A20]">
                  Start the conversation
                </p>
                <h2 className="mt-3 font-manrope text-[34px] font-extrabold leading-[1.08] tracking-[-0.04em] text-[#04343C] md:text-[44px]">
                  Tell us what you need help making clear.
                </h2>
                <p className="mt-5 font-manrope text-[15px] leading-[1.8] text-[#5E6E73]">
                  A short explanation is enough to get started. We’ll review your message and respond with the most useful next step.
                </p>

                <div className="mt-8 rounded-[22px] bg-[#04343C] p-7 text-white md:p-8">
                  <FileCheck2 className="h-6 w-6 text-[#F47A20]" strokeWidth={1.8} />
                  <h3 className="mt-5 font-manrope text-[20px] font-extrabold">
                    We can help with
                  </h3>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                    {serviceNeeds.map((service) => (
                      <div key={service} className="flex items-start gap-2.5">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#F47A20]" strokeWidth={2.5} />
                        <span className="font-manrope text-[12px] leading-[1.5] text-white/70">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex items-start gap-3 rounded-[18px] border border-[#04343C]/10 bg-white p-5">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#F47A20]" strokeWidth={1.9} />
                  <div>
                    <p className="font-manrope text-[12px] font-extrabold text-[#04343C]">Protect sensitive information</p>
                    <p className="mt-1 font-manrope text-[11px] leading-[1.6] text-[#5E6E73]">
                      Please don’t include account numbers, tax IDs, or confidential documents in this first message.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[26px] border border-[#04343C]/10 bg-white p-6 shadow-[0_24px_70px_rgba(4,52,60,0.08)] md:p-10 lg:p-12">
                <div className="flex flex-col gap-3 border-b border-[#04343C]/10 pb-7 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="font-manrope text-[11px] font-bold uppercase tracking-[0.16em] text-[#F47A20]">Contact form</p>
                    <h3 className="mt-2 font-manrope text-[27px] font-extrabold tracking-[-0.03em] text-[#04343C]">
                      Send us a message
                    </h3>
                  </div>
                  <p className="font-manrope text-[11px] text-[#5E6E73]">All fields are required</p>
                </div>

                <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label htmlFor="contact-full-name" className="font-manrope text-[12px] font-bold text-[#04343C]">
                        Full name
                      </label>
                      <Input
                        id="contact-full-name"
                        name="fullName"
                        autoComplete="name"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="mt-2 h-12 rounded-xl border-[#04343C]/15 bg-[#F8F8F7] px-4 font-manrope text-[13px] text-[#04343C] placeholder:text-[#5E6E73]/55 focus-visible:border-[#0E5C66] focus-visible:ring-1 focus-visible:ring-[#0E5C66]"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="font-manrope text-[12px] font-bold text-[#04343C]">
                        Email address
                      </label>
                      <Input
                        id="contact-email"
                        name="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="you@company.com"
                        type="email"
                        className="mt-2 h-12 rounded-xl border-[#04343C]/15 bg-[#F8F8F7] px-4 font-manrope text-[13px] text-[#04343C] placeholder:text-[#5E6E73]/55 focus-visible:border-[#0E5C66] focus-visible:ring-1 focus-visible:ring-[#0E5C66]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="font-manrope text-[12px] font-bold text-[#04343C]">
                      What can we help with?
                    </label>
                    <Input
                      id="contact-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="For example: monthly bookkeeping and tax filing"
                      className="mt-2 h-12 rounded-xl border-[#04343C]/15 bg-[#F8F8F7] px-4 font-manrope text-[13px] text-[#04343C] placeholder:text-[#5E6E73]/55 focus-visible:border-[#0E5C66] focus-visible:ring-1 focus-visible:ring-[#0E5C66]"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="font-manrope text-[12px] font-bold text-[#04343C]">
                      A little context
                    </label>
                    <Textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us briefly about your situation, timing, and the support you’re looking for."
                      className="mt-2 min-h-[150px] resize-none rounded-xl border-[#04343C]/15 bg-[#F8F8F7] px-4 py-3 font-manrope text-[13px] leading-[1.7] text-[#04343C] placeholder:text-[#5E6E73]/55 focus-visible:border-[#0E5C66] focus-visible:ring-1 focus-visible:ring-[#0E5C66]"
                    />
                  </div>

                  <div className="flex flex-col gap-4 border-t border-[#04343C]/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-[330px] font-manrope text-[10px] leading-[1.6] text-[#5E6E73]">
                      By submitting this form, you agree to be contacted about your inquiry.
                    </p>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="group h-12 rounded-full bg-[#F47A20] px-7 font-manrope text-[13px] font-bold text-white transition duration-300 hover:bg-[#04343C] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isSubmitting ? "Sending..." : "Send message"}
                      {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-20 md:px-10 lg:px-[60px] lg:py-24">
          <div className="mx-auto max-w-[1320px]">
            <div className="grid gap-6 border-b border-[#04343C]/12 pb-9 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
              <div>
                <p className="font-manrope text-[12px] font-bold uppercase tracking-[0.2em] text-[#F47A20]">
                  What happens next
                </p>
                <h2 className="mt-3 font-manrope text-[34px] font-extrabold leading-[1.08] tracking-[-0.04em] text-[#04343C] md:text-[42px]">
                  A simple, useful first step.
                </h2>
              </div>
              <p className="max-w-[640px] font-manrope text-[15px] leading-[1.8] text-[#5E6E73] lg:justify-self-end">
                You don’t need to diagnose the whole problem before contacting us. Start with what you know, and we’ll help organize the rest.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {conversationSteps.map((step, index) => (
                <div
                  key={step.number}
                  className={`rounded-[20px] border p-7 md:p-8 ${
                    index === 1 ? "border-[#04343C] bg-[#04343C] text-white" : "border-[#04343C]/12 bg-[#F8F8F7]"
                  }`}
                >
                  <span className="font-manrope text-[11px] font-extrabold tracking-[0.16em] text-[#F47A20]">{step.number}</span>
                  <h3 className="mt-8 font-manrope text-[20px] font-extrabold tracking-[-0.02em]">{step.title}</h3>
                  <p className={`mt-3 font-manrope text-[13px] leading-[1.7] ${index === 1 ? "text-white/60" : "text-[#5E6E73]"}`}>
                    {step.detail}
                  </p>
                </div>
              ))}
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
