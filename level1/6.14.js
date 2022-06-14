//6.13에 제대로 풀지못했던 level1 문제를 map을 활용하여 다시 푼다.
const s = "try hello world";
function solution(s) {
  let acc = s.split(" ");
  const acc2 = acc.map(function (item) {
    return item.split("").map(function (initem, index) {
      return index % 2 == 0 ? initem.toUpperCase() : initem.toLowerCase();
    });
  });
  const answer = acc2.join(" ");
  const answers = answer.replace(/\,/g, "");
  console.log(answers);
}
solution(s);

//kakaointernship 비밀지도 문제
const n = 6;
const arr1 = [46, 33, 33, 22, 31, 50];
const arr2 = [27, 56, 19, 14, 14, 10];
function solution(n, arr1, arr2) {
  let answer = [];
  const ARR1 = arr1.map(function (item) {
    return item.toString(2);
  });
  const ARR2 = arr2.map(function (item2) {
    return item2.toString(2);
  });
  console.log(ARR1); //['1001', '10100', '11100', '10010', '1011']
  console.log(ARR2); //['11110', '1', '10101', '10001', '11100']
  for (i = 0; i < n; i++) {
    answer.push(Number(ARR1[i]) + Number(ARR2[i]));
  }
  console.log(answer); //[12111, 10101, 21201, 20011, 12111]
  const answer1 = answer.map(function (aa) {
    // 6자리면 맨앞 은 #가 되어야함
    return String(aa).padStart(n, 0); //padStart는 string에서된다.!
  });
  const answer2 = answer1.map(function (item) {
    return item.replace(/1/gi, "#").replace(/2/gi, "#").replace(/0/gi, " ");
  });
  console.log(answer2);
}
solution(n, arr1, arr2);
//통과!!!!!!!!!!!!!!!!!!!!!!!
