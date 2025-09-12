class Student {
  constructor() {
    let name, marks;  // private variables
  }

  getName() {  // getter method
    return this.name;
  }
  setName(name) { // setter method
    this.name = name;
  }

  getMarks() {
    return this.marks;
  }
  setMarks(marks) {
    this.marks = marks;
  }
}

let stu = new Student(); // creating object
stu.setName("John"); // setting values
stu.setMarks(85);
console.log("Name: " + stu.getName() + ", Marks: " + stu.getMarks());  // getting values

let stu2 = new Student();
stu2.setName("Jane");
stu2.setMarks(92);
console.log("Name: " + stu2.getName() + ", Marks: " + stu2.getMarks());
