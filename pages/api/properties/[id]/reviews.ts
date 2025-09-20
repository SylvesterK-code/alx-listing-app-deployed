// import { NextApiRequest, NextApiResponse } from "next";

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { id } = req.query;

//   // Mock data (replace with DB call)
//   const reviews = [
//     { id: "1", user: "Alice", rating: 5, comment: "Amazing place!" },
//     { id: "2", user: "Bob", rating: 4, comment: "Great stay, will come again." },
//   ];

//   res.status(200).json(reviews);
// }



import { NextApiRequest, NextApiResponse } from "next";

interface Review {
  id: number;
  comment: string;
}

// Explicitly type as a dictionary with string keys and Review[] values
const sampleReviews: Record<string, Review[]> = {
  "1": [
    { id: 1, comment: "Great place to stay!" },
    { id: 2, comment: "Very clean and cozy." },
  ],
  "2": [
    { id: 3, comment: "Amazing location and friendly host." },
    { id: 4, comment: "Had a wonderful time!" },
  ],
  "3": [
    { id: 5, comment: "Perfect for a weekend getaway." },
  ],
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  // Ensure id exists and is a string
  const key = Array.isArray(id) ? id[0] : id;

  if (!key) {
    return res.status(400).json({ message: "Property ID is required" });
  }

  const reviews = sampleReviews[key] || [];

  res.status(200).json(reviews);
}
