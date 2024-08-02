import Errors from "./errors";

export default function Textarea({ name, label, errors, ...props }: { name: string, label: string, errors?: string[], [key: string]: any }) {
  return (
    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:pb-7">
      <label htmlFor="message" className="block text-sm font-normal text-[#505050] pt-3 sm:pt-1.5">
        {label}
      </label>
      <div className="mt-2 sm:col-span-2 sm:mt-0">
        <textarea
          id={name}
          name={name}
          rows={3}
          className={`block w-full max-w-2xl border-0 py-1.5 text-[#505050] ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset sm:text-sm sm:leading-6 ${errors ? 'ring-[#EE3023]' : 'focus:ring-[#478CCB]'}`}
          defaultValue={''}
          {...props}
        />
        <Errors errors={errors} className="mt-1" />
      </div>
    </div>
  )
}