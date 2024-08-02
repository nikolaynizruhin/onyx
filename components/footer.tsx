import company from "@/config/company";
import Container from "./container";

export default function Footer() {
  return (
    <footer className="bg-[#111D28]">
      <Container className="py-9">
        <div className="text-white opacity-30 font-normal text-xs">
          <p>
            <a href="https://www.asty.com.ua/disclaimer" target="_blank" className="mr-5">Правові застереження</a>
            <a href="https://www.asty.com.ua/privacy" target="_blank">Політика конфіденційності</a>
          </p>
          <p className="mt-1">
            © {company.founded} - {new Date().getFullYear()} {company.name}. ВСІ ПРАВА ЗАХИЩЕНО.
          </p>
        </div>
      </Container>
    </footer>
  )
}