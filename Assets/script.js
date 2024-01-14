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
    }
];

// Track scores
var highScores = {};

//var timeCount;
var quizTime = 30;
var currentQuestion = 0;
var score = 0;

var timerEl = document.querySelector(".timer-count");
var quizEl = document.querySelector(".quiz-text");
var startButtonEl = document.querySelector("#startbutton");
var scoreEl = document.querySelector(".score");
var overEl = document.querySelector(".quiz-over");

//Add init()

//Add timer 
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


//Add quiz
 scoreEl.textContent = score;
 quizEl.textContent = "Click the button to start the quiz!";

function startQuiz() {
    startButtonEl.disabled = true;
    currentQuestion = 0;
    score = 0;
    //startButtonEl.remove();
    startTimer();
    renderQuestions();
    console.log(`Current Question: ${currentQuestion}`);
    console.log(`i value: ${i}`);
    //endQuiz();
};

var i = 0; 

function renderQuestions(){
    //var i = 0;
    //resetQuestion();
    quizEl.textContent = questions[i].question;
        for (var j = 0; j < questions[i].choices.length; j++){
            var answerButton = document.createElement('button');
            answerButton.getAttribute("class", "answer-button");
             answerButton.innerText = questions[i].choices[j];
             answerButton.setAttribute("value", j);
             quizEl.append(answerButton);
            var userAnswer = '';
             answerButton.addEventListener("click", checkAnswer);
             answerButton.addEventListener("click", nextQuestion)
             };
        };
    
   //};


function checkAnswer(event){
    userAnswer = event.target.value;
    console.log(userAnswer);
    if (userAnswer === questions[i].answer){
        quizEl.append("Correct!");
        score = score + 10;
        scoreEl.textContent = score;
        console.log(score);
        i++;
    }
    else {
        quizEl.append("Incorrect.")
        quizTime = quizTime - 5; 
        //i++;
    }
};

function nextQuestion() {
    currentQuestion++;
    if (quizTime > 0 && i < questions.length + 1){
        setTimeout(renderQuestions, 3000)
    }
    else {
       overEl.textContent = "Quiz Complete";
    };
};

function endQuiz() {
    //clearInterval(quizTime);
    quizEl.innerHTML = "";
};
//};

startButtonEl.addEventListener("click", startQuiz);


// Update score as user takes quiz
//Add button click event to launch quiz
//Add interface for entering high score + name
// Reset score after saving score + name to high scores
// Add link to access high scores saved in local storage
// Sort scores so highest score appears at the top
// Add link to reset high scores