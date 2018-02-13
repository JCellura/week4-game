$(document).ready(function() {

    // VARIABLES
    // ============================================================================
    
    var targetScore;
    var crystal1;
    var crystal2;
    var crystal3;
    var crystal4;
    var crystalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var wins = 0;
    var losses = 0;
    var scoreArray= [];
    var totalScore = 0;;
    var ranCrystalArray = [];
    var ranCrystalValue
    
    // FUNCTIONS
    // ============================================================================
    
    function initializeCrystals() {
    
    // crystal has value between 1-12
    crystalArray = [];
    crystalArray = [1,2,3,4,5,6,7,8,9,10,11,12];
    
    ranCrystalValue = 0;
    ranCrystalValue = crystalArray[Math.floor(Math.random() * crystalArray.length)];
    
    ranCrystalArray = [];
    // console.log(ranCrystalValue);
    
    
    // use for loop to generate an array with 4 random numbers
    for (var i=0; i < 4; i++) {
        // if (ranCrystalArray.indexOf(ranCrystalValue) === -1) {
            ranCrystalValue = crystalArray[Math.floor(Math.random() * crystalArray.length)]
            if (ranCrystalArray.indexOf(ranCrystalValue) === -1) {
            ranCrystalArray.push(ranCrystalValue);
            }
        }
    
    console.log (ranCrystalArray);
    
    // If an array of less than for numbers was created by the previous for loop,
    // we simply add to it by using the following for loop:
    for (var i = 0; i < 3; i++){
        if (ranCrystalArray.length < 4) {
            ranCrystalValue = crystalArray[Math.floor(Math.random() * crystalArray.length)]
                if (ranCrystalArray.indexOf(ranCrystalValue) === -1) {
                    ranCrystalArray.push(ranCrystalValue);
            }
        }
    }
    
    // the above two for loops insure that the array has 4 numbers that are all different!
    
    console.log(ranCrystalArray);
    
    
    // assign a value to each Crystal from the array
    crystal1 = parseInt(ranCrystalArray[0]);
    crystal2 = parseInt(ranCrystalArray[1]);
    crystal3 = parseInt(ranCrystalArray[2]);
    crystal4 = parseInt(ranCrystalArray[3]);
    
    };
    
    function updateWins() {
        wins++;
        $("#wins").text("Wins: " + wins);
    };
    
    function updateLosses() {
        losses++;
        $("#losses").text("Losses: " + losses);
    };
    
    // generate a random number between 19 - 120
    function updateTargetScore() {
        targetScore = Math.floor(Math.random() * 102) + 19;
        $("#target-score").text("Target Score: " + targetScore);
    };
    
    // use a function to add all of the numbers in an array together and return the sum
    function getSum(total, num) {
      return total + num;
    };
    
    // use a function to add all of the numbers in an array together and return the sum
    function updateTotalScore() {
      totalScore = scoreArray.reduce(getSum);
      $("#total-score").text("Total Score: " + totalScore);
      console.log(totalScore);
      console.log(scoreArray);

    };
    
    function resetScore() {
      scoreArray = [];
      totalScore = 0;
      $("#total-score").text("Total Score: " + totalScore);
    };
    
    function completeReset() {
      updateTargetScore();
      initializeCrystals();
      resetScore();
      $("#wins").text("Wins: " + wins);
      $("#losses").text("Losses: " + losses);
    };
    
    //now we create our click functions
    //when each crystal is clicked, the "value" of that crystal is pushed into the crystal array
    //we then update the total score by running the updateTotalScore function
    
    $("#crystal1").on("click", function() {
      scoreArray.push(crystal1);
      updateTotalScore();
      console.log(crystal1);
    });
    
    $("#crystal2").on("click", function() {
      scoreArray.push(crystal2);
      updateTotalScore();
      console.log(crystal2);
    });
    
    $("#crystal3").on("click", function() {
      scoreArray.push(crystal3);
      updateTotalScore();
      console.log(crystal3);
    });
    
    $("#crystal4").on("click", function() {
      scoreArray.push(crystal4);
      updateTotalScore();
      console.log(crystal4);
    });
    
    //  Logic for the gameitself
    
    $(".image").on("click", function() {
      if (totalScore === targetScore) {
        updateWins();
        completeReset();
      }
      else if (totalScore > targetScore) {
        updateLosses();
        completeReset();
      }
    
    });
    
    // calling the reset function
    
    // initializeCrystals() is contained within completeReset()
    completeReset();
    
    
    });

