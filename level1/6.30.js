const id_list = ["con", "ryan"];
const report = ["ryan con", "ryan con", "ryan con", "ryan con"];
//report를 이중 배열로 만들고  중복값을 제거 그리고 map을 활용하여
const k = 2;
function solution(id_list, report, k) {
  let answer = [];
  let answers = [];
  let count = 0;
  let count2 = 0;
  let AA = [];
  let BB = [];
  const set = new Set(report);
  const xreport = [...set].map(function (item) {
    return item.split(" ");
  }); //중복제거
  const target = xreport.map(function (item) {
    return item[1]; //frodo frodo neo neo muzi
  });
  const set2 = new Set(target);
  const Compare = [...set2];
  //지목당한 사람들을 추려냄 frodo neo muzi
  for (i = 0; i < Compare.length; i++) {
    for (j = 0; j < target.length; j++) {
      if (Compare[i] === target[j]) {
        count = count + 1;
        answer.push(xreport[j][0]);
      }
    }
    if (count >= k) {
      answers.push(...answer);
      answer = [];
    } else if (count < k) {
      answer = [];
    }
    count = 0;
  }

  for (i = 0; i < id_list.length; i++) {
    for (j = 0; j < answers.length; j++) {
      if (id_list[i] === answers[j]) {
        count2 = count2 + 1;
      }
    }
    AA.push(count2);
    count2 = 0;
  }

  return AA;
}

solution(id_list, report, k);
