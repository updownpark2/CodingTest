const progresses = [93, 30, 55];
const speeds = [1, 30, 5];
function solution(progresses, speeds) {
  let answer = [];
  while (progresses.length > 0) {
    let count = 0;
    for (i = 0; i < progresses.length; i++) {
      progresses[i] = progresses[i] + speeds[i];
    }

    while (progresses[0] >= 100) {
      count = count + 1;
      progresses.shift();
      speeds.shift();
    }
    if (count > 0) {
      answer.push(count);
    }
  }
  return answer;
}
solution(progresses, speeds);
//while문을 이용해보자
//해결했으나 다른 사람의 코드를 활용해서 풀이하여 추가적인 공부가 필요하다.
