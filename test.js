let currentIndex = 0;
const destaques = document.querySelectorAll('.destaque');
const totalDestaques = destaques.length;

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalDestaques;
    updateCarrossel();
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalDestaques) % totalDestaques;
    updateCarrossel();
});

function updateCarrossel() {
    destaques.forEach((destaque, index) => {
        destaque.classList.remove('ativo');
    });
    destaques[currentIndex].classList.add('ativo');
    
    const offset = -currentIndex * 100;
    document.querySelector('.carrossel').style.transform = `translateX(${offset}%)`;
}
