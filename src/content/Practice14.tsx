import { H2, P, UL, Callout } from "../components/content/Elements";

export default function Practice14() {
  return (
    <>
      <H2>Tarmoqda ma'lumotlar xavfsizligining dasturiy ta'minoti</H2>
      <P>
        Apparat vositalaridan tashqari, dasturiy ta'minot ham tarmoq
        xavfsizligida muhim rol o'ynaydi. Amaliy mashg'ulotda quyidagi
        dasturiy vositalar bilan tanishasiz:
      </P>
      <UL
        items={[
          <><b>Antivirus dasturlari</b> — Windows Defender, Kaspersky — zararli dasturlarni aniqlaydi.</>,
          <><b>Dasturiy Firewall</b> — operatsion tizim darajasida trafikni filtrlaydi.</>,
          <><b>IDS/IPS dasturlari</b> — tarmoqdagi shubhali harakatlarni aniqlab, bloklaydi.</>,
          <><b>VPN-klientlar</b> — shifrlangan tunnel orqali xavfsiz ulanish yaratadi.</>,
        ]}
      />

      <Callout kind="warning" title="Amaliy tavsiya">
        Uy yoki ofis Wi-Fi routerida standart parolni albatta o'zgartiring,
        WPA2/WPA3 shifrlashni yoqing va mehmonlar uchun alohida (Guest)
        tarmoq tashkil qiling — bu asosiy tarmoqni himoyalashning eng oson
        va samarali usuli.
      </Callout>

      <Callout kind="tip" title="Topshiriq">
        Kompyuteringizdagi Windows Defender (yoki boshqa antivirus)
        sozlamalarini oching, real vaqt himoyasi yoqilganini tekshiring
        va bir marta to'liq skanerlashni ishga tushiring.
      </Callout>
    </>
  );
}
