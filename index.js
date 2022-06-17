
let questions = [
  {
    question: "It's a function that takes two numbers as argument, add the two numbers and return the result.",
    alternatives: [
      '<img src="images/sumTwo-02.svg" alt="wrong">',
      '<img src="images/sumTwo-04.svg" alt="wrong">',
      '<img src="images/sumTwo-01.svg" alt="write">',
      '<img src="images/sumTwo-03.svg" alt="wrong">',
    ],
    
  },
  {
    question: "It's a function that takes two values as arguments and return true if the two values are equal and of the same type.",
   alternatives: [
    '<img src="images/comparisonStrict-04.svg" alt="wrong">',
    '<img src="images/comparisonStrict-01.svg" alt="write">',
    '<img src="images/comparisonStrict-03.svg" alt="wrong">',
    '<img src="images/comparisonStrict-02.svg" alt="wrong">',
    ],
  },
  {
    question: "It's a function that takes a value as argument and returns the type of the value",
    alternatives: [
      '<img src="images/typeValue-03.svg" alt="wrong">',
      '<img src="images/typeValue-02.svg" alt="wrong">',
      '<img src="images/typeValue-04.svg" alt="wrong">',
      '<img src="images/typeValue-01.svg" alt="write">',
    ],
  },
];

let score = 0;
let stage = 0;
let timer = 0;
let width = 100;
let dificulty = 0;


/*window.onLoad = startGame();

function startGame() {
    document.querySelector("#title").innerHTML = "WELCOME TO CODE GRAMMAR";
    document.querySelector("#question").innerHTML = "The main purpose of this game is to practice programming language syntax (more specifically javascript) until it becomes habitual.";
    document.querySelector("#table").style.visibility = "Hidden";
    document.querySelector("#myProgress").style.visibility = "Hidden";
    document.querySelector("#score").style.visibility = "Hidden";
}*/

function hideGame() {
    document.querySelector("#begin-screen").style.visibility = "Hidden";
    document.querySelector("#table").style.visibility = "Hidden";
    document.querySelector("#myProgress").style.visibility = "Hidden";
    document.querySelector("#score").style.visibility = "Hidden";
    document.querySelector("#question").style.visibility = "Hidden";
}

function start() {
    getReady();
    document.querySelector("#game").style.visibility = "visible";
    document.querySelector("#game-over").style.visibility = "hidden";
    hideGame();
}

function getReady() {
    document.querySelector("#title").innerHTML = "GET READY!";
    setTimeout(function () {
        document.querySelector("#title").innerHTML = "GO!";
        width = 100;
        showTable();
      }, 1000);
}

function showTable() {
    document.querySelector("#table").style.visibility = "visible";
    document.querySelector("#myProgress").style.visibility = "visible";
    document.querySelector("#score").style.visibility = "visible";
    document.querySelector("#question").style.visibility = "visible";
}

function setScore() {
  document.querySelector("#score").innerHTML = "Score: " + score;
}

function refresh() {
  let cardFamily = document.querySelectorAll("li");
  let question = document.querySelector("#question");

  question.innerHTML = questions[stage].question;

  for (let i = 0; i < cardFamily.length; i++) {
    cardFamily[i].innerHTML = questions[stage].alternatives[i];
  }
}

function moveTimer() {
    if (timer == 0) {
      timer = 1;
      var elem = document.getElementById("myBar");
      var id = setInterval(frame, 10);
      function frame() {
        if (width <= 0) {
          clearInterval(id);
          timer = 0;
          gameOver();
        } else {
          width -= 0.05;
          elem.style.width = width + "%";
        }
      }
    }
}

function gameOver() {
    console.log("game over");
    document.getElementById("game-over").style.visibility = 'visible';
    hideGame();
}

document.querySelector(".grid").addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "IMG") {
      const howMany = this.querySelectorAll("li").length;
      let imageTitle = e.target.alt;

      stage++;

      if (imageTitle === "write") {
        e.target.src = "images/correct.svg";
        score += 10;
        setScore();
        setTimeout(function () {
          refresh();
          moveTimer();
          width = 100;
        }, 1000);
      } else if (imageTitle === "wrong") {
        document.querySelector('.heart').src = "images/heart-empty.svg";
        e.target.src = "images/wrong.svg";
        if (score > 0) {
          score -= 10;
          setScore();
        }
        setTimeout(function () {
          refresh();
        }, 1000);
      }
    }
  },
  false
);

setScore();
moveTimer();
