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
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if (answer.correct){
      button.dataset.correct=answer.correct;
    }
    button.addEventListener("click",selectAnswer);
  });
}
function resetState() {
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}
function selectAnswer(e){
  const selectedButton=e.target;
  const isCorrect=selectedButton.dataset.correct==="true";
  if (isCorrect){
    selectedButton.classList.add("correct");
    score++;
  }else{
    selectedButton.classList.add("incorrect");
  }
  Array.from(answerButton.children).forEach(button=>{
    if(button.dataset.correct==="true"){
      button.classList.add("correct");
    }
    button.disabled=true;
  });
  nextButton.style.display="block";
}
function showScore(){
  resetState();
  questionElement.innerHTML=`You have scored ${score} out of ${questions.length}!`
  nextButton.innerHTML="Play Again !!";
  nextButton.style.display="block";
}
function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex<questions.length){
    showQuestion();
  }else{
    showScore();
  }
}
nextButton.addEventListener("click",()=>{
  if (currentQuestionIndex<questions.length){
    handleNextButton();
  }else{
    startQuiz();
  }
});
startQuiz();