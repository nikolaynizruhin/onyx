import Image from 'next/image'
import Header from './header'
import Container from './container'
import Button from './button'
import Divider from './divider'

export default function Hero({ setOpen }: { setOpen: (isOpen: boolean) => void }) {
  return (
    <div className="bg-[#111D28]">
      <Header />
      <div className="relative isolate overflow-hidden pt-[52px]">
        <Image
          src="/images/hero.jpg"
          alt="River Garden"
          width={1280}
          height={800}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <Container className="py-48 md:py-56">
          <div className="max-w-[595px]">
            <h1 className="text-2xl md:text-[40px] lg:text-[45px] font-light leading-8 md:leading-[48px] lg:leading-[54px] text-white">
              Архітектура і будівництво житлової та комерційної нерухомості в Києві
            </h1>
            <Divider className='mt-8 md:my-16 lg:mt-14 mb-14 lg:mb-24' />
            <Button onClick={() => setOpen(true)}>ЗАЛИШИТИ ЗАЯВКУ</Button>
          </div>
        </Container>
      </div>
    </div>
  )
}
