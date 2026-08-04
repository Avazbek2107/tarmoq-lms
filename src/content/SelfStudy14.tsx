import { H2, P, UL } from "../components/content/Elements";
import { Figure, WifiBandsDiagram } from "../components/diagrams/Diagrams";

export default function SelfStudy14() {
  return (
    <>
      <H2>Wi-Fi chastota diapazonlari</H2>
      <Figure caption="2.4 GHz, 5 GHz va Wi-Fi 6 taqqoslanishi">
        <WifiBandsDiagram />
      </Figure>
      <UL
        items={[
          <><b>2.4 GHz</b> — devor va to'siqlardan yaxshi o'tadi, qamrov masofasi katta, lekin tezlik past va kanallar ko'pincha band (mikrotolqinli pech, Bluetooth bilan xalaqit).</>,
          <><b>5 GHz</b> — ancha yuqori tezlik beradi, lekin masofa va to'siqlardan o'tish qobiliyati past.</>,
          <><b>Wi-Fi 6 (802.11ax)</b> — ko'p qurilma bir vaqtda ulanganda ham yuqori samaradorlikni saqlaydi, energiya tejamkor va xavfsizroq.</>,
        ]}
      />

      <H2>IEEE 802.11i standarti</H2>
      <P>
        <b>IEEE 802.11i</b> — Wi-Fi tarmoqlari xavfsizligini ta'minlaydigan
        standart bo'lib, WPA2 va undan keyingi shifrlash sxemalarining
        asosini tashkil etadi. U kuchli shifrlash algoritmi (AES) va
        ishonchli autentifikatsiya mexanizmlarini joriy qildi, natijada
        Wi-Fi tarmoqlarini eski WEP standartiga nisbatan ancha xavfsiz
        qildi.
      </P>
      <P>
        Zamonaviy routerlarning aksariyati endi WPA3 standartini ham
        qo'llab-quvvatlaydi — u WPA2'ga nisbatan yanada kuchliroq
        shifrlash va parolga qarshi qo'pol kuch (brute-force) hujumlariga
        chidamlilikni ta'minlaydi.
      </P>
    </>
  );
}
