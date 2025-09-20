import Image from "next/image";

interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  image: string;
}

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="border rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Image
        src={property.image}
        alt={property.title}
        width={400}
        height={250}
        className="w-full h-60 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{property.title}</h3>
        <p className="text-gray-600">{property.location}</p>
        <p className="text-blue-600 font-bold">${property.price}/night</p>
      </div>
    </div>
  );
}
