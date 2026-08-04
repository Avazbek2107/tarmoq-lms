import { H2, P, UL, OL, Callout } from "../components/content/Elements";

export default function Practice15() {
  return (
    <>
      <H2>Kerio Control dasturi bilan ishlash</H2>
      <P>
        <b>Kerio Control</b> — kichik va o'rta biznes uchun mo'ljallangan,
        Firewall, VPN, trafikni nazorat qilish va tarmoq monitoringi
        funksiyalarini bir dasturda birlashtirgan tarmoq xavfsizligi
        yechimi. Amaliy mashg'ulotda quyidagi imkoniyatlar bilan
        tanishasiz:
      </P>
      <UL
        items={[
          "Foydalanuvchilar va guruhlar uchun trafik qoidalarini sozlash",
          "Ma'lum veb-saytlar yoki toifalarga kirishni cheklash",
          "Tarmoq tezligi va kanal taqsimotini (bandwidth limit) boshqarish",
          "Xavfsizlik jurnali (log) va real vaqt monitoringini kuzatish",
        ]}
      />

      <OL
        items={[
          <>Kerio Control boshqaruv panelini (web admin) brauzer orqali oching.</>,
          <>"Traffic Rules" bo'limida yangi qoida yaratib, ma'lum bir toifadagi saytlarga (masalan, ijtimoiy tarmoqlar) kirishni cheklang.</>,
          <>"Bandwidth Management" bo'limida foydalanuvchi uchun yuklab olish tezligini cheklab qo'ying.</>,
          <>"Status" &rarr; "Active Hosts" bo'limida qaysi qurilmalar tarmoqqa ulanganini va qancha trafik sarflayotganini kuzating.</>,
        ]}
      />

      <Callout kind="tip" title="Topshiriq">
        Kerio Control (yoki shunga o'xshash Firewall dasturi) sinov
        muhitida bitta trafik cheklash qoidasini yaratib, uning ishlashini
        ekran suratlari bilan hisobot qiling.
      </Callout>
    </>
  );
}
