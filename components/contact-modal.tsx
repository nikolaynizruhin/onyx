'use client'

import Input from "./input";
import Modal from "./modal";
import SubmitButton from "./submit-button";
import TermsCheckbox from "./terms-checkbox";
import Textarea from "./textarea";
import { sendContactEmail } from "@/lib/actions";
import { useActionState, useEffect } from "react";

export default function ContactModal({ open, setOpen, setOpenThank }: { open: boolean; setOpen: (open: boolean) => void; setOpenThank: (open: boolean) => void }) {
  const [state, action] = useActionState(sendContactEmail, { success: false, errors: {} })

  useEffect(() => {
    if (state.success) {
      setOpen(false);
      setOpenThank(true);
    }
  }, [state.success, setOpen, setOpenThank]);

  return (
    <Modal open={open} setOpen={setOpen}>
      <form action={action} className="md:px-12 sm:pt-14 md:pb-6">
        <Input name="name" label="Імʼя" required errors={state.errors?.name} />
        <Input name="phone" label="Телефон" required errors={state.errors?.phone} />
        <Textarea name="message" label="Повідомлення" required errors={state.errors?.message} />
        <TermsCheckbox errors={state.errors?.terms} />
        <SubmitButton />
      </form>
    </Modal>
  )
}