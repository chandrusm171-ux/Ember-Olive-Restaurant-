import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import Container from '../ui/Container'

function AboutSection() {
  return (
    <section className="bg-[#171412] py-20 text-[#fff7ed] sm:py-24 lg:py-32">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* Image */}
          <div className="relative order-2 px-2 sm:px-0 lg:order-1">
            <div className="group overflow-hidden rounded-[30px] bg-[#3a2117] shadow-[0_25px_70px_rgba(0,0,0,0.20)]">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85"
                alt="Ember & Olive restaurant table"
                className="
                  aspect-4/5
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-105
                "
              />
            </div>

            {/* Floating Card */}
            <div
              className="
                absolute
                -bottom-6
                right-3
                w-47.5
                rounded-[22px]
                bg-[#e85d2a]
                p-5
                text-[#171412]
                shadow-[0_18px_45px_rgba(0,0,0,0.25)]
                transition-transform
                duration-300
                hover:-translate-y-1
                sm:right-8
                sm:w-52.5
              "
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em]">
                Since 2021
              </p>

              <p className="mt-3 font-serif text-2xl leading-tight tracking-[-0.02em]">
                Made for
                <br />
                gathering.
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">

            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#e85d2a]" />

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d9dfbd]">
                Our Story
              </p>
            </div>

            {/* Heading */}
            <h2 className="max-w-xl text-5xl leading-[0.95] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
              A neighborhood
              <br />
              <span className="italic text-[#e85d2a]">
                kitchen.
              </span>
            </h2>

            {/* Description */}
            <div className="mt-8 max-w-lg space-y-5 text-base leading-7 text-[#c8c0b8] sm:mt-9 sm:text-lg sm:leading-8">
              <p>
                Ember & Olive started with a simple idea:
                good food should make people slow down,
                stay longer and enjoy the moment.
              </p>

              <p>
                Our kitchen follows the seasons, working with
                fresh ingredients and familiar flavors to create
                plates that feel both comforting and unexpected.
              </p>
            </div>

            {/* Link */}
            <Link
              to="/about"
              className="
                group
                mt-9
                inline-flex
                items-center
                gap-3
                border-b
                border-[#fff7ed]/40
                pb-2
                text-sm
                font-semibold
                text-[#fff7ed]!
                transition-all
                duration-300
                hover:border-[#e85d2a]
                hover:text-[#e85d2a]!
              "
            >
              <span>Discover our story</span>

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

            {/* Restaurant Details */}
            <div className="mt-12 grid max-w-lg grid-cols-2 gap-x-6 gap-y-6 border-t border-white/15 pt-7 sm:grid-cols-3 sm:gap-8">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[#8e887f]">
                  Open
                </p>

                <p className="mt-2 text-sm font-medium">
                  Tue – Sun
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[#8e887f]">
                  Kitchen
                </p>

                <p className="mt-2 text-sm font-medium">
                  Seasonal
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[#8e887f]">
                  Experience
                </p>

                <p className="mt-2 text-sm font-medium">
                  Dine · Gather
                </p>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  )
}

export default AboutSection