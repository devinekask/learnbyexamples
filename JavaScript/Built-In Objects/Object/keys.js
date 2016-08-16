// 📌 Object
// 📗 keys

// ⏎ Array (sorted)

// ❗️ In ES6 if a non object (primitive) argument is passed to keys() it will be coerced to an object
//    see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys#Notes

const arr = [1, 'a', 3];
console.log(Object.keys(arr));
// 📋 ['0', '1', '2'];

const obj = {a: 1, b: 2, c: 3};
console.log(Object.keys(obj));
// 📋 ['a', 'b', 'c'];
