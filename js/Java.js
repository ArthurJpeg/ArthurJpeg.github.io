document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a.botao').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offsets = {
                    "Sobrenos": 118,  // Ajuste para a seção "Sobre Nós"
                    "Contato": 228,   // Ajuste para a seção "Contato"
                    "Experimental": -30  // Ajuste para a seção "Experimental"
                };

                const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - (offsets[targetId] || 100);

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});

let index = 0;
    const slides = document.querySelectorAll('.slide');

    function showSlide() {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
        index = (index + 1) % slides.length;
    }

    showSlide();
    setInterval(showSlide, 5000);