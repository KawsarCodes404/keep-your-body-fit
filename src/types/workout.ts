export interface Iworkout {
    id: number,
    name: string,
    image: string,
    muscleGroups: string[],
    equipment: string,
    difficulty: string,
    duration: number,
    caloriesBurned: number,
    sets: number,
    reps: string,
    rating: number,
    description: string,
    instructions: string[]
  }


//   interface Iworkout {
//     id: 1,
//     name: "Barbell Bench Press",
//     image: "https://img.magnific.com/free-photo/portrait-anime-character-doing-fitness-exercising_23-2151666664.jpg?w=740",
//     muscleGroups: [
//       "Chest",
//       "Arms"
//     ],
//     equipment: "Barbell, Bench",
//     difficulty: "Intermediate",
//     duration: 25,
//     caloriesBurned: 180,
//     sets: 4,
//     reps: "6-8",
//     rating: 4.8,
//     description: "A compound press that builds chest thickness, triceps, and pressing power from a stable bench.",
//     instructions: [
//       "Lie on the bench with eyes under the bar and feet planted.",
//       "Unrack with locked elbows and lower the bar to mid-chest.",
//       "Press up in a slight arc until elbows lock without bouncing.",
//       "Keep shoulder blades pinched and a natural arch in the back."
//     ]
//   }