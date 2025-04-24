/*-----------------------------------------------------
Sub  : [BOJ] 
Link : https://www.acmicpc.net/problem/
Level: 
Tag  : JS, 
Memo
-----------------------------------------------------*/
const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
// 문제
// MenOfPassion(A[], n) {
//     sum <- 0;
//     for i <- 1 to n
//         sum <- sum + A[i]; # 코드1
//     return sum;
// }
// === 2. 한 줄 입력받아 각각의 숫자형 변수에 저장 ===
// 입력
// 3 5
const [a] = input[0].split(' ').map(Number);

console.log(a);
console.log(1);
