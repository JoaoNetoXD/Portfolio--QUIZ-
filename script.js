document.addEventListener('DOMContentLoaded', () => {
    // Animação suave ao rolar para as seções
    const sections = document.querySelectorAll('.section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(section);
    });

    // Adicionar efeito de hover nos cards de projeto
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // Adicionar ano atual no footer
    const currentYear = new Date().getFullYear();
    const footer = document.createElement('footer');
    footer.innerHTML = `<p>&copy; ${currentYear} - Todos os direitos reservados</p>`;
    footer.style.textAlign = 'center';
    footer.style.padding = '2rem 0';
    footer.style.color = '#7f8c8d';
    document.querySelector('.container').appendChild(footer);
}); 