/*

for(let i =0; i <  5; i=i+1){
    console.log(i);
}
*/

/*
標準入力から 1 つの正の整数が与えられます。
1 からその整数まで、1 行ずつ出力していくコードを完成させてください。

プログラムを実行して、想定通り出力されれば演習課題クリアです！


const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
let limit = input
let num = 0

for (num = 1; num <= limit; num = num + 1) {
    console.log(num);
}

*/
////////////////////////////////////////////////////////////////////////////////////////
/*
標準入力から 1 行、スペース区切りで 2 つの正の整数が与えられます。
与えられた順に、a b と呼ぶことにします。a は必ず b よりも大きくなっています。

このとき、b から a まで、1 ずつ小さくなっていく数値を 1 行毎に出力してください。

プログラムを実行して、想定通り出力されれば演習課題クリアです！


const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const elems = input.split(" ");

const a = Number(elems[0]);
const b = Number(elems[1]);
// a から b まで 1 ずつ小さくしながら出力する

for (let i = a; i >= b; i--) {
    console.log(i);
}
*/

////////////////////////////////////////////////////////////////////////////////////////
/*
標準入力にある正の整数 n が与えられます。
掛け算九九のように n に 1 から 9 までの数を掛けたものを n の段とするとき、n の段を小さい順に全て、1 行ずつ出力してください。
なお、n は 1 から 9 の間の数とは限りません。

プログラムを実行して、想定通り出力されれば演習課題クリアです！
*/
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();

const n = Number(input);
// n の段を出力する

for (let i = 1; i <= 9; i++) {
    console.log(i*n)
}