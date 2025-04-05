const testdata = [
  {
    id: 1,
    question: "Ekonometrika fanining asosiy maqsadi nima?",
    options: [
      "Iqtisodiy jarayonlarni matematik modellashtirish",
      "Moliyaviy hisobotlarni tekshirish", 
      "Statistika nazariyalarini o‘rganish", 
      "Buxgalteriya hisobini yuritish",
    ],
    answer: "Iqtisodiy jarayonlarni matematik modellashtirish"
  },
  {
    id: 2,
    question: "Iqtisodiy o‘zgaruvchilar orasidagi bog‘liqlikni aniqlash uchun qaysi usul qo‘llaniladi?",
    options: [
      "Deskriptiv statistika",
      "Ehtimollar nazariyasi",
      "Regressiya tahlili",
      "Hisob-kitob amallari",
    ],
    answer: "Regressiya tahlili",
  },
  {
    id: 3,
    question: "Ekonometrik modelning tarkibiy qismlaridan biri bu:",
    options: [
      "Differensial tenglama", 
      "Statik analiz", 
      "Tasodifiy xatolik", 
      "Barcha javoblar to‘g‘ri"
    ],
    answer: "Tasodifiy xatolik",
  },
  {
    id: 4,
    question:
      "Agar ikkita o‘zgaruvchi orasida kuchli chiziqli bog‘liqlik mavjud bo‘lsa, bu hodisa qanday ataladi?",
    options: [
      "Geteroskedastiklik", 
      "Avtokorrelyatsiya", 
      "Multikollinearlik", 
      "Endogenlik"
    ],
    answer: "Multikollinearlik",
  },
  {
    id: 5,
    question:
      "Regressiya tahlilida R² statistikasi nima uchun ishlatiladi?",
    options: [
      "O‘zgaruvchilar orasidagi bog‘liqlikni o‘lchash uchun",
      "Modeldagi tasodifiy xatolikni hisoblash uchun",
      "Heteroskedastiklikni tekshirish uchun",
      "Endogenlikni bartaraf etish uchun",
    ],
    answer: "O‘zgaruvchilar orasidagi bog‘liqlikni o‘lchash uchun",
  },
  {
    id: 6,
    question:
      "OLS (Eng kichik kvadratlar usuli) qanday asosiy shartlarga tayanadi?",
    options: [
      "Tasodifiy xatoliklarning normal taqsimlanishi",
      "Tasodifiy xatoliklarning o‘rtacha qiymati nolga teng bo‘lishi",
      "Tasodifiy xatoliklarning o‘zaro bog‘liq emasligi",
      "Barcha javoblar to‘g‘ri",
    ],
    answer: "Barcha javoblar to‘g‘ri",
  },
  {
    id: 7,
    question:
      "Geteroskedastiklik nimani anglatadi?",
    options: [
      "Model parametrlarining noto‘g‘ri baholanganligini",
      "Xatolik dispersiyasining o‘zgaruvchilar qiymatiga bog‘liq ekanligini",
      "Mustaqil o‘zgaruvchilar orasidagi kuchli bog‘liqlikni",
      "O‘zgaruvchilar orasidagi o‘zaro ta’sirni",
    ],
    answer: "Xatolik dispersiyasining o‘zgaruvchilar qiymatiga bog‘liq ekanligini",
  },
  {
    id: 8,
    question:
      "Eng kichik kvadratlar usulida qaysi shart bajarilsa, baholovchilar samarali bo‘ladi?",
    options: [
      "Multikollinearlik yo‘qli",
      "Gauss-Markov teoremasi bajarilishi",
      "Iqtisodiy interpretatsiya mavjudligi",
      "Modelning yuqori darajada mosligi",
    ],
    answer: "Gauss-Markov teoremasi bajarilishi",
  },
  {
    id: 9,
    question:
      "Autokorrelyatsiya qaysi statistik test bilan tekshiriladi?",
    options: [
      "White testi",
      "Durbin-Watson testi",
      "Fisher testi",
      "Student testi",
    ],
    answer: "Durbin-Watson testi",
  },
  {
    id: 10,
    question: "Agar modelda mustaqil o‘zgaruvchilar kuchli bog‘liq bo‘lsa, nima sodir bo‘ladi?",
    options: [
      "Regressiya natijalari ishonchsiz bo‘ladi",
      "Tasodifiy xatolar kamayadi",
      "Model aniq va ishonchli bo‘ladi",
      "OLS baholovchilari samarali ishlaydi",
    ],
    answer: "Regressiya natijalari ishonchsiz bo‘ladi",
  },
  {
    id: 11,
    question:
      "Heteroskedastiklik mavjudligini tekshirish uchun qaysi test ishlatiladi?",
    options: [
      "Breusch-Pagan testi",
      "Kolmogorov-Smirnov testi",
      "Jarque-Bera testi",
      "Durbin-Watson testi",
    ],
    answer: "Breusch-Pagan testi",
  },
  {
    id: 12,
    question:
      "Endogenlik muammosi nimani anglatadi?",
    options: [
      "Mustaqil o‘zgaruvchilar tasodifiy xatolik bilan bog‘liq bo‘lishi",
      "Regressiya modelida noma’lum o‘zgaruvchining mavjudligi",
      "Regressiya modelida noma’lum o‘zgaruvchining mavjudligi",
      " Model parametrlarining noto‘g‘ri baholanishi",
    ],
    answer: "Mustaqil o‘zgaruvchilar tasodifiy xatolik bilan bog‘liq bo‘lishi",
  },
  {
    id: 13,
    question:
      "Ekonometrik modelda dummy (soxta) o‘zgaruvchilar nima uchun ishlatiladi?",
    options: [
      "Nominal yoki kategorik o‘zgaruvchilarni ifodalash uchun",
      "Tasodifiy xatolarni kamaytirish uchun",
      "Modelda heteroskedastiklikni oldini olish uchun",
      "Modelning mosligini oshirish uchun",
    ],
    answer: "Nominal yoki kategorik o‘zgaruvchilarni ifodalash uchun",
  },
  {
    id: 14,
    question:
      "Eng kichik kvadratlar usulida qanday shart bajarilmasa, model noto‘g‘ri baholangan bo‘ladi?",
    options: [
      "Multikollinearlik mavjud bo‘lsa",
      "Mustaqil o‘zgaruvchilar normal taqsimlanmasa",
      "Endogenlik mavjud bo‘lsa",
      "Barcha javoblar to‘g‘ri",
    ],
    answer: "Barcha javoblar to‘g‘ri",
  },
  {
    id: 15,
    question:
      "Ekonometrik modellarni tahlil qilishda statistik ahamiyatlilikni qanday tekshirish mumkin?",
    options: [
      "P-qiymati va t-statistikasi orqali",
      "R² koeffitsienti orqali",
      "Log-likelihood funksiyasi orqali",
      "Autokorrelyatsiyani tekshirish orqali",
    ],
    answer: "P-qiymati va t-statistikasi orqali",
  },
  {
    id: 16,
    question:
      "Regressiya modelidagi tasodifiy xatolik nimani anglatadi?",
    options: [
      "O‘zgaruvchilar orasidagi bog‘liqlik darajasini",
      "Modelda tushuntirilmagan omillarni",
      "Mustaqil o‘zgaruvchilarning ta’sirini",
      "Modelning umumiy aniqligini",
    ],
    answer: "Modelda tushuntirilmagan omillarni",
  },
  {
    id: 17,
    question:
      "Agar t-test natijasida mustaqil o‘zgaruvchining t-statistikasi juda past bo‘lsa, bu nimani anglatadi?",
    options: [
      "Mustaqil o‘zgaruvchi modelda statistik ahamiyatga ega emas",
      "Modelda autokorrelyatsiya mavjud",
      "Modeldagi tasodifiy xatolar noto‘g‘ri baholangan",
      "R² darajasi yuqori bo‘lishi kerak",
    ],
    answer: "Mustaqil o‘zgaruvchi modelda statistik ahamiyatga ega emas",
  },
  {
    id: 18,
    question:
      "Agar modelda ortiqcha o‘zgaruvchilar mavjud bo‘lsa, bu qanday muammoga olib keladi?",
    options: [
      "Multikollinearlik",
      "Autokorrelyatsiya",
      "Overfitting (ortiqcha moslashuv)",
      "Heteroskedastiklik",
    ],
    answer: "Overfitting (ortiqcha moslashuv)",
  },
  {
    id: 19,
    question:
      "Breusch-Godfrey testi nima uchun ishlatiladi?",
    options: [
      "Heteroskedastiklikni tekshirish uchun",
      "Endogenlikni aniqlash uchun",
      "Autokorrelyatsiyani tekshirish uchun",
      "Multikollinearlikni baholash uchun",
    ],
    answer: "Autokorrelyatsiyani tekshirish uchun",
  },
  {
    id: 20,
    question:
      "Ko‘p o‘zgaruvchili regressiya modelida koeffitsiyentlarni baholash uchun qaysi usul qo‘llaniladi?",
    options: [
      "Logistik regressiya",
      "Eng kichik kvadratlar usuli (OLS)",
      "Diskriminant tahlil",
      "Panel ma’lumotlar tahlili",
    ],
    answer: "Eng kichik kvadratlar usuli (OLS)",
  },
  {
    id: 21,
    question:
      "Agar ekonometrik modelda mustaqil o‘zgaruvchi ortiqcha bo‘lsa, qanday natija yuzaga keladi?",
    options: [
      "Modelning R² qiymati pasayadi",
      "Model parametrlarining ishonchliligi oshadi",
      "Modelda noto‘g‘ri bog‘liqlik paydo bo‘lishi mumkin",
      "Modeldagi tasodifiy xatolar kamayadi",
    ],
    answer: "Modelda noto‘g‘ri bog‘liqlik paydo bo‘lishi mumkin",
  },
  {
    id: 22,
    question:
      "Panel ma’lumotlar modeli nimani o‘z ichiga oladi?",
    options: [
      "Faqat vaqt bo‘yicha o‘zgaruvchilarni",
      "Faqat kesim bo‘yicha o‘zgaruvchilarni",
      "Vaqt va kesim bo‘yicha o‘zgaruvchilarni",
      "Faqat tasodifiy xatolarni",
    ],
    answer: "Vaqt va kesim bo‘yicha o‘zgaruvchilarni",
  },
  {
    id: 23,
    question:
      "Ekonometrik modeldagi R² ko‘rsatkichining ma’nosi nima?",
    options: [
      "Model parametrlarining statistik ahamiyatlilik darajasi",
      "Modelning aniqlilik darajasi",
      "O‘zgaruvchilar orasidagi bog‘liqlik darajasi",
      "Modelning mustahkamligini",
    ],
    answer: "Modelning aniqlilik darajasi",
  },
  {
    id: 24,
    question:
      "F-statistika nima uchun ishlatiladi?",
    options: [
      "Regressiya modelining umumiy statistik ahamiyatliligini tekshirish uchun",
      "Modeldagi har bir o‘zgaruvchining ahamiyatliligini tekshirish uchun",
      "Xatolik dispersiyasini tekshirish uchun",
      "Autokorrelyatsiyani tekshirish uchun",
    ],
    answer: "Regressiya modelining umumiy statistik ahamiyatliligini tekshirish uchun",
  },
  {
    id: 25,
    question:
      "Eng yaxshi ekonometrik modelni tanlashda qaysi kriteriy qo‘llaniladi?",
    options: [
      "Adjusted R² (Tuzatilgan R²)",
      "P-qiymati",
      "Akaike informatsiya kriteriyasi (AIC)",
      "Barcha javoblar to‘g‘ri",
    ],
    answer: "Barcha javoblar to‘g‘ri",
  },
  {
    id: 26,
    question:
      "Heteroskedastiklik mavjud bo‘lganda, qaysi natija yuzaga keladi?",
    options: [
      "OLS baholovchilari samarador bo‘lmaydi",
      "Mustaqil o‘zgaruvchilar ahamiyatsiz bo‘ladi",
      "Endogenlik muammosi yuzaga keladi",
      "Regressiya koeffitsiyentlari o‘zgaradi",
    ],
    answer: "OLS baholovchilari samarador bo‘lmaydi",
  },
  {
    id: 27,
    question:
      "Ridge regression nima uchun qo‘llaniladi?",
    options: [
      "Multikollinearlik muammosini bartaraf etish uchun",
      "Heteroskedastiklikni kamaytirish uchun",
      "Tasodifiy xatolarni aniqlash uchun",
      "Endogenlikni oldini olish uchun",
    ],
    answer: "Multikollinearlik muammosini bartaraf etish uchun",
  },
  {
    id: 28,
    question:
      "Agar ekonometrik modelda tasodifiy xatoliklarning dispersiyasi vaqt o‘tishi bilan o‘zgarsa, bu qanday muammo?",
    options: [
      "Multikollinearlik",
      "Autokorrelyatsiya",
      "Heteroskedastiklik",
      "Endogenlik",
    ],
    answer: "Heteroskedastiklik",
  },
  {
    id: 29,
    question:
      "Instrumental o‘zgaruvchilar usuli qachon ishlatiladi?",
    options: [
      "Mustaqil o‘zgaruvchilar va xatoliklar bog‘liq bo‘lganda",
      "Modelda autokorrelyatsiya mavjud bo‘lganda",
      "OLS baholovchilari samarador bo‘lmaganda",
      "R² juda past bo‘lganda",
    ],
    answer: "Mustaqil o‘zgaruvchilar va xatoliklar bog‘liq bo‘lganda",
  },
  {
    id: 30,
    question:
      "Log-likelihood funksiyasi nimani baholashda ishlatiladi?",
    options: [
      "Model parametrlarining ishonchliligini",
      "Modelning umumiy aniqligini",
      "Modelning ehtimollik funktsiyasini",
      "Mustaqil o‘zgaruvchilar ta’sirini",
    ],
    answer: "Modelning ehtimollik funktsiyasini",
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
  const email1 = localStorage.getItem("userEmail");

  // Telegram bot ma'lumotlari
  const botToken = "7632753338:AAFepTlhKAFlqHM8-zh76UABzJQPYXSfGnI"; // Bot tokenini o'zgartiring
  const chatId = "7438762563"; // O'zingizning chat ID ni kiriting

  // Xabar matni
  const message = `
🕒 Test tugallangan vaqt: ${timestamp}
📧 Email address: ${email1}
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
