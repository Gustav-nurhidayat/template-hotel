import { ArrowRight, ChefHat, Clock, Utensils } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const menuCategories = [
  {
    category: "STARTERS",
    title: "To Begin",
    items: [
      {
        name: "Truffle Mushroom Soup",
        description:
          "Velvety wild mushroom soup finished with truffle oil, cream, and toasted artisan bread.",
        price: "$12",
        image:
          "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85",
      },
      {
        name: "Beef Carpaccio",
        description:
          "Thinly sliced premium beef with parmesan, arugula, olive oil, and delicate balsamic glaze.",
        price: "$16",
        image:
          "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85",
      },
      {
        name: "Burrata & Garden Tomato",
        description:
          "Creamy burrata served with heirloom tomatoes, fresh basil, olive oil, and aged balsamic.",
        price: "$14",
        image:
          "https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=1200&q=85",
      },
    ],
  },
  {
    category: "MAIN COURSE",
    title: "From Our Kitchen",
    items: [
      {
        name: "Centa Beef Tenderloin",
        description:
          "Premium beef tenderloin grilled to perfection with roasted vegetables and signature pepper sauce.",
        price: "$34",
        image:
          "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=85",
      },
      {
        name: "Grilled Atlantic Salmon",
        description:
          "Fresh salmon fillet served with seasonal vegetables, roasted potatoes, and refined herb sauce.",
        price: "$28",
        image:
          "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1200&q=85",
      },
      {
        name: "Herb Roasted Chicken",
        description:
          "Tender roasted chicken infused with herbs, served with creamy mashed potatoes and seasonal greens.",
        price: "$24",
        image:
          "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=1200&q=85",
      },
      {
        name: "Truffle Cream Pasta",
        description:
          "Handcrafted pasta with creamy truffle sauce, parmesan, and freshly ground black pepper.",
        price: "$22",
        image:
          "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1200&q=85",
      },
      {
        name: "Nasi Goreng Centa",
        description:
          "A refined Indonesian fried rice with premium ingredients, egg, chicken, and signature seasoning.",
        price: "$16",
        image:
          "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=1200&q=85",
      },
      {
        name: "Seafood Linguine",
        description:
          "Fresh prawns, calamari, and mussels tossed with linguine, tomato, garlic, and aromatic herbs.",
        price: "$26",
        image:
          "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=1200&q=85",
      },
    ],
  },
  {
    category: "DESSERT",
    title: "The Final Note",
    items: [
      {
        name: "Classic Tiramisu",
        description:
          "Layers of mascarpone cream, espresso-soaked sponge, and fine cocoa powder.",
        price: "$11",
        image:
          "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=1200&q=85",
      },
      {
        name: "Chocolate Fondant",
        description:
          "Warm dark chocolate cake with a soft center, served with vanilla ice cream.",
        price: "$12",
        image:
          "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1200&q=85",
      },
      {
        name: "Seasonal Fruit Tart",
        description:
          "Buttery pastry filled with vanilla cream and finished with carefully selected seasonal fruit.",
        price: "$10",
        image:
          "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=1200&q=85",
      },
    ],
  },
];

export default function FoodDrink() {
  return (
    <>
      <SEO
        title="Centa Restaurant — Centa Hotel & Resort"
        description="Experience refined dining at Centa Restaurant, featuring contemporary cuisine, premium ingredients, and thoughtfully crafted dishes."
        canonical="https://Centahotel.com/food-drink"
      />

      <main className="relative min-h-screen overflow-hidden bg-[#060605] text-white">
        {/* BACKGROUND */}

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
            left-[-12rem]
            top-32
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
            right-[-12rem]
            top-[45%]
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
                    CENTA / RESTAURANT
                  </span>

                  <span className="hidden h-px w-12 bg-[#2b2925] sm:block" />

                  <Utensils className="hidden h-3.5 w-3.5 text-[#666159] sm:block" />
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
                  Dining made
                  <span className="block text-[#d8b878]">
                    memorable.
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
                  Discover an elevated dining experience where
                  contemporary cuisine meets the warmth of
                  Indonesian hospitality.
                </p>
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
                <div className="aspect-[1.25] overflow-hidden sm:aspect-[1.5]">
                  <img
                    src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1800&q=85"
                    alt="Centa Restaurant"
                    className="
                      h-full
                      w-full
                      object-cover
                      brightness-[0.72]
                      transition-all
                      duration-1000
                      group-hover:scale-[1.04]
                      group-hover:brightness-[0.9]
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
                   CENTA RESTAURANT
                  </span>

                  <p className="mt-2 text-sm text-white/70">
                    Contemporary dining · Hotel & Resort
                  </p>
                </div>
              </div>
            </div>

            {/* INFO STRIP */}

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
                <ChefHat className="h-4 w-4 text-[#d8b878]" />

                <div>
                  <p className="text-[9px] uppercase tracking-[0.18em] text-[#5f5b54]">
                    Cuisine
                  </p>

                  <p className="mt-1 text-xs text-[#d9d2c5]">
                    Contemporary · Indonesian
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
                <Clock className="h-4 w-4 text-[#d8b878]" />

                <div>
                  <p className="text-[9px] uppercase tracking-[0.18em] text-[#5f5b54]">
                    Opening Hours
                  </p>

                  <p className="mt-1 text-xs text-[#d9d2c5]">
                    06:30 — 23:00
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 py-5 sm:px-6">
                <Utensils className="h-4 w-4 text-[#d8b878]" />

                <div>
                  <p className="text-[9px] uppercase tracking-[0.18em] text-[#5f5b54]">
                    Dress Code
                  </p>

                  <p className="mt-1 text-xs text-[#d9d2c5]">
                    Smart Casual
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            MENU
        ====================================================== */}

        <section className="relative">
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
            {/* MENU INTRO */}

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
                  The Menu
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
                  Crafted with
                  <span className="block text-[#d8b878]">
                    intention.
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
                Every dish is prepared using carefully selected
                ingredients and presented with a balance of
                contemporary technique and familiar flavors.
              </p>
            </div>

            {/* MENU CATEGORIES */}

            <div className="space-y-24">
              {menuCategories.map((section) => (
                <section key={section.category}>
                  {/* CATEGORY HEADER */}

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
                        {section.category}
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
                        {section.title}
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
                      CENTA Restaurant
                    </span>
                  </div>

                  {/* MENU CARDS */}

                  <div
                    className="
                      grid
                      gap-6
                      sm:grid-cols-2
                      lg:grid-cols-3
                    "
                  >
                    {section.items.map((item) => (
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
                        {/* FOOD IMAGE */}

                        <div className="relative aspect-[1.15] overflow-hidden">
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

                          {/* PRICE */}

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

                        {/* FOOD INFO */}

                        <div className="p-5">
                          <div className="flex items-start justify-between gap-4">
                            <h4
                              className="
                                text-base
                                font-semibold
                                tracking-[-0.015em]
                                text-[#f5efe3]
                                transition-colors
                                duration-300
                                group-hover:text-[#d8b878]
                              "
                            >
                              {item.name}
                            </h4>
                          </div>

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
                              Centa Kitchen
                            </span>

                            <span
                              className="
                                h-1
                                w-1
                                rounded-full
                                bg-[#d8b878]/50
                              "
                            />
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {/* =================================================
                CHEF MESSAGE
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
                  right-0
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
                  lg:grid-cols-[1fr_1.4fr]
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
                    From Our Kitchen
                  </span>

                  <h3
                    className="
                      mt-4
                      text-3xl
                      font-light
                      tracking-[-0.04em]
                      text-[#f5efe3]
                      sm:text-4xl
                    "
                  >
                    Simple ingredients.
                    <span className="block text-[#d8b878]">
                      Serious craft.
                    </span>
                  </h3>
                </div>

                <div className="lg:pl-10">
                  <p
                    className="
                      max-w-2xl
                      text-sm
                      leading-8
                      text-[#918c84]
                    "
                  >
                    At CENTA Restaurant, we believe memorable
                    dining does not need unnecessary complexity.
                    Great ingredients, thoughtful preparation,
                    precise technique, and genuine hospitality
                    are at the heart of every plate we serve.
                  </p>

                  <div className="mt-7 flex items-center gap-3">
                    <div className="h-px w-10 bg-[#d8b878]/40" />

                    <span
                      className="
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.2em]
                        text-[#d8b878]
                      "
                    >
                      Centa Culinary Team
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                RESERVATION CTA
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
                  Centa Restaurant
                </span>

                <h3
                  className="
                    mt-2
                    text-2xl
                    font-light
                    text-[#f5efe3]
                  "
                >
                  Reserve your table.
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
                Reserve a Table

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