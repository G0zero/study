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
//     for i <- 1 to n - 2
//         for j <- i + 1 to n - 1
//             for k <- j + 1 to n
//                 sum <- sum + A[i] × A[j] × A[k]; # 코드1
//     return sum;
// }
// === 2. 한 줄 입력받아 각각의 숫자형 변수에 저장 ===

// 입력
// 7
const n = BigInt(input);
const result = (n * (n-1n) * (n-2n) / 6n);
//여기서 n, n-1n, n-2n은 BigInt 계산을 위해 뒤에 n을 붙인 거고, / 6n은 3!으로 나눠주는 거임

//nC3: 삼중 for-loop의 반복 횟수는 조합 nC3이므로 n(n-1)(n-2)/6.

console.log(result.toString());// 정확한 연산 횟수 출력
console.log(3); // 시간 복잡도의 최고 차수

