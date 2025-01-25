// Quiz Data
const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      correct: 2, // Index of the correct answer
    },
    {
      question: "Which language runs in a web browser?",
      options: ["Java", "C", "Python", "JavaScript"],
      correct: 3,
    },
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "Hot Mail",
        "How To Make Links",
        "None of the above",
      ],
      correct: 0,
    },
    {
      question: "What year was JavaScript launched?",
      options: ["1996", "1995", "1994", "None of the above"],
      correct: 1,
    },
  ];
  
  // HTML elements
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const submitBtn = document.getElementById("submit");
  const resultEl = document.getElementById("result");
  
  let currentQuiz = 0; // Track the current question
  let score = 0; // Track the score
  
  // Load a quiz question
  function loadQuiz() {
    const currentData = quizData[currentQuiz];
    questionEl.textContent = currentData.question;
    optionsEl.innerHTML = ""; // Clear old options
  
    currentData.options.forEach((option, index) => {
      const optionEl = document.createElement("li");
      optionEl.innerHTML = `
        <label>
          <input type="radio" name="answer" value="${index}">
          ${option}
        </label>
      `;
      optionsEl.appendChild(optionEl);
    });
  }
  
  // Get selected answer
  function getSelected() {
    const answers = document.querySelectorAll("input[name='answer']");
    let selectedAnswer = null;
  
    answers.forEach((answer) => {
      if (answer.checked) {
        selectedAnswer = parseInt(answer.value);
      }
    });
  
    return selectedAnswer;
  }
  
  // Show result
  function showResult() {
    quizEl = document.getElementById("quiz");
    quizEl.style.display = "none"; // Hide quiz
    resultEl.style.display = "block"; // Show result
    resultEl.innerHTML = `<h2>Your Score: ${score}/${quizData.length}</h2>`;
  }
  
  // Event listener for Submit button
  submitBtn.addEventListener("click", () => {
    const answer = getSelected();
  
    if (answer === null) {
      alert("Please select an answer!");
      return;
    }
  
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
  
    currentQuiz++;
  
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      showResult();
    }
  });
  
  // Load the first question
  loadQuiz();
  