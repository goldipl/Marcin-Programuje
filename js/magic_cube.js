const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.querySelector('section.magicSquare').appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
let material = new THREE.MeshBasicMaterial({
    color: 0xF6C604,
});

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

animate = () => {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.02;
    cube.rotation.y += 0.02;

    renderer.render(scene, camera);
};

animate();

let onKeyDown = (e) => {
    // when 1 is pressed change color to red
    if (e.keyCode === 49) {
        material.color.setHex(0xff0000);
        // when 2 is pressed change color to defualt goldenrod color
    } else if (e.keyCode === 50) {
        material.color.setHex(0xF6C604);
        // when 3 is pressed change color to green color
    } else if (e.keyCode === 51) {
        material.color.setHex(0x00FF00);
    }
};

document.addEventListener('keydown', onKeyDown, false);