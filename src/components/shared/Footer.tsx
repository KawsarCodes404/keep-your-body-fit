import Image from "next/image";
import Link from "next/link";
import brandLogo from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="border-t border-[#20232b] bg-[#090A0D]">
      <div className="container mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6">
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









// import type { Iworkout } from "@/types/workout";
// import Image from "next/image";
// import Link from "next/link";

// const getLibraryData = async (): Promise<Iworkout[]> => {
//   try {
//     const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

//     if (!res.ok) {
//       throw new Error("Could not load workout data");
//     }

//     return res.json();
//   } catch (error) {
//     console.error("Error fetching library data:", error);
//     return [];
//   }
// };

// export default async function Library() {
//   const libraryData = await getLibraryData();

//   return (
//     <section
//       id="library"
//       className="container mx-auto w-full max-w-7xl scroll-mt-8 px-4 py-8 sm:px-6 lg:py-12"
//     >
//       <div className="mb-6">
//         <h2 className="font-heading text-3xl font-bold uppercase text-white">
//           The Library
//         </h2>
//         <p className="mt-1 text-sm text-gray-400">
//           Twelve lifts covering every major muscle group.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
//         {libraryData.map((workout) => (
//           <Link
//             key={workout.id}
//             href={`/workouts/${workout.id}`}
//             className="group overflow-hidden rounded-xl border border-[#252a34] bg-[#15171d] transition hover:border-[#ccff00]/50"
//           >
//             <div className="relative aspect-[16/9] overflow-hidden bg-[#1b1e25]">
//               <Image
//                 src={workout.image}
//                 alt={workout.name}
//                 fill
//                 unoptimized
//                 sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                 className="object-cover transition duration-300 group-hover:scale-[1.03]"
//               />
//             </div>

//             <div className="p-4">
//               <div className="mb-3 flex flex-wrap gap-2">
//                 {workout.muscleGroups.map((group) => (
//                   <span
//                     key={group}
//                     className="rounded-full bg-[#ccff00] px-2.5 py-1 text-[10px] font-bold uppercase leading-none text-black"
//                   >
//                     {group}
//                   </span>
//                 ))}
//               </div>

//               <h3 className="font-heading text-lg font-bold uppercase leading-tight text-white">
//                 {workout.name}
//               </h3>

//               <p className="mt-1 text-sm text-gray-400">
//                 {workout.equipment}
//               </p>

//               <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[#252a34] pt-3 text-xs text-gray-400">
//                 <span>
//                   <span className="text-[#ccff00]">◷</span> {workout.duration} min
//                 </span>
//                 <span>
//                   <span className="text-[#ccff00]">♨</span>{" "}
//                   {workout.caloriesBurned} kcal
//                 </span>
//                 <span>
//                   <span className="text-[#ccff00]">☆</span> {workout.rating}
//                 </span>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// }



// import Image from "next/image";
// import Link from "next/link";
// import brandLogo from "@/assets/logo.png";

// export default function Footer() {
//   return (
//     <footer className="border-t border-[#20232b] bg-[#090A0D]">

//       <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6">

//         <Link href="/" className="flex shrink-0 items-center gap-2">
//           <Image
//             src={brandLogo}
//             alt=""
//             aria-hidden="true"
//             width={17}
//             height={17}
//             className="object-contain"
//           />
//           <span className="font-heading text-[16px] font-semibold text-white">
//             FITLOG
//           </span>
//         </Link>

//         <p className="text-center text-xs text-gray-500 sm:text-right">
//           © 2026 FitLog — Workout Library. Train hard, log honest.
//         </p>
//       </div>
//     </footer>
//   );
// }