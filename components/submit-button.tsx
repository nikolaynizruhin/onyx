'use client'

import { useFormStatus } from "react-dom";
import Button from "./button";

export default function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4">
      <div className="mt-5 sm:col-span-2 sm:mt-0 sm:col-start-2">
        <Button type="submit" aria-disabled={pending} disabled={pending} className={`w-full ${pending && 'bg-[#C2C2C2]'}`}>
          {pending ? 'ВІДПРАВЛЯЮ...' : 'ВІДПРАВИТИ'}
        </Button>
      </div>
    </div>
  )
}