// function Monday() {
//     exerciseRoutine(liftWeights);
// }

// function Tuesday() {
//     console.log("Go for a five-mile run");
//     console.log("Swim 40 laps");
// }

// function Wednesday() {
//     console.log("Go for a five-mile run");
//     console.log("Go for a five-mile run");
// }

// function Thursday() {
//     console.log("Go for a five-mile run");
//     console.log("Pump iron");
// }

// function Friday() {
//     console.log("Go for a five-mile run");
//     console.log("Swim 40 laps");
// }

// function runFiveMiles() {
//     console.log("Go for a five-mile run");
// }

// function liftWeights() {
//     console.log("Pump iron");
// }

// function swim() {
//     console.log("Swim 40 laps");
// }

// function exerciseRoutine(postRunActivity) {
//     runFiveMiles();
//     postRunActivity();
// }

// // exerciseRoutine(() => {
// //     console.log("Pilates");
// // })

// function morningRouting(exercise) {
//     let breakfast;

//     if (exercise === liftWeights) {
//         breakfast = "protein bar";
//     }
//     else if (exercise === swim) {
//         breakfast = "smoothie";
//     }
//     else {
//         breakfast = "granola"
//     }

//     exerciseRoutine(exercise);

//     return function () {
//         console.log(`yum this ${breakfast} is great`);
//     };
// }

// const afterExercise = morningRouting(liftWeights);

// afterExercise();



function receivesAFunction(special) {
    special();
}

function returnsANamedFunction() {
    return function named() {
        console.log("Namessss");
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log("nonny");
    }
}
