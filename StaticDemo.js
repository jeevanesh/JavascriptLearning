class Test {
  static a = 10; // Static variable
  b = 20; // non-static variable

  static m1() {
    // static method{
    console.log("This m1 is static method");
  }

  m2() {
    // non-static method
    console.log("This m2 is non-static method");
  }
}

// Accessing static members without creating an object
console.log(Test.a);
// console.log(Test.b); // undefined
Test.m1();

// Creating an object to access non-static members
let t = new Test();
console.log(t.b);
t.m2();