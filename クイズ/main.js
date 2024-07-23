let question = [
  [
    
    "/imgs/img1.png",
    "洋服",
    "/imgs/img2.png",
    "電車",
    "1",
  ],
  [
    `パイナップルは野菜ですか果物ですか`,
    "/imgs/img2.png",
    "洋服",
    "/imgs/img1.png",
    "電車",
    "1",
  ],
];

let quiz = document.getElementById(`question`);
let answer1 = document.getElementById(`answer1`);
let answer2 = document.getElementById(`answer2`);
let myName = document.getElementById(`box`);
let img1 = document.getElementById(`img1`);
let img2 = document.getElementById(`img2`);
let btn1 = document.getElementById(`btn1`);
let btn2 = document.getElementById(`btn2`);

let correct = 0;
// 正解数を数える
let quizCnt = 0;
// 問題数を数える

function quizSet() {
  quiz.textContent = question[quizCnt][0];
  answer1.textContent = question[quizCnt][2];
  img1.src = question[quizCnt][1];
  answer2.textContent = question[quizCnt][4];
  img2.src = question[quizCnt][3];
}

quizSet();

function answerCheck(ans) {
  if (ans == question[quizCnt][3]) {
    alert("正解だよ");
    correct++;
  } else {
    alert("不正解");
  }
  quizCnt++;
  if (quizCnt == question.length) {
    quiz.textContent = `正解数は${correct}/${quizCnt}点です`;
    img1.remove();
    answer1.remove();
    img2.remove();
    answer2.remove();
    btn1.remove();
    btn2.remove();
  } else {
    quizSet();
  }
}

// function answerCheck(ans) {
//   if (ans == question[quizCnt][3]) {
//     alert("正解だよ");
//     correct++;
//   } else {
//     alert("不正解");
//   }
//   quizCnt++;
//   if (quizCnt == question.length) {
//     quiz.textContent = `正解数は${correct}/2でした`;
//     ans1.textContent = "";
//     ans2.textContent = "";
//   } else {
//     quizSet();
//   }
// }

// console.log(question[1][0]);
