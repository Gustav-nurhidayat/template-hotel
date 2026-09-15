import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa6";

import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

type HotelLink =
  | {
      name: string;
      type: "section";
      section: string;
    }
  | {
      name: string;
      type: "page";
      path: string;
    };

export default function FooterPublic() {
  const navigate = useNavigate();
  const location = useLocation();

  const hotelLinks: HotelLink[] = [
    {
      name: "About Us",
      type: "section",
      section: "about",
    },
    {
      name: "Our Rooms",
      type: "page",
      path: "/rooms",
    },
    {
      name: "Restaurant",
      type: "page",
      path: "/restaurant",
    },
    {
      name: "Café",
      type: "page",
      path: "/cafe",
    },
    {
      name: "Facilities",
      type: "section",
      section: "facilities",
    },
    {
      name: "Gallery",
      type: "section",
      section: "gallery",
    },
    {
      name: "FAQ",
      type: "section",
      section: "faq",
    },
    {
      name: "Contact",
      type: "section",
      section: "contact",
    },
  ];

  const experiences = [
    "Luxury Rooms & Suites",
    "Infinity Swimming Pool",
    "Fine Dining Restaurant",
    "Aurelia Café",
    "Complimentary Wi-Fi",
    "24/7 Front Desk",
  ];

  const handleSectionNavigation = (section: string) => {
    if (location.pathname === "/") {
      document.getElementById(section)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      return;
    }

    navigate(`/#${section}`);
  };

  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-[#2b2925]
        bg-[#0b0a08]
      "
    >
      {/* =========================================================
          AMBIENT BACKGROUND
      ========================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_15%_20%,rgba(216,184,120,0.07),transparent_30%),radial-gradient(circle_at_85%_80%,rgba(216,184,120,0.04),transparent_30%)]
        "
      />

      {/* =========================================================
          SUBTLE GRID
      ========================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(to_right,rgba(216,184,120,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(216,184,120,0.025)_1px,transparent_1px)]
          bg-[size:64px_64px]
          opacity-40
        "
      />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-[1440px]
          px-6
          py-20
          lg:px-10
          xl:px-12
        "
      >
        {/* =========================================================
            TOP CTA
        ========================================================== */}

        <div
          className="
            mb-16
            flex
            flex-col
            gap-7
            border-b
            border-[#2b2925]
            pb-14
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div>
            <span
              className="
                text-[10px]
                font-semibold
                tracking-[0.35em]
                text-[#d8b878]
              "
            >
              YOUR NEXT ESCAPE
            </span>

            <h2
              className="
                mt-4
                max-w-2xl
                text-3xl
                font-light
                leading-tight
                tracking-[-0.03em]
                text-[#f5efe3]
                sm:text-4xl
                lg:text-5xl
              "
            >
              Stay somewhere
              <span className="text-[#d8b878]">
                {" "}worth remembering.
              </span>
            </h2>
          </div>

          <button
            type="button"
            onClick={() => handleSectionNavigation("contact")}
            className="
              group
              inline-flex
              w-fit
              items-center
              gap-3
              rounded-lg
              border
              border-[#d8b878]/40
              bg-[#d8b878]
              px-6
              py-3.5
              text-xs
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
            RESERVE YOUR STAY

            <span
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </button>
        </div>

        {/* =========================================================
            MAIN GRID
        ========================================================== */}

        <div
          className="
            grid
            gap-14
            lg:grid-cols-[1.6fr_1fr_1fr]
          "
        >
          {/* =====================================================
              BRAND
          ====================================================== */}

          <div>
            <Link
              to="/"
              className="
                group
                inline-flex
                items-baseline
                gap-3
              "
            >
              <span
                className="
                  text-2xl
                  font-semibold
                  tracking-[0.16em]
                  text-[#f5efe3]
                  transition-colors
                  duration-300
                  group-hover:text-white
                  sm:text-[27px]
                "
              >
                AURELIA
              </span>

              <span
                className="
                  text-[10px]
                  font-semibold
                  tracking-[0.28em]
                  text-[#d8b878]
                  sm:text-xs
                "
              >
                HOTEL & RESORT
              </span>
            </Link>

            <p
              className="
                mt-7
                max-w-md
                text-sm
                leading-7
                text-white/45
              "
            >
              A refined hospitality experience designed
              for slow mornings, peaceful evenings, and
              unforgettable stays.
            </p>

            {/* =================================================
                LOCATION
            ================================================== */}

            <div
              className="
                mt-7
                text-xs
                leading-6
                text-white/40
              "
            >
              <p className="text-[#d8b878]">
                FIND US
              </p>

              <p className="mt-1 max-w-xs">
                88 Ocean View Avenue,
                Bali, Indonesia
              </p>
            </div>

            {/* =================================================
                SOCIAL
            ================================================== */}

            <div
              className="
                mt-7
                flex
                flex-wrap
                gap-3
              "
            >
              {/* INSTAGRAM */}

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="
                  group
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/[0.08]
                  bg-white/[0.025]
                  text-white/40
                  transition-all
                  duration-300
                  hover:border-[#d8b878]/30
                  hover:bg-[#d8b878]/[0.06]
                  hover:text-[#d8b878]
                "
              >
                <FaInstagram
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />
              </a>

              {/* FACEBOOK */}

              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="
                  group
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/[0.08]
                  bg-white/[0.025]
                  text-white/40
                  transition-all
                  duration-300
                  hover:border-[#d8b878]/30
                  hover:bg-[#d8b878]/[0.06]
                  hover:text-[#d8b878]
                "
              >
                <FaFacebookF
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />
              </a>

              {/* WHATSAPP */}

              <a
                href="https://wa.me/6280000000000"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="
                  group
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/[0.08]
                  bg-white/[0.025]
                  text-white/40
                  transition-all
                  duration-300
                  hover:border-[#d8b878]/30
                  hover:bg-[#d8b878]/[0.06]
                  hover:text-[#d8b878]
                "
              >
                <FaWhatsapp
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />
              </a>
            </div>
          </div>

          {/* =====================================================
              HOTEL
          ====================================================== */}

          <div>
            <h4
              className="
                text-[10px]
                font-semibold
                tracking-[0.35em]
                text-white/60
              "
            >
              HOTEL
            </h4>

            <ul
              className="
                mt-7
                space-y-4
              "
            >
              {hotelLinks.map((item) => (
                <li key={item.name}>
                  {item.type === "page" ? (
                    <Link
                      to={item.path}
                      className="
                        group
                        flex
                        items-center
                        gap-3
                        text-sm
                        text-white/45
                        transition-all
                        duration-300
                        hover:translate-x-1
                        hover:text-[#d8b878]
                      "
                    >
                      <span
                        className="
                          h-px
                          w-0
                          bg-[#d8b878]
                          transition-all
                          duration-300
                          group-hover:w-4
                        "
                      />

                      {item.name}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={() =>
                        handleSectionNavigation(item.section)
                      }
                      className="
                        group
                        flex
                        items-center
                        gap-3
                        text-sm
                        text-white/45
                        transition-all
                        duration-300
                        hover:translate-x-1
                        hover:text-[#d8b878]
                      "
                    >
                      <span
                        className="
                          h-px
                          w-0
                          bg-[#d8b878]
                          transition-all
                          duration-300
                          group-hover:w-4
                        "
                      />

                      {item.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* =====================================================
              EXPERIENCES
          ====================================================== */}

          <div>
            <h4
              className="
                text-[10px]
                font-semibold
                tracking-[0.35em]
                text-white/60
              "
            >
              EXPERIENCES
            </h4>

            <ul
              className="
                mt-7
                space-y-4
              "
            >
              {experiences.map((item) => (
                <li key={item}>
                  <button
                    type="button"
                    onClick={() =>
                      handleSectionNavigation("facilities")
                    }
                    className="
                      group
                      flex
                      items-center
                      gap-3
                      text-left
                      text-sm
                      text-white/45
                      transition-all
                      duration-300
                      hover:translate-x-1
                      hover:text-[#d8b878]
                    "
                  >
                    <span
                      className="
                        h-1
                        w-1
                        rounded-full
                        bg-[#d8b878]/50
                        transition-all
                        duration-300
                        group-hover:scale-150
                        group-hover:bg-[#d8b878]
                      "
                    />

                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* =========================================================
            CONTACT STRIP
        ========================================================== */}

        <div
          className="
            mt-16
            grid
            gap-4
            border-y
            border-white/[0.07]
            py-7
            sm:grid-cols-3
          "
        >
          {/* PHONE */}

          <a
            href="tel:+6280000000000"
            className="
              group
              text-sm
              text-white/45
              transition-colors
              hover:text-[#d8b878]
            "
          >
            <span
              className="
                block
                text-[9px]
                font-semibold
                tracking-[0.25em]
                text-white/30
              "
            >
              RESERVATIONS
            </span>

            <span className="mt-1 block">
              +62 800 0000 0000
            </span>
          </a>

          {/* EMAIL */}

          <a
            href="mailto:reservations@aureliahotel.com"
            className="
              group
              text-sm
              text-white/45
              transition-colors
              hover:text-[#d8b878]
            "
          >
            <span
              className="
                block
                text-[9px]
                font-semibold
                tracking-[0.25em]
                text-white/30
              "
            >
              EMAIL
            </span>

            <span className="mt-1 block">
              reservations@aureliahotel.com
            </span>
          </a>

          {/* HOURS */}

          <div
            className="
              text-sm
              text-white/45
            "
          >
            <span
              className="
                block
                text-[9px]
                font-semibold
                tracking-[0.25em]
                text-white/30
              "
            >
              FRONT DESK
            </span>

            <span className="mt-1 block">
              Available 24 hours
            </span>
          </div>
        </div>

        {/* =========================================================
            BOTTOM
        ========================================================== */}

        <div
          className="
            mt-7
            flex
            flex-col
            gap-4
            text-[11px]
            text-white/30
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p>
            © 2026 Aurelia Hotel & Resort.
            All rights reserved.
          </p>

          <div
            className="
              flex
              flex-wrap
              gap-5
            "
          >
            <button
              type="button"
              className="
                transition-colors
                hover:text-white/60
              "
            >
              Privacy Policy
            </button>

            <button
              type="button"
              className="
                transition-colors
                hover:text-white/60
              "
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}