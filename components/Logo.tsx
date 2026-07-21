import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3 text-white transition"
      aria-label="Invisible Food & Beverages home"
    >
      <span className="relative flex h-[70px] w-[75px] shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-[#17332A]">
  <Image
    src="/logo_img.png"
    alt="Invisible Food & Beverages"
    fill
    className="object-cover"
  />
</span>
    </Link>
  );
}