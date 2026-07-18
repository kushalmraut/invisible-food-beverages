import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getCategory, productCategories } from "@/lib/products";

type CategoryPageProps = { params: Promise<{ category: string }> };

export function generateStaticParams() {
  return productCategories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) return { title: "Product category" };
  return { title: category.name, description: category.summary };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  return (
    <article className="bg-white">
      <section className="relative flex min-h-[460px] items-end overflow-hidden bg-gray-900 py-20">
        <Image src={category.image} alt={`${category.name} products`} fill priority sizes="100vw" className="object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/60 to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-white sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-400">Product category</p>
          <h1 className="mt-3 text-5xl font-extrabold tracking-tight">{category.name}</h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-200">{category.description}</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900">Available products</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {category.products.map((product) => (
            <div key={product} className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-lg font-semibold text-gray-900">{product}</div>
          ))}
        </div>
      </section>
    </article>
  );
}
