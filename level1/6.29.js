//2022카카오 블라인드텡슽 신고결과받기
//정지가 되면 신고한 모든 유저에게 정지 사실을 메일로 발송한다.
//k는 정지기준이되는 신고횟수
//result는 메일의 수 *메일은 신고자에게만 간다.*
const id_list = ["con", "ryan"];
const report = ["ryan con", "ryan con", "ryan con", "ryan con"]; //배열이구나
//report를 이중 배열로 만들고  중복값을 제거 그리고 map을 활용하여
const k = 2;
function solution(id_list, report, k) {
  let answers = [];
  let count = 0;
  let toCompare = [];
  let answer = [];
  let test = [];
  const set = new Set(report);
  const report2 = [...set].map(function (item) {
    //중복값을 없앰
    return item.split(" "); //ryan con
  });
  for (i = 0; i < report2.length; i++) {
    toCompare.push(report2[i][1]);
  }
  const set2 = new Set(toCompare);
  const compare = [...set2]; //[con]
  for (i = 0; i < compare.length; i++) {
    for (j = 0; j < report2.length; j++) {
      if (compare[i] === report2[j][1]) {
        count = count + 1;
        test.push(report2[j][0]);
        if (count >= k) {
          answer.push([...test]);
        }
      }
    }
    count = 0;
  }
  const answer2 = answer[answer.length - 1];

  console.log(answer2); //['muzi', 'apeach', 'frodo', 'muzi']
  for (i = 0; i < id_list.length; i++) {
    let num = 0;
    for (j = 0; j < answer2.length; j++) {
      if (id_list[i] === answer2[j]) {
        num = num + 1;
      }
    }
    answers.push(num);
  }
  return answers;
} //새로운 배열을 하나 만들어서 두번 이상반복되는 배열에서 0을 넣기
solution(id_list, report, k);
