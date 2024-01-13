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

var quizEl = document.querySelector(".quiz-text");
var answerButtons = document.querySelector(".answer-buttons")

var currentQuestion = 0;
var score = 0;

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    printQuestion();
};

function printQuestion() {
    var selectedQuestion = questions[currentQuestion];
    quizEl.textContent = selectedQuestion.question;
    for (var j = 0; j < questions[currentQuestion].choices.length; j++){
        var answerButton = document.createElement("button");
        answerButton.getAttribute("class", "answer-button");
         answerButton.innerText = questions[currentQuestion].choices[j];
         answerButton.setAttribute("value", j);
         quizEl.append(answerButton);
         answerButton.addEventListener("click", checkAnswer);
         answerButton.addEventListener("click", nextQuestion);
    };
};

function checkAnswer(event) {
    var userAnswer = event.target.value;
    if (userAnswer === questions[currentQuestion].answer){
        quizEl.append = "Correct answer";
        score =+ 10;
    }
    else {
        quizEl.append = "Incorrect answer";
    }
};

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length){
        printQuestion()
    }
    else{
        quizEl.append = score;
    };
};

startQuiz();