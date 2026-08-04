import { H2, P, Callout } from "../components/content/Elements";

export default function SelfStudy10() {
  return (
    <>
      <H2>Ma'lumotlarni ishonchli uzatish tamoyili</H2>
      <P>
        Paketlar kommutatsiyasida har bir paket alohida yo'l bilan borishi
        mumkinligi sababli, ular manzilga turli tartibda va turli vaqtda
        yetib borishi mumkin. Shu bois qabul qiluvchi tomonda paketlarni
        to'g'ri tartibda qayta yig'ish, yo'qolgan paketlarni qayta so'rash
        va xatolarni tekshirish mexanizmlari (masalan, TCP protokolida)
        joriy etilgan — bu <b>ishonchli uzatish tamoyili</b> deyiladi.
      </P>

      <H2>Virtual kanalli tarmoqlar</H2>
      <P>
        Paketlar kommutatsiyasidan farqli o'laroq, <b>virtual kanalli</b>{" "}
        tarmoqlarda (masalan, klassik telefon tarmoqlari yoki ATM
        texnologiyasi) ma'lumot uzatishdan oldin boshdan-oyoq mantiqiy
        "kanal" o'rnatiladi va barcha ma'lumot shu bir yo'l orqali ketma-ket
        boradi. Bu real vaqt aloqasi (masalan, ovozli qo'ng'iroqlar) uchun
        qulay, ammo tarmoq resurslaridan tejamli foydalanish jihatidan
        paketli kommutatsiyadan orqada qoladi.
      </P>

      <Callout kind="info" title="Taqqoslash uchun savol">
        Video-qo'ng'iroq va fayl yuklab olish jarayonlarining qaysi biri
        virtual kanalli, qaysi biri paketli kommutatsiya tamoyiliga
        ko'proq mos keladi? Sabablarini asoslab yozing.
      </Callout>
    </>
  );
}
