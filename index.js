function handleKeyboardButtonPress(event) {
  const playerPressed = event.key;

  // stop the game if pressed 'Esc'

  if (playerPressed === "Escape") {
    gameOver();
  }

  //get the expected to press
  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLocaleLowerCase();

  //check matched or not

  if (playerPressed === expectedAlphabet) {
    const currentScore = getTextElementValueById("current-score");
    const updatedScore = currentScore + 1;
    setTextElementValueById("current-score", updatedScore);

    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  } else {
    const currentLife = getTextElementValueById("current-life");
    const updatedLife = currentLife - 1;
    setTextElementValueById("current-life", updatedLife);

    if (updatedLife === 0) {
      gameOver();
    }
  }
}

document.addEventListener("keyup", handleKeyboardButtonPress);

function continueGame() {
  // step 1: generate a random alphabet
  const alphabet = getARandomAlphabet();

  //set randomly generated alphabet to the screen

  const currentAlphabet = document.getElementById("current-alphabet");
  currentAlphabet.innerText = alphabet.toLocaleUpperCase();

  // set background color

  setBackgroundColorById(alphabet);
}

function play() {
  //hide everything show only the playground
  hideElementById("home-screen");
  hideElementById("final-score");
  showElementById("play-ground");

  //reset score and life
  setTextElementValueById("current-life", 5);
  setTextElementValueById("current-score", 0);

  continueGame();
}

function gameOver() {
  hideElementById("play-ground");
  showElementById("final-score");
  // update final score

  const lastScore = getTextElementValueById("current-score");

  setTextElementValueById("last-score", lastScore);

  //clear the last selected alphabet
  const currentAlphabet = getElementTextById("current-alphabet");

  removeBackgroundColorById(currentAlphabet);
}
