import { H2, P, UL, OL, Callout } from "../components/content/Elements";
import { Figure, IpAddressDiagram } from "../components/diagrams/Diagrams";

export default function Practice05() {
  return (
    <>
      <H2>IP-manzillar</H2>
      <P>
        Tarmoqdagi har bir qurilmani bir-biridan ajratish uchun unga
        noyob <b>IP-manzil</b> beriladi. IPv4 manzili to'rt oktetdan
        (0–255) iborat bo'lib, bir qismi tarmoqni, qolgani esa shu tarmoq
        ichidagi qurilmani (xostni) bildiradi.
      </P>

      <Figure caption="IPv4 manzilining tarkibi: 192.168.1.25">
        <IpAddressDiagram />
      </Figure>

      <H2>Tarmoq xizmatlari</H2>
      <P>
        Tarmoq orqali quyidagi asosiy xizmatlar taqdim etiladi: fayl
        almashish (File Sharing), bosma xizmatlari (Print Sharing),
        elektron pochta, veb-sahifalarga kirish va video/audio aloqa.
      </P>
      <UL
        items={[
          "Fayl va papkalarni tarmoqda ulashish (Network Sharing)",
          "Umumiy printerni tarmoq orqali ishlatish",
          "Ichki fayl-server yoki NAS orqali ma'lumot saqlash",
        ]}
      />

      <OL
        items={[
          <>O'z kompyuteringizning IP-manzilini <code>ipconfig</code>/<code>ifconfig</code> orqali aniqlang.</>,
          <>Bir papkani tarmoqda ulashga (Share) qo'yib, boshqa kompyuterdan <code>\\IP-manzil\papka_nomi</code> orqali kirishga urinib ko'ring.</>,
          <>Agar mumkin bo'lsa, tarmoqdagi umumiy printerni topib, unga hujjat yuborishni sinab ko'ring.</>,
        ]}
      />

      <Callout kind="tip" title="Topshiriq">
        Kompyuteringizda bir papkani tarmoqda ulashga qo'yib, sinfdosh
        kompyuteridan unga kirish mumkinligini tekshirib, natijani
        skrinshot bilan hisobot qiling.
      </Callout>
    </>
  );
}
