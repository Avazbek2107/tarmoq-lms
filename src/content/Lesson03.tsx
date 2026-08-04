import { H2, P, OL, UL } from "../components/content/Elements";

export default function Lesson03() {
  return (
    <>
      <H2>Kompyuter tarmog'i qanday yaratiladi?</H2>
      <P>
        Har qanday kompyuter tarmog'ini yaratish bir necha bosqichdan iborat
        rejalashtirish va amalga oshirish jarayonini talab qiladi. Tarmoqni
        loyihalashda foydalanuvchilar soni, masofa, talab qilinadigan tezlik
        va xavfsizlik darajasi hisobga olinadi.
      </P>

      <OL
        items={[
          <>
            <b>Ehtiyojni aniqlash</b> — nechta qurilma ulanadi, qanday
            resurslar (printer, fayl, internet) ulashiladi.
          </>,
          <>
            <b>Topologiyani tanlash</b> — qurilmalar qanday joylashadi va
            ulanadi (yulduz, shina, halqa va h.k.).
          </>,
          <>
            <b>Uskunalarni tanlash</b> — kabel turi, switch, router, server.
          </>,
          <>
            <b>Manzillashtirish</b> — har bir qurilmaga IP-manzil va tarmoq
            sozlamalarini belgilash.
          </>,
          <>
            <b>Sinovdan o'tkazish va monitoring</b> — tarmoqning barqaror
            ishlashini tekshirish, xavfsizlik siyosatini joriy etish.
          </>,
        ]}
      />

      <H2>Tarmoq asoslari — asosiy tushunchalar</H2>
      <UL
        items={[
          <><b>Bant kengligi (bandwidth)</b> — kanal orqali bir vaqtning o'zida uzatilishi mumkin bo'lgan ma'lumot hajmi (Mbit/s, Gbit/s).</>,
          <><b>Kechikish (latency)</b> — ma'lumot manbadan qabul qiluvchigacha yetib borish vaqti.</>,
          <><b>Bayonnoma (protokol)</b> — qurilmalar orasidagi aloqa qoidalari to'plami (masalan, TCP/IP).</>,
          <><b>Marshrutlash</b> — ma'lumot paketi uchun manzilgacha bo'lgan yo'lni aniqlash jarayoni.</>,
        ]}
      />

    </>
  );
}
