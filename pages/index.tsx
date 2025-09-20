
import { useEffect, useState } from "react";
import axios from "axios";
import Pill from "@/components/Pill";
import PropertyCard from "@/components/PropertyCard";

// ✅ Hero Section (unchanged)
const Hero = () => (
  <section
    className="bg-cover bg-center text-white p-20"
    style={{ backgroundImage: `url('/your-hero-bg.jpg')` }}
  >
    <h1 className="text-4xl font-bold mb-4">Find your favorite place here!</h1>
    <p className="text-lg">
      The best prices for over 2 million properties worldwide.
    </p>
  </section>
);

// ✅ Types for API data
interface Property {
  id: string;
  name: string;
  location: string;
  price: number;
  image: string;
  category: string[];
}

// ✅ Main Home Component
const Home = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const filters = [
    "All",
    "Top Villa",
    "Self Checkin",
    "Free WiFi",
    "Beachfront",
    "Mountain View",
  ];

  // 🔹 Fetch properties dynamically
  // useEffect(() => {
  //   const fetchProperties = async () => {
  //     try {
  //       const response = await axios.get("/api/properties"); // Replace with actual API endpoint
  //       setProperties(response.data);
  //     } catch (err) {
  //       console.error("Error fetching properties:", err);
  //       setError("Failed to load properties. Please try again.");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchProperties();
  // }, []);


  useEffect(() => {
  const fetchProperties = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/properties`
      );
      setProperties(response.data);
    } catch (err) {
      console.error("Error fetching properties:", err);
      setError("Failed to load properties. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  fetchProperties();
}, []);


  // 🔹 Filter logic stays the same
  const filteredProperties =
    selectedFilter === "All"
      ? properties
      : properties.filter((property) =>
          property.category.includes(selectedFilter)
        );

  if (loading) return <p className="text-center p-6">Loading properties...</p>;
  if (error) return <p className="text-center text-red-500 p-6">{error}</p>;

  return (
    <>
      <Hero />

      {/* Filter Pills */}
      <section className="flex flex-wrap gap-2 px-6 py-4">
        {filters.map((filter) => (
          <Pill
            key={filter}
            label={filter}
            onClick={() => setSelectedFilter(filter)}
            active={filter === selectedFilter}
          />
        ))}
      </section>

      {/* Property Listing */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <PropertyCard address={{
                  state: "",
                  city: "",
                  country: ""
              }} rating={0} offers={{
                  bed: "",
                  shower: "",
                  occupants: ""
              }} discount={""} key={property.id} {...property} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No properties found.
          </p>
        )}
      </section>
    </>
  );
};

export default Home;
