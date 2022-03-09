import * as THREE from 'https://unpkg.com/three/build/three.module.js';
import { ARButton } from 'https://unpkg.com/three/examples/jsm/webxr/ARButton.js';

import MainController from "./Controller/MainController.js";

var container;
var camera, scene, renderer;
var controller;
const material = new THREE.MeshBasicMaterial({color:0xC0C0C0});
const cubeWidth = 1;
const cubeDepth = 1;
let position = -4;
const cubeGroup = new THREE.Group();

init();
animate();

function init() {

    controller = new MainController();


    // call this to get JSON data from maincontroller
    controller.readJson()


    container = document.createElement( 'div' );
    document.body.appendChild( container );

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

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
    for (const [key, value] of Object.entries(controller.graphdata)) {
        makeCube(value)
    }

    scene.add(cubeGroup);
    camera.position.set(0,5,10);

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

function makeCube(item, index){
    var geometry = new THREE.BoxGeometry(cubeWidth, item, cubeDepth);
    var cube = new THREE.Mesh(geometry, material);
    cube.position.set(position, 0+(item/2), 0);
    console.log(cube.position)
    position += 2;
    cubeGroup.add(cube);
}

function render() {

    renderer.render( scene, camera );

}