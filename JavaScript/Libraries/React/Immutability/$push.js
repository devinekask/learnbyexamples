// 📌 Immutability Helper for array.push
// 📗 update($push)
// 💬 Depends on react-addons-update

// 🔵 Immutable
// ⏎  Array

const arr = [1, 2, 3];

const newArr = update(arr, { $push: [4, 5, 6] });

// 📋 arr: [1, 2, 3]
// 📋 newArr: [1, 2, 3, 4, 5, 6] 
