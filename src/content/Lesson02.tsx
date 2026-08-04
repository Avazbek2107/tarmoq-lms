import { H2, P, Callout, CompareTable } from "../components/content/Elements";
import { Figure, DeviceCompareDiagram } from "../components/diagrams/Diagrams";

export default function Lesson02() {
  return (
    <>
      <H2>Kompyuter kommunikatsiyalari</H2>
      <P>
        Kompyuter kommunikatsiyasi — bu kompyuterlar va boshqa tarmoq
        qurilmalari orasida signal yoki ma'lumot almashinuvi jarayoni.
        Ushbu jarayonni tashkil etish uchun turli kommutatsiya
        (ulash-yo'naltirish) qurilmalaridan foydalaniladi. Eng ko'p
        tarqalganlari — <b>Hub</b>, <b>Switch</b> va <b>MikroTik router</b>.
      </P>

      <Figure caption="Hub, Switch va Router (MikroTik) ishlash tamoyillarining farqi">
        <DeviceCompareDiagram />
      </Figure>

      <H2>Hub (kontsentrator)</H2>
      <P>
        Hub — eng sodda kommutatsiya qurilmasi. U bir portga kelgan signalni
        tahlil qilmasdan qolgan barcha portlarga qayta uzatadi (broadcast).
        Bu esa tarmoqda to'qnashuvlar (collision) sonini oshiradi va
        tezlikni pasaytiradi. Hozirgi kunda Hub deyarli ishlatilmaydi, uning
        o'rnini Switch egalladi.
      </P>

      <H2>Switch (kommutator)</H2>
      <P>
        Switch — har bir portga ulangan qurilmaning MAC-manzilini
        eslab qoladigan "aqlli" jihoz. Ma'lumot kelganda, Switch uni faqat
        kerakli manzil ulangan portga yo'naltiradi, shu bilan tarmoq
        tezligini va xavfsizligini oshiradi. Zamonaviy LAN tarmoqlarining
        asosiy tayanch nuqtasi hisoblanadi.
      </P>

      <H2>MikroTik va marshrutizatorlar</H2>
      <P>
        MikroTik — RouterOS operatsion tizimi asosida ishlaydigan mashhur
        router va tarmoq uskunalari ishlab chiqaruvchisi. Router (marshrutizator)
        turli tarmoqlarni (masalan, lokal tarmoqni Internet bilan) bog'laydi,
        IP-manzillar asosida ma'lumot paketlari uchun eng maqbul yo'lni
        tanlaydi, shuningdek NAT, Firewall, VPN va tezlikni cheklash kabi
        funksiyalarni bajaradi.
      </P>

      <CompareTable
        headers={["Qurilma", "Ishlash darajasi (OSI)", "Manzillashtirish", "Vazifasi"]}
        rows={[
          ["Hub", "Fizik qatlam", "Yo'q", "Signalni barcha portlarga takrorlash"],
          ["Switch", "Kanal qatlami", "MAC-manzil", "Freymni faqat kerakli portga yuborish"],
          ["Router / MikroTik", "Tarmoq qatlami", "IP-manzil", "Tarmoqlar orasida yo'l tanlash"],
        ]}
      />

      <Callout kind="tip" title="Amaliy maslahat">
        Kichik ofis tarmog'ini loyihalashda kompyuterlarni har doim Switch'ga
        ulang, Internetga chiqish uchun esa MikroTik yoki shunga o'xshash
        routerdan foydalaning — bu tarmoqni tezroq va xavfsizroq qiladi.
      </Callout>
    </>
  );
}
