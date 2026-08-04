import { H2, P, UL, CompareTable } from "../components/content/Elements";

export default function SelfStudy04() {
  return (
    <>
      <H2>Lokal tarmoq aloqa vositalari</H2>
      <P>
        Lokal tarmoqda kompyuterlar bir-biri bilan turli aloqa vositalari
        orqali bog'lanadi. Ularni tanlash tarmoq hajmi, masofa va
        byudjetga bog'liq.
      </P>
      <CompareTable
        headers={["Aloqa vositasi", "Xususiyati"]}
        rows={[
          ["Ethernet kabel (UTP)", "Arzon, keng tarqalgan, 100 m gacha"],
          ["Wi-Fi", "Kabel talab qilmaydi, mobillik yuqori"],
          ["Optik tola", "Yuqori tezlik, uzoq masofa"],
          ["Bluetooth/Infrared", "Qisqa masofali shaxsiy ulanishlar uchun"],
        ]}
      />

      <H2>Kompyuterlararo aloqalarni tashkil etish yo'llari</H2>
      <UL
        items={[
          <><b>To'g'ridan-to'g'ri ulanish</b> — ikki kompyuterni kross-kabel yoki Wi-Fi Direct orqali bevosita bog'lash.</>,
          <><b>Markazlashgan ulanish (switch/hub orqali)</b> — barcha kompyuterlar markaziy qurilmaga ulanadi.</>,
          <><b>Simsiz kirish nuqtasi (Access Point)</b> — bir nechta qurilmani Wi-Fi orqali bir joyga birlashtiradi.</>,
          <><b>VPN orqali masofaviy ulanish</b> — geografik uzoqdagi kompyuterlarni Internet orqali xavfsiz bog'lash.</>,
        ]}
      />
      <P>
        Har bir usulning o'z afzalligi bor: to'g'ridan-to'g'ri ulanish
        oddiy va tezkor, lekin faqat ikki qurilma uchun qulay; markazlashgan
        ulanish esa ko'p qurilmali tarmoqlar uchun boshqarish va
        kengaytirishni osonlashtiradi.
      </P>
    </>
  );
}
