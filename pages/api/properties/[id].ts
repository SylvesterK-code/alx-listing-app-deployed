import { NextApiRequest, NextApiResponse } from "next";

// Mock properties (same as pages/api/properties.ts)
const properties = [
  {
    id: "1",
    name: "Luxury Beachfront Villa",
    location: "Miami, FL",
    price: 450,
    image: "assets/images/house1.jpg",
    category: ["Top Villa", "Beachfront"],
    description: "Enjoy stunning ocean views and modern amenities in this beachfront villa.",
  },
  {
    id: "2",
    name: "Mountain Cabin Retreat",
    location: "Aspen, CO",
    price: 250,
    image: "assets/images/house2.jpg",
    category: ["Mountain View", "Self Checkin"],
    description: "A cozy cabin surrounded by breathtaking mountain scenery.",
  },
  {
    id: "3",
    name: "City Apartment",
    location: "New York, NY",
    price: 300,
    image: "assets/images/house2.jpg",
    category: ["Free WiFi", "Top Villa"],
    description: "Stay in the heart of the city with easy access to everything.",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const property = properties.find((p) => p.id === id);

  if (!property) {
    return res.status(404).json({ message: "Property not found" });
  }

  res.status(200).json(property);
}
