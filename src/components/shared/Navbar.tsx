"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import brandLogo from "@/assets/Link - Brand Logo for navbar.png";

export default function Navbar({ planCount = 0, savedCount = 0 }) {
    const pathname = usePathname();

    const isPlanPage = pathname === "/my-plan";

    return (
        <header className="border-b border-[#20232b] bg-[#0b0d10]">
            <nav className="container mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">

                {/* Left part */}
                <Link href="/" className="flex shrink-0 items-center gap-2">
                    <Image
                        src={brandLogo}
                        alt="FitLog"
                        className="h-auto w-[100px] object-contain"
                    />
                </Link>

                {/* middle part */}
                <div className="flex items-center gap-1">
                    <Link
                        href="/"
                        className={`rounded-full px-4 py-2 text-sm transition ${!isPlanPage
                                ? "bg-[#1d2610] text-[#ccff00]"
                                : "text-gray-400 hover:text-white"
                            }`}
                    >
                        Workouts
                    </Link>

                    <Link
                        href="/my-plan"
                        className={`rounded-full px-4 py-2 text-sm transition ${isPlanPage
                                ? "bg-[#1d2610] text-[#ccff00]"
                                : "text-gray-400 hover:text-white"
                            }`}
                    >
                        My Plan
                    </Link>
                </div>

                {/* right part */}
                <div className="flex shrink-0 items-center gap-3 text-sm">
                    <Link
                        href="/my-plan"
                        className="flex items-center gap-2 text-gray-300 hover:text-white"
                    >
                        <span className="hidden sm:inline">Plan</span>
                        <span className="grid size-6 place-items-center rounded-full bg-[#ccff00] text-xs font-bold text-black">
                            {planCount}
                        </span>
                    </Link>

                    <Link
                        href="/my-plan"
                        className="flex items-center gap-2 text-gray-300 hover:text-white"
                    >
                        <span className="hidden sm:inline">Saved</span>
                        <span className="grid size-6 place-items-center rounded-full border border-[#343944] text-xs">
                            {savedCount}
                        </span>
                    </Link>
                </div>
            </nav>
        </header>
    );
}