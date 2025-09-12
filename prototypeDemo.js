class Employee {
  constructor(eid, ename) {
    this.eid = eid;
    this.ename = ename;
  }
}

// Adding a property to the prototype
Employee.prototype.sal = 50000;

Employee.prototype.display = function() {
    console.log(this.eid, this.ename, this.sal);
}

emp1Obj = new Employee(101, "David");
emp1Obj.display(); // 101 David 50000
// console.log(emp1Obj.eid, emp1Obj.ename, emp1Obj.sal);

emp2Obj = new Employee(102, "Smith");
emp2Obj.display(); // 102 Smith 50000
// console.log(emp2Obj.eid, emp2Obj.ename, emp2Obj.sal);
