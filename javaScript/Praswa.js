// var test1 = 10;

// for(let i = 0; i<= 11; i++){
//     // if (i==5) {
//     //     continue
//     // }
//     console.log(i);
// }
// // // do {
// // //     console.log(arr[j]);
// // //     j++
// // // } while (j<arr.length);
// // var count = 11;

// // while(count < 10){
// //     console.log('Counting ' +count);
// //     count ++;
// //     // count = count +1;
// // }

// // // var counter = 1;

// // // do{
// // //     console.log('This will be executed by default for first time');
// // //     counter ++;
// // // }
// // // while(counter < 0)
// var arr = ['santosh','Swpnil','Pradip', 'Vikas','Rahul'];
// for (let index = 0; index < 25; index++) {
//     console.log(arr)
    
// }
// function cgep(a, b, c, d, e) {
//     var result = ((a/100 + b/100 + c/100 + d/100 + e/100)/5)*10
//     return  result
  
// };

// var ramesh=cgep(70, 60, 78, 56, 58);
// console.log(ramesh);
// var Swpnil = cgep(86, 56, 68, 75, 90);
// console.log(Swpnil)
// function abb() {
//     console.log('Call Swpnil')
// }
// localStorage.setItem('Name', 'Pradip')
// Number
// var test1 = 15;
// var test2 = 15.5;
// var test3 = typeof(test1)
// console.log(test3);
// test4 = test1.toString()
// console.log(test4);
// test5 = typeof(test4);
// console.log(test5);
// var test6 = '$'+ 5;
// console.log(test6);
// console.log(typeof(test6));

// var test1 = true;
// console.log(test1);
// console.log(typeof(test1));
// console.log(test1.valueOf());
// console.log(test1.toString());

//  var test1 = "My Name Is Pradip Bharat";
//  console.log(test1);
//  console.log(test1.valueOf());
//  var test2 = test1.charAt(5);
//  console.log(test2);
//  console.log(test1.length);
//  console.log(test1.charCodeAt(5));
//  var test3 = test1 + "Software Enginner";
//  console.log(test3);
//  console.log(test1.indexOf('Bharat'));
//  console.log(test3.replace('Pradip', 'Pravin'));
//  console.log(test1.search('Bharat'));
//  console.log(test1.slice(5,11));
//  console.log(test1.split(''));
//  console.log(test1.substr(9,11));
//  console.log(test1.toLocaleLowerCase());
//  console.log(test1.toUpperCase());
// var test1 = ['Ramesh','Rani','Sonali','Piti','Pradip','Dipali','Pooja','Poonam','Rahul','Akshay'];
// console.log(typeof(test1[5]));
// console.log(typeof(test1));
// console.log(test1.length);
// console.log(test1.push('Kavita'));
// console.log(test1);
// console.log(test1.pop());
// console.log(test1);
// console.log(test1.unshift('Priyanka'));
// console.log(test1);
// console.log(test1.shift());
// console.log(test1);
// console.log(test1.slice(2,5));
// console.log(test1.splice(0,6, 'Archna' , 'Youraj'));
// console.log(test1);
// console.log(test1.join(''));
//  var test5 = ['schian','nitin','shende']
//  console.log(test1.concat(test5));
//  console.log(test1.reverse())
//  var test6 = "i Am Software Engineer"
//  console.log(test6.split('').reverse().join(''))
// var test10=[1,2,3,4,5]
// console.log(test10.map(item => item + 5));
// var test18 = test10.reduce(function(res, item) {
//     return res +item
// },10)
// console.log(test18)
// 

// var car = {
//     model :"maruti",
//     price:45852
// }
// console.log(car)
// var car1 = Object.create(car);
// var car2 = Object.create(car1)
// console.log(car1);
// console.log(car);
// let per1 = {fName:'Ramesh'};
// let per2 = {lName:'Chavan'};
// let person =Object.assign(per1,per2);
// console.log(person)
// var student = {
//     fName:'Pradip',
//     lName:'Bhosale',

//     'getFullName' : function () {
//         var fullName = this.fName +' '+ this.lName;
//         return fullName
//     }
// }
// console.log(student.getFullName()).

// var Student ={}
// Student.name = "Swpnil";
// Student.lName = "Ghorpode";
// Student.qualification="BE"
// console.log(Student);
// student ={
//     name:"Swpnil",
//     age:26
// }
// console.log(student)
// var Studen = new Object()
// Studen.name = "Swpnil";
// Studen.gender ="Male";
// console.log(Studen);
// var test1 = [1,2,3,4,5]
// var test2 = test1.reduce(function (res , item) {
//     return res + item
    
// },55)
// console.log(test2)
// 
  function cgep(a,b) {
    result= a + b;
    return result

}

var ac = cgep(12,15);
console.log(ac)