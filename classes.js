class Student {
  constructor(sid, sname, grade) {
    this.sid = sid;
    this.sname = sname;
    this.grade = grade;
  }

  display() {
    console.log(this.sid, this.sname, this.grade);
  }
}

let stu = new Student(1, "Alice", "A");
stu.display(); // ID: 1, Name: Alice, Grade: A

let stu2 = new Student(2, "Bob", "B");
stu2.display(); // ID: 2, Name: Bob, Grade: B

let stu3 = new Student(3, "Charlie", "A+");
stu3.display(); // ID: 3, Name: Charlie, Grade: A+
