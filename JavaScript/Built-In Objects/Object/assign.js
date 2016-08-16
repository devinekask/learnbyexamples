// 📌 Object
// 📗 assign

// 🔵 Immutable
// ⏎ Object

// ❗️ Using the assign method, properties with the same key will be overridden

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};

const obj = Object.assign(obj1, obj2, {e: 5});

console.log(obj);
// 📋 {a: 1, b: 2, c: 3, d: 4, e: 5}
