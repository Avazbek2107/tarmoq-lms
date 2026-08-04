import { H2, P, UL, Callout, KeyTerms } from "../components/content/Elements";
import { Figure, ClientServerDiagram } from "../components/diagrams/Diagrams";

export default function Lesson01() {
  return (
    <>
      <H2>Kompyuter tarmog'i nima?</H2>
      <P>
        <b>Kompyuter tarmog'i</b> — bir-biri bilan aloqa kanallari (kabel,
        radioto'lqin, optik tola) orqali bog'langan va resurslarni (fayllar,
        printerlar, internet kanali, hisoblash quvvati) birgalikda
        ishlatuvchi ikki va undan ortiq kompyuter yoki qurilmalar
        yig'indisidir. Tarmoq tufayli ma'lumotni bir joydan ikkinchi joyga
        tezkor uzatish, resurslardan tejamli foydalanish va foydalanuvchilar
        o'rtasida hamkorlikni tashkil etish imkoni tug'iladi.
      </P>
      <Callout kind="info" title="Nega tarmoq kerak?">
        Yagona kompyuterda ishlash resurslarni takrorlashga (har birida
        alohida printer, alohida ma'lumotlar bazasi) olib keladi. Tarmoq esa
        bitta resursni ko'p foydalanuvchiga taqdim etish, markazlashgan
        boshqaruv va tezkor axborot almashinuvini ta'minlaydi.
      </Callout>

      <H2>Kompyuter tarmoqlarining shakllari</H2>
      <P>
        Tarmoqdagi kompyuterlarning o'zaro munosabatiga qarab ikki asosiy
        model ajratiladi:
      </P>
      <Figure caption="Klient–server va peer-to-peer (teng huquqli) modellari">
        <ClientServerDiagram />
      </Figure>
      <UL
        items={[
          <>
            <b>Klient–server modeli</b> — markazda kuchli server turadi, u
            fayllarni, ma'lumotlar bazasini yoki xizmatlarni boshqaradi;
            klientlar esa serverga so'rov yuboradi va javob oladi. Boshqarish
            va xavfsizlik markazlashgan.
          </>,
          <>
            <b>Peer-to-peer (teng huquqli) model</b> — barcha kompyuterlar
            teng huquqqa ega, har biri ham resurs so'ray oladi, ham resurs
            taqdim eta oladi. Kichik ofis tarmoqlarida keng qo'llaniladi.
          </>,
        ]}
      />

      <H2>Fanning maqsad va vazifalari</H2>
      <P>
        "Kompyuter tarmoqlari" fani talabalarda kommunikatsion kanallar,
        modulyatsiya-demodulyatsiya, tarmoq xizmatlari, topologiyalar,
        ma'lumot uzatish bayonnomalari (protokollar), tarmoq operatsion
        tizimlari, lokal tarmoqlar, Intranet va Internet haqida tasavvur,
        bilim va amaliy ko'nikmalarni shakllantiradi. Bu bilimlar "Tarmoq
        texnologiyalari", "Mobil aloqa va ilovalar", kriptografiya va "EHM
        arxitekturasi" kabi fanlarni chuqur o'zlashtirish uchun poydevor
        bo'lib xizmat qiladi.
      </P>

      <KeyTerms
        terms={[
          { term: "Tugun (Node)", def: "Tarmoqqa ulangan har qanday qurilma — kompyuter, printer, router." },
          { term: "Kanal (Link)", def: "Tugunlar orasidagi ma'lumot uzatish yo'li: kabel yoki radiokanal." },
          { term: "Protokol", def: "Tarmoqdagi qurilmalar bir-birini tushunishi uchun kelishilgan qoidalar to'plami." },
          { term: "Resurs", def: "Tarmoq orqali ulashiladigan fayl, xizmat yoki uskuna (printer, disk, internet)." },
        ]}
      />
    </>
  );
}
