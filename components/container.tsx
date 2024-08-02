export default function Container({ children, className }: { className?: string, children: React.ReactNode }) {
  return (
    <div className={`mx-auto max-w-5xl lg:max-w-6xl px-7 md:px-16 lg:px-8 ${className}`}>
      {children}
    </div>
  )
}