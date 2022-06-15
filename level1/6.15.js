//카카오 크레인 인형뽑기 게임 level1

//1~5번의 통이 있고 그 통에서 각각  인형을 뽑을 수 있다.
// 동일한 모양의 인형이면 BooM!!하고 사라진다.
//배열 안에 배열이담겨있는모양
//moves는 크레인이 움직이는 순서
const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];
function solution(board, moves) {
  let arr = [];
  let arr2 = [];
  let arr3 = [];
  for (i = 0; i < board[0].length; i++) {
    for (j = 0; j < board[0].length; j++) {
      arr.push(board[j][i]);
    }
    arr2.push(arr);
    arr = [];
  }
  console.log(arr2); //[[0,0,0,4,3],[0,0,2,2,5],[0,1,5,4,1],[0,0,0,4,3],[0,3,1,2,1]]
  //moves의 인자에 따라서 arr2로 들어가서 가장 최근의 0이 아닌숫자를 찾고 그 수를 push
  // 그리고 배열에서 연속되는 숫자를 찾아 지우고 result에 +1
  for (i = 0; i < moves.length; i++) {
    for (j = 0; j < arr2[0].length; j++) {
      if (arr2[moves[i] - 1][j] !== 0) {
        arr3.push(arr2[moves[i - 1][j]]);
        arr2[moves[i - 1]].splice(j, 1, 0);
      }
    }
  }

  console.log(arr3);
}
solution(board, moves);

//배열을 새롭게 만들어야하나 ? 새롭게 만들고 값을 빼낸 후 (map을이용) 그 splice를 이용하여 재배치
