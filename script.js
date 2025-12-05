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
    const empresa = document.getElementById('empresa').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const email = document.getElementById('email').value.trim();
    const descricao = document.getElementById('descricao').value.trim();

    if (!nome || !empresa || !telefone || !email || !descricao) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Validação básica de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um e-mail válido.');
        return;
    }

    // Validação básica de telefone (apenas números, mínimo 10 dígitos)
    const telefoneRegex = /^\d{10,11}$/;
    if (!telefoneRegex.test(telefone.replace(/\D/g, ''))) {
        alert('Por favor, insira um telefone válido (apenas números, 10 ou 11 dígitos).');
        return;
    }

    // Construir mensagem para WhatsApp
    const mensagem = `Olá, meu nome é ${nome}.\nEmpresa: ${empresa}\nTelefone: ${telefone}\nE-mail: ${email}\nDescrição do negócio: ${descricao}\n\nGostaria de me inscrever na Caverna.`;

    // Número do WhatsApp (formato internacional sem +)
    const numeroWhatsApp = '5516997187884'; // (16) 99718-7884

    // URL do WhatsApp
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    // Abrir WhatsApp
    window.open(urlWhatsApp, '_blank');

    // Resetar formulário
    form.reset();
});
