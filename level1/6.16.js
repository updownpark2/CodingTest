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
  let answer = 0;
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
    for (j = 0; j < board[0].length; j++) {
      if (arr2[moves[i] - 1][j] !== 0) {
        //4 찾기
        arr3.push(arr2[moves[i] - 1][j]);
        arr2[moves[i] - 1].splice(j, 1, 0);
        break; // for 문에서 break를 하면 걸리면 바로 다음으로 넘어가게 해준다.
      }
    }
  }
  for (i = 0; i < arr3.length; i++) {
    if (arr3[i] == arr3[i + 1]) {
      answer = answer + 2;
      arr3.splice(i, 2);
      i = 0;
    }
  }
  return answer;
}
solution(board, moves);

//88점 통과, 아무것도 없을 때를 설정해주어야 한다지만 if문에서 거르니까 의미없을 것으로 생각됨
