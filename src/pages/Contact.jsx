import { useState } from 'react'
import {
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  Clock3,
  Check,
} from 'lucide-react'
import { Link } from 'react-router-dom'

import Container from '../components/ui/Container'

import { restaurantInfo } from '../data/restaurantData'

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="bg-[#fff7ed] text-[#171412]">

      {/* =====================================================
          PAGE INTRO
          ===================================================== */}

      <section className="pb-16 pt-24 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">

            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#e85d2a]" />

                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6b7651]">
                  Get in Touch
                </p>
              </div>

              <h1 className="max-w-4xl text-[3.5rem] leading-[0.92] tracking-[-0.035em] sm:text-7xl lg:text-8xl">
                Come say
                <br />
                <span className="italic text-[#e85d2a]">
                  hello.
                </span>
              </h1>
            </div>

            <p className="max-w-md text-base leading-7 text-[#766e66] sm:text-lg sm:leading-8 lg:justify-self-end">
              Questions, celebrations, special requests or just
              want to say hello? We would love to hear from you.
            </p>

          </div>
        </Container>
      </section>

      {/* =====================================================
          CONTACT DETAILS
          ===================================================== */}

      <section className="pb-20 sm:pb-24 lg:pb-32">
        <Container>
          <div className="grid items-stretch gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">

            {/* Address */}
            <div
              className="
                group
                flex
                h-full
                flex-col
                rounded-[26px]
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
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-[#fce3d5]
                  text-[#e85d2a]
                  transition-transform
                  duration-300
                  group-hover:scale-105
                "
              >
                <MapPin size={20} strokeWidth={1.9} />
              </div>

              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-[#766e66]">
                Visit
              </p>

              <h2 className="mt-2 font-serif text-2xl tracking-[-0.02em]">
                Find us
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#766e66]">
                {restaurantInfo.address.street}
                <br />
                {restaurantInfo.address.city}, {restaurantInfo.address.state}
              </p>
            </div>

            {/* Phone */}
            <div
              className="
                group
                flex
                h-full
                flex-col
                rounded-[26px]
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
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-[#e4e8da]
                  text-[#6b7651]
                  transition-transform
                  duration-300
                  group-hover:scale-105
                "
              >
                <Phone size={20} strokeWidth={1.9} />
              </div>

              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-[#766e66]">
                Call
              </p>

              <h2 className="mt-2 font-serif text-2xl tracking-[-0.02em]">
                Talk to us
              </h2>

              <a
                href={`tel:${restaurantInfo.phone.replace(/\s/g, '')}`}
                className="
                  mt-3
                  block
                  w-fit
                  text-sm
                  text-[#766e66]
                  transition-colors
                  duration-200
                  hover:text-[#e85d2a]
                "
              >
                {restaurantInfo.phone}
              </a>
            </div>

            {/* Email */}
            <div
              className="
                group
                flex
                h-full
                flex-col
                rounded-[26px]
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
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-[#fce3d5]
                  text-[#e85d2a]
                  transition-transform
                  duration-300
                  group-hover:scale-105
                "
              >
                <Mail size={20} strokeWidth={1.9} />
              </div>

              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-[#766e66]">
                Email
              </p>

              <h2 className="mt-2 font-serif text-2xl tracking-[-0.02em]">
                Write to us
              </h2>

              <a
                href={`mailto:${restaurantInfo.email}`}
                className="
                  mt-3
                  block
                  w-fit
                  break-all
                  text-sm
                  text-[#766e66]
                  transition-colors
                  duration-200
                  hover:text-[#e85d2a]
                "
              >
                {restaurantInfo.email}
              </a>
            </div>

            {/* Hours */}
            <div
              className="
                group
                flex
                h-full
                flex-col
                rounded-[26px]
                bg-[#171412]
                p-7
                text-[#fff7ed]
                shadow-[0_12px_45px_rgba(23,20,18,0.10)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_18px_50px_rgba(23,20,18,0.16)]
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-[#e85d2a]
                  text-[#171412]
                  transition-transform
                  duration-300
                  group-hover:scale-105
                "
              >
                <Clock3 size={20} strokeWidth={1.9} />
              </div>

              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
                Opening Hours
              </p>

              <h2 className="mt-2 font-serif text-2xl tracking-[-0.02em]">
                When to visit
              </h2>

              <div className="mt-5 space-y-3">
                {restaurantInfo.openingHours.map((schedule) => (
                  <div
                    key={schedule.days}
                    className="flex items-center justify-between gap-3 border-b border-white/10 pb-2.5 text-sm last:border-0 last:pb-0"
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
        </Container>
      </section>

      {/* =====================================================
          CONTACT FORM
          ===================================================== */}

      <section className="bg-[#171412] py-20 text-[#fff7ed] sm:py-24 lg:py-32">
        <Container>

          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">

            {/* Left Content */}
            <div>

              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#e85d2a]" />

                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d9dfbd]">
                  Send a Message
                </p>
              </div>

              <h2 className="max-w-md text-5xl leading-[0.95] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
                Let's start a
                <br />
                <span className="italic text-[#e85d2a]">
                  conversation.
                </span>
              </h2>

              <p className="mt-7 max-w-sm text-base leading-7 text-[#c8c0b8] sm:text-lg sm:leading-8">
                Have a question about our menu, a private
                gathering or something else? Send us a message
                and our team will get back to you.
              </p>

              <div className="mt-10 border-t border-white/10 pt-7">
                <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                  Prefer a reservation?
                </p>

                <Link
                  to="/reservation"
                  className="
                    group
                    mt-3
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    text-white!
                    transition-colors
                    duration-200
                    hover:text-[#f47b3a]!
                  "
                >
                  <span>Reserve a Table</span>

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

            </div>

            {/* Form */}
            <div
              className="
                rounded-[28px]
                bg-white
                p-6
                text-[#171412]
                shadow-[0_20px_60px_rgba(0,0,0,0.18)]
                sm:p-10
              "
            >

              {submitted ? (
                <div className="flex min-h-115 flex-col items-center justify-center text-center">

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
                    <Check size={27} strokeWidth={2.5} />
                  </div>

                  <h3 className="mt-6 font-serif text-4xl tracking-[-0.02em]">
                    Message sent.
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-6 text-[#766e66]">
                    Thank you for reaching out to Ember & Olive.
                    Our team will get back to you soon.
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
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:bg-[#e85d2a]
                    "
                  >
                    Send another message
                  </button>

                </div>
              ) : (
                <form onSubmit={handleSubmit}>

                  <div className="grid gap-6 sm:grid-cols-2">

                    {/* Name */}
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-[#171412]"
                      >
                        Name
                      </label>

                      <input
                        id="contact-name"
                        name="name"
                        type="text"
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
                        htmlFor="contact-email"
                        className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-[#171412]"
                      >
                        Email
                      </label>

                      <input
                        id="contact-email"
                        name="email"
                        type="email"
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

                    {/* Subject */}
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="contact-subject"
                        className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-[#171412]"
                      >
                        Subject
                      </label>

                      <input
                        id="contact-subject"
                        name="subject"
                        type="text"
                        placeholder="How can we help?"
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

                    {/* Message */}
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="contact-message"
                        className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-[#171412]"
                      >
                        Message
                      </label>

                      <textarea
                        id="contact-message"
                        name="message"
                        placeholder="Tell us a little more..."
                        rows="6"
                        required
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
                    <span>Send Message</span>

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

                </form>
              )}

            </div>

          </div>

        </Container>
      </section>

      {/* =====================================================
          LOCATION CTA
          ===================================================== */}

      <section className="py-20 sm:py-24 lg:py-32">
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

            {/* Location */}
            <div
              className="
                flex
                min-h-90
                items-center
                justify-center
                bg-[#d9c5ae]
                p-8
                sm:min-h-105
              "
            >
              <div className="text-center">

                <div
                  className="
                    mx-auto
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    bg-[#171412]
                    text-[#e85d2a]!
                    shadow-[0_10px_25px_rgba(23,20,18,0.15)]
                  "
                >
                  <MapPin size={25} strokeWidth={1.8} />
                </div>

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#6b7651]">
                  Our Location
                </p>

                <h2 className="mt-3 font-serif text-4xl tracking-[-0.02em] sm:text-5xl">
                  {restaurantInfo.address.street}
                </h2>

                <p className="mt-2 text-sm text-[#766e66]">
                  {restaurantInfo.address.city},{' '}
                  {restaurantInfo.address.state}
                </p>

              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6b7651]">
                Come visit
              </p>

              <h2 className="mt-5 text-4xl leading-[1.02] tracking-tight sm:text-5xl">
                Your table is
                <br />
                <span className="italic text-[#e85d2a]">
                  waiting.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-6 text-[#766e66] sm:text-base sm:leading-7">
                Good food tastes better when shared. Bring
                someone you love and stay awhile.
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

          </div>

        </Container>
      </section>

    </main>
  )
}

export default Contact