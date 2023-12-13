const words = ['manzana', 'anana', 'cereza', 'naranja', 'uva'];
let targetWord = selectRandomWord(words);
let attemptsLeft = 3;

function selectRandomWord(wordList) {
  return wordList[Math.floor(Math.random() * wordList.length)];
}

function displayWord() {
  const wordContainer = document.getElementById('word-container');
  wordContainer.textContent = targetWord.split('').map(letter => '_').join(' ');
}

function checkGuess() {
  const guessInput = document.getElementById('guessInput');
  const resultContainer = document.getElementById('result-container');

  const guess = guessInput.value.toLowerCase();
  /*
  if (guess.length !== 5 || !/^[a-z]+$/.test(guess)) {
    resultContainer.textContent = 'Por favor, ingresa una palabra válida de 5 letras.';
    return;
  }*/

  if (guess === targetWord) {
    resultContainer.textContent = '¡Felicidades! Adivinaste la palabra.';
    const wordContainer = document.getElementById('word-container');
    wordContainer.innerHTML = guess;
  } else {
    attemptsLeft--;
    resultContainer.textContent = `Incorrecto. Te quedan ${attemptsLeft} intentos.`;

    if (attemptsLeft === 0) {
      resultContainer.textContent = `Lo siento, te quedaste sin intentos. La palabra correcta era ${targetWord}.`;
    }
  }

  guessInput.value = '';
}

document.addEventListener('DOMContentLoaded', () => {
  displayWord();
});
