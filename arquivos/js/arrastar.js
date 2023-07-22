const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// Pega o numero de cartas que cabem no carrossel de uma só vez
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insere copias das ultimas cartas para o inicio do carrossel para scroll infinito
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insere copias das primeiras cartas para o fim do carrossel para scroll infinito
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Adiciona action listeners nos botoes de setinhas para mover o carrossel para a direita e esquerda
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
        console.log(firstCardWidth);
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Grava a posição do cursor atual e a posição do scroll do carrossel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; // se não esta arrastando o mouse então retorne
    // Atualiza a posição do scroll do carrossel baseado no movimento do mouse
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    // Se o carrossel esta no inicio, da scroll até o fim
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // Se o carrossel esta no fim, da scroll até o inicio
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    // Reinicia o tempo do autoplay e executa a função autoplay caso o mouse estiver fora do wrapper
    // clearTimeout(timeoutId);
    // if(getComputedStyle(wrapper).getPropertyValue('--hovered') == 0) autoPlay();
}

// const autoPlay = () => {
//     if(window.innerWidth < 800 || !isAutoPlay) return; // Não deve fazer autoplay em dispositivo mobile
//     // Autoplay depois de 4s
//     timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 4000);
// }
// autoPlay();



carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
// wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
// wrapper.addEventListener("mouseleave", autoPlay);