//Kim의 위치를 찾아 "김서방은 x에 있다" 반환
const seoul = ["Jane", "Kim"];
function solution(seoul) {
  const answers = seoul.indexOf("Kim");
  let answer = `김서방은 ${answers}에 있다`;
  return answer;
}
//해결

//최소직사각형 구하는 문제

const sizes = [
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
];
function solution(sizes) {
  let small = [];
  let big = [];
  sizes.map(function (item) {
    return item.sort(function (a, b) {
      return a > b ? 1 : -1; //sort 사용이 좋았다.
    });
  });
  for (i = 0; i < sizes.length; i++) {
    small.push(sizes[i][0]);
  }
  for (i = 0; i < sizes.length; i++) {
    big.push(sizes[i][1]);
  }
  const Maxsmall = Math.max(...small);
  const Maxbig = Math.max(...big);
  console.log(Maxsmall);
  console.log(Maxbig);
  const answers = Maxbig * Maxsmall;
  return answers;
}
solution(sizes);
//해결!! Math.max()를 사용할때 array면 ...을 넣어야한다.
