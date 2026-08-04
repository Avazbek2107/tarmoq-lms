import { H2, P, UL, OL, Callout } from "../components/content/Elements";

export default function Practice12() {
  return (
    <>
      <H2>Ma'lumotlarni muhofaza qilish usullari</H2>
      <P>
        Tarmoq orqali uzatilayotgan ma'lumotni himoyalash uchun shifrlash,
        raqamli imzo va nazorat kodlari qo'llaniladi. Amaliy mashg'ulotda
        ushbu usullarning veb-brauzerda qanday ko'rinishini kuzatasiz.
      </P>
      <UL
        items={[
          "Brauzer manzil satridagi qulf belgisi va \"https://\" — sayt bilan shifrlangan aloqa mavjudligini bildiradi",
          "Sertifikat ma'lumotlari — sayt haqiqiyligini tasdiqlovchi raqamli sertifikat",
          "Parolni saqlash — brauzer parol menejeri orqali shifrlangan holda saqlanadi",
        ]}
      />
      <OL
        items={[
          <>Bir nechta veb-saytni ochib, manzil satrida qulf belgisi bor-yo'qligini tekshiring.</>,
          <>Qulf belgisini bosib, sertifikat ma'lumotlarini (kim tomonidan berilgan, amal qilish muddati) ko'ring.</>,
          <>"https://" o'rniga "http://" bilan boshlanadigan (agar topilsa) saytni solishtirib, brauzer qanday ogohlantirish berishini kuzating.</>,
        ]}
      />

      <Callout kind="tip" title="Topshiriq">
        Uchta turli veb-saytning xavfsizlik sertifikatini tekshirib,
        ularni bergan tashkilot va amal qilish muddatini jadvalga
        kiriting.
      </Callout>
    </>
  );
}
