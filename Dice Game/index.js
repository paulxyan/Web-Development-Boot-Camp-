var randomNumber1 = (Math.floor(Math.random() * 6) + 1);

document.querySelector("img.img1").setAttribute("src", `./images/dice${randomNumber1}.png`);

var randomNumber2 = (Math.floor(Math.random() * 6) + 1);

document.querySelector("img.img2").setAttribute("src", `./images/dice${randomNumber2}.png`);


var h1 = document.querySelector("div > h1");

if (randomNumber1 > randomNumber2) {

    h1.innterHTML = "🚩Player 1 Wins!";

}

else if (randomNumber2 > randomNumber1) {

    h1.innerHTML = "Player 2 Wins!🚩";
}

else {


    h1.innterHTML = "Draw!";
}

