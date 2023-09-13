const getRandomNumber = () => Math.round(Math.random()*100);
const isEven = (number) => !(number % 2);
const playRound = () => {
  const number = getRandomNumber();
  const correctAnswer = isEven(number) ? "да" : "нет";
  const userAnswer = prompt(`Является ли число ${number} чётным?`);
  if(!userAnswer){
    alert('Нет ответа! Игра окончена');
    return false;
  }else if (userAnswer.toLowerCase().trim() === correctAnswer){
    alert('Правильно!');
    return false;
  }else{
    alert('Неправильно!');
  }
}
  const playGame = () => {
  for (let i = 0; i < 3; i++){
    const isCorrect = playRound();
     if (!isCorrect){
      return;
     }
  }
  alert('Победа');
  }
const button = document.querySelector("button");
button.addEventListener('click', playGame);