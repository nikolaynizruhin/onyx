export default function Errors({ errors, className }: { errors?: string[], className?: string }) {
  if (!errors) {
    return null
  }

  return (
    <>
      {errors.map((error, index) => <div key={index} className={`text-[#EE3023] text-xs ${className}`}>{error}</div>)}
    </>
  )
}