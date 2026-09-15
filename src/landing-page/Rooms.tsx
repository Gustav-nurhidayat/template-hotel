import { ArrowRight, BedDouble, Users } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { rooms } from "../data/rooms";

export default function Rooms() {
  return (
    <>
      <SEO
        title="Rooms & Suites — Aurelia Hotel & Resort"
        description="Discover elegant rooms, suites, villas, and premium accommodations at Aurelia Hotel & Resort."
        canonical="https://aureliahotel.com/rooms"
      />

      <main
        className="
          relative
          min-h-screen
          overflow-hidden
          bg-[#060605]
          text-white
        "
      >
        {/* BACKGROUND GRID */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.018]
            [background-image:linear-gradient(rgba(216,184,120,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(216,184,120,0.5)_1px,transparent_1px)]
            [background-size:64px_64px]
          "
        />

        {/* AMBIENT GLOW */}

        <div
          className="
            pointer-events-none
            absolute
            -left-40
            top-40
            h-96
            w-96
            rounded-full
            bg-[#d8b878]/[0.035]
            blur-[120px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-40
            top-[45%]
            h-96
            w-96
            rounded-full
            bg-[#d8b878]/[0.025]
            blur-[120px]
          "
        />

        {/* HEADER */}

        <section
          className="
            relative
            border-b
            border-[#2b2925]
          "
        >
          <div
            className="
              mx-auto
              max-w-7xl
              px-6
              py-32
              lg:px-10
            "
          >
            <div className="flex items-center gap-3">
              <span
                className="
                  flex
                  h-7
                  items-center
                  rounded-full
                  border
                  border-[#d8b878]/15
                  bg-[#d8b878]/[0.025]
                  px-3
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#d8b878]
                "
              >
                AURELIA / ROOMS
              </span>

              <span
                className="
                  hidden
                  h-px
                  w-12
                  bg-[#2b2925]
                  sm:block
                "
              />

              <span
                className="
                  hidden
                  text-[9px]
                  uppercase
                  tracking-[0.18em]
                  text-[#666159]
                  sm:block
                "
              >
                Rooms & Suites
              </span>
            </div>

            <h1
              className="
                mt-7
                max-w-4xl
                text-5xl
                font-light
                leading-[0.95]
                tracking-[-0.055em]
                text-[#f5efe3]
                sm:text-6xl
                lg:text-[76px]
              "
            >
              Stay somewhere

              <span
                className="
                  block
                  text-[#d8b878]
                "
              >
                worth remembering.
              </span>
            </h1>

            <div
              className="
                mt-7
                h-px
                w-20
                bg-[#d8b878]/40
              "
            />

            <p
              className="
                mt-7
                max-w-2xl
                text-sm
                leading-7
                text-[#77736d]
                sm:text-base
              "
            >
              Discover thoughtfully designed rooms and suites
              created around comfort, privacy, and the quiet
              luxury of feeling completely at home.
            </p>
          </div>
        </section>

        {/* ROOMS */}

        <section className="relative">
          <div
            className="
              mx-auto
              max-w-7xl
              px-6
              py-14
              lg:px-10
              lg:py-16
            "
          >
            <div
              className="
                mb-10
                flex
                items-end
                justify-between
                gap-6
              "
            >
              <div>
                <span
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-[#d8b878]
                  "
                >
                  Accommodation
                </span>

                <h2
                  className="
                    mt-3
                    text-2xl
                    font-light
                    tracking-[-0.03em]
                    text-[#f5efe3]
                    sm:text-3xl
                  "
                >
                  Find your perfect stay.
                </h2>
              </div>

              <span
                className="
                  hidden
                  text-[9px]
                  uppercase
                  tracking-[0.15em]
                  text-[#5f5b54]
                  sm:block
                "
              >
                {rooms.length} accommodations
              </span>
            </div>

            <div
              className="
                grid
                gap-6
                md:grid-cols-2
                lg:grid-cols-3
              "
            >
              {rooms.map((room) => (
                <article
                  key={room.slug}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[1.5rem]
                    border
                    border-[#2b2925]
                    bg-[#11100d]
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-[#d8b878]/30
                    hover:bg-[#14120e]
                    hover:shadow-[0_25px_70px_rgba(0,0,0,0.4)]
                  "
                >
                  {/* CORNER DETAILS */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      left-3
                      top-3
                      z-30
                      h-4
                      w-4
                      border-l
                      border-t
                      border-[#d8b878]/20
                      transition-all
                      duration-500
                      group-hover:h-5
                      group-hover:w-5
                      group-hover:border-[#d8b878]/60
                    "
                  />

                  <div
                    className="
                      pointer-events-none
                      absolute
                      right-3
                      top-3
                      z-30
                      h-4
                      w-4
                      border-r
                      border-t
                      border-[#d8b878]/20
                      transition-all
                      duration-500
                      group-hover:h-5
                      group-hover:w-5
                      group-hover:border-[#d8b878]/60
                    "
                  />

                  {/* IMAGE */}

                  <Link
                    to={`/rooms/${room.slug}`}
                    className="
                      relative
                      block
                      aspect-[1.25]
                      overflow-hidden
                      bg-[#080706]
                    "
                    aria-label={`View ${room.name}`}
                  >
                    <img
                      src={room.image}
                      alt={room.name}
                      className="
                        h-full
                        w-full
                        object-cover
                        brightness-[0.82]
                        transition-all
                        duration-700
                        group-hover:scale-[1.06]
                        group-hover:brightness-100
                      "
                    />

                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-[#11100d]
                        via-[#11100d]/10
                        to-transparent
                      "
                    />

                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-[radial-gradient(circle_at_50%_40%,rgba(216,184,120,0.15),transparent_60%)]
                        opacity-0
                        transition-opacity
                        duration-500
                        group-hover:opacity-100
                      "
                    />

                    <div
                      className="
                        absolute
                        bottom-4
                        left-4
                        flex
                        items-center
                        gap-2
                        rounded-lg
                        border
                        border-white/[0.08]
                        bg-black/30
                        px-3
                        py-1.5
                        backdrop-blur-md
                      "
                    >
                      <span
                        className="
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-[#d8b878]
                          shadow-[0_0_8px_rgba(216,184,120,0.8)]
                        "
                      />

                      <span
                        className="
                          text-[8px]
                          font-bold
                          uppercase
                          tracking-[0.16em]
                          text-white/60
                        "
                      >
                        {room.category}
                      </span>
                    </div>
                  </Link>

                  {/* CONTENT */}

                  <div
                    className="
                      relative
                      z-20
                      p-5
                    "
                  >
                    <h2
                      className="
                        text-[20px]
                        font-semibold
                        leading-6
                        tracking-[-0.025em]
                        text-[#f5efe3]
                        transition-colors
                        duration-300
                        group-hover:text-[#d8b878]
                      "
                    >
                      {room.name}
                    </h2>

                    <p
                      className="
                        mt-3
                        min-h-[72px]
                        text-[11px]
                        leading-6
                        text-[#77736d]
                        transition-colors
                        duration-300
                        group-hover:text-[#918c84]
                      "
                    >
                      {room.description}
                    </p>

                    <div
                      className="
                        mt-5
                        flex
                        items-center
                        gap-5
                        border-y
                        border-[#2b2925]
                        py-4
                      "
                    >
                      <div
                        className="
                          flex
                          items-center
                          gap-2
                          text-[#666159]
                        "
                      >
                        <Users className="h-3.5 w-3.5 text-[#d8b878]/70" />

                        <span
                          className="
                            text-[9px]
                            font-medium
                            uppercase
                            tracking-[0.08em]
                          "
                        >
                          {room.guests}
                        </span>
                      </div>

                      <div
                        className="
                          flex
                          items-center
                          gap-2
                          text-[#666159]
                        "
                      >
                        <BedDouble className="h-3.5 w-3.5 text-[#d8b878]/70" />

                        <span
                          className="
                            text-[9px]
                            font-medium
                            uppercase
                            tracking-[0.08em]
                          "
                        >
                          {room.size}
                        </span>
                      </div>
                    </div>

                    {/* FOOTER */}

                    <div
                      className="
                        mt-5
                        flex
                        items-center
                        justify-between
                        gap-4
                      "
                    >
                      <div>
                        <span
                          className="
                            block
                            text-[8px]
                            uppercase
                            tracking-[0.15em]
                            text-[#5f5b54]
                          "
                        >
                          Starting rate
                        </span>

                        <span
                          className="
                            mt-1
                            block
                            text-[12px]
                            font-semibold
                            text-[#d8b878]
                          "
                        >
                          {room.price} / night
                        </span>
                      </div>

                      <Link
                        to="/#contact"
                        className="
                          group/button
                          flex
                          h-9
                          items-center
                          gap-2
                          rounded-lg
                          border
                          border-[#d8b878]/20
                          bg-[#d8b878]/[0.04]
                          px-3
                          text-[8px]
                          font-bold
                          uppercase
                          tracking-[0.14em]
                          text-[#d8b878]
                          transition-all
                          duration-300
                          hover:border-[#d8b878]/40
                          hover:bg-[#d8b878]/[0.08]
                        "
                      >
                        Book

                        <ArrowRight
                          className="
                            h-3
                            w-3
                            transition-transform
                            duration-300
                            group-hover/button:translate-x-1
                          "
                        />
                      </Link>
                    </div>
                  </div>

                  {/* HOVER EDGE */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-y-5
                      left-0
                      z-40
                      w-[2px]
                      rounded-full
                      bg-[#d8b878]
                      opacity-0
                      shadow-[0_0_12px_rgba(216,184,120,0.7)]
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  />

                  {/* BOTTOM LINE */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      bottom-0
                      left-8
                      right-8
                      h-px
                      bg-gradient-to-r
                      from-transparent
                      via-[#d8b878]
                      to-transparent
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-30
                    "
                  />
                </article>
              ))}
            </div>

            {/* BOTTOM INFO */}

            <div
              className="
                relative
                mt-6
                overflow-hidden
                rounded-[1.5rem]
                border
                border-[#2b2925]
                bg-[#11100d]/70
                p-6
                backdrop-blur-xl
                sm:p-7
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute
                  right-0
                  top-0
                  h-48
                  w-48
                  rounded-full
                  bg-[#d8b878]/[0.04]
                  blur-[90px]
                "
              />

              <div
                className="
                  relative
                  flex
                  flex-col
                  gap-5
                  md:flex-row
                  md:items-center
                  md:justify-between
                "
              >
                <div>
                  <span
                    className="
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-[#d8b878]
                    "
                  >
                    A stay designed around you
                  </span>

                  <p
                    className="
                      mt-2
                      max-w-2xl
                      text-[11px]
                      leading-6
                      text-[#77736d]
                    "
                  >
                    Every room is thoughtfully prepared to give
                    you a comfortable place to rest, recharge,
                    and enjoy every moment of your stay.
                  </p>
                </div>

                <Link
                  to="/food-drink"
                  className="
                    group
                    inline-flex
                    shrink-0
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-[#d8b878]/25
                    bg-[#d8b878]/[0.04]
                    px-4
                    py-3
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-[#d8b878]
                    transition-all
                    duration-300
                    hover:border-[#d8b878]/45
                    hover:bg-[#d8b878]/[0.08]
                  "
                >
                  Explore Food & Drink

                  <ArrowRight
                    className="
                      h-3
                      w-3
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}