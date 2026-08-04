import { H2, P, Callout } from "../components/content/Elements";

export default function SelfStudy12() {
  return (
    <>
      <H2>Siklik nazorat kodi (CRC)</H2>
      <P>
        <b>Siklik nazorat kodi (Cyclic Redundancy Check)</b> — uzatish
        paytida ma'lumotda xatolik yuzaga kelganligini aniqlash usuli.
        Yuboruvchi ma'lumot asosida matematik hisob-kitob (nazorat summasi)
        chiqarib, uni ma'lumotga qo'shib yuboradi; qabul qiluvchi xuddi
        shu hisobni qayta bajarib, natijalarni solishtiradi — mos
        kelmasa, ma'lumot yo'lda buzilgan deb topiladi.
      </P>

      <H2>Simmetrik kalitlar bilan shifrlash</H2>
      <P>
        <b>Simmetrik shifrlash</b> — ma'lumotni shifrlash va ochish uchun
        bir xil kalitdan foydalanish usuli (masalan, AES algoritmi). Bu
        usul tezkor ishlaydi, lekin kalitni ikki taraf xavfsiz almashishi
        muhim muammo hisoblanadi — agar kalit ushlab qolinsa, butun
        aloqa xavf ostida qoladi.
      </P>

      <H2>SSL texnologiyasi yordamida TCP-bog'lanishlarni himoyalash</H2>
      <P>
        <b>SSL/TLS</b> — TCP ulanishini shifrlab, veb-sayt va brauzer
        orasidagi ma'lumotni (masalan, parollarni) himoyalaydigan
        texnologiya. U dastlab assimetrik shifrlash (ochiq/yopiq kalit)
        yordamida xavfsiz "qo'l berishuv" (handshake) o'rnatadi, so'ngra
        tezkor simmetrik shifrlashga o'tadi. Brauzerdagi{" "}
        <code>https://</code> va qulf belgisi aynan shu texnologiyani
        bildiradi.
      </P>

      <Callout kind="info" title="Fikrlash uchun savol">
        Nega SSL/TLS avval assimetrik, so'ngra simmetrik shifrlashga
        o'tadi? Ikkalasini birgalikda ishlatishning afzalligi nimada,
        deb o'ylaysiz?
      </Callout>
    </>
  );
}
