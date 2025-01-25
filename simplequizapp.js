const quizData = [
    {
question: "What is the capital of France",
options: ["Karachi", "Qatr", "Berlin", "France"],
answer:3,
    },
    {
question: "Which language runs in a web browser?",
options: ["JS", "C++", "Java", "Pyton"],
answer: 0,
   },
   {
question: "What does HTML stand for?",
options: [
    "Hyper Text Markup Language",
    "Hot Mail",
    "How To Make Links",
    "None of the above",]

   },
];


const quiz = document.getElementById('quiz');
const question  = document.getElementById('question');
const options = document.getElementById('options');
const submitBtn = document.getElementById('submit');
const  result = document.getElementById('result');


let currentQuiz = 0;
let score = 0;


