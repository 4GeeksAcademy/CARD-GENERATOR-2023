let cardSuits = ["♥", "♠", "♦", "♣"];
let cardValue = [2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K", "A"];

function getRandomCard() {
  function getRandomElementArray(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

  let randomCardNumber = document.getElementById("cardNumber");
  let randomCardSuits = document.querySelector("#simbolo1");
  let randomCardSuits2 = document.getElementById("simbolo2");

  randomCardNumber.innerHTML = getRandomElementArray(cardValue);
  randomCardSuits.innerHTML = getRandomElementArray(cardSuits);
  randomCardSuits2.innerHTML = randomCardSuits.innerHTML;

  if (randomCardSuits.innerHTML == "♥" || randomCardSuits.innerHTML == "♦") {
    document.getElementById("simbolo1").classList.add("rojo");
    document.getElementById("simbolo2").classList.add("rojo");
    document.getElementById("cardNumber").classList.add("rojo");
  } else {
    document.getElementById("simbolo1").classList.remove("rojo");
    document.getElementById("simbolo2").classList.remove("rojo");
    document.getElementById("cardNumber").classList.remove("rojo");
  }
}

getRandomCard();

const button = document.querySelector("button");
button.addEventListener("click", function() {
  getRandomCard();
});

let timer = document.getElementById("timer");
let count = 10;

setInterval(function() {
  count--;
  if (count === 0) {
    count = 10;
    getRandomCard();
  }
  timer.innerHTML = "Next card in: " + count + "s";
}, 1000);

const card = document.getElementById("card");
const cardWidthInput = document.getElementById("card-width");
const cardHeightInput = document.getElementById("card-height");

card.style.width = "300px";
card.style.height = "400px";

cardWidthInput.addEventListener("input", updateCardSize);
cardHeightInput.addEventListener("input", updateCardSize);

function updateCardSize() {
  const width = cardWidthInput.value + "px";
  const height = cardHeightInput.value + "px";
  card.style.width = width;
  card.style.height = height;
}
