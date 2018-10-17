// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES



/*global $*/
// DOCUMENT READY FUNCTION BELOW
$(document).ready(function(){
    var randomNumber = 0;
    var userChoice = "";
    var computerChoice = "";
    var winner = "";
    $("button").click(function(){
        var userChoice = $("#input").val()
        $("#userChoice").text(userChoice);
        var randomNumber = Math.random();
        if(randomNumber <= .33){
            var computerChoice = "rock";
        }else if(randomNumber <= .66 && randomNumber >= .33){
            var computerChoice = "paper";
        }else if(randomNumber  <= 1 && randomNumber >= .66){
            var computerChoice = "scissor";
        }
        $("#computerChoice").text(computerChoice);
        if(userChoice === "rock" && computerChoice === "rock"){
            $("#winner").text("Tie");
        }else if(userChoice === "rock" && computerChoice === "paper"){
            $("#winner").text("Computer Wins");
        }else if(userChoice === "rock" && computerChoice === "scissor"){
            $("#winner").text("User Wins");
        }else if(userChoice === "paper" && computerChoice === "rock"){
            $("#winner").text("User Wins");
        }else if(userChoice === "paper" && computerChoice === "paper"){
            $("#winner").text("Tie");
        }else if(userChoice === "paper" && computerChoice === "scissor"){
            $("#winner").text("Computer Wins");
        }else if(userChoice === "scissor" && computerChoice === "rock"){
            $("#winner").text("Computer Wins");
        }else if(userChoice === "scissor" && computerChoice === "paper"){
            $("#winner").text("User Wins");
        }else if(userChoice === "scissor" && computerChoice === "scissor"){
            $("#winner").text("Tie");
        }else{
        }
        var first = 0;
        var second = 0;
        $("button").click(function(){
            if($("#winner").text() === "User Wins"){
                var first = first + 1;
            }else if($("#winner").text() === "Computer Wins"){
                var second = second + 1;
            }else{
            }
            
        });
    });
});
