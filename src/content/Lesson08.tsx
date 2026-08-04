import { H2, P, UL } from "../components/content/Elements";

export default function Lesson08() {
  return (
    <>
      <H2>Intranet nima?</H2>
      <P>
        <b>Intranet</b> — Internet texnologiyalari (TCP/IP, HTTP, veb-brauzer)
        asosida qurilgan, lekin faqat bitta tashkilot yoki muassasa
        xodimlari uchun mo'ljallangan xususiy ichki tarmoq. Tashqi
        foydalanuvchilar undan foydalana olmaydi, kirish parol va
        korporativ tarmoq chegarasi bilan cheklangan.
      </P>

      <H2>Ichki tarmoqda veblash</H2>
      <P>
        Tashkilot o'z Intranet tarmog'ida ichki veb-portal yaratishi mumkin:
        xodimlar uchun buyruqlar, hisobotlar, ichki xat almashinuv,
        elektron hujjat aylanmasi tizimi. Bu portal odatiy veb-sayt kabi
        ishlaydi, faqat u faqat tashkilot tarmog'i (yoki VPN) ichida
        ko'rinadi.
      </P>

      <UL
        items={[
          "Xodimlar orasida tezkor va xavfsiz axborot almashinuvi",
          "Korporativ hujjatlarni markazlashgan saqlash va boshqarish",
          "Ichki xizmatlar (HR portal, bildirishnoma tizimi) joylashtirish",
          "Tashqi tahdidlardan qisman izolyatsiya qilingan muhit",
        ]}
      />

      <H2>Internetni tashkil etuvchi dasturlarni yaratish</H2>
      <P>
        Intranet va Internet resurslarini yaratish uchun veb-server dasturlari
        (Apache, Nginx, IIS), dasturlash tillari (PHP, Python, JavaScript)
        va ma'lumotlar bazasi tizimlari (MySQL, PostgreSQL) qo'llaniladi.
        Bu dasturlar HTTP so'rovlarini qabul qilib, foydalanuvchiga
        veb-sahifa ko'rinishida javob qaytaradi.
      </P>

    </>
  );
}
