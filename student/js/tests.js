const testdata = [
  {
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
    question: "Yarim additiv funksional qaysi xossani har doim bajaradi?",
    options: ["Cheklilik", "Uzluksizlik", "Qisman chiziqlilik", "O‘zgarmas nol nuqta"],
    answer: "Qisman chiziqlilik",
  },
  {
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
