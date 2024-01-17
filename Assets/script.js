//Add questions
var questions = [
    {
        question: "What type of object can be stored in local storage?",
        choices: ["a number", "a boolean", "a string", "a variable"],
        answer: "2"
    },
    {
        question: "Which can be used to decrement a variable i by 1?",
        choices: ["i==", "i--", "i++", "--i"],
        answer: "1"
    },
    {
        question: "What is the semantic tag used to indicate the location of site navigation?",
        choices: ["link", "links", "navbar", "nav"],
        answer: "3"
    },
    {
        question: "What is the first index number of an array?",
        choices: ["0", "1", "a", "-1"],
        answer: "0"
    },
    {
        question: "Which of these is not a possible value of flexwrap?",
        choices: ["wrap", "nowrap", "reverse-wrap", "wrap-reverse"],
        answer: "2"
    }
];

//Global variables and DOM elements
var quizTime = 30;
var currentQuestion = 0;
var score = 0;
var scores = [];

var timerEl = document.querySelector(".timer-count");
var quizEl = document.querySelector(".quiz-text");
var startButtonEl = document.querySelector("#startbutton");
var scoreEl = document.querySelector(".score");
var overEl = document.querySelector(".quiz-over");
var scoresButtonEl = document.querySelector(".view-scores");
var scoresEl = document.querySelector(".high-scores");
var highScoreHeaderEl = document.querySelector(".high-score-header");
var highScoreList = document.querySelector(".high-score-list");
var clearScoreButton = document.createElement("button");
var returnToQuizButton = document.createElement("button");

//init()

function init(){
    highScoreList.style.visibility = "hidden";
    highScoreHeaderEl.style.visibility = "hidden";
    var storedScores = JSON.parse(localStorage.getItem("scores"));

    if (storedScores !== null){
        scores = storedScores;
    }
}

function storeScores () {
    localStorage.setItem("scores", JSON.stringify(scores));
}

//Quiz timer
function startTimer() {
    var timer = setInterval(function(){
        quizTime--;
        timerEl.textContent = quizTime;

        if (quizTime === 0 || quizTime < 0 || i === questions.length){
            clearInterval(timer);
            endQuiz();
        }
    }, 1000)
};

// Basic text content
 scoreEl.textContent = score;
 quizEl.textContent = "Click the button to start the quiz!";

// Starts the quiz, resets values, and hides the start button and high score section elements if those were visible
function startQuiz() {
    startButtonEl.disabled = true;
    startButtonEl.style.display = "none";
    highScoreList.style.display="none";
    clearScoreButton.style.display="none";
    returnToQuizButton.style.display="none";
    quizEl.style.visibility = "visible";
    currentQuestion = 0;
    score = 0;
    startTimer();
    renderQuestions();
};

var i = 0; 


//Displays the questions and answer choices
function renderQuestions(){
    startButtonEl.style.dislay = "none";
    quizEl.textContent = questions[i].question;
        for (var j = 0; j < questions[i].choices.length; j++){
            var answerButton = document.createElement('button');
            answerButton.getAttribute("class", "answer-button");
            answerButton.innerText = questions[i].choices[j];
            answerButton.setAttribute("value", j);
            answerButton.classList.add("button");
            quizEl.append(answerButton);
            answerButton.style.display = "block";
            var userAnswer = '';
            answerButton.addEventListener("click", checkAnswer);
            answerButton.addEventListener("click", nextQuestion)
            };
        };
    

//Checks answers when the user clicks an answer button
function checkAnswer(event){
    userAnswer = event.target.value;
    if (userAnswer === questions[i].answer){
        quizEl.append("Correct!");
        score = score + 10;
        scoreEl.textContent = score;
        i++;
    }
    else {
        quizEl.append("Incorrect.")
        quizTime = quizTime - 5; 
        i++;
    }
};

//Advances the quiz to the next question after 3 sec if there is remaining time or questions 
function nextQuestion() {
    currentQuestion++;
    if (quizTime > 0 && i < questions.length + 1){
        setTimeout(renderQuestions, 3000)
    }
};

//Shows the quiz complete information and allows the user to save their high score and initials to local storage
function endQuiz() {
    quizEl.innerHTML = "";
    quizEl.innerHTML = "<h2>Quiz Complete.</h2></br> Enter your initials and save your score.</br></br>";
    var initials = document.createElement("input");
    quizEl.append(initials);
    var saveScore = document.createElement("button");
    saveScore.classList.add("button");
    saveScore.innerText = "Save score";
    quizEl.append(saveScore);
    saveScore.addEventListener("click", function(event){
        event.preventDefault();
        var scoreRecord = initials.value.trim() + ": " + score;
        scores.push(scoreRecord);
        storeScores();
    });
    var resetButton = document.createElement("button");
    resetButton.classList.add("button");
    resetButton.innerText = "Reset the quiz and play again";
    quizEl.append(resetButton);
    resetButton.addEventListener("click", resetQuiz);
};

// Resets the quiz so the user can take the quiz again
function resetQuiz() {
    quizTime = 30;
    i = 0;
    score = 0; 
    currentQuestion = 0;
    startQuiz();
};

function listHighScores(event){
    quizEl.style.visibility = "hidden";
    startButtonEl.style.visibility = "hidden";
    highScoreHeaderEl.style.visibility = "visible";
    highScoreList.style.visibility = "visible";
    scoresButtonEl.disabled = true;
    for (var k = 0; k < scores.length; k++){
        var scoreItem = scores[k];
        var highScore = document.createElement("li");
        highScore.textContent = scoreItem;
        highScore.setAttribute("data-index", k);
        highScoreList.append(highScore);
    }
    clearScoreButton.classList.add("button");
    clearScoreButton.textContent = "Clear scores";
    highScoreList.append(clearScoreButton);
    clearScoreButton.addEventListener("click", clearScoreList)
    returnToQuizButton.classList.add("button");
    returnToQuizButton.textContent = "Dismiss saved scores & take quiz again";
    highScoreList.append(returnToQuizButton);
    returnToQuizButton.addEventListener("click", startQuiz);
};

function clearScoreList(event) {
    scores = [];
    localStorage.setItem("scores", JSON.stringify(scores));
}

//Initial page state
init();
scoresButtonEl.addEventListener("click", listHighScores);
startButtonEl.addEventListener("click", startQuiz);
