class Animal {
  constructor(color) {
    this.color = color;
  }

  printColor() {
    console.log(this.color);
  }
}

class Dog extends Animal {
  constructor(color, food) {
    super(color); // calling parent class constructor
    this.food = food;
  }

  eating() {
    console.log("Eating: " + this.food);
  }

  display() {
    this.printColor(); // calling parent class method
    // this.eating();
  }
}

d = new Dog("Black", "Dog Food");
d.display();
d.eating();
