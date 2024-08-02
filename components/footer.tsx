import company from "@/config/company";
import Container from "./container";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111D28]">
      <Container className="py-9">
        <div className="text-white opacity-30 font-normal text-xs">
          <p>
            <Link href="/docs/disclaimer.pdf" target="_blank" className="mr-5">Правові застереження</Link>
            <Link href="/docs/privacy.pdf" target="_blank">Політика конфіденційності</Link>
          </p>
          <p className="mt-1">
            © {company.founded} - {new Date().getFullYear()} {company.name}. ВСІ ПРАВА ЗАХИЩЕНО.
          </p>
        </div>
      </Container>
    </footer>
  )
}