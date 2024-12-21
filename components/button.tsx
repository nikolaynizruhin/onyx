'use client'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  className?: string;
  isOutline?: boolean;
}

export default function Button({ children, className, isOutline = false, ...props }: ButtonProps) {
  const classes = `${isOutline 
    ? 'border border-white'
    : 'bg-[#478CCB]'
  } py-3 px-7 md:px-14 md:py-5 lg:px-14 lg:py-4 text-[10px] leading-3 md:text-sm lg:text-xs lg:leading-[14px] font-medium text-white ${className}`

  return <button className={classes} {...props}>{children}</button>
}