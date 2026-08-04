import { H2, P, OL, Callout } from "../components/content/Elements";

export default function Practice11() {
  return (
    <>
      <H2>Tarmoq xavfsizligi asoslari — amaliy tekshiruvlar</H2>
      <P>
        Ushbu mashg'ulotda siz o'z kompyuteringiz va lokal tarmoq
        xavfsizligining asosiy holatini amaliy tekshirasiz.
      </P>
      <OL
        items={[
          <>Kompyuteringizdagi Windows Firewall (yoki Linux'da <code>ufw</code>) yoqilganligini tekshiring.</>,
          <>Operatsion tizim va antivirus dasturining yangilanganligini tekshiring.</>,
          <><code>netstat -an</code> buyrug'i orqali kompyuteringizda ochiq portlarni ko'rib chiqing.</>,
          <>Wi-Fi routeringiz qanday shifrlash (WPA2/WPA3) ishlatayotganini aniqlang.</>,
          <>Router administrator paneliga standart login/parol bilan kirish mumkinligini tekshirib, agar shunday bo'lsa, o'zgartirish zarurligini asoslang.</>,
        ]}
      />

      <Callout kind="tip" title="Topshiriq">
        O'z kompyuteringiz va uy/ofis Wi-Fi tarmog'ining xavfsizlik holati
        haqida qisqa hisobot tayyorlang: Firewall yoqilganmi, qanday
        shifrlash ishlatiladi, qanday zaifliklar (agar bor bo'lsa)
        aniqlandi.
      </Callout>
    </>
  );
}
