import * as THREE from "../node_modules/three/build/three.module.js";

let canvasbloc1 = document.createElement('div');
canvasbloc1.classList.add('canvasbloc1');
document.body.appendChild(canvasbloc1);

let canvasbloc2 = document.createElement('div');
canvasbloc2.classList.add('canvasbloc2');
canvasbloc1.appendChild(canvasbloc2);

let canvas = document.createElement('div');
canvas.classList.add('divcanvas');
canvasbloc2.appendChild(canvas);

let scenebloc = document.querySelector('#scene');
scenebloc.appendChild(canvasbloc1);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 0.1, 0);
camera.position.z = 7;
camera.position.x = -3;
camera.position.y = -0.5;


const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setClearColor(0x000000, 0);


renderer.setSize(window.innerWidth * 1.8, window.innerHeight * 1.8);
canvas.appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry();
const material = new THREE.MeshStandardMaterial({
    color: 0xB92A55,
    wireframe: true,
});
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

const light = new THREE.HemisphereLight(0xE98A46, 0xB92A55, 1);
scene.add(light);

const frontLight = new THREE.DirectionalLight(0xffffff, 1);
frontLight.position.set(-200, 3000, -1500).normalize();
scene.add(frontLight);



function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.x = 100;
    sphere.rotation.y += 0.003;
    // sphere.rotation.z = 5;

    renderer.render(scene, camera);
}
animate();