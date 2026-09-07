import { Link } from 'react-router-dom'
import { ArrowUpRight, MapPin, Phone, Mail } from 'lucide-react'

import { restaurantInfo } from '../../data/restaurantData'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#171412] text-white">
      <div className="mx-auto max-w-350 px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">

        {/* Main Footer Content */}
        <div className="grid gap-12 sm:gap-14 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-10 xl:gap-16">

          {/* Brand */}
          <div className="max-w-md">
            <Link
              to="/"
              className="
                inline-block
                font-serif
                text-3xl
                font-semibold
                tracking-[-0.02em]
                transition-opacity
                duration-300
                hover:opacity-80
              "
            >
              Ember
              <span className="text-[#e85d2a]"> & </span>
              Olive
            </Link>

            <p className="mt-6 max-w-sm text-base leading-7 text-white/60">
              Good food, warm moments, and a little local soul. A neighborhood
              kitchen made for lingering.
            </p>

            <Link
              to="/menu"
              className="
                group
                mt-8
                inline-flex
                items-center
                gap-2
                border-b
                border-white/20
                pb-1.5
                text-sm
                font-semibold
                text-white!
                transition-all
                duration-300
                hover:border-[#e85d2a]
                hover:text-[#f47b3a]!
              "
            >
              <span>Explore our menu</span>

              <ArrowUpRight
                size={16}
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

          {/* Explore */}
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#f47b3a]">
              Explore
            </p>

            <div className="flex flex-col gap-3.5">
              <Link
                to="/"
                className="
                  group
                  w-fit
                  text-sm
                  text-white/65
                  transition-all
                  duration-200
                  hover:translate-x-1
                  hover:text-white
                "
              >
                Home
              </Link>

              <Link
                to="/about"
                className="
                  group
                  w-fit
                  text-sm
                  text-white/65
                  transition-all
                  duration-200
                  hover:translate-x-1
                  hover:text-white
                "
              >
                About
              </Link>

              <Link
                to="/menu"
                className="
                  group
                  w-fit
                  text-sm
                  text-white/65
                  transition-all
                  duration-200
                  hover:translate-x-1
                  hover:text-white
                "
              >
                Menu
              </Link>

              <Link
                to="/contact"
                className="
                  group
                  w-fit
                  text-sm
                  text-white/65
                  transition-all
                  duration-200
                  hover:translate-x-1
                  hover:text-white
                "
              >
                Contact
              </Link>

              <Link
                to="/reservation"
                className="
                  group
                  w-fit
                  text-sm
                  text-white/65
                  transition-all
                  duration-200
                  hover:translate-x-1
                  hover:text-white
                "
              >
                Reservations
              </Link>
            </div>
          </div>

          {/* Visit */}
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#f47b3a]">
              Visit
            </p>

            <div className="flex flex-col gap-5">

              {/* Address */}
              <div className="flex gap-3">
                <MapPin
                  size={18}
                  strokeWidth={1.8}
                  className="mt-0.5 shrink-0 text-[#e85d2a]"
                />

                <p className="text-sm leading-6 text-white/65">
                  {restaurantInfo.address.street}
                  <br />
                  {restaurantInfo.address.city},{' '}
                  {restaurantInfo.address.state}
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone
                  size={18}
                  strokeWidth={1.8}
                  className="shrink-0 text-[#e85d2a]"
                />

                <a
                  href={`tel:${restaurantInfo.phone.replace(/\s/g, '')}`}
                  className="
                    text-sm
                    text-white/65
                    transition-colors
                    duration-200
                    hover:text-white
                  "
                >
                  {restaurantInfo.phone}
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail
                  size={18}
                  strokeWidth={1.8}
                  className="shrink-0 text-[#e85d2a]"
                />

                <a
                  href={`mailto:${restaurantInfo.email}`}
                  className="
                    break-all
                    text-sm
                    text-white/65
                    transition-colors
                    duration-200
                    hover:text-white
                  "
                >
                  {restaurantInfo.email}
                </a>
              </div>

            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#f47b3a]">
              Opening Hours
            </p>

            <div className="space-y-4 text-sm">
              {restaurantInfo.openingHours.map((schedule, index) => (
                <div
                  key={schedule.days}
                  className={`
                    flex
                    items-center
                    justify-between
                    gap-5
                    ${
                      index < restaurantInfo.openingHours.length - 1
                        ? 'border-b border-white/10 pb-3'
                        : ''
                    }
                  `}
                >
                  <span className="text-white/50">
                    {schedule.days}
                  </span>

                  <span className="shrink-0 text-right text-white/80">
                    {schedule.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-14 border-t border-white/10 pt-7 sm:mt-20">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

            <p className="text-xs leading-5 text-white/40">
              © {currentYear} Ember & Olive. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">

              <a
                href="#instagram"
                aria-label="Instagram"
                className="
                  group
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/2
                  text-sm
                  font-bold
                  text-white/55
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#e85d2a]
                  hover:bg-[#e85d2a]
                  hover:text-white
                  hover:shadow-[0_8px_20px_rgba(232,93,42,0.20)]
                "
              >
                <span>ig</span>
              </a>

              <a
                href="#facebook"
                aria-label="Facebook"
                className="
                  group
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/2
                  text-sm
                  font-bold
                  text-white/55
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#e85d2a]
                  hover:bg-[#e85d2a]
                  hover:text-white
                  hover:shadow-[0_8px_20px_rgba(232,93,42,0.20)]
                "
              >
                <span>f</span>
              </a>

            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer