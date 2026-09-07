import { ArrowLeft, ArrowRight, Quote } from 'lucide-react'

import Container from '../ui/Container'

const testimonials = [
  {
    quote:
      'The kind of place where you come for dinner and somehow end up staying for hours.',
    name: 'Aarav',
    detail: 'Weekend dinner',
  },
  {
    quote:
      'Beautiful food, warm service and an atmosphere that makes every meal feel special.',
    name: 'Maya',
    detail: 'Local guest',
  },
  {
    quote:
      'Everything felt thoughtful — from the ingredients on the plate to the little details around the table.',
    name: 'Rohan',
    detail: 'Regular guest',
  },
]

function Testimonials() {
  return (
    <section className="bg-[#fff7ed] py-20 sm:py-24 lg:py-32">
      <Container>

        {/* Header */}
        <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#e85d2a]" />

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6b7651]">
                Kind Words
              </p>
            </div>

            <h2 className="max-w-2xl text-5xl leading-[0.95] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
              Good food is
              <br />
              <span className="italic text-[#e85d2a]">
                better together.
              </span>
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous testimonial"
              className="
                group
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-[#171412]/15
                bg-white
                text-[#171412]!
                shadow-sm
                transition-all
                duration-300
                hover:-translate-x-0.5
                hover:border-[#171412]
                hover:bg-[#171412]
                hover:text-white!
              "
            >
              <ArrowLeft
                size={17}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:-translate-x-0.5"
              />
            </button>

            <button
              type="button"
              aria-label="Next testimonial"
              className="
                group
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-[#171412]/15
                bg-white
                text-[#171412]!
                shadow-sm
                transition-all
                duration-300
                hover:translate-x-0.5
                hover:border-[#e85d2a]
                hover:bg-[#e85d2a]
                hover:text-white!
              "
            >
              <ArrowRight
                size={17}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </button>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-12 grid items-stretch gap-5 md:grid-cols-3 lg:mt-16">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="
                group
                flex
                h-full
                flex-col
                rounded-[26px]
                border
                border-[#171412]/10
                bg-white
                p-7
                shadow-[0_10px_35px_rgba(23,20,18,0.04)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#171412]/15
                hover:shadow-[0_18px_45px_rgba(23,20,18,0.09)]
                sm:p-8
              "
            >
              {/* Quote Icon */}
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-[#f2e6d8]
                  text-[#e85d2a]!
                  transition-transform
                  duration-300
                  group-hover:scale-105
                "
              >
                <Quote size={18} strokeWidth={2} />
              </div>

              {/* Quote */}
              <blockquote className="mt-7 flex-1 font-serif text-2xl leading-[1.2] tracking-[-0.015em] text-[#171412] sm:text-3xl">
                “{testimonial.quote}”
              </blockquote>

              {/* Author */}
              <div className="mt-8 border-t border-[#171412]/10 pt-5">
                <p className="text-sm font-semibold text-[#171412]">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-[#8a8178]">
                  {testimonial.detail}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Line */}
        <div className="mt-14 border-t border-[#171412]/10 pt-6 lg:mt-20">
          <div className="flex flex-col gap-2 text-sm text-[#766e66] sm:flex-row sm:items-center sm:justify-between">
            <p>
              Your table is waiting.
            </p>

            <p className="font-medium text-[#171412]">
              Ember & Olive · Local Kitchen
            </p>
          </div>
        </div>

      </Container>
    </section>
  )
}

export default Testimonials