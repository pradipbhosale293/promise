// // [
//     // Write a JavaScript program to sort the items of an array.
// // Sample array  
//   var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// // var  arr2 = arr1.filter((x)=>(-x, x));
// // console.log(arr2)
// // Sample Output : -4,-3,1,2,3,5,6,7,8
// arr2 = arr1.filter(item=>item>0).reverse();
// arr3 = arr1.filter(item=>item<0);
// arr4 = arr1.sort();
// console.log(arr4)
// function add(num1 =12, num2=25){
//   console.log(num1 + num2);
// }

// add(22,45);
// var test2 = `test to 
// angular pune`
// console.log(test2)
// function fun1() {
//   console.log('Hi am Priti Kadam')
// }fun1()
// fun2 = function () {
//   console.log("i am pradip Bhosale")
// }
// fun2();
// fun3 = ((dt)=>{
//   console.log('I Love U' + dt)
// })
// fun3('cts');
// fun4 = (dt,dt1)=> 'Heloo' + dt + dt1;
// console.log(fun4('Angular', 'Pradip'));
// (()=>{
  // console.log('I am Pradip bhosale angular Developer')


// })();

// ()=>{
//   console.log('Hello angular');
// }
// fun5 = setInterval(() => {
//   console.log(' Hi angular')
// }, 2000);
// clearInterval(fun5);
//  class test{
//    constructor(fName, lName){
//      this.fName = fName;
//      this.lName = lName
//    }
//  }
//  console.log(new test('Pradip','Bhosale'));
// function add(num1=12,num2=22) {
//   console.log(num1 + num2)
// }
// add();
// add(23,46);
// function fun1() {
//   console.log("I am Workin In Angular ")
// }fun1();
// fun2 = function () {
//   console.log('I am Working with java Script')12
// }
// fun2();
// fun3 = (dt)=>{
//   console.log('I am Pradip Bhosale' + dt)
// }
// fun3('Hello');
// fun4 = (dt)=> "hello" + dt
// console.log(fun4('Angular'));
// fun4 = (dt,dt1)=> "Hello" + dt +dt1;
// console.log(fun4('Angular',"java"))

// var obj ={num:12};
// var stud = function (a,b,c) {
//   console.log(this.num +a +b +c)
// }
// console.log(stud.call(obj, 12,15,16));
// console.log(stud.apply(obj, [12,15,16]));
// var stud={
//   fName:"Pradip",
//   lName:"Bhosale",
//   getFullName: function () {
//     fullName= this.fName + "" + this.lName;
//     return fullName
//   }
// }
// student = function (hobby1, hobby2) {
//   console.log(this.getFullName() + "i Like" + hobby1 + hobby2);

// }
// student.call(stud,"watching Cricket","watching Movie");
// student.apply(stud,["watching Ckt","watching Movie"]);
// function addData(a, b) {
//   res = a + b;
//   return res
// };
// function add() {
//   result = addData(22,15)
//   console.log(result)
// }
// add();
// call back function
// function addData(a,b){
// d =a + b;
// return d
// }
// function add() {
//   var c = addData(22,44);
//   console.log(c)
// }add();
// setTimeout(() => {
//   console.log('I am Pradip')
// }, 0);
// console.log('I am Vaibhav');
// let obj = {num1:15, num2:25}
// var Abc = function (a,b,c) {
//   console.log(obj.num2 +(a + b + c ))
// };
// Abc.call(obj, 12, 15, 45)

//  Abc.apply(obj, [12,15,13])

// default Function
// function add(num1=12,num2=15) {
//   console.log(num1 + num2)

// }add();
// add(235,456);
// normal Function
// function ab() {
//   console.log('Hi Pradip Bhosale')
// }ab();
// ac = function () {
//   console.log('Hi Angular')
// }
// ac()
// // aroow function
// ad = (dt)=>{
//   console.log('Hi am Pradip B' + dt)
// }
// ad('Hello');
// ae = (dt,dt1)=> 'Hello'  + dt +dt1
// console.log(ae("Java","angular"));
// ah = setTimeout(() => {
//   console.log('Hello Angular')
// }, 2000);
// clearInterval(ah)
// test1 = `hi Pradip
// Bhosale`
// console.log(test1);
// test2 = `iam Pradip
// ${test1}`;
// console.log(test2);


// var test1 =25;
// var test2 = 25;
// console.log(test1 === test2);

// var test3 = 2+2*'2';
// console.log(test3)
// function addData(a,b) {
//   res = (a + b);
//   return res
// }
// function add() {
//   c = addData(22,12);
//   console.log(c)
// }add();
// obj = {num1:12,num2:25}
// var abc = function name(a,b,c) {
//   console.log(this.num1 + a + b + c);
// };
// abc.call(obj,12,25,36);
// abc.apply(obj,[12,25,13]);
// default Parameter
function add(num1=12, num2=13) {
  console.log(num1 + num2)
}add();
// add(200,120)
function fun1() {
  console.log("Hi angular")
}fun1();
var fun2 = function () {
  console.log("I am sangola")
}
fun2();
Fun3=()=>{
  console.log("I am Prati")
}
Fun3();
fun4 =(dt,dt1)=> "hello" +dt + dt1;
console.log(fun4('Angular','jio'))
(()=>{
  console.log('Heloo angular')
})()