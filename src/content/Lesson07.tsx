import { H2, P, CompareTable } from "../components/content/Elements";
import { Figure, TopologyDiagram } from "../components/diagrams/Diagrams";

export default function Lesson07() {
  return (
    <>
      <H2>Tarmoq topologiyasi tushunchasi</H2>
      <P>
        Topologiya — tarmoqdagi qurilmalarning bir-biriga jismoniy yoki
        mantiqiy jihatdan qanday joylashgan va ulanganligini tasvirlaydigan
        sxema. To'g'ri tanlangan topologiya tarmoqning ishonchliligi,
        tezligi va kengaytirilishiga bevosita ta'sir qiladi.
      </P>

      <H2>Shina (Bus) topologiyasi</H2>
      <Figure caption="Shina (Bus) topologiyasi — barcha qurilmalar bitta umumiy kabelga ulanadi">
        <TopologyDiagram type="bus" />
      </Figure>
      <P>
        Barcha kompyuterlar bitta umumiy "magistral" kabelga ketma-ket
        ulanadi. O'rnatish arzon, lekin kabel uzilsa butun tarmoq ishdan
        chiqadi va qurilma soni ko'paysa tezlik keskin pasayadi.
      </P>

      <H2>Yulduz (Star) topologiyasi</H2>
      <Figure caption="Yulduz topologiyasi — barcha qurilmalar markaziy switch/hub'ga ulanadi">
        <TopologyDiagram type="star" />
      </Figure>
      <P>
        Har bir qurilma markaziy switch yoki hub'ga alohida kabel bilan
        ulanadi. Bitta kabelning uzilishi faqat bitta qurilmaga ta'sir
        qiladi, boshqarish va nosozlikni topish oson. Zamonaviy LAN
        tarmoqlarida eng ko'p qo'llaniladigan topologiya.
      </P>

      <H2>Halqa (Ring) topologiyasi</H2>
      <Figure caption="Halqa topologiyasi — har bir qurilma ikki qo'shnisiga ulanadi">
        <TopologyDiagram type="ring" />
      </Figure>
      <P>
        Qurilmalar halqa shaklida ketma-ket ulanadi, ma'lumot bir
        yo'nalishda (yoki ikki yo'nalishda) uzatiladi. Har bir tugun signalni
        qabul qilib, keyingisiga uzatadi (token passing). Bir tugun ishdan
        chiqishi butun halqani buzishi mumkin, agar zaxira yo'l bo'lmasa.
      </P>

      <H2>Mesh (to'r) topologiyasi</H2>
      <Figure caption="Mesh topologiyasi — qurilmalar bir-biri bilan ko'plab yo'llar orqali bog'langan">
        <TopologyDiagram type="mesh" />
      </Figure>
      <P>
        Har bir qurilma bir necha (yoki barcha) boshqa qurilmalar bilan
        to'g'ridan-to'g'ri bog'langan. Bu eng yuqori ishonchlilikni beradi —
        bir yo'l uzilsa, ma'lumot muqobil yo'l orqali boradi. Lekin
        kabel/ulanish soni ko'p va narxi yuqori bo'ladi. Internet magistral
        tarmoqlari va muhim serverlar mesh tamoyili asosida qurilishi keng
        tarqalgan.
      </P>

      <CompareTable
        headers={["Topologiya", "Ishonchlilik", "Narxi", "Kengaytirish"]}
        rows={[
          ["Shina", "Past", "Arzon", "Qiyin"],
          ["Yulduz", "O'rta-yuqori", "O'rtacha", "Oson"],
          ["Halqa", "O'rta", "O'rtacha", "O'rtacha"],
          ["Mesh", "Juda yuqori", "Qimmat", "Murakkab"],
        ]}
      />
    </>
  );
}
