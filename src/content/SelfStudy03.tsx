import { H2, P, UL, Callout } from "../components/content/Elements";

export default function SelfStudy03() {
  return (
    <>
      <H2>Mintaqaviy tarmoq bayonnomalari</H2>
      <P>
        Turli mintaqalar va tashkilotlarda tarmoq ishini tartibga soluvchi
        o'ziga xos standartlar va bayonnomalar (protokollar) mavjud.
        Ular tarmoq uskunalari turli ishlab chiqaruvchilardan bo'lsa ham,
        bir-biri bilan mos ishlashini ta'minlaydi.
      </P>
      <UL
        items={[
          <><b>IEEE (Institute of Electrical and Electronics Engineers)</b> — Ethernet (802.3) va Wi-Fi (802.11) standartlarini ishlab chiqadi.</>,
          <><b>ITU-T</b> — xalqaro telekommunikatsiya sohasidagi standartlarni belgilaydi.</>,
          <><b>IETF (Internet Engineering Task Force)</b> — Internet protokollari (TCP/IP, HTTP) bo'yicha hujjatlarni (RFC) ishlab chiqadi.</>,
          <><b>ISO/OSI</b> — tarmoq tizimlarini yetti qatlamli mantiqiy modelga ajratadi.</>,
        ]}
      />
      <P>
        O'zbekistonda tarmoq va telekommunikatsiya sohasidagi faoliyat
        "Axborot texnologiyalari va kommunikatsiyalarini rivojlantirish
        vazirligi" tomonidan belgilangan me'yoriy hujjatlar va xalqaro
        standartlarga muvofiqlashtirilgan tartib-qoidalar asosida olib
        boriladi.
      </P>

      <Callout kind="info" title="Mustaqil ish uchun topshiriq">
        IEEE, ITU-T va IETF tashkilotlarining har biri qaysi sohaga
        ixtisoslashganini va bittadan mashhur standart namunasini
        (masalan, IEEE 802.3 — Ethernet) topib, qisqacha izoh bilan
        jadval tuzing.
      </Callout>
    </>
  );
}
