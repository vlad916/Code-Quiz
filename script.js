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

var questions = [
    {
        title: "What is the HTML tag under which one can write the Javascript code?",
        choices: ["A. <javascript>", "B. <scripted>", "C. <script>", "D. <js>"],
        correctAnswer: "C. <script>"
    },
    {
        title: "How can you get the type of arguments passed to a function?",
        choices: ["A. Using type of operator", "B. Using getType function", "C. Both of the above", "D. None of the above"],
        correctAnswer: "A. Using type of operator"
    },
    {
        title: "Which built-in method calls a function for each element in the array?",
        choices: ["A. While()", "B. Loop()", "C. forEach()", "D. None of the above"],
        correctAnswer: "C. forEach"
    },
    {
        title: "Which of the following function of Boolean object returns the primitive value of the Boolean object?",
        choices: ["A. toSource()", "B. valueOf()", "C. toString()", "D. None of the above"],
        correctAnswer: "B. valueOf()"
    },
    {
        title: "Which of the following function of String object returns the index within the calling String object of the first occurence of the specified value?",
        choices: ["A. substr()", "B. search()", "C. lastIndexOf()", "D. indexOf()"],
        correctAnswer: "D. indexOf()"
    }
];

const startButton = document.getElementById("start");
const scoreButton = document.getElementById("viewScores");
const initialsEnter = document.getElementById("initials");
const showScores = document.getElementById("scores");


f
