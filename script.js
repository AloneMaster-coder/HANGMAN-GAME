// script.js

let words = [
    "laptop",
    "mango",
    "aditya",
    "python",
    "tiger",
    "planet",
    "orange",
    "monkey",
    "school",
    "rocket",
    "garden",
    "guitar",
    "bridge",
    "banana",
    "shadow",
    "castle",
    "winter",
    "dragon",
    "camera",
    "bottle",
];

let computer =
words[Math.floor(Math.random() * words.length)];

let guessed = "";

let chances = 6;



// DISPLAY WORD

function displayWord(){

    let display = "";

    for(let letter of computer){

        if(guessed.includes(letter)){

            display += letter + " ";

        }else{

            display += "_ ";

        }

    }

    document.getElementById("word").innerText =
    display;

    document.getElementById("chance").innerText =
    "Chances Remaining : " + chances;



    // WIN CONDITION

    if(!display.includes("_")){

        document.getElementById("message").innerText =
        "YOU WIN!";

        document.getElementById("guessInput").disabled = true;
    }

}



// DRAW HANGMAN

function drawHangman(){

    if(chances <= 5){
        document.getElementById("head").style.display =
        "block";
    }

    if(chances <= 4){
        document.getElementById("body").style.display =
        "block";
    }

    if(chances <= 3){
        document.getElementById("leftArm").style.display =
        "block";
    }

    if(chances <= 2){
        document.getElementById("rightArm").style.display =
        "block";
    }

    if(chances <= 1){
        document.getElementById("leftLeg").style.display =
        "block";
    }

    if(chances <= 0){
        document.getElementById("rightLeg").style.display =
        "block";
    }

}



// MAIN FUNCTION

function checkGuess(){


    // STOP GAME IF LOST

    if(chances <= 0){
        return;
    }


    let input =
    document.getElementById("guessInput");

    let guess =
    input.value.toLowerCase();

    input.value = "";



    // EMPTY INPUT

    if(guess === ""){
        return;
    }



    // ALREADY GUESSED

    if(guessed.includes(guess)){

        document.getElementById("message").innerText =
        "⚠ Already Guessed";

        return;
    }



    guessed += guess;



    // WRONG GUESS

    if(!computer.includes(guess)){

        chances--;

        drawHangman();

        document.getElementById("message").innerText =
        "❌ Wrong Guess";

    }

    // CORRECT GUESS

    else{

        document.getElementById("message").innerText =
        "✅ Correct Guess";

    }



    displayWord();



    // LOSE CONDITION

    if(chances === 0){

        document.getElementById("message").innerText =
        "YOU LOST! Word was : " + computer;

        document.getElementById("guessInput").disabled =
        true;

    }

}

function resetGame(){

    computer = words[Math.floor(Math.random() * words.length)];

    guessed = "";

    chances = 6;

    document.getElementById("guessInput").disabled =
    false;

    document.getElementById("message").innerText = "";

    document.getElementById("head").style.display =
    "none";

    document.getElementById("body").style.display =
    "none";

    document.getElementById("leftArm").style.display =
    "none";

    document.getElementById("rightArm").style.display =
    "none";

    document.getElementById("leftLeg").style.display =
    "none";

    document.getElementById("rightLeg").style.display =
    "none";

    displayWord();

}


// START GAME

displayWord();