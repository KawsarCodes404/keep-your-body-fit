"use client";

import { useContext } from "react";
import { WorkoutContext } from "@/context/WorkoutContext";
import { Iworkout } from "@/types/workout";

export default function WorkoutActions({
  workout,
}: {
  workout: Iworkout;
}) {
  const { addToPlan, addToSaved } = useContext(WorkoutContext);

  return (
    <div className="mt-7 flex flex-wrap gap-3">
      <button
        type="button"
        onClick={() => addToPlan(workout)}
        className="rounded-lg bg-[#ccff00] px-5 py-3 text-sm font-bold text-black transition hover:bg-[#b8e600]"
      >
        ▣ &nbsp; Add to today&apos;s plan
      </button>

      <button
        type="button"
        onClick={() => addToSaved(workout)}
        className="rounded-lg border border-[#343944] px-5 py-3 text-sm font-medium text-gray-200 transition hover:border-gray-500"
      >
        ♧ &nbsp; Save for later
      </button>
    </div>
  );
}