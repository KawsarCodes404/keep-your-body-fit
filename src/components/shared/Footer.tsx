import Image from "next/image";
import Link from "next/link";
import brandLogo from "@/assets//Brand Logo Left for footer.png";

export default function Footer() {
  return (
    <footer className="border-t border-[#20232b] bg-[#090A0D]">

      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6">

        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src={brandLogo}
            alt="FitLog"
            className="h-auto w-[100px] object-contain"
          />
        </Link>

        <p className="text-center text-xs text-gray-500 sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}