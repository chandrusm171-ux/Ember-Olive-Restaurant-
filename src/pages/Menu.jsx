import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import Container from '../components/ui/Container'
import { menuCategories, menuItems } from '../data/menuData'


function Menu() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredItems =
    activeCategory === 'All'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory)

  return (
    <main className="min-h-screen bg-[#fff7ed] text-[#171412]">

      {/* Page Header */}
      <section className="pb-16 pt-28 sm:pb-20 sm:pt-36 lg:pb-24 lg:pt-40">
        <Container>

          <div className="max-w-4xl">

            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#e85d2a]" />

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6b7651]">
                From Our Kitchen
              </p>
            </div>

            <h1 className="text-6xl leading-[0.9] sm:text-7xl lg:text-8xl">
              Good food,
              <br />
              <span className="italic text-[#e85d2a]">
                made slowly.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-[#766e66] sm:text-lg">
              Seasonal ingredients, generous plates and familiar
              flavors. Explore what our kitchen is serving today.
            </p>

          </div>

        </Container>
      </section>


      {/* Category Filter */}
      <section className="border-y border-[#171412]/10">
        <Container>

          <div className="flex gap-2 overflow-x-auto py-4">

            {menuCategories.map((category) => {

              const isActive = activeCategory === category

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`
                    shrink-0
                    rounded-full
                    px-5
                    py-2.5
                    text-sm
                    font-medium
                    transition-all
                    duration-200
                    ${
                      isActive
                        ? 'bg-[#171412] text-white'
                        : 'bg-transparent text-[#766e66] hover:bg-[#171412]/5 hover:text-[#171412]'
                    }
                  `}
                >
                  {category}
                </button>
              )
            })}

          </div>

        </Container>
      </section>


      {/* Menu Grid */}
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {filteredItems.map((item) => (

              <article
                key={item.name}
                className="
                  group
                  overflow-hidden
                  rounded-[26px]
                  bg-white
                  shadow-[0_12px_45px_rgba(23,20,18,0.06)]
                "
              >

                {/* Image */}
                <div className="relative overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="
                      aspect-4/3
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-[#fff7ed]/95 px-4 py-2 text-xs font-semibold backdrop-blur-sm">
                      {item.category}
                    </span>
                  </div>

                  <div
                    className="
                      absolute
                      bottom-4
                      right-4
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-[#171412]
                      text-white
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:opacity-100
                    "
                  >
                    <ArrowUpRight size={16} />
                  </div>

                </div>


                {/* Details */}
                <div className="p-6">

                  <div className="flex items-start justify-between gap-4">

                    <h2 className="font-serif text-2xl leading-tight">
                      {item.name}
                    </h2>

                    <span className="shrink-0 text-sm font-semibold text-[#e85d2a]">
                      {item.price}
                    </span>

                  </div>

                  <p className="mt-3 text-sm leading-6 text-[#766e66]">
                    {item.description}
                  </p>

                </div>

              </article>

            ))}

          </div>

        </Container>
      </section>


      {/* Reservation CTA */}
      <section className="pb-20 sm:pb-24 lg:pb-32">
        <Container>

          <div className="rounded-[30px] bg-[#171412] px-6 py-12 text-center text-[#fff7ed] sm:px-10 sm:py-16 lg:px-20 lg:py-20">

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d9dfbd]">
              Hungry already?
            </p>

            <h2 className="mt-5 text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Your table is
              <span className="italic text-[#e85d2a]">
                {' '}waiting.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-[#c8c0b8] sm:text-base">
              Come share a meal with us. We would love to have
              you at the table.
            </p>

            <a
              href="/reservation"
              className="
                mt-8
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-[#e85d2a]
                px-7
                py-4
                text-sm
                font-semibold
                text-[#171412]
                transition-all
                duration-300
                hover:-translate-y-1
              "
            >
              Reserve a Table
              <ArrowUpRight size={17} />
            </a>

          </div>

        </Container>
      </section>

    </main>
  )
}

export default Menu