import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  MapPin,
  Phone,
  Mail,
  Wifi,
  Waves,
  Dumbbell,
  Utensils,
  Sparkles,
  Car,
  Star,
  CalendarDays,
  Users,
  BedDouble,
} from "lucide-react";
import toast from "react-hot-toast";
import SEO from "../components/SEO";

import { sendContactMessage } from "../services/contact.service";

/* =========================================================
   HOTEL CONFIGURATION
   Change these values when selling the template
========================================================= */

const hotelConfig = {
  name: "Centa Hotel",
  location: "Jakarta, Indonesia",
  address: "Jl. Sudirman No. 88, Jakarta",
  phone: "+62 21 1234 5678",
  email: "reservation@Centahotel.com",

  tagline: "Stay somewhere worth remembering.",

  description:
    "A refined hotel experience combining thoughtful design, exceptional hospitality, and modern comfort in the heart of the city.",

  whatsapp: "6281234567890",

  instagram: "https://instagram.com/",
};

/* =========================================================
   DATA
========================================================= */

const rooms = [
  {
    name: "Deluxe Room",
    description:
      "A beautifully appointed room designed for comfortable city stays and peaceful nights.",
    price: 850000,
    size: "32 m²",
    guests: "2 Guests",
    bed: "King Bed",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Executive Suite",
    description:
      "A spacious suite offering a separate living area, refined interiors, and premium amenities.",
    price: 1450000,
    size: "48 m²",
    guests: "3 Guests",
    bed: "King Bed",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Presidential Suite",
    description:
      "An exceptional suite created for guests seeking privacy, space, and an elevated stay.",
    price: 2800000,
    size: "82 m²",
    guests: "4 Guests",
    bed: "King Bed",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85",
  },
];

const facilities = [
  {
    title: "Infinity Pool",
    description:
      "Relax and unwind beside our panoramic swimming pool.",
    icon: Waves,
  },
  {
    title: "Fine Dining",
    description:
      "Enjoy carefully crafted dishes prepared by our culinary team.",
    icon: Utensils,
  },
  {
    title: "Wellness & Spa",
    description:
      "Recharge your body and mind with our wellness experiences.",
    icon: Sparkles,
  },
  {
    title: "Fitness Center",
    description:
      "Stay active with modern equipment available throughout the day.",
    icon: Dumbbell,
  },
  {
    title: "Complimentary Wi-Fi",
    description:
      "Fast and reliable internet access throughout the property.",
    icon: Wifi,
  },
  {
    title: "Private Parking",
    description:
      "Convenient and secure parking for hotel guests.",
    icon: Car,
  },
];

const testimonials = [
  {
    name: "Daniel Morgan",
    role: "Business Traveler",
    text:
      "Beautiful property, excellent service, and an incredibly comfortable room. Everything felt thoughtfully designed.",
  },
  {
    name: "Sofia Anderson",
    role: "Leisure Guest",
    text:
      "The atmosphere was elegant without feeling cold. The staff were wonderful and the entire stay felt effortless.",
  },
  {
    name: "Michael Tan",
    role: "Frequent Traveler",
    text:
      "One of the best hotel experiences I've had in the city. The location and room quality were excellent.",
  },
];

const faqs = [
  {
    question: "What time is check-in and check-out?",
    answer:
      "Check-in starts at 14:00 and check-out is until 12:00. Early check-in and late check-out may be available depending on room availability.",
  },
  {
    question: "Does the hotel provide complimentary Wi-Fi?",
    answer:
      "Yes. Complimentary high-speed Wi-Fi is available throughout the hotel, including guest rooms and public areas.",
  },
  {
    question: "Is breakfast included?",
    answer:
      "Breakfast availability depends on the selected room package. You can see the included benefits during the reservation process.",
  },
  {
    question: "Does the hotel have parking?",
    answer:
      "Yes. Private parking is available for hotel guests.",
  },
  {
    question: "Can I request an airport transfer?",
    answer:
      "Yes. Airport transfer arrangements can be requested in advance through our reservation team.",
  },
];

/* =========================================================
   REVEAL HOOK
========================================================= */

function useReveal() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

/* =========================================================
   COMPONENT
========================================================= */

export default function HotelLandingPage() {
  const roomsReveal = useReveal();
  const facilitiesReveal = useReveal();
  const aboutReveal = useReveal();
  const offersReveal = useReveal();
  const galleryReveal = useReveal();
  const testimonialsReveal = useReveal();
  const contactReveal = useReveal();

  const [openFaq, setOpenFaq] = useState<number | null>(null);



  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "2",
    message: "",
  });

  /* =======================================================
     HASH SCROLL
  ======================================================= */

  useEffect(() => {
    const id = window.location.hash.replace("#", "");

    if (!id) return;

    const target = document.getElementById(id);

    if (target) {
      setTimeout(() => {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, []);

  /* =======================================================
     FORM
  ======================================================= */

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      await sendContactMessage({
        name: formData.name,
        email: formData.email,
        subject: `Hotel Reservation Inquiry - ${hotelConfig.name}`,
        message: `
Phone: ${formData.phone}

Check-in:
${formData.checkIn}

Check-out:
${formData.checkOut}

Guests:
${formData.guests}

Message:
${formData.message}
        `.trim(),
      });

      toast.success(
        "Your request has been sent. Our reservation team will contact you shortly."
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        checkIn: "",
        checkOut: "",
        guests: "2",
        message: "",
      });
    } catch (error: any) {
      console.error("RESERVATION ERROR:", error);

      toast.error(
        error?.response?.data?.message ??
          "Unable to send your request."
      );
    }
  };

  return (
    <>
      <SEO
        title={`${hotelConfig.name} — ${hotelConfig.tagline}`}
        description={hotelConfig.description}
        canonical="https://example.com/"
      />

      <div className="min-h-screen bg-[#0d0d0c] text-[#f4f1eb]">



        <main>

          {/* =================================================
              HERO
          ================================================= */}

          <section
            id="home"
            className="
              relative
              min-h-screen
              overflow-hidden
              scroll-mt-24
            "
          >

            <div
              className="
                absolute
                inset-0
                bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2200&q=90')]
                bg-cover
                bg-center
              "
            />

            <div className="absolute inset-0 bg-black/50" />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#0d0d0c]
                via-transparent
                to-black/20
              "
            />

            <div
              className="
                relative
                z-10
                mx-auto
                flex
                min-h-screen
                max-w-7xl
                items-center
                px-6
                pb-32
                pt-36
                sm:px-8
                lg:px-10
              "
            >

              <div className="max-w-4xl">

                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#c8a96b]" />

                  <span
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.3em]
                      text-white/75
                    "
                  >
                    Welcome to {hotelConfig.name}
                  </span>
                </div>

                <h1
                  className="
                    max-w-4xl
                    font-serif
                    text-5xl
                    font-medium
                    leading-[0.98]
                    tracking-[-0.04em]
                    text-white
                    sm:text-7xl
                    lg:text-[88px]
                  "
                >
                  Stay somewhere
                  <br />

                  <span className="italic text-[#e3d0a6]">
                    worth remembering.
                  </span>
                </h1>

                <p
                  className="
                    mt-7
                    max-w-xl
                    text-sm
                    leading-7
                    text-white/70
                    sm:text-base
                  "
                >
                  {hotelConfig.description}
                </p>

                <div className="mt-9 flex flex-wrap gap-3">

                  <a
                    href="#contact"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-lg
                      bg-[#c8a96b]
                      px-6
                      py-3.5
                      text-sm
                      font-bold
                      text-[#17130c]
                      transition
                      hover:-translate-y-0.5
                      hover:bg-[#d8bd82]
                    "
                  >
                    Reserve Your Stay

                    <ArrowRight className="h-4 w-4" />
                  </a>

                  <a
                    href="/rooms"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-lg
                      border
                      border-white/20
                      bg-white/5
                      px-6
                      py-3.5
                      text-sm
                      font-semibold
                      text-white
                      backdrop-blur-md
                      transition
                      hover:bg-white/10
                    "
                  >
                    Explore Rooms
                  </a>

                </div>

              </div>
            </div>

            {/* Hero stats */}

            <div
              className="
                absolute
                bottom-36
                right-8
                z-10
                hidden
                lg:block
              "
            >
              <div className="flex items-center gap-8">

                <div>
                  <div className="font-serif text-2xl">
                    4.9
                  </div>

                  <div className="mt-1 flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-3 w-3 fill-[#c8a96b] text-[#c8a96b]"
                      />
                    ))}
                  </div>

                  <div className="mt-1 text-[9px] uppercase tracking-wider text-white/40">
                    Guest rating
                  </div>
                </div>

                <div className="h-12 w-px bg-white/20" />

                <div>
                  <div className="font-serif text-2xl">
                    24/7
                  </div>

                  <div className="mt-1 text-[9px] uppercase tracking-wider text-white/40">
                    Guest service
                  </div>
                </div>

              </div>
            </div>

          </section>

          {/* =================================================
              BOOKING BAR
          ================================================= */}

          <section
            id="booking"
            className="
              relative
              z-20
              -mt-20
              scroll-mt-24
              px-5
              sm:px-8
              lg:px-10
            "
          >

            <div className="mx-auto max-w-6xl">

              <div
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#151514]
                  shadow-[0_25px_80px_rgba(0,0,0,0.35)]
                "
              >

                <div className="grid md:grid-cols-4">

                  <div className="border-b border-white/10 p-5 md:border-b-0 md:border-r">
                    <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-white/40">
                      <CalendarDays className="h-3.5 w-3.5" />
                      Check-in
                    </div>

                    <input
                      type="date"
                      className="
                        mt-2
                        w-full
                        bg-transparent
                        text-sm
                        text-white
                        outline-none
                      "
                    />
                  </div>

                  <div className="border-b border-white/10 p-5 md:border-b-0 md:border-r">
                    <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-white/40">
                      <CalendarDays className="h-3.5 w-3.5" />
                      Check-out
                    </div>

                    <input
                      type="date"
                      className="
                        mt-2
                        w-full
                        bg-transparent
                        text-sm
                        text-white
                        outline-none
                      "
                    />
                  </div>

                  <div className="border-b border-white/10 p-5 md:border-b-0 md:border-r">
                    <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-white/40">
                      <Users className="h-3.5 w-3.5" />
                      Guests
                    </div>

                    <select
                      className="
                        mt-2
                        w-full
                        bg-transparent
                        text-sm
                        text-white
                        outline-none
                      "
                    >
                      <option className="bg-[#151514]">
                        1 Guest
                      </option>
                      <option className="bg-[#151514]">
                        2 Guests
                      </option>
                      <option className="bg-[#151514]">
                        3 Guests
                      </option>
                      <option className="bg-[#151514]">
                        4 Guests
                      </option>
                    </select>
                  </div>

                  <a
                    href="#rooms"
                    className="
                      flex
                      min-h-[90px]
                      items-center
                      justify-center
                      gap-2
                      bg-[#c8a96b]
                      text-sm
                      font-bold
                      text-[#17130c]
                      transition
                      hover:bg-[#d8bd82]
                    "
                  >
                    Check Availability

                    <ArrowRight className="h-4 w-4" />
                  </a>

                </div>

              </div>

            </div>
          </section>

          {/* =================================================
              ROOMS
          ================================================= */}

          <section
            id="rooms"
            className="scroll-mt-24 px-6 py-28 sm:px-8 lg:px-10 lg:py-36"
          >

            <div className="mx-auto max-w-7xl">

              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">

                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c8a96b]">
                    Accommodation
                  </span>

                  <h2
                    className="
                      mt-5
                      max-w-xl
                      font-serif
                      text-4xl
                      leading-tight
                      tracking-[-0.03em]
                      sm:text-5xl
                    "
                  >
                    Rooms designed
                    <br />
                    <span className="italic text-[#c8a96b]">
                      for your comfort.
                    </span>
                  </h2>
                </div>

                <p className="max-w-md text-sm leading-7 text-white/45 lg:ml-auto">
                  From intimate rooms to spacious suites, every space
                  is thoughtfully designed to make your stay comfortable,
                  peaceful, and memorable.
                </p>

              </div>

              <div
                ref={roomsReveal.ref}
                className="mt-14 grid gap-6 lg:grid-cols-3"
              >

                {rooms.map((room, index) => (
                  <article
                    key={room.name}
                    style={{
                      transitionDelay: roomsReveal.visible
                        ? `${index * 100}ms`
                        : "0ms",
                    }}
                    className={`
                      group
                      overflow-hidden
                      rounded-2xl
                      border
                      border-white/10
                      bg-[#121211]
                      transition-all
                      duration-700
                      hover:-translate-y-1
                      hover:border-[#c8a96b]/30

                      ${
                        roomsReveal.visible
                          ? "translate-y-0 opacity-100"
                          : "translate-y-10 opacity-0"
                      }
                    `}
                  >

                    <div className="aspect-[4/3] overflow-hidden">

                      <img
                        src={room.image}
                        alt={room.name}
                        className="
                          h-full
                          w-full
                          object-cover
                          transition
                          duration-700
                          group-hover:scale-105
                        "
                      />

                    </div>

                    <div className="p-6">

                      <div className="flex items-start justify-between gap-5">

                        <div>
                          <h3 className="font-serif text-2xl">
                            {room.name}
                          </h3>

                          <p className="mt-2 text-xs leading-6 text-white/40">
                            {room.description}
                          </p>
                        </div>

                        <div className="shrink-0 text-right">

                          <div className="font-serif text-xl text-[#e3d0a6]">
                            Rp{" "}
                            {room.price.toLocaleString(
                              "id-ID"
                            )}
                          </div>

                          <div className="text-[9px] uppercase tracking-wider text-white/30">
                            per night
                          </div>

                        </div>

                      </div>

                      <div
                        className="
                          mt-6
                          flex
                          flex-wrap
                          gap-4
                          border-t
                          border-white/10
                          pt-5
                          text-[10px]
                          uppercase
                          tracking-wider
                          text-white/40
                        "
                      >
                        <span className="flex items-center gap-1.5">
                          <BedDouble className="h-3.5 w-3.5" />
                          {room.bed}
                        </span>

                        <span>
                          {room.size}
                        </span>

                        <span>
                          {room.guests}
                        </span>
                      </div>

                      <a
                        href="#booking"
                        className="
                          mt-6
                          flex
                          items-center
                          justify-center
                          gap-2
                          rounded-lg
                          border
                          border-white/10
                          px-4
                          py-3
                          text-xs
                          font-semibold
                          transition
                          hover:border-[#c8a96b]/40
                          hover:bg-[#c8a96b]/10
                        "
                      >
                        Reserve Room

                        <ArrowRight className="h-3.5 w-3.5" />
                      </a>

                    </div>

                  </article>
                ))}

              </div>

            </div>
          </section>

          {/* =================================================
              FACILITIES
          ================================================= */}

          <section
            id="facilities"
            className="
              scroll-mt-24
              border-y
              border-white/5
              bg-[#111110]
              px-6
              py-28
              sm:px-8
              lg:px-10
              lg:py-36
            "
          >

            <div className="mx-auto max-w-7xl">

              <div className="max-w-2xl">

                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c8a96b]">
                  Hotel Facilities
                </span>

                <h2 className="mt-5 font-serif text-4xl tracking-tight sm:text-5xl">
                  Everything you need,
                  <br />
                  <span className="italic text-[#c8a96b]">
                    thoughtfully provided.
                  </span>
                </h2>

              </div>

              <div
                ref={facilitiesReveal.ref}
                className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3"
              >

                {facilities.map((facility, index) => {

                  const Icon = facility.icon;

                  return (
                    <div
                      key={facility.title}
                      style={{
                        transitionDelay:
                          facilitiesReveal.visible
                            ? `${index * 80}ms`
                            : "0ms",
                      }}
                      className={`
                        group
                        bg-[#111110]
                        p-7
                        transition-all
                        duration-700
                        hover:bg-[#171716]

                        ${
                          facilitiesReveal.visible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-8 opacity-0"
                        }
                      `}
                    >

                      <Icon
                        className="
                          h-7
                          w-7
                          text-[#c8a96b]
                          transition
                          group-hover:scale-110
                        "
                      />

                      <h3 className="mt-6 font-serif text-xl">
                        {facility.title}
                      </h3>

                      <p className="mt-2 text-xs leading-6 text-white/40">
                        {facility.description}
                      </p>

                    </div>
                  );
                })}

              </div>

            </div>
          </section>

          {/* =================================================
              ABOUT
          ================================================= */}

          <section
            id="about"
            className="scroll-mt-24 px-6 py-28 sm:px-8 lg:px-10 lg:py-36"
          >

            <div
              ref={aboutReveal.ref}
              className={`
                mx-auto
                grid
                max-w-7xl
                gap-14
                lg:grid-cols-2
                lg:items-center

                transition-all
                duration-1000

                ${
                  aboutReveal.visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }
              `}
            >

              <div className="relative">

                <img
                  src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=85"
                  alt="Hotel interior"
                  className="
                    aspect-[4/5]
                    w-full
                    rounded-2xl
                    object-cover
                  "
                />

                <div
                  className="
                    absolute
                    -bottom-7
                    -right-5
                    hidden
                    w-52
                    rounded-xl
                    border
                    border-white/10
                    bg-[#151514]
                    p-5
                    shadow-2xl
                    sm:block
                  "
                >
                  <div className="font-serif text-3xl text-[#c8a96b]">
                    15+
                  </div>

                  <div className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/40">
                    Years of hospitality
                  </div>
                </div>

              </div>

              <div>

                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c8a96b]">
                  Our Story
                </span>

                <h2
                  className="
                    mt-5
                    font-serif
                    text-4xl
                    leading-tight
                    sm:text-5xl
                  "
                >
                  Hospitality with
                  <br />
                  <span className="italic text-[#c8a96b]">
                    intention.
                  </span>
                </h2>

                <p className="mt-7 text-sm leading-7 text-white/50">
                  At {hotelConfig.name}, we believe great hospitality
                  is about more than beautiful rooms. It is about
                  creating an environment where every detail feels
                  considered and every guest feels genuinely welcome.
                </p>

                <p className="mt-5 text-sm leading-7 text-white/50">
                  From the first welcome to the final morning,
                  our team is committed to delivering thoughtful
                  service, comfortable spaces, and experiences worth
                  remembering.
                </p>

                <div className="mt-8 flex items-center gap-5">

                  <div>
                    <div className="font-serif text-2xl">
                      4.9/5
                    </div>

                    <div className="mt-1 text-[9px] uppercase tracking-wider text-white/30">
                      Guest satisfaction
                    </div>
                  </div>

                  <div className="h-10 w-px bg-white/10" />

                  <div>
                    <div className="font-serif text-2xl">
                      98%
                    </div>

                    <div className="mt-1 text-[9px] uppercase tracking-wider text-white/30">
                      Returning guests
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </section>

          {/* =================================================
              OFFER
          ================================================= */}

          <section
            ref={offersReveal.ref}
            className="px-6 py-20 sm:px-8 lg:px-10"
          >

            <div
              className={`
                mx-auto
                max-w-7xl
                overflow-hidden
                rounded-3xl
                border
                border-[#c8a96b]/20
                bg-[#171512]
                transition-all
                duration-1000

                ${
                  offersReveal.visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }
              `}
            >

              <div className="grid lg:grid-cols-2">

                <div className="p-8 sm:p-12 lg:p-16">

                  <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c8a96b]">
                    Special Offer
                  </span>

                  <h2 className="mt-5 max-w-xl font-serif text-4xl leading-tight sm:text-5xl">
                    Stay longer,
                    <br />
                    <span className="italic text-[#c8a96b]">
                      experience more.
                    </span>
                  </h2>

                  <p className="mt-6 max-w-lg text-sm leading-7 text-white/45">
                    Enjoy exclusive benefits when you stay three nights
                    or more, including complimentary breakfast and
                    a late check-out subject to availability.
                  </p>

                  <a
                    href="#booking"
                    className="
                      mt-8
                      inline-flex
                      items-center
                      gap-2
                      rounded-lg
                      bg-[#c8a96b]
                      px-6
                      py-3.5
                      text-sm
                      font-bold
                      text-black
                      transition
                      hover:bg-[#d8bd82]
                    "
                  >
                    View Offer

                    <ArrowRight className="h-4 w-4" />
                  </a>

                </div>

                <div
                  className="
                    min-h-[350px]
                    bg-[url('https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1400&q=85')]
                    bg-cover
                    bg-center
                  "
                />

              </div>

            </div>
          </section>

          {/* =================================================
              GALLERY
          ================================================= */}

          <section
            id="gallery"
            className="scroll-mt-24 px-6 py-28 sm:px-8 lg:px-10 lg:py-36"
          >

            <div className="mx-auto max-w-7xl">

              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

                <div>

                  <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c8a96b]">
                    Gallery
                  </span>

                  <h2 className="mt-5 font-serif text-4xl sm:text-5xl">
                    A glimpse of
                    <br />
                    <span className="italic text-[#c8a96b]">
                      your stay.
                    </span>
                  </h2>

                </div>

                <p className="max-w-sm text-sm leading-7 text-white/40">
                  Discover the spaces, details, and atmosphere that
                  make {hotelConfig.name} unique.
                </p>

              </div>

              <div
                ref={galleryReveal.ref}
                className="mt-12 grid grid-cols-2 gap-3 lg:grid-cols-4"
              >

                {[
                  "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1000&q=85",
                  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
                  "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=85",
                  "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1000&q=85",
                  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1000&q=85",
                  "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1000&q=85",
                  "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1000&q=85",
                  "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1000&q=85",
                ].map((image, index) => (
                  <div
                    key={image}
                    style={{
                      transitionDelay:
                        galleryReveal.visible
                          ? `${index * 70}ms`
                          : "0ms",
                    }}
                    className={`
                      group
                      overflow-hidden
                      rounded-xl
                      transition-all
                      duration-700

                      ${
                        galleryReveal.visible
                          ? "scale-100 opacity-100"
                          : "scale-95 opacity-0"
                      }
                    `}
                  >

                    <img
                      src={image}
                      alt={`Hotel gallery ${index + 1}`}
                      className="
                        aspect-square
                        h-full
                        w-full
                        object-cover
                        transition
                        duration-700
                        group-hover:scale-105
                      "
                    />

                  </div>
                ))}

              </div>

            </div>
          </section>

          {/* =================================================
              TESTIMONIALS
          ================================================= */}

          <section
            ref={testimonialsReveal.ref}
            className="
              border-y
              border-white/5
              bg-[#111110]
              px-6
              py-28
              sm:px-8
              lg:px-10
              lg:py-36
            "
          >

            <div className="mx-auto max-w-7xl">

              <div className="text-center">

                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c8a96b]">
                  Guest Reviews
                </span>

                <h2 className="mt-5 font-serif text-4xl sm:text-5xl">
                  What our guests
                  <br />
                  <span className="italic text-[#c8a96b]">
                    remember.
                  </span>
                </h2>

              </div>

              <div className="mt-14 grid gap-5 lg:grid-cols-3">

                {testimonials.map((testimonial, index) => (
                  <article
                    key={testimonial.name}
                    style={{
                      transitionDelay:
                        testimonialsReveal.visible
                          ? `${index * 100}ms`
                          : "0ms",
                    }}
                    className={`
                      rounded-2xl
                      border
                      border-white/10
                      bg-[#151514]
                      p-7
                      transition-all
                      duration-700

                      ${
                        testimonialsReveal.visible
                          ? "translate-y-0 opacity-100"
                          : "translate-y-8 opacity-0"
                      }
                    `}
                  >

                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="
                            h-3.5
                            w-3.5
                            fill-[#c8a96b]
                            text-[#c8a96b]
                          "
                        />
                      ))}
                    </div>

                    <p className="mt-6 text-sm leading-7 text-white/55">
                      “{testimonial.text}”
                    </p>

                    <div className="mt-7 border-t border-white/10 pt-5">

                      <div className="text-sm font-semibold">
                        {testimonial.name}
                      </div>

                      <div className="mt-1 text-[10px] uppercase tracking-wider text-white/30">
                        {testimonial.role}
                      </div>

                    </div>

                  </article>
                ))}

              </div>

            </div>
          </section>

          {/* =================================================
              FAQ
          ================================================= */}

          <section className="px-6 py-28 sm:px-8 lg:px-10 lg:py-36">

            <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.75fr_1.25fr]">

              <div>

                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c8a96b]">
                  FAQ
                </span>

                <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
                  Questions
                  <br />
                  <span className="italic text-[#c8a96b]">
                    before your stay.
                  </span>
                </h2>

                <p className="mt-6 max-w-md text-sm leading-7 text-white/40">
                  Everything you need to know before making
                  your reservation.
                </p>

              </div>

              <div className="space-y-3">

                {faqs.map((faq, index) => {

                  const isOpen = openFaq === index;

                  return (
                    <div
                      key={faq.question}
                      className={`
                        overflow-hidden
                        rounded-xl
                        border
                        transition-all
                        duration-300

                        ${
                          isOpen
                            ? "border-[#c8a96b]/30 bg-[#171512]"
                            : "border-white/10 bg-[#121211]"
                        }
                      `}
                    >

                      <button
                        type="button"
                        onClick={() =>
                          setOpenFaq(
                            isOpen ? null : index
                          )
                        }
                        className="
                          flex
                          w-full
                          items-center
                          justify-between
                          gap-5
                          px-6
                          py-5
                          text-left
                        "
                      >

                        <div className="flex items-center gap-4">

                          <span className="text-[10px] font-bold text-[#c8a96b]">
                            0{index + 1}
                          </span>

                          <span className="text-sm font-semibold">
                            {faq.question}
                          </span>

                        </div>

                        <ChevronDown
                          className={`
                            h-4
                            w-4
                            shrink-0
                            transition
                            duration-300

                            ${
                              isOpen
                                ? "rotate-180 text-[#c8a96b]"
                                : "text-white/30"
                            }
                          `}
                        />

                      </button>

                      {isOpen && (
                        <div className="border-t border-white/10 px-6 pb-6 pt-4">

                          <p className="max-w-2xl text-sm leading-7 text-white/45">
                            {faq.answer}
                          </p>

                        </div>
                      )}

                    </div>
                  );
                })}

              </div>

            </div>
          </section>

          {/* =================================================
              CONTACT / RESERVATION
          ================================================= */}

          <section
            id="contact"
            className="
              scroll-mt-24
              border-t
              border-white/5
              bg-[#111110]
              px-6
              py-28
              sm:px-8
              lg:px-10
              lg:py-36
            "
          >

            <div className="mx-auto max-w-7xl">

              <div className="max-w-2xl">

                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c8a96b]">
                  Reservations/Booking
                </span>

                <h2 className="mt-5 font-serif text-4xl sm:text-5xl">
                  Plan your
                  <br />
                  <span className="italic text-[#c8a96b]">
                    perfect stay.
                  </span>
                </h2>

                <p className="mt-6 text-sm leading-7 text-white/45">
                  Tell us about your stay and our reservation team
                  will get back to you with availability and details.
                </p>

              </div>

              <div
                ref={contactReveal.ref}
                className="
                  mt-12
                  grid
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#151514]
                  lg:grid-cols-[1.1fr_0.9fr]
                "
              >

                {/* FORM */}

                <form
                  onSubmit={handleSubmit}
                  className="space-y-5 p-7 sm:p-9 lg:p-10"
                >

                  <div className="grid gap-5 sm:grid-cols-2">

                    <div>
                      <label
                        htmlFor="name"
                        className="text-[10px] font-semibold uppercase tracking-wider text-white/45"
                      >
                        Full Name
                      </label>

                      <input
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Smith"
                        className="
                          mt-2
                          w-full
                          rounded-lg
                          border
                          border-white/10
                          bg-black/20
                          px-4
                          py-3
                          text-sm
                          text-white
                          outline-none
                          transition
                          placeholder:text-white/20
                          focus:border-[#c8a96b]/50
                        "
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="text-[10px] font-semibold uppercase tracking-wider text-white/45"
                      >
                        Email
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="name@email.com"
                        className="
                          mt-2
                          w-full
                          rounded-lg
                          border
                          border-white/10
                          bg-black/20
                          px-4
                          py-3
                          text-sm
                          text-white
                          outline-none
                          transition
                          placeholder:text-white/20
                          focus:border-[#c8a96b]/50
                        "
                      />
                    </div>

                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">

                    <div>
                      <label
                        htmlFor="phone"
                        className="text-[10px] font-semibold uppercase tracking-wider text-white/45"
                      >
                        Phone
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+62 812..."
                        className="
                          mt-2
                          w-full
                          rounded-lg
                          border
                          border-white/10
                          bg-black/20
                          px-4
                          py-3
                          text-sm
                          text-white
                          outline-none
                          transition
                          placeholder:text-white/20
                          focus:border-[#c8a96b]/50
                        "
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="guests"
                        className="text-[10px] font-semibold uppercase tracking-wider text-white/45"
                      >
                        Guests
                      </label>

                      <select
                        id="guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleInputChange}
                        className="
                          mt-2
                          w-full
                          rounded-lg
                          border
                          border-white/10
                          bg-[#151514]
                          px-4
                          py-3
                          text-sm
                          text-white
                          outline-none
                          focus:border-[#c8a96b]/50
                        "
                      >
                        <option value="1">
                          1 Guest
                        </option>

                        <option value="2">
                          2 Guests
                        </option>

                        <option value="3">
                          3 Guests
                        </option>

                        <option value="4">
                          4 Guests
                        </option>

                        <option value="5+">
                          5+ Guests
                        </option>
                      </select>
                    </div>

                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">

                    <div>
                      <label
                        htmlFor="checkIn"
                        className="text-[10px] font-semibold uppercase tracking-wider text-white/45"
                      >
                        Check-in
                      </label>

                      <input
                        id="checkIn"
                        name="checkIn"
                        type="date"
                        value={formData.checkIn}
                        onChange={handleInputChange}
                        className="
                          mt-2
                          w-full
                          rounded-lg
                          border
                          border-white/10
                          bg-black/20
                          px-4
                          py-3
                          text-sm
                          text-white
                          outline-none
                          focus:border-[#c8a96b]/50
                        "
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="checkOut"
                        className="text-[10px] font-semibold uppercase tracking-wider text-white/45"
                      >
                        Check-out
                      </label>

                      <input
                        id="checkOut"
                        name="checkOut"
                        type="date"
                        value={formData.checkOut}
                        onChange={handleInputChange}
                        className="
                          mt-2
                          w-full
                          rounded-lg
                          border
                          border-white/10
                          bg-black/20
                          px-4
                          py-3
                          text-sm
                          text-white
                          outline-none
                          focus:border-[#c8a96b]/50
                        "
                      />
                    </div>

                  </div>

                  <div>

                    <label
                      htmlFor="message"
                      className="text-[10px] font-semibold uppercase tracking-wider text-white/45"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us anything we should know about your stay..."
                      className="
                        mt-2
                        w-full
                        resize-y
                        rounded-lg
                        border
                        border-white/10
                        bg-black/20
                        px-4
                        py-3
                        text-sm
                        leading-6
                        text-white
                        outline-none
                        placeholder:text-white/20
                        focus:border-[#c8a96b]/50
                      "
                    />

                  </div>

                  <button
                    type="submit"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-lg
                      bg-[#c8a96b]
                      px-6
                      py-3.5
                      text-sm
                      font-bold
                      text-[#17130c]
                      transition
                      hover:-translate-y-0.5
                      hover:bg-[#d8bd82]
                    "
                  >
                    Send Reservation Request

                    <ArrowRight className="h-4 w-4" />
                  </button>

                </form>

                {/* CONTACT SIDE */}

                <div className="relative overflow-hidden bg-[#0d0d0c]">

                  <div
                    className="
                      absolute
                      -right-20
                      -top-20
                      h-72
                      w-72
                      rounded-full
                      bg-[#c8a96b]/10
                      blur-[90px]
                    "
                  />

                  <div className="relative flex h-full flex-col justify-between p-8 sm:p-10">

                    <div>

                      <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c8a96b]">
                        Contact
                      </div>

                      <h3 className="mt-5 max-w-sm font-serif text-3xl">
                        We are here to make your stay effortless.
                      </h3>

                    </div>

                    <div className="mt-12 space-y-5">

                      <a
                        href={`https://wa.me/${hotelConfig.whatsapp}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-4 group"
                      >

                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                          <Phone className="h-4 w-4 text-[#c8a96b]" />
                        </div>

                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-white/30">
                            Reservations
                          </div>

                          <div className="mt-1 text-sm group-hover:text-[#c8a96b]">
                            {hotelConfig.phone}
                          </div>
                        </div>

                      </a>

                      <a
                        href={`mailto:${hotelConfig.email}`}
                        className="flex items-center gap-4 group"
                      >

                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                          <Mail className="h-4 w-4 text-[#c8a96b]" />
                        </div>

                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-white/30">
                            Email
                          </div>

                          <div className="mt-1 text-sm group-hover:text-[#c8a96b]">
                            {hotelConfig.email}
                          </div>
                        </div>

                      </a>

                      <div className="flex items-center gap-4">

                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                          <MapPin className="h-4 w-4 text-[#c8a96b]" />
                        </div>

                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-white/30">
                            Location
                          </div>

                          <div className="mt-1 text-sm">
                            {hotelConfig.address}
                          </div>
                        </div>

                      </div>

                    </div>

                    <div className="mt-12 border-t border-white/10 pt-6">

                      <div className="flex items-center gap-2">

                        <Star className="h-4 w-4 fill-[#c8a96b] text-[#c8a96b]" />

                        <span className="text-sm font-semibold">
                          4.9 / 5
                        </span>

                        <span className="text-xs text-white/30">
                          from our guests
                        </span>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>
          </section>

        </main>

      

      </div>
    </>
  );
}
