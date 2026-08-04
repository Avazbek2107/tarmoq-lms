import { H2, P } from "../components/content/Elements";
import { Figure, TimelineDiagram, PacketSwitchingDiagram } from "../components/diagrams/Diagrams";

export default function Lesson10() {
  return (
    <>
      <H2>ARPANET — Internetning bobosi</H2>
      <P>
        1969-yilda AQSh Mudofaa vazirligining ARPA (Advanced Research
        Projects Agency) tashkiloti tomonidan <b>ARPANET</b> loyihasi
        boshlangan. Uning maqsadi — hatto tarmoqning bir qismi ishdan
        chiqsa ham ma'lumot uzatishni davom ettira oladigan, markazlashmagan
        tarmoq yaratish edi. Dastlab faqat to'rt universitet kompyuteri
        (UCLA, Stanford, UC Santa Barbara, Utah universiteti) bog'langan.
      </P>

      <Figure caption="Paketlar kommutatsiyasi — ARPANET g'oyasining yuragi">
        <PacketSwitchingDiagram />
      </Figure>

      <H2>NSFNET</H2>
      <P>
        1980-yillar o'rtasida AQSh Milliy Fanlar Fondi (NSF) <b>NSFNET</b>{" "}
        tarmog'ini yaratdi — u ilmiy-tadqiqot muassasalarini yuqori tezlikda
        bog'lab, ARPANET'ning o'rnini bosuvchi asosiy magistral tarmoqqa
        aylandi. NSFNET keyinchalik tijorat tashkilotlariga ham ochildi va
        zamonaviy Internetning tayanchiga aylandi.
      </P>

      <Figure caption="Internet tarixidagi asosiy bosqichlar">
        <TimelineDiagram
          items={[
            { year: "1969", text: "ARPANET ishga tushirildi — birinchi paket kommutatsiyali tarmoq." },
            { year: "1983", text: "TCP/IP protokoli ARPANET uchun rasmiy standart bo'ldi." },
            { year: "1985", text: "NSFNET tashkil etildi va ilmiy tarmoqlarni birlashtirdi." },
            { year: "1991", text: "Tim Berners-Lee World Wide Web (WWW) tizimini taqdim etdi." },
            { year: "1995", text: "NSFNET tijoratlashtirildi — zamonaviy Internet davri boshlandi." },
          ]}
        />
      </Figure>

    </>
  );
}
