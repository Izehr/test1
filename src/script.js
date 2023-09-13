const playRound = () => {
const text = prompt("Введите текст");
let makeItFunny = (str, n) =>
  str.split("").map((v, i) => ((i + 1) % n === 0 ? v.toUpperCase() : v)).join("");
 
alert(makeItFunny(text, 3));
}
const button = document.querySelector("button");
button.addEventListener('click', playRound);