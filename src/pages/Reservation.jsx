import { useState } from 'react'
import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Users,
  Check,
} from 'lucide-react'

import Container from '../components/ui/Container'

import { restaurantInfo } from '../data/restaurantData'

function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    requests: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="bg-[#fff7ed] text-[#171412]">

      {/* =====================================================
          PAGE HEADER
          ===================================================== */}

      <section className="pb-16 pt-24 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">

            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#e85d2a]" />

                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6b7651]">
                  Your Table Awaits
                </p>
              </div>

              <h1 className="max-w-4xl text-[3.5rem] leading-[0.92] tracking-[-0.035em] sm:text-7xl lg:text-8xl">
                Make it
                <br />
                <span className="italic text-[#e85d2a]">
                  a gathering.
                </span>
              </h1>
            </div>

            <p className="max-w-md text-base leading-7 text-[#766e66] sm:text-lg sm:leading-8 lg:justify-self-end">
              Choose a date, time and table size. We will take
              care of the rest.
            </p>

          </div>
        </Container>
      </section>

      {/* =====================================================
          RESERVATION AREA
          ===================================================== */}

      <section className="pb-20 sm:pb-24 lg:pb-32">
        <Container>

          <div
            className="
              grid
              overflow-hidden
              rounded-[30px]
              bg-[#171412]
              shadow-[0_25px_70px_rgba(23,20,18,0.12)]
              lg:grid-cols-[0.75fr_1.25fr]
            "
          >

            {/* =================================================
                LEFT INFORMATION
                ================================================= */}

            <div
              className="
                flex
                flex-col
                justify-between
                p-7
                text-[#fff7ed]
                sm:p-10
                lg:p-12
              "
            >

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f47b3a]">
                  Ember & Olive
                </p>

                <h2 className="mt-5 max-w-md font-serif text-4xl leading-[1.02] tracking-[-0.02em] sm:text-5xl">
                  Good food.
                  <br />
                  Good company.
                </h2>

                <p className="mt-6 max-w-sm text-sm leading-6 text-white/60 sm:text-base sm:leading-7">
                  We recommend booking ahead for dinner and
                  weekends. For larger groups, please contact
                  us directly.
                </p>
              </div>

              {/* Details */}
              <div className="mt-12 space-y-7">

                {/* Opening Days */}
                <div className="flex gap-4">
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-white/5
                    "
                  >
                    <CalendarDays
                      size={19}
                      strokeWidth={1.8}
                      className="text-[#e85d2a]"
                    />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-white/40">
                      Opening days
                    </p>

                    <p className="mt-1 text-sm text-white/80">
                      {restaurantInfo.openingDays}
                    </p>
                  </div>
                </div>

                {/* Dinner */}
                <div className="flex gap-4">
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-white/5
                    "
                  >
                    <Clock3
                      size={19}
                      strokeWidth={1.8}
                      className="text-[#e85d2a]"
                    />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-white/40">
                      Dinner
                    </p>

                    <p className="mt-1 text-sm text-white/80">
                      {restaurantInfo.dinnerHours}
                    </p>
                  </div>
                </div>

                {/* Groups */}
                <div className="flex gap-4">
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-white/5
                    "
                  >
                    <Users
                      size={19}
                      strokeWidth={1.8}
                      className="text-[#e85d2a]"
                    />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-white/40">
                      Groups
                    </p>

                    <p className="mt-1 text-sm text-white/80">
                      {restaurantInfo.groupSize}
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* =================================================
                FORM
                ================================================= */}

            <div className="bg-white p-6 sm:p-10 lg:p-12">

              {submitted ? (

                /* =================================================
                   SUCCESS STATE
                   ================================================= */

                <div className="flex min-h-125 flex-col items-center justify-center text-center">

                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-full
                      bg-[#fce3d5]
                      text-[#e85d2a]
                      shadow-sm
                    "
                  >
                    <Check
                      size={27}
                      strokeWidth={2.5}
                    />
                  </div>

                  <h2 className="mt-6 font-serif text-4xl tracking-[-0.02em] sm:text-5xl">
                    Request received.
                  </h2>

                  <p className="mt-4 max-w-md text-sm leading-6 text-[#766e66] sm:text-base sm:leading-7">
                    Thank you, {formData.name || 'guest'}.
                    We have received your reservation request.
                    Our team will confirm the details with you.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="
                      mt-7
                      rounded-full
                      bg-[#171412]
                      px-6
                      py-3
                      text-sm
                      font-semibold
                      text-white!
                      shadow-[0_8px_20px_rgba(23,20,18,0.10)]
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:bg-[#e85d2a]
                    "
                  >
                    Make another request
                  </button>

                </div>

              ) : (

                /* =================================================
                   RESERVATION FORM
                   ================================================= */

                <form onSubmit={handleSubmit}>

                  <div className="grid gap-6 sm:grid-cols-2">

                    {/* Name */}
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="name"
                        className="
                          mb-2
                          block
                          text-xs
                          font-semibold
                          uppercase
                          tracking-[0.15em]
                        "
                      >
                        Name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="
                          w-full
                          rounded-xl
                          border
                          border-[#171412]/15
                          bg-[#fffaf5]
                          px-4
                          py-3.5
                          text-sm
                          text-[#171412]
                          placeholder:text-[#a39a91]
                          outline-none
                          transition-all
                          duration-200
                          focus:border-[#e85d2a]
                          focus:bg-white
                          focus:ring-4
                          focus:ring-[#e85d2a]/10
                        "
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="
                          mb-2
                          block
                          text-xs
                          font-semibold
                          uppercase
                          tracking-[0.15em]
                        "
                      >
                        Email
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                        className="
                          w-full
                          rounded-xl
                          border
                          border-[#171412]/15
                          bg-[#fffaf5]
                          px-4
                          py-3.5
                          text-sm
                          text-[#171412]
                          placeholder:text-[#a39a91]
                          outline-none
                          transition-all
                          duration-200
                          focus:border-[#e85d2a]
                          focus:bg-white
                          focus:ring-4
                          focus:ring-[#e85d2a]/10
                        "
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="
                          mb-2
                          block
                          text-xs
                          font-semibold
                          uppercase
                          tracking-[0.15em]
                        "
                      >
                        Phone
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        required
                        className="
                          w-full
                          rounded-xl
                          border
                          border-[#171412]/15
                          bg-[#fffaf5]
                          px-4
                          py-3.5
                          text-sm
                          text-[#171412]
                          placeholder:text-[#a39a91]
                          outline-none
                          transition-all
                          duration-200
                          focus:border-[#e85d2a]
                          focus:bg-white
                          focus:ring-4
                          focus:ring-[#e85d2a]/10
                        "
                      />
                    </div>

                    {/* Date */}
                    <div>
                      <label
                        htmlFor="date"
                        className="
                          mb-2
                          block
                          text-xs
                          font-semibold
                          uppercase
                          tracking-[0.15em]
                        "
                      >
                        Date
                      </label>

                      <input
                        id="date"
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="
                          w-full
                          rounded-xl
                          border
                          border-[#171412]/15
                          bg-[#fffaf5]
                          px-4
                          py-3.5
                          text-sm
                          text-[#171412]
                          outline-none
                          transition-all
                          duration-200
                          focus:border-[#e85d2a]
                          focus:bg-white
                          focus:ring-4
                          focus:ring-[#e85d2a]/10
                        "
                      />
                    </div>

                    {/* Time */}
                    <div>
                      <label
                        htmlFor="time"
                        className="
                          mb-2
                          block
                          text-xs
                          font-semibold
                          uppercase
                          tracking-[0.15em]
                        "
                      >
                        Time
                      </label>

                      <input
                        id="time"
                        name="time"
                        type="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="
                          w-full
                          rounded-xl
                          border
                          border-[#171412]/15
                          bg-[#fffaf5]
                          px-4
                          py-3.5
                          text-sm
                          text-[#171412]
                          outline-none
                          transition-all
                          duration-200
                          focus:border-[#e85d2a]
                          focus:bg-white
                          focus:ring-4
                          focus:ring-[#e85d2a]/10
                        "
                      />
                    </div>

                    {/* Guests */}
                    <div>
                      <label
                        htmlFor="guests"
                        className="
                          mb-2
                          block
                          text-xs
                          font-semibold
                          uppercase
                          tracking-[0.15em]
                        "
                      >
                        Guests
                      </label>

                      <select
                        id="guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className="
                          w-full
                          rounded-xl
                          border
                          border-[#171412]/15
                          bg-[#fffaf5]
                          px-4
                          py-3.5
                          text-sm
                          text-[#171412]
                          outline-none
                          transition-all
                          duration-200
                          focus:border-[#e85d2a]
                          focus:bg-white
                          focus:ring-4
                          focus:ring-[#e85d2a]/10
                        "
                      >
                        <option value="1">1 guest</option>
                        <option value="2">2 guests</option>
                        <option value="3">3 guests</option>
                        <option value="4">4 guests</option>
                        <option value="5">5 guests</option>
                        <option value="6">6 guests</option>
                        <option value="7">7 guests</option>
                        <option value="8">8 guests</option>
                        <option value="9">9 guests</option>
                        <option value="10">10 guests</option>
                      </select>
                    </div>

                    {/* Special Requests */}
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="requests"
                        className="
                          mb-2
                          block
                          text-xs
                          font-semibold
                          uppercase
                          tracking-[0.15em]
                        "
                      >
                        Special Requests
                      </label>

                      <textarea
                        id="requests"
                        name="requests"
                        value={formData.requests}
                        onChange={handleChange}
                        placeholder="Birthday, dietary requirements, seating preference..."
                        rows="4"
                        className="
                          w-full
                          resize-none
                          rounded-xl
                          border
                          border-[#171412]/15
                          bg-[#fffaf5]
                          px-4
                          py-3.5
                          text-sm
                          text-[#171412]
                          placeholder:text-[#a39a91]
                          outline-none
                          transition-all
                          duration-200
                          focus:border-[#e85d2a]
                          focus:bg-white
                          focus:ring-4
                          focus:ring-[#e85d2a]/10
                        "
                      />
                    </div>

                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="
                      group
                      mt-7
                      inline-flex
                      w-full
                      items-center
                      justify-center
                      gap-3
                      rounded-full
                      bg-[#171412]
                      px-7
                      py-4
                      text-sm
                      font-semibold
                      text-white!
                      shadow-[0_10px_25px_rgba(23,20,18,0.10)]
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:bg-[#e85d2a]
                      hover:shadow-[0_14px_30px_rgba(232,93,42,0.22)]
                    "
                  >
                    <span>Request a Reservation</span>

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
                  </button>

                  <p className="mt-4 text-center text-xs leading-5 text-[#8a8178]">
                    This is a reservation request. Our team will
                    confirm availability with you.
                  </p>

                </form>
              )}

            </div>

          </div>

        </Container>
      </section>

    </main>
  )
}

export default Reservation