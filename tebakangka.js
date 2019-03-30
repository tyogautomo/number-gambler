alert("Selamat datang di Game Tebak Angka.")

var playGame = true;

while (playGame) {
    // USER CHOICE
    var ngisiAngka = true;
    while (ngisiAngka) {
        var userNumber = (prompt("Silahkan tebak angka dari 1 sampai 10:"));
        if (userNumber > 10 || userNumber < 1) {
            alert("Angka harus antara 1 - 10");
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
        alert("Selamat tebakkan kamu benar!!!!");
    } else {
        alert("Tebakkan kamu salah!!!")
    }
    playGame = confirm("Ingin coba lagi?");
}

alert("THANKS FOR PLAYING THIS SIMPLE GAMBLING GAME!!")