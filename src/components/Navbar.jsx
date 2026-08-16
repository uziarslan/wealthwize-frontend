import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import logo from "../assets/logo.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileMenuMounted, setMobileMenuMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButtonRef = useRef(null);

  const openMobileMenu = () => setMobileMenuMounted(true);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!mobileMenuMounted) return undefined;

    const animationFrame = window.requestAnimationFrame(() => {
      setMobileMenuOpen(true);
    });

    return () => window.cancelAnimationFrame(animationFrame);
  }, [mobileMenuMounted]);

  useEffect(() => {
    if (!mobileMenuMounted || mobileMenuOpen) return undefined;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const closeTimer = window.setTimeout(() => {
      setMobileMenuMounted(false);
      menuButtonRef.current?.focus();
    }, prefersReducedMotion ? 0 : 500);

    return () => window.clearTimeout(closeTimer);
  }, [mobileMenuMounted, mobileMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuMounted ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuMounted]);

  useEffect(() => {
    if (!mobileMenuMounted) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeMobileMenu();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuMounted]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white/95 text-left backdrop-blur-xl transition-shadow duration-500 ${
        isScrolled ? "shadow-[0_10px_35px_rgba(4,52,60,.12)]" : "shadow-none"
      }`}
    >
      <div
        className={`hidden overflow-hidden bg-[#04343C] text-white transition-all duration-500 ease-out md:block ${
          isScrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
        }`}
      >
        <div className="mx-auto flex h-10 max-w-[1440px] items-center justify-between px-10 text-[11px] font-semibold lg:px-[60px]">
          <div className="flex items-center gap-2 text-white/70">
            <MapPin className="h-3.5 w-3.5 text-[#F47A20]" />
            <span>320 Matheson Boulevard West, Mississauga, Ontario</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="mailto:zain@wealthwize.pro" className="flex items-center gap-2 text-white/70 transition hover:text-white">
              <Mail className="h-3.5 w-3.5 text-[#F47A20]" />
              zain@wealthwize.pro
            </a>
            <a href="tel:+16478783371" className="flex items-center gap-2 text-white/70 transition hover:text-white">
              <Phone className="h-3.5 w-3.5 text-[#F47A20]" />
              +1 647 878 3371
            </a>
          </div>
        </div>
      </div>

      <nav className="border-b border-[#04343C]/10" aria-label="Primary navigation">
        <div
          className={`mx-auto flex max-w-[1440px] items-center justify-between px-5 transition-[height] duration-500 ease-out md:px-10 lg:px-[60px] ${
            isScrolled ? "h-[70px]" : "h-[76px] md:h-[84px]"
          }`}
        >
          <Link to="/" className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#F47A20]" aria-label="WealthWize Consulting Group home">
            <img className={`object-contain transition-[width,height] duration-500 ${isScrolled ? "h-12 w-12" : "h-14 w-14 md:h-16 md:w-16"}`} alt="" src={logo} />
            <span className="hidden sm:block">
              <span className="block text-[15px] font-extrabold tracking-[0.13em] text-[#04343C]">WEALTHWIZE</span>
              <span className="mt-0.5 block text-[9px] font-bold tracking-[0.24em] text-[#5E6E73]">CONSULTING GROUP</span>
            </span>
          </Link>

          <div className="hidden items-center gap-8 lg:flex xl:gap-11">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative py-2 text-sm font-bold transition ${isActive ? "text-[#04343C]" : "text-[#5E6E73] hover:text-[#04343C]"}`}
                >
                  {item.label}
                  {isActive && <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-[#F47A20]" />}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="group inline-flex h-12 items-center gap-2 rounded-lg bg-[#F47A20] px-5 text-sm font-extrabold text-white transition hover:bg-[#04343C] focus:outline-none focus:ring-2 focus:ring-[#F47A20] focus:ring-offset-2"
            >
              Let’s talk
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#04343C]/15 text-[#04343C] lg:hidden"
            onClick={openMobileMenu}
            aria-label="Open navigation menu"
            aria-expanded={mobileMenuMounted}
            aria-controls="mobile-navigation-drawer"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {mobileMenuMounted && createPortal(
        <div
          className="fixed inset-0 z-[100] isolate text-white lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <button
            type="button"
            className={`absolute inset-0 h-full w-full bg-[#021E23]/70 transition-opacity duration-500 ease-out motion-reduce:duration-0 ${
              mobileMenuOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={closeMobileMenu}
            aria-label="Close navigation backdrop"
          />

          <div
            id="mobile-navigation-drawer"
            className={`absolute inset-y-0 right-0 isolate w-full overflow-y-auto overscroll-contain bg-[#04343C] shadow-[-24px_0_70px_rgba(0,0,0,0.28)] transition-transform duration-500 ease-out motion-reduce:duration-0 sm:w-[430px] sm:max-w-full ${
              mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
            style={{ minHeight: "100dvh" }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
                backgroundSize: "72px 72px",
              }}
            />
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full border border-white/10" />

            <div className="relative z-10 mx-auto flex min-h-[100dvh] w-full flex-col px-5 py-4 sm:px-8 sm:py-5">
            <div className="flex items-center justify-between border-b border-white/15 pb-4">
              <Link
                to="/"
                className={`flex items-center gap-3 transition-all duration-500 motion-reduce:duration-0 ${
                  mobileMenuOpen ? "translate-x-0 opacity-100 delay-100" : "translate-x-4 opacity-0 delay-0"
                }`}
              >
                <img className="h-12 w-12 object-contain sm:h-14 sm:w-14" alt="" src={logo} />
                <span>
                  <span className="block text-sm font-extrabold tracking-[0.13em]">WEALTHWIZE</span>
                  <span className="mt-0.5 block text-[8px] font-bold tracking-[0.22em] text-white/60">CONSULTING GROUP</span>
                </span>
              </Link>
              <button
                type="button"
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/25 bg-white/5 transition-all duration-500 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#F47A20] motion-reduce:duration-0 ${
                  mobileMenuOpen ? "rotate-0 scale-100 opacity-100 delay-100" : "rotate-45 scale-90 opacity-0 delay-0"
                }`}
                onClick={closeMobileMenu}
                aria-label="Close navigation menu"
                autoFocus
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center py-5" aria-label="Mobile navigation links">
              {navItems.map((item, index) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`group flex min-h-[54px] items-center justify-between border-b border-white/10 py-3.5 transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#F47A20] motion-reduce:duration-0 ${
                      mobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
                    }`}
                    style={{ transitionDelay: mobileMenuOpen ? `${140 + index * 55}ms` : "0ms" }}
                  >
                    <span className={`text-[24px] font-extrabold tracking-[-0.03em] sm:text-[28px] ${isActive ? "text-[#FDB178]" : "text-white"}`}>{item.label}</span>
                    <span className={`text-[11px] font-bold ${isActive ? "text-[#F47A20]" : "text-white/30"}`}>0{index + 1}</span>
                  </Link>
                );
              })}
            </nav>

            <div
              className={`border-t border-white/15 pt-4 transition-all duration-500 motion-reduce:duration-0 ${
                mobileMenuOpen ? "translate-y-0 opacity-100 delay-300" : "translate-y-4 opacity-0 delay-0"
              }`}
            >
              <Link to="/contact" className="flex h-12 items-center justify-center gap-2 rounded-lg bg-[#F47A20] text-sm font-extrabold transition hover:bg-white hover:text-[#04343C]">
                Book a consultation
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-x-5 gap-y-2 pb-1 text-[11px] text-white/60 sm:text-xs">
                <a href="tel:+16478783371">+1 647 878 3371</a>
                <a href="mailto:zain@wealthwize.pro">zain@wealthwize.pro</a>
              </div>
            </div>
          </div>
          </div>
        </div>,
        document.body
      )}
    </header>
  );
};
