//2022카카오 블라인드텡슽 신고결과받기
//각 유저는 한 번에 한명의 유저를 신고가능!
//정지가 되면 신고한 모든 유저에게 정지 사실을 메일로 발송한다.
//id_list는 유저의 ID
//report는 [이용자 id 신고한 id]
//k는 정지기준이되는 신고횟수
//result는 메일의 수 *메일은 신고자에게만 간다.
const id_list = ["muzi", "frodo", "apeach", "neo"];
const report = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
  "muzi frodo",
]; //배열이구나
//report를 이중 배열로 만들고  중복값을 제거 그리고 map을 활용하여
const k = 2;
function solution(id_list, report, k) {
  const set = new Set(report);
  const report2 = [...set].map(function (item) {
    return item.split(" ");
  });
  //중복값없앰
  //0: (2) ['muzi', 'frodo']
  //1: (2) ['apeach', 'frodo']
  //2: (2) ['frodo', 'neo']
  //3: (2) ['muzi', 'neo']
  //4: (2) ['apeach', 'muzi'] 이제 k를 기준으로 해당되는 배열에서 [1을 모아보자
  // k와 같거나 이상이라면 +1
  //id_list와 비교하면서 같은게 있다면 1을 기억! 후 k 개 이상이면 +1
  //정지 된 이용자를 먼저 찾아야함 여기서는 forodo, neo 그러니 frodo와 neo를 지목한
  // 이용자는 메일을 받게해야함 if 문으로 [1]가 frodo or neo이면 +1
  console.log(report2);
}
solution(id_list, report, k);
