const quizData = [{
        question: "Who wrote Crime and Punishment?",
        a: "Fyodor Dostoevsky",
        b: "JK Rowling",
        c: "George Orvel",
        d: "Leo Tolstoy",
        corect: "a"
    },
    {
        question: "In the novel 1984 the official language of the contry is?",
        a: "Newlang",
        b: "Newspeak",
        c: "Newtalk",
        d: "Newglish",
        corect: "b",
    },

    {
        question: " In the book Harry Potter and the Goblet of fire what is the name of the town where the Riddle family lived",
        a: "Little Hagleton",
        b: "Little Hunsford",
        c: "Little Whinging",
        d: "Little Sussex",

        corect: "a",
    },
    {
        question: "Who wrote Milk and Honey",
        a: "Virginia Woolf",
        b: "Jane Ostin",
        c: "Charlotte Brontë ",
        d: "Rupi Kaur",

        corect: "d",
    },

];
const quiz = document.getElementById('quiz')
const answerE1s = document.querySelectorAll('.answer')
const questionE1 = document.getElementById('question');
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById("submit")

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionE1.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}

function deselectAnswers() {
    answerE1s.forEach(answerE1 => answerE1.checked = false)

}

function getSelectd() {
    let answer
    answerE1s.forEach(answerE1 => {
        if (answerE1.checked) {
            answer = answerE1.id
        }

    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelectd()
    if (answer) {
        if (answer === quizData[currentQuiz].corect) {
            score++
        }
        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `  
        <h2> You answered ${score} / ${quizData.length} questions correctly</h2>

        <button onclick="location.reload()">Reload</button>
        `


        }
    }

})