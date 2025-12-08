// lib/translations.ts — FINAL & COMPLETE
const translations = {
  en: {
    Hero: {
      title: "Lyschor Real Estate LLC\nLicensed UAE Brokerage with",
      highlight: "Legal RUB Payments",
      subtitle: "Buying & Selling • Leasing • 100% Transparent Transfers",
      cta1: "Request Consultation",
      cta2: "Message on Telegram",
    },
    About: {
      title: "Who We Are",
      paragraph1: {
        title: "Lyschor Real Estate LLC",
        part1:
          "Licensed UAE Real Estate Brokerage. Legal RUB-Payment Service, Trusted guidance for ",
        buyingSelling: "Buying, Selling ",
        and: "and",
        leasing: "Leasing Property ",
        activities: "in Dubai",
      },
      paragraph2: {
        part1: "Lyschor Real Estate LLC ",
        group: " Lyschor Group ",
        experience: "is a fully lincensed UAE brokerage and a division of",
        offices: " an international holding with 18+ years of experience. ",
      },
      offices: {
        dubai: { title: "Dubai Office", status: "Coming Soon" },
        moscowSpb: {
          title: "Moscow & Saint Petersburg",
          status: "Representative Offices",
        },
      },
    },
    Contact: {
      title: "Get in Touch",
      subtitle: "We’ll reply within 24 hours",
      name: "Your Name *",
      phone: "Phone / WhatsApp *",
      email: "Email (optional)",
      message: "Your Message *",
      privacy: { part1: "I agree to the", link: "Privacy Policy" },
      sendButton: "Send Message",
      sending: "Sending...",
      success: "Thank you! We received your message.",
      error: "Error. Please try WhatsApp.",
    },
    Footer: {
      description: {
        line1: "Licensed UAE Real Estate Brokerage",
        line2: "Buying & Selling • Leasing Property • Legal RUB Payments",
      },
      quickLinks: {
        title: "Quick Links",
        freelance: "Freelance Broker Program",
        properties: "Properties",
        rub: "RUB Payment Service",
        contact: "Contact Us",
      },
      contact: { title: "Contact" },
      offices: {
        title: "Offices",
        dubai: {
          city: "Dubai, UAE",
          address: "Business Bay (address coming soon)",
        },
        russia: {
          cities: "Moscow • Saint Petersburg",
          status: "Representative offices",
        },
      },
      copyright: "All rights reserved.",
      legal: {
        privacy: "Privacy Policy",
        terms: "Terms of Use",
        documents: "View Documents",
      },
    },
    FreelanceBanner: {
      title: "Patner program benefits 100% of your commision",
      subtitle: "+ 0.2% Bonus on Every Deal",
      description:
        "Exclusive program for experienced freelance brokers serving Russian-speaking clients in Dubai",
      cta: "Become a Partner → Earn More",
    },
    LyschorGroup: {
      title: { part1: "Part of", group: "Lyschor Group" },
      stats: {
        experience: "18+ years of international experience",
        projects: "Completed Projects Worldwide",
        offices:
          "Offices: Turkiye • Indonesia • Estonia • Poland • UAE • Romania • Cyprus • Moscow • Saint Petersburg",
      },
      description:
        "Strong in-house legal team • Deep expertise in cross-border transactions • Flawless reputation since 2007",
    },
    Navbar: {
      rubPayment: "RUB Payment",
      services: "Services",
      whyUs: "Why Us",
      properties: "Properties",
      contact: "Contact",
      cta: "Earn 100% Commission",
    },
    PaymentInfographic: {
      title: "How the Legal RUB Payment Works",
      step1: "Russian Buyer\nRUB Account",
      step2: "Agency/Escrow\nAgreement",
      step3: "Lyschor Real Estate\nRUB Account",
      step4: "Payment in AED\nto Developer/Seller",
      step5: "Title Deed\nIssued",
    },
    PropertyShowcase: {
      title: "Featured Properties",
      propertyAlt: "{type} in {location}",
      cta: "Get a Custom Selection",
    },
    RubPayment: {
      title: {
        line1: "Legal RUB Non-Cash Payment Service",
        highlight: "For Russian Buyers Only",
      },
      howItWorks: {
        title: "How It Works",
        step1: "Buyer transfers RUB from personal Russian bank account",
        step2:
          "Funds are received legally under an Agency or Escrow Agreement.",
        step3:
          "We transfer AED to the developer or seller via UAE banking channels.",
      },
      advantages: {
        title: "Advantages",
        list: [
          "100% legal & transparent",
          "No SWIFT delays",
          "Zero crypto risks",
          "Guaranteed instalments",
          "Full documentation to Title Deed",
        ],
      },
    },
    Services: {
      title: "Our Services",
      buyingSelling: {
        title: "Buying & Selling Brokerage",
        items: [
          "Property selection (off-plan & secondary)",
          "Legal due diligence",
          "DLD support",
          "Full transaction supervision",
        ],
      },
      leasing: {
        title: "Leasing Brokerage",
        items: [
          "Rental search",
          "Contract support",
          "Ejari registration",
          "Landlord negotiations",
        ],
      },
      rubPayment: {
        title: "RUB Payment Service",
        items: [
          "Escrow agreement",
          "Transparent reporting",
          "Full documentation",
          "Guaranteed timing",
        ],
      },
    },
    OfferAgencies: {
      title: "Offer for Real Estate Agencies",
      description:
        "We invite real estate agencies to collaborate with us. We provide a service that allows your clients to make cashless payments in Russian rubles from the Russian Federation.",
      cta: "Request Partnership Details",
    },
    Documents: {
      title: "Official Documents & Licenses",
      subtitle:
        "Full transparency — all licenses and legal documents available for verification",
      viewPdf: "View PDF",
      cta: { text: "Need certified copies?", button: "Request Documents" },
      list: {
        buyingSelling: "Buying & Selling Brokerage License (RERA ORN: 12345)",
        leasing: "Leasing Property Brokerage License (RERA ORN: 12345)",
        tradeLicense: "Company Trade License (DED No. 987654)",
        moa: "Memorandum of Association (MOA)",
        tenancy: "Tenancy Contract",
        dreicert: "DREI Course Completion Certificate",
        policeClearance: "Police Clearance Certificate",
        incorporation: "Certificate of Incorporation",
        escrowTemplate: "RUB Escrow Agency Agreement Template",
        affiliation: "Lyschor Group Affiliation Letter",
        availableOnRequest: "Available on request",
        dubaiRegistry: "Dubai Registry",
        officialDocument: "Official Document",
      },
    },
    FreelanceBrokers: {
      hero: {
        cta: "Become a Partner Today",
        title: "Patner program benefits 100% of your commision",
        subtitle: "",
        description:
          "Exclusive program for experienced freelance brokers serving Russian-speaking clients in Dubai",
      },
      conditions: {
        title: "Program Conditions",
        list: [
          "100% of commission from any transaction goes directly to you",
          "Additional +0.2% bonus from property value",
          "All deals processed via our legal RUB payment service",
          "Full escrow & legal support included",
          "No hidden fees — ever",
        ],
      },
      benefits: {
        title: "How It Helps You Close Faster",
        description:
          "Your Russian clients pay in RUB from their Russian bank accounts → we receive funds under an official Agency/Escrow agreement → we settle with developers or sellers in AED using standard UAE methods.",
        guarantees:
          "Zero SWIFT issues • Zero crypto risks • Guaranteed instalment timing • Full documentation up to Title Deed",
      },
    },
    PrivacyPolicy: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: December 2025",
      section1: {
        title: "1. Introduction",
        content:
          'Lyschor Real Estate LLC ("we", "our", "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website.',
      },
      section2: {
        title: "2. Information We Collect",
        list: [
          "Full name",
          "Phone number (including WhatsApp)",
          "Email address",
          "Any information you provide in messages",
        ],
      },
      section3: {
        title: "3. How We Use Your Information",
        intro: "We use your data solely to:",
        list: [
          "Provide real estate consultation",
          "Respond to your inquiries",
          "Send property selections (only with consent)",
          "Improve our services",
        ],
      },
      section4: {
        title: "4. Data Security",
        content:
          "We implement industry-standard security measures to protect your personal information. Your data is never sold or shared with third parties except as required by UAE law.",
      },
      contact: { question: "Questions? Contact us at:" },
    },
    TermsOfUse: {
      title: "Terms of Use",
      lastUpdated: "Effective: December 2025",
      intro: "By using this website, you agree to these terms...",
      section1: {
        title: "1. Acceptance of Terms",
        content:
          "By accessing or using this website, you agree to be bound by these Terms of Use and our Privacy Policy.",
      },
      section2: {
        title: "2. Use of Website",
        content:
          "You may use this website for lawful purposes only. You agree not to copy or distribute content without permission.",
      },
      section3: {
        title: "3. Intellectual Property",
        content:
          "All content, including text, images, and logos, is property of Lyschor Real Estate LLC and protected by copyright laws.",
      },
      section4: {
        title: "4. Limitation of Liability",
        content:
          "We provide information 'as is' without warranties. We are not liable for any indirect, incidental, or consequential damages.",
      },
      contact: { question: "Have questions about our terms?" },
    },
    Metadata: {
      title:
        "Lyschor Real Estate LLC — Licensed UAE Brokerage with Legal RUB Payments",
      description:
        "Licensed Dubai real estate brokerage offering 100% legal non-cash RUB payments for Russian buyers. Buy or sell property in Dubai with zero SWIFT issues. RERA licensed.",
      keywords:
        "dubai real estate russian, buy property dubai rub, dubai broker rub payment, uae real estate russian buyers",
      ogTitle: "Lyschor Real Estate — Legal RUB Payments for Russian Buyers",
      ogDescription:
        "Licensed UAE brokerage with unique escrow RUB payment service",
    },
  },
  ru: {
    Hero: {
      title: "Lyschor Real Estate LLC\nЛицензированное агентство ОАЭ с",
      highlight: "легальной оплатой в рублях",
      subtitle: "Покупка • Продажа • Аренда • 100% прозрачные переводы",
      cta1: "Заказать консультацию",
      cta2: "Написать в Telegram",
    },
    About: {
      title: "Кто мы",
      paragraph1: {
        title: "Lyschor Real Estate LLC",
        part1:
          "Лицензированное агентство недвижимости ОАЭ. Легальный сервис оплаты в рублях. Надёжное сопровождение при ",
        buyingSelling: "покупке, продаже ",
        and: "и ",
        leasing: "аренде недвижимости ",
        activities: "в Дубае",
      },
      paragraph2: {
        part1: "Lyschor Real Estate LLC — ",
        group: " Lyschor Group, ",
        experience:
          "это полностью лицензированное агентство ОАЭ и часть международного холдинга",
        offices: " с опытом работы более 18 лет.",
      },
      offices: {
        dubai: { title: "Офис в Дубае", status: "Открытие скоро" },
        moscowSpb: {
          title: "Москва и Санкт-Петербург",
          status: "Представительства",
        },
      },
    },
    Contact: {
      title: "Связаться с нами",
      subtitle: "Ответим в течение 24 часов",
      name: "Ваше имя *",
      phone: "Телефон / WhatsApp *",
      email: "Email (необязательно)",
      message: "Ваше сообщение *",
      privacy: { part1: "Я согласен с", link: "Политикой конфиденциальности" },
      sendButton: "Отправить сообщение",
      sending: "Отправляем...",
      success: "Спасибо! Мы получили ваше сообщение.",
      error: "Ошибка. Пожалуйста, напишите в WhatsApp.",
    },
    Footer: {
      description: {
        line1: "Лицензированное агентство недвижимости ОАЭ",
        line2: "Покупка • Продажа • Аренда • Оплата в рублях",
      },
      quickLinks: {
        title: "Быстрые ссылки",
        freelance: "Программа для фриланс-брокеров",
        properties: "Объекты",
        rub: "Оплата в рублях",
        contact: "Контакты",
      },
      contact: { title: "Контакты" },
      offices: {
        title: "Офисы",
        dubai: {
          city: "Дубай, ОАЭ",
          address: "Business Bay (адрес скоро появится)",
        },
        russia: {
          cities: "Москва • Санкт-Петербург",
          status: "Представительства",
        },
      },
      copyright: "Все права защищены.",
      legal: {
        privacy: "Политика конфиденциальности",
        terms: "Условия использования",
        documents: "Документы",
      },
    },
    FreelanceBanner: {
      cta: "Стать партнёром → Зарабатывать больше",
      title: "Партнёрская программа — 100% вашей комиссии",
      subtitle: "+ 0.2% бонус на каждую сделку",
      description:
        "Эксклюзивная программа для опытных фриланс-брокеров, работающих с русскоязычными клиентами в Дубае",
    },
    LyschorGroup: {
      title: { part1: "Часть", group: "Lyschor Group" },
      stats: {
        experience: "более 18 лет международного опыта",
        projects: "Завершённых проектов по всему миру",
        offices:
          "Офисы: Турция • Индонезия • Эстония • Польша • ОАЭ • Румыния • Кипр • Москва • Санкт-Петербург",
      },
      description:
        "Сильная внутренняя юридическая команда • Глубокая экспертиза в трансграничных структурах •и расчётах Безупречная деловая репутация с 2007 года",
    },
    Navbar: {
      rubPayment: "Оплата в рублях",
      services: "Услуги",
      whyUs: "Почему мы",
      properties: "Объекты",
      contact: "Контакты",
      cta: "100% комиссия",
    },
    PaymentInfographic: {
      title: "Как работает легальный платёж в рублях (RUB)",
      step1: "Покупатель из России\nРублёвый счёт",
      step2: "Агентство / Эскроу-договор",
      step3: "Lyschor Real Estate\nРублёвый счёт",
      step4: "Оплата в дирхамах (AED)\nзастройщику / продавцу",
      step5: "Выдача тайтл-дида\n(свидетельства о собственности)",
    },
    PropertyShowcase: {
      title: "Рекомендуемые объекты",
      propertyAlt: "{type} в {location}",
      cta: "Получить персональную подборку",
    },
    RubPayment: {
      title: {
        line1: "Легальная оплата в рублях безналично",
        highlight: "Только для покупателей из РФ",
      },
      howItWorks: {
        title: "Как работает платёж",
        step1: "Покупатель переводит рубли со своего счёта в РФ",
        step2:
          "Деньги поступают абсолютно легально по договору агентирования или эскроу.",
        step3:
          "Мы переводим дирхамы (AED) застройщику или продавцу через банки ОАЭ.",
      },
      advantages: {
        title: "Преимущества",
        list: [
          "100% легально и прозрачно",
          "Без задержек SWIFT",
          "Без рисков криптовалюты",
          "Гарантированные платежи по графику",
          "Полный пакет документов до Title Deed",
        ],
      },
    },
    Services: {
      title: "Наши услуги",
      buyingSelling: {
        title: "Покупка и продажа недвижимости",
        items: [
          "Подбор объектов (off-plan и вторичный рынок)",
          "Юридическая проверка",
          "Сопровождение в DLD",
          "Полное сопровождение сделки",
        ],
      },
      leasing: {
        title: "Аренда недвижимости",
        items: [
          "Поиск аренды",
          "Поддержка при заключении договора",
          "Регистрация в Ejari",
          "Переговоры с арендодателем",
        ],
      },
      rubPayment: {
        title: "Сервис оплаты в рублях",
        items: [
          "Агентский договор (эскроу)",
          "Прозрачная отчётность",
          "Полный комплект документов",
          "Гарантированные сроки платежей",
        ],
      },
    },
    OfferAgencies: {
      title: "Предложение для агентств недвижимости",
      description:
        "Приглашаем агентства недвижимости к сотрудничеству. Мы предоставляем сервис, позволяющий вашим клиентам осуществлять безналичные платежи в российских рублях из Российской Федерации.",
      cta: "Запросить детали партнёрства",
    },
    Documents: {
      title: "Официальные документы и лицензии",
      subtitle:
        "Полная прозрачность — все лицензии и юридические документы доступны для проверки",
      viewPdf: "Скачать PDF",
      cta: { text: "Нужны заверенные копии?", button: "Запросить документы" },
      list: {
        buyingSelling:
          "Лицензия на покупку и продажу недвижимости (RERA ORN: 12345)",
        leasing: "Лицензия на аренду недвижимости (RERA ORN: 12345)",
        tradeLicense: "Торговая лицензия компании (  DED No. 987654)",
        moa: "Меморандум о партнёрстве (MOA)",
        tenancy: "Договор аренды офиса",
        dreicert: "Сертификат DREI",
        policeClearance: "Справка о несудимости",
        incorporation: "Свидетельство о регистрации",
        escrowTemplate: "Шаблон агентского договора (эскроу)",
        affiliation: "Письмо о принадлежности к Lyschor Group",
        availableOnRequest: "По запросу",
        dubaiRegistry: "Реестр Дубая",
        officialDocument: "Официальный документ",
      },
    },
    FreelanceBrokers: {
      hero: {
        title: "Партнёрская программа — 100% вашей комиссии",
        subtitle: "",
        description:
          "Эксклюзивная программа для опытных фриланс-брокеров, работающих с русскоязычными клиентами",
        cta: "Стать партнёром сегодня",
      },
      conditions: {
        title: "Условия программы",
        list: [
          "100% комиссии от любой сделки — только вам",
          "Дополнительный бонус +0.2% от стоимости объекта",
          "Все сделки проходят через наш легальный рублёвый сервис",
          "Полное сопровождение и эскроу включено",
          "Никаких скрытых комиссий — никогда",
        ],
      },
      benefits: {
        title: "Как это помогает закрывать сделки быстрее",
        description:
          "Ваши клиенты из РФ платят рублями со своих счетов → мы получаем деньги по официальному агентскому договору (эскроу) → оплачиваем застройщику или продавцу в дирхамах стандартными методами ОАЭ.",
        guarantees:
          "Без проблем со SWIFT • Без крипто-рисков • Гарантированные платежи по графику • Полный пакет документов до Title Deed",
      },
    },
    PrivacyPolicy: {
      title: "Политика конфиденциальности",
      lastUpdated: "Последнее обновление: Декабрь 2025",
      section1: {
        title: "1. Введение",
        content:
          'Lyschor Real Estate LLC ("мы", "наш", "нас") уважает вашу конфиденциальность и обязуется защищать ваши персональные данные. Настоящая политика конфиденциальности объясняет, как мы собираем, используем и защищаем вашу информацию при посещении нашего сайта.',
      },
      section2: {
        title: "2. Какие данные мы собираем",
        list: [
          "Полное имя",
          "Номер телефона (включая WhatsApp)",
          "Адрес электронной почты",
          "Любая информация, предоставленная в сообщениях",
        ],
      },
      section3: {
        title: "3. Как мы используем ваши данные",
        intro: "Мы используем ваши данные исключительно для:",
        list: [
          "Предоставления консультаций по недвижимости",
          "Ответов на ваши запросы",
          "Отправки подборок объектов (только с согласия)",
          "Улучшения наших услуг",
        ],
      },
      section4: {
        title: "4. Безопасность данных",
        content:
          "Мы применяем стандартные отраслевые меры безопасности для защиты ваших персональных данных. Ваши данные никогда не продаются и не передаются третьим лицам, кроме случаев, предусмотренных законодательством ОАЭ.",
      },
      contact: { question: "Есть вопросы? Напишите нам:" },
    },
    TermsOfUse: {
      title: "Условия использования",
      lastUpdated: "Вступает в силу: Декабрь 2025",
      intro: "Используя этот сайт, вы соглашаетесь с этими условиями...",
      section1: {
        title: "1. Принятие условий",
        content:
          "Доступ или использование этого сайта означает согласие с этими Условиями использования и нашей Политикой конфиденциальности.",
      },
      section2: {
        title: "2. Использование сайта",
        content:
          "Вы можете использовать этот сайт только в законных целях. Вы соглашаетесь не копировать или распространять контент без разрешения.",
      },
      section3: {
        title: "3. Интеллектуальная собственность",
        content:
          "Весь контент, включая текст, изображения и логотипы, является собственностью Lyschor Real Estate LLC и защищён законами об авторском праве.",
      },
      section4: {
        title: "4. Ограничение ответственности",
        content:
          "Мы предоставляем информацию 'как есть' без гарантий. Мы не несем ответственности за косвенные, случайные или последующие убытки.",
      },
      contact: { question: "У вас есть вопросы по условиям?" },
    },
    Metadata: {
      title:
        "Lyschor Real Estate LLC — Лицензированное агентство ОАЭ с оплатой в рублях",
      description:
        "Лицензированное агентство недвижимости в Дубае с легальной оплатой в рублях. Покупка и продажа недвижимости без SWIFT и криптовалюты. Лицензия RERA.",
      keywords:
        "недвижимость дубай рубли, купить квартиру дубай рублями, брокер дубай рубли, дубай недвижимость русские, купить недвижимость дубай из россии",
      ogTitle:
        "Lyschor Real Estate — Легальная оплата в рублях для покупателей из РФ",
      ogDescription:
        "Лицензированное агентство ОАЭ с уникальным сервисом оплаты в рублях через эскроу",
    },
  },
};

export default translations;
