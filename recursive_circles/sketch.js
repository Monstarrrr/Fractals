function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(0);
    stroke(255);
    noFill();
    drawCircle(300, 300, 300);
    noLoop();
}

function drawCircle(x, y, d) {
    ellipse(x, y, d);
    if (d > 5) {
        drawCircle(x + d / 2, y, d / 2);
        drawCircle(x - d / 2, y, d / 2);
        drawCircle(x, y + d / 2, d / 2);
    }
}
