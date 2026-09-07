import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import Container from '../ui/Container'

import { menuItems } from '../../data/menuData'

const featuredDishes = menuItems.slice(0, 3)

function FeaturedMenu() {
  return (
    <section className="bg-[#fff7ed] py-20 sm:py-24 lg:py-32">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#e85d2a]" />

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6b7651]">
                Our Favorites
              </p>
            </div>

            <h2 className="max-w-2xl text-5xl leading-[0.95] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
              Plates made with
              <br />
              <span className="italic text-[#e85d2a]">
                good ingredients.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#766e66] sm:text-lg sm:leading-8">
              A few of the dishes our kitchen loves to make. Seasonal,
              generous and meant to be enjoyed around the table.
            </p>
          </div>

          {/* View Menu */}
          <Link
            to="/menu"
            className="
              group
              flex
              w-fit
              shrink-0
              items-center
              gap-3
              border-b
              border-[#171412]/30
              pb-2
              text-sm
              font-semibold
              text-[#171412]!
              transition-all
              duration-300
              hover:border-[#e85d2a]
              hover:text-[#e85d2a]!
            "
          >
            <span>View full menu</span>

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

        {/* Dish Cards */}
        <div className="mt-12 grid items-stretch gap-6 sm:mt-14 md:grid-cols-2 lg:grid-cols-3">
          {featuredDishes.map((dish) => (
            <article
              key={dish.name}
              className="
                group
                flex
                h-full
                flex-col
                overflow-hidden
                rounded-[28px]
                bg-white
                shadow-[0_12px_45px_rgba(23,20,18,0.07)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_18px_50px_rgba(23,20,18,0.11)]
              "
            >
              {/* Image */}
              <div className="relative aspect-4/3 overflow-hidden bg-[#e9d8c5]">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-105
                  "
                />

                {/* Image Overlay */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-linear-to-t
                    from-[#171412]/10
                    via-transparent
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* Category */}
                <div className="absolute left-4 top-4">
                  <span
                    className="
                      inline-flex
                      rounded-full
                      bg-[#fff7ed]/95
                      px-4
                      py-2
                      text-xs
                      font-semibold
                      text-[#171412]
                      shadow-sm
                      backdrop-blur-sm
                      transition-all
                      duration-300
                      group-hover:bg-white
                    "
                  >
                    {dish.category}
                  </span>
                </div>

                {/* Arrow */}
                <div
                  className="
                    absolute
                    bottom-4
                    right-4
                    flex
                    h-11
                    w-11
                    translate-y-2
                    items-center
                    justify-center
                    rounded-full
                    bg-[#171412]
                    text-white!
                    opacity-0
                    shadow-lg
                    transition-all
                    duration-300
                    group-hover:translate-y-0
                    group-hover:opacity-100
                  "
                >
                  <ArrowUpRight
                    size={17}
                    strokeWidth={2}
                    className="transition-transform duration-300 group-hover:rotate-3"
                  />
                </div>
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex flex-1 items-start justify-between gap-5">
                  <div className="min-w-0">
                    <h3 className="font-serif text-2xl leading-tight tracking-[-0.02em] sm:text-3xl">
                      {dish.name}
                    </h3>

                    <p className="mt-3 max-w-sm text-sm leading-6 text-[#766e66]">
                      {dish.description}
                    </p>
                  </div>

                  <p className="shrink-0 pt-1 text-sm font-semibold text-[#e85d2a]">
                    {dish.price}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="mt-16 border-t border-[#171412]/10 pt-7 sm:mt-24 sm:flex sm:items-center sm:justify-between">
          <p className="text-sm text-[#766e66]">
            Menus change with the seasons.
          </p>

          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#6b7651] sm:mt-0">
            Fresh · Local · Made with care
          </p>
        </div>
      </Container>
    </section>
  )
}

export default FeaturedMenu