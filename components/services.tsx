import { Service as ServiceInterface } from "@/lib/definitions";
import Image from "next/image";
import Container from "./container";
import Link from "next/link";

const services: ServiceInterface[] = [
  {
    name: 'РОЗРОБКА КОНЦЕПЦІЇ ПРОЄКТУ',
    description: "Підбір майданчика і земельної ділянки. Зонування і впорядкування об'єкта. Архітектурна функціональність проєкту. Графік реалізації.",
    icon: 'map',
    alt: 'Map',
  },
  {
    name: 'ПОСЛУГИ ГЕНЕРАЛЬНОГО ПІДРЯДНИКА',
    description: "Збір технічних умов на інженерні підключення. Оформлення містобудівного плану. Проходження експертиз. Дозвільна містобудівна документація. Отримання висновків, про відповідність будівельним нормам. Оформлення дозволу на введення в експлуатацію.",
    icon: 'drawing',
    alt: 'Drawing',
  },
  {
    name: 'ДЕВЕЛОПЕРСЬКИЙ СУПРОВІД ТА УПРАВЛІННЯ НЕРУХОМІСТЮ',
    description: "Розробка комплексної бізнес стратегії. Підбір концепції управління. Технічне обслуговування та експлуатація. Матеріально-технічне забезпечення. Узгодження, спостереження і координація виконання будівельних робіт. Комплексний маркетинг.",
    icon: 'document',
    alt: 'Document',
  },
  {
    name: 'ПОСЛУГИ СЛУЖБИ ЗАМОВНИКА',
    description: "Збір технічних умов на інженерні підключення. Оформлення містобудівного плану. Проходження експертиз. Дозвільна містобудівна документація. Отримання висновків, про відповідність будівельним нормам. Оформлення дозволу на введення в експлуатацію.",
    icon: 'plan',
    alt: 'Plan',
  },
  {
    name: "АРХІТЕКТУРА ТА ДИЗАЙН ІНТЕР'ЄРІВ",
    description: "Архітектурні та конструктивні рішення. Будівельно-монтажні роботи. Архітектурно-дизайнерське проєктування. Розробка стилістичної концепції інтер’єру. Авторський супровід проєктів.Комплексний ремонт та повна комплектація.",
    icon: 'building',
    alt: 'Building',
    link: {
      name: 'ПОДИВИТИСЬ ПРОЄКТИ',
      href: 'https://www.asty.com.ua/projects'
    }
  },
]

export default function Services() {
  return (
    <div id="services" className="bg-[#111D28] pb-24">
      <Container>
        <h2 className="text-[60px] sm:text-[110px] md:text-[120px] lg:text-[180px] xl:text-[200px] text-[#162330] font-extrabold text-center -mb-6 sm:-mb-12 md:-mb-14 lg:-mb-20 xl:-mb-24">
          ПОСЛУГИ
        </h2>
        <dl className="grid lg:grid-rows-3 lg:grid-flow-col gap-5">
          {services.map((service, index) => <Service key={index} service={service} />)}
        </dl>
      </Container>
    </div>
  )
}

function Service({ service }: { service: ServiceInterface }) {
  return (
    <div className={`bg-[#1E3142] px-4 md:px-8 py-5 md:py-12 grid grid-rows-[90px_1fr] md:grid-rows-[80px_1fr] grid-flow-col gap-x-4 md:gap-x-16 lg:gap-x-8 ${service.link ? 'grid-rows-[90px_1fr_auto] md:grid-rows-[80px_1fr_auto] row-span-2' : 'grid-rows-[90px_1fr] md:grid-rows-[80px_1fr]'}`}>
      <dt className="max-w-64 md:max-w-96 text-white font-semibold text-base md:text-[22px] leading-[26px]">{service.name}</dt>
      <dd className="text-[#718DA6] font-normal text-xs md:text-sm">{service.description}</dd>
      {service.link && <Link href={service.link.href} target="_blank" className="bg-[#478CCB] py-3 px-7 md:px-14 md:py-5 lg:px-14 lg:py-4 text-[10px] leading-3 md:text-sm lg:text-xs lg:leading-[14px] font-medium text-white w-fit mt-8 lg:mt-0">{service.link.name}</Link>}
      <div>
        <Image
          src={`/images/${service.icon}.svg`}
          width={50}
          height={50}
          alt={service.alt}
          className={`size-8 md:size-12 ${service.link ? 'row-span-3' : 'row-span-2'}`}
        />
      </div>
    </div>
  )
}