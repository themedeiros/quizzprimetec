// Definindo as perguntas do quiz
const questions = [
  {
    question: "Você já pensou quanto tempo poderia economizar ao aprender a usar o ChatGPT de forma eficiente?",
    options: ["Sim, eu imagino que poderia economizar bastante tempo.", "Não tenho certeza, mas acredito que pode me ajudar.", "Não, nunca parei para pensar nisso."],
    correctAnswer: null
  },
  {
    question: "Se você soubesse usar o ChatGPT corretamente, quantas horas por semana você acha que poderia economizar?",
    options: ["1-2 horas", "3-5 horas", "Mais de 5 horas", "Não sei, nunca pensei nisso antes."],
    correctAnswer: null
  },
  {
    question: "Você sabia que o ChatGPT pode automatizar diversas tarefas do seu dia a dia, como responder e-mails, gerar ideias de conteúdo e muito mais?",
    options: ["Sim, estou ciente disso e quero aprender a fazer isso.", "Já ouvi falar, mas não sei como aplicar.", "Não sabia disso, mas estou interessado em aprender."],
    correctAnswer: null
  },
  {
    question: "Como você se sente ao usar o ChatGPT hoje?",
    options: ["Confiante e produtivo", "Um pouco perdido, mas acho que consigo aprender", "Frustrado, não sei por onde começar", "Nunca usei, então não sei como me sentir"],
    correctAnswer: null
  },
  {
    question: "Você já sentiu que poderia ter feito algo melhor usando o ChatGPT, mas não sabia como?",
    options: ["Sim, várias vezes", "Às vezes, mas não sei exatamente o que fazer diferente", "Não, sempre que uso, consigo tirar proveito"],
    correctAnswer: null
  }
];

let currentQuestionIndex = 0;
let userAnswers = [];

// Função para carregar a pergunta
function loadQuestion(index) {
  const question = questions[index];
  const questionText = document.getElementById("question-text");
  const answerOptions = document.getElementById("answer-options");

  questionText.innerHTML = question.question;
  answerOptions.innerHTML = '';

  question.options.forEach((option, i) => {
    const optionElement = document.createElement("div");
    optionElement.classList.add("option");
    optionElement.innerHTML = ` 
      <input type="radio" name="answer" id="option${i}" value="${option}">
      <label for="option${i}">${option}</label>
    `;
    answerOptions.appendChild(optionElement);
  });
}

// Função para salvar a resposta e passar para a próxima pergunta
function nextQuestion() {
  const selectedOption = document.querySelector('input[name="answer"]:checked');
  if (!selectedOption) {
    alert('Por favor, selecione uma resposta!');
    return;
  }

  userAnswers.push(selectedOption.value);
  console.log('Respostas até agora: ', userAnswers);  // Log para depuração
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    loadQuestion(currentQuestionIndex);
  } else {
    showResults();
  }
}

// Função para calcular o perfil do usuário com base nas respostas
function calculateProfile() {
  const answers = userAnswers;
  console.log('Calculando perfil com as respostas: ', answers);  // Log para depuração
  let profile = "básico"; // Default para o perfil básico

  // Critérios para definir o perfil
  if (answers.includes("Sim, eu imagino que poderia economizar bastante tempo.") && answers.includes("Mais de 5 horas")) {
    profile = "avançado";
  } else if (answers.includes("Confiante e produtivo")) {
    profile = "intermediário";
  } else if (answers.includes("Frustrado, não sei por onde começar")) {
    profile = "básico";
  }

  console.log('Perfil calculado: ', profile);  // Log para depuração
  return profile;
}

// Função para mostrar o resultado e o perfil
function showResults() {
  const quizContainer = document.querySelector('.quiz-container');
  const profile = calculateProfile();

  // Mensagem personalizada com base no perfil
  let resultMessage = '';
  if (profile === "avançado") {
    resultMessage = `
      <h1>Parabéns, você está pronto para um curso avançado de ChatGPT!</h1>
      <p>Com suas respostas, podemos ver que você tem uma ótima noção de como o ChatGPT pode te ajudar a economizar tempo e ser mais produtivo. O curso avançado será perfeito para você!</p>
    `;
  } else if (profile === "intermediário") {
    resultMessage = `
      <h1>Você está no caminho certo para se tornar um mestre no ChatGPT!</h1>
      <p>Com o seu perfil, um curso intermediário será ideal para melhorar ainda mais suas habilidades e aproveitar todo o potencial do ChatGPT.</p>
    `;
  } else {
    resultMessage = `
      <h1>Vamos te ajudar a começar!</h1>
      <p>Você está no início da jornada e, com o nosso curso básico, você vai aprender tudo o que precisa para começar a utilizar o ChatGPT no seu dia a dia.</p>
    `;
  }

  // Inserindo a mensagem no container do quiz
  quizContainer.innerHTML = resultMessage;
  quizContainer.innerHTML += `
    <button onclick="window.location.href='checkout.html'">Garantir minha vaga agora</button>
    <button onclick="window.location.href='sabermais.html'">Saber mais sobre o curso</button>
  `;
}

// Função que é executada ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  loadQuestion(currentQuestionIndex);
});


let participants = 3421; // valor inicial
function updateParticipants() {
    // cresce entre 1 e 5 por vez
    participants += Math.floor(Math.random() * 5) + 1;
    document.getElementById("participants").textContent = participants.toLocaleString("pt-BR");
}
setInterval(updateParticipants, 2000); // atualiza a cada 2s
updateParticipants();

// ===== Contagem Regressiva =====
function startCountdown(durationInSeconds) {
    let timer = durationInSeconds;
    setInterval(function () {
        let hours = Math.floor(timer / 3600);
        let minutes = Math.floor((timer % 3600) / 60);
        let seconds = timer % 60;

        document.getElementById("countdown").textContent =
            String(hours).padStart(2, '0') + ":" +
            String(minutes).padStart(2, '0') + ":" +
            String(seconds).padStart(2, '0');

        if (--timer < 0) {
            timer = 0; // trava no zero
        }
    }, 1000);
}

// Exemplo: 3 horas de contagem
startCountdown(3 * 60 * 60);

const units = {
    americana: {
        name: "Americana",
        address: "R. Primo Pícoli, 154, Jardim Girassol<br>Americana - SP",
        phone: "(19) 3405-3331 | (19) 9 9872-2195",
        email: "contato@primetecamericana.com.br",
        whatsapp: "https://wa.me/5519998722195"
    },
    artur: {
        name: "Artur Nogueira",
        address: "Avenida Duque de Caxias, 2074, Jd Arrivabene II<br>Artur Nogueira-SP",
        phone: "(19) 3827-3440 | (19) 9 9401-4256",
        email: "contato@primetecarturnogueira.com.br",
        whatsapp: "https://wa.me/5519994014256"
    },
    campinas: {
        name: "Campinas",
        address: "Rua Regente Feijó, 780, Centro<br>Campinas-SP",
        phone: "(19) 3236-6008 | (19) 9 9537-2679",
        email: "contato@primeteccampinas.com.br",
        whatsapp: "https://wa.me/551995372679"
    },
    mogiguacu: {
        name: "Mogi Guaçu",
        address: "Rua Chico de Paula, 259, Centro<br>Mogi Guaçu-SP",
        phone: "(19) 3818-0244 | (19) 9 9474-2761",
        email: "contato@primetecmogiguacu.com.br",
        whatsapp: "https://wa.me/551994742761"
    },
    tatui: {
        name: "Tatuí",
        address: "Praça Adelaide Guedes, 60, Centro<br>Tatuí-SP",
        phone: "(15) 3316-6809 | (15) 9 8185-0619",
        email: "contato@primetectatui.com.br",
        whatsapp: "https://wa.me/5515981850619"
    },
    ribeirao: {
        name: "Ribeirão Preto",
        address: "Rua Bernardino de Campos, 423 - Centro, Ribeirão Preto",
        phone: "+55 (16) 99172-0935",
        email: "contato@primetecribeiraopreto.com.br",
        whatsapp: "https://wa.me/5516991720935"
    }
};

// Atualiza info ao clicar
const buttons = document.querySelectorAll('.unit-btn');
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const unit = units[btn.dataset.unit];
        document.getElementById('unit-name').innerHTML = unit.name;
        document.getElementById('unit-address').innerHTML = unit.address;
        document.getElementById('unit-phone').innerHTML = unit.phone;
        document.getElementById('unit-email').innerHTML = unit.email;
        document.getElementById('unit-whatsapp').href = unit.whatsapp;
    });
});
