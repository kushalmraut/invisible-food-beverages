import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Export Capabilities", description: "Export logistics, documentation, and supply capabilities." };

const capabilities = [
  ["Sourcing & grading", "Supplier coordination, product sorting, grading, and buyer-specific packing conversations."],
  ["Documentation", "Commercial invoice, packing list, certificate coordination, and destination-specific paperwork support."],
  ["Shipment planning", "Container planning, freight coordination, and timeline alignment with importer requirements."],
];

export default function ExportCapabilitiesPage() {
  return (
    <div className="bg-[#061c2b] text-white">
      <section className="mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#ADFF91]">Export capabilities</p>
        <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">Premium crops. Disciplined logistics. Delivered worldwide.</h1>
        <p className="mt-8 max-w-3xl text-xl leading-9 text-white/65">We support buyers with export-ready product coordination, flexible packaging discussions, and practical shipment planning across core agricultural categories.</p>
      </section>
      <section id="logistics" className="mx-auto grid max-w-7xl gap-6 px-4 pb-20 sm:px-6 md:grid-cols-3 lg:px-8">
        {capabilities.map(([title, body]) => <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.06] p-8"><h2 className="text-2xl font-semibold">{title}</h2><p className="mt-5 leading-8 text-white/65">{body}</p></div>)}
      </section>
      <section id="incoterms" className="bg-[#091612] py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div><p className="text-sm font-bold uppercase tracking-[0.3em] text-[#D4FF00]">Incoterms</p><h2 className="mt-5 text-4xl font-semibold">Flexible trade conversations</h2></div>
          <p className="text-lg leading-9 text-white/65">Our team can discuss buyer-preferred arrangements such as FOB, CIF, and other agreed shipping terms depending on product, destination, and volume.</p>
        </div>
      </section>
      <section id="certifications" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#ADFF91]/30 bg-[#ADFF91]/10 p-10"><h2 className="text-4xl font-semibold">Compliance-minded exports</h2><p className="mt-5 max-w-3xl text-lg leading-8 text-white/70">We coordinate quality documentation and certification requirements early in the quotation process so buyers can evaluate product fit before shipment planning.</p></div>
      </section>
      <section id="global" className="px-4 pb-24 text-center sm:px-6 lg:px-8"><Link href="/contact" className="inline-flex rounded-xl bg-[#ADFF91] px-8 py-4 font-bold text-[#061c2b] transition hover:bg-[#D4FF00]">Plan an export order</Link></section>
    </div>
  );
}
