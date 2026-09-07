import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import Container from '../components/ui/Container'

function About() {
  return (
    <main className="bg-[#fff7ed] text-[#171412]">

      {/* =====================================================
          PAGE INTRO
          ===================================================== */}

      <section className="pb-16 pt-24 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">

            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#e85d2a]" />

                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6b7651]">
                  Our Story
                </p>
              </div>

              <h1 className="max-w-5xl text-[3.5rem] leading-[0.92] tracking-[-0.035em] sm:text-7xl lg:text-8xl">
                More than
                <br />
                <span className="italic text-[#e85d2a]">
                  a restaurant.
                </span>
              </h1>
            </div>

            <p className="max-w-md text-base leading-7 text-[#766e66] sm:text-lg sm:leading-8 lg:justify-self-end">
              Ember & Olive is a neighborhood kitchen built around good food,
              warm hospitality and the simple pleasure of sharing a table.
            </p>

          </div>
        </Container>
      </section>

      {/* =====================================================
          STORY IMAGE
          ===================================================== */}

      <section className="pb-20 sm:pb-24 lg:pb-32">
        <Container>
          <div className="relative">

            <div
              className="
                group
                overflow-hidden
                rounded-[30px]
                bg-[#e9d8c5]
                shadow-[0_20px_60px_rgba(23,20,18,0.08)]
                sm:rounded-[40px]
              "
            >
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=85"
                alt="Food being prepared in a restaurant kitchen"
                className="
                  aspect-4/3
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-1000
                  ease-out
                  group-hover:scale-105
                  sm:aspect-16/8
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-linear-to-t
                  from-[#171412]/15
                  via-transparent
                  to-transparent
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />
            </div>

            {/* Story Badge */}
            <div
              className="
                absolute
                -bottom-7
                left-4
                max-w-60
                rounded-3xl
                bg-[#171412]
                p-6
                text-[#fff7ed]
                shadow-[0_18px_45px_rgba(23,20,18,0.22)]
                transition-transform
                duration-300
                hover:-translate-y-1
                sm:bottom-8
                sm:left-8
              "
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f47b3a]">
                The Ember & Olive way
              </p>

              <p className="mt-3 font-serif text-2xl leading-tight tracking-[-0.02em]">
                Slow food.
                <br />
                Warm company.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* =====================================================
          OUR BEGINNING
          ===================================================== */}

      <section className="bg-[#171412] py-20 text-[#fff7ed] sm:py-24 lg:py-32">
        <Container>

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#e85d2a]" />

                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f47b3a]">
                  Where it began
                </p>
              </div>

              <h2 className="max-w-md text-5xl leading-[0.95] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
                Built around
                <br />
                <span className="italic text-[#e85d2a]">
                  the table.
                </span>
              </h2>
            </div>

            <div className="max-w-2xl text-base leading-7 text-[#c8c0b8] sm:text-lg sm:leading-8">

              <p>
                Ember & Olive started with a simple belief: restaurants should
                feel like places you want to return to.
              </p>

              <p className="mt-6">
                Not just for a special occasion, but for a relaxed lunch, an
                evening with friends, a family celebration or a quiet meal after
                a long day.
              </p>

              <p className="mt-6">
                Our kitchen brings together seasonal produce, familiar flavors
                and thoughtful cooking to create food that feels generous and
                honest.
              </p>

              <p className="mt-6">
                Everything we do comes back to one thing: creating moments worth
                staying a little longer for.
              </p>

              <div className="mt-10 border-t border-white/10 pt-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                  Our approach
                </p>

                <p className="mt-2 text-sm text-white/70">
                  Fresh ingredients · Thoughtful cooking · Warm hospitality
                </p>
              </div>

            </div>

          </div>

        </Container>
      </section>

      {/* =====================================================
          PHILOSOPHY
          ===================================================== */}

      <section className="bg-[#fff7ed] py-20 sm:py-24 lg:py-32">
        <Container>

          <div className="mb-14 max-w-3xl sm:mb-16">

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#e85d2a]" />

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6b7651]">
                What matters to us
              </p>
            </div>

            <h2 className="text-5xl leading-[0.95] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
              Simple things,
              <br />
              <span className="italic text-[#e85d2a]">
                done well.
              </span>
            </h2>

          </div>

          <div className="grid items-stretch gap-6 md:grid-cols-3">

            {/* Seasonal */}
            <article
              className="
                group
                flex
                h-full
                flex-col
                rounded-[28px]
                border
                border-[#171412]/8
                bg-white
                p-7
                shadow-[0_12px_45px_rgba(23,20,18,0.06)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#171412]/12
                hover:shadow-[0_18px_50px_rgba(23,20,18,0.10)]
                sm:p-8
              "
            >
              <span
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-[#fce3d5]
                  font-serif
                  text-xl
                  text-[#e85d2a]
                  transition-transform
                  duration-300
                  group-hover:scale-105
                "
              >
                01
              </span>

              <h3 className="mt-8 font-serif text-3xl tracking-[-0.02em]">
                Seasonal
              </h3>

              <p className="mt-4 flex-1 text-sm leading-6 text-[#766e66]">
                Our menus move with the seasons. We keep things fresh, flexible
                and focused on ingredients at their best.
              </p>
            </article>

            {/* Generous */}
            <article
              className="
                group
                flex
                h-full
                flex-col
                rounded-[28px]
                bg-[#e4e8da]
                p-7
                shadow-[0_12px_45px_rgba(23,20,18,0.04)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_18px_50px_rgba(23,20,18,0.08)]
                md:translate-y-8
                sm:p-8
              "
            >
              <span
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-[#fff7ed]
                  font-serif
                  text-xl
                  text-[#6b7651]
                  transition-transform
                  duration-300
                  group-hover:scale-105
                "
              >
                02
              </span>

              <h3 className="mt-8 font-serif text-3xl tracking-[-0.02em]">
                Generous
              </h3>

              <p className="mt-4 flex-1 text-sm leading-6 text-[#766e66]">
                Food should be satisfying and meant to be shared. Expect
                generous plates and flavors that invite another bite.
              </p>
            </article>

            {/* Together */}
            <article
              className="
                group
                flex
                h-full
                flex-col
                rounded-[28px]
                border
                border-[#171412]/8
                bg-white
                p-7
                shadow-[0_12px_45px_rgba(23,20,18,0.06)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#171412]/12
                hover:shadow-[0_18px_50px_rgba(23,20,18,0.10)]
                sm:p-8
              "
            >
              <span
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-[#171412]
                  font-serif
                  text-xl
                  text-white!
                  transition-transform
                  duration-300
                  group-hover:scale-105
                "
              >
                03
              </span>

              <h3 className="mt-8 font-serif text-3xl tracking-[-0.02em]">
                Together
              </h3>

              <p className="mt-4 flex-1 text-sm leading-6 text-[#766e66]">
                The best meals are shared. We create a space where people can
                slow down, connect and enjoy being around the table.
              </p>
            </article>

          </div>
        </Container>
      </section>

      {/* =====================================================
          KITCHEN IMAGE + QUOTE
          ===================================================== */}

      <section className="pb-20 sm:pb-24 lg:pb-32">
        <Container>

          <div
            className="
              grid
              overflow-hidden
              rounded-[30px]
              bg-[#e9d8c5]
              shadow-[0_20px_60px_rgba(23,20,18,0.08)]
              lg:grid-cols-2
            "
          >

            <div className="group overflow-hidden bg-[#d9c5ae]">
              <img
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85"
                alt="Chef preparing food in a restaurant kitchen"
                className="
                  aspect-4/3
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-1000
                  ease-out
                  group-hover:scale-105
                  lg:aspect-auto
                "
              />
            </div>

            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">

              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#e85d2a]" />

                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6b7651]">
                  From our kitchen
                </p>
              </div>

              <blockquote className="mt-6 font-serif text-4xl leading-[1.08] tracking-tight sm:text-5xl">
                “The best meals are
                <span className="italic text-[#e85d2a]">
                  {' '}the ones you remember.
                </span>
                ”
              </blockquote>

              <p className="mt-7 max-w-md text-sm leading-6 text-[#766e66] sm:text-base sm:leading-7">
                We care about the details, but never at the expense of making
                things feel comfortable. Come as you are. Stay as long as you
                like.
              </p>

            </div>

          </div>

        </Container>
      </section>

      {/* =====================================================
          RESERVATION CTA
          ===================================================== */}

      <section className="pb-20 sm:pb-24 lg:pb-32">
        <Container>

          <div
            className="
              rounded-[30px]
              bg-[#171412]
              px-6
              py-14
              text-center
              text-[#fff7ed]
              shadow-[0_20px_60px_rgba(23,20,18,0.12)]
              sm:px-10
              sm:py-16
              lg:px-20
              lg:py-20
            "
          >

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d9dfbd]">
              Come join us
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              There is always room
              <br />
              <span className="italic text-[#e85d2a]">
                at our table.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-[#c8c0b8] sm:text-base sm:leading-7">
              Whether it is dinner for two or a table full of friends, we would
              love to have you with us.
            </p>

            <Link
              to="/reservation"
              className="
                group
                mt-8
                inline-flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-full
                bg-[#e85d2a]
                px-7
                py-4
                text-sm
                font-semibold
                text-[#171412]!
                shadow-[0_10px_25px_rgba(232,93,42,0.14)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#f47b3a]
                hover:shadow-[0_14px_30px_rgba(232,93,42,0.24)]
                sm:w-auto
              "
            >
              <span>Reserve a Table</span>

              <ArrowUpRight
                size={17}
                strokeWidth={2}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </Link>

          </div>

        </Container>
      </section>

    </main>
  )
}

export default About