var randomNum1 = Math.floor( Math.random() * 6);
var randomNum2 = Math.floor( Math.random() * 6);
var imgAdd = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"];
document.querySelector(".img1").setAttribute("src", imgAdd[randomNum1]);
document.querySelector(".img2").setAttribute("src", imgAdd[randomNum2]);
if(randomNum1 > randomNum2){
  document.querySelector("h1").textContent = "player1 wins! Refresh to roll:";
} else if(randomNum1 < randomNum2){
  document.querySelector("h1").textContent = "player2 wins! Refresh to roll:";
}else{
  document.querySelector("h1").textContent = "draw! Refresh to roll:";
}
