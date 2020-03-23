const student = [
    {id: 21, name:"omor sunny"},
    {id: 31, name:"akhyar"},
    {id: 42, name:"jumman"},
    {id: 33, name:"ronny"}
];
// const studentIdOnly = [];
// for(let i = 0; i < student.length; i++){
//     const nice = student[i];
//     studentIdOnly.push.element;
// }
// const output = [];
// for (let i = 0; i < student.length; i++){
//     const element = student[i].id;
//     const result = element;
//     output.push(result); // amir parchi hurrrrrrrrrrrrrraaaaaaaaaaaaaaaaahhhhhhhhhhh
// }
const names = student.map(s => s.name);
const ids = student.map(s => s.id);
const biggerId = student.filter(s => s.id > 31);
const biggerOne = student.find(s => s.id > 32);
console.log(biggerOne);