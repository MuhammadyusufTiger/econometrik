const testdata = [
  {
    question: "C++ dasturlash tilida chiqish operatori qaysi?",
    options: ["cin", "printf", "cout", "input"],
    answer: "cout",
  },
  {
    question: "C++ dasturida qaysi kutubxona cout uchun kerak?",
    options: ["math.h", "stdio.h", "iostream", "stdlib.h"],
    answer: "iostream",
  },
  {
    question: "C++ dasturida asosiy bajariladigan funksiya nomi nima?",
    options: ["start()", "main()", "run()", "execute()"],
    answer: "main()",
  },
  {
    question: "Qaysi belgi endl bilan bir xil vazifani bajaradi?",
    options: ["\\t", "\\\\", "\\n", "\\a"],
    answer: "\\n",
  },
  {
    question: "C++ da o‘zgaruvchini e’lon qilishda noto‘g‘ri yozilgan satr qaysi?",
    options: ["int x;", "float 3num;", "char a = 'A';", "double d = 2.5;"],
    answer: "float 3num;",
  },
  {
    question: "Quyidagilardan qaysi biri mantiqiy (bool) tipga misol?",
    options: ['"true"', "1", "false", "'0'"],
    answer: "false",
  },
  {
    question: "C++ da qanday qilib foydalanuvchidan qiymat olinadi?",
    options: ["output >> x;", "scanf(x);", "cin >> x;", "read(x);"],
    answer: "cin >> x;",
  },
  {
    question: "C++ dasturida qaysi amal qo‘shish uchun ishlatiladi?",
    options: ["+", "&", "*", "%"],
    answer: "+",
  },
  {
    question: "Quyidagilardan qaysi biri inkrement operator?",
    options: ["--", "++", "+=", "=="],
    answer: "++",
  },
  {
    question: "Agar int x = 5 / 2; bo‘lsa, x ning qiymati nechaga teng?",
    options: ["2.5", "3", "2", "0"],
    answer: "2",
  },
  {
    question: "C++ da qaysi biri if operatorining sintaksisidir?",
    options: ["if x > y then", "if (x > y) { }", "if x > y { }", "if: x > y {}"],
    answer: "if (x > y) { }",
  },
  {
    question: "Qaysi operator tanlash (switch) operatoriga tegishli?",
    options: ["for", "if", "case", "while"],
    answer: "case",
  },
  {
    question: "C++ da nechta asosiy takrorlash operatori mavjud?",
    options: ["1", "2", "3", "4"],
    answer: "3",
  },
  {
    question: "while sikli qachongacha bajariladi?",
    options: [
      "Faqat 1 marta",
      "Shart false bo‘lguncha",
      "Cheksiz",
      "Har doim bajariladi",
    ],
    answer: "Shart false bo‘lguncha",
  },
  {
    question: "break operatori nima qiladi?",
    options: [
      "Dastur tugaydi",
      "Xatolik chiqaradi",
      "Takrorlashni to‘xtatadi",
      "Qiymatni chiqaradi",
    ],
    answer: "Takrorlashni to‘xtatadi",
  },
  {
    question: "Quyidagi for operatori nechta marta ishlaydi: for (int i = 0; i < 3; i++) cout << i;",
    options: ["0", "2", "3", "4"],
    answer: "3",
  },
  {
    question: "int x = 10; x += 5; so‘ngida x ning qiymati?",
    options: ["10", "15", "5", "0"],
    answer: "15",
  },
  {
    question: "!= operatorining ma’nosi nima?",
    options: ["Katta yoki teng", "Teng", "Teng emas", "Kichikroq"],
    answer: "Teng emas",
  },
  {
    question: "#include <iostream> satri qanday maqsadda ishlatiladi?",
    options: [
      "Konsolni tozalash",
      "Kutubxona ulash",
      "O‘zgaruvchi e’lon qilish",
      "Ekranga chiqarish",
    ],
    answer: "Kutubxona ulash",
  },
  {
    question: "C++ dasturida return 0; nimani anglatadi?",
    options: [
      "0 ni chiqaradi",
      "Dasturni to‘xtatadi",
      "Xatolikni bildiradi",
      "Dastur muvaffaqiyatli tugadi degani",
    ],
    answer: "Dastur muvaffaqiyatli tugadi degani",
  },
  {
    question: "C++ dasturlash tilida izoh (kommentariya) qanday yoziladi?",
    options: ["# izoh", "// izoh", "/* izoh */", "% izoh"],
    answer: "// izoh",
  },
  {
    question: "Qaysi o‘zgaruvchi turi butun sonlarni saqlash uchun ishlatiladi?",
    options: ["float", "int", "char", "bool"],
    answer: "int",
  },
  {
    question: "Qaysi o‘zgaruvchi turi belgilarni saqlaydi?",
    options: ["char", "string", "int", "bool"],
    answer: "char",
  },
  {
    question: "C++ dasturida satr (matn) saqlash uchun qaysi tip ishlatiladi?",
    options: ["string", "char", "bool", "double"],
    answer: "string",
  },
  {
    question: "Quyidagilardan qaysi biri C++ da o‘zgaruvchi nomlash qoidalariga zid?",
    options: ["my_var", "2son", "userName", "_x"],
    answer: "2son",
  },
  {
    question: "C++ da arifmetik amallardan bo‘linmani bildiruvchi belgi qaysi?",
    options: ["/", "*", "-", "%"],
    answer: "/",
  },
  {
    question: "C++ da qoldiqni hisoblash operatori qaysi?",
    options: ["//", ":", "%", "\\"],
    answer: "%",
  },
  {
    question: "C++ da const kalit so‘zi nima uchun ishlatiladi?",
    options: [
      "Doimiy qiymatni belgilash uchun",
      "Takrorlash uchun",
      "Shart tekshirish uchun",
      "Kutubxona ulash uchun"
    ],
    answer: "Doimiy qiymatni belgilash uchun",
  },
  {
    question: "C++ dasturida qanday holatda 'else' bloki bajariladi?",
    options: [
      "Shart bajarilganda",
      "Shart bajarilmaganda",
      "Har doim",
      "Foydalanuvchi xohlaganda"
    ],
    answer: "Shart bajarilmaganda",
  },
  {
    question: "Qaysi takrorlash operatori kamida bir marta bajariladi?",
    options: ["while", "do-while", "for", "switch"],
    answer: "do-while",
  },
  {
    question: "C++ da `#define PI 3.14` nimani anglatadi?",
    options: [
      "O‘zgaruvchini e'lon qiladi",
      "Doimiy qiymat yaratadi",
      "Funktsiyani aniqlaydi",
      "Takrorlash operatorini bildiradi"
    ],
    answer: "Doimiy qiymat yaratadi",
  },
  {
    question: "Qaysi biri C++ da o‘zgaruvchini qiymati bilan e’lon qilishga misol?",
    options: ["int x = 5;", "x int = 5;", "int = 5 x;", "5 = int x;"],
    answer: "int x = 5;",
  },
  {
    question: "Qaysi operator tenglikni tekshiradi?",
    options: ["=", "==", "!=", "<="],
    answer: "==",
  },
  {
    question: "C++ da `&&` operatori nimani bildiradi?",
    options: ["Yoki", "Va", "Teng", "Teskari"],
    answer: "Va",
  },
  {
    question: "C++ dasturida `||` operatori nimani anglatadi?",
    options: ["Teskari", "Yoki", "Teng emas", "Qo‘shish"],
    answer: "Yoki",
  },
  {
    question: "C++ dasturida massiv qanday e’lon qilinadi?",
    options: ["int x[] = {1,2,3};", "array x = (1,2,3);", "x = {1,2,3};", "int[] x = 1,2,3;"],
    answer: "int x[] = {1,2,3};",
  },
  {
    question: "Quyidagilardan qaysi biri massivning 3-elementiga murojaat qiladi?",
    options: ["x(3)", "x[2]", "x{3}", "x.3"],
    answer: "x[2]",
  },
  {
    question: "C++ da funksiyani e’lon qilish to‘g‘ri ko‘rinishi?",
    options: [
      "function void myFunc()",
      "void myFunc() {}",
      "func myFunc[]",
      "myFunc() = void;"
    ],
    answer: "void myFunc() {}",
  },
  {
    question: "Qaysi biri `continue` operatorining vazifasi?",
    options: [
      "Siklni to‘xtatish",
      "Dasturdan chiqish",
      "Joriy iteratsiyani o‘tkazib yuborish",
      "Fayl ochish"
    ],
    answer: "Joriy iteratsiyani o‘tkazib yuborish",
  },
  {
    question: "C++ dasturida fayl bilan ishlash uchun qaysi kutubxona kerak?",
    options: ["<iostream>", "<fstream>", "<stdio.h>", "<string>"],
    answer: "<fstream>",
  }
];

