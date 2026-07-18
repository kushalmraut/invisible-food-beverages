import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { productCategories } from "@/lib/products";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gray-900 py-24 sm:py-32 lg:py-40">
        <Image src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop" alt="Agricultural export products" fill priority sizes="100vw" className="object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-green-400">Premium agricultural products catalog</p>
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl">Quality crops. Trusted worldwide.</h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-300">Certified grains, spices, coffee, tea, and lentils shipped globally with consistency and reliability for international buyers.</p>
          <div className="mt-10 flex justify-center gap-4">
            <Link href="/products" className="rounded-md bg-green-600 px-8 py-3 font-bold text-white shadow-lg shadow-green-900/50 transition hover:bg-green-500">Browse catalog</Link>
            <Link href="/contact" className="rounded-md border border-white/30 px-8 py-3 font-bold text-white transition hover:bg-white/10">Request quote</Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">Export-ready categories</h2>
            <p className="mt-4 text-lg text-gray-600">A production-ready catalog built with real routes, reusable components, and static-friendly product data.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {productCategories.map((category) => <ProductCard key={category.slug} category={category} />)}
          </div>
        </div>
      </section>
    </>
  );
}
