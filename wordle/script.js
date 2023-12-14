const words = ['beach', 'brave', 'haste', 'pluto', 'quest', 'apple'];
let targetWord = selectRandomWord(words);
let attemptsLeft = 3;
window.addEventListener('load', init);

function selectRandomWord(wordList) {
  return wordList[Math.floor(Math.random() * wordList.length)];
}

function init(){
  console.log('test')
}

function displayWord() {
  const wordContainer = document.getElementById('word-container');
  wordContainer.textContent = targetWord.split('').map(letter => '_').join(' ');
}

function checkGuess() {
  const guessInput = document.getElementById('guessInput');
  const resultContainer = document.getElementById('result-container');

  const guess = guessInput.value.toLowerCase();
  
  if (guess.length !== 5 || !/^[a-z]+$/.test(guess)) {
    resultContainer.textContent = 'Por favor, ingresa una palabra válida de 5 letras.';
    return;
  }

  
  if (guess === targetWord) {
    resultContainer.textContent = '¡Felicidades! Adivinaste la palabra.';
    const wordContainer = document.getElementById('word-container');
    wordContainer.innerHTML = guess;
    paintGuess(guess,targetWord);
  } else {
    attemptsLeft--;
    resultContainer.textContent = `Incorrecto. Te quedan ${attemptsLeft} intentos.`;
    paintGuess(guess,targetWord);
    if (attemptsLeft === 0) {
      resultContainer.textContent = `Lo siento, te quedaste sin intentos. La palabra correcta era ${targetWord}.`;
    }
  }
  
}

function paintGuess(guess, targetWord){  
  const GRID = document.getElementById("grid");
  const ROW = document.createElement('div');
  ROW.className = 'row';
  for (let i in targetWord){
      const SPAN = document.createElement('span');
      SPAN.className = 'letter';
      if (guess[i]===targetWord[i]){ //VERDE
          SPAN.innerHTML = guess[i];
          SPAN.style.backgroundColor = 'green';
      } else if( targetWord.includes(guess[i]) ) { //AMARILLO
          SPAN.innerHTML = guess[i];
          SPAN.style.backgroundColor = 'yellow';
      } else {      //GRIS
          SPAN.innerHTML = guess[i];
          SPAN.style.backgroundColor = 'grey';
      }
      ROW.appendChild(SPAN)
  }
  GRID.appendChild(ROW);
}

document.addEventListener('DOMContentLoaded', () => {
  displayWord();
});
