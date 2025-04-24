/*-----------------------------------------------------
Sub  : [BOJ] 
Link : https://www.acmicpc.net/problem/
Level: 
Tag  : JS, 
Memo
-----------------------------------------------------*/
const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
const n = parseInt(input[0]);//숫자로 변환
for (let i = 1; i <= n; i++) {
    //앞에 공백도 줄어들어야 하기때문에 n-i
    console.log(' '.repeat(n - i) + "*".repeat(i));
}
