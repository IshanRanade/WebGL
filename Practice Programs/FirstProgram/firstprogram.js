// Global variables
var renderer;
var camera;
var container;
var scene;
var cameraControls;

function start() {
	init();
	addCube();
	animate();
}

function init() {
	// Set the scene size
	var WIDTH = window.innerWidth, HEIGHT = window.innerHeight;

	// Set some camera attributes
	var VIEW_ANGLE = 45, ASPECT = WIDTH / HEIGHT, NEAR = 0.1, FAR = 10000;

	// Get the container element
	container = $('#canvas');

	// Set up the camera
	camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);

	// Add camera controls
	/*cameraControls = new THREE.TrackballControls( camera, renderer.domElement );
	cameraControls.dynamicDampingFactor = 0.3;
	cameraControls.target.set(0, 0, 0);*/

	// Create the renderer
	renderer = new THREE.WebGLRenderer();
	renderer.setSize(WIDTH, HEIGHT);
	container.appendChild(renderer.domElement);

	// Create the scene
	scene = new THREE.Scene();

	scene.add(camera);
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


	// attach the render-supplied DOM element
	/*container.append(renderer.domElement);

	// set up the sphere vars
	var radius = 50,
		segments = 16,
		rings = 16;

	// create a new mesh with
	// sphere geometry - we will cover
	// the sphereMaterial next!
	var sphere = new THREE.Mesh(

	  	new THREE.SphereGeometry(
			radius,
			segments,
			rings),

			sphereMaterial);

	var squareGeometry = new THREE.Geometry(); 
	squareGeometry.vertices.push(new THREE.Vector3(-50.0,  1.0, 0.0)); 
	squareGeometry.vertices.push(new THREE.Vector3( 1.0,  1.0, 0.0)); 
	squareGeometry.vertices.push(new THREE.Vector3( 1.0, -1.0, 0.0)); 
	squareGeometry.vertices.push(new THREE.Vector3(-1.0, -1.0, 0.0)); 
	squareGeometry.faces.push(new THREE.Face3(0, 1, 2)); 
	squareGeometry.faces.push(new THREE.Face3(0, 2, 3));

	var square = new THREE.Mesh(squareGeometry);

	

	// add the sphere to the scene
	scene.add(sphere);

	// add the square to the scene
	scene.add(square);

	// create the sphere's material
	var sphereMaterial =
		new THREE.MeshLambertMaterial(
			{
			  color: 0xCC0000
			});*/


	// set the geometry to dynamic
	// so that it allow updates
	/*sphere.geometry.dynamic = true;

	// changes to the vertices
	sphere.geometry.verticesNeedUpdate = true;

	// changes to the normals
	sphere.geometry.normalsNeedUpdate = true;*/
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