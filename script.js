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
    "Admire",
    "Advice",
    "Bakery",
    "Beacon",
    "Bubble",
    "Carpet",
    "Cherry",
    "Custom",
    "Desert",
    "Energy",
    "Fabric",
    "Galaxy",
    "Hammer",
    "Honest",
    "Impact",
    "Jacket",
    "Kidney",
    "Ladder",
    "Magnet",
    "Nature",
    "Object",
    "Packet",
    "Quiver",
    "Random",
    "Signal",
    "Talent",
    "Unique",
    "Vacuum",
    "Wealth",
    "Zenith",
    "Artist",
    'Border',
    'Cruise',
    'Damage',
    'Empire',
    'Frozen',
    'Golden',
    'Helmet',
    'Income',
    'Junior',
    'Kernel',
    'Luxury',
    'Miracle',
    'Normal',
    'Oyster',
    'Palace',
    'Quarry',
    'Resort',
    'Spirit',
    'Thumbs',
    'absorb',
    'accent',
    'across',
    'admire',
    'advice',
    'almost',
    'always',
    'anchor',
    'annual',
    'answer',
    'anyone',
    'artist',
    'aspect',
    'attend',
    'august',
    'bakery',
    'ballot',
    'beacon',
    'beyond',
    'bishop',
    'breeze',
    'bucket',
    'bundle',
    'butter',
    'cactus',
    'canyon',
    'carrot',
    'casual',
    'cellar',
    'chance',
    'chorus',
    'client',
    'cosmic',
    'cruise',
    'custom',
    'damage',
    'decade',
    'degree',
    'demand',
    'depart',
    'deputy',
    'desire',
    'detail',
    'divide',
    'dollar',
    'effort',
    'empire',
    'evolve',
    'exotic',
    'export',
    'fabric',
    'famous',
    'fantasy',
    'fellow',
    'figure',
    'filter',
    'flight',
    'fossil',
    'freeze',
    'galaxy',
    'genius',
    'global',
    'gossip',
    'gravity',
    'hazard',
    'hidden',
    'horizon',
    'humble',
    'impact',
    'income',
    'injury',
    'intent',
    'jungle',
    'kidney',
    'lantern',
    'lawyer',
    'luxury',
    'marble',
    'melody',
    'mirror',
    'mobile',
    'museum',
    'narrow',
    'native',
    'noodle',
    'object',
    'oxygen',
    'palace',
    'parade',
    'pepper',
    'phrase',
    'pillow',
    'pirate',
    'puzzle',
    'random',
    'rescue',
    'ribbon',
    'saddle',
    'spirit',
    'tunnel',
    'abrupt',
    'active',
    'adjust',
    'afford',
    'agenda',
    'almond',
    'amount',
    'arcade',
    'arrive',
    'attach',
    'autumn',
    'barely',
    'behave',
    'belong',
    'binary',
    'blossom',
    'border',
    'borrow',
    'bronze',
    'budget',
    'burger',
    'canalx',
    'carbon',
    'carpet',
    'casino',
    'chapel',
    'choose',
    'cinema',
    'clarify',
    'clever',
    'climate',
    'colony',
    'combat',
    'comedy',
    'cotton',
    'create',
    'crystal',
    'dagger',
    'dealer',
    'decide',
    'deluxe',
    'device',
    'donate',
    'dragon',
    'driver',
    'editor',
    'effect',
    'empire',
    'endure',
    'escape',
    'evolve',
    'excuse',
    'export',
    'fabric',
    'famine',
    'famous',
    'feather',
    'fierce',
    'filter',
    'follow',
    'formal',
    'fossil',
    'frozen',
    'gadget',
    'galaxy',
    'garage',
    'gentle',
    'glacier',
    'gossip',
    'golden',
    'grocery',
    'hammer',
    'harvest',
    'helmet',
    'hunter',
    'island',
    'jewelx',
    'kidney',
    'ladder',
    'legacy',
    'magnet',
    'marble',
    'memory',
    'miracle',
    'modern',
    'motion',
    'noodle',
    'observe',
    'oxygen',
    'palace',
    'pencil',
    'pirate',
    'pocket',
    'puzzle',
    'rabbit',
    'saddle',
    'signal',
    'silver',
    'tomato',
    'tunnel'
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
