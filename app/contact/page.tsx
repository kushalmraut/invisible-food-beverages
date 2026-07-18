import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Contact", description: "Request an export quote from Invisible Food & Beverages." };

export default function ContactPage() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-green-600">Contact sales</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">Request an export quote</h1>
          <p className="mt-6 text-lg text-gray-600">Tell us your category, packaging, volume, and destination requirements. Our team can coordinate sourcing, documentation, and shipment planning.</p>
        </div>
        <div className="rounded-2xl bg-white p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-gray-900">Start a conversation</h2>
          <p className="mt-4 text-gray-600">Email our sales team with your product list and target port.</p>
          <Link href="mailto:sales@invisiblefoodbeverages.com" className="mt-8 inline-flex rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-500">sales@invisiblefoodbeverages.com</Link>
        </div>
      </div>
    </section>
  );
}
