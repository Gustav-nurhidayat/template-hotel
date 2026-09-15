import { useState } from "react";
import {
  ArrowRight,
  Car,
  MapPin,
  Plane,
  Navigation,
  Waves,
  Utensils,
  ShoppingBag,
  Landmark,
} from "lucide-react";

import SEO from "../components/SEO";

const nearbyPlaces = [
  {
    icon: Waves,
    distance: "5 min",
    title: "Ocean Beach",
    description:
      "A peaceful coastline for morning walks, sunset views, and relaxed afternoons.",
  },
  {
    icon: Utensils,
    distance: "3 min",
    title: "Dining District",
    description:
      "A selection of restaurants, cafés, and local culinary experiences nearby.",
  },
  {
    icon: ShoppingBag,
    distance: "8 min",
    title: "Shopping Center",
    description:
      "Boutiques, lifestyle stores, and everyday essentials within easy reach.",
  },
  {
    icon: Landmark,
    distance: "12 min",
    title: "City Attractions",
    description:
      "Discover cultural landmarks, entertainment, and the character of the city.",
  },
];

const travelOptions = [
  {
    icon: Plane,
    title: "From the Airport",
    text: "Approximately 35 minutes by car, depending on traffic conditions.",
  },
  {
    icon: Car,
    title: "By Car",
    text: "Private parking and convenient road access are available for hotel guests.",
  },
  {
    icon: Navigation,
    title: "Getting Around",
    text: "Taxis, ride-hailing services, and local transportation are readily accessible.",
  },
];

export default function Location() {
  const [activePlace, setActivePlace] = useState<string | null>(null);

  return (
    <>
      <SEO
        title="Location — CENTA Hotel & Resort"
        description="Discover the location of Centa Hotel & Resort, nearby attractions, transportation options, and everything you need to plan your stay."
        canonical="https://Centahotel.com/location"
      />

      <main className="relative overflow-hidden bg-[#0b0a08] text-[#f5efe3]">

        {/* =====================================================
            AMBIENT BACKGROUND
        ====================================================== */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute right-[-180px] top-[8%] h-[480px] w-[480px] rounded-full bg-[#d8b878]/[0.055] blur-[150px]" />

          <div className="absolute left-[-220px] top-[48%] h-[420px] w-[420px] rounded-full bg-[#d8b878]/[0.035] blur-[140px]" />

          <div
            className="
              absolute
              inset-0
              opacity-[0.025]
              [background-image:linear-gradient(rgba(216,184,120,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(216,184,120,0.4)_1px,transparent_1px)]
              [background-size:64px_64px]
            "
          />
        </div>

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative border-b border-[#2b2925]">
          <div className="mx-auto max-w-[1440px] px-6 pb-20 pt-32 sm:px-8 lg:px-10 lg:pb-28 lg:pt-40 xl:px-12">

            <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-end">

              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[#d8b878]" />

                  <span className="text-[10px] font-semibold tracking-[0.35em] text-[#d8b878]">
                    FIND YOUR WAY
                  </span>
                </div>

                <h1 className="mt-7 max-w-4xl text-5xl font-light leading-[1.02] tracking-[-0.045em] text-[#f5efe3] sm:text-6xl lg:text-[76px]">
                  A place worth
                  <span className="block text-[#d8b878]">
                    finding.
                  </span>
                </h1>
              </div>

              <div className="lg:pl-10">
                <p className="max-w-xl text-sm leading-7 text-white/45 sm:text-[15px]">
                  Perfectly positioned for quiet mornings, effortless
                  exploration, and memorable evenings. Centa Hotel &
                  Resort puts you close to the places that make your stay
                  worth remembering.
                </p>

                <div className="mt-7 flex items-center gap-3 text-xs text-white/40">
                  <MapPin className="h-4 w-4 text-[#d8b878]" />

                  <span>
                    88 Ocean View Avenue, Bali, Indonesia
                  </span>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            MAP / LOCATION PANEL
        ====================================================== */}

        <section className="relative">
          <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-10 lg:py-28 xl:px-12">

            <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">

              {/* MAP */}
              <div
                className="
                  group
                  relative
                  min-h-[460px]
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-[#2b2925]
                  bg-[#11100d]
                "
              >

                {/* Map grid */}
                <div
                  className="
                    absolute
                    inset-0
                    opacity-50
                    [background-image:linear-gradient(rgba(216,184,120,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(216,184,120,0.045)_1px,transparent_1px)]
                    [background-size:48px_48px]
                  "
                />

                {/* Roads */}
                <div className="absolute left-[12%] top-[-10%] h-[130%] w-px rotate-[24deg] bg-[#d8b878]/10" />

                <div className="absolute right-[18%] top-[-10%] h-[130%] w-px -rotate-[32deg] bg-[#d8b878]/10" />

                <div className="absolute left-[-10%] top-[52%] h-px w-[120%] rotate-[-8deg] bg-[#d8b878]/10" />

                <div className="absolute left-[-10%] top-[28%] h-px w-[120%] rotate-[17deg] bg-[#d8b878]/[0.06]" />

                {/* Water */}
                <div
                  className="
                    absolute
                    bottom-[-20%]
                    right-[-10%]
                    h-[65%]
                    w-[55%]
                    rotate-[-18deg]
                    rounded-[50%]
                    border
                    border-[#d8b878]/[0.05]
                    bg-[#d8b878]/[0.025]
                  "
                />

                {/* Map labels */}
                <span className="absolute left-[15%] top-[20%] text-[9px] font-semibold tracking-[0.2em] text-white/20">
                  CITY CENTER
                </span>

                <span className="absolute right-[16%] top-[25%] text-[9px] font-semibold tracking-[0.2em] text-white/20">
                  COASTLINE
                </span>

                <span className="absolute left-[22%] bottom-[23%] text-[9px] font-semibold tracking-[0.2em] text-white/20">
                  MARINA DISTRICT
                </span>

                {/* Hotel marker */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

                  <div className="absolute inset-[-28px] animate-ping rounded-full border border-[#d8b878]/10" />

                  <div className="absolute inset-[-14px] rounded-full border border-[#d8b878]/20" />

                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-[#d8b878]/50 bg-[#0b0a08]/95 shadow-[0_0_50px_rgba(216,184,120,0.15)] backdrop-blur-xl">
                    <MapPin className="h-6 w-6 text-[#d8b878]" />
                  </div>

                </div>

                {/* Location card */}
                <div
                  className="
                    absolute
                    bottom-6
                    left-6
                    right-6
                    flex
                    flex-col
                    gap-4
                    rounded-2xl
                    border
                    border-white/[0.07]
                    bg-[#0b0a08]/85
                    p-5
                    backdrop-blur-xl
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                  "
                >
                  <div>
                    <p className="text-[9px] font-semibold tracking-[0.3em] text-[#d8b878]">
                      CENTA HOTEL & RESORT
                    </p>

                    <p className="mt-2 text-sm text-white/60">
                      88 Ocean View Avenue, Bali, Indonesia
                    </p>
                  </div>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=88+Ocean+View+Avenue+Bali+Indonesia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      w-fit
                      items-center
                      gap-2
                      rounded-lg
                      border
                      border-[#d8b878]/30
                      px-4
                      py-2.5
                      text-[10px]
                      font-bold
                      tracking-[0.12em]
                      text-[#d8b878]
                      transition-all
                      hover:bg-[#d8b878]/[0.07]
                    "
                  >
                    GET DIRECTIONS
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>

              </div>

              {/* LOCATION INFO */}
              <div className="flex flex-col justify-between rounded-[2rem] border border-[#2b2925] bg-[#11100d] p-7 sm:p-9">

                <div>
                  <span className="text-[9px] font-semibold tracking-[0.35em] text-[#d8b878]">
                    THE LOCATION
                  </span>

                  <h2 className="mt-5 text-3xl font-light leading-tight tracking-[-0.03em] text-[#f5efe3] sm:text-4xl">
                    Close to what
                    <span className="block text-[#d8b878]">
                      matters.
                    </span>
                  </h2>

                  <p className="mt-6 text-sm leading-7 text-white/40">
                    Whether you're here to unwind, explore, dine, or
                    simply enjoy a slower pace, our location makes it
                    easy to experience more without going too far.
                  </p>
                </div>

                <div className="mt-12 border-t border-white/[0.07] pt-6">

                  <div className="flex items-start gap-4">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#d8b878]" />

                    <div>
                      <p className="text-[9px] font-semibold tracking-[0.25em] text-white/30">
                        ADDRESS
                      </p>

                      <p className="mt-2 text-sm leading-6 text-white/60">
                        88 Ocean View Avenue
                        <br />
                        Bali, Indonesia
                      </p>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            NEARBY
        ====================================================== */}

        <section className="relative border-y border-[#2b2925]">
          <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-10 lg:py-28 xl:px-12">

            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">

              <div>
                <span className="text-[9px] font-semibold tracking-[0.35em] text-[#d8b878]">
                  NEARBY
                </span>

                <h2 className="mt-5 text-4xl font-light leading-tight tracking-[-0.035em] text-[#f5efe3] sm:text-5xl">
                  Explore beyond
                  <span className="block text-[#d8b878]">
                    the hotel.
                  </span>
                </h2>

                <p className="mt-6 max-w-md text-sm leading-7 text-white/40">
                  Some of Bali's most enjoyable experiences are only
                  minutes away from your room.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">

                {nearbyPlaces.map((place) => {
                  const Icon = place.icon;
                  const isActive = activePlace === place.title;

                  return (
                    <button
                      key={place.title}
                      type="button"
                      onClick={() =>
                        setActivePlace(
                          isActive ? null : place.title
                        )
                      }
                      className={`
                        group
                        relative
                        overflow-hidden
                        rounded-2xl
                        border
                        p-6
                        text-left
                        transition-all
                        duration-500

                        ${
                          isActive
                            ? `
                              border-[#d8b878]/35
                              bg-[#d8b878]/[0.045]
                              shadow-[0_20px_60px_rgba(216,184,120,0.06)]
                            `
                            : `
                              border-[#2b2925]
                              bg-[#11100d]/70
                              hover:-translate-y-0.5
                              hover:border-[#d8b878]/20
                              hover:bg-[#15130f]
                            `
                        }
                      `}
                    >
                      <div
                        className={`
                          absolute
                          right-[-40px]
                          top-[-40px]
                          h-32
                          w-32
                          rounded-full
                          bg-[#d8b878]
                          blur-3xl
                          transition-opacity
                          ${
                            isActive
                              ? "opacity-[0.08]"
                              : "opacity-0 group-hover:opacity-[0.045]"
                          }
                        `}
                      />

                      <div className="relative flex items-start justify-between">

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#d8b878]/15 bg-[#d8b878]/[0.035]">
                          <Icon className="h-4 w-4 text-[#d8b878]" />
                        </div>

                        <span className="text-[9px] font-semibold tracking-[0.15em] text-white/25">
                          {place.distance}
                        </span>

                      </div>

                      <h3 className="relative mt-6 text-base font-medium text-[#f5efe3]">
                        {place.title}
                      </h3>

                      <p
                        className={`
                          relative
                          mt-3
                          text-xs
                          leading-6
                          transition-colors
                          duration-300
                          ${
                            isActive
                              ? "text-white/60"
                              : "text-white/35"
                          }
                        `}
                      >
                        {place.description}
                      </p>

                    </button>
                  );
                })}

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            GETTING HERE
        ====================================================== */}

        <section className="relative">
          <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-10 lg:py-28 xl:px-12">

            <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

              <div>
                <span className="text-[9px] font-semibold tracking-[0.35em] text-[#d8b878]">
                  GETTING HERE
                </span>

                <h2 className="mt-5 text-3xl font-light tracking-[-0.03em] text-[#f5efe3] sm:text-4xl">
                  Arrive with ease.
                </h2>
              </div>

              <p className="max-w-md text-sm leading-7 text-white/35">
                Simple routes, convenient transportation, and a
                location designed to make your arrival effortless.
              </p>

            </div>

            <div className="grid gap-3 md:grid-cols-3">

              {travelOptions.map((option) => {
                const Icon = option.icon;

                return (
                  <div
                    key={option.title}
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-2xl
                      border
                      border-[#2b2925]
                      bg-[#11100d]/70
                      p-7
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:border-[#d8b878]/20
                      hover:bg-[#15130f]
                    "
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#d8b878]/15 bg-[#d8b878]/[0.035]">
                      <Icon className="h-4 w-4 text-[#d8b878]" />
                    </div>

                    <h3 className="mt-6 text-base font-medium text-[#f5efe3]">
                      {option.title}
                    </h3>

                    <p className="mt-3 text-xs leading-6 text-white/35">
                      {option.text}
                    </p>

                    <div className="absolute bottom-0 left-7 right-7 h-px origin-left scale-x-0 bg-[#d8b878]/50 transition-transform duration-500 group-hover:scale-x-100" />
                  </div>
                );
              })}

            </div>

          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}

        <section className="relative border-t border-[#2b2925]">
          <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-10 lg:py-28 xl:px-12">

            <div className="relative overflow-hidden rounded-[2rem] border border-[#d8b878]/15 bg-[#11100d] px-7 py-14 text-center sm:px-12">

              <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[360px] w-[600px] -translate-x-1/2 rounded-full bg-[#d8b878]/[0.055] blur-[100px]" />

              <div className="relative">

                <span className="text-[9px] font-semibold tracking-[0.35em] text-[#d8b878]">
                  YOUR STAY AWAITS
                </span>

                <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-light leading-tight tracking-[-0.035em] text-[#f5efe3] sm:text-5xl">
                  Make the journey part of
                  <span className="text-[#d8b878]">
                    {" "}the experience.
                  </span>
                </h2>

                <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/35">
                  Everything is closer than you think. All that's left
                  is choosing when to arrive.
                </p>

                <a
                  href="/contact"
                  className="
                    group
                    mt-8
                    inline-flex
                    items-center
                    gap-3
                    rounded-lg
                    border
                    border-[#d8b878]/40
                    bg-[#d8b878]
                    px-6
                    py-3.5
                    text-[11px]
                    font-bold
                    tracking-[0.12em]
                    text-[#17130c]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-[#e2c58a]
                    hover:shadow-[0_12px_40px_rgba(216,184,120,0.2)]
                  "
                >
                  PLAN YOUR STAY

                  <ArrowRight
                    className="
                      h-3.5
                      w-3.5
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </a>

              </div>

            </div>

          </div>
        </section>

      </main>
    </>
  );
}