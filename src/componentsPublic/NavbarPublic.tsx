import { useEffect, useState } from "react";
import {
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  /*
   * =====================================================
   * SECTION NAVIGATION
   * =====================================================
   */

  const handleSectionClick = (section: string) => {
    setMobileMenuOpen(false);

    if (location.pathname === "/") {
      document.getElementById(section)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      return;
    }

    navigate(`/#${section}`);
  };

  /*
   * =====================================================
   * NAV LINK CLASS
   * =====================================================
   */

  const navLinkClass = (path: string) => `
    relative
    flex
    items-center
    h-full
    text-[14px]
    font-medium
    tracking-[-0.01em]
    transition-all
    duration-200

    ${
      isActive(path)
        ? "text-[#f5efe3]"
        : "text-[#aaa39a] hover:text-[#f5efe3]"
    }
  `;

  return (
    <header
      className={`
        fixed
        inset-x-0
        top-0
        z-50
        transition-all
        duration-500

        ${
          isScrolled
            ? `
              border-b
              border-[#2b2925]
              bg-[#0b0a08]/90
              shadow-[0_12px_45px_rgba(0,0,0,0.35)]
              backdrop-blur-2xl
            `
            : `
              bg-transparent
            `
        }
      `}
    >

      {/* =====================================================
          AMBIENT NAVBAR GLOW
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-24
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            left-[18%]
            top-[-5rem]
            h-32
            w-64
            rounded-full
            bg-[#d8b878]/[0.05]
            blur-3xl
          "
        />

        <div
          className="
            absolute
            right-[20%]
            top-[-6rem]
            h-36
            w-72
            rounded-full
            bg-[#d8b878]/[0.035]
            blur-3xl
          "
        />
      </div>

      {/* =====================================================
          MAIN NAVBAR CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          flex
          h-[82px]
          max-w-[1440px]
          items-center
          px-6
          lg:px-10
          xl:px-12
        "
      >

        {/* =====================================================
            BRAND — LEFT
        ====================================================== */}

        <Link
          to="/"
          className="
            group
            flex
            shrink-0
            items-baseline
            gap-3
          "
        >
          <span
            className="
              text-xl
              font-semibold
              tracking-[0.16em]
              text-[#f5efe3]
              transition-colors
              duration-300
              group-hover:text-white
              sm:text-2xl
              lg:text-[25px]
            "
          >
            CENTA
          </span>

          <span
            className="
              text-[10px]
              font-semibold
              tracking-[0.28em]
              text-[#d8b878]
              transition-colors
              duration-300
              group-hover:text-[#e4c88e]
              sm:text-xs
              lg:text-[13px]
            "
          >
            HOTEL & RESORT
          </span>
        </Link>

        {/* =====================================================
            DESKTOP CENTER NAVIGATION
        ====================================================== */}

        <nav
          className="
            absolute
            left-1/2
            top-1/2
            hidden
            h-full
            -translate-x-1/2
            -translate-y-1/2
            items-center
            gap-7
            lg:flex
          "
        >

          {/* HOME */}

          <Link
            to="/"
            className={navLinkClass("/")}
          >
            Home

            {isActive("/") && (
              <span
                className="
                  absolute
                  bottom-[17px]
                  left-1/2
                  h-[2px]
                  w-5
                  -translate-x-1/2
                  rounded-full
                  bg-[#d8b878]
                  shadow-[0_0_12px_rgba(216,184,120,0.5)]
                "
              />
            )}
          </Link>

          {/* ROOMS */}

          <Link
            to="/rooms"
            className={navLinkClass("/rooms")}
          >
            Rooms

            {isActive("/rooms") && (
              <span
                className="
                  absolute
                  bottom-[17px]
                  left-1/2
                  h-[2px]
                  w-5
                  -translate-x-1/2
                  rounded-full
                  bg-[#d8b878]
                  shadow-[0_0_12px_rgba(216,184,120,0.5)]
                "
              />
            )}
          </Link>

          {/* RESTAURANT */}

          <Link
            to="/restaurant"
            className={navLinkClass("/restaurant")}
          >
            Restaurant

            {isActive("/restaurant") && (
              <span
                className="
                  absolute
                  bottom-[17px]
                  left-1/2
                  h-[2px]
                  w-5
                  -translate-x-1/2
                  rounded-full
                  bg-[#d8b878]
                  shadow-[0_0_12px_rgba(216,184,120,0.5)]
                "
              />
            )}
          </Link>

          {/* CAFÉ */}

          <Link
            to="/cafe"
            className={navLinkClass("/cafe")}
          >
            Café

            {isActive("/cafe") && (
              <span
                className="
                  absolute
                  bottom-[17px]
                  left-1/2
                  h-[2px]
                  w-5
                  -translate-x-1/2
                  rounded-full
                  bg-[#d8b878]
                  shadow-[0_0_12px_rgba(216,184,120,0.5)]
                "
              />
            )}
          </Link>

          {/* GALLERY */}

          <button
            type="button"
            onClick={() => handleSectionClick("gallery")}
            className="
              flex
              h-full
              items-center
              border-0
              bg-transparent
              p-0
              text-[14px]
              font-medium
              tracking-[-0.01em]
              text-[#aaa39a]
              transition-colors
              duration-200
              hover:text-[#f5efe3]
            "
          >
            Gallery
          </button>

          {/* LOCATION */}

          <Link
            to="/location"
            className={navLinkClass("/location")}
          >
            Location

            {isActive("/location") && (
              <span
                className="
                  absolute
                  bottom-[17px]
                  left-1/2
                  h-[2px]
                  w-5
                  -translate-x-1/2
                  rounded-full
                  bg-[#d8b878]
                  shadow-[0_0_12px_rgba(216,184,120,0.5)]
                "
              />
            )}
          </Link>

          {/* FAQ */}

          <button
            type="button"
            onClick={() => handleSectionClick("faq")}
            className="
              flex
              h-full
              items-center
              border-0
              bg-transparent
              p-0
              text-[14px]
              font-medium
              tracking-[-0.01em]
              text-[#aaa39a]
              transition-colors
              duration-200
              hover:text-[#f5efe3]
            "
          >
            FAQ
          </button>

        </nav>

        {/* =====================================================
            DESKTOP CTA — RIGHT
        ====================================================== */}

        <div
          className="
            ml-auto
            hidden
            lg:flex
            lg:items-center
          "
        >
          <button
            type="button"
            onClick={() => handleSectionClick("contact")}
            className="
              group
              flex
              items-center
              gap-2
              rounded-lg
              border
              border-[#d8b878]/40
              bg-[#d8b878]
              px-5
              py-3
              text-[12px]
              font-bold
              tracking-[0.08em]
              text-[#17130c]
              shadow-[0_8px_30px_rgba(216,184,120,0.12)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#e2c58a]
              hover:shadow-[0_12px_40px_rgba(216,184,120,0.22)]
            "
          >
            BOOK NOW

            <ArrowRight
              className="
                h-3.5
                w-3.5
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </button>
        </div>

        {/* =====================================================
            MOBILE MENU BUTTON — RIGHT
        ====================================================== */}

        <button
          type="button"
          aria-label={
            mobileMenuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          onClick={() =>
            setMobileMenuOpen((open) => !open)
          }
          className="
            ml-auto
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-2xl
            border
            border-[#2b2925]
            bg-[#11100d]
            text-[#aaa39a]
            shadow-[0_8px_25px_rgba(0,0,0,0.25)]
            backdrop-blur-xl
            transition-all
            duration-300
            hover:border-[#d8b878]/40
            hover:bg-[#d8b878]/[0.06]
            hover:text-[#f5efe3]
            lg:hidden
          "
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>

      </div>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      <div
        className={`
          overflow-hidden
          border-t
          border-[#2b2925]
          bg-[#0b0a08]/95
          shadow-[0_20px_60px_rgba(0,0,0,0.4)]
          backdrop-blur-2xl
          transition-all
          duration-300
          lg:hidden

          ${
            mobileMenuOpen
              ? "max-h-[calc(100vh-82px)] opacity-100"
              : "max-h-0 border-t-transparent opacity-0"
          }
        `}
      >

        <nav
          className="
            mx-auto
            flex
            max-w-[1440px]
            flex-col
            gap-1.5
            px-6
            py-5
          "
        >

          {/* HOME */}

          <Link
            to="/"
            className="
              rounded-2xl
              px-4
              py-3.5
              text-[15px]
              font-medium
              text-[#aaa39a]
              transition-all
              hover:bg-[#15130f]
              hover:text-[#f5efe3]
            "
          >
            Home
          </Link>

          {/* ROOMS */}

          <Link
            to="/rooms"
            className="
              block
              w-full
              rounded-2xl
              px-4
              py-3.5
              text-[15px]
              font-medium
              text-[#aaa39a]
              transition-all
              hover:bg-[#15130f]
              hover:text-[#f5efe3]
            "
          >
            Rooms
          </Link>

          {/* RESTAURANT */}

          <Link
            to="/restaurant"
            className="
              block
              w-full
              rounded-2xl
              px-4
              py-3.5
              text-[15px]
              font-medium
              text-[#aaa39a]
              transition-all
              hover:bg-[#15130f]
              hover:text-[#f5efe3]
            "
          >
            Restaurant
          </Link>

          {/* CAFÉ */}

          <Link
            to="/cafe"
            className="
              block
              w-full
              rounded-2xl
              px-4
              py-3.5
              text-[15px]
              font-medium
              text-[#aaa39a]
              transition-all
              hover:bg-[#15130f]
              hover:text-[#f5efe3]
            "
          >
            Café
          </Link>

          {/* GALLERY */}

          <button
            type="button"
            onClick={() => handleSectionClick("gallery")}
            className="
              w-full
              rounded-2xl
              px-4
              py-3.5
              text-left
              text-[15px]
              font-medium
              text-[#aaa39a]
              transition-all
              hover:bg-[#15130f]
              hover:text-[#f5efe3]
            "
          >
            Gallery
          </button>

          {/* LOCATION */}

          <Link
            to="/location"
            className="
              block
              w-full
              rounded-2xl
              px-4
              py-3.5
              text-[15px]
              font-medium
              text-[#aaa39a]
              transition-all
              hover:bg-[#15130f]
              hover:text-[#f5efe3]
            "
          >
            Location
          </Link>

          {/* FAQ */}

          <button
            type="button"
            onClick={() => handleSectionClick("faq")}
            className="
              w-full
              rounded-2xl
              px-4
              py-3.5
              text-left
              text-[15px]
              font-medium
              text-[#aaa39a]
              transition-all
              hover:bg-[#15130f]
              hover:text-[#f5efe3]
            "
          >
            FAQ
          </button>

          {/* =================================================
              MOBILE CTA
          ================================================== */}

          <div
            className="
              mt-3
              flex
              justify-end
            "
          >
            <button
              type="button"
              onClick={() => handleSectionClick("contact")}
              className="
                group
                flex
                items-center
                justify-center
                gap-2
                rounded-lg
                border
                border-[#d8b878]/40
                bg-[#d8b878]
                px-5
                py-3
                text-[14px]
                font-bold
                tracking-[0.08em]
                text-[#17130c]
                shadow-[0_10px_35px_rgba(216,184,120,0.12)]
                transition-all
                duration-300
                hover:bg-[#e2c58a]
                hover:shadow-[0_12px_40px_rgba(216,184,120,0.2)]
              "
            >
              BOOK NOW

              <ArrowRight
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </button>
          </div>

        </nav>

      </div>

    </header>
  );
}
