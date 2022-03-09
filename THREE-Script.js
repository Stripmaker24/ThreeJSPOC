//IMPORTS
import * as THREE from 'https://unpkg.com/three/build/three.module.js';

//TEMP_DATA

const data = [2,10,5,6,3,8,7]
//SET_UP
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 1000 );

//RENDERS
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//CUBES
const cubeGroup = new THREE.Group();
const cubeWidth = 1;
const cubeDepth = 1;
let position = -4;


generateBarChart()

function generateBarChart(){

	let counter = 0;
	data.forEach((e) => {
		makeCube(e);
		counter++;
	})

	//SIDELINES left
	const terial = new THREE.MeshBasicMaterial();
	var box = new THREE.BoxGeometry(0, (counter * 1.5), 1);
	var sidetwo = new THREE.Mesh(box, terial);
	sidetwo.position.set(-5.5, 5.2, 0);
	cubeGroup.add(sidetwo);

	//SIDELINES right
	const mat = new THREE.MeshBasicMaterial();
	var bla = new THREE.BoxGeometry((counter * 2), 0.1, 1);
	var sideone = new THREE.Mesh(bla, mat);
	sideone.position.set(1.5, 0, 0);
	cubeGroup.add(sideone);

	
	

}

scene.add(cubeGroup);
camera.position.set(0,5,10);
//ANIMATION
function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
};

animate();

function makeCube(item, index){
	const material = new THREE.MeshBasicMaterial();
	material.color.setHex("0x" + Math.floor(Math.random()*16777215).toString(16))

    var geometry = new THREE.BoxGeometry(cubeWidth, item, cubeDepth);
    var cube = new THREE.Mesh(geometry, material);
    cube.position.set(position, 0.1+(item/2), 0);
    console.log(cube.position)
    position += 2;
    cubeGroup.add(cube);
}