
var wins = 0;
var losses = 0;
var totalCredits = 0;
var totalCreditsNeeded = 0;
var han = 0;
var lando = 0;
var chewy = 0;
var grito = 0;

var startGame = function(){
    totalCredits = 0;
    totalCreditsNeeded = 0;
    $("#creditsTaken").text("");
    genCredits();
    genSpecCredits();
  
}

function genCredits(){
    totalCredits = Math.floor(Math.random() * ((120-19)+1) + 19);
    console.log(totalCredits); 
    $("#totalCredits").text(totalCredits);
}
genCredits();

function genSpecCredits(randomNum1){
    var randomNum1 = Math.floor(Math.random() * 12) + 1;
    var randomNum2 = Math.floor(Math.random() * 12) + 1;
    var randomNum3 = Math.floor(Math.random() * 12) + 1;
    var randomNum4 = Math.floor(Math.random() * 12) + 1;

    han = randomNum1;
    lando = randomNum2;
    chewy = randomNum3;
    grito = randomNum4;

    console.log(han)
    $("#han").text(han);
    $("#lando").text(lando);
    $("#chewy").text(chewy);
    $("#grito").text(grito);
}

function takenCredits(){
    totalCreditsNeeded = 0;
    $("#hanClick").on('click',function(event){
        totalCreditsNeeded += han;
        $("#creditsTaken").text(totalCreditsNeeded);
        creditCheck();
    })
    $("#landoClick").on('click',function(event){
        totalCreditsNeeded += lando;
        $("#creditsTaken").text(totalCreditsNeeded);
        creditCheck();
    })
    $("#chewyClick").on('click', function(event){
        totalCreditsNeeded += chewy;
        $("#creditsTaken").text(totalCreditsNeeded);
        creditCheck();
    })
    $("#gritoClick").on('click', function(event){
        totalCreditsNeeded += grito;
        $("#creditsTaken").text(totalCreditsNeeded);
        creditCheck();
    })
}
takenCredits();

function creditCheck(){
    if(totalCreditsNeeded === totalCredits){
        alert("You have successfully collector your credits!");
        wins++;
        $("#wins").text("Wins: " + wins);
        startGame();

    }else if(totalCreditsNeeded > totalCredits){
        alert("You have failed to collect the correct amount of Imperial Credits!");
        losses++;
        $("#losses").text("Losses: " + losses);
        startGame();
    }

    }
    console.log(totalCredits);
    console.log(totalCreditsNeeded);

creditCheck()







startGame()


//random number generated for the match total at the start of a newgame
//random number generated for the crystals at the start of a newgame
//on click event for the crystals that logs the random number assigned to it from the start
//variable that houses the total of your on clicks
//variable that holds the random number from the start of the game to compare your totals to 
//variables for each of the crystals to hold the random number from the start and to reset upon completion of each game
//variable to house the wins
//variable to house the losses
//if else statements for updating the wins and losses
//score reset back to zero upon completion of the game
//game reset function
//random number to guess is between 19-120
// numbers for the crystals is between 1-12

