import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { gsap } from "gsap";
import * as OIMO from "oimo";
// import diceModel from "../assets/models/dice.glb";

export default function Dice() {
  const diceRef = useRef(null);
  useEffect(() => {
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Debug Params

    const params = {};
    params.rotationSpeed = 0;

    // OIMO
    const world = new OIMO.World({
      timestep: 1 / 60,
      iterations: 8,
      broadphase: 2,
      worldscale: 1,
      random: true,
      info: false,
      gravity: [0, -4.8, 0],
    });

    const ground = world.add({
      size: [20, 0.1, 20],
      pos: [0, -0.4, 0],
      density: 1,
    });

    const diceOptions = {
      type: "box",
      size: [0.1, 0.1, 0.1],
      pos: [0, 2, 0],
      rot: [Math.random() * 360, Math.random() * 360, Math.random() * 360],
      move: true,
      density: 1,
      friction: 0.2,
      restitution: 0.2,
      belongsTo: 1,
      collideWith: 0xffffffff,
      isKinematic: true,
    };
    const dice = world.add(diceOptions);

    //Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x00ffff);

    //Camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(1, 0, 0.5);

    /*
     * Objects
     */
    let obj;
    const loader = new GLTFLoader();
    loader.load("./models/dice.glb", (gltf) => {
      obj = gltf.scene;
      obj.children = obj.children.map((child) => {
        if (child.type === "Mesh") {
          child.castShadow = true;
          // child.receiveShadow=true;
        }
        return child;
      });
      scene.add(obj);
    });
    document.addEventListener("dblclick", () => {
      if (Math.hypot(dice.position.x - 0, dice.position.z - 0) > 3) {
        dice.position.x = 0;
        dice.position.z = 0;
      }
      gsap.to(dice.position, {
        duration: 1,
        y: 2,
      });
      dice.angularVelocity.set(
        Math.random() * 10 + 10,
        Math.random() * 10 + 10,
        Math.random() * 10 + 10
      );
    });

    // //Cube
    // const geometry = new THREE.BoxBufferGeometry(0.3,0.3,0.3);
    // const material = new THREE.MeshStandardMaterial( { color: 0xff0000} );
    // const cube = new THREE.Mesh( geometry, material );
    // cube.position.set(0,0.8,0)
    // cube.castShadow=true
    // scene.add( cube );

    //Plane
    const planeGeometry = new THREE.PlaneBufferGeometry(20, 20);
    const planeMaterial = new THREE.MeshStandardMaterial({
      color: 0x00ffff,
      roughness: 0.7,
    });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -Math.PI / 2;
    plane.position.set(0, -0.5, 0);
    plane.receiveShadow = true;
    scene.add(plane);

    /*
     * Lights
     */

    //Directional Lights
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(2, 2, 2);
    directionalLight.shadow.camera.far = 12;
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0xffffff, 10);
    pointLight.castShadow = true;
    pointLight.position.set(0, 5, 0);
    pointLight.shadow.camera.far = 7;
    scene.add(pointLight);

    //Ambient Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 10);
    scene.add(ambientLight);

    /*
     * Helper
     */

    //Axes Helper
    // const axesHelper = new THREE.AxesHelper( 5 );
    // scene.add( axesHelper );

    // // Light Shadow
    //   const lightHelper  = new THREE.CameraHelper(directionalLight.shadow.camera);
    //   scene.add(lightHelper);

    //Renderer
    const domElement = diceRef?.current;
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas: domElement,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Shadows
    // directionalLight.castShadow = true;
    // cube.castShadow = true;
    // // cube.receiveShadow = true;
    // plane.receiveShadow = true;

    //Controls
    const controls = new OrbitControls(camera, domElement);
    controls.update();

    //Animate Function
    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      world.step();
      if (obj) {
        obj.position.copy(dice.getPosition());
        obj.quaternion.copy(dice.getQuaternion());
        camera.lookAt(obj.position);
      }
      // plane.position.copy(ground.getPosition());
      renderer.render(scene, camera);
    }

    animate();
  }, []);
  return (
    <>
      <canvas ref={diceRef} className="dice"></canvas>
    </>
  );
}