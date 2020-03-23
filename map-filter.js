const number = [10, 20, 30, 25, 2, 4, 15];
// const output = [];
// for(let i = 0; i < number.length; i++){
//     const element = number[i];
//     const result = element * element;
//     output.push(result);
// }
// function square(element){
//     return element * element;
// }
// const square = element => element * element;
// const square = x => x * x;
// const result = number.map(function(element){
//     return element * element;
// })
// const result = number.map(x => x * x);
// console.log(result);
// foreach loop sikhte hobe nije nije.
// and reduce o shikhte hobe nije nije.
const result = number.filter(x => x < 5); // 5 ar chaite choto jeigula ache sob gula array symbol ar vitor dekhabe.
const isThereAnyThing = number.find(x => x > 5); // 5 ar chaite boro prothome jeta pabe setai dekha be.
console.log(isThereAnyThing);