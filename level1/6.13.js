const s = "tryl hello world";
function solution(s) {
  let strArray = s.split(""); // Return ['try','hello','world']
  if (strArray.length % 2 == 1){
  for (i = 0; i < strArray.length; i = i + 2) 
  {
      strArray[i] = strArray[i].toUpperCase();
    }
  }
  else if(strArray.length%2==0){
      for(i = 0; i < strArray.length; i = i + ){
        strArray[i] = strArray[i].toUpperCase();
      }
  }
  console.log(strArray);
}
solution(s);
//join으로 나눈 후 0과 짝수 인덱스에 대문자로 리턴!
const s = "tryl hello world";
function solution(s) {
  let strArray = s.split(" "); // Return ['try','hello','world']
  let answer = [];
  let answers2 =[];
  let answers3 = ""
  for(i=0;i<strArray.length;i++){
answer.push(strArray[i].split(""))
  }
for(i=0;i<answer.length;i++){
    for(j=0;j<answer[i].length;j=j+2){
        answer[i][j]=answer[i][j].toUpperCase()
    }
}
for(i=0;i<answer.length;i++){
    for(j=0;j<answer[i].length;j++){
        answers3=answers3+answer[i][j]
    }
answers3=answers3+" "
}
const realanswer=answers3.substring(0,answers3.length -1)
return realanswer
  }

solution(s);
//조건만다를뿐 했다.