import { H2, P } from "../components/content/Elements";

export default function Lesson14() {
  return (
    <>
      <H2>Tarmoq xavfsizligining asosiy tamoyillari</H2>
      <P>
        Tarmoq xavfsizligi — ma'lumotning uchta asosiy xususiyatini
        himoyalashga qaratilgan: <b>maxfiylik</b> (ruxsatsiz shaxs ko'ra
        olmasligi), <b>yaxlitlik</b> (ma'lumot o'zgartirilmagan bo'lishi) va{" "}
        <b>mavjudlik</b> (xizmat kerak paytda ishlashi). Bu tamoyillar
        barcha xavfsizlik choralarining asosini tashkil qiladi.
      </P>

      <H2>Protokollar xavfsizligi</H2>
      <P>
        Ko'p eski protokollar (masalan, shifrlanmagan HTTP, Telnet) ma'lumotni
        ochiq matn holida uzatadi — bu ularni tinglash (sniffing) orqali
        oson o'qib olishga imkon beradi. Zamonaviy tizimlarda ularning
        xavfsiz variantlari (HTTPS, SSH) qo'llaniladi, chunki ular
        ma'lumotni shifrlab uzatadi.
      </P>

      <H2>Ma'lumotlarni masofadan boshqarish</H2>
      <P>
        Tizim administratorlari serverlar va tarmoq uskunalarini masofadan
        boshqarish uchun SSH, RDP kabi protokollardan foydalanadi. Bu
        kanallar albatta shifrlangan va kuchli autentifikatsiya (parol,
        kalit, ikki bosqichli tasdiqlash) bilan himoyalangan bo'lishi
        shart, aks holda hujumchi tarmoqni to'liq nazorat qilib olishi
        mumkin.
      </P>

    </>
  );
}
