const nums = [4,5,6,8,10,44];
const part = nums.slice(1, 4);
const removed = nums.splice(2, 3);

const together = nums.join(",")
console.log(together);
// console.log(nums);