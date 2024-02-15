function checkButton() {
  const element = document.getElementById("text");

  const textString = "abcefghijklmnopqrstuvwxyz";
  const array = textString.split("");

  const random = Math.random() * 25;
  const index = Math.round(random);
  const alphabet = array[index];
  element.innerText = alphabet
  
}

// function continueFunc() {
//     const test = checkButton('check-btn')
//     console.log('sdfs',test);
// }
