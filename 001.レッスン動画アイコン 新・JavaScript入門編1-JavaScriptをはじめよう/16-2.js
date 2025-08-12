const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const lines = input.split("\n");

/*
演習課題「類題 1」

標準入力に 3 行で 3 つの文字列 s1, s2, s3 が入力されます。
3 つの文字列が全て等しいときは YES、そうでないときは NO を出力するプログラムを完成させてください。

プログラムを実行して、想定通り出力されれば演習課題クリアです！

 入力される値

paiza
paiza
813

 標準入力からの値取得方法はこちらをご確認ください

 期待する出力値

NO
*/

const s1  = String(lines[0]);
const s2  = String(lines[1]);
const s3  = String(lines[2]);

if (s1 === s2 && s2 === s3) {
    console.log("YES");
}else{
    console.log("NO");
}