import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import Container from '../ui/Container'

function ExperienceSection() {
  return (
    <section className="bg-[#fff7ed] py-20 sm:py-24 lg:py-32">
      <Container>

        {/* Main Image Card */}
        <div className="group relative overflow-hidden rounded-[30px] bg-[#171412] shadow-[0_25px_70px_rgba(23,20,18,0.12)]">

          <img
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1400&q=85"
            alt="Beautifully prepared restaurant food"
            className="
              h-130
              w-full
              object-cover
              opacity-75
              transition-transform
              duration-1000
              ease-out
              group-hover:scale-105
              sm:h-150
              lg:h-170
            "
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-[#171412]/40 transition-colors duration-500 group-hover:bg-[#171412]/35" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-10 lg:p-14">

            {/* Top Label */}
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#e85d2a]" />

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/90">
                The Ember & Olive Experience
              </p>
            </div>

            {/* Bottom Content */}
            <div className="max-w-3xl">

              <h2 className="text-5xl leading-[0.92] tracking-[-0.035em] text-white sm:text-6xl lg:text-8xl">
                Come hungry.
                <br />
                <span className="italic text-[#e85d2a]">
                  Leave happy.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-white/80 sm:mt-7 sm:text-lg sm:leading-8">
                Settle in, share a plate and let the evening take
                its time. Good food tastes better when there is
                nowhere else you need to be.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">

                {/* Reservation */}
                <Link
                  to="/reservation"
                  className="
                    group/button
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
                    shadow-[0_10px_25px_rgba(232,93,42,0.18)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[#f47b3a]
                    hover:shadow-[0_14px_30px_rgba(232,93,42,0.28)]
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
                      group-hover/button:translate-x-1
                      group-hover/button:-translate-y-1
                    "
                  />
                </Link>

                {/* Menu */}
                <Link
                  to="/menu"
                  className="
                    group/button
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    border
                    border-white/40
                    bg-white/10
                    px-7
                    py-4
                    text-sm
                    font-semibold
                    text-white!
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-white
                    hover:bg-white
                    hover:text-[#171412]!
                    hover:shadow-[0_12px_30px_rgba(255,255,255,0.12)]
                    sm:w-auto
                  "
                >
                  <span>Explore the Menu</span>

                  <ArrowUpRight
                    size={17}
                    strokeWidth={2}
                    className="
                      transition-transform
                      duration-300
                      group-hover/button:translate-x-1
                      group-hover/button:-translate-y-1
                    "
                  />
                </Link>

              </div>
            </div>
          </div>
        </div>

        {/* Small Information Row */}
        <div className="grid gap-7 border-b border-[#171412]/10 py-9 sm:grid-cols-3 sm:gap-8 sm:py-10">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6b7651]">
              Seasonal
            </p>

            <p className="mt-2 text-sm leading-6 text-[#766e66]">
              Ingredients that follow the season.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6b7651]">
              Local
            </p>

            <p className="mt-2 text-sm leading-6 text-[#766e66]">
              Sourced with our neighborhood in mind.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6b7651]">
              Together
            </p>

            <p className="mt-2 text-sm leading-6 text-[#766e66]">
              Food made for sharing and lingering.
            </p>
          </div>

        </div>
      </Container>
    </section>
  )
}

export default ExperienceSection