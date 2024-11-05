import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
scene.background = new THREE.Color( 0xffffff );

camera.position.z = 5;

const light = new THREE.PointLight( 0xffffff, 60, 100, 0 );
light.position.set( 10, 10, 10 );
scene.add( light );
const sphereSize = 1;
const pointLightHelper = new THREE.PointLightHelper( light, sphereSize, 0xffff00 );
scene.add( pointLightHelper );
//const directionalLight = new THREE.DirectionalLight( 0xffffff, 15 );
//scene.add( directionalLight );


const loader = new GLTFLoader();
loader.load(
    'porshe/scene.gltf', 
    function (gltf) {
        scene.add(gltf.scene);
        gltf.scene.position.set(0, 0, 0); 
    },
    undefined,
    function (error) {
        console.error('Wystąpił błąd przy ładowaniu modelu:', error);
    }
);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.minDistance = 2;
controls.maxDistance = 10;


controls.minPolarAngle = 0;           
controls.maxPolarAngle = Math.PI / 2; 


camera.position.z = 5;


function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();