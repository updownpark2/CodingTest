//level1 codingtest skil chek
const n = 10;
function solution(n) {
  let answers = [];
  let answer = [];
  for (i = 0; i < n; i++) {
    answers.push(i + 1);
  }
  for (i = 0; i < answers.length; i++) {
    for (j = 2; j < answers[i]; j++) {
      if (answers[i] % j === 0) {
        answer.push(answers[i]);
        break;
      }
    }
  }
  const dab = n - answer.length - 1;
  return dab;
}
solution(n);
//
const x = 2;
const n = 5;
function solution(x, n) {
  let answers = [];
  for (i = 1; i <= n; i++) {
    answers.push(x * i);
  }
  console.log(answers);
}
solution(x, n);

//프로그래머스 level2
const s = "baababbaabaaabbb";
function solution(s) {
  const Arr = [...s];
  console.log(Arr);
  for (i = 0; i < Arr.length; i++) {
    if (Arr[i] === Arr[i + 1]) {
      Arr.splice(i, 2);
      i = -1;
    }
  }
  if (Arr.length > 0) {
    return 0;
  } else {
    return 1;
  }
}
solution(s);
