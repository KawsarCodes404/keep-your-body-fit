"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext, useMemo, useState } from "react";
import { WorkoutContext } from "@/context/WorkoutContext";
import { Iworkout } from "@/types/workout";

type SortBy = "duration" | "calories" | "rating";
type ActiveTab = "plan" | "saved";

interface IWorkoutContext {
  planWorkouts: Iworkout[];
  savedWorkouts: Iworkout[];
  isLoading: boolean;
  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
  markAsDone: (id: number) => void;
  showToast: (message: string) => void;
}

const MyPlan = () => {
  const {
    planWorkouts,
    savedWorkouts,
    isLoading,
    removeFromPlan,
    removeFromSaved,
    markAsDone,
    showToast,
  } = useContext(WorkoutContext) as IWorkoutContext;

  const [activeTab, setActiveTab] = useState<ActiveTab>("plan");
  const [sortBy, setSortBy] = useState<SortBy>("duration");

  const currentWorkouts =
    activeTab === "plan" ? planWorkouts : savedWorkouts;

  const sortedWorkouts = useMemo(() => {
    return [...currentWorkouts].sort((a, b) => {
      if (sortBy === "duration") return a.duration - b.duration;
      if (sortBy === "calories") return b.caloriesBurned - a.caloriesBurned;
      return b.rating - a.rating;
    });
  }, [currentWorkouts, sortBy]);

  const totalMinutes = planWorkouts.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = planWorkouts.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  const handleRemove = (workout: Iworkout) => {
    if (activeTab === "plan") {
      removeFromPlan(workout.id);
    } else {
      removeFromSaved(workout.id);
    }

    showToast(`Removed ${workout.name}`);
  };

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:py-12">
      <header className="mb-7">
        <h1 className="font-heading text-3xl font-bold uppercase text-white">
          My Plan
        </h1>
        <p className="mt-2 text-sm text-gray-400">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </header>


      <section className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-[#252a34] bg-[#252a34] sm:grid-cols-3">
        <Metric label="Exercises" value={planWorkouts.length} accent />
        <Metric label="Minutes" value={totalMinutes} />
        <Metric label="Calories" value={totalCalories} />
      </section>


      <div className="my-6 flex flex-wrap items-center justify-between gap-4">
        <div className="inline-flex rounded-lg border border-[#252a34] bg-[#15171d] p-1">
          <button
            type="button"
            onClick={() => setActiveTab("plan")}
            className={`rounded-md px-4 py-2 text-sm ${
              activeTab === "plan"
                ? "bg-[#222630] font-semibold text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Today&apos;s Plan
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("saved")}
            className={`rounded-md px-4 py-2 text-sm ${
              activeTab === "saved"
                ? "bg-[#222630] font-semibold text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Saved
          </button>
        </div>

        <label className="flex items-center gap-2 text-sm text-gray-400">
          Sort By
          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value as SortBy)}
            className="rounded-lg border border-[#252a34] bg-[#15171d] px-3 py-2 text-sm text-white outline-none focus:border-[#ccff00]"
          >
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </label>
      </div>


      {isLoading ? (
        <div className="rounded-xl border border-[#252a34] px-6 py-16 text-center text-gray-400">
          Loading workouts…
        </div>
      ) : sortedWorkouts.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="space-y-3">
          {sortedWorkouts.map((workout) => (
            <article
              key={workout.id}
              className="flex flex-col gap-4 rounded-xl border border-[#252a34] bg-[#15171d] p-4 sm:flex-row sm:items-center"
            >
              <div className="relative h-36 w-full shrink-0 overflow-hidden rounded-lg bg-[#20232b] sm:h-[74px] sm:w-36">
                <Image
                  src={workout.image}
                  alt={workout.name}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 100vw, 144px"
                  className="object-cover"
                />
              </div>

              <div className="min-w-0 flex-1">
                <h2 className="font-heading font-bold uppercase text-white">
                  {workout.name}
                </h2>
                <p className="mt-1 text-sm text-gray-400">
                  {workout.equipment}
                </p>

                <div className="mt-2 flex flex-wrap gap-4 text-xs text-gray-300">
                  <span><b className="text-[#ccff00]">◷</b> {workout.duration} min</span>
                  <span><b className="text-[#ccff00]">♨</b> {workout.caloriesBurned} kcal</span>
                  <span><b className="text-[#ccff00]">☆</b> {workout.rating}</span>
                </div>
              </div>

              {/* View Details button on the right side */}
              <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                <Link
                  href={`/workouts/${workout.id}`}
                  className="rounded-full border border-[#343944] px-4 py-2 text-center text-xs text-white transition hover:border-gray-500"
                >
                  View Details
                </Link>

                {/* Mark as done button right after view details button */}
                {activeTab === "plan" && (
                  <button
                    type="button"
                    onClick={() => {
                      markAsDone(workout.id);
                      showToast(`${workout.name} marked as done`);
                    }}
                    className="rounded-full bg-[#ccff00] px-4 py-2 text-xs font-semibold text-black transition hover:bg-[#b8e600]"
                  >
                    ✓ &nbsp; Mark as Done
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => handleRemove(workout)}
                  aria-label={`Remove ${workout.name}`}
                  className="rounded-full px-3 py-2 text-gray-400 transition hover:bg-[#222630] hover:text-white"
                >
                  ×
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
};

// The metric part
function Metric({
  label,
  value,
  accent = false,
}: {
  label: string;
  value: number;
  accent?: boolean;
}) {
  return (
    <div className="bg-[#15171d] px-5 py-4">
      <p className="text-xs text-gray-400">{label}</p>
      <p
        className={`mt-1 font-heading text-3xl font-bold ${
          accent ? "text-[#ccff00]" : "text-white"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex min-h-56 flex-col items-center justify-center rounded-xl border border-dashed border-[#252a34] px-6 py-12 text-center">
      <h2 className="font-heading text-xl font-bold uppercase text-white">
        Nothing here yet
      </h2>
      <p className="mt-2 max-w-md text-sm text-gray-400">
        Browse the library and add a lift to get today moving.
      </p>
      <Link
        href="/"
        className="mt-5 rounded-full bg-[#ccff00] px-5 py-3 text-sm font-bold text-black transition hover:bg-[#b8e600]"
      >
        Go to workouts
      </Link>
    </div>
  );
}

export default MyPlan;