import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import brandLogo from "../assets/logo-trans.png";

const companyLinks = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Contact", "/contact"],
];

const serviceLinks = [
  "Corporate & Personal Tax",
  "Corporate Financing",
  "Financial Reporting",
  "Bookkeeping & Payroll Services",
  "Advisory Services",
  "Audit & Assurance",
];

const socialLinks = [
  ["LinkedIn", "https://www.linkedin.com/"],
  ["Instagram", "https://www.instagram.com/wealthwizeconsulting/"],
  ["Facebook", "https://www.facebook.com/people/wealthwizeconsulting/61566153907524/?mibextid=LQQJ4d"],
];

export const Footer = () => (
  <footer className="text-left text-[#04343C]">
    <section className="relative overflow-hidden bg-[#04343C] px-5 py-12 text-white md:px-10 md:py-14 lg:px-[60px]">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <div aria-hidden="true" className="absolute -right-24 -top-28 h-72 w-72 rounded-full border border-white/10" />

      <div className="relative mx-auto flex max-w-[1320px] flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-[790px]">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#F47A20]" />
            <p className="font-manrope text-[11px] font-bold uppercase tracking-[0.2em] text-[#F6A05F]">
              A clearer next step
            </p>
          </div>
          <h2 className="mt-4 font-manrope text-[30px] font-extrabold leading-[1.08] tracking-[-0.04em] text-white md:text-[40px]">
            Bring your financial questions into one useful conversation.
          </h2>
        </div>

        <Link
          to="/contact"
          className="group inline-flex min-h-[52px] shrink-0 items-center justify-center gap-2 self-start rounded-full bg-[#F47A20] px-7 py-3.5 font-manrope text-[13px] font-extrabold text-white transition duration-300 hover:bg-white hover:text-[#04343C] lg:self-auto"
        >
          Start a conversation
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>

    <section className="bg-[#F3F5F2] px-5 py-16 md:px-10 md:py-20 lg:px-[60px]">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-12 border-b border-[#04343C]/12 pb-14 md:grid-cols-2 lg:grid-cols-[1.25fr_.55fr_.9fr_1.15fr] lg:gap-10">
          <div className="max-w-[390px]">
            <Link
              to="/"
              className="inline-flex rounded-md focus:outline-none focus:ring-2 focus:ring-[#F47A20] focus:ring-offset-4 focus:ring-offset-[#F3F5F2]"
              aria-label="WealthWize Consulting Group home"
            >
              <img
                src={brandLogo}
                alt="WealthWize Consulting Group"
                className="h-auto w-[280px] max-w-full object-contain md:w-[310px]"
              />
            </Link>

            <p className="mt-7 max-w-[360px] font-manrope text-[13px] leading-[1.8] text-[#5E6E73]">
              Tax, accounting, and financial support that gives individuals and growing businesses a clearer way forward.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {socialLinks.map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1.5 rounded-full border border-[#04343C]/15 bg-white/60 px-4 py-2 font-manrope text-[11px] font-bold text-[#04343C]/70 transition duration-300 hover:border-[#F47A20] hover:bg-white hover:text-[#04343C]"
                >
                  {name}
                  <ArrowUpRight className="h-3 w-3 text-[#F47A20] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-manrope text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#F47A20]">
              Company
            </p>
            <ul className="mt-6 space-y-4">
              {companyLinks.map(([label, href]) => (
                <li key={href}>
                  <Link
                    to={href}
                    className="group inline-flex items-center gap-2 font-manrope text-[13px] font-bold text-[#04343C]/65 transition duration-300 hover:text-[#04343C]"
                  >
                    <span className="h-px w-0 bg-[#F47A20] transition-all duration-300 group-hover:w-3" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-manrope text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#F47A20]">
              Services
            </p>
            <ul className="mt-6 grid gap-4">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="font-manrope text-[12px] font-semibold leading-[1.5] text-[#04343C]/60 transition duration-300 hover:text-[#04343C]"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[22px] border border-[#04343C]/10 bg-white/75 p-6 md:p-7">
            <div className="flex items-center justify-between gap-4">
              <p className="font-manrope text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#F47A20]">
                Contact
              </p>
              <span className="h-2 w-2 rounded-full bg-[#F47A20] shadow-[0_0_0_5px_rgba(244,122,32,0.1)]" />
            </div>

            <div className="mt-6 space-y-5">
              <a
                href="tel:+14169020308"
                className="group flex items-start gap-3 font-manrope text-[12px] font-bold text-[#04343C]/70 transition hover:text-[#04343C]"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EAF0EF] transition group-hover:bg-[#04343C]">
                  <Phone className="h-3.5 w-3.5 text-[#F47A20]" />
                </span>
                <span className="pt-1.5">416-902-0308</span>
              </a>

              <a
                href="mailto:Salman@wealthwize.pro"
                className="group flex items-start gap-3 font-manrope text-[12px] font-bold text-[#04343C]/70 transition hover:text-[#04343C]"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EAF0EF] transition group-hover:bg-[#04343C]">
                  <Mail className="h-3.5 w-3.5 text-[#F47A20]" />
                </span>
                <span className="break-all pt-1.5">Salman@wealthwize.pro</span>
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=320+Matheson+Boulevard+West+Suite+211+Mississauga+Ontario+L5R+0H2"
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-3 font-manrope text-[12px] leading-[1.65] text-[#04343C]/60 transition hover:text-[#04343C]"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EAF0EF] transition group-hover:bg-[#04343C]">
                  <MapPin className="h-3.5 w-3.5 text-[#F47A20]" />
                </span>
                <span className="pt-1">
                  320 Matheson Boulevard West, Suite 211
                  <br />
                  Mississauga, Ontario L5R 0H2
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-7 font-manrope text-[10px] font-semibold uppercase tracking-[0.08em] text-[#5E6E73] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} WealthWize Consulting Group. All rights reserved.</p>
          <p className="text-[#04343C]/55">Clarity for every financial decision.</p>
        </div>
      </div>
    </section>
  </footer>
);
