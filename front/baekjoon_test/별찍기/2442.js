/*-----------------------------------------------------
Sub  : [BOJ] 
Link : https://www.acmicpc.net/problem/
Level: 
Tag  : JS, 
Memo
-----------------------------------------------------*/
//별찍기 5번
const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
const n = parseInt(input[0]);//숫자로 변환
for (let i = 1; i <= n; i++) {
    const stars = 2 * i - 1;
    const blank = n - i
    console.log(" ".repeat(blank) + "*".repeat(stars));
    //console.log(stars);
}
