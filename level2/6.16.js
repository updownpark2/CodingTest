//level2 게임 맵 최단거리
const maps = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
];
function solution(maps) {
  let answer = 0;
  let i = 0;
  let j = 0;
  let X = [0];
  let Y = [0];
  let R = [];
  let turnimg = [];
  while (i == 5 || j == 5) {
    if (maps[i + 1][j] == 1) {
      answer++;
      Y.push(-1);
      i++;
      R.push("y");
    } else if (
      maps[i][j + 1] == 0 &&
      maps[i + 1][j] == 0 &&
      maps[i - 1][j] == 1
    ) {
      i = i - 1;
      R.push("y");
      Y.push(1);
      answer++;
    } else if (maps[i][j + 1] == 1) {
      answer++;
      X.push(1);
      j++;
      R.push("x");
    } else if (maps[i][j + 1] == 1 && maps[i + 1][j] == 1) {
      turnimg.push([i, j]);
    } else if (maps[i + 1][j] == 0 && maps[i][j + 1] == 0) {
      i = turnimg[turnimg.length - 1][i];
      j = turnimg[turnimg.length - 1][j];
      j++;
      R.push("y");
      Y.push(-1);
      //이번엔 j로 가야함
      //R의 마지막 요소가 x 인가 y인가 분별하여 Y=1이면 -1 X이면 -1
      //이걸 i 와 j에 적용
    }
  }
  return answer;
}
//다양한경우가 존재
// 옮겼는데 없으면 돌아오는 경구
// 아래와 오른쪽이 0 이라서 위로 올라가야하는경우 1의 인접에 1이있는지를 확인해야겠다. 상하좌우로
// 있다면 우 하로 이동 우선
//위치를 저장하면될거같다.
solution(maps);
