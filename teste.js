const personagens = [
    { nome: "Bleach", imagem: "assets/bleach.webp" },
    { nome: "Dragon-ball", imagem: "assets/dragon-ball.png" },
    { nome: "HXH", imagem: "assets/hxh.webp" },
    { nome: "Jujutsu", imagem: "assets/jujutsu.jpg" },
    { nome: "Solo-Leving", imagem: "assets/jung.webp" },
    { nome: "Tokyo-Ghoul", imagem: "assets/kaneki.webp" },
    { nome: "Naruto", imagem: "assets/naru.jpg" },
    { nome: "Demon-Slayer", imagem: "assets/slayer.webp" },
    { nome: "Vinland Saga", imagem: "assets/torfin.jpg" },
    { nome: "Evangelion", imagem: "assets/evangelion.jpg" },
    { nome: "Pokemon", imagem: "assets/pokemon.webp" },
    { nome: "Cavaleiros do Zodiaco", imagem: "assets/zodiaco.jpg" },
    { nome: "Dr Stone", imagem: "assets/dr-stone.webp" },
    { nome: "Demon-Slayer 2", imagem: "assets/slayer.webp" }, // Corrigido nome para Demon-Slayer 2
];

// Acessa os elementos na página
const botao = document.getElementById("rollButton");
const resultadoElemento = document.getElementById("personagemSorteado");
const imagemElemento = document.getElementById("imagemSorteada");

// Variáveis para a Animação
let intervaloAnimacao;
const duracaoAnimacao = 3000; // 3 segundos de giro

// --- FUNÇÕES DE ANIMAÇÃO ---

function iniciarAnimacao() {
    // 1. Desabilita o botão e atualiza o texto de status
    botao.disabled = true;
    botao.textContent = "Sorteando o Anime...";
    resultadoElemento.textContent = "Girando, girando...";

    let indiceAtual = 0;
    
    // 2. Inicia a troca rápida de imagens (animação de rolar)
    intervaloAnimacao = setInterval(() => {
        // Altera o 'src' para o próximo anime na lista
        imagemElemento.src = personagens[indiceAtual].imagem;
        
        // Loop: vai para o próximo índice ou volta ao início (0)
        indiceAtual = (indiceAtual + 1) % personagens.length;
        
        // Garante que a imagem esteja visível (caso não estivesse)
        imagemElemento.style.display = "block"; 
    }, 100); // Troca a imagem a cada 100ms
}

function pararAnimacaoESortear() {
    // 1. Interrompe a troca rápida de imagens
    clearInterval(intervaloAnimacao);
    
    // 2. Sorteia o anime final
    const indiceSorteado = Math.floor(Math.random() * personagens.length);
    const animeSorteado = personagens[indiceSorteado];
    
    // 3. Exibe o resultado final
    imagemElemento.src = animeSorteado.imagem;
    resultadoElemento.textContent = `Anime para hoje é: ${animeSorteado.nome}!`;

    // 4. Adiciona o efeito de zoom (definido no CSS)
    imagemElemento.classList.add('zoom-in');
    
    // 5. Reabilita o botão após um pequeno atraso (para o efeito de zoom)
    setTimeout(() => {
        botao.disabled = false;
        botao.textContent = "Sortear Novo Anime";
        imagemElemento.classList.remove('zoom-in'); // Remove a classe para que o efeito ocorra novamente no próximo clique
    }, 500); // Tempo do efeito de zoom
}

// --- OUvinte DE EVENTOS PRINCIPAL ---
botao.addEventListener("click", function() {
    // Inicia o giro
    iniciarAnimacao();

    // Agenda a parada da animação após a duração definida (3 segundos)
    setTimeout(pararAnimacaoESortear, duracaoAnimacao);
});