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
        answer: 1
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
var scoreEl = document.querySelector(".score");


//Add init()

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
 scoreEl.textContent = score;
 quizEl.textContent = "Click the button to start the quiz!";

function startQuiz() {
    startButtonEl.disabled = true;
    startTimer();
    renderQuestions();
};

function renderQuestions(){
    var i = 0;
    quizEl.textContent = questions[i].question;
        for (var j = 0; j < questions[0].choices.length; j++){
            var answerButton = document.createElement('button');
            answerButton.getAttribute("class", "answer-button");
             answerButton.innerText = questions[i].choices[j];
             answerButton.classList.add(j);
             quizEl.append(answerButton);
             answerButton.addEventListener("click", checkAnswer);
             function checkAnswer(){
                if (answerButton.classList.contains(questions[i].answer) == true){
                  score += 10;
                    i++;
            }
            }
    
   }
};

startButtonEl.addEventListener("click", startQuiz);


// Update score as user takes quiz
//Add button click eventt to launch quiz
//Add interface for entering high score + name
// Reset score after saving score + name to high scores
// Add link to access high scores saved in local storage
// Sort scores so highest score appears at the top
// Add link to reset high scores