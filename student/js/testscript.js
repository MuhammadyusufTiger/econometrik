const testdata = [
  {
    id: 1,
    question: "Ekonometrika fanining asosiy maqsadi nima?",
    options: [
      "Iqtisodiy jarayonlarni matematik modellashtirish",
      "Moliyaviy hisobotlarni tekshirish",
      "Statistika nazariyalarini o‘rganish",
      "Buxgalteriya hisobini yuritish"
    ],
    answer: ["Iqtisodiy jarayonlarni matematik modellashtirish"]
  },
  {
    id: 2,
    question: "Iqtisodiy o‘zgaruvchilar orasidagi bog‘liqlikni aniqlash uchun qaysi usul qo‘llaniladi?",
    options: [
      "Deskriptiv statistika",
      "Ehtimollar nazariyasi",
      "Regressiya tahlili",
      "Hisob-kitob amallari"
    ],
    answer: ["Regressiya tahlili"]
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
    answer: ["Tasodifiy xatolik"]
  },
  {
    id: 4,
    question: "Agar ikkita o‘zgaruvchi orasida kuchli chiziqli bog‘liqlik mavjud bo‘lsa, bu hodisa qanday ataladi?",
    options: [
      "Geteroskedastiklik",
      "Avtokorrelyatsiya",
      "Multikollinearlik",
      "Endogenlik"
    ],
    answer: ["Multikollinearlik"]
  },
  {
    id: 5,
    question: "Regressiya tahlilida R² statistikasi nima uchun ishlatiladi?",
    options: [
      "O‘zgaruvchilar orasidagi bog‘liqlikni o‘lchash uchun",
      "Modeldagi tasodifiy xatolikni hisoblash uchun",
      "Heteroskedastiklikni tekshirish uchun",
      "Endogenlikni bartaraf etish uchun"
    ],
    answer: ["O‘zgaruvchilar orasidagi bog‘liqlikni o‘lchash uchun"]
  },
  {
    id: 6,
    question: "OLS (Eng kichik kvadratlar usuli) qanday asosiy shartlarga tayanadi?",
    options: [
      "Tasodifiy xatoliklarning normal taqsimlanishi",
      "Tasodifiy xatoliklarning o‘rtacha qiymati nolga teng bo‘lishi",
      "Tasodifiy xatoliklarning o‘zaro bog‘liq emasligi",
      "Barcha javoblar to‘g‘ri"
    ],
    answer: ["Barcha javoblar to‘g‘ri"]
  },
  {
    id: 7,
    question: "Geteroskedastiklik nimani anglatadi?",
    options: [
      "Model parametrlarining noto‘g‘ri baholanganligini",
      "Xatolik dispersiyasining o‘zgaruvchilar qiymatiga bog‘liq ekanligini",
      "Mustaqil o‘zgaruvchilar orasidagi kuchli bog‘liqlikni",
      "O‘zgaruvchilar orasidagi o‘zaro ta’sirni"
    ],
    answer: ["Xatolik dispersiyasining o‘zgaruvchilar qiymatiga bog‘liq ekanligini"]
  },
  {
    id: 8,
    question: "Eng kichik kvadratlar usulida qaysi shart bajarilsa, baholovchilar samarali bo‘ladi?",
    options: [
      "Multikollinearlik yo‘qli",
      "Gauss-Markov teoremasi bajarilishi",
      "Iqtisodiy interpretatsiya mavjudligi",
      "Modelning yuqori darajada mosligi"
    ],
    answer: ["Gauss-Markov teoremasi bajarilishi"]
  },
  {
    id: 9,
    question: "Autokorrelyatsiya qaysi statistik test bilan tekshiriladi?",
    options: [
      "White testi",
      "Durbin-Watson testi",
      "Fisher testi",
      "Student testi"
    ],
    answer: ["Durbin-Watson testi"]
  },
  {
    id: 10,
    question: "Agar modelda mustaqil o‘zgaruvchilar kuchli bog‘liq bo‘lsa, nima sodir bo‘ladi?",
    options: [
      "Regressiya natijalari ishonchsiz bo‘ladi",
      "Tasodifiy xatolar kamayadi",
      "Model aniq va ishonchli bo‘ladi",
      "OLS baholovchilari samarali ishlaydi"
    ],
    answer: ["Regressiya natijalari ishonchsiz bo‘ladi"]
  },
  {
    id: 11,
    question: "Heteroskedastiklik mavjudligini tekshirish uchun qaysi test ishlatiladi?",
    options: [
      "Breusch-Pagan testi",
      "Kolmogorov-Smirnov testi",
      "Jarque-Bera testi",
      "Durbin-Watson testi"
    ],
    answer: ["Breusch-Pagan testi"]
  },
  {
    id: 12,
    question: "Endogenlik muammosi nimani anglatadi?",
    options: [
      "Mustaqil o‘zgaruvchilar tasodifiy xatolik bilan bog‘liq bo‘lishi",
      "Regressiya modelida noma’lum o‘zgaruvchining mavjudligi",
      "Regressiya modelida noma’lum o‘zgaruvchining mavjudligi",
      " Model parametrlarining noto‘g‘ri baholanishi"
    ],
    answer: ["Mustaqil o‘zgaruvchilar tasodifiy xatolik bilan bog‘liq bo‘lishi"]
  },
  {
    id: 13,
    question: "Ekonometrik modelda dummy (soxta) o‘zgaruvchilar nima uchun ishlatiladi?",
    options: [
      "Nominal yoki kategorik o‘zgaruvchilarni ifodalash uchun",
      "Tasodifiy xatolarni kamaytirish uchun",
      "Modelda heteroskedastiklikni oldini olish uchun",
      "Modelning mosligini oshirish uchun"
    ],
    answer: ["Nominal yoki kategorik o‘zgaruvchilarni ifodalash uchun"]
  },
  {
    id: 14,
    question: "Eng kichik kvadratlar usulida qanday shart bajarilmasa, model noto‘g‘ri baholangan bo‘ladi?",
    options: [
      "Multikollinearlik mavjud bo‘lsa",
      "Mustaqil o‘zgaruvchilar normal taqsimlanmasa",
      "Endogenlik mavjud bo‘lsa",
      "Barcha javoblar to‘g‘ri"
    ],
    answer: ["Barcha javoblar to‘g‘ri"]
  },
  {
    id: 15,
    question: "Ekonometrik modellarni tahlil qilishda statistik ahamiyatlilikni qanday tekshirish mumkin?",
    options: [
      "P-qiymati va t-statistikasi orqali",
      "R² koeffitsienti orqali",
      "Log-likelihood funksiyasi orqali",
      "Autokorrelyatsiyani tekshirish orqali"
    ],
    answer: ["P-qiymati va t-statistikasi orqali"]
  },
  {
    id: 16,
    question: "Regressiya modelidagi tasodifiy xatolik nimani anglatadi?",
    options: [
      "O‘zgaruvchilar orasidagi bog‘liqlik darajasini",
      "Modelda tushuntirilmagan omillarni",
      "Mustaqil o‘zgaruvchilarning ta’sirini",
      "Modelning umumiy aniqligini"
    ],
    answer: ["Modelda tushuntirilmagan omillarni"]
  },
  {
    id: 17,
    question: "Agar t-test natijasida mustaqil o‘zgaruvchining t-statistikasi juda past bo‘lsa, bu nimani anglatadi?",
    options: [
      "Mustaqil o‘zgaruvchi modelda statistik ahamiyatga ega emas",
      "Modelda autokorrelyatsiya mavjud",
      "Modeldagi tasodifiy xatolar noto‘g‘ri baholangan",
      "R² darajasi yuqori bo‘lishi kerak"
    ],
    answer: ["Mustaqil o‘zgaruvchi modelda statistik ahamiyatga ega emas"]
  },
  {
    id: 18,
    question: "Agar modelda ortiqcha o‘zgaruvchilar mavjud bo‘lsa, bu qanday muammoga olib keladi?",
    options: [
      "Multikollinearlik",
      "Autokorrelyatsiya",
      "Overfitting (ortiqcha moslashuv)",
      "Heteroskedastiklik"
    ],
    answer: ["Overfitting (ortiqcha moslashuv)"]
  },
  {
    id: 19,
    question: "Breusch-Godfrey testi nima uchun ishlatiladi?",
    options: [
      "Heteroskedastiklikni tekshirish uchun",
      "Endogenlikni aniqlash uchun",
      "Autokorrelyatsiyani tekshirish uchun",
      "Multikollinearlikni baholash uchun"
    ],
    answer: ["Autokorrelyatsiyani tekshirish uchun"]
  },
  {
    id: 20,
    question: "Ko‘p o‘zgaruvchili regressiya modelida koeffitsiyentlarni baholash uchun qaysi usul qo‘llaniladi?",
    options: [
      "Logistik regressiya",
      "Eng kichik kvadratlar usuli (OLS)",
      "Diskriminant tahlil",
      "Panel ma’lumotlar tahlili"
    ],
    answer: ["Eng kichik kvadratlar usuli (OLS)"]
  },
  {
    id: 21,
    question: "Agar ekonometrik modelda mustaqil o‘zgaruvchi ortiqcha bo‘lsa, qanday natija yuzaga keladi?",
    options: [
      "Modelning R² qiymati pasayadi",
      "Model parametrlarining ishonchliligi oshadi",
      "Modelda noto‘g‘ri bog‘liqlik paydo bo‘lishi mumkin",
      "Modeldagi tasodifiy xatolar kamayadi"
    ],
    answer: ["Modelda noto‘g‘ri bog‘liqlik paydo bo‘lishi mumkin"]
  },
  {
    id: 22,
    question: "Panel ma’lumotlar modeli nimani o‘z ichiga oladi?",
    options: [
      "Faqat vaqt bo‘yicha o‘zgaruvchilarni",
      "Faqat kesim bo‘yicha o‘zgaruvchilarni",
      "Vaqt va kesim bo‘yicha o‘zgaruvchilarni",
      "Faqat tasodifiy xatolarni"
    ],
    answer: ["Vaqt va kesim bo‘yicha o‘zgaruvchilarni"]
  },
  {
    id: 23,
    question: "Ekonometrik modeldagi R² ko‘rsatkichining ma’nosi nima?",
    options: [
      "Model parametrlarining statistik ahamiyatlilik darajasi",
      "Modelning aniqlilik darajasi",
      "O‘zgaruvchilar orasidagi bog‘liqlik darajasi",
      "Modelning mustahkamligini"
    ],
    answer: ["Modelning aniqlilik darajasi"]
  },
  {
    id: 24,
    question: "F-statistika nima uchun ishlatiladi?",
    options: [
      "Regressiya modelining umumiy statistik ahamiyatliligini tekshirish uchun",
      "Modeldagi har bir o‘zgaruvchining ahamiyatliligini tekshirish uchun",
      "Xatolik dispersiyasini tekshirish uchun",
      "Autokorrelyatsiyani tekshirish uchun"
    ],
    answer: ["Regressiya modelining umumiy statistik ahamiyatliligini tekshirish uchun"]
  },
  {
    id: 25,
    question: "Eng yaxshi ekonometrik modelni tanlashda qaysi kriteriy qo‘llaniladi?",
    options: [
      "Adjusted R² (Tuzatilgan R²)",
      "P-qiymati",
      "Akaike informatsiya kriteriyasi (AIC)",
      "Barcha javoblar to‘g‘ri"
    ],
    answer: ["Barcha javoblar to‘g‘ri"]
  },
  {
    id: 26,
    question: "Heteroskedastiklik mavjud bo‘lganda, qaysi natija yuzaga keladi?",
    options: [
      "OLS baholovchilari samarador bo‘lmaydi",
      "Mustaqil o‘zgaruvchilar ahamiyatsiz bo‘ladi",
      "Endogenlik muammosi yuzaga keladi",
      "Regressiya koeffitsiyentlari o‘zgaradi"
    ],
    answer: ["OLS baholovchilari samarador bo‘lmaydi"]
  },
  {
    id: 27,
    question: "Ridge regression nima uchun qo‘llaniladi?",
    options: [
      "Multikollinearlik muammosini bartaraf etish uchun",
      "Heteroskedastiklikni kamaytirish uchun",
      "Tasodifiy xatolarni aniqlash uchun",
      "Endogenlikni oldini olish uchun"
    ],
    answer: ["Multikollinearlik muammosini bartaraf etish uchun"]
  },
  {
    id: 28,
    question: "Agar ekonometrik modelda tasodifiy xatoliklarning dispersiyasi vaqt o‘tishi bilan o‘zgarsa, bu qanday muammo?",
    options: [
      "Multikollinearlik",
      "Autokorrelyatsiya",
      "Heteroskedastiklik",
      "Endogenlik"
    ],
    answer: ["Heteroskedastiklik"]
  },
  {
    id: 29,
    question: "Instrumental o‘zgaruvchilar usuli qachon ishlatiladi?",
    options: [
      "Mustaqil o‘zgaruvchilar va xatoliklar bog‘liq bo‘lganda",
      "Modelda autokorrelyatsiya mavjud bo‘lganda",
      "OLS baholovchilari samarador bo‘lmaganda",
      "R² juda past bo‘lganda"
    ],
    answer: ["Mustaqil o‘zgaruvchilar va xatoliklar bog‘liq bo‘lganda"]
  },
  {
    id: 30,
    question: "Log-likelihood funksiyasi nimani baholashda ishlatiladi?",
    options: [
      "Model parametrlarining ishonchliligini",
      "Modelning umumiy aniqligini",
      "Modelning ehtimollik funktsiyasini",
      "Mustaqil o‘zgaruvchilar ta’sirini"
    ],
    answer: ["Modelning ehtimollik funktsiyasini"]
  }
];


/*******************************
 * Aralash test: radio + checkbox
 *  - testdata[].answer: doim MASSIV (bitta bo‘lsa ham ["..."])
 *  - 1 ta javob -> radio, 2+ -> checkbox
 *******************************/

// Shorthand
const $ = (s) => document.querySelector(s);

// Konfiguratsiya
const QUESTION_COUNT = 25;        // nechta savol olinadi
const OPTIONS_PER_QUESTION = 4;   // variantlar soni

// Holat
const user_answer = new Array(QUESTION_COUNT).fill(null); // har savol uchun [renderIndex,...] yoki null
let ansverId;                 // 1-based joriy savol raqami
let arrayTest = [];           // testdata ichidan tanlangan savollar indekslari (uzunligi 25)
let arrOption = [];           // har savol uchun variantlarning render tartibi
let fine = 0;                 // "Yordam?" bosilganlar soni (jarima)
let n;                        // jami tanlangan savollar soni

// Elementlar
const testbtnlist     = $("#questionbtn");
const count_question  = $("#count_question");
const number_question = $("#question-num");
const question_text   = $(".question-text");
const timer_teg       = $("#timer");
const optionsEl       = $("#options");

// Modal elementlar
const ansverId1  = $("#answerId");
const cansEl     = $("#cans");
const icansEl    = $("#icans");
const fineEl     = $("#fine");
const fullBallEl = $("#fullball");
const noselectEl = $("#noselect");

// === Init ===
$(document).ready(() => {
  arrayTest = massivTuzish(testdata.length, QUESTION_COUNT); // 25 ta unik indeks
  for (let i = 0; i < arrayTest.length; i++) {
    arrOption.push(massivTuzish(OPTIONS_PER_QUESTION, OPTIONS_PER_QUESTION)); // 0..3 aralash tartib
  }

  // Navigatsiya tugmalari
  for (let i = 1; i <= arrayTest.length; i++) {
    testbtnlist.innerHTML += `
      <li>
        <a class="done" id="que_${i}" onclick="clickbtn(${i})" href="#">${i}</a>
      </li>
    `;
  }

  setValue(1);
  timer1();
});

// === Random generatsiya ===
function massivTuzish(m, n) {
  const massiv = [];
  while (massiv.length < n) {
    const k = Math.floor(Math.random() * m);
    if (!massiv.includes(k)) massiv.push(k);
  }
  return massiv;
}

// === Yordamchi: answer ni doim massivga keltirish ===
function normalizeAnswerArray(qData) {
  if (Array.isArray(qData.answer)) return qData.answer.slice();
  return [qData.answer];
}

// === Rasmiy render tartibida to‘g‘ri javob indekslarini topish ===
function computeCorrectIndexesForRenderedQuestion(qIndex1Based) {
  const baseIndex   = arrayTest[qIndex1Based - 1];
  const qData       = testdata[baseIndex];
  const correctText = normalizeAnswerArray(qData);         // ["...", "..."]
  const order       = arrOption[qIndex1Based - 1];         // masalan [2,0,3,1]
  const rendered    = order.map(optIdx => qData.options[optIdx]); // sahifadagi matnlar

  const correctRenderIdx = [];
  for (let i = 0; i < rendered.length; i++) {
    if (correctText.includes(rendered[i])) correctRenderIdx.push(i);
  }
  return correctRenderIdx; // masalan [1] yoki [0,3]
}

// === Savolni chizish ===
function setValue(k1) {
  n = arrayTest.length;
  ansverId = k1; // 1-based

  number_question.textContent = k1;
  count_question.textContent  = `${k1}/${n}`;

  const baseIndex = arrayTest[k1 - 1];
  const qData     = testdata[baseIndex];

  question_text.textContent = qData.question;

  // Variantlarni dinamik chizish
  optionsEl.innerHTML = "";
  const correctArr = normalizeAnswerArray(qData);
  const isMulti    = correctArr.length > 1; // 2+ to‘g‘ri javob bo‘lsa checkbox
  const groupName  = isMulti ? `multi_${k1}` : `single_${k1}`;
  const order      = arrOption[k1 - 1];     // [3,0,2,1] kabi
  const selected   = user_answer[k1 - 1] || []; // oldingi tanlovlar (render indekslari)

  for (let i = 0; i < OPTIONS_PER_QUESTION; i++) {
    const optOriginalIndex = order[i];

    const label = document.createElement("label");
    label.className = "answer-item";

    const input = document.createElement("input");
    input.type = isMulti ? "checkbox" : "radio";
    input.name = groupName;
    input.value = String(i);

    const span = document.createElement("span");
    span.textContent = qData.options[optOriginalIndex];

    // oldindan tanlangan bo‘lsa tiklash
    const isChecked = selected.includes(i);
    input.checked = isChecked;
    if (isChecked) label.classList.add("checked");

    input.addEventListener("change", () => {
      toggleParentClass(input, isMulti, i);
    });

    label.appendChild(input);
    label.appendChild(span);
    optionsEl.appendChild(label);
  }

  // Tugmalar holati
  $("#pbtn").disabled = k1 === 1;
  $("#nbtn").disabled = k1 === n;

  updateNavButtonsUI();
}

// === Tanlash boshqaruvi ===
function toggleParentClass(input, isMulti, renderIndex) {
  const parent = input.parentNode;

  if (isMulti) {
    // Ko‘p tanlovli: bir nechta belgilash mumkin
    parent.classList.toggle("checked", input.checked);
    let arr = user_answer[ansverId - 1] || [];
    if (input.checked) {
      if (!arr.includes(renderIndex)) arr.push(renderIndex);
    } else {
      arr = arr.filter(x => x !== renderIndex);
    }
    user_answer[ansverId - 1] = arr;
  } else {
    // Bir tanlovli: faqat bitta
    const siblings = parent.parentNode.querySelectorAll(".answer-item");
    siblings.forEach(sib => {
      sib.classList.remove("checked");
      const inp = sib.querySelector("input");
      inp.checked = false;
    });
    parent.classList.add("checked");
    input.checked = true;
    user_answer[ansverId - 1] = [renderIndex];
  }

  // Nav tugmasini bo‘yash
  const cur = document.querySelector(`#que_${ansverId}`);
  if (cur) cur.style.background = "rgb(0, 156, 255)";

  updateNavButtonsUI();
}

function updateNavButtonsUI() {
  for (let i = 1; i <= arrayTest.length; i++) {
    const btn = document.querySelector(`#que_${i}`);
    if (!btn) continue;
    const ans = user_answer[i - 1];
    btn.classList.toggle("answered", Array.isArray(ans) && ans.length > 0);
    btn.classList.toggle("unanswered", !ans || ans.length === 0);
  }
}

// === Nav handlerlar (HTML onclick) ===
window.clickbtn = function (id) {
  const k = parseInt(document.getElementById(`que_${id}`).innerHTML, 10);
  setValue(k);
};

window.pClick = function () {
  const b = parseInt(number_question.textContent, 10);
  if (b > 1) setValue(b - 1);
};

window.nClick = function () {
  const b = parseInt(number_question.textContent, 10);
  if (b < n) setValue(b + 1);
};

// === Timer ===
function timer1() {
  let timeLimitInMinutes = 50;
  let timeLimitInSeconds = timeLimitInMinutes * 60;

  function startTimer() {
    timeLimitInSeconds--;

    if (timeLimitInSeconds < 0) {
      timer_teg.textContent = "00:00";
      clearInterval(timerInterval);
      return;
    }
    let minutes = Math.floor(timeLimitInSeconds / 60);
    let seconds = timeLimitInSeconds % 60;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    timer_teg.textContent = `${minutes}:${seconds}`;
  }

  const timerInterval = setInterval(startTimer, 1000);
}

// === “Yordam?” — to‘g‘ri javob(lar) harflar bilan ===
window.getAnsver = function () {
  fine++;
  const qNum = parseInt(number_question.textContent, 10);
  const correctIdx = computeCorrectIndexesForRenderedQuestion(qNum);  // [0,3] kabi
  const letters = correctIdx.map(i => String.fromCharCode(65 + i)).join(", ");
  ansverId1.textContent = `To‘g‘ri javob(lar): ${letters}`;
};

// === Yakunlash va baholash ===
function arraysEqualAsSets(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b)) return false;
  if (a.length !== b.length) return false;
  const sb = new Set(b);
  return a.every(x => sb.has(x));
}

window.endTest = function () {
  let c = 0, inc = 0, usc = 0;

  for (let i = 0; i < arrayTest.length; i++) {
    const selected = user_answer[i];               // [renderIndex,...] yoki null
    if (!selected || selected.length === 0) {
      usc++;
      continue;
    }
    const correct = computeCorrectIndexesForRenderedQuestion(i + 1); // [renderIndex,...]
    if (arraysEqualAsSets(selected.slice().sort(), correct.slice().sort())) c++;
    else inc++;
  }

  // Ekranga chiqarish
  cansEl.textContent     = `To'g'ri: ${c}`;
  icansEl.textContent    = `Noto'g'ri: ${inc}`;
  noselectEl.textContent = `Belgilanmagan: ${usc}`;
  fineEl.textContent     = `Jarima: ${fine}`;
  fullBallEl.textContent = `Umumiy ball: ${(c - fine) * 4}`;

  // Xabar yuborish (sizdagi kabi)
  const now = new Date();
  const timestamp = now.toLocaleString("uz-UZ");
  const email1 = localStorage.getItem("userEmail");

  const botToken = "7783555807:AAFoAwnJn2yQ5BzorHJy5xMcs5ofCssftqY"; // ← o'zingizniki
  const chatId  = "361016648";                                       // ← o'zingizniki

  const message =
`🕒 Test tugallangan vaqt: ${timestamp}
📧 Email address: ${email1}
📊 *Test natijasi:*
✅ To'g'ri javoblar: ${c}
❌ Noto'g'ri javoblar: ${inc}
⚪ Belgilanmagan javoblar: ${usc}
🏆 Umumiy ball: ${(c - fine) * 4}`;

  fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text: message })
  })
  .then(r => r.json())
  .then(() => {
    setTimeout(() => { window.location = "studentindex.html"; }, 20000);
  })
  .catch(err => console.error("Xatolik yuz berdi:", err));
};
