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
    currentQuestion = 0;
    score = 0;
    //startButtonEl.remove();
    startTimer();
    renderQuestions();
    console.log(`Current Question: ${currentQuestion}`);
    console.log(`i value: ${i}`);
    //nextQuestion();
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
             //answerButton.setAttribute("id", "btn");
             quizEl.append(answerButton);
             //console.log(questions[i].answer);
            var userAnswer = '';
            //checkAnswer();
            //function checkAnswer(event){
                //userAnswer = event.target.value;
                //console.log(userAnswer);
                //if (userAnswer === questions[i].answer){
                    //quizEl.append("Correct!");
                    //score =+ 10;
                    //console.log(score);
                    //i++;
                //}
                //else {
                    //quizEl.append("Incorrect.")
                    //quizTime = quizTime - 5; 
                    //i++;
                //}
            //};
             answerButton.addEventListener("click", checkAnswer);
             answerButton.addEventListener("click",nextQuestion)
             //if (userAnswer != ''){
                //setTimeout( function(){
                    //currentQuestion++;
                    //if (currentQuestion < questions.length){
                    //renderQuestions();
                    //}
                    //else{
                        //quizEl.append = "Quiz over."
                    //}
                //}, 2000)
             };
             //answerButton.addEventListener;
        };
    
   //};


function checkAnswer(event){
    userAnswer = event.target.value;
    console.log(userAnswer);
    if (userAnswer === questions[i].answer){
        quizEl.append("Correct!");
        score =+ 10;
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
    if (quizTime > 0 && currentQuestion < questions.length){
        renderQuestions()
    }
    else{
        quizEl.append = "Game Over. Score: " + score ;
    };
};


startButtonEl.addEventListener("click", startQuiz);


// Update score as user takes quiz
//Add button click event to launch quiz
//Add interface for entering high score + name
// Reset score after saving score + name to high scores
// Add link to access high scores saved in local storage
// Sort scores so highest score appears at the top
// Add link to reset high scores