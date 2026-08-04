import { H2, P, UL } from "../components/content/Elements";
import { Figure, LayerStackDiagram } from "../components/diagrams/Diagrams";

export default function Lesson05() {
  return (
    <>
      <H2>Tarmoq tuzilishining to'rt jihati</H2>
      <P>
        Kompyuter tarmog'ini to'liq tushunish uchun uni to'rt asosiy nuqtai
        nazardan tahlil qilish qulay: fizik, mantiqiy, axborot va
        almashinuv boshqaruvi tuzilmalari. Har bir daraja o'zidan pastki
        darajaga tayanadi.
      </P>

      <Figure caption="Tarmoq tuzilishining to'rt qatlami">
        <LayerStackDiagram />
      </Figure>

      <UL
        items={[
          <><b>Fizik tuzilma</b> — qurilmalarning haqiqiy joylashuvi, kabellar, konnektorlar va signal uzatish muhiti (havo, optik tola, mis simlar).</>,
          <><b>Mantiqiy tuzilma</b> — ma'lumot qaysi yo'nalishda va qanday manzillash sxemasi (IP) asosida harakatlanishini belgilaydi.</>,
          <><b>Axborot tuzilmasi</b> — uzatiladigan ma'lumotning formati: paket, freym, sarlavha (header) va foydali yuk (payload) tarkibi.</>,
          <><b>Almashinuv boshqaruvi</b> — sessiyani boshlash/tugatish, navbatga qo'yish, xatolarni aniqlash va qayta uzatish qoidalari.</>,
        ]}
      />

    </>
  );
}
