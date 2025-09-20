import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const bookingData = req.body;

    // Normally, you’d save bookingData to a database here
    console.log("New booking received:", bookingData);

    return res.status(201).json({
      message: "Booking created successfully",
      booking: bookingData,
    });
  }

  return res.status(405).json({ message: "Method Not Allowed" });
}
