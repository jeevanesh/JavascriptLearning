class Shape {
    draw() {
        return "I am generic shape";
    }
}

class Square extends Shape {
    draw() {
        return "I am a square";
    }           
}

class Circle extends Shape {
    draw() {
        return "I am a circle";
    }
}

let s = new Shape();
console.log(s.draw()); // I am generic shape

s = new Square();
console.log(s.draw()); // I am a square

s = new Circle();
console.log(s.draw()); // I am a circle

