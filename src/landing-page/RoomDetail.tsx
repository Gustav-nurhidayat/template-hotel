import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BedDouble,
  Check,
  Maximize2,
  Users,
} from "lucide-react";
import SEO from "../components/SEO";
import { rooms } from "../data/rooms";

export default function RoomDetail() {
  const { slug } = useParams<{ slug: string }>();

  const room = rooms.find((item) => item.slug === slug);

  /*
   * =====================================================
   * ROOM NOT FOUND
   * =====================================================
   */

  if (!room) {
    return (
      <main
        className="
          flex
          min-h-screen
          flex-col
          items-center
          justify-center
          bg-[#060605]
          px-6
          text-[#f5efe3]
        "
      >
        <span
          className="
            text-[10px]
            font-bold
            uppercase
            tracking-[0.25em]
            text-[#d8b878]
          "
        >
          AURELIA / ROOMS
        </span>

        <h1
          className="
            mt-5
            text-3xl
            font-semibold
            tracking-tight
            sm:text-5xl
          "
        >
          Room Not Found
        </h1>

        <p
          className="
            mt-4
            max-w-md
            text-center
            text-sm
            leading-7
            text-[#77736d]
          "
        >
          The room you're looking for could not be found.
        </p>

        <Link
          to="/rooms"
          className="
            group
            mt-8
            inline-flex
            items-center
            gap-2
            text-xs
            font-bold
            uppercase
            tracking-[0.18em]
            text-[#d8b878]
            transition-colors
            duration-300
            hover:text-[#f5efe3]
          "
        >
          <ArrowLeft
            className="
              h-3.5
              w-3.5
              transition-transform
              duration-300
              group-hover:-translate-x-1
            "
          />

          Back to Rooms
        </Link>
      </main>
    );
  }

  const seoTitle = `${room.name} — Aurelia Hotel & Resort`;

  const seoDescription =
    `${room.description} Discover ${room.name} at Aurelia Hotel & Resort.`;

  const canonicalUrl =
    `https://aureliahotel.com/rooms/${room.slug}`;

  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDescription}
        canonical={canonicalUrl}
        image={room.image}
      />

      <main
        className="
          relative
          min-h-screen
          overflow-hidden
          bg-[#060605]
          text-[#f5efe3]
        "
      >
        {/* AMBIENT BACKGROUND */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            h-[550px]
            w-[850px]
            -translate-x-1/2
            rounded-full
            bg-[#d8b878]/[0.025]
            blur-[150px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-[#d8b878]/20
            to-transparent
          "
        />

        {/* HERO */}

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
              max-w-[1440px]
              px-6
              pb-16
              pt-32
              sm:pb-20
              lg:px-10
              lg:pt-36
              xl:px-12
            "
          >
            <Link
              to="/rooms"
              className="
                group
                inline-flex
                items-center
                gap-2
                text-[10px]
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#77736d]
                transition-colors
                duration-300
                hover:text-[#d8b878]
              "
            >
              <ArrowLeft
                className="
                  h-3.5
                  w-3.5
                  transition-transform
                  duration-300
                  group-hover:-translate-x-1
                "
              />

              Back to Rooms
            </Link>

            <div
              className="
                mt-10
                grid
                gap-10
                lg:grid-cols-[1fr_0.8fr]
                lg:items-end
                lg:gap-20
              "
            >
              <div>
                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-[#d8b878]/20
                    bg-[#d8b878]/[0.035]
                    px-3.5
                    py-1.5
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#d8b878]
                  "
                >
                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-[#d8b878]
                      shadow-[0_0_8px_rgba(216,184,120,0.7)]
                    "
                  />

                  {room.category}
                </div>

                <h1
                  className="
                    mt-7
                    max-w-4xl
                    text-5xl
                    font-semibold
                    leading-[0.98]
                    tracking-[-0.045em]
                    sm:text-6xl
                    lg:text-[76px]
                  "
                >
                  {room.name}
                </h1>

                <p
                  className="
                    mt-7
                    max-w-2xl
                    text-base
                    leading-8
                    text-[#918c84]
                    sm:text-lg
                  "
                >
                  {room.description}
                </p>
              </div>

              <div
                className="
                  flex
                  flex-col
                  lg:items-end
                  lg:text-right
                "
              >
                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#666159]
                  "
                >
                  Starting from
                </span>

                <div
                  className="
                    mt-2
                    text-3xl
                    font-semibold
                    tracking-tight
                    text-[#d8b878]
                    sm:text-4xl
                  "
                >
                  {room.price}
                </div>

                <span
                  className="
                    mt-1
                    text-xs
                    text-[#666159]
                  "
                >
                  per night
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURE IMAGE */}

        <section
          className="
            relative
            mx-auto
            max-w-[1440px]
            px-6
            py-8
            sm:py-12
            lg:px-10
            xl:px-12
          "
        >
          <div
            className="
              group
              relative
              block
              aspect-[1.65]
              overflow-hidden
              bg-[#080706]
            "
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
                group-hover:scale-[1.03]
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
          </div>
        </section>

        {/* ROOM DETAILS */}

        <section
          className="
            relative
            mx-auto
            max-w-6xl
            px-6
            pb-32
            pt-10
            lg:px-10
          "
        >
          <div
            className="
              grid
              gap-14
              lg:grid-cols-[1fr_0.7fr]
              lg:gap-24
            "
          >
            {/* DESCRIPTION */}

            <div>
              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.24em]
                  text-[#d8b878]
                "
              >
                The Room
              </span>

              <h2
                className="
                  mt-5
                  text-3xl
                  font-semibold
                  tracking-[-0.035em]
                  text-[#f5efe3]
                  sm:text-4xl
                "
              >
                Designed for a better stay.
              </h2>

              <p
                className="
                  mt-7
                  max-w-2xl
                  text-[15px]
                  leading-[2]
                  text-[#918c84]
                  sm:text-base
                "
              >
                {room.longDescription}
              </p>

              {/* ROOM SPECS */}

              <div
                className="
                  mt-10
                  grid
                  grid-cols-2
                  gap-3
                  sm:grid-cols-3
                "
              >
                <div
                  className="
                    rounded-2xl
                    border
                    border-[#2b2925]
                    bg-[#11100d]
                    p-5
                  "
                >
                  <Users
                    className="
                      h-5
                      w-5
                      text-[#d8b878]
                    "
                  />

                  <span
                    className="
                      mt-4
                      block
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-[#666159]
                    "
                  >
                    Guests
                  </span>

                  <span
                    className="
                      mt-1
                      block
                      text-sm
                      font-medium
                      text-[#f5efe3]
                    "
                  >
                    {room.guests}
                  </span>
                </div>

                <div
                  className="
                    rounded-2xl
                    border
                    border-[#2b2925]
                    bg-[#11100d]
                    p-5
                  "
                >
                  <Maximize2
                    className="
                      h-5
                      w-5
                      text-[#d8b878]
                    "
                  />

                  <span
                    className="
                      mt-4
                      block
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-[#666159]
                    "
                  >
                    Room Size
                  </span>

                  <span
                    className="
                      mt-1
                      block
                      text-sm
                      font-medium
                      text-[#f5efe3]
                    "
                  >
                    {room.size}
                  </span>
                </div>

                <div
                  className="
                    col-span-2
                    rounded-2xl
                    border
                    border-[#2b2925]
                    bg-[#11100d]
                    p-5
                    sm:col-span-1
                  "
                >
                  <BedDouble
                    className="
                      h-5
                      w-5
                      text-[#d8b878]
                    "
                  />

                  <span
                    className="
                      mt-4
                      block
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-[#666159]
                    "
                  >
                    Accommodation
                  </span>

                  <span
                    className="
                      mt-1
                      block
                      text-sm
                      font-medium
                      text-[#f5efe3]
                    "
                  >
                    Premium
                  </span>
                </div>
              </div>
            </div>

            {/* AMENITIES */}

            <div>
              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.24em]
                  text-[#d8b878]
                "
              >
                Amenities
              </span>

              <div
                className="
                  mt-6
                  divide-y
                  divide-[#2b2925]
                  border-y
                  border-[#2b2925]
                "
              >
                {room.amenities.map((amenity) => (
                  <div
                    key={amenity}
                    className="
                      flex
                      items-center
                      gap-3
                      py-4
                      text-sm
                      text-[#aaa39a]
                    "
                  >
                    <Check
                      className="
                        h-4
                        w-4
                        shrink-0
                        text-[#d8b878]
                      "
                    />

                    {amenity}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* BOOKING CTA */}

          <div
            className="
              mt-20
              flex
              flex-col
              items-start
              justify-between
              gap-7
              rounded-3xl
              border
              border-[#d8b878]/20
              bg-[#11100d]
              p-7
              sm:p-9
              lg:flex-row
              lg:items-center
            "
          >
            <div>
              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#d8b878]
                "
              >
                Aurelia Hotel & Resort
              </span>

              <h3
                className="
                  mt-3
                  text-2xl
                  font-semibold
                  tracking-[-0.025em]
                  text-[#f5efe3]
                "
              >
                Make this room yours.
              </h3>

              <p
                className="
                  mt-2
                  text-sm
                  text-[#77736d]
                "
              >
                Reserve your stay and experience Aurelia hospitality.
              </p>
            </div>

            <Link
              to="/contact"
              className="
                group
                inline-flex
                shrink-0
                items-center
                gap-3
                rounded-xl
                bg-[#d8b878]
                px-6
                py-3.5
                text-xs
                font-bold
                uppercase
                tracking-[0.12em]
                text-[#17130c]
                shadow-[0_10px_35px_rgba(216,184,120,0.12)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#e2c58a]
                hover:shadow-[0_15px_45px_rgba(216,184,120,0.2)]
              "
            >
              Book This Room

              <ArrowRight
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>
          </div>

          {/* BACK */}

          <div className="mt-10">
            <Link
              to="/rooms"
              className="
                group
                inline-flex
                items-center
                gap-3
                text-xs
                font-bold
                uppercase
                tracking-[0.16em]
                text-[#77736d]
                transition-colors
                duration-300
                hover:text-[#d8b878]
              "
            >
              <ArrowLeft
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-300
                  group-hover:-translate-x-1
                "
              />

              Back to Rooms
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}