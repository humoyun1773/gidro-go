# gidro-go

> **GidroGo** — Ichimlik suvi yetkazib berish biznesini raqamlashtirish uchun yagona SaaS ekotizimi (Landing Page).

---

## 🚀 Loyiha Haqida

**GidroGo** — suv ishlab chiqaruvchi fermalar, korxonalar va logistika xizmatlari uchun buyurtmalarni avtomatlashtirish, dastavkachilar faoliyatini real vaqtda boshqarish (Live GPS), 19L bo'sh idishlar (tara) hisobini yuritish hamda moliyaviy statistikani yagona joyda kuzatish uchun mo'ljallangan zamonaviy platforma.

---

## 🛠 Texnologiyalar Steki

- **Frontend:** React 19 + TypeScript (Strict mode)
- **Styling:** Tailwind CSS v4 (Glassmorphism & SaaS modern aesthetic)
- **Icons:** Lucide React
- **Build Tool:** Vite 8 (Ultra-fast HMR & production build)
- **SEO & Structured Data:** Schema.org JSON-LD (`SoftwareApplication`, `Organization`, `FAQPage`), OpenGraph, Twitter Cards, Canonical, Semantic HTML5.

---

## 📂 Loyiha Papkalar Strukturasi

```bash
gidro-go/
├── public/
│   ├── favicon.svg          # Maxsus suv tomchisi shaklidagi SVG ikonkasi
│   ├── robots.txt           # Qidiruv botlari uchun ko'rsatma
│   └── sitemap.xml          # Qidiruv tizimlari xaritasi
├── src/
│   ├── components/
│   │   ├── Navbar.tsx               # Glassmorphism navbar, sticky banner va mobil menyu
│   │   ├── Hero.tsx                 # SaaS Hero bo'limi, live buyurtmalar va dispetcher maketi
│   │   ├── ProblemSection.tsx       # 8 ta asosiy an'anaviy muammolar kartochkalari
│   │   ├── SolutionSection.tsx      # GidroGo yagona yechimlari (6 ta asosiy modul)
│   │   ├── HowItWorks.tsx           # 6 bosqichli vizual zanjir (interaktiv bosqichlar)
│   │   ├── LiveDashboardPreview.tsx # Interaktiv SaaS dashboard (KPI, GPS xarita, Ombor/Tara, Buyurtmalar)
│   │   ├── AudienceSection.tsx      # Fermalar/Biznes va Iste'molchilar uchun ajratilgan bloklar
│   │   ├── RoiCalculator.tsx        # Interaktiv oylik tejamkorlik va foyda hisoblagichi
│   │   ├── BenefitsStats.tsx        # Haqiqiy statistik ko'rsatkichlar va hamkor brendlar
│   │   ├── FaqSection.tsx           # Akkordeon shaklidagi savol-javoblar
│   │   ├── LeadFormSection.tsx      # Asosiy lid yig'ish formasi va tezkor aloqa
│   │   ├── LeadModal.tsx            # Barcha CTA tugmalar uchun tezkor demo so'rov modali
│   │   └── Footer.tsx               # Rekvizitlar, aloqa ma'lumotlari va ijtimoiy tarmoqlar
│   ├── data/
│   │   └── landingData.ts           # TZ bo'yicha barcha strukturaviy ma'lumotlar va matnlar
│   ├── types/
│   │   └── index.ts                 # TypeScript interfeyslari va turlari
│   ├── App.tsx                      # Asosiy ilova komponenti
│   ├── main.tsx                     # React ilovasi kirish nuqtasi
│   └── index.css                    # Tailwind CSS v4 va silliq scrollbar sozlamalari
├── index.html                       # To'liq SEO meta teglari va Schema.org JSON-LD
├── vite.config.ts                   # Vite + Tailwind v4 konfiguratsiyasi
├── tsconfig.json                    # TypeScript konfiguratsiyasi
└── package.json                     # Loyiha bog'liqliklari va skriptlari
```

---

## ⚡ O'rnatish va Ishga Tushirish

1. **Repozitoriyani yuklab olish va papkaga kirish:**
   ```bash
   git clone https://github.com/humoyun1773/gidro-go.git
   cd gidro-go
   ```

2. **Kutubxonalarni o'rnatish:**
   ```bash
   npm install
   ```

3. **Dasturchi rejimida ishga tushirish (Local Dev):**
   ```bash
   npm run dev
   ```

4. **Ishlab chiqarish (Production) uchun yig'ish:**
   ```bash
   npm run build
   ```

5. **Yig'ilgan loyihani tekshirish:**
   ```bash
   npm run preview
   ```

---

## 📈 SEO Optimizatsiya

- **Semantik HTML5:** `header`, `main`, `section`, `article`, `footer`, `nav`, `h1`-`h4` ierarxiyasi to'liq ta'minlangan.
- **OpenGraph & Twitter Cards:** Telegram, Facebook va Twitterda link ulashilganda chiroyli rasm, sarlavha va tavsif chiqadi.
- **Microdata (Schema.org JSON-LD):** Google va Yandex qidiruv tizimlarida qidiruv natijalarida boyitilgan snippetlar (rich snippets) chiqishi uchun `SoftwareApplication`, `Organization` va `FAQPage` integratsiya qilingan.
- **Yuklanish tezligi:** Vite 8 va Tailwind CSS v4 yordamida minimal CSS/JS hajmi (gzip: ~105 kB).

---

© 2026 GidroGo. Barcha huquqlar himoyalangan.
