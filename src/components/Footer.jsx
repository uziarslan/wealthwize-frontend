import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import logoTrans from "../assets/logo-trans.png";

const companyLinks = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Contact", "/contact"],
];

const serviceLinks = [
  "Financial Reporting",
  "Tax Filing",
  "Bookkeeping",
  "Cross-Border Tax",
  "Payroll",
  "AR/AP Management",
];

const socialLinks = [
  ["Instagram", "https://www.instagram.com/wealthwizeconsulting/"],
  ["Facebook", "https://www.facebook.com/people/wealthwizeconsulting/61566153907524/?mibextid=LQQJ4d"],
];

export const Footer = () => (
  <footer className="bg-[#04343C] text-left text-white">
    <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-20 lg:px-[60px]">
      <div className="grid gap-12 border-b border-white/15 pb-14 md:grid-cols-2 lg:grid-cols-[1.2fr_.7fr_1fr_1.2fr]">
        <div className="max-w-[350px]">
          <Link to="/" className="inline-block focus:outline-none focus:ring-2 focus:ring-[#F47A20]">
            <img src={logoTrans} alt="WealthWize Consulting Group" className="h-auto w-[210px] object-contain" />
          </Link>
          <p className="mt-6 text-sm leading-7 text-white/60">
            Tax, accounting, and financial support that gives individuals and
            growing businesses a clearer way forward.
          </p>
          <div className="mt-7 flex gap-3">
            {socialLinks.map(([name, url]) => (
              <a key={name} href={url} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 rounded-md border border-white/15 px-3 py-2 text-xs font-bold text-white/70 transition hover:border-[#F47A20] hover:text-white">
                {name}
                <ArrowUpRight className="h-3 w-3" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#FDB178]">Company</h2>
          <ul className="mt-6 space-y-4">
            {companyLinks.map(([label, href]) => (
              <li key={href}>
                <Link to={href} className="text-sm font-semibold text-white/[.65] transition hover:text-white">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#FDB178]">Services</h2>
          <ul className="mt-6 grid gap-4">
            {serviceLinks.map((service) => (
              <li key={service}>
                <Link to="/services" className="text-sm font-semibold text-white/[.65] transition hover:text-white">{service}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#FDB178]">Contact</h2>
          <div className="mt-6 space-y-5 text-sm text-white/[.65]">
            <a href="tel:+16478783371" className="flex items-start gap-3 transition hover:text-white">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#F47A20]" />
              +1 647 878 3371
            </a>
            <a href="mailto:zain@wealthwize.pro" className="flex items-start gap-3 transition hover:text-white">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#F47A20]" />
              zain@wealthwize.pro
            </a>
            <p className="flex items-start gap-3 leading-6">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#F47A20]" />
              <span>320 Matheson Boulevard West, Suite 211<br />Mississauga, Ontario L5R 0H2</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 pt-7 text-xs font-medium text-white/[.45] sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} WealthWize Consulting Group. All rights reserved.</p>
        <p>Clarity for every financial decision.</p>
      </div>
    </div>
  </footer>
);
