import Link from "next/link";
import { productCategories } from "@/lib/products";
import { Logo } from "./Logo";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-gray-900 text-white shadow-lg">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Logo />
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/products" className="text-sm font-medium transition hover:text-green-400">Products</Link>
          <Link href="/contact" className="text-sm font-medium transition hover:text-green-400">Contact Us</Link>
          <Link href="/about" className="text-sm font-medium transition hover:text-green-400">About Us</Link>
          {/* <Link href="/contact" className="rounded-lg bg-green-600 px-5 py-2.5 text-sm font-semibold shadow-lg shadow-green-900/20 transition hover:bg-green-500">
            Request quote
          </Link> */}
        </div>
        <Link href="/products" className="rounded-md border border-white/20 px-3 py-2 text-sm font-semibold md:hidden">Catalog</Link>
      </nav>
    </header>
  );
}
