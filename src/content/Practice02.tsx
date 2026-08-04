import { H2, P, OL, UL, Callout } from "../components/content/Elements";

export default function Practice02() {
  return (
    <>
      <H2>Kompyuter tarmoqlarining dasturiy vositalari</H2>
      <P>
        Uskunalar (hardware) bilan bir qatorda tarmoq ishlashi uchun dasturiy
        ta'minot ham zarur. Bu mashg'ulotda tarmoqni sozlash va kuzatish
        uchun ishlatiladigan asosiy dasturlar bilan amaliy tanishasiz.
      </P>

      <UL
        items={[
          <><b>Tarmoq operatsion tizimlari</b> — Windows Server, Ubuntu Server, RouterOS (MikroTik uchun).</>,
          <><b>Konfiguratsiya vositalari</b> — Winbox (MikroTik), veb-interfeys orqali router sozlash paneli.</>,
          <><b>Monitoring dasturlari</b> — Wireshark (trafikni tahlil qilish), PingPlotter, PRTG.</>,
          <><b>Buyruqlar qatori vositalari</b> — <code>ping</code>, <code>ipconfig</code>/<code>ifconfig</code>, <code>tracert</code>/<code>traceroute</code>.</>,
        ]}
      />

      <OL
        items={[
          <>Kompyuterda buyruqlar qatorini (CMD/Terminal) oching.</>,
          <><code>ipconfig /all</code> (Windows) yoki <code>ifconfig</code> (Linux) buyrug'ini bajarib, kompyuterning IP-manzili, subnet mask va gateway'ini aniqlang.</>,
          <><code>ping 8.8.8.8</code> buyrug'i yordamida Internetga ulanish mavjudligini tekshiring va javob vaqtini (ms) yozib oling.</>,
          <><code>tracert google.com</code> (yoki <code>traceroute</code>) buyrug'i orqali paketning qaysi marshrutizatorlar orqali o'tayotganini kuzating.</>,
        ]}
      />

      <Callout kind="tip" title="Topshiriq">
        <code>ping</code> va <code>tracert</code> buyruqlarining natijalarini
        skrinshot qilib, har bir ustunning (masalan, TTL, vaqt) nimani
        bildirishini qisqacha izohlab hisobot tayyorlang.
      </Callout>
    </>
  );
}
