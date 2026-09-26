export default function LibraryLoading() {
  return (
    <section
      aria-busy="true"
      aria-label="Loading workouts"
      className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-12"
    >
      <div className="mb-6">
        <h2 className="font-heading text-3xl font-bold uppercase text-white">
          The Library
        </h2>
        <p role="status" className="mt-1 text-sm text-gray-400">
          Loading workouts…
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 12 }, (_, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl border border-[#252a34] bg-[#15171d]"
          >
            <div className="aspect-[16/9] animate-pulse bg-[#252a34]" />
            <div className="space-y-3 p-4">
              <div className="h-4 w-20 animate-pulse rounded bg-[#252a34]" />
              <div className="h-5 w-3/4 animate-pulse rounded bg-[#252a34]" />
              <div className="h-4 w-1/2 animate-pulse rounded bg-[#252a34]" />
              <div className="h-4 w-full animate-pulse rounded bg-[#252a34]" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}