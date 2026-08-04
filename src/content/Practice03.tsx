import { H2, P, Callout } from "../components/content/Elements";
import { Figure, LayerStackDiagram } from "../components/diagrams/Diagrams";

export default function Practice03() {
  return (
    <>
      <H2>Kompyuter tarmoqlarining tuzilishi</H2>
      <P>
        Tarmoq tuzilishi shartli ravishda to'rt jihatdan tahlil qilinadi:
        qurilmalarning jismoniy joylashuvi (fizik tuzilma), manzillash va
        marshrutlash sxemasi (mantiqiy tuzilma), uzatiladigan ma'lumot
        formati (axborot tuzilmasi) va ma'lumot oqimini tartibga soluvchi
        qoidalar (almashinuv boshqaruvi).
      </P>

      <Figure caption="Tarmoq tuzilishining to'rt qatlami — amaliyotda tahlil qilinadi">
        <LayerStackDiagram />
      </Figure>

      <P>
        Amaliy mashg'ulotda siz mavjud (masalan, kompyuter xonasidagi) lokal
        tarmoqni tanlab, uning tuzilishini yuqoridagi to'rt jihat bo'yicha
        tavsiflaysiz: qanday kabellar va uskunalar ishlatilgan (fizik),
        qurilmalarga qanday IP-manzillar berilgan (mantiqiy), qanday fayl
        yoki xizmatlar ulashiladi (axborot) va tarmoqqa kirish qanday
        tartibga solingan (boshqaruv).
      </P>

      <Callout kind="tip" title="Topshiriq">
        Tanlangan lokal tarmoqning sxematik chizmasini (qog'ozda yoki
        dasturda) chizib, unda kamida 5 ta qurilma, ularning IP-manzillari
        va ulanish turini (kabel/Wi-Fi) ko'rsating.
      </Callout>
    </>
  );
}
