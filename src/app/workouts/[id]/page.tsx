import Image from "next/image";
import Link from "next/link";
import { Iworkout } from "@/types/workout";
import WorkoutActions from "@/components/WorkoutActions";

interface IWorkoutDetailPage {
    params: Promise<{
        id: string;
    }>;
}

const getLibraryData = async (): Promise<Iworkout[]> => {
    try {
        const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

        if (!res.ok) {
            throw new Error("Could not load workout data");
        }

        return res.json();
    } catch (error) {
        console.error("Error fetching library data:", error);
        return [];
    }
};

const WorkoutDetailPage = async ({ params }: IWorkoutDetailPage) => {
    const { id } = await params;
    const workouts = await getLibraryData();
    const workout = workouts.find((item) => item.id === Number(id));

    if (!workout) {
        return (
            <main className="mx-auto flex min-h-[60vh] max-w-7xl flex-col items-center justify-center px-4 text-center">
                <h1 className="font-heading text-3xl font-bold uppercase text-white">
                    Workout not found
                </h1>
                <Link
                    href="/"
                    className="mt-5 rounded-md bg-[#ccff00] px-5 py-3 text-sm font-bold text-black"
                >
                    Back to workouts
                </Link>
            </main>
        );
    }

    const specs = [
        ["Equipment", workout.equipment],
        ["Difficulty", workout.difficulty],
        ["Sets", workout.sets],
        ["Reps", workout.reps],
        ["Duration", `${workout.duration} min`],
        ["Calories", `${workout.caloriesBurned} kcal`],
        ["Rating", workout.rating],
    ];

    return (
        <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-10">
            <div className="grid items-start gap-8 lg:grid-cols-2">
                {/* Image part */}
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-[#15171d]">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        unoptimized
                        priority
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                    />
                </div>

                {/* some Workout related information */}
                <div>
                    <h1 className="font-heading text-3xl font-bold uppercase leading-tight text-white sm:text-4xl">
                        {workout.name}
                    </h1>

                    <p className="mt-3 text-sm leading-6 text-gray-400 sm:text-base">
                        {workout.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                        {workout.muscleGroups.map((group) => (
                            <span
                                key={group}
                                className="rounded-full bg-[#ccff00] px-3 py-1 text-xs font-semibold text-black"
                            >
                                {group}
                            </span>
                        ))}
                    </div>

                    {/* Now the label part */}
                    <dl className="mt-6 overflow-hidden rounded-xl border border-[#252a34] bg-[#151922]">
                        {specs.map(([label, value]) => (
                            <div
                                key={label}
                                className="flex items-center justify-between gap-4 border-b border-[#252a34] px-4 py-3 last:border-b-0 sm:px-5"
                            >
                                <dt className="text-xs font-bold uppercase tracking-wide text-gray-400">
                                    {label}
                                </dt>
                                <dd className="text-right text-sm text-gray-200">{value}</dd>
                            </div>
                        ))}
                    </dl>

                    {/* Some instruction */}
                    <section className="mt-6">
                        <h2 className="text-sm font-bold uppercase tracking-wide text-white">
                            Instructions
                        </h2>

                        <ol className="mt-3 space-y-3">
                            {workout.instructions.map((instruction, index) => (
                                <li
                                    key={`${index}-${instruction}`}
                                    className="flex gap-3 text-sm leading-6 text-gray-300"
                                >
                                    <span className="text-gray-500">{index + 1}.</span>
                                    <span>{instruction}</span>
                                </li>
                            ))}
                        </ol>
                    </section>

                    {/* Now this is visual placeholder */}
                    <WorkoutActions workout={workout} />
                    {/* <div className="mt-7 flex flex-wrap gap-3">
                        <button
                            type="button"
                            className="rounded-lg bg-[#ccff00] px-5 py-3 text-sm font-bold text-black transition hover:bg-[#b8e600]"
                        >
                            ▣ &nbsp; Add to today&apos;s plan
                        </button>

                        <button
                            type="button"
                            className="rounded-lg border border-[#343944] px-5 py-3 text-sm font-medium text-gray-200 transition hover:border-gray-500"
                        >
                            ♧ &nbsp; Save for later
                        </button>
                    </div> */}
                </div>
            </div>
        </main>
    );
};

export default WorkoutDetailPage;