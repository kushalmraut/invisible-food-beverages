"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { catalogData, getProductImage, makeSlug } from "@/lib/products";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

const featuredCategoryIds = ["premium-rice", "grains-pulses", "whole-spices"];
const navLinks = [
  { label: "About", href: "/about" },
  { label: "Export", href: "/export-capabilities" },
  { label: "Contact Us", href: "/contact" },
  // { label: "Blog", href: "/blog" },
];

// Centralized theme variables mapping to your globals.css
const theme = {
  bg: "theme-page",
  surface: "theme-surface",
  surfaceHover: "theme-surface-hover",
  border: "theme-border",
  borderActive: "theme-active-border",
  textMain: "theme-text",
  textMuted: "theme-muted",
  accentText: "theme-accent",
  btnBg: "theme-button",
};

const menuColumns = featuredCategoryIds.map((categoryId) => {
  const category = catalogData.find((item) => item.id === categoryId) ?? catalogData[0];
  const products = (category.items ?? category.subcategories?.flatMap((sub) => sub.items) ?? []).slice(0, 3);

  return {
    title: category.id === "premium-rice" ? "Grains" : category.id === "grains-pulses" ? "Lentils" : "Spices",
    href: `/products/${category.id}`,
    image: category.image,
    products: products.map((name) => ({
      name,
      href: `/products/${category.id}/${makeSlug(name)}`,
      desc: category.summary,
      image: getProductImage(name, category),
    })),
  };
});

function DownArrow() {
  return (
    <svg className="h-4 w-4 transition duration-200 group-hover:rotate-180" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  // Helper to remove focus so the menu fades instantly when a link is clicked
  const handleDropdownClick = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  return (
    <header className={`site-navbar sticky top-0 z-50 border-b ${theme.border} ${theme.surface} shadow-lg backdrop-blur transition-colors duration-300`}>
      <nav className="mx-auto flex min-h-16 max-w-7xl items-center justify-between px-4 sm:min-h-20 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center gap-3 sm:gap-4">
          <Logo />
          <ThemeToggle />
        </div>
        
        <div className="hidden h-full items-center gap-8 md:flex">
          {/* The group wrapper now spans the full height to prevent hover gaps */}
          <div className="group flex h-full items-center">
            
            {/* Added py-8 here. This expands the invisible hover area all the way to the bottom of the navbar */}
            <Link href="/products" className={`nav-link flex items-center gap-2 py-8 text-sm font-semibold transition ${theme.textMain} hover:theme-accent`} aria-haspopup="true">
              Products
              <DownArrow />
            </Link>

            {/* Changed pt-5 to pt-2 to tighten the gap, ensuring a perfectly smooth hover transition */}
            <div className="pointer-events-none absolute left-1/2 top-full w-[min(92vw,1120px)] -translate-x-1/2 pt-2 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
              <div className={`grid gap-6 overflow-hidden rounded-3xl border ${theme.border} ${theme.surface} p-8 shadow-2xl lg:grid-cols-3`}>
                {menuColumns.map((column) => (
                  <div key={column.title} className={`relative overflow-hidden rounded-2xl border ${theme.border} ${theme.bg} p-6`}>
                    <div className={`absolute inset-0 ${theme.surface} opacity-80`} />
                    <div className="relative z-10">
                      <Link href={column.href} onClick={handleDropdownClick} className={`text-xs font-bold uppercase tracking-[0.28em] ${theme.textMuted} transition hover:theme-accent`}>
                        {column.title}
                      </Link>
                      <div className="mt-7 space-y-5">
                        {column.products.map((product) => (
                          <Link key={product.name} href={product.href} onClick={handleDropdownClick} className={`group/item -m-2 flex gap-4 rounded-2xl p-2 transition ${theme.surfaceHover} focus:outline-none`}>
                            <span className={`relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border ${theme.border} bg-black/5`}>
                              <Image src={product.image} alt={product.name} fill sizes="56px" className="object-cover transition-transform duration-500 group-hover/item:scale-125" />
                            </span>
                            <span>
                              <span className={`block text-lg font-extrabold leading-tight ${theme.textMain} transition group-hover/item:theme-accent`}>{product.name}</span>
                              <span className={`mt-1 block text-sm leading-6 ${theme.textMuted}`}>{product.desc}</span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={`nav-link py-8 text-sm font-semibold transition ${theme.textMain} hover:theme-accent`}>
              {link.label}
            </Link>
          ))}
        </div>
        
        <button
          type="button"
          className={`nav-menu-button inline-flex h-11 w-11 items-center justify-center rounded-xl border ${theme.border} transition md:hidden ${theme.textMain}`}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="relative h-5 w-6">
            <span className={`absolute left-0 top-0 h-0.5 w-6 rounded-full bg-current transition ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`absolute left-0 top-2 h-0.5 w-6 rounded-full bg-current transition ${isOpen ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 top-4 h-0.5 w-6 rounded-full bg-current transition ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>
      
      <div className={`${isOpen ? "grid" : "hidden"} mobile-nav-panel border-t ${theme.border} ${theme.surface} px-4 pb-5 pt-4 md:hidden absolute top-full left-0 w-full shadow-xl`}>
        <Link onClick={closeMenu} href="/products" className={`rounded-2xl ${theme.btnBg} px-5 py-3 text-center font-bold theme-button-text`}>
          Browse products
        </Link>
        <div className="mt-4 grid gap-2">
          {catalogData.map((category) => (
            <Link onClick={closeMenu} key={category.id} href={`/products/${category.id}`} className={`rounded-xl border ${theme.border} px-4 py-3 text-sm font-semibold ${theme.textMuted} transition hover:theme-active-border hover:theme-accent`}>
              {category.name}
            </Link>
          ))}
        </div>
        <div className={`mt-4 grid gap-2 border-t ${theme.border} pt-4`}>
          {navLinks.map((link) => (
            <Link onClick={closeMenu} key={link.href} href={link.href} className={`rounded-xl px-4 py-3 font-semibold ${theme.textMuted} transition ${theme.surfaceHover} hover:theme-accent`}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}