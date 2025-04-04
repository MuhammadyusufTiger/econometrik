const testdata = [
  {
    id: 1,
    question: "Yarim additiv funksional qanday aniqlanadi?",
    options: [
      "Faqat ko‘paytirish qoidalarini qanoatlantiradigan funksional", 
      "Additivlikning faqat qisman bajarilishini talab qiladigan funksional", 
      "Har doim chiziqli bo‘lgan funksional", 
      "Har qanday funksiyalarni chiziqli bog‘lovchi operator"
    ],
    answer: "Additivlikning faqat qisman bajarilishini talab qiladigan funksional"
  },
  {
    id: 2,
    question: "Yarim additiv funksionalning asosiy xususiyatlaridan biri nima?",
    options: [
      "Har qanday qiymatda simmetrik bo‘lishi",
      "O‘zgarmas nol nuqtaga ega bo‘lishi",
      "Qisman additivlik shartini bajarishi",
      "Vektorlar yig‘indisi bilan mutlaq bir xil bo‘lishi",
    ],
    answer: "Qisman additivlik shartini bajarishi",
  },
  {
    id: 3,
    question: "Quyidagi qaysi ifoda yarim additiv funksionallarga mos keladi?",
    options: [
      "f(x+y)=f(x)+f(y)f(x + y) = f(x) + f(y) har doim to‘g‘ri bo‘ladi", 
      "f(x+y)≤f(x)+f(y)f(x + y) \leq f(x) + f(y)", 
      "f(ax)=af(x)f(ax) = af(x) faqat musbat aa lar uchun", 
      "f(x−y)=f(x)−f(y)f(x - y) = f(x) - f(y)"
    ],
    answer: "f(x+y)≤f(x)+f(y)f(x + y) \leq f(x) + f(y)",
  },
  {
    id: 4,
    question:
      "Yarim additiv funksionallar qaysi sohalarda keng qo‘llaniladi?",
    options: [
      "Fazoviy fizika va geometriya", 
      "Chiziqli algebra va funksional analiz", 
      "Faqat sonli hisoblash sohalarida", 
      "Matematika va kimyo"
    ],
    answer: "Chiziqli algebra va funksional analiz",
  },
  {
    id: 5,
    question:
      "Yarim additiv funksional uchun asosiy cheklov sharti nima?",
    options: [
      "Funksiyaning har doim chiziqli bo‘lishi",
      "Funksiyaning chegarasi faqat musbat qiymatlarda bo‘lishi",
      "Funksiyaning additivlikni qisman bajarishi",
      "Funksiyaning nolga teng bo‘lmasligi",
    ],
    answer: "Funksiyaning additivlikni qisman bajarishi",
  },
  {
    id: 6,
    question:
      "Yarim additiv funksionallar uchun qaysi tenglik har doim bajariladi?",
    options: [
      "f(0)=0f(0) = 0",
      "f(x+x)=2f(x)f(x + x) = 2f(x)",
      "f(x)≥0f(x) \geq 0 barcha xx uchun",
      "f(x⋅y)=f(x)⋅f(y)f(x \cdot y) = f(x) \cdot f(y)",
    ],
    answer: "f(0)=0f(0) = 0",
  },
  {
    id: 7,
    question:
      "Quyidagi qaysi funksiyalar yarim additiv funksionallar bo‘lishi mumkin?",
    options: [
      "To‘g‘ri chiziqli operatorlar",
      "Kvadrat ildiz operatorlari",
      "Ikkilangan matritsalar determinantlari",
      "Har qanday funksiyalar",
    ],
    answer: "To‘g‘ri chiziqli operatorlar",
  },
  {
    id: 8,
    question:
      "Yarim additiv funksionallarni tahlil qilish uchun qaysi asboblar muhim hisoblanadi?  ",
    options: [
      "Ehtimollar nazariyasi",
      "Cheklangan ketma-ketliklar",
      "Chiziqli operatorlar nazariyasi",
      "Matritsalar determinantlari",
    ],
    answer: "Chiziqli operatorlar nazariyasi",
  },
  {
    id: 9,
    question:
      "Yarim additiv funksionallar odatda qaysi sohada ishlatiladi?",
    options: [
      "Fazoviy ma'lumotlar tahlili",
      "Kompleks sonlar nazariyasi",
      "Normallangan chiziqli fazolar",
      "Faqat diskret matematikada",
    ],
    answer: "Normallangan chiziqli fazolar",
  },
  {
    id: 10,
    question: "Yarim additiv funksionallar va chiziqli funksionallar o‘rtasidagi asosiy farq nimada?",
    options: [
      "Yarim additiv funksionallar har doim nolga teng bo‘ladi",
      "Yarim additiv funksionallar qisman additivlikni bajaradi, chiziqli funksionallar esa to‘liq bajaradi",
      "Yarim additiv funksionallar faqat musbat qiymatlarga ega bo‘ladi",
      "Chiziqli funksionallar chiziqli bo‘lmaydi",
    ],
    answer: "Yarim additiv funksionallar qisman additivlikni bajaradi, chiziqli funksionallar esa to‘liq bajaradi",
  },
  {
    id: 11,
    question:
      "Yarim additiv funksionallar qaysi fazolar bilan ishlaydi?",
    options: [
      "Normallangan chiziqli fazolar",
      "Kvadrat fazolar",
      "Diskret fazolar",
      "Cheklangan ketma-ketliklar fazolari",
    ],
    answer: "Normallangan chiziqli fazolar",
  },
  {
    id: 12,
    question:
      "Yarim additiv funksional quyidagi qaysi operatsiyani qanoatlantirishi shart emas?",
    options: [
      "Additivlik",
      "Chiziqlilik",
      "Cheklilik",
      "Uzluksizlik",
    ],
    answer: "Chiziqlilik",
  },
  {
    id: 13,
    question:
      "Yarim additiv funksionallarning asosiy amaliy qo‘llanilish sohasi qaysi?",
    options: [
      "Matritsalar nazariyasi",
      "Operatorlar nazariyasi",
      "Fazoviy chiziqli funksiyalar",
      "Kompleks sonlar analizi",
    ],
    answer: "Operatorlar nazariyasi",
  },
  {
    id: 14,
    question:
      "Yarim additiv funksional qanday fazolarda yaxshi o‘rganiladi?",
    options: [
      "Cheksiz o‘lchovli fazolarda", 
      "Cheklangan sonli fazolarda", 
      "Kvadrat ildiz fazolarida", 
      "Sonlar chiziqlari fazolarida"
      ],
    answer: "Cheksiz o‘lchovli fazolarda",
  },
  {
    id: 15,
    question: "Yarim additiv funksional qaysi xossani har doim bajaradi?",
    options: ["Cheklilik", "Uzluksizlik", "Qisman chiziqlilik", "O‘zgarmas nol nuqta"],
    answer: "Qisman chiziqlilik",
  },
  {
    id: 16,
    question:
      "Yarim additiv funksionalni aniqlash uchun qaysi shart bajarilishi kerak?",
    options: [
      "Faqat ijobiy qiymatlar uchun chiziqlilik", 
      "Funksiyaning qisman chiziqlilikni ta'minlashi", 
      "Funksiyaning cheklangan bo‘lishi", 
      "Funksiyaning nolga teng bo‘lishi"
    ],
    answer: "Funksiyaning qisman chiziqlilikni ta'minlashi",
  },
  {
    id: 17,
    question:
      "Quyidagi qaysi operator yarim additiv funksional sifatida qabul qilinadi?",
    options: [
      "Laplas operatori", 
      "Normallangan chiziqli operator", 
      "Kvadrat ildiz operatori", 
      "Diskret konvolyutsiya operatori"
    ],
    answer: "Normallangan chiziqli operator",
  },
  {
    id: 18,
    question: "Yarim additiv funksionallarni o‘rganishda qaysi asosiy metod ishlatiladi?",
    options: [
      "Variatsion tahlil",
      "Operatorlar cheklanganligi",
      "Integral yondashuvlar",
      "Kompleks tahlil",
    ],
    answer: "Operatorlar cheklanganligi",
  },
  {
    id: 19,
    question:
      "Yarim additiv funksional uchun qaysi qoida har doim bajariladi?",
    options: [
      "Additivlik cheklangan holda bo‘lishi mumkin",
      "Normallik har doim bajarilishi kerak",
      "Uzluksizlik har doim talab qilinadi",
      "Har qanday x va y uchun f(x+y)=f(x)+f(y)f(x+y) = f(x) + f(y)",
    ],
    answer: "Additivlik cheklangan holda bo‘lishi mumkin",
  },
  {
    id: 20,
    question:
      "Yarim additiv funksionallar uzluksiz bo‘lishi uchun qaysi shart bajarilishi kerak?",
    options: [
      "Funksional normasi cheklangan bo‘lishi", 
      "Funksional sonli bo‘lishi", 
      "Funksional faqat nolga teng bo‘lishi", 
      "Funksionalning simmetrik bo‘lishi"
    ],
    answer: "Funksional normasi cheklangan bo‘lishi",
  },
  {
    id: 21,
    question:
      "Yarim additiv funksionallar qanday geometrik ob'ektlarga tegishli bo‘lishi mumkin?",
    options: [
      "To‘g‘ri chiziqlar",
      "Cheksiz o‘lchovli gipertekisliklar",
      "Kvadrat matritsalar",
      "Cheklangan diskret to‘plamlar",
    ],
    answer: "Cheksiz o‘lchovli gipertekisliklar",
  },
  {
    id: 22,
    question:
      "Yarim additiv funksionallarni normallangan fazolarda o‘rganishning asosiy maqsadi nima?",
    options: [
      "Funksiyaning o‘zgaruvchanligini aniqlash",
      "Fazoning uzluksizligini ta'minlash",
      "Fazodagi chegarani aniqlash",
      "Fazodagi operatorlarni cheklashi",
    ],
    answer: "Fazodagi operatorlarni cheklash",
  },
  {
    id: 23,
    question:
      "Yarim additiv funksionallarning qaysi turi ko‘proq matematik analizda qo‘llaniladi?",
    options: [
      "Vektorli funksiyalar",
      "Uzluksiz operatorlar",
      "Diskret operatorlar",
      "Matritsalar determinantlari",
    ],
    answer: "Uzluksiz operatorlar",
  },
  {
    id: 24,
    question:
      "Yarim additiv funksionalni chiziqli funksionaldan farqlovchi asosiy xususiyat nima?",
    options: [
      "Nol nuqtaning mavjudligi",
      "Additivlikni to‘liq qanoatlantirmasligi",
      "Cheklilikni bajarishi",
      "Har qanday qiymatni qabul qilishi",
    ],
    answer: "Additivlikni to‘liq qanoatlantirmasligi",
  },
  {
    id: 25,
    question: "Quyidagi qaysi fazo yarim additiv funksionallar uchun to‘g‘ri o‘rganish obyekti hisoblanadi?",
    options: [
      "Hilbert fazolari",
      "Kvadrat matritsalar fazolari",
      "Diskret sonlar fazolari",
      "Fazoviy trigonometrik fazolar",
    ],
    answer: "Hilbert fazolari",
  },
  {
    id: 26,
    question:
      "Yarim additiv funksionallar qaysi shartlarni cheklangan holda bajaradi?",
    options: [
      "Normallik va chiziqlilik",
      "Uzluksizlik va nol nuqta mavjudligi",
      "Additivlik va uzluksizlik",
      "Chiziqlilik va simmetriya",
    ],
    answer: "Additivlik va uzluksizlik",
  },
  {
    id: 27,
    question: "Yarim additiv funksionallarning asosiy matematik qo‘llanilishi nimani o‘z ichiga oladi?",
    options: [
      "Fazolar cheklanishini o‘rganish",
      "Operatorlarning uzluksizligini ta'minlash",
      "Fazolarni ko‘paytirish nazariyasi",
      "Cheklangan o‘lchamli ma'lumotlar tahlili",
    ],
    answer: "Operatorlarning uzluksizligini ta'minlash",
  }
];

const user_answer = new Array(25).fill(null);
const select_answer = new Array(25).fill(null);

// console.log(user_answer)
let ansverId;
let arrayTest = [];
let arrOption = [];
var k = 1;
let fine=0;
let attemp=5;

$(document).ready(() => {
  arrayTest = massivTuzish(testdata.length, 25);
  for (var k = 1; k <= arrayTest.length; k++) {
    arrOption.push(massivTuzish(4, 4));
    testbtnlist.innerHTML += `
      <li>
        <a class="done" id="que_${k}" onclick="clickbtn(${k})" href="#">${k}</a>
      </li>
    `;
  }
  setValue(1);
  timer1();
});

function massivTuzish(m, n) {
  let massiv = [];
  let i = 0;

  while (i < n) {
    var k = Math.floor(Math.random() * m);
    if (!massiv.includes(k)) {
      massiv.push(k);
      i++;
    }
  }
  return massiv;
}



function toggleParentClass(radio) {
  var parent = radio.parentNode;

  // Remove 'checked' class from all answer-items
  var answerItems = document.querySelectorAll(".answer-item");

  for (var i = 0; i < answerItems.length; i++) {
    if (answerItems[i] == parent) {
      select_answer[ansverId - 1] = i;
      user_answer[ansverId - 1] = parent.querySelector("span").innerHTML;
    }

    if (answerItems[i] !== parent) {
      answerItems[i].classList.remove("checked");
      answerItems[i].querySelector('input[type="radio"]').checked = false;
    }
  }

  if (radio.checked) {
    parent.classList.add("checked");
    // console.log(testdata[ansverId].answer)
  } else {
    parent.classList.remove("checked");
  }

  // alert(k);
  let cur = document.querySelector(`#que_${ansverId}`);
  cur.style.background = "rgb(0, 156, 255)";
}

function checked_ansver() {
  var answerItems = document.querySelectorAll(".answer-item");

  for (var i = 0; i < answerItems.length; i++) {
    answerItems[i].classList.remove("checked");
    answerItems[i].querySelector('input[type="radio"]').checked = false;
  }

  if (user_answer[ansverId - 1] != null) {
    for (var i = 0; i < answerItems.length; i++) {
      if (i == select_answer[ansverId - 1]) {
        answerItems[i].classList.add("checked");
        answerItems[i].querySelector('input[type="radio"]').checked = true;
      }
    }
  }
}

const el = (e) => document.querySelector(e);

const testbtnlist = el("#questionbtn");
const count_question = el("#count_question");
const number_question = el("#question-num");
const question_text = el(".question-text");
const timer_teg = el("#timer");

const option1 = el("#op1");
const option2 = el("#op2");
const option3 = el("#op3");
const option4 = el("#op4");

let n,
  a = 1;

function setValue(k) {
  n = arrayTest.length;
  ansverId = k;
  number_question.innerHTML = k;
  count_question.innerHTML = k + "/" + n;
  question_text.innerHTML = testdata[arrayTest[k - 1]].question;

  option1.innerHTML = testdata[arrayTest[k - 1]].options[arrOption[k - 1][0]];
  option2.innerHTML = testdata[arrayTest[k - 1]].options[arrOption[k - 1][1]];
  option3.innerHTML = testdata[arrayTest[k - 1]].options[arrOption[k - 1][2]];
  option4.innerHTML = testdata[arrayTest[k - 1]].options[arrOption[k - 1][3]];

  checked_ansver();
}

function clickbtn(id) {
  k = document.getElementById(`que_${id}`).innerHTML;
  setValue(k);
}

function pClick() {
  var b = parseInt(number_question.innerHTML);

  if (b > 1) {
    b -= 1;
    setValue(b);
  }
}

function nClick() {
  var b = parseInt(number_question.innerHTML);
  if (b < n) {
    b += 1;
    setValue(b);
  }
}

function timer1() {
  var timeLimitInMinutes = 50;
  var timeLimitInSeconds = timeLimitInMinutes * 60;
  var timerElement = document.getElementById("timer");

  function startTimer() {
    timeLimitInSeconds--;

    var minutes = Math.floor(timeLimitInSeconds / 60);
    var seconds = timeLimitInSeconds % 60;

    if (timeLimitInSeconds < 0) {
      timerElement.textContent = "00:00";
      clearInterval(timerInterval);
      return;
    }

    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    timerElement.innerHTML = minutes + ":" + seconds;
  }

  var timerInterval = setInterval(startTimer, 1000);
}

let ansverId1=document.querySelector("#answerId")
function getAnsver(){
  fine++;
  q=number_question.innerHTML;
  ansverId1.textContent=testdata[arrayTest[q - 1]].answer;
}
function endTest() {
  var c = 0, inc = 0, usc = 0;
  
  for (var i = 0; i < arrayTest.length; i++) {
      if (user_answer[i] != null) {
          if (user_answer[i] == testdata[arrayTest[i]].answer) {
              c++;
          } else {
              inc++;
          }
      } else {
          usc++;
      }
  }

  // Natijalarni ekranga chiqarish
  document.querySelector("#cans").textContent = `To'g'ri: ${c}`;
  document.querySelector("#icans").textContent = `Noto'g'ri: ${inc}`;
  document.querySelector("#fine").textContent = `Jarima: ${fine}`;
  document.querySelector("#fullball").textContent = `Umumiy ball: ${(c - fine)*4}`;
  document.querySelector("#noselect").textContent = `Belgilanmagan: ${usc}`;

  // Vaqtni olish
  const now = new Date();
  const timestamp = now.toLocaleString("uz-UZ"); // O'zbek formati

  // Telegram bot ma'lumotlari
  const botToken = "8004485281:AAEMcD6Z4hwMeDwaRydfw1ILvJL8Pqr9WfA"; // O'zgartiring
  const chatId = "687097935"; // O'zingizning chat ID ni kiriting

  // Xabar matni
  const message = `🕒 Test tugallangan vaqt: ${timestamp}
📊 *Test natijasi:*
✅ To'g'ri javoblar: ${c}
❌ Noto'g'ri javoblar: ${inc}
⚪ Belgilanmagan javoblar: ${usc}
🏆 Umumiy ball: ${(c - fine)*4}`;

  // Telegram API-ga so‘rov yuborish
  fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
          chat_id: chatId,
          text: message
      })
  })
  .then(response => response.json())
  .then(data => {
      console.log("Xabar yuborildi:", data);
      
      // 1.5 soniya kutish va keyin sahifani o‘zgartirish
      setTimeout(() => {
          window.location = "studentindex.html";
      }, 20000);
  })
  .catch(error => {
      console.error("Xatolik yuz berdi:", error);
  });
}
