import { PropertyProps } from "@/interfaces";
import Image from "next/image";

const PropertyCard = ({ name, address, image, rating, price }: PropertyProps) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden">
    <Image
      src={image}
      alt={name}
      width={600}   // approximate width
      height={300}  // approximate height
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-sm text-gray-500">
        {address.city}, {address.country}
      </p>
      <p className="text-sm mt-2">Rating: ⭐{rating}</p>
      <p className="font-bold mt-1">${price} / night</p>
    </div>
  </div>
);

export default PropertyCard;
