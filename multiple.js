// const salary = 5000;
// const isBCS = true;

// if (salary > 20000) {
//     console.log('suuuuu patro');
// }
// else{
//     console.log('onno patro khuji');
// }

// let sum = 0;
// for (let i = 0; i <= 5; i++) {
//     sum = sum + i;
    
// }
// console.log(sum);

// let value = "javascript";

// for (let val of value) {
//     console.log(val);
// }

// for(let num = 0; num <= 100; num++){
//     if (num % 2 == 0) {
//         console.log(num);
//     }
// }

// let gameNumber = 25;
// let userNumber = prompt("Enter the game number");

// while(userNumber != gameNumber){
//     userNumber = prompt("You enter wrong number, please entre again");
// }
// console.log("Congratulation, You enter right number");

// let heroes = ["Ironman", "Thor", "Spiderman", "Batman", "Superman"];

// for (let index = 0; index < heroes.length; index++) {
//     console.log(heroes[index]);
    
// }

// let items = [80, 47, 68, 90, 84, 83];

// for (let i = 0; i < items.length; i++) {
//     let offer = items[i] / 10;
//     items[i] -= offer;
    
// }
// console.log(items);

// function sum(a, b) {
//     return a + b;
// }
// let result = sum(3, 2);
// console.log(result);

// const arrowSum = (a,b) => {
//     console.log(a + b);
// }
// arrowSum(5, 5);

// function countVowels(str) {
//     let count = 0;
//     for (let char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count ++;
//         }

//     }
//     console.log(count,);
// }
// countVowels("apnacollage");

// let nums =[2, 3, 4, 5, 6];

// nums.forEach((num) =>{
//     console.log(num * num);
// })

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let newArr = arr.filter((num) =>{
//     return num % 2 === 0;
// })
// console.log(newArr);

let nums = [1, 2, 3, 4, 5];

const result = nums.reduce((prev, curr) =>{
    return prev + curr;
})
console.log(result);