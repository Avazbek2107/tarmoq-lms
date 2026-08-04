import { H2, P, UL, Callout } from "../components/content/Elements";
import { Figure, FirewallDiagram } from "../components/diagrams/Diagrams";

export default function Lesson15() {
  return (
    <>
      <H2>Operatsion tizim darajasidagi xavfsizlik</H2>
      <P>
        Tarmoq xavfsizligining birinchi qatlami — operatsion tizimning
        o'zi. Foydalanuvchi huquqlarini to'g'ri boshqarish (administrator
        va oddiy foydalanuvchi ajratilishi), tizimni muntazam yangilab
        turish va keraksiz xizmatlarni o'chirib qo'yish — barchasi
        hujum yuzasini (attack surface) kamaytiradi.
      </P>

      <H2>Firewall (himoya devori)</H2>
      <P>
        <b>Firewall</b> — ichki tarmoq va tashqi tarmoq (Internet) orasida
        joylashib, o'tayotgan trafikni oldindan belgilangan qoidalar
        asosida tekshiradigan va ruxsat etilgan yoki taqiqlangan
        (blocked) deb belgilaydigan tizim.
      </P>

      <Figure caption="Firewall ichki tarmoq va Internet orasida trafikni filtrlaydi">
        <FirewallDiagram />
      </Figure>

      <UL
        items={[
          "Ma'lum portlarni yopish yoki ochish (masalan, faqat 80/443-portlarga ruxsat)",
          "Shubhali IP-manzillardan kelayotgan trafikni bloklash (Blocks)",
          "Ichkaridan tashqariga ma'lumot chiqishini nazorat qilish",
          "Hujum urinishlari haqida jurnal (log) yuritish va ogohlantirish",
        ]}
      />

      <Callout kind="tip" title="Kurs yakuni">
        Ushbu mavzu bilan "Kompyuter tarmoqlari" fani bo'yicha nazariy
        bilim olish jarayoni yakunlanadi. Endi siz tarmoq texnologiyalari
        nazariyasi, TCP/IP protokoli, Intranet, Internet, veb va
        firewallar haqida bilim, ko'nikma va amaliy tatbiq etish
        malakasiga egasiz.
      </Callout>
    </>
  );
}
