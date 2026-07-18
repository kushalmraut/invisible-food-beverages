import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 text-white transition hover:text-green-300" aria-label="Invisible Food & Beverages home">
      <svg width="33" height="33" viewBox="0 0 33 33" className="shrink-0 text-green-500" aria-hidden="true">
        <path d="M28,0H5C2.24,0,0,2.24,0,5v23c0,2.76,2.24,5,5,5h23c2.76,0,5-2.24,5-5V5c0-2.76-2.24-5-5-5ZM29,17c-6.63,0-12,5.37-12,12h-1c0-6.63-5.37-12-12-12v-1c6.63,0,12-5.37,12-12h1c0,6.63,5.37,12,12,12v1Z" fill="currentColor" />
      </svg>
      <span className="text-base font-bold uppercase tracking-wide sm:text-xl">Invisible Food & Beverages</span>
    </Link>
  );
}
