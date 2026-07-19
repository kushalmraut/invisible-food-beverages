import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Contact", description: "Request an export quote from Invisible Food & Beverages." };

const faqs = [
  ["How do I get a quote?", "Send your requirements via our form. We'll reply with a custom quote and shipping details."],
  ["What payment methods do you accept?", "Wire transfer and agreed trade payment terms can be coordinated after buyer verification and order confirmation."],
  ["How can I contact your team?", "Use the form, email sales@invisiblefoodbeverages.com, or call our export desk for urgent shipment planning."],
  ["Can I update my order?", "Yes, our team can review changes before packing or dispatch milestones are finalized."],
  ["What is your refund process?", "Refund and claim handling depends on contract terms, inspection documents, and shipment status."],
];

export default function ContactPage() {
  return (
    <div className="bg-[#061c2b] text-white">
      <section id="faq" className="mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[0.9fr_1.5fr] lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-white/60">FAQ</p>
          <h1 className="mt-8 text-6xl font-medium leading-[0.98] tracking-tight md:text-8xl">Export answers, simplified</h1>
          <p className="mt-12 text-xl font-semibold text-white/65">Essential info for global buyers.</p>
          <Link href="#contact-form" className="mt-12 inline-flex rounded-xl bg-[#ADFF91] px-8 py-4 font-semibold text-[#061c2b] transition hover:bg-[#D4FF00]">Contact</Link>
        </div>
        <div className="space-y-4">
          {faqs.map(([q, a], index) => (
            <details key={q} open={index === 0} className="group rounded-lg bg-white/[0.06] text-white/75">
              <summary className="flex cursor-pointer list-none items-center justify-between px-8 py-6 text-xl font-semibold text-white/75 marker:hidden">
                {q}<span className="text-3xl transition group-open:rotate-180">⌄</span>
              </summary>
              <p className="px-8 pb-8 text-lg font-semibold leading-8 text-white/70">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="contact-form" className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 rounded-3xl border border-white/20 p-8 md:p-12 lg:grid-cols-[1.55fr_0.75fr]">
          <form className="grid gap-7 md:grid-cols-2">
            {[["FIRST NAME", "First name"], ["LAST NAME", "Last name"], ["BUSINESS EMAIL", "email@website.com"], ["PHONE NUMBER", "1 (555) 000-0000"]].map(([label, placeholder]) => (
              <label key={label} className="space-y-3 text-sm font-bold tracking-widest text-white/90">{label}<input placeholder={placeholder} className="w-full rounded-xl border border-white/80 bg-transparent px-5 py-5 text-lg text-white outline-none placeholder:text-white/35 focus:border-[#ADFF91]" /></label>
            ))}
            <fieldset className="md:col-span-2">
              <legend className="mb-5 text-sm font-bold tracking-widest text-white/90">BUSINESS TYPE</legend>
              <div className="flex flex-wrap gap-8 text-lg font-bold">{["Importer", "Distributor", "Retailer", "Other"].map((type) => <label key={type} className="flex items-center gap-3"><input name="businessType" type="radio" className="h-6 w-6 accent-[#ADFF91]" />{type}</label>)}</div>
            </fieldset>
            <label className="space-y-3 text-sm font-bold tracking-widest text-white/90 md:col-span-2">MESSAGE<textarea placeholder="Type your message..." rows={5} className="w-full rounded-xl border border-white/80 bg-transparent px-5 py-5 text-lg text-white outline-none placeholder:text-white/35 focus:border-[#ADFF91]" /></label>
            <button className="w-fit rounded-xl bg-[#ADFF91] px-8 py-4 text-lg font-semibold text-[#061c2b] transition hover:bg-[#D4FF00]">Submit</button>
          </form>
          <aside className="flex flex-col justify-between gap-12 py-6">
            <div><h2 className="text-4xl font-semibold">Contact details</h2><p className="mt-6 text-xl font-semibold leading-9 text-white/70">For export or partnership queries, use the information below.</p></div>
            <div className="space-y-8 text-xl font-bold"><p>☏ &nbsp; +1 (555) 000-0000</p><p>✉ &nbsp; sales@invisiblefoodbeverages.com</p><p>⌖ &nbsp; 101 Web Lane<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;San Francisco, CA, USA</p></div>
            <div className="flex gap-6 text-3xl text-[#ADFF91]"><span>f</span><span>𝕏</span></div>
          </aside>
        </div>
      </section>
    </div>
  );
}
