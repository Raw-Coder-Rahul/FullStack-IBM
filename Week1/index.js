// Scroll Banner image

let index = 0;
const images = document.querySelectorAll('.banner-main-image');
const totalImages = images.length;
const leftArrow = document.querySelector('.banner-arrow-left');
const rightArrow = document.querySelector('.banner-arrow-right');

function showImg() {
    images.forEach((img, i) => {
        img.style.opacity = (i >= index && i < index + 2) ? '1' : '0';
        setTimeout(() => {
            img.style.display = (i >= index && i < index + 2) ? 'block' : 'none';
        }, 20);
    });
}

function scrollBanner(direction) {
    images.forEach(img => img.style.opacity = '0');
    setTimeout(() => {
        index += direction;
        if (index < 0) { index = totalImages - 2; }
        if (index >= totalImages - 1) index = 0;
        showImg();
    }, 20);
}

function autoScroll() {
    scrollBanner(1);
    setTimeout(autoScroll, 3000);
}

window.onload = function () {
    showImg();
    autoScroll();
};

leftArrow.addEventListener('click', () => scrollBanner(-1));
rightArrow.addEventListener('click', () => scrollBanner(1));
