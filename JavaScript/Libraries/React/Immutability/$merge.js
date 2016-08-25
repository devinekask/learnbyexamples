// 📌 Immutability Helper for merging objects
// 📗 update($merge)
// 💬 Depends on react-addons-update

// 🔵 Immutable
// ⏎  Object

const obj = {a: 1, b: 2};

const newObj = update(obj, { $merge: {b: 3, c: 4} });

// 📋 obj: {a: 1, b: 2}
// 📋 newObj: {a: 1, b: 3, c: 4}
