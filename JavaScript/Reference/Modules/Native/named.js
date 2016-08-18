// 📌 Named Export

export const hello = 'Hola';
export const world = 'Mundo';

// 📌 Named Import
// 💬 must match namespace from imported file
// ❗️ {} required

import { hello, world } from './helloworld.js';

console.log(`${hello} ${world}!`);
// 📋 'Hola Mundo!'
