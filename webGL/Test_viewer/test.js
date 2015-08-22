var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 50, window.innerWidth/window.innerHeight, 0.1, 1000 );
			//(field of view,aspect{width/height},near,far) Perspective Projection

			var renderer = new THREE.WebGLRenderer();//renderer start
			var controls = new THREE.OrbitControls( camera, renderer.domElement );//orbit controller on
			
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

			var geometry = new THREE.SphereGeometry(1,20,20);//shape
			var geometry2 = new THREE.BoxGeometry(3,3,3);
			var material = new THREE.MeshLambertMaterial({color: 0xffbe54, wireframe: false});//texture
			var material2 = new THREE.MeshBasicMaterial({color: 0x0000ff, wireframe: true});
			
			var cir1 = new THREE.Mesh(geometry, material);
			var cir2 = new THREE.Mesh(geometry2, material2);
			scene.add(cir1);
			scene.add(cir2);
			//---------------------------------------------------------------------//

			var HemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6);
			HemiLight.color.setHSL( 0.6, 1, 0.6 );
			HemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
			HemiLight.position.set(1, 1, 1); // Position the light source at (x, y, z).
			scene.add(HemiLight); // Add the light source to the scene.

			var directLight = new THREE.DirectionalLight(0xffffff,1);//(color, intensity, distance)
			directLight.position.set(1, 1, 1); // Position the light source at (x, y, z).
			scene.add(directLight); // Add the light source to the scene.
			
			camera.position.z = 6;//z index

			var render = function () {//cube animation start
				requestAnimationFrame( render );

				cir1.rotation.y += 0.01;			
				cir2.rotation.y += 0.01;

				renderer.render(scene, camera);
			};


			render();