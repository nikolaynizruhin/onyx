import Link from "next/link";
import Errors from "./errors";

export default function TermsCheckbox({ errors }: { errors?: string[] }) {
  return (
    <fieldset>
      <legend className="sr-only">Terms</legend>
      <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:pb-7">
        <div className="mt-4 sm:col-span-2 sm:mt-0 sm:col-start-2">
          <div className="max-w-lg space-y-6">
            <div className="relative flex gap-x-3">
              <div className="flex h-6 items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className="h-4 w-4 border-gray-300 text-[#478CCB] focus:ring-[#478CCB]"
                />
              </div>
              <div className="text-xs leading-6">
                <label htmlFor="terms" className="font-normal text-[#111D28]">
                  Я даю згоду на обробку <Link href="/docs/privacy.pdf" target="_blank" className="underline">персональних даних</Link>
                </label>
                <Errors errors={errors} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </fieldset>
  )
}