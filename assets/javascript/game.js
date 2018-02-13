$(document).ready(function(){

var wins = 0
var losses = 0
var targetNumber = 0

// function initializeCrystals() {
// / create random number between 19-120
// var randomNumber = [Math.floor(Math.random()) * 2]
var randomNumber = Math.floor(Math.random() * 102) + 19
var crystal1
var crystal2
var crystal3
var crystal4

console.log(randomNumber)

// crystal has value between 1-12
var crystalArray = [1,2,3,4,5,6,7,8,9,10,11,12]

ranCrystalValue = crystalArray[Math.floor(Math.random() * crystalArray.length)]

// console.log(ranCrystalValue);

var ranCrystalArray = [];

// use for loop to generate an array with 4 random numbers


for (var i=0; i < 4; i++) {
    // if (ranCrystalArray.indexOf(ranCrystalValue) === -1) {
        ranCrystalValue = crystalArray[Math.floor(Math.random() * crystalArray.length)]
        if (ranCrystalArray.indexOf(ranCrystalValue) === -1) {
        ranCrystalArray.push(ranCrystalValue);
        }
    }

console.log (ranCrystalArray);


for (var i = 0; i < 3; i++){
    if (ranCrystalArray.length < 4) {
        ranCrystalValue = crystalArray[Math.floor(Math.random() * crystalArray.length)]
            if (ranCrystalArray.indexOf(ranCrystalValue) === -1) {
                ranCrystalArray.push(ranCrystalValue);
        }
    }
}

console.log(ranCrystalArray);


// assign a value to each Crystal
crystal1 = parseInt(ranCrystalArray[0]);
crystal2 = parseInt(ranCrystalArray[1]);
crystal3 = parseInt(ranCrystalArray[2]);
crystal4 = parseInt(ranCrystalArray[3]);
randomNumber = parseInt(randomNumber);
targetNumber = parseInt(targetNumber);
console.log(crystal1);
console.log(crystal2);
console.log(crystal3);
console.log(crystal4);
console.log(randomNumber);

// }

// initializeCrystals();

$("#random-number").append(randomNumber);



 $("#crystal-1").on("click", function() {
    $("#crystal-1").text("Crystal1 =" + crystal1)
    if (randomNumber > 0) {
    randomNumber = randomNumber - crystal1;
     $("#random-number").html(randomNumber);
     console.log(randomNumber);
    };
    if (randomNumber === 0) {
        // alert("You have Won!");
        wins++;
    };
    if (randomNumber < 0)
        alert("You Loose!");
        losses++;

});

$("#crystal-2").on("click", function() {
    $("#crystal-2").text("Crystal2 =" + crystal2)
    if (randomNumber > 0) {
        randomNumber = randomNumber - crystal2;
         $("#random-number").text(randomNumber);
         console.log(randomNumber);
        };
        if (randomNumber === 0) {
            // alert("You have Won!")
            wins++
        };
        if (randomNumber < 0)
            alert("You Loose!")
            losses++

});

$("#crystal-3").on("click", function() {
    $("#crystal-3").text("Crystal3 =" + crystal3)
    if (randomNumber > 0) {
        randomNumber = randomNumber - crystal3;
         $("#random-number").text(randomNumber);
         console.log(randomNumber);
        };
        if (randomNumber === 0) {
            // alert("You have Won!");
            wins++;
        };
        if (randomNumber < 0)
            // alert("You Loose!");
            losses++;

});

$("#crystal-4").on("click", function() {
    $("#crystal-4").text("Crystal4 =" + crystal4)
    if (randomNumber > 0) {
        randomNumber = randomNumber - crystal4;
         $("#random-number").text(randomNumber);
         console.log(randomNumber);
        };
        if (randomNumber === 0) {
            // alert("You have Won!")
            wins++;
        };
        if (randomNumber < 0)
            alert("You Loose!")
            losses++;

});

console.log(wins);
console.log(losses);

if (wins===0) {
    wins++;
    console.log(wins);
}


// $(document).ready(function() {

// // VARIABLES
// // ============================================================================

// var targetScore;
// var crystal1;
// var crystal2;
// var crystal3;
// var crystal4;
// var crystalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// var wins = 0;
// var losses = 0;
// var scoreArray= [];
// var totalScore;
// var ranCrystalArray;
// var ranCrystalValue;

// // FUNCTIONS
// // ============================================================================

// function randomCrystalValues() {
// //   ruby = crystalValue[Math.floor(Math.random() * crystalValue.length)];
// //   diamond = crystalValue[Math.floor(Math.random() * crystalValue.length)];
// //   amber = crystalValue[Math.floor(Math.random() * crystalValue.length)];
// //   emerald = crystalValue[Math.floor(Math.random() * crystalValue.length)];

// // var randomNumber = Math.floor(Math.random() * 102) + 19
// // var crystal1
// // var crystal2
// // var crystal3
// // var crystal4

// // console.log(randomNumber)

// // crystal has value between 1-12
// var crystalArray = [1,2,3,4,5,6,7,8,9,10,11,12];

// ranCrystalValue = crystalArray[Math.floor(Math.random() * crystalArray.length)]

// // console.log(ranCrystalValue);

// // var ranCrystalArray = [];

// // use for loop to generate an array with 4 random numbers


// for (var i=0; i < 4; i++) {
//     // if (ranCrystalArray.indexOf(ranCrystalValue) === -1) {
//         ranCrystalValue = crystalArray[Math.floor(Math.random() * crystalArray.length)]
//         if (ranCrystalArray.indexOf(ranCrystalValue) === -1) {
//         ranCrystalArray.push(ranCrystalValue);
//         }
//     }

// console.log (ranCrystalArray);


// for (var i = 0; i < 3; i++){
//     if (ranCrystalArray.length < 4) {
//         ranCrystalValue = crystalArray[Math.floor(Math.random() * crystalArray.length)]
//             if (ranCrystalArray.indexOf(ranCrystalValue) === -1) {
//                 ranCrystalArray.push(ranCrystalValue);
//         }
//     }
// }

// console.log(ranCrystalArray);


// // assign a value to each Crystal
// crystal1 = parseInt(ranCrystalArray[0]);
// crystal2 = parseInt(ranCrystalArray[1]);
// crystal3 = parseInt(ranCrystalArray[2]);
// crystal4 = parseInt(ranCrystalArray[3]);
// // randomNumber = parseInt(randomNumber);
// // targetNumber = parseInt(targetNumber);
// // console.log(crystal1);
// // console.log(crystal2);
// // console.log(crystal3);
// // console.log(crystal4);
// // console.log(randomNumber);

// }


// function updateWins() {
//     wins++;
//     $("#wins").text("Wins: " + wins);
// }

// function updateLosses() {
//     losses++;
//     $("#losses").text("Losses: " + losses);
// }

// function updateTargetScore() {
//     targetScore = Math.floor(Math.random() * 102) + 19;
//     $("#target-score").text("Target Score: " + targetScore);
// }

// function getSum(total, num) {
//   return total + num;
// }

// function updateTotalScore() {
//   totalScore = scoreArray.reduce(getSum);
//   $("#total-score").text("Total Score: " + totalScore);
// }

// function resetScore() {
//   scoreArray = [];
//   totalScore = 0;
//   $("#total-score").text("Total Score: " + totalScore);
// }

// function reset() {
//   updateTargetScore();
//   randomCrystalValues();
//   resetScore();
//   $("#wins").text("Wins: " + wins);
//   $("#losses").text("Losses: " + losses);
// }

// $("#ruby").on("click", function() {
//   scoreArray.push(crystal1);
//   updateTotalScore();
//   console.log(crystal1);
// });

// $("#diamond").on("click", function() {
//   scoreArray.push(parseInt(crystal2));
//   updateTotalScore();
//   console.log(crysatl2);
// });

// $("#amber").on("click", function() {
//   scoreArray.push(parseInt(crystal3));
//   updateTotalScore();
//   console.log(crystal3);
// });

// $("#emerald").on("click", function() {
//   scoreArray.push(parseInt(crystal4));
//   updateTotalScore();
//   console.log(crystal4);
// });

// // GAME LOGIC
// // ============================================================================

// $("img").on("click", function() {
//   if (totalScore === targetScore) {
//     updateWins();
//     reset();
//   }
//   else if (totalScore > targetScore) {
//     updateLosses();
//     reset();
//   }

// });

// // FUNCTION CALLS
// // ============================================================================

// reset();


});

