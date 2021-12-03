// var test1= 5;
// var test2 = "5";
// var test3 = test1 + test2;
// console.log(test3);
// var test4 = test1 === test2;
// console.log(test4);
// var test5 = "abc";
// var test6 = 12;
// var test7 = test5/test6;
// console.log(test7);
// var test8 = null
// console.log(test8);
// console.log(typeof(test8));
// var age = 17;
// var abc = (age>18)?"To Voter":"To Not Voter";
// console.log(abc);
// var multiplay = [1,2,3,4,5,6,7,8,9]te
// // for (let i = 0; i < arr.length; i++) {
// //     if (i == 5) {
// //         continue
// //     }
// // console.log(arr

    
// // }
// function multiply (array) {
//     var sum=1;
//     for (var i=0; i<array.length; i++) {
//         sum = sum * array[i];
//     } 
//     return sum;
// }
// console.log(multiply[1,2,3]);

// var test1 = [1,2,3,4,5,6,7,8,9];

// var test2 = test1*test1
// console.log(test2);
// function add(num1=15, num2=10) {
//     console.log(num1 * num2)
// }
// add(55,45);
// add(456,321);
// let test1 = "CTS Pune ";
// let test2 = `CTS
// Pune`;
// console.log(test1);
// console.log(test2);
// function fun1() {
//     console.log('Hi I Am Priti Kadam')
// }
// fun1()
// fun4 = function (X) {
//     console.log('I am Priti' + X)
// }
// fun4(12);
// var fun11 = setInterval(() => {
//     console.log('Hello Samadhan')
// }, 9000);
// clearInterval(fun11);
// test1 = 256;
// test2 = 65331;
// console.log(test1 + test2)
// console.log(test1 - test2)
// console.log(test1 * test2)
// console.log(test1 / test2)
// Use of Add Mul div Sub
// let person ={ name: 'Alex', age: 55, height: 152}
// let person2 ={ name: 'Alex', age: 55, height: 152}
// var per = Object.assign({weight:95}, person);
// console.log(per);
// var per2 = Object.is(person,person2);
// console.log(per2);
var test1 = [1,2,3,9,8,8,9];
var test2 = [4,5,6, 11,22,33];

var test3 = test1.concat(test2);

console.log(test3);

// [0,1,2,3,4,5,6]
var test4 = [...test1, 7,9];

console.log(test4);

var test5 ={name:'CTS', age:15};
var test6 ={gender:'Male'};
// console.log(test5);

var test7 = {...test5, ...test4};
console.log(test7);
class test{
    constructor(fname, lname){
        this.fname= fname;
        this.lname =lname;
    }  
}

var test1 = new test('Alex','Simi');
console.log(test1);


var test2 = new test('Rocky','Simi');
console.log(test2);

var test3 = new test('Pradip', 'Dipak');
console.log(test3);



class stud {
    constructor(sName, mark){
        this.sName = sName;
        this.mark = mark
    }
}
 var rollno1 = new stud ('Prakash', 76.20);
 var rollno2 = new stud ('Shital', 76.20);
 var rollno3 = new stud ('Ramesh', 76.20);
 var rollno4 = new stud ('Rohit', 76.20);
 var rollno5 = new stud ('Madhuri', 76.20);
 console.log(rollno1,rollno2,rollno3,rollno4,rollno5);