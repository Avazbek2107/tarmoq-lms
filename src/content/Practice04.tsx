import { H2, P, OL, Callout } from "../components/content/Elements";

export default function Practice04() {
  return (
    <>
      <H2>Lokal tarmoqqa kirish</H2>
      <P>
        Bu amaliy mashg'ulotda siz kompyuterni mavjud LAN tarmog'iga ulash
        va tarmoq sozlamalarini tekshirish/o'rnatish ko'nikmasini
        egallaysiz.
      </P>

      <OL
        items={[
          <>Kompyuterni Ethernet kabeli orqali switch/routerga ulang yoki mavjud Wi-Fi tarmog'iga ulaning.</>,
          <>Tarmoq sozlamalarini oching va IP-manzil qanday olinganini tekshiring — avtomatik (DHCP) yoki qo'lda (Static).</>,
          <>Agar DHCP yoqilgan bo'lsa, <code>ipconfig</code>/<code>ifconfig</code> orqali olingan IP-manzil, subnet mask va gateway'ni yozib oling.</>,
          <>Statik IP-manzil sozlashni sinab ko'ring: tarmoq adapteri sozlamalarida qo'lda IP-manzil, mask va gateway kiriting.</>,
          <>Boshqa kompyuterga <code>ping</code> yuborib, lokal tarmoq ichida ulanish borligini tasdiqlang.</>,
        ]}
      />

      <Callout kind="tip" title="Topshiriq">
        Kompyuteringizni avval DHCP orqali, so'ngra statik IP-manzil bilan
        ulab, ikkala holatda ham olingan tarmoq sozlamalarini (IP, mask,
        gateway) taqqoslab jadval tuzing.
      </Callout>
    </>
  );
}
