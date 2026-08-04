import { H2, P, UL } from "../components/content/Elements";

export default function SelfStudy07() {
  return (
    <>
      <H2>Rasmli va murakkab ob'ektli ma'lumotlarning Internet tizimidagi almashinuv jarayonlari</H2>
      <P>
        Oddiy matndan farqli o'laroq, rasmlar, video va boshqa murakkab
        ob'ektlar (masalan, 3D modellar, arxiv fayllari) ancha katta
        hajmga ega bo'ladi va ularni tarmoq orqali uzatish maxsus
        yondashuvlarni talab qiladi.
      </P>
      <UL
        items={[
          <><b>Siqish (compression)</b> — JPEG, PNG, ZIP kabi formatlar fayl hajmini kamaytirib, tezroq uzatishga yordam beradi.</>,
          <><b>Bo'lib uzatish (chunking)</b> — katta fayl kichik qismlarga bo'linib yuboriladi va manzilda qayta yig'iladi.</>,
          <><b>Kesh (caching)</b> — tez-tez so'raladigan rasm/fayllar foydalanuvchiga yaqin serverlarda saqlanadi (CDN).</>,
          <><b>Progressiv yuklash</b> — rasm avval xira, keyin aniqroq ko'rinishda yuklanadi, foydalanuvchi tezroq natijani ko'radi.</>,
        ]}
      />
      <P>
        Zamonaviy veb-saytlar ko'pincha CDN (Content Delivery Network)
        xizmatlaridan foydalanadi — bu murakkab ob'ektlarni foydalanuvchiga
        geografik jihatdan yaqin serverdan tezroq yetkazish imkonini
        beradi.
      </P>
    </>
  );
}
