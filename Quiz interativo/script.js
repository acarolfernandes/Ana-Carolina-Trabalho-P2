const $startGameButton = document.querySelector(".start-quiz")
const $nextQuestionButton = document.querySelector(".next-question")
const $questionsContainer = document.querySelector(".questions-container")
const $questionText = document.querySelector(".question")
const $answersContainer = document.querySelector(".answers-container")
const $answers = document.querySelectorAll(".answer")

let currentQuestionIndex = 0
let totalCorrect = 0

$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)

function startGame() {
  $startGameButton.classList.add("hide")
  $questionsContainer.classList.remove("hide")
  displayNextQuestion()
}

function displayNextQuestion() {
  resetState()
  
  if (questions.length === currentQuestionIndex) {
    return finishGame()
  }

  $questionText.textContent = questions[currentQuestionIndex].question
  questions[currentQuestionIndex].answers.forEach(answer => {
    const newAsnwer = document.createElement("button")
    newAsnwer.classList.add("button", "answer")
    newAsnwer.textContent = answer.text
    if (answer.correct) {
      newAsnwer.dataset.correct = answer.correct
    }
    $answersContainer.appendChild(newAsnwer)

    newAsnwer.addEventListener("click", selectAnswer)
  })
}

function resetState() {
  while($answersContainer.firstChild) {
    $answersContainer.removeChild($answersContainer.firstChild)
  }

  document.body.removeAttribute("class")
  $nextQuestionButton.classList.add("hide")
}

function selectAnswer(event) {
  const answerClicked = event.target

  if (answerClicked.dataset.correct) {
    document.body.classList.add("correct")
    totalCorrect++
  } else {
    document.body.classList.add("incorrect") 
  }

  document.querySelectorAll(".answer").forEach(button => {
    button.disabled = true

    if (button.dataset.correct) {
      button.classList.add("correct")
    } else {
      button.classList.add("incorrect")
    }
  })
  
  $nextQuestionButton.classList.remove("hide")
  currentQuestionIndex++
}

function finishGame() {
  const totalQuestions = questions.length
  const performance = Math.floor(totalCorrect * 100 / totalQuestions)
  
  let message = ""

  switch (true) {
    case (performance >= 90):
      message = "Excelente :)"
      break
    case (performance >= 70):
      message = "Muito bom :)"
      break
    case (performance >= 50):
      message = "Bom"
      break
    default:
      message = "Pode melhorar"
  }

  $questionsContainer.innerHTML = 
  `
    <p class="final-message">
      Você acertou ${totalCorrect} de ${totalQuestions} questões!
      <span>Resultado: ${message}</span>
    </p>
    <button 
      onclick=window.location.reload() 
      class="button"
    >
      Refazer teste
    </button>
  `
}


const questions = [
  {
    question: "De onde é a invenção do chuveiro elétrico?",
    answers: [
      { text: "Inglaterra", correct: false },
      { text: "Austrália", correct: false },
      { text: "Brasil", correct: true },
      { text: "Itália", correct: false }
    ]
  },
  {
    question: "Qual a velocidade da luz?",
    answers: [
      { text: "299 792 458 metros por segundo (m/s).", correct: true },
      { text: "300 000 000 metros por segundo (m/s)", correct: false },
      { text: "30 000 000 metros por segundo (m/s)", correct: false },
      { text: "199 792 458 metros por segundo (m/s)", correct: false }
    ]
  },
  {
    question: "Qual o maior animal terrestre?",
    answers: [
      { text: 'Elefante africano', correct: true },
      { text: 'Tubarão Branco', correct: false },
      { text: 'Baleia Azul', correct: false },
      { text: "Girafa", correct: false }
    ]
  },
  {
    question: 'As pessoas de qual tipo sanguíneo são consideradas doadores universais?',
    answers: [
      { text: "Tipo A", correct: false },
      { text: "Tipo O", correct: true },
      { text: "Tipo B", correct: false },
      { text: " Tipo AB", correct: false }
    ]
  },
  {
    question: 'Quais são os cromossomos que determinam o sexo masculino?',
    answers: [
      { text: 'Os X', correct: false },
      { text: 'Os Y', correct: true },
      { text: 'Os V', correct: false },
      { text: 'Os W', correct: false }
    ]
  },
  {
    question: 'Com que dois países faz fronteira o Equador?',
    answers: [
      { text: 'com o Brasil e com a Colômbia', correct: false },
      { text: 'com a Colômbia e com o Peru', correct: true },
      { text: 'com a Colômbia e com a Venezuela', correct: false },
      { text: ' com o Equador e o Brasil', correct: false }
    ]
  },
  {
    question: 'Em que oceano fica Madagascar?',
    answers: [
      { text: 'Oceano Pacífico', correct: false },
      { text: 'Oceano Ártico', correct: false },
      { text: 'Oceano Atlântico', correct: false },
      { text: 'Oceano Índico.', correct: true },
    ]
  },
]