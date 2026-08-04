import { H2, P, UL, Callout } from "../components/content/Elements";

export default function Practice10() {
  return (
    <>
      <H2>Multimediali tarmoq texnologiyalarida uzatishlar</H2>
      <P>
        Video va audio ma'lumotlarni tarmoq orqali uzatishda maxsus
        protokollar va usullar qo'llaniladi. Bu mashg'ulotda ularning
        amaliy tomonlarini ko'rib chiqasiz.
      </P>
      <UL
        items={[
          <><b>Buferlash (buffering)</b> — video internet tezligi pasaysa ham uzilmasligi uchun oldindan qisman yuklab olinadi.</>,
          <><b>Adaptiv sifat</b> — tarmoq tezligiga qarab video sifati avtomatik pasayadi/ko'tariladi.</>,
          <><b>UDP asosidagi uzatish</b> — real vaqt aloqada tezlik muhim, ba'zi paketlar yo'qolsa ham davom etadi.</>,
        ]}
      />
      <P>
        Video-konferensiya vaqtida Internet tezligini birdaniga
        cheklab (masalan, boshqa yuklab olishni ishga tushirib) tovush va
        video sifatiga qanday ta'sir qilishini kuzatib ko'rish — bu
        amaliyotning asosiy qismidir.
      </P>

      <Callout kind="tip" title="Topshiriq">
        Video-konferensiya (yoki video striming) davomida internetdan
        faol foydalanuvchi boshqa dastur ishga tushirib, video sifati va
        kechikishga qanday ta'sir qilganini kuzatib, kuzatuvlaringizni
        yozing.
      </Callout>
    </>
  );
}
