import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-auto border-t-4 border-green-500  text-white bg-[#091c18]/95">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <Logo />
          <p className="mt-4 max-w-xl text-sm">Premium agricultural products, export support, and dependable supply coordination for international buyers.</p>
        </div>
        <div className="flex gap-6 text-sm">
          <Link href="/products" className="hover:text-green-400">Products</Link>
          <Link href="/contact" className="hover:text-green-400">Contact Us</Link>
          <Link href="/about" className="hover:text-green-400">About Us</Link>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 pb-8 text-sm sm:px-6 lg:px-8">© 2026 Invisible Food and Beverages. All rights reserved.</div>
    </footer>
  );
}
