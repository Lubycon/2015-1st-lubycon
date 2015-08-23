var container, stats;
var camera, scene, renderer;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;


running();
animate();


function running() {

	container = document.createElement( 'div' );
	document.body.appendChild( container );

	camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 5, 1000 );
	camera.position.z = 70;

	// scene

	scene = new THREE.Scene();

	var HemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.5);
		HemiLight.color.setHSL( 0.6, 1, 0.6 );
		HemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
		HemiLight.position.set(1, 0, 1); // Position the light source at (x, y, z).
		scene.add(HemiLight); // Add the light source to the scene.

	var directLight = new THREE.DirectionalLight(0xffffff,1,100);//(color, intensity, distance)
		directLight.position.set(1, 1, 1); // Position the light source at (x, y, z).
		scene.add(directLight); // Add the light source to the scene.

	// model

	var onProgress = function ( xhr ) {
		if ( xhr.lengthComputable ) {
			var percentComplete = xhr.loaded / xhr.total * 100;
			console.log( Math.round(percentComplete, 2) + '% downloaded' );
		}
	};

	var onError = function ( xhr ) {
		console.log("error");
	};

	THREE.Loader.Handlers.add( /\.dds$/i, new THREE.DDSLoader() );
	var loader = new THREE.OBJMTLLoader();
	loader.load( 'obj/ring.obj', '', function ( object ) {

		object.position.y = 0;
		scene.add( object );

	}, onProgress, onError );

	//

	renderer = new THREE.WebGLRenderer();
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	container.appendChild( renderer.domElement );
	var controls = new THREE.OrbitControls( camera, renderer.domElement );

	//

	window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {

	windowHalfX = window.innerWidth / 2;
	windowHalfY = window.innerHeight / 2;

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

}

//

function animate() {

	requestAnimationFrame( animate );
	render();

}

function render() {

	camera.lookAt( scene.position );
	renderer.render( scene, camera );

}
