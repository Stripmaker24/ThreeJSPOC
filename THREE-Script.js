//IMPORTS
import * as THREE from 'https://unpkg.com/three/build/three.module.js';

//TEMP_DATA
const data = [2,10,5,6,3,8,7]

//SET_UP
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//RENDERS
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//CUBES
const cubeGroup = new THREE.Group();
const material = new THREE.MeshBasicMaterial({color:0xC0C0C0});
const cubeWidth = 1;
const cubeDepth = 1;
let position = -4;

data.forEach(makeCube)

scene.add(cubeGroup);
camera.position.set(0,5,10);
//ANIMATION
function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
};

animate();

function makeCube(item, index){
    var geometry = new THREE.BoxGeometry(cubeWidth, item, cubeDepth);
    var cube = new THREE.Mesh(geometry, material);
    cube.position.set(position, 0+(item/2), 0);
    console.log(cube.position)
    position += 2;
    cubeGroup.add(cube);
}