$(document).ready(function(){
    
    //BUTTON FUNCTIONS    

    
        
    //GLOBAL VARIABLES
    
    var key = Math.floor(Math.random() * 101);
    console.log("The key for the next round is: " + key);
    var $buttonInitGame = $("#buttonInitGame");
    var $guessField = $("#guessField");
    

    $buttonInitGame.click(function(){
        
        //VALIDATING GUESS TYPE
        
        var guess = $("#guessField").val();
        var isNumber = typeof(guess);
        console.log("The user entered this type of value: " + isNumber);
        console.log("The user guessed: " + guess + ".");
        
        //CHECKING GUESS
        
        if (isNaN(guess)) {
            $("#guessField").val(null);
            
            $("#instruct").fadeOut(function() {
                $("#instruct").text("That's not a number.").fadeIn();
            });
        }
        else if (guess > 100){
            $("#guessField").val(null);
            $("#instruct").fadeOut(function(){
                $("#instruct").text("Choose a number between 0 and 100.").fadeIn();
            });
        }
        else if (guess>key){
            $("#guessField").val(null);
            $("#instruct").fadeOut(function(){
                $("#instruct").text("Guess lower. Try again.").fadeIn();
            });
        }
        else if (guess<key){
            $("#guessField").val(null);
            $("#instruct").fadeOut(function(){
                $("#instruct").text("Guess higher. Try again.").fadeIn();
            });
        }
        else if (guess==key){
            console.log("User has won.");
            $("#instruct").fadeOut(function(){
                $("#instruct").text("Play again?").fadeIn();
            });               
            $("#buttonInitGame").fadeToggle(function() {
                $("#buttonResetGame").fadeToggle();
            });
        } ;
        
        //TEMPERATURE
        
        var proximity = Math.abs(guess-key);
        console.log("The user is " + proximity + " numbers away.");
        
        if (proximity>=1 && proximity<=10){
            $("#temp").fadeOut(function(){
                $(this).text("Burning!").fadeIn();
            });
            console.log("Burning!");
        }
        else if (proximity>=11 && proximity<=20){
            $("#temp").fadeOut(function(){
                $(this).text("Hotter!").fadeIn();
            });
            console.log("Hotter");
        }
        else if (proximity>=21 && proximity<=30){
            $("#temp").fadeOut(function(){
                $(this).text("Hot!").fadeIn();
            });
            console.log("Hot");
        }
        else if (proximity>=31 && proximity<=40){
            $("#temp").fadeOut(function(){
                $(this).text("Warm!").fadeIn();
            });
            console.log("Warm");
        }
        else if (proximity>=41 && proximity<=50){
            $("#temp").fadeOut(function(){
                $(this).text("Lukewarm!").fadeIn();
            });
            console.log("Lukewarm");
        }
        else if (proximity>=51 && proximity<=100){
            $("#temp").fadeOut(function(){
                $(this).text("Cold!").fadeIn();
            });
            console.log("Cold");
        }
        else if (proximity==0){
            $("#temp").fadeOut(function(){
                $(this).text("Right On!").fadeIn();
            });
            console.log("Win!");
        }
        else {
            $("#temp").fadeOut(function(){
                $(this).text("Oops!").fadeIn();
            });
        }
        
    });
    
    //RESET GAME
    
    function resetGame(){
        key = Math.floor(Math.random()*101);
        console.log("The key for the next round is: " + key);
        $("#buttonResetGame").fadeToggle(function(){
            $("#buttonInitGame").fadeToggle();
        });
        $("#instruct").fadeOut(function(){
            $("#instruct").text("Enter a number between 0 and 100 below.").fadeIn();
        });
        $("#guessField").val(null);
        $("#temp").fadeOut(function(){
            $(this).text("Right On!").fadeIn();
        });
    };
    
        
});