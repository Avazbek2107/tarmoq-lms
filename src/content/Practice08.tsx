import { H2, P, CompareTable, OL, Callout } from "../components/content/Elements";

export default function Practice08() {
  return (
    <>
      <H2>Brauzer dasturlari va ularning imkoniyatlari</H2>
      <P>
        Brauzer — foydalanuvchiga veb-sahifalarni ko'rish va ular bilan
        o'zaro aloqada bo'lish imkonini beruvchi dastur. Amaliy
        mashg'ulotda turli brauzerlarning imkoniyatlarini solishtirib
        chiqasiz.
      </P>

      <CompareTable
        headers={["Brauzer", "Ishlab chiqaruvchi", "Xos xususiyati"]}
        rows={[
          ["Google Chrome", "Google", "Tezlik, ko'p kengaytmalar"],
          ["Mozilla Firefox", "Mozilla", "Maxfiylikka yo'naltirilgan"],
          ["Microsoft Edge", "Microsoft", "Windows bilan chambarchas integratsiya"],
          ["Safari", "Apple", "Apple qurilmalarida energiya tejamkorligi"],
        ]}
      />

      <OL
        items={[
          <>Kamida ikki xil brauzerni ochib, bir xil veb-saytni yuklang va yuklanish tezligini solishtiring.</>,
          <>Brauzerning "Developer Tools" (F12) panelini ochib, sahifa manbasini (Elements) ko'rib chiqing.</>,
          <>Xotira/maxfiylik sozlamalarida cookie va tarixni tozalash imkoniyatini toping.</>,
          <>Brauzerga foydali kengaytma (extension) o'rnatib, uning vazifasini tushunib yozing.</>,
        ]}
      />

      <Callout kind="tip" title="Topshiriq">
        Ikki xil brauzerda bir xil sayt ochib, ularning interfeysi va
        tezligi bo'yicha kuzatishlaringizni qisqacha taqqoslovchi
        xulosa yozing.
      </Callout>
    </>
  );
}
