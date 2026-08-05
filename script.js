// ==========================================
// CONFIGURAÇÕES DA API DE IA
// ==========================================
const API_KEY = "sk-bl-WvN5eU9Nq9FOdisawFslUpEB22HovGoe0kBi2XIcoun_VLag"; 
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

// ==========================================
// LOGÍSTICA DE CURIOSIDADES (SEM IMAGENS)
// ==========================================
const curiositiesData = [
  {
    icon: "🪐",
    title: "Ano em Vênus",
    description: "Um dia em Vênus é mais longo do que um ano inteiro no próprio planeta."
  },
  {
    icon: "🧬",
    title: "DNA Humano",
    description: "Cerca de 60% do DNA humano é idêntico ao DNA de uma banana."
  },
  {
    icon: "⚡",
    title: "Velocidade do Raios",
    description: "Um único raio contém energia suficiente para assar cerca de 100.000 fatias de pão."
  },
  {
    icon: "🌊",
    title: "Oceano Desconhecido",
    description: "Conhecemos mais a superfície da Lua e de Marte do que os oceanos da Terra."
  }
];

// Renderização dinâmica das curiosidades no DOM
function renderCuriosities() {
  const container = document.getElementById("curiosities-grid");
  container.innerHTML = "";

  curiositiesData.forEach(item => {
    const card = document.createElement("div");
    card.className = "curiosity-card";
    card.innerHTML = `
      <div class="card-icon">${item.icon}</div>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    `;
    container.appendChild(card);
  });
}

// ==========================================
// GERADOR DE CARDS VIA IA EM TEMPO REAL
// ==========================================
async function generateAICard() {
  const promptInput = document.getElementById("ai-prompt");
  const userText = promptInput.value.trim();
  const loadingElement = document.getElementById("loading");

  if (!userText) {
    alert("Por favor, digite um assunto para a IA!");
    return;
  }

  // Ativa o estado de carregamento
  loadingElement.classList.remove("hidden");

  try {
    // Chamada em tempo real para a API
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `Gere um mini card sobre o tema "${userText}". Escolha 1 emoji adequado ao tema para usar como ícone. Responda ESTRITAMENTE no seguinte formato JSON sem formatação markdown: {"emoji": "seu_emoji", "titulo": "Um título curto", "conteudo": "Uma explicação concisa de 2 a 3 frases."}`
          }]
        }]
      })
    });

    if (!response.ok) {
      throw new Error("Erro de comunicação com a IA.");
    }

    const data = await response.json();
    const rawText = data.candidates[0].content.parts[0].text;
    
    // Tratamento e Parse da resposta em tempo real
    const cleanJSON = rawText.replace(/```json|```/g, "").trim();
    const cardData = JSON.parse(cleanJSON);

    // Criação do elemento visual do novo Card
    createAICardElement(cardData.emoji, cardData.titulo, cardData.conteudo);

    // Limpa o campo de entrada
    promptInput.value = "";

  } catch (error) {
    console.error("Falha na geração:", error);
    alert("Erro ao gerar o card em tempo real. Verifique se a chave de API é válida para este endpoint.");
  } finally {
    loadingElement.classList.add("hidden");
  }
}

// Constrói o card recebido no DOM
function createAICardElement(emoji, title, text) {
  const container = document.getElementById("cards-container");
  
  const card = document.createElement("div");
  card.className = "ai-card";
  card.innerHTML = `
    <div class="card-icon">${emoji || '🧠'}</div>
    <h3>${title}</h3>
    <p>${text}</p>
    <span class="card-tag">✨ Gerado por IA</span>
  `;

  // Insere o novo card no topo da lista
  container.prepend(card);
}

// Inicializa o site
document.addEventListener("DOMContentLoaded", () => {
  renderCuriosities();
});
