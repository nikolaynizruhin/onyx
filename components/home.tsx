'use client'

import About from "@/components/about";
import Contact from "@/components/contact";
import ContactModal from "@/components/contact-modal";
import Cooperation from "@/components/cooperation";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Services from "@/components/services";
import StructuredData from "@/components/structured-data";
import ThankModal from "@/components/thank-modal";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false)
  const [openThank, setOpenThank] = useState(false)

  return (
    <>
      <Hero setOpen={setOpen} />
      <About />
      <Services />
      <Cooperation setOpen={setOpen} />
      <Contact setOpen={setOpen} />
      <Footer />
      <ContactModal open={open} setOpen={setOpen} setOpenThank={setOpenThank} />
      <ThankModal open={openThank} setOpen={setOpenThank} />
      <StructuredData />
    </>
  );
}
