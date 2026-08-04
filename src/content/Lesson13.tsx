import { H2, P, UL, CompareTable } from "../components/content/Elements";

export default function Lesson13() {
  return (
    <>
      <H2>Multimediali tarmoq texnologiyalari</H2>
      <P>
        Zamonaviy tarmoqlarning muhim vazifasi — nafaqat matn va fayllarni,
        balki jonli video, tovush va tasvirni ham tezkor uzatish. Bu
        vazifani bajarish uchun Web/IP kameralar, video-konferensiya
        platformalari va tegishli uzatish protokollari ishlatiladi.
      </P>

      <H2>Web va IP kameralar</H2>
      <P>
        <b>Web-kamera</b> — kompyuterga USB orqali ulanib, tasvirni to'g'ridan
        to'g'ri kompyuter dasturi orqali uzatuvchi qurilma. <b>IP-kamera</b>{" "}
        esa o'zining tarmoq interfeysiga ega bo'lib, to'g'ridan-to'g'ri LAN
        yoki Internetga ulanadi va mustaqil ravishda video oqimini uzatadi
        — kuzatuv tizimlarida keng qo'llaniladi.
      </P>

      <CompareTable
        headers={["Xususiyat", "Web-kamera", "IP-kamera"]}
        rows={[
          ["Ulanish", "USB, kompyuter orqali", "To'g'ridan tarmoqga (Ethernet/Wi-Fi)"],
          ["Mustaqillik", "Kompyutersiz ishlamaydi", "Mustaqil, tarmoqqa bevosita uzatadi"],
          ["Ishlatilishi", "Video qo'ng'iroqlar", "Kuzatuv tizimlari, uzoq masofa"],
        ]}
      />

      <H2>Video-konferensiya xizmatlari</H2>
      <P>
        <b>ZOOM</b>, <b>Google Meet</b> kabi platformalar video va audio
        oqimlarni real vaqt rejimida siqib (compress), Internet orqali
        boshqa foydalanuvchilarga uzatadi va ularning tomonida qayta
        tiklaydi (decode). Bunda kechikishni kamaytirish uchun odatda UDP
        asosidagi protokollardan foydalaniladi.
      </P>

      <UL
        items={[
          "Video/audio signal kamerada raqamli ma'lumotga aylantiriladi (encoding)",
          "Ma'lumot siqiladi va tarmoq orqali kichik paketlarda uzatiladi",
          "Qabul qiluvchi tomonda paketlar qayta yig'ilib, video/audio qayta tiklanadi (decoding)",
          "Kechikish va paket yo'qotilishini kamaytirish uchun buferlash qo'llaniladi",
        ]}
      />

    </>
  );
}
