// Scroll Smooth
window.addEventListener('wheel', function(event) {
    event.preventDefault(); // Impede o comportamento padrão de scroll

    let scrollStep = 500; // Define o tamanho do scroll por movimento
    let scrollDuration = 500; // Define a duração do scroll suave

    let scrollAmount = event.deltaY > 0 ? scrollStep : -scrollStep;

    let scrollStart = window.scrollY;
    let scrollEnd = scrollStart + scrollAmount;

    let startTime = null;

    function smoothScrollAnimation(currentTime) {
        if (!startTime) startTime = currentTime;

        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / scrollDuration, 1);

        // Função de ease (suavização)
        window.scrollTo(0, scrollStart + (scrollEnd - scrollStart) * ease(progress));

        if (progress < 1) {
            requestAnimationFrame(smoothScrollAnimation);
        }
    }

    function ease(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    requestAnimationFrame(smoothScrollAnimation);
}, { passive: false });

// --------------------------------------------------------------

// Fecha Abas
document.addEventListener('click', function (event) {
    const accordionElement = document.querySelector('#accordionExample');
    const isClickInside = accordionElement.contains(event.target);

    if (!isClickInside) {
        // Seleciona todas as seções do accordion
        const accordionItems = accordionElement.querySelectorAll('.accordion-collapse');

        accordionItems.forEach(item => {
            if (item.classList.contains('show')) {
                // Remove a classe "show" para fechar o item
                bootstrap.Collapse.getInstance(item).hide();
            }
        });
    }
});
