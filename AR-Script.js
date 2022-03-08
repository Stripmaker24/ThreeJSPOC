import * as THREE from 'https://unpkg.com/three/build/three.module.js';
import { ARButton } from 'https://unpkg.com/three/examples/jsm/webxr/ARButton.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const map = new THREE.TextureLoader().load( 'sprite.png' );
const material = new THREE.SpriteMaterial( { map: map } );

const sprite = new THREE.Sprite( material );
scene.add( sprite );

camera.position.z = 5;

function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
};

animate();