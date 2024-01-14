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
//var highScores = {};

//var timeCount;
var quizTime = 30;
var currentQuestion = 0;
var score = 0;

var timerEl = document.querySelector(".timer-count");
var quizEl = document.querySelector(".quiz-text");
var startButtonEl = document.querySelector("#startbutton");
var scoreEl = document.querySelector(".score");
var overEl = document.querySelector(".quiz-over");


// Set styling for elements added through DOM
//quizEl.setAttribute("style", "border-width: 2px; max-width: 50%; display: flex;")

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
 scoreEl.textContent = "Score: " + score;
 quizEl.textContent = "Click the button to start the quiz!";

function startQuiz() {
    startButtonEl.disabled = true;
    startButtonEl.style.display = "none";
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
        i++;
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
    quizEl.innerHTML = "";
    quizEl.innerHTML = "<h2>Quiz Complete.</h2></br> Enter your initials and save your score.</br></br>";
    var initials = document.createElement("input");
    quizEl.append(initials);
    var saveScore = document.createElement("button");
    saveScore.classList.add("button");
    saveScore.innerText = "Save Score";
    quizEl.append(saveScore);
    saveScore.addEventListener("click", function(event){
        event.preventDefault();
        var scoreRecord = {
            initials: initials.value.trim(),
            score: score
        };
    
    localStorage.setItem("scoreRecord", JSON.stringify(scoreRecord));
    });
    var resetButton = document.createElement("button");
    resetButton.classList.add("button");
    resetButton.innerText = "Reset the quiz and play again";
    quizEl.append(resetButton);
    resetButton.addEventListener("click", resetQuiz);
};
//};

function resetQuiz() {
    quizTime = 30;
    i = 0;
    score = 0; 
    currentQuestion = 0;
    startQuiz();
};

startButtonEl.addEventListener("click", startQuiz);


// Update score as user takes quiz
//Add button click event to launch quiz
//Add interface for entering high score + name
// Reset score after saving score + name to high scores
// Add link to access high scores saved in local storage
// Sort scores so highest score appears at the top
// Add link to reset high scores