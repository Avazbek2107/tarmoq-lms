import { H2, P, UL } from "../components/content/Elements";

export default function Lesson09() {
  return (
    <>
      <H2>GAN — global kompyuter tarmog'i haqida umumiy tushunchalar</H2>
      <P>
        <b>Internet</b> — dunyodagi millionlab lokal va mintaqaviy
        tarmoqlarni bir-biriga bog'laydigan eng katta global tarmoq (GAN).
        U yagona markazga ega emas — turli davlatlar, tashkilotlar va
        provayderlarning tarmoqlari o'zaro kelishilgan protokollar (TCP/IP)
        asosida birlashadi.
      </P>

      <UL
        items={[
          "Internet markazlashmagan tarmoq — bir nuqta ishdan chiqsa, ma'lumot muqobil yo'l orqali boradi",
          "Millionlab server va yo'naltiruvchi (router) qurilmalardan iborat",
          "Umumiy til — TCP/IP protokollari to'plami orqali ishlaydi",
          "Har kim provayder orqali ulanib, global tarmoqning bir qismiga aylanadi",
        ]}
      />

    </>
  );
}
