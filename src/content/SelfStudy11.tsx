import { H2, P, KeyTerms } from "../components/content/Elements";
import { Figure, IpAddressDiagram } from "../components/diagrams/Diagrams";

export default function SelfStudy11() {
  return (
    <>
      <H2>IPv4 manzillash</H2>
      <P>
        IPv4 — Internetdagi qurilmalarni manzillashning asosiy sxemasi,
        32-bitli manzillardan foydalanadi (masalan, 172.16.254.1). Bu
        taxminan 4,3 milliard noyob manzil imkoniyatini beradi. Manzillar
        sinflarga (A, B, C, D, E) va xususiy/ommaviy turlarga bo'linadi.
        Xususiy manzillar (masalan, 192.168.0.0/16) faqat lokal tarmoq
        ichida ishlatiladi va Internetga to'g'ridan-to'g'ri chiqmaydi.
      </P>
      <Figure caption="IPv4 manzilining tarkibi">
        <IpAddressDiagram />
      </Figure>

      <H2>Guruhli marshrutlash (multicast routing)</H2>
      <P>
        Odatiy ma'lumot uzatishda paket bitta manzilga (unicast) yuboriladi.
        <b> Guruhli marshrutlash</b> esa bir paketni bir vaqtning o'zida
        oldindan belgilangan qurilmalar guruhiga yetkazish imkonini beradi
        — bu video-konferensiya, jonli translatsiya va IPTV xizmatlarida
        tarmoq resurslarini tejashga yordam beradi.
      </P>

      <H2>Yagona IP-tarmoqosti doirasida mobillik</H2>
      <P>
        Foydalanuvchi bir joydan ikkinchi joyga (masalan, bir Wi-Fi
        nuqtasidan ikkinchisiga) o'tganda, uning aloqasi uzilmasligi uchun
        <b> mobillik boshqaruvi</b> mexanizmlari qo'llaniladi. Bir xil
        IP-tarmoqosti (subnet) doirasida qurilma o'z IP-manzilini
        o'zgartirmasdan turli kirish nuqtalari orasida "sayohat" qilishi
        mumkin, bu uzluksiz aloqani ta'minlaydi.
      </P>

      <KeyTerms
        terms={[
          { term: "Subnet", def: "Kattaroq tarmoqning mantiqiy jihatdan ajratilgan kichik qismi." },
          { term: "Unicast / Multicast", def: "Bitta manzilga yoki belgilangan guruhga ma'lumot yuborish usullari." },
          { term: "Xususiy IP-manzil", def: "Faqat lokal tarmoq ichida ishlatiladigan, Internetga chiqmaydigan manzil (masalan, 10.0.0.0/8)." },
        ]}
      />
    </>
  );
}
