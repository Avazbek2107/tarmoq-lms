import { H2, P, UL, OL, Callout } from "../components/content/Elements";

export default function Practice06() {
  return (
    <>
      <H2>Intranet tarmog'i</H2>
      <P>
        Bu mashg'ulotda siz tashkilot ichki (Intranet) tarmog'idan
        foydalanish va undagi resurslarga kirish amaliyotini bajarasiz.
      </P>
      <UL
        items={[
          "Ichki tarmoqdagi umumiy fayl-serverga ulanish",
          "Ichki veb-portal (agar mavjud bo'lsa) orqali xabar/hisobotlarni ko'rish",
          "Ichki tarmoq orqali boshqa kompyuterlarga ping yuborish",
        ]}
      />

      <H2>Internet xizmatlaridan foydalanish</H2>
      <OL
        items={[
          <>Brauzer orqali bir nechta veb-sahifani oching va sahifa manzili (URL) tarkibini tahlil qiling (protokol, domen, yo'l).</>,
          <>Elektron pochta xizmatiga kirib, xat yozish va biriktirma (attachment) yuborishni sinab ko'ring.</>,
          <>FTP yoki fayl-almashish xizmati orqali faylni yuklab olish (download) jarayonini bajaring.</>,
          <>Brauzerning "Developer Tools" &rarr; "Network" bo'limi orqali sahifa yuklanayotganda qancha so'rov yuborilishini kuzating.</>,
        ]}
      />

      <Callout kind="tip" title="Topshiriq">
        Uchta turli veb-sayt manzilini (URL) yozib, ularning tarkibiy
        qismlarini (protokol://domen/yo'l?parametr) ajratib ko'rsating.
      </Callout>
    </>
  );
}
