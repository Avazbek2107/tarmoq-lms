import { H2, P, UL } from "../components/content/Elements";

export default function SelfStudy06() {
  return (
    <>
      <H2>Internet tizimi va uning kelib chiqish tarixi</H2>
      <P>
        Internetning ildizlari 1969-yilgi ARPANET loyihasiga borib
        taqaladi (10-mavzuda batafsil o'rganiladi). Biroq "Internet" so'zi
        va uning zamonaviy tushunchasi 1970–80-yillarda turli tarmoqlarni
        bir-biriga ulash g'oyasi rivojlanishi bilan shakllandi.
      </P>

      <H2>Internet tizimini yaratishda ish olib borgan olimlar</H2>
      <UL
        items={[
          <><b>Vinton Cerf va Robert Kahn</b> — TCP/IP protokolini ishlab chiqdilar (1974), shu sababli ular ko'pincha "Internetning otalari" deb ataladi.</>,
          <><b>Tim Berners-Lee</b> — 1989–1991-yillarda World Wide Web (WWW), HTML va HTTP protokolini yaratdi, bu Internetni oddiy foydalanuvchilar uchun qulay qildi.</>,
          <><b>Leonard Kleinrock</b> — paketlar kommutatsiyasi nazariyasini ishlab chiqishga katta hissa qo'shdi.</>,
          <><b>Paul Mockapetris</b> — 1983-yilda DNS (Domain Name System) tizimini yaratdi.</>,
        ]}
      />
      <P>
        Ushbu olimlarning ishlari natijasida bugungi kunda biz
        foydalanayotgan global Internet tarmog'i shakllandi — ularning
        g'oyalari hozirgi TCP/IP, HTTP va DNS kabi asosiy texnologiyalarning
        poydevorini tashkil etadi.
      </P>
    </>
  );
}
