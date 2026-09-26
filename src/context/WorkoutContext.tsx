"use client";

import {
  createContext,
  startTransition,
  useEffect,
  useState,
} from "react";
import type { ReactNode } from "react";
import type { Iworkout } from "@/types/workout";

interface IWorkoutContext {
  planWorkouts: Iworkout[];
  savedWorkouts: Iworkout[];
  doneWorkoutIds: number[];
  isLoading: boolean;

  addToPlan: (workout: Iworkout) => void;
  addToSaved: (workout: Iworkout) => void;
  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
  markAsDone: (id: number) => void;
  showToast: (message: string) => void;
}

const emptyContext: IWorkoutContext = {
  planWorkouts: [],
  savedWorkouts: [],
  doneWorkoutIds: [],
  isLoading: true,
  addToPlan: () => {},
  addToSaved: () => {},
  removeFromPlan: () => {},
  removeFromSaved: () => {},
  markAsDone: () => {},
  showToast: () => {},
};

export const WorkoutContext = createContext<IWorkoutContext>(emptyContext);

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [planWorkouts, setPlanWorkouts] = useState<Iworkout[]>([]);
  const [savedWorkouts, setSavedWorkouts] = useState<Iworkout[]>([]);
  const [doneWorkoutIds, setDoneWorkoutIds] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [toastMessage, setToastMessage] = useState("");


  useEffect(() => {
    try {
      const storedPlan = localStorage.getItem("fitlog-plan");
      const storedSaved = localStorage.getItem("fitlog-saved");
      const storedDone = localStorage.getItem("fitlog-done");

      startTransition(() => {
        if (storedPlan) setPlanWorkouts(JSON.parse(storedPlan));
        if (storedSaved) setSavedWorkouts(JSON.parse(storedSaved));
        if (storedDone) setDoneWorkoutIds(JSON.parse(storedDone));

        setIsLoading(false);
      });
    } catch (error) {
      console.error("Could not load FitLog data:", error);
      startTransition(() => setIsLoading(false));
    }
  }, []);


  useEffect(() => {
    if (isLoading) return;

    localStorage.setItem("fitlog-plan", JSON.stringify(planWorkouts));
    localStorage.setItem("fitlog-saved", JSON.stringify(savedWorkouts));
    localStorage.setItem("fitlog-done", JSON.stringify(doneWorkoutIds));
  }, [planWorkouts, savedWorkouts, doneWorkoutIds, isLoading]);


  useEffect(() => {
    if (!toastMessage) return;

    const timeout = window.setTimeout(() => {
      setToastMessage("");
    }, 2500);

    return () => window.clearTimeout(timeout);
  }, [toastMessage]);

  const showToast = (message: string) => {
    setToastMessage(message);
  };

  const addToPlan = (workout: Iworkout) => {
    if (planWorkouts.some((item) => item.id === workout.id)) {
      showToast("This workout is already in today's plan");
      return;
    }

    if (planWorkouts.length >= 5) {
      showToast("Today's plan is full. Finish a lift to add another.");
      return;
    }

    setPlanWorkouts((current) => [...current, workout]);
    showToast("Added to today's plan");
  };

  const addToSaved = (workout: Iworkout) => {
    if (savedWorkouts.some((item) => item.id === workout.id)) {
      showToast("This workout is already saved");
      return;
    }

    setSavedWorkouts((current) => [...current, workout]);
    showToast("Saved for later");
  };

  const removeFromPlan = (id: number) => {
    setPlanWorkouts((current) => current.filter((item) => item.id !== id));
    setDoneWorkoutIds((current) => current.filter((itemId) => itemId !== id));
    showToast("Removed from today's plan");
  };

  const removeFromSaved = (id: number) => {
    setSavedWorkouts((current) => current.filter((item) => item.id !== id));
    showToast("Removed from saved workouts");
  };

  // const markAsDone = (id: number) => {
  //   setDoneWorkoutIds((current) =>
  //     current.includes(id) ? current : [...current, id]
  //   );
  //   showToast("Workout marked as done");
  // };

  const markAsDone = (id: number) => {
  setDoneWorkoutIds((current) =>
    current.includes(id) ? current : [...current, id]
  );

  setPlanWorkouts((current) =>
    current.filter((workout) => workout.id !== id)
  );

  showToast("Workout marked as done");
};

  const sharedData: IWorkoutContext = {
    planWorkouts,
    savedWorkouts,
    doneWorkoutIds,
    isLoading,
    addToPlan,
    addToSaved,
    removeFromPlan,
    removeFromSaved,
    markAsDone,
    showToast,
  };

  return (
    <WorkoutContext.Provider value={sharedData}>
      {children}

      {toastMessage && (
        <div
          role="status"
          className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-lg border border-[#343944] bg-[#15171d] px-5 py-3 text-sm text-white shadow-xl"
        >
          <span className="mr-2 text-[#ccff00]" aria-hidden="true">
            ✓
          </span>
          {toastMessage}
        </div>
      )}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;