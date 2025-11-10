// Atualização automática do ano no rodapé
document.addEventListener('DOMContentLoaded', function() {
    const anoAtual = new Date().getFullYear();
    document.getElementById('ano-atual').textContent = anoAtual;
});

// Toggle do menu mobile
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', function() {
    nav.classList.toggle('active');
});

// Validação simples do formulário
const form = document.getElementById('inscricao-form');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede envio padrão

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const descricao = document.getElementById('descricao').value.trim();

    if (!nome || !email || !descricao) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Validação básica de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um e-mail válido.');
        return;
    }

    // Simulação de envio (substitua por lógica real, ex.: fetch para API)
    alert('Inscrição enviada com sucesso! Entraremos em contato em breve.');
    form.reset();
});