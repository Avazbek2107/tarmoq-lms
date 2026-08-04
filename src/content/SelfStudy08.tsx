import { H2, P, Callout } from "../components/content/Elements";
import { Figure, PacketSwitchingDiagram } from "../components/diagrams/Diagrams";

export default function SelfStudy08() {
  return (
    <>
      <H2>Internetni tashkil etuvchi dasturlarning yaratilish tarixi</H2>
      <P>
        Birinchi veb-brauzer <b>WorldWideWeb</b> (keyinchalik Nexus deb
        nomlangan) 1990-yilda Tim Berners-Lee tomonidan yaratilgan. 1993-
        yilda <b>Mosaic</b> brauzeri paydo bo'lib, u rasmlarni matn bilan
        bir sahifada ko'rsata olishi bilan Internetni ommalashtirishga
        katta hissa qo'shdi. Undan keyin Netscape Navigator, so'ngra
        Internet Explorer, Firefox, Chrome kabi brauzerlar rivojlandi.
      </P>

      <H2>Internetda axborot xavfsizligi va uni himoyalash usullari</H2>
      <P>
        Internetdan foydalanishda parollarni ishonchli tanlash,
        ishonchsiz havolalarni ochmaslik, dasturiy ta'minotni yangilab
        turish va antivirus qo'llash — axborot xavfsizligini
        ta'minlashning asosiy usullaridir. Bundan tashqari, ikki bosqichli
        autentifikatsiya (2FA) va shifrlangan aloqa (HTTPS, VPN) zamonaviy
        himoya vositalari hisoblanadi.
      </P>

      <H2>Paketlar kommutatsiyasining rivojlanishi</H2>
      <P>
        Zamonaviy Internet va Intranet tarmoqlarining asosi — <b>paketlar
        kommutatsiyasi</b>. Xabar kichik-kichik paketlarga bo'linadi, har bir
        paket mustaqil ravishda tarmoq orqali yuboriladi va manzilda qayta
        yig'iladi. Bu usul 1960-yillarda ARPANET loyihasi doirasida ishlab
        chiqilgan va hozirgi kungacha rivojlanib, zamonaviy IP-tarmoqlarning
        asosiy ishlash tamoyiliga aylangan.
      </P>
      <Figure caption="Paketlar kommutatsiyasi tamoyili">
        <PacketSwitchingDiagram />
      </Figure>

      <Callout kind="info" title="Fikrlash uchun savol">
        Nega paketlar kommutatsiyasi virtual kanalli usulga (masalan,
        klassik telefon tarmog'iga) nisbatan tarmoq resurslaridan
        tejamliroq foydalanadi, deb o'ylaysiz?
      </Callout>
    </>
  );
}
