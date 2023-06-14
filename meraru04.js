const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin, // 입력
  output: process.stdout, //출력
});

// randomNum 변수에 랜덤함수 리턴값을 넣어준다
// 사용자 값 입력시 나와야할 콘솔 출력값
// 컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!
// 1번째 시도 : [사용자입력]

let randomNum = randomNumber()
let count = 0
console.log('컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!')

// 사용자 입력값과 랜덤으로 만든 값을 비교하는 함수
function getNum(){
    count++
    rl.question(`사용자 예제 : ` , (x) => {
        // 사용자 입력값을 배열로 만들어주고 숫자형으로 변환해줍니다.
        let s = 0;
        let b = 0;
        let matchNum = x.split('').map(Number)
        randomNum
        matchNum
        let set = new Set(x)

        for(let i = 0 ; i < matchNum.length ; i++){
            if(randomNum[i] === matchNum[i]){
                s++
            } else if (randomNum.includes(matchNum[i])){
                b++
            }
        }

        if(x.length < 3 || x.length > 3){
            console.log('숫자 3자리를 입력해주세요')
            getNum()
        } else if(set.size < 3){
            console.log('중복값을 넣지 말아주세요')
            getNum()
        }else if(s===3){
            console.log(`${count}번 만에 맞추셨습니다!`)
            console.log('게임을 종료합니다.')
            rl.close()
        } else if (s < 3){
            console.log(`${s}S${b}B`)
            getNum(x)
        } 
    })
    }
//
// 랜덤 숫자 생성 함수
function randomNumber() {
  let result = [];

  for (let i = 0; i < 3; i++) {
    // floor 소수점 내림값
    // Random함수 0~9
    let random = Math.floor(Math.random() * 10);
    // 조건문: 중복이 아니라면, result에 push
    // 중복이라면, i 값을 -1 해서 다시 반복
    if (!check(random)) {
      result.push(random);
    } else {
      i--;
    }
  }

  // 중복 체크 함수
  function check(random) {
    return result.find((num) => num === random);
  }

  return result;
}

getNum()