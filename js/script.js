// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES



/*global $*/
// DOCUMENT READY FUNCTION BELOW
$(document).ready(function(){
    var userScore = 0;
    var computerScore = 0;
    $(".userScore").text(userScore);
    $(".computerScore").text(computerScore);
    
    $("button").click(function(){
        var userChoice = "";
        var computerChoice = "";
        var winner;

        userChoice = $("#input").val();
        var small = userChoice.toLowerCase();
        $("#userChoice").text(small);

        var randomNumber = Math.random();
        if(randomNumber < 0.33){
            computerChoice = "rock";
        }else if(randomNumber < 0.66 && randomNumber >= 0.33){
            computerChoice = "paper";
        }else if(randomNumber >= 0.66){
            computerChoice = "scissor";
        }

        $("#computerChoice").text(computerChoice);
        if(small === "rock") {
            if (computerChoice === "rock"){
                winner = 0;
            }else if(computerChoice === "paper"){
                winner = 2;
            }else if(computerChoice === "scissor"){
                winner = 1;
            }
        }else if(small === "paper") {
            if (computerChoice === "rock"){
                winner = 1;
            }else if(computerChoice === "paper"){
                winner = 0;
            }else if(computerChoice === "scissor"){
                winner = 2;
            }
        }else if(small === "scissor"){
            if (computerChoice === "rock"){
                winner = 2;
            }else if(computerChoice === "paper"){
                winner = 1;
            }else if(computerChoice === "scissor"){
                winner = 0;
            }
        }else {
            $("#input").text();
            $("#winner").text("Please type a valid input");
        }
         
        if(winner == 1){
            userScore = userScore + 1;
            $(".userScore").text(userScore);
            $("#winner").text("User Wins");
        }else if(winner == 2){
            computerScore = computerScore + 1;
            $(".computerScore").text(computerScore);
            $("#winner").text("Computer Wins");
        } else {
            $("#winner").text("Tie");
        }
        
    });
});
