// 2-masala

// let str = "salom bolalar";
// function kattaHarf(str) {
//     let result = [];
//     let words = str.split(' ');
//     for (const word of words) {
//         result.push(word[0].toUpperCase() + word.slice(1));
//     }
//     return result.join(' ');
// }

// console.log(kattaHarf(str));

// 3-masala

// let str = "salom1";
// function onlyStr(str){
//     let res = [];
//     for (const iterator of str) {
//         if(!(iterator >= '0' && iterator <= '9')){
//             res.push(iterator)
//         }
//     }
//     return res.join('')
// }
// console.log(onlyStr(str));

// 4-masala

// let arr = [1,2,true,1n,false,"hello","world"];
// function onlyStr(arr){
//     let res = []
//     for (const iterator of arr) {
//         if(typeof iterator == 'string'){
//             res.push(iterator)
//         }
//     }
//     return res
// }
// console.log(onlyStr(arr));

// 5-masala

// let str = 'hello world';
// function sozlarSoni(str) {
//     let res = str.split(' ')
//     let counter = 0;
//     for (const i of res) {
//           counter++  
//     }
//     return counter
// }
// console.log(sozlarSoni(str));

// 7-masala

// let arr = "hello world";
// function undoshHarflar(arg) {
//   let res = "";
//   for (const iterator of arg) {
//     if (
//       (typeof iterator == "string" && iterator == "a") ||iterator == "i" ||iterator == "u" ||iterator == "e" || iterator == "o" ||iterator == "A" || iterator == "E" || iterator == "O" || iterator == "I" || iterator == "U") {
//     } else {
//       res += iterator;
//     }
//   }
//   return res;
// }

// console.log(undoshHarflar(arr));

// 8-masala

// let arr = ["hello","worldddddd"];
// function uzunSoz(arg) {
//     let maxElement = arg[0];
//     for (const iterator of arg) {
//         if (maxElement.length < iterator.length) {
//           maxElement = iterator
//         }
//     }
//     return maxElement
// }
// let res = uzunSoz(arr);
// console.log(res);

// 9-masala

// let arr = 'salom bolalar';
// function teskariSoz(arr) {
//     let res = arr.split('').reverse().join('').split(' ').reverse().join(' ');
//     return res;
// }
// let res = teskariSoz(arr);
// console.log(res);

// 10-masala

// let arr = ["hello",'world','hello','people','hello','bye'];
// let str = 'hello';
// function helloSoni(arr, str) {
//     let count = 0;
//     for (const element of arr) {
//         if (element === str) {
//             count++;
//         }
//     }
//     return count;
// }

// ;
// console.log(helloSoni(arr,str));