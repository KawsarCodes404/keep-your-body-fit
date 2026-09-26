import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] w-full max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6">
      <p className="text-sm font-bold tracking-[0.2em] text-[#ccff00]">
        404 — PAGE NOT FOUND
      </p>

      <h1 className="font-heading mt-3 text-4xl font-bold uppercase text-white">
        This lift isn&apos;t in the library
      </h1>

      <p className="mt-3 text-sm text-gray-400">
        The page may have moved, or the workout doesn&apos;t exist.
      </p>

      <Link
        href="/"
        className="mt-6 rounded-lg bg-[#ccff00] px-5 py-3 text-sm font-bold text-black hover:bg-[#b8e600]"
      >
        Go to workouts
      </Link>
    </main>
  );
}