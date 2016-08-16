// 📌 Array
// 📗 reduce

// 🔵 Immutable
// ⏎ Any type

let arr = [1, 2, 3, 4];

console.log(typeof arr, arr);
// 📋 object [1, 2, 3, 4]

arr = arr.reduce((prev, curr) => prev + curr);

console.log(typeof arr, arr);
// 📋 number 10
