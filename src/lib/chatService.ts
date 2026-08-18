/**
 * Chat javob xizmati.
 *
 * Hozircha API kaliti ulanmagani uchun oddiy kalit so'z asosidagi
 * (mock) javoblar qaytariladi. API tayyor bo'lganda faqat shu faylni
 * o'zgartirib, haqiqiy so'rov (fetch/SDK chaqiruvi) bilan almashtirish
 * kifoya — qolgan qism (useChat, ChatWidget) o'zgarishsiz qoladi.
 */

const RULES: { keywords: string[]; reply: string }[] = [
  {
    keywords: ["salom", "assalom", "hi", "hello"],
    reply: "Salom! TarmoqLMS yordamchisiman. Kurs, mavzular yoki tizimga kirish bo'yicha savolingiz bo'lsa so'rang.",
  },
  {
    keywords: ["kirish", "parol", "ro'yxatdan", "royxatdan", "hisob"],
    reply:
      "Hisob yaratish uchun \"Ro'yxatdan o'tish\" tugmasini bosing. Agar allaqachon hisobingiz bo'lsa, \"Kirish\" sahifasidan email va parolingiz bilan kiring.",
  },
  {
    keywords: ["mavzu", "kurs", "dastur", "nechta"],
    reply:
      "Kursda jami 15 mavzu bor — har birida Ma'ruza, Amaliyot va Mustaqil ta'lim bo'limlari mavjud. To'liq ro'yxatni \"Kurs dasturi\" sahifasida ko'rishingiz mumkin.",
  },
  {
    keywords: ["laboratoriya", "lab", "simulyator", "packet tracer"],
    reply:
      "Virtual laboratoriya sahifasida Cisco Packet Tracer, GNS3, Wireshark kabi vositalar va namunaviy topologiya mashqlari bilan tanishishingiz mumkin.",
  },
  {
    keywords: ["admin", "boshqaruv"],
    reply: "Admin panel faqat administrator hisobi uchun mo'ljallangan va /admin manzilida joylashgan.",
  },
  {
    keywords: ["rahmat", "raxmat", "thanks"],
    reply: "Arzimaydi! Yana savolingiz bo'lsa, bemalol yozavering.",
  },
];

const FALLBACK =
  "Hozircha bu savolga aniq javob bera olmayman — bu yordamchi hali test (mock) rejimida ishlayapti. Tez orada AI API ulanganidan so'ng, savollaringizga to'liq javob bera oladigan bo'laman. Hozircha \"Kurs dasturi\" yoki \"Virtual laboratoriya\" bo'limlarini ko'rib chiqishni tavsiya qilaman.";

export async function getBotReply(message: string): Promise<string> {
  const normalized = message.toLowerCase();
  const match = RULES.find((r) => r.keywords.some((k) => normalized.includes(k)));

  // Haqiqiy tarmoq so'rovi hissi uchun ozgina kechikish (UI sinash uchun qulay)
  await new Promise((resolve) => setTimeout(resolve, 500 + Math.random() * 500));

  return match ? match.reply : FALLBACK;
}
