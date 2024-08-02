import company from "@/config/company"
import { Contact as ContactInterface } from "@/lib/definitions"
import Container from "./container"
import Button from "./button"

const contacts: ContactInterface[] = [
  {
    name: 'Пошта',
    value: company.email,
    href: `mailto:${company.email}`,
    target: '_self',
  },
  {
    name: 'Телефон',
    value: company.phone,
    href: 'tel:+380963737575',
    target: '_self',
  },
  {
    name: 'Адреса',
    value: company.address.city + ', ' + company.address.street,
    href: company.map,
    target: '_blank',
  }
]

export default function Contact({ setOpen }: { setOpen: (isOpen: boolean) => void }) {
  return (
    <div id="contact" className="bg-[#111D28]">
      <Container className="py-9 md:pt-20 lg:pt-32 md:pb-10 lg:pb-20">
        <div>
          <h3 className="text-white font-semibold text-xl md:text-[22px] mb-14">НАШІ КОНТАКТИ</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contacts.map((contact, index) => <ContactDetail key={index} contact={contact} />)}
          </div>
          <p className="text-white opacity-30 font-normal text-xs sm:text-sm max-w-[600px] mt-14">Девелоперська компанія ONYX створює проєкти нерухомості різних масштабів та рівнів складності для розвитку столиці</p>
          <Button isOutline className="w-full sm:w-auto mt-11 lg:mt-14" onClick={() => setOpen(true)}>ЗВ’ЯЗАТИСЬ З НАМИ</Button>
        </div>
      </Container>
    </div>
  )
}

function ContactDetail({ contact }: { contact: ContactInterface }) {
  return (
    <div>
      <p className="text-xs sm:text-sm font-normal text-white opacity-30">{contact.name}</p>
      <a href={contact.href} target={contact.target} className="text-xs sm:text-sm font-normal text-white">{contact.value}</a>
    </div>
  )
}