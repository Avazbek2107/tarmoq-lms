import { H2, P, CompareTable, Callout } from "../components/content/Elements";
import { Figure, CableTypesDiagram } from "../components/diagrams/Diagrams";

export default function Lesson06() {
  return (
    <>
      <H2>Lokal tarmoqqa jismoniy ulanish</H2>
      <P>
        Lokal kompyuter tarmog'iga kirishning birinchi sharti — to'g'ri
        tanlangan kabel va konnektorlar orqali sifatli jismoniy ulanishni
        ta'minlash. Signal sifati va uzatish tezligi ko'p jihatdan aynan
        shu tanlovga bog'liq.
      </P>

      <Figure caption="Lokal tarmoqlarda qo'llaniladigan asosiy kabel turlari">
        <CableTypesDiagram />
      </Figure>

      <H2>Kabel turlari</H2>
      <CompareTable
        headers={["Kabel", "Afzalligi", "Kamchiligi"]}
        rows={[
          ["Vitoy juftlik (UTP/FTP)", "Arzon, o'rnatish oson", "Masofa cheklangan (~100 m)"],
          ["Optik tola", "Yuqori tezlik, uzoq masofa, xalaqitga chidamli", "Narxi yuqori, sindiruvchan"],
          ["Koaksial", "Xalaqitga chidamli", "Eskirgan, tezligi past"],
        ]}
      />

      <H2>Konnektorlar</H2>
      <P>
        Vitoy juftlik kabellar odatda <b>RJ-45</b> konnektori orqali
        switch/router portlariga ulanadi. Optik tola uchun <b>SC, LC, FC</b>{" "}
        kabi konnektorlar qo'llaniladi. Har bir konnektor turi mos port va
        adapterni talab qiladi.
      </P>

      <H2>Tarmoqni o'lchash va sinash</H2>
      <P>
        Kabel to'g'ri ulanganini va signal sifatini tekshirish uchun{" "}
        <b>kabel testeri (LAN tester)</b> ishlatiladi. U simlarning
        uzilmagan yoki noto'g'ri ulanmaganligini (masalan, juftliklar
        aralashib qolishi) aniqlaydi. Professional tarmoqlarda esa signal
        so'nishi (attenuation) va xalaqitni o'lchash uchun maxsus sertifikatlash
        asboblari qo'llaniladi.
      </P>

      <Callout kind="info" title="Amaliy mashg'ulot: Intranet va Internet xizmatlari">
        Seminar darsida siz kompyuterni Intranet (tashkilot ichki) tarmog'iga
        ulash va undan foydalanish, hamda Internet orqali taqdim etiladigan
        asosiy xizmatlar (veb-sahifalar, elektron pochta, fayl yuklab
        olish) bilan amaliy tanishasiz.
      </Callout>

      <P>
        <b>Mustaqil ish uchun:</b> Internet tizimining kelib chiqish tarixi
        va uni yaratishda ishtirok etgan olimlar (Vinton Cerf, Robert Kahn,
        Tim Berners-Lee va boshqalar) haqida qisqacha ma'lumot tayyorlang.
      </P>
    </>
  );
}
