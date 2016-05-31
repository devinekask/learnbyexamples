// 📌 Array
// 📗 forEach

let arr = ['this', 'is', 'a', 'test'];

// 💬 in handler function:
// 💬 1st argument = item in Array
// 💬 2nd argument = Array index
// 💬 3rd argument = Array

arr.forEach((number, i, arr) => {
  console.log(`${i}: number: ${number}`);
});

// 📋 '0: number: this'
// 📋 '1: number: is'
// 📋 '2: number: a'
// 📋 '3: number: test'
