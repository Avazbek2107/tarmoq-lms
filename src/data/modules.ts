export type IconKey =
  | "network"
  | "hub"
  | "layers"
  | "types"
  | "structure"
  | "cable"
  | "topology"
  | "intranet"
  | "globe"
  | "history"
  | "sitemap"
  | "protocol"
  | "video"
  | "shield-lock"
  | "firewall";

export interface ModuleMeta {
  id: number;
  slug: string;
  title: string;
  shortDesc: string;
  icon: IconKey;
  duration: string;
  lectureTopics: string[];
  seminarTopic: string;
  selfStudyTopics: string[];
}

export const modules: ModuleMeta[] = [
  {
    id: 1,
    slug: "tarmoq-fani-tushunchasi",
    title: "“Kompyuter tarmoqlari” fani haqida tushuncha",
    shortDesc:
      "Kompyuter tarmog'i nima, qanday shakllarda bo'ladi va fan nimani o'rgatadi.",
    icon: "network",
    duration: "45 daq",
    lectureTopics: [
      "Kompyuter tarmoqlari haqida tushuncha",
      "Kompyuter tarmoqlarining shakllari",
    ],
    seminarTopic: "Kompyuter tarmoqlarining texnik vositalari",
    selfStudyTopics: [
      "Kompyuter tarmoqlarining tarixi",
      "Kompyuter tarmoqlarining nomlanishiga sabablar va ularning xususiyatlarining farqlari",
    ],
  },
  {
    id: 2,
    slug: "kommunikatsiyalar-turlari",
    title: "Kompyuter kommunikatsiyalari va ularning turlari",
    shortDesc: "Hub, Switch va MikroTik qurilmalarining vazifalari va farqlari.",
    icon: "hub",
    duration: "50 daq",
    lectureTopics: ["Hub", "Switch", "MikroTik"],
    seminarTopic: "Kompyuter tarmoqlarining dasturiy vositalari",
    selfStudyTopics: [
      "Tarmoqdagi ma'lumot turlari, hajmi va almashinuv jarayonidagi dasturlarning o'rni",
    ],
  },
  {
    id: 3,
    slug: "umumiy-tushunchalar",
    title: "Kompyuter tarmoqlari haqida umumiy tushunchalar",
    shortDesc: "Tarmoq qanday yaratiladi va uning asosiy tarkibiy qismlari.",
    icon: "layers",
    duration: "45 daq",
    lectureTopics: ["Kompyuter tarmoqlari yaratilishi", "Tarmoq asoslari"],
    seminarTopic: "Kompyuter tarmoqlarining tuzilishi",
    selfStudyTopics: ["Mintaqaviy tarmoq bayonnomalari"],
  },
  {
    id: 4,
    slug: "tarmoq-turlari-klassifikatsiyasi",
    title: "Kompyuter tarmoqlarining turlari. Ularning klassifikatsiyasi",
    shortDesc: "PAN, LAN, MAN va WAN/GAN tarmoqlari — masofa bo'yicha tasnif.",
    icon: "types",
    duration: "55 daq",
    lectureTopics: ["LAN", "MAN", "GAN", "PAN"],
    seminarTopic: "Lokal tarmoqqa kirish",
    selfStudyTopics: [
      "Lokal tarmoq aloqa vositalari",
      "Kompyuterlararo aloqalarni tashkil etish yo'llari",
    ],
  },
  {
    id: 5,
    slug: "tarmoq-tuzilishi-qollanilishi",
    title: "Kompyuter tarmoqlarining tuzilishi va qo'llanilishi",
    shortDesc: "Fizik, mantiqiy, axborot va boshqaruv tuzilmalari, IP manzillar.",
    icon: "structure",
    duration: "55 daq",
    lectureTopics: [
      "Fizik tuzilma",
      "Mantiqiy tuzilma",
      "Axborot tuzilmasi",
      "Almashinuv boshqaruvi",
    ],
    seminarTopic: "IP manzillar. Tarmoq xizmatlari",
    selfStudyTopics: [
      "Lokal tarmoqda ma'lumotlar almashinuv modeli",
      "Lokal tarmoqning jamiyat rivojlanishidagi roli va ahamiyati",
    ],
  },
  {
    id: 6,
    slug: "lokal-tarmoqqa-kirish",
    title: "Lokal kompyuter tarmog'iga kirish",
    shortDesc: "Kabel turlari, konnektorlar va tarmoqni o'lchash asboblari.",
    icon: "cable",
    duration: "50 daq",
    lectureTopics: ["Kabel", "Konnektor", "O'lchash asboblari"],
    seminarTopic: "Intranet tarmog'i. Internet xizmatlari",
    selfStudyTopics: [
      "Internet tizimi va uning kelib chiqish tarixi",
      "Internet tizimini yaratishda ish olib borgan olimlar ijodi",
    ],
  },
  {
    id: 7,
    slug: "lokal-tarmoq-topologiyasi",
    title: "Lokal tarmoq topologiyasi",
    shortDesc: "Shina, Yulduz, Halqa va Mesh topologiyalari — afzallik va kamchiliklar.",
    icon: "topology",
    duration: "55 daq",
    lectureTopics: [
      "Shina (Bus) topologiyasi",
      "Yulduz (Star) topologiyasi",
      "Halqa (Ring) topologiyasi",
      "Mesh topologiyasi",
    ],
    seminarTopic: "Internet dasturiy ta'minoti",
    selfStudyTopics: [
      "Rasmli va murakkab ob'ektli ma'lumotlarning Internet tizimidagi almashinuv jarayonlari",
    ],
  },
  {
    id: 8,
    slug: "intranet-ichki-tarmoq",
    title: "Intranet — xususiy ichki tarmoq",
    shortDesc: "Tashkilot ichki tarmog'i, veblash va brauzer dasturlari.",
    icon: "intranet",
    duration: "50 daq",
    lectureTopics: [
      "Ichki tarmoqda veblash",
      "Internetni tashkil etuvchi dasturlarni yaratish",
    ],
    seminarTopic: "Brauzer dasturlari va ularning imkoniyatlari",
    selfStudyTopics: [
      "Internetni tashkil etuvchi dasturning yaratilish tarixi va unga o'xshash dasturlar",
      "Internetda axborot xavfsizligi va uni himoyalash usullari",
      "Paketlar kommutatsiyasining rivojlanishi",
    ],
  },
  {
    id: 9,
    slug: "internet-global-tarmoq",
    title: "Internet — global kompyuter tarmog'i",
    shortDesc: "GAN tushunchasi va multimedia bilan ishlashda tarmoqlardan foydalanish.",
    icon: "globe",
    duration: "50 daq",
    lectureTopics: ["GAN haqida umumiy tushunchalar"],
    seminarTopic: "Multimedia bilan ishlashda tarmoqlardan foydalanish",
    selfStudyTopics: [
      "Xususiy tarmoqlar va Internetning rivojlanishi",
      "Internet — shiddat bilan rivojlanish: 1990-yillar",
    ],
  },
  {
    id: 10,
    slug: "internet-tarixi",
    title: "Internet paydo bo'lishining tarixi",
    shortDesc: "ARPANET va NSFNET — zamonaviy Internetning ildizlari.",
    icon: "history",
    duration: "45 daq",
    lectureTopics: ["ARPANET", "NSFNET"],
    seminarTopic: "Multimediali tarmoq texnologiyalarida uzatishlar",
    selfStudyTopics: [
      "Ma'lumotlarni ishonchli uzatish tamoyili",
      "Virtual kanalli tarmoqlar",
    ],
  },
  {
    id: 11,
    slug: "internet-tuzilishi",
    title: "Internet tarmog'ining tuzilishi",
    shortDesc: "Global tarmoqning tashkil etuvchilari va IPv4 manzillash.",
    icon: "sitemap",
    duration: "55 daq",
    lectureTopics: [
      "Global kompyuter tarmog'i",
      "Uning tashkil etuvchilari",
    ],
    seminarTopic: "Tarmoq xavfsizligi asoslari",
    selfStudyTopics: [
      "IPv4 manzillash",
      "Guruhli marshrutlash",
      "Yagona IP-tarmoqosti doirasida mobillik",
    ],
  },
  {
    id: 12,
    slug: "internet-xizmatlari-protokollar",
    title: "Internet xizmatlari va uning dasturiy ta'minoti. Protokollar",
    shortDesc: "TCP/IP manzillar, DNS tizimi va ma'lumotlarni muhofaza qilish.",
    icon: "protocol",
    duration: "60 daq",
    lectureTopics: ["TCP/IP manzillar", "DNS"],
    seminarTopic: "Ma'lumotlarni muhofaza qilish usullari",
    selfStudyTopics: [
      "Siklik nazorat kodi",
      "Simmetrik kalitlar bilan shifrlash",
      "SSL texnologiyasi yordamida TCP-bog'lanishlarni himoyalash",
    ],
  },
  {
    id: 13,
    slug: "multimediali-tarmoq-texnologiyalari",
    title: "Multimediali tarmoq texnologiyalari",
    shortDesc: "Web/IP kameralar, video konferensiya xizmatlari va uzatish usullari.",
    icon: "video",
    duration: "50 daq",
    lectureTopics: [
      "Web va IP kameralar. Ularni saralash",
      "ZOOM, Google Meet, video va audio xabar",
    ],
    seminarTopic: "Tarmoqda ma'lumotlar xavfsizligining uskunaviy ta'minoti",
    selfStudyTopics: [
      "IPsec deytagrammasi",
      "Kanalli darajadagi kommutatorlar",
      "Link qatlam darajalari",
    ],
  },
  {
    id: 14,
    slug: "tarmoq-xavfsizligi-asoslari",
    title: "Tarmoq xavfsizligi asoslari",
    shortDesc: "Protokollar xavfsizligi, masofadan boshqarish va WiFi standartlari.",
    icon: "shield-lock",
    duration: "55 daq",
    lectureTopics: ["Protokollar xavfsizligi", "Ma'lumotlarni masofadan boshqarish"],
    seminarTopic: "Tarmoqda ma'lumotlar xavfsizligining dasturiy ta'minoti",
    selfStudyTopics: [
      "WiFi 2.4 GHz, 5 GHz. WiFi 6",
      "Standart IEEE 802.11i",
    ],
  },
  {
    id: 15,
    slug: "tarmoq-xavfsizligi",
    title: "Tarmoq xavfsizligi",
    shortDesc: "Operatsion tizim himoyasi, Firewall va Kerio Control dasturi.",
    icon: "firewall",
    duration: "60 daq",
    lectureTopics: ["Operatsion tizim", "Firewall", "Bloklash (Blocks)"],
    seminarTopic: "Kerio Control dasturi bilan ishlash",
    selfStudyTopics: ["Kerio Control dasturi"],
  },
];

export const getModuleBySlug = (slug: string) =>
  modules.find((m) => m.slug === slug);

export const getModuleById = (id: number) => modules.find((m) => m.id === id);
