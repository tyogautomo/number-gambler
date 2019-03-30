alert("Welcome to \"Guess the Number\" game!!")

var playGame = true;
var n = 5;

while (playGame) {
    alert("You have " + n + " chance(s) remaining.");

    // USER CHOICE
    var ngisiAngka = true;
    while (ngisiAngka) {
        var userNumber = (prompt("Guess the number from 1 to 10:"));
        if (userNumber > 10 || userNumber < 1) {
            alert("Number must be from 1 to 10");
        } else {
            ngisiAngka = false;
        }
    }

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

    var compNumber = random;

    if (compNumber == userNumber) {
        playGame = confirm("Computer choose: " + compNumber + "\nYOU GUESS THE RIGHT NUMBER!! \nWant to try more?");
    } else if (userNumber < compNumber) {
        playGame = confirm("Computer choose: " + compNumber + "\nThe number you guessed is to low :( \nWant to try more?");
    } else {
        playGame = confirm("Computer choose: " + compNumber + "\nThe number you guessed is to high :( \nWant to try more?");
    }

    if (userNumber != compNumber) {
        n--
    } else {
        n = 5;
    }
    if (n == 0) {
        playGame = confirm("GAME OVER!!!! Play again??")
        n = 5
    }
}

alert("THANKS FOR PLAYING THIS SIMPLE GAMBLING GAME!!")