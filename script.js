// ===============================
// Base de dados: Cores, Emoções e Livros (emoção ↔ livro)
// ===============================

const colorEmotions = [
    { color: '#8B0000', emotions: [
        { name: 'paixão', book: 'Romeu e Julieta – William Shakespeare' },
        { name: 'energia', book: 'Jogos Vorazes – Suzanne Collins' },
        { name: 'intensidade', book: 'Diário de uma Paixão – Nicholas Sparks' }
    ]},
    { color: '#00008B', emotions: [
        { name: 'tristeza', book: 'Um Amor para Recordar – Nicholas Sparks' },
        { name: 'serenidade', book: 'A Culpa é das Estrelas – John Green' },
        { name: 'confiança', book: 'Verity – Colleen Hoover' }
    ]},
    { color: '#FFD700', emotions: [
        { name: 'energia', book: 'Jogos Vorazes – Suzanne Collins' },
        { name: 'otimismo', book: 'Procura-se um Marido – Carina Rissi' },
        { name: 'alegria', book: 'Tudo Nela Brilha e Queima – Ryane Leão' }
    ]},
    { color: '#90EE90', emotions: [
        { name: 'equilíbrio', book: 'Uma Longa Jornada – Nicholas Sparks' },
        { name: 'natureza', book: 'O Hobbit – J.R.R. Tolkien' },
        { name: 'esperança', book: 'O alquimista – Paulo Coelho' }
    ]},
    { color: 'purple', emotions: [
        { name: 'mistério', book: 'O Código Da Vinci – Dan Brown' },
        { name: 'espiritualidade', book: 'Prometida – Carina Rissi' },
        { name: 'imaginação', book: 'É Assim que Começa – Colleen Hoover' }
    ]},
    { color: 'orange', emotions: [
        { name: 'energia', book: 'Percy Jackson e o Ladrão de Raios – Rick Riordan' },
        { name: 'entusiasmo', book: 'Harry Potter e a Pedra Filosofal – J.K. Rowling' },
        { name: 'criatividade', book: 'Coraline – Neil Gaiman' }
    ]},
    { color: 'pink', emotions: [
        { name: 'amor', book: 'Como Eu Era Antes de Você – Jojo Moyes' },
        { name: 'delicadeza', book: 'Para Todos os Garotos que Já Amei – Jenny Han' },
        { name: 'afetividade', book: 'P.S.: Eu Te Amo – Cecelia Ahern' }
    ]},
    { color: '#654321', emotions: [
        { name: 'segurança', book: 'O Morro dos Ventos Uivantes – Emily Brontë' },
        { name: 'conforto', book: 'Cem Anos de Solidão – Gabriel García Márquez' },
        { name: 'estabilidade', book: 'Jane Eyre – Charlotte Brontë' }
    ]},
    { color: '#D3D3D3', emotions: [
        { name: 'neutralidade', book: '1984 – George Orwell' },
        { name: 'equilíbrio', book: 'A Metamorfose – Franz Kafka' },
        { name: 'solidão', book: 'O Estrangeiro – Albert Camus' }
    ]},
    { color: 'black', emotions: [
        { name: 'mistério', book: 'Frankenstein – Mary Shelley' },
        { name: 'poder', book: 'O Iluminado – Stephen King' },
        { name: 'elegância', book: 'Drácula – Bram Stoker' }
    ]},
    { color: 'white', emotions: [
        { name: 'pureza', book: 'O Pequeno Príncipe – Antoine de Saint-Exupéry' },
        { name: 'paz', book: 'A Cabana – William P. Young' },
        { name: 'clareza', book: 'Branca de Neve - Irmãos Grimm' }
    ]}
];

const emotionMeanings = {
    paixão: 'Paixão é um forte sentimento de amor e desejo intenso.',
    energia: 'Energia representa vitalidade e força para agir.',
    intensidade: 'Intensidade expressa profundidade emocional e foco.',
    tristeza: 'Tristeza é um sentimento de melancolia e perda.',
    serenidade: 'Serenidade indica calma e tranquilidade interior.',
    confiança: 'Confiança é a crença na segurança e na certeza.',
    esperança: 'Esperança é a expectativa otimista do futuro.',
    otimismo: 'Otimismo é a tendência a esperar resultados positivos.',
    alegria: 'Alegria é o sentimento de felicidade e satisfação.',
    equilíbrio: 'Equilíbrio é a harmonia entre emoções e razão.',
    natureza: 'Natureza traz conexão com o meio ambiente e vida.',
    calma: 'Calma é a tranquilidade e ausência de conflito.',
    mistério: 'Mistério evoca o desconhecido e a curiosidade.',
    espiritualidade: 'Espiritualidade relaciona-se ao sentido e transcendência.',
    imaginação: 'Imaginação é a capacidade criativa e de sonhar.',
    entusiasmo: 'Entusiasmo é o sentimento de excitação e motivação.',
    criatividade: 'Criatividade é a habilidade de gerar ideias novas.',
    amor: 'Amor é o afeto profundo e a ligação emocional.',
    delicadeza: 'Delicadeza é a suavidade e cuidado nas relações.',
    afetividade: 'Afetividade expressa o carinho e conexão emocional.',
    segurança: 'Segurança é a sensação de proteção e estabilidade.',
    conforto: 'Conforto é o bem-estar e sensação agradável.',
    estabilidade: 'Estabilidade é a firmeza e constância emocional.',
    neutralidade: 'Neutralidade é a imparcialidade e ausência de viés.',
    solidão: 'Solidão é o sentimento de estar sozinho ou isolado.',
    poder: 'Poder representa autoridade e controle.',
    elegância: 'Elegância é a sofisticação e estilo refinado.',
    pureza: 'Pureza indica inocência e limpeza moral.',
    paz: 'Paz é a ausência de conflito e harmonia.',
    clareza: 'Claridade implica transparência e compreensão nítida.'
};

const colorMeanings = {
    '#8B0000': 'O vermelho escuro simboliza paixão intensa, força emocional e ação.',
    '#00008B': 'O azul escuro está relacionado à serenidade, introspecção e confiança.',
    '#FFD700': 'O dourado (amarelo vivo) representa alegria, otimismo e iluminação.',
    '#90EE90': 'O verde claro transmite frescor, calma e conexão com a natureza.',
    'purple': 'O roxo está associado ao mistério, à espiritualidade e à criatividade imaginativa.',
    'orange': 'O laranja evoca entusiasmo, energia vibrante e inovação criativa.',
    'pink': 'O rosa simboliza amor, ternura e conexões afetivas profundas.',
    '#654321': 'O marrom escuro remete à segurança, estabilidade emocional e aconchego.',
    '#D3D3D3': 'O cinza claro representa neutralidade, equilíbrio emocional e introspecção.',
    'black': 'O preto representa poder, elegância e profundidade emocional.',
    'white': 'O branco transmite pureza, paz interior e clareza de pensamentos.'
};

// ===============================
// Variáveis globais
// ===============================
let currentColorData = null;
let correctEmotion = null;
let correctBook = null;
let usedColors = new Set();
let autoNextTimeout = null;
let results = [];
let totalRounds = 5; // padrão
let currentRound = 0;

// ===============================
// Funções auxiliares
// ===============================
function getAllEmotions() {
    let allEmotions = [];
    colorEmotions.forEach(entry => {
        entry.emotions.forEach(em => {
            if (!allEmotions.includes(em.name)) allEmotions.push(em.name);
        });
    });
    return allEmotions;
}

function shuffleArray(array) {
    for (let i = array.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i +1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// ===============================
// Iniciar quiz
// ===============================
function startQuiz() {
    const roundsInput = document.getElementById('rounds').value;
    totalRounds = parseInt(roundsInput) || 5;
    currentRound = 0;

    document.getElementById('intro').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    document.getElementById('summary').style.display = 'none';

    usedColors.clear();
    results = [];

    nextRound();
}

// ===============================
// Próxima rodada
// ===============================
function nextRound() {
    if(autoNextTimeout) clearTimeout(autoNextTimeout);

    if(currentRound >= totalRounds) {
        showSummary();
        return;
    }

    const allEmotions = getAllEmotions();
    let availableColors = colorEmotions.filter(c => !usedColors.has(c.color));
    if (availableColors.length === 0) {
        usedColors.clear();
        availableColors = colorEmotions.slice();
    }

    currentColorData = availableColors[Math.floor(Math.random() * availableColors.length)];
    usedColors.add(currentColorData.color);

    // 👉 Sorteia emoção diferente a cada rodada
    const randomIndex = Math.floor(Math.random() * currentColorData.emotions.length);
    correctEmotion = currentColorData.emotions[randomIndex].name;
    correctBook = currentColorData.emotions[randomIndex].book;

    currentRound++;

    document.getElementById("progress").innerText = `Rodada ${currentRound} de ${totalRounds}`;

    const incorrectEmotions = [];
    for(let emotion of allEmotions){
        if(!currentColorData.emotions.map(e => e.name).includes(emotion)){
            incorrectEmotions.push(emotion);
        }
        if(incorrectEmotions.length === 4) break;
    }

    const options = shuffleArray([correctEmotion, ...incorrectEmotions]);
    updateUI(options);
}

// ===============================
// Atualizar UI
// ===============================
function updateUI(options) {
    const colorBox = document.getElementById('color-box');
    const optionsContainer = document.getElementById('options');
    const responseElement = document.getElementById('response');
    const bookRecommendationElement = document.getElementById('book-recommendation');

    colorBox.style.backgroundColor = currentColorData.color;
    responseElement.innerHTML = '';
    bookRecommendationElement.innerHTML = '';
    optionsContainer.innerHTML = '';

    options.forEach(emotion => {
        const btn = document.createElement('button');
        btn.textContent = emotion.charAt(0).toUpperCase() + emotion.slice(1);
        btn.className = 'option';
        btn.onclick = () => checkAnswer(emotion, btn);
        optionsContainer.appendChild(btn);
    });
}

// ===============================
// Verificar resposta
// ===============================
function checkAnswer(selectedEmotion, clickedButton) {
    const responseElement = document.getElementById('response');
    const bookRecommendationElement = document.getElementById('book-recommendation');
    const buttons = document.querySelectorAll('.option');

    buttons.forEach(btn => btn.disabled = true);
    buttons.forEach(btn => {
        if(btn.textContent.toLowerCase() === correctEmotion.toLowerCase()) {
            btn.classList.add('correct');
        }
    });

    let chosenBook = "";

    if(selectedEmotion.toLowerCase() === correctEmotion.toLowerCase()){
        clickedButton.classList.add('correct');
        chosenBook = correctBook;

        responseElement.innerHTML = `✅ Você acertou!<br>A emoção <strong>${correctEmotion}</strong> expressa: ${emotionMeanings[correctEmotion]}`;
        bookRecommendationElement.innerHTML = `<br>Livro recomendado: <em>${chosenBook}</em>`;
    } else {
        clickedButton.classList.add('incorrect');
        const colorKey = currentColorData.color.toLowerCase();
        const meaning = colorMeanings[currentColorData.color] || colorMeanings[colorKey] || 'Significado não encontrado para essa cor.';

        responseElement.innerHTML = `❌ Errado! A emoção correta era: <strong>${correctEmotion}</strong>.`;
        bookRecommendationElement.innerHTML = `<br>Significado da cor para a psicologia das cores: ${meaning}`;
        chosenBook = '-';
    }

    results.push({
        color: currentColorData.color,
        emotion: correctEmotion,
        meaning: emotionMeanings[correctEmotion],
        book: chosenBook
    });

    if(currentRound >= totalRounds){
        setTimeout(showSummary, 5000);
    } else {
        autoNextTimeout = setTimeout(nextRound, 10000);
    }
}

// ===============================
// Mostrar resumo
// ===============================
function showSummary() {
    document.getElementById('quiz').style.display = 'none';
    const summaryDiv = document.getElementById('summary');
    const summaryContent = document.getElementById('summary-content');

    summaryDiv.style.display = 'block';
    summaryContent.innerHTML = "";

    results.forEach(r => {
        summaryContent.innerHTML += `
            <p>
                <span class="color-box-small" style="background:${r.color}"></span>
                <strong>Cor:</strong> ${r.color} | 
                <strong>Emoção:</strong> ${r.emotion}<br>
                <strong>Significado da Emoção:</strong> ${r.meaning}<br>
                <strong>Livro Recomendado:</strong> <em>${r.book}</em>
            </p><hr>
        `;
    });
}

// ===============================
// Eventos
// ===============================
document.getElementById('start-btn').addEventListener('click', startQuiz);
document.getElementById('restart-btn').addEventListener('click', () => {
    results = [];
    document.getElementById('summary').style.display = 'none';
    document.getElementById('intro').style.display = 'block';
});








