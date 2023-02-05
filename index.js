// import chalk from 'chalk';

var readlineSync = require('readline-sync');


var questionOne = {
  question: "Where does Ansari live? ",
  answer: "Mumbai",

}

var questionTwo = {
  question: "Does Ansari own a Car? ",
  answer: "Yes",
}

var questionThree = {
  question: "How old is Ansari? ",
  answer: "23",
}

var questionFour = {
  question: "Is Ansari an Engineer/Doctor/other? ",
  answer: "Engineer",
}

var questionFive = {
  question: "Was Ansari born in Mumbai? ",
  answer: "No",
}

var questionList = [questionOne, questionTwo, questionThree, questionFour, questionFive];

// var queryList = ["pencil", "pen", "eraser", "laptop"];

// for(var i=0 ; i<queryList.length ;i++){
//   console.log(queryList[i]);
// }

var highScore = [{
  name: "Ansari",
  score: 5,
},
{
  name: "Ronak",
  score: 3,
},
]

function welcome() {
  var userName = readlineSync.question("What is your name? ");
  console.log("--------------------------------------------");
  var welcomeMessage = "Welcome " + userName + " to DO YOU KNOW ANSARI?";
  console.log(welcomeMessage);
  console.log("--------------------------------------------");
}


var score = 0;

function showScore() {
  console.log("Wohoo!! final Score: " + score);
}


function check(question, answer) {
  var ans = readlineSync.question(question);
  if (answer.toUpperCase() === ans.toUpperCase()) {
    console.log("right!");
    score++;
    console.log("Score: " + score);
    console.log("--------------------------------------------");
  } else {
    console.log("wrong!");
    score--;
    console.log("Score: " + score);
    console.log("--------------------------------------------");
  }
}


function game() {

  for (var i = 0; i < questionList.length; i++) {
    var currentQuestion = questionList[i];
    // console.log(currentQuestion.question, currentQuestion.answer);
    check(currentQuestion.question, currentQuestion.answer);
  }

}

function showHighScore() {
  console.log("--------------------------------------------");
  console.log("Highest Score:");
  for (var i = 0; i < highScore.length; i++) {
    console.log(highScore[i].name, highScore[i].score);
  }
  console.log("--------------------------------------------");
}


welcome();
game();
showScore();
showHighScore();
console.log("Send snapshot of your high score, will update !!");