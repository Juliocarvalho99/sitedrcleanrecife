document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Atualizar Ano no Rodapé
    const anoSpan = document.getElementById("anoAtual");
    if(anoSpan) {
        anoSpan.textContent = new Date().getFullYear();
    }

    // 2. Lógica do FAQ (Acordeão)
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            // Alterna o ícone de seta
            const icon = question.querySelector('i');
            if (icon.classList.contains('fa-chevron-down')) {
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            } else {
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            }

            // Abre/fecha a resposta
            const answer = question.nextElementSibling;
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
            } else {
                // Fecha todas as outras antes de abrir a nova (opcional)
                document.querySelectorAll('.faq-answer').forEach(ans => ans.style.maxHeight = null);
                document.querySelectorAll('.faq-question i').forEach(i => {
                    i.classList.remove('fa-chevron-up');
                    i.classList.add('fa-chevron-down');
                });
                
                // Abre a clicada
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });
});             