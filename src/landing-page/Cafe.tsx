import {
  ArrowRight,
  Coffee,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const coffeeMenu = [
  {
    name: "Aurelia Signature Coffee",
    description:
      "Our signature house blend with balanced notes of chocolate, caramel, and roasted nuts.",
    price: "$7",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Café Latte",
    description:
      "Smooth espresso blended with steamed milk and finished with a delicate layer of foam.",
    price: "$6",
    image:
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Cappuccino",
    description:
      "Rich espresso combined with velvety steamed milk and a generous layer of milk foam.",
    price: "$6",
    image:
      "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Iced Caramel Coffee",
    description:
      "Cold espresso, creamy milk, and subtle caramel served over ice for a refreshing afternoon.",
    price: "$7",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1200&q=85",
  },
];

const nonCoffeeMenu = [
  {
    name: "Matcha Latte",
    description:
      "Premium Japanese-style matcha combined with smooth steamed milk for a rich and balanced drink.",
    price: "$7",
    image:
      "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Chocolate Velvet",
    description:
      "Rich dark chocolate blended with steamed milk for a smooth and indulgent café classic.",
    price: "$7",
    image:
      "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Iced Lemon Tea",
    description:
      "Freshly brewed tea with bright citrus notes, lemon, and a touch of natural sweetness.",
    price: "$5",
    image:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Tropical Iced Tea",
    description:
      "Refreshing black tea infused with tropical fruit and served chilled over ice.",
    price: "$6",
    image:
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=85",
  },
];

const pastryMenu = [
  {
    name: "Butter Croissant",
    description:
      "Freshly baked French-style croissant with a crisp exterior and delicate buttery layers.",
    price: "$5",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Chocolate Danish",
    description:
      "Flaky pastry filled with rich chocolate and finished with a delicate golden crust.",
    price: "$6",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Classic Tiramisu",
    description:
      "Mascarpone cream, espresso-soaked sponge, and fine cocoa layered into an Italian classic.",
    price: "$8",
    image:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Basque Cheesecake",
    description:
      "Creamy baked cheesecake with a caramelized top and soft, rich center.",
    price: "$9",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1200&q=85",
  },
];

const lightBites = [
  {
    name: "Avocado Toast",
    description:
      "Sourdough toast topped with creamy avocado, herbs, poached egg, and a touch of olive oil.",
    price: "$11",
    image:
      "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Chicken Croissant",
    description:
      "Buttery croissant filled with tender chicken, fresh greens, and a light house dressing.",
    price: "$12",
    image:
      "https://images.unsplash.com/photo-1550507992-eb63ffee0847?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Aurelia Club Sandwich",
    description:
      "Toasted artisan bread layered with chicken, lettuce, tomato, egg, and signature sauce.",
    price: "$14",
    image:
      "https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?auto=format&fit=crop&w=1200&q=85",
  },
];

function MenuSection({
  label,
  title,
  items,
}: {
  label: string;
  title: string;
  items: {
    name: string;
    description: string;
    price: string;
    image: string;
  }[];
}) {
  return (
    <section>
      <div
        className="
          mb-8
          flex
          items-end
          justify-between
          gap-6
          border-b
          border-[#2b2925]
          pb-5
        "
      >
        <div>
          <span
            className="
              text-[9px]
              font-bold
              uppercase
              tracking-[0.25em]
              text-[#d8b878]
            "
          >
            {label}
          </span>

          <h3
            className="
              mt-2
              text-2xl
              font-light
              tracking-[-0.025em]
              text-[#f5efe3]
              sm:text-3xl
            "
          >
            {title}
          </h3>
        </div>

        <span
          className="
            hidden
            text-[8px]
            uppercase
            tracking-[0.18em]
            text-[#5f5b54]
            sm:block
          "
        >
          Aurelia Café
        </span>
      </div>

      <div
        className="
          grid
          gap-6
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
        "
      >
        {items.map((item) => (
          <article
            key={item.name}
            className="
              group
              overflow-hidden
              rounded-[1.25rem]
              border
              border-[#2b2925]
              bg-[#0d0c0a]
              transition-all
              duration-500
              hover:-translate-y-1
              hover:border-[#d8b878]/25
            "
          >
            {/* IMAGE */}

            <div className="relative aspect-[1.1] overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className="
                  h-full
                  w-full
                  object-cover
                  brightness-[0.76]
                  transition-all
                  duration-700
                  group-hover:scale-[1.07]
                  group-hover:brightness-[0.95]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#0d0c0a]
                  via-transparent
                  to-transparent
                "
              />

              <div
                className="
                  absolute
                  right-4
                  top-4
                  rounded-full
                  border
                  border-[#d8b878]/25
                  bg-[#060605]/80
                  px-3
                  py-1.5
                  backdrop-blur-md
                "
              >
                <span className="text-xs font-semibold text-[#d8b878]">
                  {item.price}
                </span>
              </div>
            </div>

            {/* CONTENT */}

            <div className="p-5">
              <h4
                className="
                  text-sm
                  font-semibold
                  text-[#f5efe3]
                  transition-colors
                  duration-300
                  group-hover:text-[#d8b878]
                "
              >
                {item.name}
              </h4>

              <p
                className="
                  mt-3
                  text-[11px]
                  leading-6
                  text-[#77736d]
                "
              >
                {item.description}
              </p>

              <div className="mt-5 h-px bg-[#2b2925]" />

              <div className="mt-4 flex items-center justify-between">
                <span
                  className="
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-[#5f5b54]
                  "
                >
                  Café Selection
                </span>

                <span className="h-1 w-1 rounded-full bg-[#d8b878]/50" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function Cafe() {
  return (
    <>
      <SEO
        title="Aurelia Café — Aurelia Hotel & Resort"
        description="Relax at Aurelia Café with handcrafted coffee, refreshing beverages, freshly baked pastries, desserts, and light bites."
        canonical="https://aureliahotel.com/cafe"
      />

      <main className="relative min-h-screen overflow-hidden bg-[#060605] text-white">
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

        <div
          className="
            pointer-events-none
            absolute
            -left-40
            top-40
            h-[30rem]
            w-[30rem]
            rounded-full
            bg-[#d8b878]/[0.035]
            blur-[130px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-40
            top-[55%]
            h-[30rem]
            w-[30rem]
            rounded-full
            bg-[#d8b878]/[0.025]
            blur-[130px]
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
            via-[#d8b878]/30
            to-transparent
          "
        />

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative border-b border-[#2b2925]">
          <div
            className="
              mx-auto
              max-w-7xl
              px-6
              pb-20
              pt-32
              sm:px-8
              sm:pb-24
              lg:px-10
              lg:pb-28
            "
          >
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              {/* TITLE */}

              <div>
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
                    AURELIA / CAFÉ
                  </span>

                  <span className="hidden h-px w-12 bg-[#2b2925] sm:block" />

                  <Coffee className="hidden h-3.5 w-3.5 text-[#666159] sm:block" />
                </div>

                <h1
                  className="
                    mt-7
                    text-5xl
                    font-light
                    leading-[0.92]
                    tracking-[-0.06em]
                    text-[#f5efe3]
                    sm:text-6xl
                    lg:text-[78px]
                  "
                >
                  Slow down.
                  <span className="block text-[#d8b878]">
                    Stay awhile.
                  </span>
                </h1>

                <div className="mt-8 h-px w-20 bg-[#d8b878]/40" />

                <p
                  className="
                    mt-7
                    max-w-xl
                    text-sm
                    leading-7
                    text-[#77736d]
                    sm:text-base
                  "
                >
                  A warm and intimate café at Aurelia Hotel &
                  Resort, created for slow mornings, relaxed
                  conversations, and good coffee at any hour.
                </p>

                <Link
                  to="#menu"
                  className="
                    group
                    mt-7
                    inline-flex
                    items-center
                    gap-3
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-[#d8b878]
                  "
                >
                  Explore the menu

                  <ArrowRight
                    className="
                      h-3.5
                      w-3.5
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </Link>
              </div>

              {/* HERO IMAGE */}

              <div
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[1.5rem]
                  border
                  border-[#2b2925]
                  bg-[#11100d]
                "
              >
                <div className="aspect-[1.2] overflow-hidden sm:aspect-[1.45]">
                  <img
                    src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1800&q=85"
                    alt="Aurelia Café interior"
                    className="
                      h-full
                      w-full
                      object-cover
                      brightness-[0.68]
                      transition-all
                      duration-1000
                      group-hover:scale-[1.04]
                      group-hover:brightness-[0.88]
                    "
                  />
                </div>

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#060605]
                    via-transparent
                    to-transparent
                  "
                />

                <div className="absolute bottom-6 left-6">
                  <span
                    className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-[#d8b878]
                    "
                  >
                    AURELIA CAFÉ
                  </span>

                  <p className="mt-2 text-sm text-white/70">
                    Coffee · Pastry · Light Bites
                  </p>
                </div>
              </div>
            </div>

            {/* INFO */}

            <div
              className="
                mt-12
                grid
                border-y
                border-[#2b2925]
                sm:grid-cols-3
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-4
                  border-b
                  border-[#2b2925]
                  py-5
                  sm:border-b-0
                  sm:border-r
                  sm:px-6
                "
              >
                <Coffee className="h-4 w-4 text-[#d8b878]" />

                <div>
                  <p className="text-[9px] uppercase tracking-[0.18em] text-[#5f5b54]">
                    Specialty
                  </p>

                  <p className="mt-1 text-xs text-[#d9d2c5]">
                    Specialty Coffee
                  </p>
                </div>
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-4
                  border-b
                  border-[#2b2925]
                  py-5
                  sm:border-b-0
                  sm:border-r
                  sm:px-6
                "
              >
                <ClockIcon />

                <div>
                  <p className="text-[9px] uppercase tracking-[0.18em] text-[#5f5b54]">
                    Opening Hours
                  </p>

                  <p className="mt-1 text-xs text-[#d9d2c5]">
                    06:00 — 22:00
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 py-5 sm:px-6">
                <MapPin className="h-4 w-4 text-[#d8b878]" />

                <div>
                  <p className="text-[9px] uppercase tracking-[0.18em] text-[#5f5b54]">
                    Location
                  </p>

                  <p className="mt-1 text-xs text-[#d9d2c5]">
                    Hotel Lobby
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            MENU
        ====================================================== */}

        <section id="menu" className="relative">
          <div
            className="
              mx-auto
              max-w-7xl
              px-6
              py-20
              sm:px-8
              sm:py-24
              lg:px-10
              lg:py-28
            "
          >
            <div className="mb-16 grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
              <div>
                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.28em]
                    text-[#d8b878]
                  "
                >
                  Café Menu
                </span>

                <h2
                  className="
                    mt-4
                    text-4xl
                    font-light
                    leading-none
                    tracking-[-0.045em]
                    text-[#f5efe3]
                    sm:text-5xl
                  "
                >
                  Brewed with
                  <span className="block text-[#d8b878]">
                    character.
                  </span>
                </h2>
              </div>

              <p
                className="
                  max-w-xl
                  text-sm
                  leading-7
                  text-[#77736d]
                  lg:pl-16
                "
              >
                From carefully brewed coffee to freshly baked
                pastries and comforting light bites, our menu is
                designed to make ordinary moments feel a little
                more special.
              </p>
            </div>

            <div className="space-y-24">
              <MenuSection
                label="Coffee"
                title="From the Bar"
                items={coffeeMenu}
              />

              <MenuSection
                label="Non-Coffee"
                title="Beyond Coffee"
                items={nonCoffeeMenu}
              />

              <MenuSection
                label="Pastry & Dessert"
                title="Freshly Baked"
                items={pastryMenu}
              />

              <MenuSection
                label="Light Bites"
                title="Something to Eat"
                items={lightBites}
              />
            </div>

            {/* =================================================
                CAFÉ EXPERIENCE
            ================================================== */}

            <div
              className="
                relative
                mt-24
                overflow-hidden
                rounded-[1.5rem]
                border
                border-[#d8b878]/15
                bg-[#11100d]
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute
                  left-0
                  top-0
                  h-72
                  w-72
                  rounded-full
                  bg-[#d8b878]/[0.035]
                  blur-[100px]
                "
              />

              <div
                className="
                  relative
                  grid
                  gap-10
                  p-7
                  sm:p-10
                  lg:grid-cols-[1fr_1.2fr]
                  lg:p-14
                "
              >
                <div>
                  <span
                    className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.24em]
                      text-[#d8b878]
                    "
                  >
                    The Aurelia Experience
                  </span>

                  <h3
                    className="
                      mt-4
                      text-3xl
                      font-light
                      leading-tight
                      tracking-[-0.04em]
                      text-[#f5efe3]
                      sm:text-4xl
                    "
                  >
                    More than
                    <span className="block text-[#d8b878]">
                      just coffee.
                    </span>
                  </h3>
                </div>

                <div className="lg:pl-10">
                  <p
                    className="
                      text-sm
                      leading-8
                      text-[#918c84]
                    "
                  >
                    Aurelia Café is designed as a quiet corner
                    within the resort. Come in after breakfast,
                    settle into a comfortable seat, meet someone
                    for an afternoon conversation, or simply enjoy
                    a cup of coffee without rushing anywhere.
                  </p>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <span
                      className="
                        rounded-full
                        border
                        border-[#2b2925]
                        px-4
                        py-2
                        text-[9px]
                        uppercase
                        tracking-[0.16em]
                        text-[#77736d]
                      "
                    >
                      Slow Mornings
                    </span>

                    <span
                      className="
                        rounded-full
                        border
                        border-[#2b2925]
                        px-4
                        py-2
                        text-[9px]
                        uppercase
                        tracking-[0.16em]
                        text-[#77736d]
                      "
                    >
                      Afternoon Coffee
                    </span>

                    <span
                      className="
                        rounded-full
                        border
                        border-[#2b2925]
                        px-4
                        py-2
                        text-[9px]
                        uppercase
                        tracking-[0.16em]
                        text-[#77736d]
                      "
                    >
                      Evening Desserts
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                CTA
            ================================================== */}

            <div
              className="
                mt-10
                flex
                flex-col
                gap-6
                border-t
                border-[#2b2925]
                pt-10
                sm:flex-row
                sm:items-center
                sm:justify-between
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
                  Aurelia Café
                </span>

                <h3
                  className="
                    mt-2
                    text-2xl
                    font-light
                    text-[#f5efe3]
                  "
                >
                  Take a slower moment.
                </h3>
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
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.14em]
                  text-[#17130c]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#e2c58a]
                "
              >
                Visit Aurelia Café

                <ArrowRight
                  className="
                    h-3.5
                    w-3.5
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4 text-[#d8b878]"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}