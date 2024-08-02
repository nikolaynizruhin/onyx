import Image from "next/image";
import Container from "./container";
import Button from "./button";
import Divider from "./divider";

export default function Cooperation({ setOpen }: { setOpen: (isOpen: boolean) => void }) {
  return (
    <div id="cooperation" className="relative">
      <Image
        src="/images/handshake.jpg"
        alt="River Garden"
        width={1920}
        height={1279}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <Container className="py-14 md:py-44 lg:py-32">
        <div className="max-w-56 md:max-w-[480px]">
          <h2 className="text-2xl md:text-[40px] lg:text-[45px] font-normal leading-8 md:leading-[48px] lg:leading-[54px] text-white">
            Хочете стати нашим партнером або запропонувати нам співпрацю?
          </h2>
          <Divider className='mt-8 md:my-16 lg:mt-14 mb-8 lg:mb-5' />
          <p className="text-xs md:text-sm lg:text-lg font-normal text-white">Надсилайте Ваші пропозиції і ми обов’язково запропонуємо найкраще рішення.</p>
          <Button className="block mt-9" onClick={() => setOpen(true)}>ВІДПРАВИТИ ЗАПИТ</Button>
        </div>
      </Container>
    </div>
  )
}