const quizData = [
  {
    question: "How Old is Obama?",
    a: 66,
    b: 60,
    c: 43,
    d: 58,
    correct: "b",
  },
  {
    question: "What was the most used programming language in 2021?",
    a: "JavaScript",
    b: "C",
    c: "Java",
    d: "Python",
    correct: "d",
  },
  {
    question: "Who is the Prime Minister of Canada?",
    a: "Justin Trudeau",
    b: "Boris Johnson",
    c: "Emmanuel Macron",
    d: "Doug Ford",
    correct: "a",
  },
  {
    question: "When was the battle of the Somme? ",
    a: 1945,
    b: 1866,
    c: 1916,
    d: 1915,
    correct: "c",
  },
  {
    question: "What was the top song in 2021 Billboard Chart?  ",
    a: "Wizkid feat. Tems, 'Essence'",
    b: "Taylor Swift, 'All Too Well'",
    c: "Dua Lipa 'Levitating'",
    d: "Hozier 'Sweet Music'",
    correct: "c",
  },
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  // check to see the answer
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
    }
  }
});
