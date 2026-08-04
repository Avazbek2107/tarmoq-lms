import { H2, P, UL, Callout } from "../components/content/Elements";

export default function Practice07() {
  return (
    <>
      <H2>Internet dasturiy ta'minoti</H2>
      <P>
        Internet resurslaridan foydalanish va ularni yaratish uchun turli
        dasturiy vositalar qo'llaniladi. Amaliy mashg'ulotda ushbu
        dasturlarning asosiy toifalari bilan tanishasiz va ulardan
        foydalanish ko'nikmasini shakllantirasiz.
      </P>
      <UL
        items={[
          <><b>Brauzerlar</b> — Chrome, Firefox, Edge — veb-sahifalarni ko'rish uchun.</>,
          <><b>FTP-klientlar</b> — FileZilla — serverga fayl yuklash/olish uchun.</>,
          <><b>Veb-server dasturlari</b> — Apache, Nginx — sayt joylashtirish uchun.</>,
          <><b>Kod muharrirlari</b> — VS Code — veb-sahifa yaratish uchun.</>,
        ]}
      />
      <P>
        Amaliyot davomida oddiy HTML sahifa yaratib, uni mahalliy
        veb-server (masalan, Live Server kengaytmasi) orqali brauzerda
        ochib ko'rasiz — bu Internet dasturiy ta'minotining eng sodda
        ishlash tamoyilini his qilish imkonini beradi.
      </P>

      <Callout kind="tip" title="Topshiriq">
        Sarlavha, matn va rasmdan iborat oddiy HTML sahifa yarating va uni
        brauzerda ochib, ekran suratini (screenshot) taqdim eting.
      </Callout>
    </>
  );
}
