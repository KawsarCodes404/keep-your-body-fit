import Image from "next/image";
import Link from "next/link";
import brandLogo from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="border-t border-[#20232b] bg-[#090A0D]">

      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6">

        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image
            src={brandLogo}
            alt=""
            aria-hidden="true"
            width={17}
            height={17}
            className="object-contain"
          />
          <span className="font-heading text-[16px] font-semibold text-white">
            FITLOG
          </span>
        </Link>

        <p className="text-center text-xs text-gray-500 sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}