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

let containertexte3 = document.querySelector('.containertexte3');
let containerbloc3 = document.querySelector('.containerbloc3');
let bloctexte3 = document.querySelector('.bloctexte3');

let ballon1 = document.querySelector('.ballon0');
let ballon2 = document.querySelector('.ballon02');
let ballon3 = document.querySelector('.ballon03');




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
    if (window.scrollY > 1560) {
        containertexte3.classList.add('containertexte4')
        bloctexte3.classList.add('bloctexte4')
        containerbloc3.classList.add('containerbloc4')

    }
})
window.addEventListener('scroll', () => {
    if (window.scrollY > 1250 && window.scrollY < 1820) {
        voyage.classList.add('scroll3')
    }
})
window.addEventListener('scroll', () => {
    if (window.scrollY > 1820 && window.scrollY < 2400) {
        voyage.classList.add('scroll4')
    }
})
window.addEventListener('scroll', () => {
    if (window.scrollY > 2400 && window.scrollY < 2800) {
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
        ballon1.classList.add('ballon')
        ballon2.classList.add('ballon2')
        ballon3.classList.add('ballon3')
    }
});