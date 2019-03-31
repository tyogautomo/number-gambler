alert("Welcome to \"Guess the Number\" game!!")

var gameOn = true;
var n = 3;
var compNumber;

while (gameOn) {
    var playGame = true;

    // COMPUTER CHOICE
    var random = Math.floor(Math.random() * 10);
    switch (random) {
        case 0:
            random = 1;
            break;
        case 1:
            random = 2;
            break;
        case 2:
            random = 3;
            break;
        case 3:
            random = 4;
            break;
        case 4:
            random = 5;
            break;
        case 5:
            random = 6;
            break;
        case 6:
            random = 7;
            break;
        case 7:
            random = 8;
            break;
        case 8:
            random = 9;
            break;
        case 9:
            random = 10;
            break;
    }

    compNumber = random;

    while (playGame) {
        alert("You have " + n + " chance(s) remaining.");

        // USER CHOICE
        var ngisiAngka = true;
        while (ngisiAngka) {
            var userNumber = (prompt("Guess the number from 1 to 10:"));
            if (userNumber == null) {
                ngisiAngka = false;
                playGame = false;
                gameOn = false;
            } else if (userNumber > 10 || userNumber < 1) {
                alert("Number must be from 1 to 10");
            } else {
                ngisiAngka = false;
            }
        }

        // CONDITION
        if (compNumber == userNumber) {
            gameOn = confirm("Computer choose: " + compNumber + "\nYOU GUESS THE RIGHT NUMBER!! \nWant to try more?");
            playGame = false;
        } else if (userNumber == null) {
            ngisiAngka = false;
            playGame = false;
            gameOn = false;
        } else if (userNumber < compNumber) {
            alert("\nThe number you guessed is to low :( \nTry again!");
        } else {
            alert("\nThe number you guessed is to high :( \nTry again!");
        }

        //  DECREMENT AND CHANCE RESET
        if (userNumber != compNumber) {
            n--
        } else {
            n = 3;
        }

        //  GAME OVER CONDITION
        if (n == 0) {
            gameOn = confirm("GAME OVER!!!! \nThe Number is " + compNumber + ". Play again??")
            playGame = false;
            n = 3
        }
    }
}

alert("THANKS FOR PLAYING THIS SIMPLE GAMBLING GAME!!")