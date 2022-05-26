//시저암호
const s = "AB"; //문자열로 데이터를 받음
const n = 2;
function solution(s, n) {
  let answer2 = [];
  const arrayS = s.split(""); //result=[A,B]
  const Big = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const small = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  for (i = 0; i < arrayS.length; i++) {
    if (Big.includes(arrayS[i]) == true) {
      let count = Big.indexOf(arrayS[i]);
      answer2.push(Big[(count + n) % 26]);
    } else if (small.includes(arrayS[i]) == true) {
      let count = small.indexOf(arrayS[i]);
      answer2.push(small[(count + n) % 26]);
    } else {
      answer2.push("1");
    }
  }
  let answer3 = answer2.join("");
  let answer = answer3.replace(/1/gi, " ");

  return answer;
}
solution(s, n);

//String의 길이는 기존과 같다.
//String을 배열로 넣는다
//[A,B]
//indexOf를 통해서 A의 위치를 찾고  그 인덱스에서 +n만큼 더해준다.

//2시간 걸려서 해결했다.. 그래도 해결했다 indexOf와 include를 이용하여 i를 찾아 해당 i 에 n을 더해주는방식으로 하였다.
//replaceAll이라는 함수는 javascript에서 존재하지 않아서 replace(/바꾸고싶은거/,뭐로바꿀꺼)를이용하였다.
