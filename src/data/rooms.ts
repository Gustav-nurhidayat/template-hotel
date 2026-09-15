export interface Room {
  slug: string;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  guests: string;
  size: string;
  price: string;
  amenities: string[];
}

export const rooms: Room[] = [
  {
    slug: "deluxe-room",
    name: "Deluxe Room",
    category: "DELUXE",
    description:
      "A refined and comfortable room featuring elegant interiors, modern amenities, and a relaxing atmosphere for a memorable stay.",
    longDescription:
      "The Deluxe Room combines contemporary elegance with a warm residential atmosphere. Thoughtfully designed interiors, premium bedding, and carefully selected details create a peaceful space to rest, work, or simply enjoy a slower moment.",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1800&q=85",
    guests: "2 Guests",
    size: "32 m²",
    price: "$120",
    amenities: [
      "King Bed",
      "Private Bathroom",
      "High-Speed Wi-Fi",
      "Smart TV",
      "Air Conditioning",
      "In-Room Coffee",
    ],
  },

  {
    slug: "premium-suite",
    name: "Premium Suite",
    category: "SUITE",
    description:
      "A spacious suite designed for extended stays, combining sophisticated details, generous living space, and elevated comfort.",
    longDescription:
      "The Premium Suite offers a generous living environment for guests who appreciate extra space and refined details. From the elegant bedroom to the comfortable lounge area, every element is designed around privacy, relaxation, and convenience.",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1800&q=85",
    guests: "3 Guests",
    size: "48 m²",
    price: "$180",
    amenities: [
      "King Bed",
      "Separate Living Area",
      "Rain Shower",
      "High-Speed Wi-Fi",
      "Smart TV",
      "Mini Bar",
      "In-Room Coffee",
      "24-Hour Room Service",
    ],
  },

  {
    slug: "ocean-view-suite",
    name: "Ocean View Suite",
    category: "SIGNATURE",
    description:
      "Wake up to breathtaking views and unwind in a beautifully appointed suite created for guests seeking a truly exceptional experience.",
    longDescription:
      "The Ocean View Suite is designed for guests who want the destination to become part of their stay. Floor-to-ceiling windows frame beautiful surroundings while the spacious interior provides an intimate setting for relaxing mornings and quiet evenings.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85",
    guests: "4 Guests",
    size: "65 m²",
    price: "$260",
    amenities: [
      "King Bed",
      "Ocean View",
      "Private Balcony",
      "Separate Living Area",
      "Rain Shower",
      "High-Speed Wi-Fi",
      "Smart TV",
      "Mini Bar",
      "24-Hour Room Service",
    ],
  },

  {
    slug: "family-residence",
    name: "Family Residence",
    category: "FAMILY",
    description:
      "A generous residence with thoughtful spaces for families, offering privacy, comfort, and everything needed for a relaxed getaway.",
    longDescription:
      "The Family Residence provides generous space for families and small groups. With multiple sleeping areas, a welcoming living space, and practical amenities, it offers the comfort of a private residence with the service of a premium resort.",
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1800&q=85",
    guests: "5 Guests",
    size: "78 m²",
    price: "$320",
    amenities: [
      "King Bed",
      "Twin Beds",
      "Living Area",
      "Private Bathroom",
      "High-Speed Wi-Fi",
      "Smart TV",
      "Mini Bar",
      "Dining Area",
      "24-Hour Room Service",
    ],
  },

  {
    slug: "garden-villa",
    name: "Garden Villa",
    category: "VILLA",
    description:
      "A peaceful private villa surrounded by greenery, offering an intimate retreat with elegant interiors and a sense of complete escape.",
    longDescription:
      "The Garden Villa offers a sense of privacy and calm with direct access to lush surroundings. Its spacious interior and outdoor setting make it an ideal choice for guests seeking a more secluded resort experience.",
    image:
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1800&q=85",
    guests: "2 Guests",
    size: "85 m²",
    price: "$380",
    amenities: [
      "King Bed",
      "Private Garden",
      "Private Terrace",
      "Outdoor Seating",
      "Rain Shower",
      "High-Speed Wi-Fi",
      "Smart TV",
      "Mini Bar",
      "24-Hour Room Service",
    ],
  },

  {
    slug: "presidential-suite",
    name: "Presidential Suite",
    category: "EXCLUSIVE",
    description:
      "Our most distinguished accommodation, combining expansive living spaces, refined design, and exceptional hospitality.",
    longDescription:
      "The Presidential Suite represents the highest expression of Aurelia hospitality. Generous proportions, sophisticated interiors, private spaces, and attentive service create an extraordinary environment for guests seeking the very best the resort has to offer.",
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1800&q=85",
    guests: "4 Guests",
    size: "120 m²",
    price: "$550",
    amenities: [
      "Master King Bedroom",
      "Guest Bedroom",
      "Private Living Room",
      "Dining Area",
      "Private Balcony",
      "Premium Bathroom",
      "Bathtub",
      "Mini Bar",
      "High-Speed Wi-Fi",
      "Smart TV",
      "24-Hour Room Service",
      "Private Butler Service",
    ],
  },
];