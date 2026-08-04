import { H2, P, CompareTable, Callout } from "../components/content/Elements";
import { Figure, NetworkScaleDiagram } from "../components/diagrams/Diagrams";

export default function Lesson04() {
  return (
    <>
      <H2>Tarmoqlarning masofa bo'yicha klassifikatsiyasi</H2>
      <P>
        Kompyuter tarmoqlari qamrab oladigan hududning kattaligiga qarab
        bir necha turga bo'linadi: <b>PAN</b>, <b>LAN</b>, <b>MAN</b> va{" "}
        <b>GAN/WAN</b>. Masofa ortishi bilan odatda tezlik pasayadi, lekin
        qamrov kengayadi.
      </P>

      <Figure caption="Tarmoq turlarining masofa bo'yicha ierarxiyasi">
        <NetworkScaleDiagram />
      </Figure>

      <H2>PAN — Personal Area Network</H2>
      <P>
        Shaxsiy tarmoq — bir kishining shaxsiy qurilmalarini (telefon,
        noutbuk, smart-soat, quloqchin) bir necha metr radiusda bog'laydi.
        Odatda Bluetooth, NFC yoki USB orqali amalga oshiriladi.
      </P>

      <H2>LAN — Local Area Network</H2>
      <P>
        Lokal tarmoq — bir bino, ofis, o'quv muassasasi yoki uy doirasidagi
        kompyuterlarni bog'laydi. Yuqori tezlik (odatda 100 Mbit/s dan
        10 Gbit/s gacha) va past kechikish bilan ajralib turadi. Ethernet
        kabel yoki Wi-Fi orqali tashkil etiladi.
      </P>

      <H2>MAN — Metropolitan Area Network</H2>
      <P>
        Metropoliten tarmoq — bir shahar yoki yirik hudud miqyosidagi bir
        necha LAN'larni bog'laydi. Odatda optik tolali kabellar yordamida
        internet-provayderlar va davlat muassasalari o'rtasida ishlatiladi.
      </P>

      <H2>GAN / WAN — Global (Wide) Area Network</H2>
      <P>
        Global tarmoq — davlatlar va qit'alar orasidagi masofani qamrab
        oladigan eng katta tarmoq turi. Internet — GAN tarmog'ining eng
        yirik va mashhur namunasidir. WAN tarmoqlar sun'iy yo'ldosh aloqasi,
        magistral optik kabellar va xalqaro aloqa kanallari orqali tashkil
        etiladi.
      </P>

      <CompareTable
        headers={["Tur", "Qamrov", "Tezlik", "Misol"]}
        rows={[
          ["PAN", "1–10 metr", "O'rtacha", "Bluetooth quloqchin"],
          ["LAN", "Bino / ofis", "Yuqori", "Universitet kompyuter xonasi"],
          ["MAN", "Shahar", "Yuqori/o'rta", "Shahar provayder tarmog'i"],
          ["GAN/WAN", "Davlatlar/qit'alar", "O'zgaruvchan", "Internet"],
        ]}
      />

      <Callout kind="info" title="Lokal tarmoqqa kirish">
        Amaliy mashg'ulotda kompyuterni mavjud LAN tarmog'iga ulash, tarmoq
        sozlamalarini (IP-manzil, subnet mask, gateway) qo'lda yoki avtomatik
        (DHCP) tarzda sozlash amaliyotini bajarasiz.
      </Callout>
    </>
  );
}
