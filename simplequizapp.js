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

function loadQuiz(){
const currentData = quizData[currentQuiz];
question.textContent = currentData.question;

question.innerHTML = '';


quizData.options.forEach((option, index) => {
    const option1  = document.createElement('li');
    option1.innerHTML = `
    <label type = "radio" name = "answer" value = "${index}">${option}</label>
    `;
    options.appendChild(option1);
});
}


function getSelected(){
    const answers = document.querySelectorAll("input[name:'answer']");
    let selectedAnswer = null;

    answers.forEach((answer)=>{
        if (answer.checked){
            selectedAnswer = parseFloat(answer.value);
        }
    })
    return selectedAnswer;
}


function showResult(){
const quiz1 = document.getElementById('quiz');
quiz1.style.display = "none";
result.style.display = 'block';
result.innerHTML = `<h2>Your result: ${score} / ${quizData.length}</h2>`
}

