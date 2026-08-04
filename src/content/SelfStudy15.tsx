import { H2, P, UL, Callout } from "../components/content/Elements";

export default function SelfStudy15() {
  return (
    <>
      <H2>Kerio Control dasturi — mustaqil chuqurlashtirish</H2>
      <P>
        Amaliy mashg'ulotda Kerio Control dasturining asosiy imkoniyatlari
        (trafik qoidalari, tezlikni cheklash, monitoring) bilan
        tanishgan edingiz. Mustaqil ish doirasida ushbu dasturning
        qo'shimcha, chuqurroq imkoniyatlarini o'rganib chiqing:
      </P>
      <UL
        items={[
          <><b>VPN server</b> — Kerio Control orqali masofadagi xodimlar uchun xavfsiz VPN ulanish yaratish.</>,
          <><b>Antivirus integratsiyasi</b> — kiruvchi trafikni antivirus bilan avtomatik tekshirish.</>,
          <><b>Foydalanuvchi autentifikatsiyasi</b> — Active Directory bilan integratsiya orqali xodimlarni tizimga bog'lash.</>,
          <><b>Hisobotlar (Reports)</b> — internetdan foydalanish statistikasini avtomatik hisobot sifatida shakllantirish.</>,
        ]}
      />
      <P>
        Bozorda Kerio Control'ga o'xshash boshqa yechimlar ham mavjud:
        pfSense (bepul, ochiq kodli), FortiGate, Sophos Firewall. Ularning
        har biri o'ziga xos narx va imkoniyatlar nisbatiga ega.
      </P>

      <Callout kind="tip" title="Mustaqil ish topshirig'i">
        Kerio Control dasturini pfSense yoki boshqa bir Firewall
        yechimi bilan taqqoslab, ularning narxi, imkoniyatlari va
        o'rnatish qulayligi bo'yicha qisqacha qiyosiy jadval tuzing.
      </Callout>
    </>
  );
}
