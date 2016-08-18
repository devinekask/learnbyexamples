// 📌 Default export

const say = name => console.log(`Hello ${name}`);
export default say;

// 📌 Default import
// 💬 imported namespace can be called anything
// ❗️ no {}

import say from './say.js';

say('Thibault');
// 📋 'Hello Thibault'
