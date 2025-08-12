/*動画演習

*/
/*動画演習

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const elems = input.split("\n");

let min = 101;

for (let i=0; i<5;i++){
    const num =Number(elems[i]);
    if (num < min) {
        min = num;
    }
}
*/

////////////////////////////////////////////////////////////////////////////////////////
/*動画演習

*/
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const elems = input.split("\n");

// ここからあなたのコード
const numbers = elems.map(Number);
const minNumber = Math.min(...numbers);
console.log(minNumber);