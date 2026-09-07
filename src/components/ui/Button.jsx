import { Link } from 'react-router-dom'

function Button({
  children,
  variant = 'primary',
  className = '',
  to,
  ...props
}) {
  const baseStyles = `
    group
    inline-flex
    items-center
    justify-center
    gap-2
    rounded-full
    px-7
    py-3.5
    text-sm
    font-semibold
    leading-none
    transition-all
    duration-300
    ease-out
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-[#e85d2a]
    focus-visible:ring-offset-2
  `

  const variants = {
    primary: `
      bg-[#171412]
      !text-white
      shadow-[0_10px_25px_rgba(23,20,18,0.10)]
      hover:-translate-y-0.5
      hover:bg-[#e85d2a]
      hover:shadow-[0_14px_30px_rgba(232,93,42,0.22)]
    `,

    secondary: `
      border
      border-[#171412]/20
      bg-white/60
      !text-[#171412]
      shadow-[0_8px_20px_rgba(23,20,18,0.04)]
      backdrop-blur-sm
      hover:-translate-y-0.5
      hover:border-[#e85d2a]
      hover:bg-white
      hover:!text-[#e85d2a]
      hover:shadow-[0_12px_25px_rgba(232,93,42,0.12)]
    `,

    accent: `
      bg-[#e85d2a]
      !text-white
      shadow-[0_10px_25px_rgba(232,93,42,0.14)]
      hover:-translate-y-0.5
      hover:bg-[#c94b1d]
      hover:shadow-[0_14px_30px_rgba(232,93,42,0.22)]
    `,
  }

  const buttonClassName = `
    ${baseStyles}
    ${variants[variant]}
    ${className}
  `

  if (to) {
    return (
      <Link
        to={to}
        className={buttonClassName}
        {...props}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      className={buttonClassName}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button