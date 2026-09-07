import Container from "../ui/Container";
import Button from "../ui/Button";
import heroFood from "../../assets/images/hero-food.jpg";
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="overflow-hidden bg-[#fff7ed]">
      <Container className="pb-20 pt-10 sm:pb-24 sm:pt-14 lg:pb-28 lg:pt-20">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#e85d2a]" />

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6b7651]">
                Local Kitchen · Est. 2021
              </p>
            </div>

            {/* Main Heading */}
            <h1 className="max-w-2xl text-[3.5rem] leading-[0.92] tracking-[-0.035em] sm:text-7xl lg:text-8xl">
              Food made
              <br />
              <span className="italic text-[#e85d2a]">for</span>
              <br />
              lingering.
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-lg text-base leading-7 text-[#766e66] sm:mt-8 sm:text-lg sm:leading-8">
              Seasonal ingredients, generous plates, and warm moments around the
              table. Welcome to your neighborhood kitchen.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:gap-4">
              <Button
                to="/menu"
                className="
    group
    shadow-[0_10px_25px_rgba(23,20,18,0.10)]
    hover:shadow-[0_14px_30px_rgba(232,93,42,0.22)]
  "
              >
                {" "}
                <span>Explore the Menu</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  {" "}
                  →
                </span>
              </Button>

              <Link
                 to="/reservation"
                className="
                    group
                    inline-flex
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#171412]/20
                    bg-white/60
                    px-7
                    py-3.5
                    text-sm
                    font-semibold
                    text-[#171412]!
                    shadow-[0_8px_20px_rgba(23,20,18,0.04)]
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-[#e85d2a]
                    hover:bg-white
                    hover:text-[#e85d2a]!
                    hover:shadow-[0_12px_25px_rgba(232,93,42,0.12)]
                "
              >
                <span>Reserve a Table</span>

                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>

            {/* Small Information */}
            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-4 border-t border-[#171412]/10 pt-6 sm:mt-10 sm:gap-x-8 sm:gap-y-3">
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-[#766e66]">
                  Open
                </p>

                <p className="mt-1 text-sm font-semibold">Tue – Sun</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-[#766e66]">
                  Kitchen
                </p>

                <p className="mt-1 text-sm font-semibold">Seasonal & Local</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-[#766e66]">
                  Experience
                </p>

                <p className="mt-1 text-sm font-semibold">
                  Dine · Gather · Enjoy
                </p>
              </div>
            </div>
          </div>

          {/* Food Image */}
          <div className="order-1 px-2 sm:px-0 lg:order-2">
            <div className="group relative">
              {/* Decorative Orange Shape */}
              <div
                className="
                  absolute
                  -right-5
                  -top-5
                  h-24
                  w-24
                  rounded-full
                  bg-[#e85d2a]
                  opacity-90
                  sm:-right-7
                  sm:-top-7
                  sm:h-32
                  sm:w-32
                "
              />

              {/* Image */}
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-4xl
                  bg-[#e9d8c5]
                  shadow-[0_25px_70px_rgba(23,20,18,0.16)]
                  sm:rounded-[40px]
                "
              >
                <img
                  src={heroFood}
                  alt="Fresh seasonal food served at Ember & Olive"
                  className="
                    aspect-4/4.5
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                    sm:aspect-5/6
                    lg:aspect-4/5
                  "
                />

                {/* Image Overlay */}
                <div className="absolute inset-x-0 top-0 bg-linear-to-b from-[#171412]/60 to-transparent p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                        From our kitchen
                      </p>

                      <p className="mt-1 font-serif text-2xl text-white sm:text-3xl">
                        Made to be shared.
                      </p>
                    </div>

                    <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#fff7ed] text-[#171412] sm:flex">
                      ↗
                    </span>
                  </div>
                </div>
              </div>

              {/* Small Badge */}
              <div
                className="
                  absolute
                  -bottom-8
                  -left-3
                  rounded-2xl
                  bg-[#171412]
                  px-5
                  py-4
                  text-white
                  shadow-xl
                  sm:-bottom-6
                  sm:-left-6
                "
              >
                <p className="text-xs uppercase tracking-[0.15em] text-white/50">
                  Good food
                </p>

                <p className="mt-1 font-serif text-lg">Warm moments.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
