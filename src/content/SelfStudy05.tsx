import { H2, P, OL, Callout } from "../components/content/Elements";

export default function SelfStudy05() {
  return (
    <>
      <H2>Lokal tarmoqda ma'lumotlar almashinuv modeli</H2>
      <P>
        Lokal tarmoqda ma'lumot almashinuvi odatda quyidagi bosqichlar
        orqali amalga oshadi: yuboruvchi ma'lumotni tayyorlaydi va
        paketlarga bo'ladi, tarmoq qurilmalari (switch) uni manzil
        bo'yicha yo'naltiradi, qabul qiluvchi paketlarni qayta yig'ib,
        asl ma'lumotni tiklaydi.
      </P>
      <OL
        items={[
          "Ma'lumot ilova darajasida shakllantiriladi (masalan, fayl)",
          "Ma'lumot kichik paketlarga bo'linadi va sarlavha (header) qo'shiladi",
          "Paketlar tarmoq kartasi orqali fizik muhitga (kabel/havo) chiqariladi",
          "Switch paketni MAC-manzil asosida kerakli portga yo'naltiradi",
          "Qabul qiluvchi tomon paketlarni tartib bilan qayta yig'ib, asl ma'lumotni hosil qiladi",
        ]}
      />

      <H2>Lokal tarmoqning jamiyat rivojlanishidagi roli</H2>
      <P>
        Lokal tarmoqlar ta'lim, tibbiyot, bank va davlat xizmatlarini
        avtomatlashtirishda muhim rol o'ynaydi — ma'lumotlar tezkor
        almashinadi, qog'oz hujjat aylanmasi kamayadi, xizmat ko'rsatish
        sifati oshadi. Masalan, universitet kompyuter tarmog'i orqali
        talabalar baholari, jadval va elektron resurslarga bir zumda
        kirish imkoni yaratiladi.
      </P>

      <Callout kind="info" title="Fikrlash uchun savol">
        O'zingiz o'qiyotgan ta'lim muassasasida lokal tarmoq qanday
        xizmatlarni (elektron jurnal, Wi-Fi, kutubxona tizimi va h.k.)
        avtomatlashtirgan? Ro'yxat tuzib chiqing.
      </Callout>
    </>
  );
}
