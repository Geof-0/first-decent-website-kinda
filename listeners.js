// global event listeners

let mousePos = {}

document.addEventListener('mousemove', (e) => {
    mousePos['x'] = e.clientX + window.pageXOffset;
    mousePos['y'] = e.clientY + window.pageYOffset;
})