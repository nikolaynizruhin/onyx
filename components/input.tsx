import Errors from "./errors";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  type?: string;
  errors?: string[];
}

export default function Input({ name, label, type = 'text', errors, ...props }: InputProps) {
  return (
    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:pb-3">
      <label htmlFor="name" className="block text-sm font-normal text-[#505050] pt-3 sm:pt-1.5">
        {label}
      </label>
      <div className="mt-2 sm:col-span-2 sm:mt-0">
        <input
          id={name}
          name={name}
          type={type}
          className={`block w-full border-0 py-1.5 text-[#505050] ring-1 ring-inset placeholder:text-gray-400 focus:ring-1 focus:ring-inset sm:text-sm sm:leading-6 ${errors ? 'ring-[#EE3023] focus:ring-[#EE3023]' : 'focus:ring-[#478CCB] ring-gray-300'}`}
          {...props}
        />
        <Errors errors={errors} className="mt-1" />
      </div>
    </div>
  )
}