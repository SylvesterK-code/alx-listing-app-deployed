import Image from "next/image";

interface Property {
  id: string;
  name: string;
  location: string;
  price: number;
  image: string;
  category: string[];
  description: string;
}

export default function PropertyDetail({ property }: { property: Property }) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Image
        src={property.image}
        alt={property.name}
        width={800}
        height={500}
        className="rounded-2xl object-cover w-full mb-6"
      />
      <h1 className="text-3xl font-bold mb-2">{property.name}</h1>
      <p className="text-gray-600 mb-4">{property.location}</p>
      <p className="text-blue-600 font-semibold mb-4">${property.price}/night</p>
      <p className="mb-4">{property.description}</p>
      <div className="flex gap-2">
        {property.category.map((tag) => (
          <span
            key={tag}
            className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
