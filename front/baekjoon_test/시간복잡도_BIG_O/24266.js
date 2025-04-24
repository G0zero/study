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
//         for j <- 1 to n
//             for k <- 1 to n
//                 sum <- sum + A[i] × A[j] × A[k]; # 코드1
//     return sum;
// }

// === 2. 한 줄 입력받아 각각의 숫자형 변수에 저장 ===

// 입력
// 7
const n = BigInt(input);
const result = n * n * n;

//console.log(a*a*a);
console.log(result.toString());// 정확한 연산 횟수 출력
console.log(3); // 시간 복잡도의 최고 차수

