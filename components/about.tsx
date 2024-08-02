import Image from "next/image";
import Container from "./container";

export default function About() {
  return (
    <div id="about" className="relative overflow-hidden">
      <Container className="text-[#1D2933] lg:text-white py-9 md:py-12 lg:py-32 bg-[#f1f1f1] lg:bg-transparent">
        <h2 className="text-2xl md:text-[40px] lg:text-[45px] font-light leading-8 md:leading-[73px] lg:leading-[54px] mb-8 lg:mb-12">
          Про компанію
        </h2>
        <div className="text-xs md:text-sm font-light md:leading-[18px] space-y-4 lg:max-w-[428px]">
          <p>
            Девелоперська компанія ONYX займається розробкою, будівництвом та управлінням проєктів у сфері житлової та комерційної нерухомості різних масштабів та рівнів складності.
          </p>
          <p>
            Наша компанія має потужну команду, де працюють фахівці з управління проєктами, архітектори, досвідчені дизайнери, профільні підрозділи інженерного, експлуатаційного, фінансового, комерційного та юридичного супроводу проєктів.
          </p>
          <p>
            Ми прагнемо наповнювати міський простір змістом, формами та ідеєю.
          </p>
        </div>
      </Container>
      <Image
        src="/images/wall.jpg"
        alt="Onyx Wall"
        width={1924}
        height={1444}
        className="static lg:absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 h-full w-1/2 bg-[#192C3D]/[.8] hidden lg:block" />
    </div>
  )
}