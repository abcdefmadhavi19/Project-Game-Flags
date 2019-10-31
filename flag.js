var theImage = document.getElementById("myimage");
var submit = document.getElementById("submit");
let rightAnswer;
let score = 0;
// falsecounter is used for the wrong hits
let falseCounter = 0;
function setRandomFlag() {
  var imgDir = "./images/";

  var imgArray = [
    "Argentina.png",
    "Australia.png",
    "Austria.png",
    "Bahrain.png",
    "Belarus.png",
    "Belgium.png",
    "Bhutan.png",
    "Brazil.png",
    "Bulgaria.png",
    "Cambodia.png",
    "Cameroon.png",
    "Chile.png",
    "Costa Rica.png",
    "Croatia.png",
    "Denmark.png",
    "Egypt.png",
    "Estonia.png",
    "Ethiopia.png",
    "Fiji.png",
    "Finland.png",
    "France.png",
    "Georgia.png",
    "Germany.png",
    "Greece.png",
    "Guinea.png",
    "Hungary.png",
    "Iceland.png",
    "India.png",
    "Indonesia.png",
    "Ireland.png",
    "Israel.png",
    "Kenya.png",
    "Kuwait.png",
    "Latvia.png",
    "Liberia.png",
    "Lithuania.png",
    "Maldives.png",
    "Mali.png",
    "Mongolia.png",
    "Morocco.png",
    "Myanmar.png",
    "Nepal.png",
    "Netherlands.png",
    "North Korea.png",
    "Norway.png",
    "Panama.png",
    "Peru.png",
    "Poland.png",
    "Russia.png",
    "Serbia.png",
    "Singapore.png",
    "Slovenia.png",
    "South Africa.png",
    "Spain.png",
    "Sri Lanka.png",
    "Sweden.png",
    "Switzerland.png",
    "Syria.png",
    "Thailand.png",
    "Turkey.png",
    "Uganda.png",
    "Ukraine.png",
    "United Kingdom.png",
    "United States.png",
    "Uruguay.png",
    "Vatican.png",
    "Venezuela.png",
    "Vietnam.png",
    "Yemen.png",
    "Zimbabwe.png"
  ];

  var shuffled = [];

  rightAnswer = imgArray[Math.floor(Math.random() * imgArray.length)];
  //console.log("RIGHT:", rightAnswer.slice(0, -4));

  let randomImgPath = imgDir + rightAnswer;

  theImage.src = randomImgPath;

  // it would generate the random flag and push it into shuffled array
  while (imgArray.length) {
    shuffled.push(imgArray.splice(Math.random() * imgArray.length, 1));
  }
}

// in this function the logic exists for the score , correctanswer and input value
function test(event) {
  event.preventDefault();
  let input = document.getElementById("type");

  //console.log("inputvalue ", input.value);

  let correctAnswer = rightAnswer && rightAnswer.slice(0, -4);

  //console.log("-----", correctAnswer);

  const feedback = document.querySelector(".pretag");

  if (input.value === "") return;

  if (correctAnswer.toUpperCase() === input.value.toUpperCase()) {
    falseCounter = 0;
    feedback.setAttribute("id", "text");
    feedback.style.color = "#003300";
    feedback.innerHTML = "You guessed it Correct! More to Go!";
    score += 10;
    document.getElementById("score").innerText = `Score: ${score}`;
    setRandomFlag();
    correctAnswer = rightAnswer && rightAnswer.slice(0, -4);
    input.value = "";
  } else {
    falseCounter += 1;
    feedback.style.color = "#600000";
    feedback.innerHTML = "Wrong";
    score -= 1;
    document.getElementById("score").innerText = `Score: ${score}`;
    input.value = "";
  }
  if (falseCounter === 1) {
    input.value = correctAnswer.slice(0, 1);
    feedback.innerHTML = "Wrong !!!" + "Hint 1 -1st Letter of the Flag";
  }
  if (falseCounter === 2) {
    input.value = correctAnswer.slice(0, 2);
    feedback.innerHTML = "Hint 2 -2nd Letter of the Flag";
  }
  if (falseCounter === 3) {
    feedback.innerHTML = `The Flag Name was ${correctAnswer}`;
    setRandomFlag();
    falseCounter = 0;
  }
  if (score <= 0) {
    feedback.innerHTML = `Sorry!!! You Lost it, Better Luck next time... Click on game over to Start Again`;
    feedback.setAttribute("id", "text");
    feedback.style.color = "black";
    const imageOver = document.getElementById("game");
    imageOver.src = "./images/game.gif";
    imageOver.setAttribute("style", "visibility: visible");
    imageOver.onclick = function() {
      window.location.reload();
    };

    theImage.parentNode.removeChild(theImage);
    input.parentNode.removeChild(input);
    submit.parentNode.removeChild(submit);
  }

  if (score === 40 && score <= 40) {
    feedback.innerHTML = `Continue Playing!!!`;
    feedback.setAttribute("id", "text");
    feedback.style.color = "black";
    const imageContinue = document.getElementById("playing");
    imageContinue.src = "./images/playing.gif";
    imageContinue.setAttribute("style", "visibility: visible");
    input.value = "";
  } else {
    const imageContinue = document.getElementById("playing");
    imageContinue.setAttribute("style", "visibility: hidden");
  }
  if (score >= 120) {
    feedback.innerHTML = `Your Total Score ${score} `;
    feedback.setAttribute("id", "text");
    feedback.style.color = "black";
    const imageParty = document.getElementById("picture");
    imageParty.src = "./images/minion.gif";
    imageParty.setAttribute("style", "visibility: visible");
    imageParty.onclick = function() {
      window.location.reload();
    };
    theImage.parentNode.removeChild(theImage);
    input.parentNode.removeChild(input);
    submit.parentNode.removeChild(submit);
  }
}

const form = document.getElementById("type");
const log = document.getElementById("text");
form.addEventListener("submit", test);
window.onload = () => setRandomFlag();
