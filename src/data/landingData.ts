import type { ProblemItem, SolutionFeature, ProcessStep, FaqItem, StatItem } from '../types';

export const PROBLEMS_DATA: ProblemItem[] = [
  {
    id: 'problem-1',
    title: "Buyurtmalarni qo'lda va messenjer/telefon orqali qabul qilish",
    description: "Operatorlar telefon va Telegram guruhlarida adashib ketadi. Natijada buyurtmalar unutiladi, kechikadi yoki adashib boshqa manzilga ketadi.",
    iconName: 'PhoneCall',
    impact: "15-20% buyurtmalar xatosi",
    badge: "Chalkashlik",
  },
  {
    id: 'problem-2',
    title: "Dastavkachiga buyurtmani qo'lda berish va marshrutni nazorat qilmaslik",
    description: "Kuryer qaysi tartibda yurishni o'zi tanlaydi. Bir ko'chaga 2 marta qaytib kelinadi, yoqilg'i va vaqt behuda sarflanadi.",
    iconName: 'Navigation',
    impact: "40% vaqt yo'qotilishi",
    badge: "Samarasiz yo'l",
  },
  {
    id: 'problem-3',
    title: "Mashinada va omborda suv miqdorini aniq bilmaslik",
    description: "Mashinadagi suv yetmay qoladi yoki aksincha behuda aylanadi. Ombordagi to'la va bo'sh tara (19L idishlar) hisobi qo'lda yuritiladi.",
    iconName: 'Boxes',
    impact: "Ombor defitsiti",
    badge: "Nazoratsizlik",
  },
  {
    id: 'problem-4',
    title: "Tushum, xarajat va foydani qo'lda hisoblash",
    description: "Kun oxirida qancha naqd pul, qancha Click/Payme tushgani va qancha qarz qolganini tahlil qilish uchun soatlab vaqt ketadi.",
    iconName: 'Calculator',
    impact: "Moliyaviy chalkashlik",
    badge: "Vaqt isrofi",
  },
  {
    id: 'problem-5',
    title: "Mijozlar tarixi va ma'lumotlarning tarqoq saqlanishi",
    description: "Mijoz qachon oxirgi marta suv olgani, qaysi qavatda yashashi va nechta bo'sh idish bergani daftarlarda qolib ketadi.",
    iconName: 'Database',
    impact: "Mijozlar ketib qolishi",
    badge: "CRM yo'qligi",
  },
  {
    id: 'problem-6',
    title: "Dastavkachilar faoliyatini nazorat qilishning qiyinligi",
    description: "Kuryer ayni paytda qayerda, buyurtmani yetkazdimi yoki yo'lda to'xtab turibdimi — biznes egasi faqat qo'ng'iroq qilib bilishi mumkin.",
    iconName: 'UserX',
    impact: "Intizom sustligi",
    badge: "Shaffoflik yo'q",
  },
  {
    id: 'problem-7',
    title: "Biznesning o'sishi yoki pasayishini real vaqtda kuzata olmaslik",
    description: "Mavsumiy talab, eng faol hududlar va sof foyda dinamikasi bo'yicha tahliliy grafiklarning yo'qligi sababli noto'g'ri qarorlar qabul qilinadi.",
    iconName: 'TrendingDown',
    impact: "Rivojlanish to'xtashi",
    badge: "Strategik ko'rlik",
  },
  {
    id: 'problem-8',
    title: "Qimmatbaho 19L bo'sh idishlar (tara) hisobining chalkashishi",
    description: "Mijozlarga berilgan bo'sh idishlar qaytmaydi, mashinalarda yo'qoladi yoki hisobsiz qolib katta moddiy zarar keltiradi.",
    iconName: 'AlertOctagon',
    impact: "Oylik millionlab zarar",
    badge: "Tara yo'qolishi",
  },
];

export const SOLUTIONS_DATA: SolutionFeature[] = [
  {
    id: 'sol-1',
    title: "Buyurtmalarni avtomatik qabul qilish va qayta ishlash",
    description: "Telegram bot, veb-sayt va operator interfeysi yagona tizimga ulanadi. Buyurtmalar bir soniyada bazaga tushadi va adashish xavfi yo'qoladi.",
    iconName: 'Zap',
    benefit: "0 xatolik bilan qabul qilish",
    highlight: "Multi-kanal integratsiya",
  },
  {
    id: 'sol-2',
    title: "Mos dastavkachini avtomatik aniqlash (Smart Dispatch)",
    description: "Tizim buyurtma tushgan manzilga eng yaqin bo'lgan va tanlangan fermaga tegishli kuryerni geolokatsiya bo'yicha o'zi biriktiradi.",
    iconName: 'Compass',
    benefit: "35% tezroq yetkazib berish",
    highlight: "Avtomatik logistika",
  },
  {
    id: 'sol-3',
    title: "Dastavka jarayonini xaritada real vaqtda kuzatish",
    description: "Biznes egasi va mijoz kuryerning jonli harakatini xaritada ko'radi. Kuryer buyurtmani topshirganda tizimda darhol 'Yetkazildi' holati yonadi.",
    iconName: 'MapPin',
    benefit: "100% shaffof monitoring",
    highlight: "Live GPS tracking",
  },
  {
    id: 'sol-4',
    title: "Ombordagi va mashinadagi suv qoldig'i hamda tara nazorati",
    description: "Har bir kuryer avtomobiliga yuklangan 19L to'la idishlar va qaytarilgan bo'sh taralar qat'iy hisobga olinadi. Hech bir idish izsiz yo'qolmaydi.",
    iconName: 'ShieldCheck',
    benefit: "Idishlar yo'qolishi 0% ga tushadi",
    highlight: "Tara & Ombor hisobi",
  },
  {
    id: 'sol-5',
    title: "Onlayn to'lov va avtomatik moliyaviy hisobotlar",
    description: "Click, Payme, Uzum va naqd to'lovlar bir joyda hisoblanadi. Kunlik sof foyda, xarajatlar va kuryerlar hisob-kitobi avtomatik shakllanadi.",
    iconName: 'CreditCard',
    benefit: "Kun oxirida 1 tugma bilan hisobot",
    highlight: "Avto-buxgalteriya",
  },
  {
    id: 'sol-6',
    title: "Mijozlar tarixi va biznes statistikasi (Dashboard)",
    description: "Har bir mijozning sevimli suv turi, buyurtma chastotasi va to'lov tarixi saqlanadi. Tizim mijozga 'Suvingiz tugayapti' deb avtomatik eslatadi.",
    iconName: 'BarChart3',
    benefit: "Mijozlar qaytishi +45% ga ortadi",
    highlight: "Aqlli CRM tahlil",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Mijoz buyurtma beradi",
    shortDesc: "Telegram bot, sayt yoki qo'ng'iroq orqali",
    fullDesc: "Mijoz kerakli hajm (19L yoki boshqa) va manzilini kiritadi. Manzil geolokatsiyasi avtomatik aniqlanadi.",
    iconName: 'Smartphone',
    badge: "1-qadam",
    details: [
      { label: "Kanal", value: "Telegram Bot / Ilova / Sayt" },
      { label: "Vaqt", value: "30 soniya" },
    ],
  },
  {
    step: 2,
    title: "Tizim buyurtmani qabul qiladi",
    shortDesc: "Avtomatik tekshirish va ro'yxatga olish",
    fullDesc: "GidroGo tizimi mijozning tarixini ko'radi (qarz, tara balansi) va buyurtmani zudlik bilan ishlovga yuboradi.",
    iconName: 'Cpu',
    badge: "2-qadam",
    details: [
      { label: "Holat", value: "Qabul qilindi va tasdiqlandi" },
      { label: "Tahlil", value: "Mijoz tara balansi tekshirildi" },
    ],
  },
  {
    step: 3,
    title: "Mos dastavkachi aniqlanadi",
    shortDesc: "Tanlangan fermaga tegishli eng yaqin kuryer",
    fullDesc: "Smart algoritm mashinadagi suv qoldig'i va marshrutni hisoblab, buyurtmani eng qulay kuryerga yo'naltiradi.",
    iconName: 'Truck',
    badge: "3-qadam",
    details: [
      { label: "Marshrut", value: "Optimal yo'l xaritasi tuzildi" },
      { label: "Kuryer", value: "Avtomobil #4 (2.1 km uzoqlikda)" },
    ],
  },
  {
    step: 4,
    title: "Suv yetkazib beriladi",
    shortDesc: "Mijoz eshigigacha tezkor yetkazish",
    fullDesc: "Kuryer mobil ilova orqali mijozga yetib kelganini bildiradi. Bo'sh tara olinadi va to'la suv topshiriladi.",
    iconName: 'Droplet',
    badge: "4-qadam",
    details: [
      { label: "Yetkazish", value: "O'rtacha 25 daqiqa" },
      { label: "Tara almashish", value: "19L bo'sh idish qaytarildi" },
    ],
  },
  {
    step: 5,
    title: "To'lov amalga oshiriladi",
    shortDesc: "Click, Payme yoki naqd pulda",
    fullDesc: "Kuryer to'lovni tasdiqlaydi, mijozga elektron chek yuboriladi. Pul darhol biznes hisobiga fiksatsiya bo'ladi.",
    iconName: 'CheckCircle2',
    badge: "5-qadam",
    details: [
      { label: "To'lov turi", value: "Payme / Click / Naqd" },
      { label: "Fiskal holat", value: "Chek avtomatik shakllandi" },
    ],
  },
  {
    step: 6,
    title: "Ma'lumotlar saqlanadi va statistika shakllanadi",
    shortDesc: "Biznes egasi uchun real vaqtli hisobot",
    fullDesc: "Ombor qoldig'i yangilanadi, kuryer balansi hisoblanadi va kompaniya foydasi dashboardda aks etadi.",
    iconName: 'LineChart',
    badge: "6-qadam",
    details: [
      { label: "Statistika", value: "Dashboardda aks etdi" },
      { label: "CRM", value: "Mijoz profili yangilandi" },
    ],
  },
];

export const STATS_DATA: StatItem[] = [
  {
    value: "40%",
    label: "Vaqt tejalishi",
    change: "+40%",
    description: "Avtomatik marshrutlash va qog'ozbozlikning yo'qotilishi hisobiga",
  },
  {
    value: "99.8%",
    label: "O'z vaqtida yetkazish",
    change: "Top sifat",
    description: "Mijozlar buyurtmasi kechikmaydi va yo'qolib qolmaydi",
  },
  {
    value: "0%",
    label: "Yo'qolgan taralar",
    change: "100% nazorat",
    description: "19 litrli idishlar harakatini qat'iy nazorat qilish tizimi",
  },
  {
    value: "3.5x",
    label: "Tezroq hisobotlar",
    change: "Real-time",
    description: "Kunlik tushum va sof foydani 1 soniyada ko'rish imkoniyati",
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: "GidroGo tizimiga qanday ulanamiz va qancha vaqt ketadi?",
    answer: "Ulanish juda oson! Mutaxassislarimiz barcha ma'lumotlaringizni (fermalar, suv turlari, narxlar, dastavkachilar va mijozlar bazasi) 1 ish kuni ichida tizimga kiritib, siz va xodimlaringizga to'liq o'rgatadi.",
  },
  {
    id: 'faq-2',
    question: "Tizimdan foydalanish narxi qancha va to'lov tartibi qanday?",
    answer: "Bizda oylik qulay obuna tizimi mavjud bo'lib, narx yetkazib beriladigan hajmlar va avtomobillar soniga qarab belgilanadi. Dastlabki 14 kunlik bepul sinov davri beriladi, shunda tizim samarasini o'zingiz ko'rishingiz mumkin.",
  },
  {
    id: 'faq-3',
    question: "Bizning mavjud dastavkachilarimiz va mashinalarimiz bilan ishlaydimi?",
    answer: "Ha, albatta! Kuryerlar uchun maxsus qulay mobil ilova mavjud bo'lib, ular har qanday oddiy Android yoki iPhone telefonidan foydalanishlari mumkin. Hech qanday qimmatbaho uskunalar sotib olish shart emas.",
  },
  {
    id: 'faq-4',
    question: "Qaysi shaharlarda va viloyatlarda ishlaydi?",
    answer: "GidroGo butun O'zbekiston bo'ylab (Toshkent shahri, viloyat markazlari va tumanlarda) ishlaydi. Xaritalar va GPS logistika O'zbekistonning barcha hududlariga to'liq moslashtirilgan.",
  },
  {
    id: 'faq-5',
    question: "19 litrli bo'sh idishlar (tara) balansi qanday nazorat qilinadi?",
    answer: "Har bir kuryer olgan to'la idish va mijozdan qaytarib olingan bo'sh idish soni tizimda biriktiriladi. Mijozda nechta tara qolganligi va kuryer mashinasida nechta idish borligi real vaqtda ko'rinib turadi.",
  },
  {
    id: 'faq-6',
    question: "Tizimni ishlatish uchun kompaniyamizda dasturchi bo'lishi kerakmi?",
    answer: "Umuman kerak emas! GidroGo shunday sodda va intuitiv yaratilganki, suv ishlab chiqaruvchi biznes egasi ham, haydovchi ham uni 15 daqiqada bemalol tushunib oladi. 24/7 texnik yordam xizmatimiz doimo aloqada.",
  },
];
