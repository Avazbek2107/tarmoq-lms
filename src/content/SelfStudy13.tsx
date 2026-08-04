import { H2, P, KeyTerms } from "../components/content/Elements";

export default function SelfStudy13() {
  return (
    <>
      <H2>IPsec deytagrammasi</H2>
      <P>
        <b>IPsec (Internet Protocol Security)</b> — IP paketini shifrlab,
        uning ichidagi ma'lumotni himoyalaydigan protokollar to'plami.
        U ma'lumotni shifrlaydi (maxfiylik) va uning yo'lda
        o'zgartirilmaganligini tasdiqlaydi (yaxlitlik). IPsec ko'pincha
        VPN (Virtual Private Network) tarmoqlarida ikkita nuqta orasidagi
        aloqani himoyalash uchun qo'llaniladi.
      </P>

      <H2>Kanalli darajadagi kommutatorlar</H2>
      <P>
        Kanal (link) darajasidagi kommutatorlar — freymlarni MAC-manzil
        asosida to'g'ri portga yo'naltiruvchi qurilmalar (masalan, oddiy
        Ethernet switch). Ular IP-manzil bilan ishlamaydi, faqat fizik
        qatlamdagi manzillash asosida ishlaydi, shu sababli tezkor va
        oddiy tarmoqlar uchun samarali hisoblanadi.
      </P>

      <H2>Link qatlam darajalari</H2>
      <P>
        Kanal (link) qatlami odatda ikki kichik qatlamga bo'linadi:{" "}
        <b>LLC (Logical Link Control)</b> — yuqori qatlamlar bilan
        aloqani ta'minlaydi, va <b>MAC (Media Access Control)</b> — fizik
        muhitga kirish va manzillashni boshqaradi. Ushbu ikki kichik
        qatlam birgalikda ma'lumotni freymlarga bo'lish, xatolarni
        aniqlash va tarmoq muhitiga uzatishni tashkil etadi.
      </P>

      <KeyTerms
        terms={[
          { term: "VPN", def: "Internet orqali shifrlangan, xavfsiz mantiqiy tarmoq hosil qiluvchi texnologiya." },
          { term: "MAC-manzil", def: "Tarmoq kartasiga zavoddan beriladigan noyob fizik manzil." },
          { term: "Freym (Frame)", def: "Kanal qatlamida uzatiladigan ma'lumot birligi." },
        ]}
      />
    </>
  );
}
