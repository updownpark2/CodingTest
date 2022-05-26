//같은 숫자를 제외하는 문제
const arr = [3, 3, 3, 6, 3, 3];
function solution(arr) {
  let answer = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      answer.push(arr[i]);
      arr.splice(i, 2);
      i = i + 1;
      console.log(arr);
    } else {
      arr.push(arr[i]);
    }
  }
}
solution(arr);

//비교를하면된다. for문으로 a[1]다음 a[2]가 동일하면
//{arraya[2]제외 array 추가 }
