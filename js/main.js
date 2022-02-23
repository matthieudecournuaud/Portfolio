

var scene = document.querySelector('#scene');
var parallaxInstance = new Parallax(scene);

var image = document.querySelector('.BgimgstarsN2');
new simpleParallax(image, {
    delay: 0.8
});

const voyage = document.querySelector('.containernavette');
const navette = document.querySelector('#navette');
let containertexte = document.querySelector('.containertexte');
let containerbloc = document.querySelector('.containerbloc');
let bloctexte = document.querySelector('.bloctexte');



window.addEventListener('scroll', () => {
    if (window.scrollY > 260 && window.scrollY < 960) {
        voyage.classList.add('scroll')
    }
})
window.addEventListener('scroll', () => {
    if (window.scrollY > 960 && window.scrollY < 1450) {
        voyage.classList.add('scroll2')
    }
})
window.addEventListener('scroll', () => {
    if (window.scrollY > 800) {
        containertexte.classList.add('containertexte2')
        bloctexte.classList.add('bloctexte2')
        containerbloc.classList.add('containerbloc2')

    }
})
window.addEventListener('scroll', () => {
    if (window.scrollY > 1450 && window.scrollY < 2020) {
        voyage.classList.add('scroll3')
    }
})
window.addEventListener('scroll', () => {
    if (window.scrollY > 2020 && window.scrollY < 2600) {
        voyage.classList.add('scroll4')
    }
})
window.addEventListener('scroll', () => {
    if (window.scrollY > 2600 && window.scrollY < 2800) {
        voyage.classList.add('scroll5')
    }
})
window.addEventListener('scroll', () => {
    if (window.scrollY > 2800 && window.scrollY < 2900) {
        voyage.classList.add('scroll6')
    }
})
window.addEventListener('scroll', () => {
    if (window.scrollY > 2900) {
        navette.classList.add('scroll7')
    }
})