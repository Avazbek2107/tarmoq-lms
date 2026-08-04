import { H2, P, UL, KeyTerms } from "../components/content/Elements";

export default function Lesson11() {
  return (
    <>
      <H2>Internet tarmog'ining tashkil etuvchilari</H2>
      <P>
        Global Internet quyidagi asosiy tarkibiy qismlardan iborat: oxirgi
        foydalanuvchi qurilmalari, kirish provayderlari (ISP), magistral
        (backbone) tarmoqlar, marshrutizatorlar, Internet-almashinuv
        nuqtalari (IXP) va serverlar. Barchasi TCP/IP protokollari asosida
        birgalikda ishlaydi.
      </P>

      <UL
        items={[
          <><b>Oxirgi qurilmalar (end systems)</b> — kompyuter, telefon, IoT qurilmalar.</>,
          <><b>ISP (Internet Service Provider)</b> — foydalanuvchini global tarmoqqa ulaydigan provayder.</>,
          <><b>Magistral tarmoqlar</b> — qit'alararo yuqori tezlikdagi optik kanallar.</>,
          <><b>Marshrutizatorlar</b> — paketlarni tarmoqlar orasida yo'naltiradigan qurilmalar.</>,
          <><b>Serverlar</b> — veb-sahifa, elektron pochta va boshqa xizmatlarni taqdim etadigan kompyuterlar.</>,
        ]}
      />

      <KeyTerms
        terms={[
          { term: "ISP", def: "Internetga ulanish xizmatini ko'rsatuvchi provayder tashkilot." },
          { term: "IXP", def: "Turli provayderlar tarmog'ini bir-biriga bevosita ulaydigan almashinuv nuqtasi." },
          { term: "Backbone", def: "Katta hajmdagi trafikni tashuvchi yuqori tezlikdagi magistral tarmoq." },
          { term: "End system", def: "Tarmoqning oxirgi nuqtasidagi foydalanuvchi qurilmasi (kompyuter, telefon)." },
        ]}
      />
    </>
  );
}
