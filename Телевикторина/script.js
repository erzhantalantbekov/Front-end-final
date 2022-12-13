const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  
  {
    question: 'Столица Испании',
    answers: [
      { text: 'Мадрид', correct: true },
      { text: 'Барселона', correct: false },
      { text: 'Ош', correct: false },
      { text: 'Берлин', correct: false }
    ]
  },
  {
    question: 'Столица Кении',
    answers: [
      { text: 'Калькута', correct: false },
      { text: 'Найроби', correct: true },
      { text: 'Бишкек', correct: false },
      { text: 'Манила', correct: false }
    ]
  },
  {
    question: 'День независимости в Кыргызстане',
    answers: [
      { text: '7 Апреля', correct: false },
      { text: '31 Августа', correct: true },
      { text: '1 Января', correct: false },
      { text: '5 Мая', correct: false }
    ]
  },
  {
    question: 'Кто изображен на купюре 50 сом',
    answers: [
      { text: 'Роза Отунбаева', correct: false },
      { text: 'Андженли Джоли', correct: false },
      { text: 'Курманжан датка', correct: true },
      { text: 'Айгуль Жапарова', correct: false }
    ]
  },
  {
    question: 'Какой самый большой орган у человека',
    answers: [
      { text: 'Печень', correct: false },
      { text: 'Кожа', correct: true },
      { text: 'Легкие', correct: false },
      { text: 'Сердце', correct: false }
    ]
  },
  {
    question: 'В каком году вышел первый айфон',
    answers: [
      { text: '2001', correct: false },
      { text: '2005', correct: false },
      { text: '2000', correct: false },
      { text: '2007', correct: true }
    ]
  },
  {
    question: 'Какую форму имеет планета Земля',
    answers: [
      { text: 'Героид', correct: true },
      { text: 'Земля плоская алло', correct: false },
      { text: 'Овал', correct: false },
      { text: 'Шар', correct:  false}
    ]
  },
  {
    question: 'В каком году отменили крепостное право на руси',
    answers: [
      { text: 'еще не отменили', correct: false },
      { text: '1861', correct: true },
      { text: '2022', correct: false },
      { text: '1764', correct: false }
    ]
  },
  {
    question: 'Сколько областей в Кыргызстане?',
    answers: [
      { text: '7', correct: true },
      { text: '6', correct: false },
      { text: '5', correct: false },
      { text: '8', correct: false }
    ]
  },
  {
    question: 'О2 в химии - это?',
    answers: [
      { text: 'Озон', correct: false },
      { text: 'углекистлый газ', correct: false },
      { text: 'кислород', correct: true },
      { text: 'водород', correct: false }
    ]
  },
  {
    question: 'В какой стране появились олимпийские игры',
    answers: [
      { text: 'Россия', correct: false },
      { text: 'Италия', correct: false },
      { text: 'Испания', correct: false },
      { text: 'Греция', correct: true }
    ]
  },
  {
    question: 'Самая сильная экономика мира',
    answers: [
      { text: 'Япония', correct: false },
      { text: 'Кыргызстан', correct: false },
      { text: 'Китай', correct: false },
      { text: 'Сша', correct: true }
    ]
  },
  {
    question: 'Скорость света равна',
    answers: [
      { text: '100 м/с', correct: false },
      { text: '700 м/с', correct: false },
      { text: '120324 м/с', correct: false },
      { text: '299 м/с', correct: true }
    ]
  },
]