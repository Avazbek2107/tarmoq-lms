import { H2, P, UL, CompareTable } from "../components/content/Elements";

export default function SelfStudy02() {
  return (
    <>
      <H2>Tarmoqdagi ma'lumot turlari va hajmi</H2>
      <P>
        Tarmoq orqali uzatiladigan ma'lumotlar turi bo'yicha bir-biridan
        farqlanadi, va bu farq ularning hajmi va uzatilish talablariga
        bevosita ta'sir qiladi.
      </P>
      <CompareTable
        headers={["Ma'lumot turi", "Taxminiy hajmi", "Talab"]}
        rows={[
          ["Matn (email, xabar)", "Bir necha KB", "Past kechikish yetarli"],
          ["Rasm", "0,5–10 MB", "O'rtacha bant kengligi"],
          ["Audio (qo'ng'iroq)", "Sekundiga ~10–100 KB", "Past kechikish muhim"],
          ["Video (HD striming)", "Sekundiga ~1–5 MB", "Yuqori bant kengligi va past kechikish"],
        ]}
      />

      <H2>Almashinuv jarayonidagi dasturlarning o'rni</H2>
      <P>
        Ma'lumot turi qanday bo'lishidan qat'i nazar, uni tarmoq orqali
        uzatish va qabul qilish uchun maxsus dasturlar (ilovalar)
        ishlatiladi — ular ma'lumotni to'g'ri formatga o'tkazadi
        (kodlash), tarmoq orqali yuboradi va qabul qiluvchi tomonda qayta
        tiklaydi (dekodlash).
      </P>
      <UL
        items={[
          "Elektron pochta dasturlari — matn va fayllarni SMTP/IMAP orqali uzatadi",
          "Media pleyerlar — video/audio oqimini kodek yordamida qayta tiklaydi",
          "Fayl almashish dasturlari — katta hajmli fayllarni bo'lib-bo'lib (chunk) uzatadi",
        ]}
      />
      <P>
        Shunday qilib, dasturiy ta'minot nafaqat ma'lumotni ko'rsatadi,
        balki uning tarmoq orqali samarali va ishonchli uzatilishini
        ham ta'minlaydi.
      </P>
    </>
  );
}
