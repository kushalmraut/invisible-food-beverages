import type { Metadata } from "next";
import { ProductCard } from "@/components/ProductCard";
import { productCategories } from "@/lib/products";

export const metadata: Metadata = { title: "Products", description: "Browse export-ready agricultural product categories." };

export default function ProductsPage() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-600">Products catalog</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">Global quality. Trusted supply.</h1>
          <p className="mt-6 text-xl text-gray-600">Discover certified grains, spices, and lentils delivered with consistency and reliability for international buyers.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {productCategories.map((category) => <ProductCard key={category.slug} category={category} />)}
        </div>
      </div>
    </section>
  );
}
