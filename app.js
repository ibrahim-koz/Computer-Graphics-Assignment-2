import {Init} from "./init.js"
import {Triangle, Rectangle, Circle} from "./shape.js"
import * as vec3 from "./koz-matrix/vec3.js"
import {Camera} from "./camera.js"

let renderingContext;
let camera;
let control;

function keyboard(event) {
    if (event.key === "1") {
        control = 1
    }

    if (event.key === "2") {
        control = 2
    }

    if (event.key === "3") {
        control = 3
    }

}

function init() {
    renderingContext = new Init("scene");

    camera = new Camera(vec3.fromValues(0, 0, 2), vec3.fromValues(0, 0, 0), vec3.fromValues(0, -10, +10));

    document.addEventListener("keydown", keyboard)

    let squareVertices = new Rectangle(0.8, 0.8, [0, 1, 0, 1], renderingContext.gl)

    squareVertices.rotate(0, 0, 0)

    let bigCircles = []
    for (let i = 0; i < 4; i++)
        bigCircles.push(new Circle(0.4, [1, 0, 0, 1], renderingContext.gl))

    let smallCircles = []
    for (let i = 0; i < 8; i++)
        smallCircles.push(new Circle(0.1, [1, 0, 0, 1], renderingContext.gl))

    bigCircles[0].move(0.4, 0.4, 0)
    bigCircles[1].move(-0.4, 0.4, 0)
    bigCircles[2].move(-0.4, -0.4, 0)
    bigCircles[3].move(0.4, -0.4, 0)

    for (let i = 0; i < 4; i++)
        renderingContext.addPositionColorBuffer(bigCircles[i]);

    renderingContext.addPositionColorBuffer(squareVertices)

    smallCircles[0].move(0.5, 0.0, 0)
    smallCircles[1].move(0.4, 0.4, 0)
    smallCircles[2].move(0.0, 0.5, 0)
    smallCircles[3].move(-0.4, 0.4, 0)
    smallCircles[4].move(-0.5, 0.0, 0)
    smallCircles[5].move(-0.4, -0.4, 0)
    smallCircles[6].move(0.0, -0.5, 0)
    smallCircles[7].move(0.4, -0.4, 0)

    for (let i = 0; i < 8; i++)
        renderingContext.addPositionColorBuffer(smallCircles[i]);

    animate();
}

function rotate() {
    let squareVertices = new Rectangle(0.8, 0.8, [0, 1, 0, 1], renderingContext.gl)

    squareVertices.rotate(0, 0, 0.1)
    


    let bigCircles = []
    for (let i = 0; i < 4; i++)
        bigCircles.push(new Circle(0.4, [1, 0, 0, 1], renderingContext.gl))

    let smallCircles = []
    for (let i = 0; i < 8; i++)
        smallCircles.push(new Circle(0.1, [1, 0, 0, 1], renderingContext.gl))

    bigCircles[0].move(0.4, 0.4, 0)
    bigCircles[1].move(-0.4, 0.4, 0)
    bigCircles[2].move(-0.4, -0.4, 0)
    bigCircles[3].move(0.4, -0.4, 0)

    for (let i = 0; i < 4; i++)
        renderingContext.addPositionColorBuffer(bigCircles[i]);

    renderingContext.addPositionColorBuffer(squareVertices)

    smallCircles[0].move(0.5, 0.0, 0)
    smallCircles[1].move(0.4, 0.4, 0)
    smallCircles[2].move(0.0, 0.5, 0)
    smallCircles[3].move(-0.4, 0.4, 0)
    smallCircles[4].move(-0.5, 0.0, 0)
    smallCircles[5].move(-0.4, -0.4, 0)
    smallCircles[6].move(0.0, -0.5, 0)
    smallCircles[7].move(0.4, -0.4, 0)

    for (let i = 0; i < 8; i++)
        renderingContext.addPositionColorBuffer(smallCircles[i]);

    animate();
}


function animate() {
    if (control === 1) {

    } else if (control === 2) {

    } else if (control === 3) {
    }

    renderingContext.drawScene(camera)
    requestAnimationFrame(animate);
}

window.onload = function () {
    init();
};


