import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Temporary mock data
  const properties = [
    {
      id: "1",
      name: "Luxury Beachfront Villa",
      location: "Miami, FL",
      price: 450,
      image: "/assets/images/property1.jpg",
      category: ["Top Villa", "Beachfront"],
    },
    {
      id: "2",
      name: "Mountain Cabin Retreat",
      location: "Aspen, CO",
      price: 250,
      image: "/assets/images/property2.jpg",
      category: ["Mountain View", "Self Checkin"],
    },
    {
      id: "3",
      name: "City Apartment",
      location: "New York, NY",
      price: 300,
      image: "/assets/images/property3.jpg",
      category: ["Free WiFi", "Top Villa"],
    },
  ];

  res.status(200).json(properties);
}
