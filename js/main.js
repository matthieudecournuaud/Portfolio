var scene = document.querySelector('#scene');
var parallaxInstance = new Parallax(scene);

var image = document.querySelector('.BgimgstarsN2');
new simpleParallax(image, {
    delay: 0.8
});

let voyage = document.querySelector('#containernavette');
let navette = document.querySelector('#navette');

let containertexte = document.querySelector('.containertexte');
let containerbloc = document.querySelector('.containerbloc');
let bloctexte = document.querySelector('.bloctexte');

let containertexte3 = document.querySelector('.containertexte3');
let containerbloc3 = document.querySelector('.containerbloc3');
let bloctexte3 = document.querySelector('.bloctexte3');

//----------------------------------------------animation voyage ----------------------------------------------------------//

voyage.style.transform = `translateY(${convertpxtovh(window.scrollY)}vh)`;

let scrollAnimate = 60 + convertpxtovh(window.scrollY);
voyageAnimate(scrollAnimate, 3000);

window.addEventListener('scroll', () => {
    scrollAnimate = 60 + convertpxtovh(window.scrollY);

    voyageAnimate(scrollAnimate, 3000);

})

function convertpxtovh(px) {
    return 100 * (px / window.innerHeight);
}

function voyageAnimate(position2, duree) {
    voyage.animate([
        { transform: `translateY(${position2}vh)` }
    ],
        {
            duration: duree,
            fill: "forwards",
        })
};
//----------------------------------------------animation ballons ----------------------------------------------------------//

let ballon1 = document.querySelector('.ballon01');
let ballon2 = document.querySelector('.ballon02');
let ballon3 = document.querySelector('.ballon03');

window.addEventListener('scroll', () => {
    if (window.scrollY > 800 && window.scrollY < 1500) {
        containertexte.classList.add('containertexte2');
        containerbloc.classList.add('containerbloc2');
        bloctexte.classList.add('bloctexte2');
    }
    if (window.scrollY > 1550 && window.scrollY < 2000) {
        containertexte3.classList.add('containertexte4');
        containerbloc3.classList.add('containerbloc4');
        bloctexte3.classList.add('bloctexte4');
    }
    if (window.scrollY > 2600) {
        ballon1.classList.add('ballon');
        ballon2.classList.add('ballon2');
        ballon3.classList.add('ballon3');
    }
})




//----------------------------------------------animation musique ----------------------------------------------------------//





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