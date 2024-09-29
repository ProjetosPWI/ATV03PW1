const dots = document.querySelectorAll('.carousel-dot');
const items = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
});

function updateCarousel() {
    items.forEach((item, index) => {
        item.style.transform = `translateX(${-100 * currentIndex}%)`;
    });

    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function trocarImagem(caminho) {
    document.getElementById("produto-imagem").innerHTML = '<img src="./assets/' + caminho + '.jpg" alt="iPhone 16">';

    imagemProduto.classList.add("fade-out");

    setTimeout(() => {
        imagemProduto.classList.remove("fade-out");
        imagemProduto.classList.add("fade-in");
    }, 500);
}

const textos = document.querySelectorAll('.texto-animado');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('texto-aparecendo');
            observer.unobserve(entry.target);
        }
    });
});

textos.forEach(texto => {
    observer.observe(texto);
});

document.getElementById('scroll-button').addEventListener('click', function() {
    document.querySelector('.produto-detalhado').scrollIntoView({
        behavior: 'smooth' 
    });
});

updateCarousel();
