const array = [1, 2, 3, 4];
const map22 = array.map((x) => x * 2);
console.log(map22);
//map은 배열에 모든 요소에 함수를 적용해서 새로운 배열을 만들어 내는 것

const roat = [2, 4, 6];
const gogo = roat.map(function (tomato) {
  //이때의 tomato는 roat의 인자를 의미한다.
  return tomato * 2;
});
console.log(gogo); // [4,8,12]
//map은 배열 각 요소로 만든 것이기 때문에 굳이 for문을 사용하지 않아도
//된다는 장점이 있다.
const roat = [2, 4, 6];
const gogo = roat.map(function (tomato, index) {
  //이렇게 인덱스의 정보를 얻어올 수 있다.
  return index;
});
console.log(gogo); // [0,1,2]

const lalala = ["hello", "wow", "lol", "master", "happy"];
const wow = lalala.map(function (item) {
  // 새로운 배열을 형성한다!
  return `${item}${"whatthefuck"}`;
});
console.log(wow);
