import Image from "next/image";
import Link from "next/link";
import { Logo } from "./Logo";

const menuColumns = [
  {
    title: "Grains",
    href: "/products/premium-rice",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e8ac?q=80&w=900&auto=format&fit=crop",
    products: [
      {
        name: "White Rice",
        href: "/products/premium-rice/white-rice",
        desc: "Premium long-grain rice for export.",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e8ac?q=80&w=300&auto=format&fit=crop",
      },
      {
        name: "Brown Rice",
        href: "/products/premium-rice/brown-rice",
        desc: "Whole grain, high-quality brown rice.",
        image: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?q=80&w=300&auto=format&fit=crop",
      },
      {
        name: "Black Rice",
        href: "/products/premium-rice/black-rice",
        desc: "Nutrient-rich, specialty black rice.",
        image: "https://images.unsplash.com/photo-1592997571659-0b21ff64313b?q=80&w=300&auto=format&fit=crop",
      },
    ],
  },
  {
    title: "Lentils",
    href: "/products/grains-pulses",
    image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?q=80&w=900&auto=format&fit=crop",
    products: [
      {
        name: "Moong Dal",
        href: "/products/grains-pulses/moong-dal",
        desc: "High-protein, split yellow lentils.",
        image: "https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?q=80&w=300&auto=format&fit=crop",
      },
      {
        name: "Toor Dal",
        href: "/products/grains-pulses/toor-dal",
        desc: "Premium split pigeon peas.",
        image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?q=80&w=300&auto=format&fit=crop",
      },
      {
        name: "Masoor Dal",
        href: "/products/grains-pulses/masoor-dal",
        desc: "Red lentils, cleaned and sorted.",
        image: "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?q=80&w=300&auto=format&fit=crop",
      },
    ],
  },
  {
    title: "Spices",
    href: "/products/whole-spices",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=900&auto=format&fit=crop",
    products: [
      {
        name: "Whole Spices",
        href: "/products/whole-spices",
        desc: "Sourced whole spices, export ready.",
        image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=300&auto=format&fit=crop",
      },
      {
        name: "Ground Spices",
        href: "/products/ground-spices",
        desc: "Finely milled, pure spice blends.",
        image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?q=80&w=300&auto=format&fit=crop",
      },
      {
        name: "Specialty Blends",
        href: "/products/ground-spices/curry-powder",
        desc: "Custom spice blends for buyers.",
        image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=300&auto=format&fit=crop",
      },
    ],
  },
];

function DownArrow() {
  return (
    <svg className="h-4 w-4 transition duration-200 group-hover:rotate-180" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-emerald-400/10 bg-[#062720]/95 text-white shadow-2xl shadow-emerald-950/25 backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Logo />
        <div className="hidden items-center gap-8 md:flex">
          <div className="group">
            <Link href="/products" className="flex items-center gap-2 text-sm font-semibold text-emerald-50/85 transition hover:text-emerald-300" aria-haspopup="true">
              Products
              <DownArrow />
            </Link>
            <div className="pointer-events-none absolute left-1/2 top-full w-[min(92vw,1120px)] -translate-x-1/2 pt-5 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
              <div className="grid gap-6 overflow-hidden rounded-3xl border border-emerald-300/10 bg-[#042b24] p-8 shadow-2xl shadow-black/35 ring-1 ring-white/5 lg:grid-cols-3">
                {menuColumns.map((column) => (
                  <div key={column.title} className="relative overflow-hidden rounded-2xl border border-white/5 bg-emerald-950/40 p-6">
                    <Image src={column.image} alt="" fill sizes="33vw" className="object-cover opacity-10" />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#03251f]/95 via-[#03251f]/88 to-[#07523f]/75" />
                    <div className="relative">
                      <Link href={column.href} className="text-xs font-bold uppercase tracking-[0.28em] text-emerald-100/65 transition hover:text-emerald-200">
                        {column.title}
                      </Link>
                      <div className="mt-7 space-y-5">
                        {column.products.map((product) => (
                          <Link key={product.name} href={product.href} className="flex gap-4 rounded-2xl p-2 -m-2 transition hover:bg-white/5 focus:bg-white/5 focus:outline-none">
                            <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-emerald-200/20 bg-white/10">
                              <Image src={product.image} alt={product.name} fill sizes="56px" className="object-cover" />
                            </span>
                            <span>
                              <span className="block text-lg font-extrabold leading-tight text-white transition group-hover:text-white">{product.name}</span>
                              <span className="mt-1 block text-sm leading-6 text-emerald-50/70">{product.desc}</span>
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
          <Link href="/about" className="text-sm font-semibold text-emerald-50/75 transition hover:text-emerald-300">About</Link>
          <Link href="/contact" className="text-sm font-semibold text-emerald-50/75 transition hover:text-emerald-300">Contact Us</Link>
          <Link href="/blog" className="text-sm font-semibold text-emerald-50/75 transition hover:text-emerald-300">Blog</Link>
          {/* <Link href="/contact" className="flex items-center gap-2 text-sm font-semibold text-emerald-50/75 transition hover:text-emerald-300">
            Support
            <DownArrow />
          </Link> */}
        </div>
        <Link href="/products" className="rounded-md border border-emerald-100/20 px-3 py-2 text-sm font-semibold text-emerald-50 md:hidden">Catalog</Link>
      </nav>
    </header>
  );
}