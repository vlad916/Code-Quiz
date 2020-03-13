var timeElement = document.querySelector('.time');
var questionsElement = document.querySelector('questions-rendered');

var secRemaining = 75;
var secPenalty = 10;
var timerInterval;
var numCorrect = 0;
var questionIndex = 0;
var highScores;
var highScoresArray = [];
var score = 0;


const startButton = document.getElementById("start");
const scoreButton = document.getElementById("viewScores");
const initialsEnter = document.getElementById("initials");
const showScores = document.getElementById("scores");


function setTime() {
    timerInterval = setInterval(function() {
        secRemaining--;
        timeElement.textContent = "Time Remaining: " + secRemaining;
        if (secRemaining === 0) {
            finish();
        }
    }, 1000);
}

function finish() {

    clearInterval(timerInterval);

    secRemaining = 0;

    document.querySelector(".time").innerHTML = "Done";

    questionsElement.textContent = "";

    score = numCorrect * (100 / questions.length);

    document.getElementById("choice-response").innerHTML = 
        "Your final score is: " + score;

    initialsEnter.style.display = "block";

    document.getElementById("myInitials").value = "";
}



function getInitials() {
    if (highScoresArray.length === 0) {
        highScores = document.getElementById("myInitials").value + " - " + score;
    } else {
        highScores = 
        " " + document.getElementById("myInitials").value + " " + score;
    }

    highScoresArray.push(highScores);
    initialsEnter.style.display = "none";
    document.querySelector("time").innerHTML = "High Scores";
    document.getElementById("choice-response").innerHTML = highScoresArray;
    showScores.style.display = "block";
}



function startOver() {
    document.getElementById("choice-response").innerHTML = "";
    showScores.style.display = "none";
    timeElement.textContent = "Time Remaining: 0";
    startButton.style.display = "initial";
    scoreButton.style.display = "initial";
}


function viewAllScores() {
    if (highScoresArray.length  === 0) {
    document.getElementById("choice-response").innerHTML = "No Scores: ";
    } else {
        document.getElementById("choice-response").innerHTML = 
        "High Scores: " + highScoresArray;
    }
}

function clearScores() {
    highScoresArray = [];
    document.getElementById("choice-response").innerHTML = highScoresArray;
}

startButton.addEventListener("click", function() {
    secRemaining = 75;
    setTime();

    numCorrect = 0;
    questionIndex = 0;

    startButton.style.display = "none";
    scoreButton.style.display = "none";

    document.getElementById("choice-response").innerHTML = "";
    document.getElementById("instructions").innerHTML = "";
    displayQuestions();
});

function displayQuestions() {
    if (secRemaining <= 0 || questionIndex >= questions.length) {
        finish();
        return;
    }
    questionsElement.textContent = "";

    var question = questions[questionIndex];
    var questionDiv = document.createElement("div");
    var questionText = document.createElement("p");

    questionText.textContent = question.title;

    questionDiv.appendChild(questionText);

    for (i = 0; i < question.choices.length; i++) {
        var option = document.createElement("button");

        option.textContent = question.choices[i];

        option.style.cssText = 
            "display: block; padding: 5px; margin-left: 40%; margin-bottom: 5px; width: 175px";
        option.setAttribute("class", "option");

        option.addEventListener("click", function(e) {
            var optionClicked = e.target.innerHTML;
            if (optionClicked === questions[questionIndex].correctAnswer){
                numCorrect++;
                document.getElementById("choice-response").innerHTML = "correct";
                displayQuestions(questionIndex++);
            } else {

                secRemaining = secRemaining - secPenalty;
                document.getElementById("choice-response").innerHTML = "wrong";
                displayQuestions(questionIndex++);
            }
        });
        questionDiv.appendChild(option);
    }
    questionsElement.appendChild(questionDiv);
}
