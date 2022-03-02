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

// let scrolltop = window.pageYOffset // get number of pixels document has scrolled vertically 
// // let referent = "";
// window.addEventListener('scroll', () => {
//     if (scrolltop > 1) {
//         voyage.classList.add('scroll') // move bubble1 at 20% of scroll rate
//     }
//     console.log(voyage);
// })

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
    if (window.scrollY > 1450 && window.scrollY < 1820) {
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

const sectionmusique = document.querySelector('#containermusique');
const articlemusique = document.createElement('article');
articlemusique.classList.add('columnPlay');
let tab = ["basse", "batterie", "clochettes", "Pipa", "techno", "voices"];


for (let i = 0; i < tab.length; i++) {

    const instrument = tab[i];

    let audiofile = new Audio(`./musique/${instrument}.mp3`);

    let start = false;

    let containercircle1 = document.createElement('div');
    containercircle1.classList.add('containercircle1');

    let circle1 = document.createElement('div');
    circle1.classList.add('circle1');

    let containercircle2 = document.createElement('div');
    containercircle2.classList.add('containercircle2');

    let circle2 = document.createElement('div');
    circle2.classList.add('circle2');

    let playpause = document.createElement('div');
    playpause.classList.add('playpause');


    containercircle1.addEventListener('click', function () {

        if (start == false) {
            playpause.style.animationName = 'son2';
            playpause.style.animationDuration = '1.5s';
            playpause.style.animationIterationCount = 'infinite';
            circle1.style.animationName = 'son1';
            circle1.style.animationDuration = '1.5s';
            circle1.style.animationIterationCount = 'infinite';
            audiofile.play();
            start = true;
        } else {
            playpause.style.animationName = '';
            circle1.style.animationName = '';
            audiofile.pause();
            start = false;
        }
    });

    sectionmusique.appendChild(articlemusique);
    articlemusique.appendChild(containercircle1);
    containercircle1.appendChild(circle1);
    circle1.appendChild(containercircle2);
    containercircle2.appendChild(circle2);
    circle2.appendChild(playpause);
};
let audiomorceau = new Audio('./musique/morceau.mp3');
let anim = document.querySelector('#anim');
let lottie = document.querySelector('#lottie');
let go = false;
console.log(lottie);

if (typeof audiomorceau.loop == 'boolean') {
    audiomorceau.loop = true;
}
else {
    audiomorceau.addEventListener('ended', function () {
        this.currentTime = 0;
        this.play();
    }, false);
}

let gradientmove = document.querySelector('#containermusique');
anim.addEventListener('click', () => {

    if (go == false) {
        gradientmove.style.animationName = 'gradientmove';
        gradientmove.style.animationDuration = '10s';
        gradientmove.style.animationIterationCount = 'infinite';

        audiomorceau.play();
        lottie.play();
        go = true;
    } else {
        gradientmove.style.animationName = '';
        audiomorceau.pause();
        lottie.pause();
        go = false;
    }
})