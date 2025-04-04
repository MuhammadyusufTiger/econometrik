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
