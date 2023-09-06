let pos;
let t;

//const a =  0.45, b = 1.8;
//const a =  1.0, b = 0.85;
//const a =  1.0, b = 0.9;
//const a = 1.25, b = 0.75;
//const a =  1.0, b = 0.0,  c = - 2.25, d = 0.2;

const A1 = - 1.8, A2 = 0.6, A3 = 0.9, A4 = 0.8, A5 = 2.2, A6 = 1.5;
const f1 = 1.2, f2 = 1.1, f3 = 3.0, f4 = 0.8, f5 = 0.5, f6 = 0.7;
const p = 3.0, q = 1.0;

setup = () => {
    const canvas = createCanvas(600, 600);
    canvas.parent("#container");
    canvas.id("p5");
    background(0);
    blendMode(ADD);
    blendMode(SCREEN);
    pos = createVector(0.1, 0.1);
    t = 0.0;
}

draw = () => {

    const s = 100;

    stroke(random(255),150,235,250);
    translate(width/2, height/2);
    scale(s);
    strokeWeight(1 / s);

    for (let i = 10; i < 80; i++) {
        // ローレンツ方程式
        // const x = (1 + a * b) * p.x - b * p.x * p.y;
        // const y = (1 - b) * p.y + b * p.x * p.x;

        // チョーサ・ゴルビツキ方程式
        // const A = a * (p.x * p.x + p.y * p.y) + b * p.x * (p.x * p.x + 3.0 * p.y * p.y) + c;
        // const x = A * p.x + d * (p.x * p.x - p.y * p.y);
        // const y = A * p.y - 2 * d * p.x * p.y;

        // Discrete Universe
        const x = A1 * (sin(f1 * pos.x) ** p) 
            + A2 * (cos(f2 * pos.y) ** q) 
            + A3 * (sin(f3 * t) ** p);
        
        const y = A4 * (cos(f4 * pos.x) ** q) 
            + A5 * (sin(f5 * pos.y) ** p) 
            + A6 * (cos(f6 * t) ** q); 

        point(x, - y);
        t += 0.001;

        pos.x = x;
        pos.y = y;
    }
}
