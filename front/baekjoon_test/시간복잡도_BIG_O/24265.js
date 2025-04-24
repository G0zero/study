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
//     for i <- 1 to n - 1
//         for j <- i + 1 to n
//             sum <- sum + A[i] × A[j]; # 코드1
//     return sum;
// }

// n의 제곱이니까, O(n^2) -1 최고차항은 n제곱
// x의 n제곱을 반환해주는 함수 Math.pow(x,n)
// === 2. 한 줄 입력받아 각각의 숫자형 변수에 저장 ===

// 입력
// 7
const [a] = input[0].split(' ').map(Number);

let count = 0;

// for (let i=1; i <= a-1; i++){
//     for(let j = i+1; j <= a; j++){
//         count ++;
//     }
// }

console.log((a * (a - 1) / 2));
console.log(2);
