const questions = [
  {
    question: "Which is the largest animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false }
    ]
  },
  {
    question: "Which is the largest Ocean in the world?",
    answers: [
      { text: "Antarctic", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Pecific", correct: true },
      { text: "Arctic", correct: false }
    ]
  },
  {
    question: "Which is the largest Continent in the world?",
    answers: [
      { text: "Asia", correct: true },
      { text: "South Africa", correct: false },
      { text: "North America", correct: false },
      { text: "Australia", correct: false }
    ]
  },
  {
    question: "Which is the largest Planet in the Solar System?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Saturn", correct: false },
      { text: "Jupiter", correct: true },
      { text: "Uranus", correct: false }
    ]
  },
  {
    question: "Which is the Longest River in the world?",
    answers: [
      { text: "Mississippi", correct: false },
      { text: "Nile", correct: true },
      { text: "Ganges", correct: false },
      { text: "Amazon", correct: false }
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}
function showQuestion() {
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
  });
}
startQuiz();