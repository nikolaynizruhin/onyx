import Image from "next/image";
import Container from "./container";
import Button from "./button";

export default function Cooperation({ setOpen }: { setOpen: (isOpen: boolean) => void }) {
  return (
    <div id="cooperation" className="relative">
      <Image
        src="/images/handshake.jpg"
        alt="River Garden"
        width={1949}
        height={1299}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <Container className="py-14 md:py-44 lg:py-32">
        <div className="max-w-56 md:max-w-[480px]">
          <h2 className="text-2xl md:text-[40px] lg:text-[45px] font-normal leading-8 md:leading-[48px] lg:leading-[54px] text-white">
            Хочете стати нашим партнером або запропонувати нам співпрацю?
          </h2>
          <div className="border-b border-white w-20 md:w-48 lg:w-32 h-8 md:h-16 lg:h-14 mb-8 md:mb-16 lg:mb-5"></div>
          <p className="text-xs md:text-sm lg:text-lg font-normal text-white">Надсилайте Ваші пропозиції і ми обов’язково запропонуємо найкраще рішення.</p>
          <div className="mt-9">
            <Button onClick={() => setOpen(true)}>ВІДПРАВИТИ ЗАПИТ</Button>
          </div>
        </div>
      </Container>
    </div>
  )
}