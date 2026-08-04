import { H2, P, UL, Callout } from "../components/content/Elements";
import { Figure, TimelineDiagram } from "../components/diagrams/Diagrams";

export default function SelfStudy01() {
  return (
    <>
      <H2>Kompyuter tarmoqlarining tarixi</H2>
      <P>
        Kompyuter tarmoqlari g'oyasi 1960-yillarda, kompyuterlar hali juda
        qimmat va kam sonli bo'lgan davrda paydo bo'ldi. Dastlab maqsad —
        bir necha foydalanuvchini bitta katta kompyuterga (mainframe)
        ulab, uning resurslaridan birgalikda foydalanish edi. Vaqt o'tishi
        bilan kompyuterlarning o'zini bir-biriga ulash g'oyasi rivojlandi
        va bu 1969-yilda ARPANET loyihasining boshlanishiga olib keldi
        (10-mavzuda batafsil o'rganiladi).
      </P>
      <Figure caption="Kompyuter tarmoqlari tarixidagi asosiy bosqichlar">
        <TimelineDiagram
          items={[
            { year: "1960-yillar", text: "Mainframe kompyuterlarga bir nechta terminal ulash amaliyoti boshlandi." },
            { year: "1969", text: "ARPANET — birinchi paket-kommutatsiyali tarmoq ishga tushirildi." },
            { year: "1970–80-yillar", text: "Ethernet texnologiyasi ixtiro qilindi, LAN tarmoqlari keng tarqaldi." },
            { year: "1990-yillar", text: "World Wide Web va tijorat Interneti paydo bo'ldi." },
            { year: "2000-yillar", text: "Wi-Fi va mobil tarmoqlar ommaviylashdi." },
          ]}
        />
      </Figure>

      <H2>Nomlanishiga sabablar va xususiyatlarining farqlari</H2>
      <P>
        Turli tarmoq turlari (LAN, MAN, WAN va h.k.) o'z nomini asosan
        qamrab oladigan hudud kattaligidan olgan: "Local" — mahalliy,
        "Metropolitan" — shahar miqyosida, "Wide"/"Global" — keng/global
        miqyosda. Bundan tashqari, tarmoqlar tashkil etilish maqsadiga
        ko'ra ham nomlanadi — masalan, "Intranet" (ichki — "intra") va
        "Internet" (tarmoqlar orasi — "inter") so'zlaridagi lotincha
        old qo'shimchalar aynan shu farqni bildiradi.
      </P>
      <UL
        items={[
          "Intra- = ichida, ichki (Intranet — tashkilot ichidagi tarmoq)",
          "Inter- = orasida, o'rtasida (Internet — tarmoqlar orasidagi tarmoq)",
          "Local = mahalliy, tor hududga tegishli",
          "Wide/Global = keng, butun dunyoni qamrab oladigan",
        ]}
      />

      <Callout kind="info" title="Fikrlash uchun savol">
        Nega aynan "Internet" so'zi "tarmoqlar tarmog'i" degan ma'noni
        anglatadi, deb o'ylaysiz? Bu nomlanish uning texnik tuzilishiga
        (ko'plab mustaqil tarmoqlarning birlashuvi) qanday mos keladi?
      </Callout>
    </>
  );
}
