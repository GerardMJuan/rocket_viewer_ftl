// libraries
import PLYLoader from './../../../../libraries/PLYLoader.js';

var THREE = require('three');
var TrackballControls = require('three-trackballcontrols');

export function obtainBlobUrl(blob) {

    var file = blob[0];
    var blob_url = window.URL.createObjectURL(file);
    return blob_url;
}

export function initScene(callback) {

    var container = document.getElementById("container-viewer");

    // SCENE
    
    var scene = new THREE.Scene();

    // CAMERA
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.01, 10000000);
    // field of view (fov) [º], aspect ratio (width/height), far clip plane, near clip plane
    camera.position.set(0, 0, 100);
    camera.lookAt(scene.position);
    scene.add(camera);

    // LIGHTS

    // point light that will follow the camera movement to light uniformly the model 
    // (camera has to be a child of scene)
    var light = new THREE.PointLight(0xffffff, 1);
    camera.add(light);

    // RENDERER

    var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 1);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // CONTROLS

    // to rotate the camera and zoom in/out and pan the 3D objects of the scene
    var cameraControl = new TrackballControls(camera, container);

    cameraControl.rotateSpeed = 5;
    cameraControl.zoomSpeed = 5;
    cameraControl.panSpeed = 1;
    cameraControl.staticMoving = true;

    // RESIZE WINDOW

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        cameraControl.handleResize();

        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener('resize', onWindowResize, false);

    // AXES

    // container
    var containerAxes = document.getElementById('container-axes');
    var insetWidth = 150;
    var insetHeight = 150;
    containerAxes.width = insetWidth;
    containerAxes.height = insetHeight;
    // renderer
    var rendererAxes = new THREE.WebGLRenderer({ alpha: true });
    rendererAxes.setClearColor(0x000000, 0);
    containerAxes.appendChild(rendererAxes.domElement);
    // scene
    var sceneAxes = new THREE.Scene();
    //camera
    var cameraAxes = new THREE.PerspectiveCamera(50, insetWidth / insetHeight, 1, 1000);
    // field of view (fov) [º], aspect ratio (width/height), far clip plane, near clip plane
    cameraAxes.up = camera.up;
    // axes
    var axes = new THREE.AxisHelper(100);
    sceneAxes.add(axes);


    // RENDER VIEW 

    function renderView() {
        cameraControl.update();

        // copy position of the camera into cameraAxes
        cameraAxes.position.copy(camera.position);
        cameraAxes.position.setLength(300);
        cameraAxes.lookAt(sceneAxes.position);

        renderer.render(scene, camera);
        rendererAxes.render(sceneAxes, cameraAxes);

        requestAnimationFrame(renderView);
    }

    renderView();

    callback(scene); // scene has been initialized
}

export function loadPLY(scene, url, callback) {

    delete3DOBJ(scene, "ply_mesh");

    // LOADER 
    var loader = new THREE.PLYLoader();

    loader.load(url, function (geometry) {
        geometry.computeVertexNormals();

        var material = new THREE.MeshLambertMaterial({
            color: 0xffffff
        });

        var mesh = new THREE.Mesh(geometry, material);
        mesh.name = "ply_mesh";
        scene.add(mesh);

        callback(true); // mesh has been loaded
    });
}

function delete3DOBJ(scene, objName) {
    var selectedObject = scene.getObjectByName(objName);
    scene.remove(selectedObject);
}