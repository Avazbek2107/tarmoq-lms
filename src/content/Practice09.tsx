import { H2, P, UL, Callout } from "../components/content/Elements";

export default function Practice09() {
  return (
    <>
      <H2>Multimedia bilan ishlashda tarmoqlardan foydalanish</H2>
      <P>
        Zamonaviy Internet nafaqat matn, balki tovush, video va jonli
        translatsiyalarni ham uzatadi. Bunun uchun katta bant kengligi va
        past kechikish talab etiladi. Amaliy mashg'ulotda multimedia
        oqimlarining tarmoqqa ta'sirini kuzatasiz.
      </P>
      <UL
        items={[
          "Video oqim (streaming) — YouTube kabi xizmatlarda video sifatini o'zgartirib, tezlikka ta'sirini kuzating",
          "Onlayn video-konferensiya — Zoom/Google Meet orqali qisqa aloqa sinovi",
          "Fayl yuklab olish paytida tarmoq tezligini o'lchash (speedtest)",
        ]}
      />
      <P>
        Video sifatini (masalan, 480p dan 1080p ga) o'zgartirganda tarmoq
        tezligi ko'rsatkichi (Network tabida) qanday o'zgarishini kuzatib,
        yuqori sifat ko'proq bant kengligini talab qilishini amaliy
        tasdiqlaysiz.
      </P>

      <Callout kind="tip" title="Topshiriq">
        Internet tezligini onlayn speedtest xizmati orqali o'lchang, so'ng
        video sifatini eng yuqori darajaga o'zgartirib, tezlik qanday
        o'zgarishini yozib qo'ying.
      </Callout>
    </>
  );
}
