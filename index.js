// let numbers = [20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
// for (let i = 0; i <= numbers.length; i++) {
//     let number = numbers[i];
//     if (number >50){
//             break;
//         }
//          console.log(number);
// }
let fruits=['apple', 'banana','orange'];
let indexOfbanana=fruits.indexOf('banana');
console.log(fruits);
fruits[indexOfbanana]='Mango';
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.push('Watermelon');
console.log(fruits);