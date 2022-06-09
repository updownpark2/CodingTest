const numbers = [3, 30, 34, 5, 9];
function solution(numbers) {
  const lala = numbers.sort();
  let land = [];
  let answer = "";
  for (i = 0; i < lala.length; i++) {
    land.unshift(lala[i]);
  }
  for (i = 0; i < lala.length; i++) {
    if (
      land[i] / 10 === land[i + 1] ||
      land[i] / 100 === land[i + 1] ||
      land[i] / 1000 === land[i + 1]
    ) {
      land.splice(i, 2, land[i + 1], land[i]);
    }
  }

  for (i = 0; i < land.length; i++) {
    answer = answer + String(land[i]);
  }
  console.log(answer);
  //여기서 30,3을 구분해야한다.
}
solution(numbers);

//숫자를 스트링화 시키면 숫자를 그대로 이어붙이는게 가능하다.
// 그렇게해서 배열에 넣고 Math.max()로 최댓값을 찾는게 가장 이상적이다.

//배열 요소를 정리하는 매서드는 sort()이다.
//그냥 sort()를 사용하면 문자열로 배열이 우선시 되기때문에
//[1,11,13,4,6,42]이면 [1,11,13,4,42,6]으로 배열된다.

//위 코드는 33점짜리 답..ㅠㅠ

//sort()와 callback 함수에 대해 학습을하고옴.
const numbers = [3, 30, 34, 5, 9]; //a,b일때 10,6 2,10 이렇게 순서가된다는걸기억
function solution(numbers) {
  numbers.sort(function (a, b) {
    return String(a) + b > String(b) + a ? -1 : 1;
  });
  const answer = numbers.join("");
  return numbers[0] === 0 ? 0 : answer;
}

solution(numbers);
//해냈다!
// 결국 sort 즉 , 정렬에 대한 지식이 부족했고
// callbakck 함수에 대한 지식역시 부족했다.
