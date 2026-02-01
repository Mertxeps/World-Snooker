
const images = document.querySelector('.carousel-images');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const totalImages = document.querySelectorAll('.carousel-images img').length;
let index = 0;

function showImage(idx) {
	images.style.transform = `translateX(${-idx * 100}%)`;
}

nextBtn.addEventListener('click', () => {
	index = (index + 1) % totalImages;
	showImage(index);
});

prevBtn.addEventListener('click', () => {
	index = (index - 1 + totalImages) % totalImages;
	showImage(index);
});

// Carrusel automático cada 3 segundos
setInterval(() => {
	index = (index + 1) % totalImages;
	showImage(index);
}, 3000);
