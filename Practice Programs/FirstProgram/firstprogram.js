function start() {
	// set the scene size
	var WIDTH = window.innerWidth,
		HEIGHT = window.innerHeight;

	// set some camera attributes
	var VIEW_ANGLE = 45,
		ASPECT = WIDTH / HEIGHT,
		NEAR = 0.1,
		FAR = 10000;

	// get the DOM element to attach to
	// - assume we've got jQuery to hand
	var container = $('#canvas');

	// create a WebGL renderer, camera
	// and a scene
	var renderer = new THREE.WebGLRenderer();
	var camera =
		new THREE.PerspectiveCamera(
			VIEW_ANGLE,
			ASPECT,
			NEAR,
			FAR);

	// add trackball controls
	var controls = new THREE.TrackballControls( camera );
	controls.rotateSpeed = 1.0;
	controls.zoomSpeed = 1.2;
	controls.panSpeed = 0.8;
	controls.noZoom = false;
	controls.noPan = false;
	controls.staticMoving = true;
	controls.dynamicDampingFactor = 0.3;
	//controls.target.set( 0, 0, 0 );

	var scene = new THREE.Scene();

	// add the camera to the scene
	scene.add(camera);

	// the camera starts at 0,0,0
	// so pull it back
	camera.position.z = 300;

	// start the renderer
	renderer.setSize(WIDTH, HEIGHT);

	// attach the render-supplied DOM element
	container.append(renderer.domElement);

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

	var cubeGeometry = new THREE.CubeGeometry(100, 100, 100);
var cubeMaterial = new THREE.MeshLambertMaterial({ color: 0x1ec876 });
var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
 
cube.rotation.y = Math.PI * 45 / 180;
 
scene.add(cube);

	// add the sphere to the scene
	scene.add(sphere);

	// add the square to the scene
	scene.add(square);

	// create the sphere's material
	var sphereMaterial =
		new THREE.MeshLambertMaterial(
			{
			  color: 0xCC0000
			});

	// create a point light
	var pointLight =
		new THREE.PointLight(0xFFFFFF);

	// set its position
	pointLight.position.x = 10;
	pointLight.position.y = 50;
	pointLight.position.z = 130;

	// add to the scene
	scene.add(pointLight);

	// draw!
	renderer.render(scene, camera);

	// set the geometry to dynamic
	// so that it allow updates
	sphere.geometry.dynamic = true;

	// changes to the vertices
	sphere.geometry.verticesNeedUpdate = true;

	// changes to the normals
	sphere.geometry.normalsNeedUpdate = true;
}