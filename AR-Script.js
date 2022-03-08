import * as THREE from 'https://unpkg.com/three/build/three.module.js';
import { ARButton } from 'https://unpkg.com/three/examples/jsm/webxr/ARButton.js';

var container;
var camera, scene, renderer;
var controller;

init();
animate();

function init() {

    container = document.createElement( 'div' );
    document.body.appendChild( container );

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 20 );

    var light = new THREE.HemisphereLight( 0xffffff, 0xbbbbff, 1 );
    light.position.set( 0.5, 1, 0.25 );
    scene.add( light );

    //

    renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.xr.enabled = true;
    container.appendChild( renderer.domElement );

    //

    document.body.appendChild( ARButton.createButton( renderer ) );

    //

    const map = new THREE.TextureLoader().load( 'sprite.png' );
    const material = new THREE.SpriteMaterial( { map: map });
    
    const sprite = new THREE.Sprite( material );
    scene.add( sprite );

    //

    window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

//

function animate() {

    renderer.setAnimationLoop( render );

}

function render() {

    renderer.render( scene, camera );

}