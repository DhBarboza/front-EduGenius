const question = [
    {
        question:
            "Qual é o objetivo principal da Demonstração do Resultado do Exercício (DRE)?",
        answer: [
            { text: "Apresentar o fluxo de caixa da empresa.", correct: false },
            {
                text: "Mostrar a posição financeira da empresa em um período específico.",
                correct: false,
            },
            {
                text: "Exibir as receitas, despesas e o lucro líquido da empresa em um período.",
                correct: true,
            },
            {
                text: "Detalhar os ativos e passivos da empresa.",
                correct: false,
            },
        ],
    },
    {
        question: "O que é o Princípio da Entidade na contabilidade?",
        answer: [
            {
                text: "Todas as transações devem ser registradas no momento em que ocorrem.",
                correct: false,
            },
            {
                text: "Os ativos devem ser registrados pelo seu valor original de aquisição.",
                correct: false,
            },
            {
                text: "Os registros contábeis de uma entidade não devem se misturar com os registros pessoais de seus proprietários.",
                correct: true,
            },
            {
                text: "Os ativos devem ser registrados com base no seu valor de mercado atual.",
                correct: false,
            },
        ],
    },
    {
        question: "Qual é o objetivo da Demonstração dos Fluxos de Caixa?",
        answer: [
            {
                text: "Mostrar as transações de compra e venda de ativos em um período.",
                correct: false,
            },
            {
                text: "Demonstrar como as obrigações da empresa são pagas ao longo do tempo.",
                correct: false,
            },
            {
                text: "Apresentar as variações nos saldos das contas patrimoniais.",
                correct: false,
            },
            {
                text: "Indicar as fontes e usos de dinheiro da empresa durante um período.",
                correct: true,
            },
        ],
    },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementByI("answer-buttons");
const nextButton = document.getElementByI("next-btn");

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
    let qestionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = qestionNo;
    +". " + currentQuestion.questionName + " " + currentQuestion;
}
