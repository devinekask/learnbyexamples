// 📌 Array
// 📗 reduce

// 🔵 Immutable
// ⏎ Any type

let arr = [1, 2, 3, 4];

console.log(arr);
// 📋 [1, 2, 3, 4]

// 💬 in handler function:
// 💬 1st argument = value previously returned in the last invocation of the callback
// 💬 2nd argument = current value in the Array
// 💬 3rd argument = Array

arr = arr.reduce((prev, curr, arr) => prev + curr);

// 💬 in loop
// 💬 (1 + 2) = 3
// 💬 (3 + 3) = 6
// 💬 (6 + 4) = 10

console.log(arr);
// 📋 10
