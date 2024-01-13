//Add questions
var questions = [
    {
        question: "What type of object can be stored in local storage?",
        choices: ["a number", "a boolean", "a string", "a variable"],
        answer: 3
    },
    {
        question: "Which can be used to decrement a variable i by 1?",
        choices: ["i==", "i--", "i++", "--i"],
        answer: 2
    }
];

// Track scores
var highScores = {};

//var timeCount;
var quizTime = 30;

var score = 0;

var timerEl = document.querySelector(".timer-count");
var quizEl = document.querySelector(".quiz-text");
var startButtonEl = document.querySelector("#startbutton");

//Add timer 
function startTimer() {
    var timer = setInterval(function(){
        quizTime--;
        timerEl.textContent = quizTime;

        if (quizTime === 0){
            clearInterval(timer);
        }
    }, 1000)
};


//Add quiz
 quizEl.textContent = "Click the button to start the quiz!";

function startQuiz() {
    startButtonEl.disabled = true;
    startTimer();
    renderQuestions();
};

function renderQuestions(){
    quizEl.textContent = questions[0].question;
};

startButtonEl.addEventListener("click", startQuiz);
// Update score as user takes quiz
//Add button click eventt to launch quiz
//Add interface for entering high score + name
// Reset score after saving score + name to high scores
// Add link to access high scores saved in local storage
// Sort scores so highest score appears at the top
// Add link to reset high scores