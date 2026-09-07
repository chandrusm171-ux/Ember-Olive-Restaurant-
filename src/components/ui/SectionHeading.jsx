function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}) {
  const alignment = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  }

  return (
    <div className={`w-full max-w-2xl ${alignment[align]}`}>
      {eyebrow && (
        <p
          className="
            mb-4
            text-xs
            font-semibold
            uppercase
            tracking-[0.22em]
            text-[#6b7651]
          "
        >
          {eyebrow}
        </p>
      )}

      <h2
        className="
          text-4xl
          leading-[1.08]
          tracking-tight
          sm:text-5xl
          md:text-6xl
        "
      >
        {title}
      </h2>

      {description && (
        <p
          className="
            mt-5
            max-w-xl
            text-base
            leading-7
            text-[#766e66]
            sm:text-lg
            sm:leading-8
          "
        >
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading