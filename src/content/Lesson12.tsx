import { H2, P, UL } from "../components/content/Elements";
import { Figure, TcpIpStackDiagram, DnsLookupDiagram } from "../components/diagrams/Diagrams";

export default function Lesson12() {
  return (
    <>
      <H2>TCP/IP protokollar to'plami</H2>
      <P>
        <b>TCP/IP</b> — zamonaviy Internetning texnik asosini tashkil etuvchi
        protokollar to'plami. U to'rt qatlamdan iborat bo'lib, har bir
        qatlam ma'lum vazifani bajaradi va yuqoridagi/pastdagi qatlam bilan
        aniq interfeys orqali ishlaydi.
      </P>

      <Figure caption="TCP/IP modelining to'rt qatlami va tegishli protokollar">
        <TcpIpStackDiagram />
      </Figure>

      <UL
        items={[
          <><b>TCP (Transmission Control Protocol)</b> — ma'lumotni ishonchli, tartibli va xatosiz uzatishni ta'minlaydi (aloqa o'rnatiladi).</>,
          <><b>UDP (User Datagram Protocol)</b> — tezkor, ammo kafolatsiz uzatish; video oqim va o'yinlarda qo'llaniladi.</>,
          <><b>IP (Internet Protocol)</b> — paketlarni manzillash va tarmoqlar orasida yo'naltirish uchun mas'ul.</>,
        ]}
      />

      <H2>DNS — domen nomlari tizimi</H2>
      <P>
        Odamlar uchun raqamli IP-manzillarni eslab qolish qiyin, shuning
        uchun <b>DNS (Domain Name System)</b> domen nomlarini (masalan,
        google.com) IP-manzillarga aylantiradi. Bu jarayon bir necha
        bosqichda amalga oshadi:
      </P>
      <Figure caption="DNS so'rovining bosqichlari">
        <DnsLookupDiagram />
      </Figure>
      <P>
        Foydalanuvchi brauzerga domen nomini kiritganda, so'rov avval DNS
        rezolverga, so'ngra kerak bo'lsa root, TLD (.uz, .com) va nihoyat
        aynan shu domen uchun javobgar authoritative serverga yuboriladi —
        natijada IP-manzil topilib, ulanish o'rnatiladi.
      </P>

    </>
  );
}
