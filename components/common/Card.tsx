import React from "react";
import { CardProps } from "../../interfaces";
import Image from "next/image";

const Card: React.FC<CardProps> = ({ title, image, description }) => {
  return (
    <div className="border rounded-lg shadow p-4 max-w-sm">
      <Image
        src={image}
        alt={title}
        width={400}   // pick a good width
        height={200}  // pick a good height
        className="w-full h-48 object-cover rounded-md mb-2"
      />
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
