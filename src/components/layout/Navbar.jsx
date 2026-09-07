import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const navLinkClass = ({ isActive }) => `
    group
    relative
    py-2
    text-sm
    font-medium
    transition-colors
    duration-200
    ${
      isActive
        ? 'text-[#e85d2a]'
        : 'text-[#171412] hover:text-[#e85d2a]'
    }
  `

  return (
    <header className="relative z-50 w-full">
      <nav className="mx-auto flex max-w-350 items-center justify-between px-6 py-5 sm:px-8 lg:px-12 xl:px-16">

        {/* =================================================
            LOGO
            ================================================= */}

        <NavLink
          to="/"
          onClick={closeMenu}
          className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl"
          aria-label="Ember & Olive home"
        >
          Ember
          <span className="text-[#e85d2a]"> & </span>
          Olive
        </NavLink>


        {/* =================================================
            DESKTOP NAVIGATION
            ================================================= */}

        <div className="hidden items-center gap-8 lg:flex">

          <NavLink
            to="/"
            end
            className={navLinkClass}
          >
            {({ isActive }) => (
              <>
                Home

                <span
                  className={`
                    absolute
                    bottom-0
                    left-0
                    h-0.5
                    bg-[#e85d2a]
                    transition-all
                    duration-300
                    ease-out
                    ${
                      isActive
                        ? 'w-full'
                        : 'w-0 group-hover:w-full'
                    }
                  `}
                />
              </>
            )}
          </NavLink>


          <NavLink
            to="/about"
            className={navLinkClass}
          >
            {({ isActive }) => (
              <>
                About

                <span
                  className={`
                    absolute
                    bottom-0
                    left-0
                    h-0.5
                    bg-[#e85d2a]
                    transition-all
                    duration-300
                    ease-out
                    ${
                      isActive
                        ? 'w-full'
                        : 'w-0 group-hover:w-full'
                    }
                  `}
                />
              </>
            )}
          </NavLink>


          <NavLink
            to="/menu"
            className={navLinkClass}
          >
            {({ isActive }) => (
              <>
                Menu

                <span
                  className={`
                    absolute
                    bottom-0
                    left-0
                    h-0.5
                    bg-[#e85d2a]
                    transition-all
                    duration-300
                    ease-out
                    ${
                      isActive
                        ? 'w-full'
                        : 'w-0 group-hover:w-full'
                    }
                  `}
                />
              </>
            )}
          </NavLink>


          <NavLink
            to="/contact"
            className={navLinkClass}
          >
            {({ isActive }) => (
              <>
                Contact

                <span
                  className={`
                    absolute
                    bottom-0
                    left-0
                    h-0.5
                    bg-[#e85d2a]
                    transition-all
                    duration-300
                    ease-out
                    ${
                      isActive
                        ? 'w-full'
                        : 'w-0 group-hover:w-full'
                    }
                  `}
                />
              </>
            )}
          </NavLink>

        </div>


        {/* =================================================
            RESERVATION BUTTON
            ================================================= */}

        <NavLink
          to="/reservation"
          className="
            hidden
            items-center
            gap-2
            rounded-full
            bg-[#171412]
            px-6
            py-3
            text-sm
            font-semibold
            text-white!
            shadow-[0_8px_25px_rgba(23,20,18,0.12)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-[#e85d2a]
            hover:shadow-[0_12px_30px_rgba(232,93,42,0.25)]
            lg:inline-flex
          "
        >
          <span>Reserve a Table</span>

          <ArrowUpRight
            size={16}
            strokeWidth={2}
            className="transition-transform duration-300 hover:rotate-45"
          />
        </NavLink>


        {/* =================================================
            MOBILE MENU BUTTON
            ================================================= */}

        <button
          type="button"
          onClick={() => setIsMenuOpen((previous) => !previous)}
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            bg-[#171412]
            text-white!
            transition-all
            duration-200
            hover:bg-[#e85d2a]
            lg:hidden
          "
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <X size={21} strokeWidth={2} />
          ) : (
            <Menu size={21} strokeWidth={2} />
          )}
        </button>

      </nav>


      {/* =================================================
          MOBILE MENU
          ================================================= */}

      <div
        className={`
          absolute
          left-4
          right-4
          top-19
          overflow-hidden
          rounded-3xl
          bg-[#171412]
          shadow-2xl
          transition-all
          duration-300
          lg:hidden
          ${
            isMenuOpen
              ? 'visible translate-y-0 opacity-100'
              : 'invisible -translate-y-3 opacity-0'
          }
        `}
      >

        <div className="p-6">

          <div className="flex flex-col">

            <NavLink
              to="/"
              end
              onClick={closeMenu}
              className={({ isActive }) => `
                border-b
                border-white/10
                py-4
                text-lg
                font-medium
                transition-colors
                ${
                  isActive
                    ? 'text-[#f47b3a]'
                    : 'text-white hover:text-[#f47b3a]'
                }
              `}
            >
              Home
            </NavLink>


            <NavLink
              to="/about"
              onClick={closeMenu}
              className={({ isActive }) => `
                border-b
                border-white/10
                py-4
                text-lg
                font-medium
                transition-colors
                ${
                  isActive
                    ? 'text-[#f47b3a]'
                    : 'text-white hover:text-[#f47b3a]'
                }
              `}
            >
              About
            </NavLink>


            <NavLink
              to="/menu"
              onClick={closeMenu}
              className={({ isActive }) => `
                border-b
                border-white/10
                py-4
                text-lg
                font-medium
                transition-colors
                ${
                  isActive
                    ? 'text-[#f47b3a]'
                    : 'text-white hover:text-[#f47b3a]'
                }
              `}
            >
              Menu
            </NavLink>


            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={({ isActive }) => `
                py-4
                text-lg
                font-medium
                transition-colors
                ${
                  isActive
                    ? 'text-[#f47b3a]'
                    : 'text-white hover:text-[#f47b3a]'
                }
              `}
            >
              Contact
            </NavLink>

          </div>


          <NavLink
            to="/reservation"
            onClick={closeMenu}
            className="
              mt-5
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-full
              bg-[#e85d2a]
              px-5
              py-3.5
              text-sm
              font-semibold
              text-white!
              transition-all
              duration-300
              hover:bg-[#f47b3a]
              hover:shadow-[0_8px_25px_rgba(232,93,42,0.25)]
            "
          >
            Reserve a Table

            <ArrowUpRight
              size={17}
              strokeWidth={2}
            />
          </NavLink>

        </div>
      </div>

    </header>
  )
}

export default Navbar