let questions = [
  [
    "第１問",
    "地球温暖化が進むと、海の近くの陸地は増えるでしょうか？",
    "◯",
    "3",
    "3",
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

let quiz = document.getElementById(`numberQuestions`);
let question = document.getElementById(`question`);
let btn1 = document.getElementById(`btn1`);
let btn2 = document.getElementById(`btn2`);

let correct = 0;
// 正解数を数える
let quizCnt = 0;
// 問題数を数える

function quizSet() {
  quiz.textContent = questions[quizCnt][0];
  question.textContent = questions[quizCnt][1];
}

quizSet();

function answerCheck(ans) {
  if (ans == questions[quizCnt][3]) {
    alert("正解だよ");
    correct++;
  } else {
    alert("不正解");
  }
  quizCnt++;
  if (quizCnt == questions.length) {
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
