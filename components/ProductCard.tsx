import Image from "next/image";
import Link from "next/link";
import type { ProductCategory } from "@/lib/products";

export function ProductCard({ category }: { category: ProductCategory }) {
  return (
    <Link href={`/products/${category.slug}`} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative h-64 overflow-hidden">
        <Image src={category.image} alt={`${category.name} category`} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
      </div>
      <div className="p-8">
        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-bold uppercase text-gray-600">{category.name}</span>
        <h3 className="mt-4 text-2xl font-bold text-gray-900">{category.summary}</h3>
        <p className="mt-3 text-gray-600">{category.description}</p>
        <span className="mt-6 inline-flex font-semibold text-green-600 group-hover:text-green-700">View details →</span>
      </div>
    </Link>
  );
}
