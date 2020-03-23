const bonus = 20; // global varible scope. ait function ar vitor theke o call kora jai and vaire theke o call kora jai.
function sum(first, second){
    let result = first + second + bonus;
    if(result > 9){
        let mood = "happpy";
        console.log(mood); 
    }
    console.log(mood); // if, for ai doroner block theke let and const dia variable declare korle if, for ar vahire console.log kora jai na. but var dia declare korle para jai. var dia declare korle setake tene nia programer upore nia hoisting kore kintu let and const ar belai upore tulte pare na. seta scoper vitorei thake.
    return result; 
}
//console.log(result); // function ar result function ar baire theke acccess kora jabe na aita ke bole scope. but function call kore para jabe.
const output = sum(10, 20);
// console.log(bonus);
// console.log(output);