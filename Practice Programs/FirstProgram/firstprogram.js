var scene;
var camera;
var container;
var renderer;

function start() {
	init();
	addCube();
	animate();
}

function init() {
	// Set the scene size
	var WIDTH = window.innerWidth,
		HEIGHT = window.innerHeight;

	// Set some camera attributes
	var VIEW_ANGLE = 45,
		ASPECT = WIDTH / HEIGHT,
		NEAR = 0.1,
		FAR = 10000;

	// Get the canvas container
	container = $('#canvas');

	// Create the renderer
	renderer = new THREE.WebGLRenderer();
	renderer.setSize(WIDTH, HEIGHT);

	// Create the camera
	camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
	// the camera starts at 0,0,0 so pull it back so we can see the scene
	camera.position.z = 300;

	// add trackball controls
	/*var controls = new THREE.TrackballControls( camera );
	controls.rotateSpeed = 1.0;
	controls.zoomSpeed = 1.2;
	controls.panSpeed = 0.8;
	controls.noZoom = false;
	controls.noPan = false;
	controls.staticMoving = true;
	controls.dynamicDampingFactor = 0.3;*/

	//controls.target.set( 0, 0, 0 );

	// Create the scene
	scene = new THREE.Scene();

	// Add the camera to the scene
	scene.add(camera);


	// attach the render-supplied DOM element
	container.append(renderer.domElement);


	/* Lights */
	// create a point light
	var pointLight =
		new THREE.PointLight(0xFFFFFF);

	// set its position
	pointLight.position.x = 10;
	pointLight.position.y = 50;
	pointLight.position.z = 130;

	// add to the scene
	scene.add(pointLight);
}

function addCube() {
	var cubeGeometry = new THREE.CubeGeometry(100, 100, 100);
	var cubeMaterial = new THREE.MeshLambertMaterial({ color: 0x1ec876 });
	var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
 
	cube.rotation.y = Math.PI * 45 / 180;
	 
	scene.add(cube);
}

function animate() {
	renderer.render(scene, camera);
}