//Question 1
// let num;
// const checkNum = (num) => {
//     try {
//         console.log(typeof(num));
//         if (typeof (num) !== "number") {
//             throw new Error('Given input is not a number');
//         } else {
//             console.log("Num: ", num);
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }

// checkNum(10.8787);

//Question 2
// let a, b;
// const checkNum = (a, b) => {
//     try {
//         if (b === 0) {
//             throw new Error("The number is zero");
//         }
//         else {
//             console.log("a: ",a, "b: ", b);
//         }
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// checkNum(12,"0");

//Question 3
// class Person{
//     constructor(name, age, country){
//         this.name = name;
//         this.age = age;
//         this.country = country;
//     }

//     displayDetails(){
//         console.log("Name:",this.name);
//         console.log("Age:",this.age);
//         console.log("Country:",this.country);
//     }
// };

// let a = "Samarth";
// let b = 23;
// let c = "India";

// const p1 = new Person(a,b,c);
// p1.displayDetails();

//Question 4
// class Shape {
//     constructor() {

//     }
//     area() {

//     }
// }

// class Circle extends Shape {

//     constructor(radius) {
//         super();
//         this.radius = radius;
//     }
//     area() {
//         console.log("Area of Circle: ", (3.14 * this.radius * this.radius));
//     }

// }

// class Triangle extends Shape {
//     constructor(width, height) {
//         super();
//         this.width = width;
//         this.height = height;
//     }
//     area() {
//         console.log("Area of Triangle: ", (0.5 * this.width * this.height));
//     }
// }

// const c1 = new Circle(2);
// const t1 = new Triangle(2, 4);

// c1.area();
// t1.area();

