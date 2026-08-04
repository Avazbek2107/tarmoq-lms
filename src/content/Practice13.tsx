import { H2, P, UL, Callout } from "../components/content/Elements";

export default function Practice13() {
  return (
    <>
      <H2>Tarmoqda ma'lumotlar xavfsizligining uskunaviy ta'minoti</H2>
      <P>
        Multimedia trafigini himoyalash uchun apparat darajasidagi
        vositalar ham qo'llaniladi: shifrlovchi routerlar, VPN
        konsentratorlari va maxsus xavfsizlik chiplari. Ular ma'lumot
        yo'lda ushlab qolinmasligi (man-in-the-middle) va ruxsatsiz
        kirishning oldini oladi.
      </P>
      <UL
        items={[
          <><b>VPN router/konsentrator</b> — masofadagi filiallarni shifrlangan tunnel orqali bog'laydi.</>,
          <><b>Hardware Firewall</b> — dasturiy firewall'ga nisbatan tezroq va katta trafikni qayta ishlay oladi.</>,
          <><b>Xavfsizlik chiplari (TPM)</b> — qurilma darajasida shifrlash kalitlarini himoya qiladi.</>,
        ]}
      />
      <P>
        Amaliy qismda mavjud router/MikroTik qurilmasida oddiy VPN
        (masalan, PPTP yoki WireGuard) profilini ko'rib chiqish yoki
        uning sozlamalar panelida xavfsizlik bilan bog'liq bo'limlarni
        (Firewall, VPN) topib chiqish tavsiya etiladi.
      </P>

      <Callout kind="tip" title="Topshiriq">
        MikroTik (yoki boshqa router) boshqaruv panelida Firewall va VPN
        bo'limlarini toping, ularda nechta qoida/profil mavjudligini
        yozib qo'ying.
      </Callout>
    </>
  );
}
