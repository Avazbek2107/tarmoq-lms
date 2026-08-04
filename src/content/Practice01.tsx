import { H2, P, OL, KeyTerms, Callout } from "../components/content/Elements";

export default function Practice01() {
  return (
    <>
      <H2>Kompyuter tarmoqlarining texnik vositalari</H2>
      <P>
        Amaliy mashg'ulotning maqsadi — kompyuter tarmog'ini tashkil etishda
        ishlatiladigan asosiy texnik vositalarni (uskunalarni) ko'zdan
        kechirish, ularning tashqi ko'rinishi va portlarini tanib olishni
        o'rganishdir.
      </P>

      <OL
        items={[
          <>Kompyuter xonasida yoki laboratoriyada mavjud tarmoq kabellari (UTP), konnektorlar (RJ-45) va tarmoq kartasi (NIC)ni topib, ularning tuzilishini kuzatib chiqing.</>,
          <>Switch, router yoki modem qurilmasini topib, uning portlari sonini, LED indikatorlarini va yozuvlarini yozib oling.</>,
          <>Kompyuterning tarmoq kartasi xususiyatlarini "Device Manager" (Windows) yoki <code>ip link</code> buyrug'i (Linux) orqali tekshiring.</>,
          <>Kabelni kompyuter va switch orasiga ulab, tarmoq ulanish holatini ("Ethernet ulangan") tasdiqlang.</>,
          <>Har bir uskunaning vazifasini bir jumlada yozib, kichik jadval tuzing.</>,
        ]}
      />

      <KeyTerms
        terms={[
          { term: "NIC (Network Interface Card)", def: "Kompyuterni tarmoqqa ulaydigan tarmoq kartasi/adapteri." },
          { term: "Patch panel", def: "Ko'p sonli kabellarni tartibli ulash uchun ishlatiladigan panel." },
          { term: "Port", def: "Kabelni ulash uchun uskunadagi teshik/uyacha." },
        ]}
      />

      <Callout kind="tip" title="Topshiriq">
        O'quv xonangizdagi (yoki uydagi) tarmoq uskunalarining ro'yxatini
        tuzing: qurilma nomi, turi va vazifasi ko'rsatilgan jadval
        tayyorlang. Kamida 4 xil uskuna bo'lishi kerak.
      </Callout>
    </>
  );
}
