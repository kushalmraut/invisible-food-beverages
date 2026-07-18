"use client";

import React, { useState } from 'react';
import { notFound } from 'next/navigation';

// 1. Centralized Theme (Matches your Products Page)
const theme = {
  bg: "bg-[#091612]",
  surface: "bg-[#132620]",
  surfaceHover: "hover:bg-[#1A332B]",
  border: "border-white/10",
  borderActive: "border-[#D4FF00]/50",
  textMain: "text-white",
  textMuted: "text-gray-400",
  accentText: "text-[#D4FF00]",
  btnBg: "bg-[#D4FF00]",
  btnBgHover: "hover:bg-[#bce000]",
  btnText: "text-[#091612]",
  btnSecondaryBg: "bg-white/5",
  btnSecondaryHover: "hover:bg-white/10",
  btnSecondaryText: "text-white"
};

// 2. Product Database (Simulating a database fetch based on the URL slug)
const productDatabase: Record<string, any> = {
  "moong-dal": {
    name: "Moong Dal",
    category: "Grains & Pulses",
    tagline: "High-protein, split yellow lentils.",
    description: "Our premium Moong Dal is meticulously sorted, cleaned, and split to meet international standards. Known for its quick cooking time, high digestibility, and rich protein profile, it is a staple for global food manufacturers and distributors.",
    stats: { purity: "99.5%", origin: "India", moisture: "< 10%" },
    images: [
      "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586201375761-83865001e8ac?q=80&w=800&auto=format&fit=crop"
    ]
  },
  "white-rice": {
    name: "White Rice",
    category: "Premium Rice",
    tagline: "Premium long-grain, export quality.",
    description: "Export-grade white rice, double-polished and sorted for consistency. Known for its distinct aroma, long grain size, and pristine white color, perfect for premium retail and culinary distribution.",
    stats: { purity: "99.9%", origin: "India", moisture: "12% Max" },
    images: [
      "https://images.unsplash.com/photo-1586201375761-83865001e8ac?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?q=80&w=800&auto=format&fit=crop"
    ]
  }
};

export default function ProductDetailPage({ params }: { params: { category: string, productSlug: string } }) {
  // In a real app, you'd fetch the product using the params.productSlug.
  // Using a fallback to 'moong-dal' here so the prototype renders immediately.
  const slug = params?.productSlug || "moong-dal";
  const product = productDatabase[slug] || productDatabase["moong-dal"];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!product) return notFound();

  const faqs = [
    { q: "How do I get a quote?", a: "Send your requirements via our form below. We'll reply with a custom quote and shipping details." },
    { q: "What payment methods do you accept?", a: "Wire transfer, LC, and major international payments are supported. All transactions are secure." },
    { q: "Can I update my order?", a: "Order changes are allowed before shipment. Contact your dedicated account manager for help." },
    { q: "What is your refund process?", a: "Refunds apply to damaged or incorrect shipments. Submit claims within 7 days of delivery." }
  ];

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.textMain} font-sans`}>
      
      {/* HERO SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Product Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className={`${theme.btnBg} ${theme.btnText} text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full`}>
                {product.category}
              </span>
              <span className={`text-sm font-semibold uppercase tracking-wider ${theme.textMuted}`}>
                Export Ready
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              {product.name}
            </h1>
            <p className="text-2xl text-gray-200 font-medium mb-4">
              {product.tagline}
            </p>
            <p className={`text-lg leading-relaxed ${theme.textMuted} mb-10 max-w-xl`}>
              {product.description}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#quote-form" className={`${theme.btnBg} ${theme.btnText} ${theme.btnBgHover} px-8 py-4 rounded-xl font-bold transition shadow-lg`}>
                Request Quote
              </a>
              <a href="/products" className={`px-8 py-4 rounded-xl font-bold border ${theme.border} hover:bg-white/5 transition`}>
                Back to Catalog
              </a>
            </div>
          </div>

          {/* Right: Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 aspect-[16/9] rounded-2xl overflow-hidden relative">
              <img src={product.images[0]} alt={product.name} className="object-cover w-full h-full" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden relative">
              <img src={product.images[1]} alt={`${product.name} detail`} className="object-cover w-full h-full" />
            </div>
            <div className={`${theme.surface} rounded-2xl p-6 flex flex-col justify-center border ${theme.border}`}>
              <h4 className={`text-sm uppercase tracking-wider ${theme.textMuted} mb-2`}>Origin</h4>
              <p className="text-2xl font-bold mb-6">{product.stats.origin}</p>
              <h4 className={`text-sm uppercase tracking-wider ${theme.textMuted} mb-2`}>Purity Guarantee</h4>
              <p className={`text-3xl font-bold ${theme.accentText}`}>{product.stats.purity}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES GRID (From Webflow) */}
      <section className={`py-20 ${theme.surface} border-b ${theme.border}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <span className={`${theme.accentText} text-xs font-bold tracking-widest uppercase mb-4 block`}>Worldwide Distribution</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Delivering excellence, globally</h2>
            <p className={theme.textMuted}>Global shipping. Trusted by importers. Efficient logistics, global reach, and compliance with international standards.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`p-8 rounded-2xl bg-[#091612] border ${theme.border}`}>
              <h3 className="text-xl font-bold mb-3">Global reach, premium quality</h3>
              <p className={theme.textMuted}>Tailored export solutions for grains, spices, coffee, tea, and lentils. Certified, reliable, and compliant at every step.</p>
            </div>
            <div className={`p-8 rounded-2xl bg-[#091612] border ${theme.border}`}>
              <h3 className="text-xl font-bold mb-3">Consistent supply, trusted standards</h3>
              <p className={theme.textMuted}>Robust infrastructure for high-volume orders and evolving business needs. Precision documentation ensures smooth customs clearance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION (From Webflow) */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className={`uppercase tracking-wider text-sm font-bold ${theme.accentText} block mb-2`}>FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold">Export answers, simplified</h2>
          <p className={`mt-4 ${theme.textMuted}`}>Essential info for global buyers.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className={`border ${theme.border} rounded-xl overflow-hidden ${theme.surface}`}>
              <button 
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className={`w-full px-6 py-5 text-left flex justify-between items-center ${theme.surfaceHover} transition focus:outline-none`}
              >
                <span className="font-semibold text-lg">{faq.q}</span>
                <svg className={`w-5 h-5 transition-transform duration-200 ${openFaq === index ? `rotate-180 ${theme.accentText}` : theme.textMuted}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              {openFaq === index && (
                <div className={`px-6 pb-6 pt-2 ${theme.textMuted}`}>
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT / INQUIRY FORM (From Webflow) */}
      <section id="quote-form" className={`py-24 ${theme.surface} border-t ${theme.border}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-4xl font-bold mb-4">Global export inquiries start here</h2>
            <p className={`text-lg ${theme.textMuted} mb-12`}>
              Inquiring about <strong>{product.name}</strong>? Contact our team for export solutions. We respond quickly to all business inquiries.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-2">Contact details</h3>
                <p className={theme.textMuted}>For export or partnership queries, use the information below.</p>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full bg-[#091612] border ${theme.border} flex items-center justify-center`}>
                    <svg className={`w-5 h-5 ${theme.textMain}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <span className="font-medium">+1 (555) 000-0000</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full bg-[#091612] border ${theme.border} flex items-center justify-center`}>
                    <svg className={`w-5 h-5 ${theme.textMain}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <span className="font-medium">contact@premiumagroexports.com</span>
                </li>
              </ul>
            </div>
          </div>

          <form className={`bg-[#091612] p-8 rounded-2xl border ${theme.border} space-y-6`}>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">First name</label>
                <input type="text" className={`w-full bg-transparent border ${theme.border} rounded-lg px-4 py-3 focus:outline-none ${theme.borderActive} transition`} placeholder="First name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Last name</label>
                <input type="text" className={`w-full bg-transparent border ${theme.border} rounded-lg px-4 py-3 focus:outline-none ${theme.borderActive} transition`} placeholder="Last name" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Business email</label>
                <input type="email" className={`w-full bg-transparent border ${theme.border} rounded-lg px-4 py-3 focus:outline-none ${theme.borderActive} transition`} placeholder="email@website.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone number</label>
                <input type="tel" className={`w-full bg-transparent border ${theme.border} rounded-lg px-4 py-3 focus:outline-none ${theme.borderActive} transition`} placeholder="1 (555) 000-0000" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-3">Business type</label>
              <div className="flex flex-wrap gap-4">
                {['Importer', 'Distributor', 'Retailer', 'Other'].map(type => (
                  <label key={type} className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="businessType" className={`w-4 h-4 accent-[#D4FF00] bg-transparent border ${theme.border}`} />
                    <span className="text-sm text-gray-200">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea rows={4} className={`w-full bg-transparent border ${theme.border} rounded-lg px-4 py-3 focus:outline-none ${theme.borderActive} transition`} placeholder={`I am interested in importing ${product.name}...`}></textarea>
            </div>

            <button type="button" className={`w-full ${theme.btnBg} ${theme.btnText} ${theme.btnBgHover} font-bold text-lg py-4 rounded-xl transition shadow-lg`}>
              Submit
            </button>
          </form>

        </div>
      </section>

    </div>
  );
}