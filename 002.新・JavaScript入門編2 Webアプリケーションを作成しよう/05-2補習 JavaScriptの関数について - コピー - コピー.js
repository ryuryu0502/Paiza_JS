/*
演習課題「JavaScript の関数 2」

今、2 つの文字列の長さの差を計算する関数 lengthDiff を実装しようとしています。
具体的には、2 つの文字列を受け取り、その 2 つの文字列の長さの差を 0 以上の整数として返す関数にしたいと思います。

この関数をしっかり動くように定義してください。

また、この関数をテストするための入力として、2 行で 2 つの文字列が入力されます。
この入力に対し、実装した関数の戻り値を出力してください。

プログラムを実行して、想定通り出力されれば演習課題クリアです！

 入力される値

apple
banana

 標準入力からの値取得方法はこちらをご確認ください

 期待する出力値
 */


// この関数を定義
const lengthDiff = (s,t) => {
    // console.log(s.length);
    // console.log(t.length);
    return Math.abs(s.length - t.length);
};

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const [s, t] = input.split("\n");

const answer = lengthDiff(s, t);

console.log(answer);
